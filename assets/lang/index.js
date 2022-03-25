const fs = require('fs')
const path = require('path')
const { default: mi18n } = require('mi18n')

const langFiles = fs.readdirSync(__dirname).reduce((acc, lang) => {
  if (!/.lang$/.test(lang)) {
    return acc
  }
  const langFile = fs.readFileSync(path.resolve(__dirname, lang)).toString()
  const fileName = path.basename(lang)
  const locale = fileName.substr(0, fileName.indexOf('.'))
  acc[locale] = mi18n.processFile(langFile)
  return acc
}, {})

module.exports = langFiles
