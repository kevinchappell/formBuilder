const pkg = require('../package.json')
const { resolve } = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BannerPlugin } = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// hack for Ubuntu on Windows
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

const PRODUCTION = process.argv.includes('production')
const ANALYZE = process.argv.includes('--analyze')
const devtool = PRODUCTION ? false : 'inline-source-map'
const outputDir = resolve(__dirname, '../', 'demo/assets/js/')

const bannerTemplate = [`${pkg.name} - ${pkg.homepage}`, `Version: ${pkg.version}`, `Author: ${pkg.author}`, ''].join('\n')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
})

const webpackConfig = {
  context: outputDir,
  entry: {
    'form-builder': resolve(__dirname, '../', pkg.config.files.formBuilder.js),
    'form-render': resolve(__dirname, '../', pkg.config.files.formRender.js),
  },
  output: {
    path: outputDir,
    publicPath: '/assets/js/',
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
        loader: 'file?name=[path][name].[ext]&context=./src',
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              attrs: {
                class: 'formBuilder-injected-style',
              },
            },
          },
          use: [
            {
              loader: 'css-loader',
              query: {
                minimize: true,
                sourceMaps: !PRODUCTION,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['> 1%']
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              query: {
                sourceMaps: !PRODUCTION,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
    new BannerPlugin(bannerTemplate),
    new CompressionPlugin({
      asset: '[path].gz[query]',
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
