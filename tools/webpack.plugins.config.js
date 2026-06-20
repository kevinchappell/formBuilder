const fs = require('fs')
const { resolve } = require('path')
const pkg = require('../package.json')
const exportedConfig = require('./webpack.config')

// webpack.config exports a multi-compiler array ([main, unminified]) in production
// and a single config object in development. The plugins build only extends the
// main/minified base, so resolve to that config regardless of export shape.
const webpackConfig = Array.isArray(exportedConfig)
  ? exportedConfig.find(config => config.name === 'main')
  : exportedConfig

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
