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

// webpackConfig.module = {
//   rules: [{
//     test: /\.js$/,
//     exclude: /node_modules/,
//     loader: 'babel-loader',
//     options: {
//       presets: ['env', {
//         targets: {
//           browsers: [
//             'last 2 versions'
//           ]
//         },
//         include: [
//           'es6.promise'
//         ],
//         loose: true,
//         modules: false
//       }]
//     }
//   }]
// };

module.exports = webpackConfig;
