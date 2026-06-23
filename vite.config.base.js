import { resolve } from 'path'
import pkg from './package.json'
import langFiles from 'formbuilder-languages'

export const root = resolve(__dirname)

export const camelCase = str => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase())

export const entries = {
  'form-builder': resolve(root, 'src/js/form-builder.js'),
  'form-render': resolve(root, 'src/js/form-render.js'),
}

export function banner(name) {
  const cleanName = name.replace(/^dist\//, '').replace(/\.min$/, '')
  const lines = [
    `jQuery ${camelCase(cleanName)}: ${pkg.homepage}`,
    `Version: ${pkg.version}`,
    `Author: ${pkg.author}`,
  ]
  return lines.join('\n')
}

export function getBaseConfig() {
  return {
    define: {
      FB_EN_US: JSON.stringify(langFiles['en-US']),
    },
    resolve: {
      alias: {
        '@': resolve(root, 'src/js'),
      },
    },
  }
}

export function getLibraryOutput(minify, name) {
  const cleanName = name.replace(/^dist\//, '').replace(/\.min$/, '')
  return {
    dir: resolve(root, 'dist'),
    entryFileNames: `[name]${minify ? '.min' : ''}.js`,
    name: `jQuery${camelCase(cleanName)}`,
    globals: { jquery: 'jQuery' },
    banner: `(function ($) { "use strict";\n/*!\n * ${banner(cleanName)}\n */`,
    footer: '\n})(jQuery);',
  }
}
