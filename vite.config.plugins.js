import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import { root, camelCase, getBaseConfig } from './vite.config.base.js'

const pluginsDir = resolve(root, 'src/js/control_plugins')

function getEntries() {
  const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'))
  const entries = {}
  for (const file of files) {
    const name = file.replace(/\.js$/, '')
    entries[`dist/control_plugins/${name}`] = resolve(pluginsDir, file)
  }
  return entries
}

export default defineConfig({
  ...getBaseConfig(),
  build: {
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: getEntries(),
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['jquery'],
      output: {
        entryFileNames: '[name].min.js',
        name: chunk => `jQuery${camelCase(chunk.name.replace(/^dist\/control_plugins\//, ''))}`,
        globals: { jquery: 'jQuery' },
        banner: chunk => `(function ($) { "use strict";\n`,
        footer: () => '\n})(jQuery);',
      },
    },
  },
})
