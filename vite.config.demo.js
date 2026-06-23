import { defineConfig } from 'vite'
import { resolve } from 'path'
import langFiles from 'formbuilder-languages'
import { root, getBaseConfig } from './vite.config.base.js'

const langOptions = Object.entries(langFiles).map(([locale, data]) => ({
  locale,
  nativeName: data.NATIVE_NAME,
}))

const isDev = process.env.NODE_ENV !== 'production'

export default defineConfig({
  ...getBaseConfig(),
  root,
  publicDir: 'demo',
  build: {
    outDir: resolve(root, 'demo'),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(root, 'src/demo/index.html'),
      output: {
        entryFileNames: 'assets/js/demo.min.js',
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
            'FORM_BUILDER_SCRIPT',
            isDev ? '/src/js/form-builder.js' : 'assets/js/form-builder.min.js',
          )
          .replace(
            'FORM_RENDER_SCRIPT',
            isDev ? '/src/js/form-render.js' : 'assets/js/form-render.min.js',
          )
          .replace('DEMO_SCRIPT', isDev ? '/src/demo/js/demo.js' : 'assets/js/demo.min.js')
      },
    },
  ],
})
