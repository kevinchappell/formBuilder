const fs = require('fs')
const { resolve } = require('path')
const pkg = require('../package.json')
const webpackConfig = require('./webpack.config')

const root = resolve(__dirname, '../')
const pluginsDir = resolve(__dirname, '../', pkg.config.files.pluginsDir)

const pluginsConfig = {
  plugins: [],
  output: {
    path: root,
    filename: '[name].min.js',
  },
  entry: () =>
    new Promise(resolve => {
      const entry = {}
      fs.readdir(pluginsDir, (error, files) => {
        if (error) {
          throw Error(error)
        }
        files.forEach(file => {
          if (file.indexOf('.js') !== -1) {
            const pluginName = file.replace('.js', '')
            entry[`dist/control_plugins/${pluginName}`] = `${pluginsDir}/${file}`
            entry[`demo/assets/js/control_plugins/${pluginName}`] = `${pluginsDir}/${file}`
          }
        })
        resolve(entry)
      })
    }),
}

module.exports = Object.assign({}, webpackConfig, pluginsConfig)
