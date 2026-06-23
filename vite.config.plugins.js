import { defineConfig } from 'vite'
import { resolve } from 'path'
import { camelCase, getBaseConfig } from './vite.config.base.js'

const root = resolve(__dirname)
const pluginEntry = process.env.PLUGIN_ENTRY

if (!pluginEntry) {
  throw new Error('PLUGIN_ENTRY environment variable is required')
}

const pluginName = pluginEntry.replace(/^dist\/control_plugins\//, '')

export default defineConfig({
  ...getBaseConfig(),
  build: {
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: resolve(root, 'src/js/control_plugins', `${pluginName}.js`),
      formats: ['umd'],
      name: pluginName,
    },
    rollupOptions: {
      external: ['jquery'],
      output: {
        dir: resolve(root, 'dist'),
        entryFileNames: 'control_plugins/[name].min.js',
        name: `jQuery${camelCase(pluginName)}`,
        globals: { jquery: 'jQuery' },
        banner: `(function ($) { "use strict";\n`,
        footer: '\n})(jQuery);',
      },
    },
  },
})
