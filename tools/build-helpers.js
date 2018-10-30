const fs = require('fs')
const path = require('path')
const { default: mi18n } = require('mi18n')
const langDir = path.resolve(__dirname, '../', 'site/src/assets/lang')

const langFiles = fs
  .readdirSync(langDir)
  .filter(file => /.lang$/.test(file))
  .map(lang => {
    const langFile = fs.readFileSync(path.join(langDir, lang)).toString()
    return {
      locale: path.basename(lang).split('.')[0],
      nativeName: mi18n.processFile(langFile).NATIVE_NAME,
    }
  })

module.exports = {
  langFiles,
}
