import pkg from '../package.json';
const {resolve} = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const {BannerPlugin} = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

const PRODUCTION = process.argv.includes('-p');
const outputDir = resolve(__dirname, '../', 'demo/assets/js/');

const bannerTemplate = [
  `${pkg.name} - ${pkg.homepage}`,
  `Version: ${pkg.version}`,
  `Author: ${pkg.author}`
].join('\n');

let plugins = [
  new ExtractTextPlugin({
    filename: 'form-builder.min.css'
  }),
  new BabiliPlugin({
    removeDebugger: true
  }, {
    comments: false
  }),
  new BannerPlugin(bannerTemplate),
  new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js)$/,
      threshold: 10240,
      minRatio: 0.8
    })
];

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

const devtool = PRODUCTION ? false : 'source-map';

const webpackConfig = {
  context: outputDir,
  entry: {
    'form-builder': [
      'babel-regenerator-runtime',
      resolve(__dirname, '../', pkg.config.files.formBuilder.js)
    ],
    'form-render': resolve(__dirname, '../', pkg.config.files.formRender.js)
  },
  output: {
    path: outputDir,
    publicPath: '/assets/js/',
    filename: '[name].min.js'
  },
  module: {
    rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.lang$/,
      loader: 'file?name=[path][name].[ext]&context=./src'
    }, {
      test: /\.scss$/,
      use: extractSass
      .extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              minimize: true,
              sourceMaps: !PRODUCTION
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['last 2 versions'],
                  cascade: true,
                  remove: true
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMaps: !PRODUCTION
            }
          }
        ]
      })
    }]
  },
  plugins,
  devtool,
  resolve: {
    modules: [
      resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.scss']
  },
  devServer: {
    inline: true,
    contentBase: 'demo/',
    noInfo: true
  }
};

module.exports = webpackConfig;
