import fs from 'fs';
import {resolve} from 'path';
import pkg from '../package.json';
import webpackConfig from './webpack.config';
import BabiliPlugin from 'babili-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const pluginsDir = resolve(__dirname, '../', pkg.config.files.pluginsDir);
const outputDir = resolve(__dirname, '../', 'demo/assets/js/control_plugins/');

webpackConfig.entry = {};

webpackConfig.plugins = [
  new BabiliPlugin(),
  new CopyWebpackPlugin([
    {
      from: outputDir,
      to: resolve(__dirname, '../', 'dist/control_plugins')
    }
  ])
];

webpackConfig.output = {
  path: outputDir,
  publicPath: '/assets/js/control_plugins',
  filename: '[name].min.js'
};

webpackConfig.devtool = false;

webpackConfig.entry = () => new Promise((resolve) => {
  let entry = {};
  fs.readdir(pluginsDir, (error, files) => {
    files.forEach(file => {
      if (file.indexOf('.js') !== -1) {
        let pluginName = file.replace('.js', '');
        entry[pluginName] = `${pluginsDir}/${file}`;
      }
    });
    resolve(entry);
  });
});

export default webpackConfig;
