const fs = require('fs');
const {resolve} = require('path');
const pkg = require('../package.json');
const webpackConfig = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pluginsDir = resolve(__dirname, '../', pkg.config.files.pluginsDir);
const outputDir = resolve(__dirname, '../', 'demo/assets/js/control_plugins/');

webpackConfig.entry = {};

webpackConfig.plugins = [
  new CopyWebpackPlugin([
  {
    from: outputDir,
    to: resolve(__dirname, '../', 'dist/control_plugins')
  }
])
]

webpackConfig.output = {
  path: outputDir,
  publicPath: '/assets/js/control_plugins',
  filename: '[name].min.js'
};

webpackConfig.entry = () => new Promise((resolve) => {
  let entry = {};
  fs.readdir(pluginsDir, (error, files) => {
    if (error) {
      throw Error(error)
    }
    files.forEach(file => {
      if (file.indexOf('.js') !== -1) {
        let pluginName = file.replace('.js', '');
        entry[pluginName] = `${pluginsDir}/${file}`;
      }
    });
    resolve(entry);
  });
});

module.exports = webpackConfig;
