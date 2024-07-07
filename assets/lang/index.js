const fs = require('node:fs')
const path = require('node:path')
const { default: mi18n } = require('mi18n')

/**
 * Represents a collection of language files.
 * @typedef {Object} LangFiles
 * @property {Object} [locale] - The language locale.
 * @property {string} [locale.langKey] - The language key.
 */

/**
 * Reads and processes language files from the specified directory.
 * @type {LangFiles}
 */
const langFiles = fs.readdirSync(__dirname).reduce((acc, lang) => {
  if (!/.lang$/.test(lang)) {
    return acc
  }
  const langFile = fs.readFileSync(path.resolve(__dirname, lang)).toString()
  const fileName = path.basename(lang)
  const locale = fileName.substring(0, fileName.indexOf('.'))
  acc[locale] = mi18n.processFile(langFile)
  return acc
}, {})

module.exports = langFiles
