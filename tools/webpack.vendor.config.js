import {resolve} from 'path';
import pkg from '../package.json';
import {ProvidePlugin} from 'webpack';
import webpackConfig from './webpack.config';
import BabiliPlugin from 'babili-webpack-plugin';

const vendor = pkg.config.files.demo.vendor.js.map(path =>
  resolve(__dirname, '../', path)
);

webpackConfig.entry = {vendor};
webpackConfig.plugins = [
  new BabiliPlugin(
    {
      removeDebugger: true
    },
    {
      comments: false
    }
  ),
  new ProvidePlugin({
    $: 'vendor',
    jQuery: 'vendor'
  })
];

module.exports = webpackConfig;
