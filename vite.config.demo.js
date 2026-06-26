import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import langFiles from 'formbuilder-languages'
import { root, getBaseConfig } from './vite.config.base.js'

const langOptions = Object.entries(langFiles).map(([locale, data]) => ({
  locale,
  nativeName: data.NATIVE_NAME,
}))

const isDev = process.env.NODE_ENV !== 'production'

function serveDemoAtRootPlugin() {
  return {
    name: 'serve-demo-at-root',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use('/', (req, res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          req.url = '/src/demo/index.html'
        }
        next()
      })
    },
  }
}

function moveDemoHtmlPlugin() {
  return {
    name: 'move-demo-html',
    writeBundle() {
      const src = resolve(root, 'demo/src/demo/index.html')
      const dest = resolve(root, 'demo/index.html')
      if (fs.existsSync(src)) {
        fs.mkdirSync(resolve(root, 'demo'), { recursive: true })
        let html = fs.readFileSync(src, 'utf8')
        html = html.replace(/src=\"\.\.\/\.\.\/assets\//g, 'src="assets/')
        html = html.replace(/href=\"\.\.\/\.\.\/assets\//g, 'href="assets/')
        fs.writeFileSync(dest, html)
        fs.rmSync(resolve(root, 'demo/src'), { recursive: true, force: true })
      }
    },
  }
}

export default defineConfig({
  ...getBaseConfig(),
  root,
  base: './',
  publicDir: false,
  build: {
    outDir: resolve(root, 'demo'),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(root, 'src/demo/index.html'),
      output: {
        entryFileNames: 'assets/js/demo.min.js',
        assetFileNames: 'assets/css/[name][extname]',
      },
    },
  },
  plugins: [
    {
      name: 'demo-html',
      transformIndexHtml(html) {
        const optionsHtml = langOptions
          .map(({ locale, nativeName }) => `          <option value="${locale}">${nativeName}</option>`)
          .join('\n')

        return html
          .replace('<!-- LANG_OPTIONS -->', optionsHtml)
          .replace(
            '<!-- VENDOR_SCRIPT -->',
            `<script type="text/javascript" src="${isDev ? '/demo/assets/js/vendor.js' : 'assets/js/vendor.js'}"></script>`,
          )
          .replace(
            '<!-- FORM_BUILDER_SCRIPT -->',
            isDev
              ? '<script type="module" src="/src/js/form-builder.js"></script>'
              : '<script type="text/javascript" src="assets/js/form-builder.min.js"></script>',
          )
          .replace(
            '<!-- FORM_RENDER_SCRIPT -->',
            isDev
              ? '<script type="module" src="/src/js/form-render.js"></script>'
              : '<script type="text/javascript" src="assets/js/form-render.min.js"></script>',
          )
      },
    },
    serveDemoAtRootPlugin(),
    moveDemoHtmlPlugin(),
  ],
})
