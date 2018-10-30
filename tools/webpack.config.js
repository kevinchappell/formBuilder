const pkg = require('../package.json')
const { resolve, join } = require('path')
const autoprefixer = require('autoprefixer')
const CompressionPlugin = require('compression-webpack-plugin')
const { BannerPlugin } = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const { langFiles } = require('./build-helpers')

// hack for Ubuntu on Windows
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

const PRODUCTION = process.argv.includes('production')
const ANALYZE = process.argv.includes('--analyze')
const devtool = PRODUCTION ? false : 'inline-source-map'
const outputDir = resolve(__dirname, '../', 'dist/')
const camelCase = str => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase())

const bannerTemplate = ({ chunk }) => {
  const banner = {
    [`jQuery ${camelCase(chunk.name)}`]: pkg.homepage,
    Version: pkg.version,
    Author: pkg.author,
  }

  return Object.entries(banner)
    .map(([key, val]) => [key, val].join(': '))
    .join('\n')
}

const webpackConfig = {
  context: outputDir,
  entry: {
    'form-builder': resolve(__dirname, '../', pkg.config.files.formBuilder.js),
    'form-render': resolve(__dirname, '../', pkg.config.files.formRender.js),
    demo: resolve(__dirname, '../src/demo/', 'js/demo.js'),
  },
  output: {
    path: outputDir,
    publicPath: '/dist',
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.lang$/,
        loader: 'file-loader?name=[path][name].[ext]&context=./src',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              attrs: {
                class: 'formBuilder-injected-style',
              },
              sourceMap: !PRODUCTION,
            },
          },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              minimize: true,
              sourceMap: !PRODUCTION,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['> 1%'],
                }),
              ],
              sourceMap: !PRODUCTION,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !PRODUCTION,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*', 'demo/assets/js/form-*'], {
      root: join(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      template: '../src/demo/index.html',
      formBuilder: PRODUCTION ? 'assets/js/form-builder.min.js' : '../dist/form-builder.min.js',
      formRender: PRODUCTION ? 'assets/js/form-render.min.js' : '../dist/form-render.min.js',
      demo: PRODUCTION ? 'assets/js/demo.js' : '../dist/demo.min.js',
      alwaysWriteToDisk: true,
      inject: false,
      langFiles,
    }),
    new HtmlWebpackHarddiskPlugin({ outputPath: './demo/' }),
    new BannerPlugin({ banner: bannerTemplate, test: /\.js$/ }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devtool,
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.scss'],
  },
  devServer: {
    inline: true,
    contentBase: 'demo/',
    noInfo: true,
  },
}

if (ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
