const pkg = require('../package.json')
const { resolve, join } = require('path')
const autoprefixer = require('autoprefixer')
const { BannerPlugin, DefinePlugin } = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const langFiles = require('formbuilder-languages')
const WrapperPlugin = require('wrapper-webpack-plugin')

// hack for Ubuntu on Windows
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

const root = resolve(__dirname, '../')
const PRODUCTION = process.argv.includes('production')
const ANALYZE = process.argv.includes('--analyze')
const devtool = PRODUCTION ? false : 'inline-source-map'
const outputDir = resolve(root, 'dist/')
const camelCase = str => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase())

const bannerTemplate = ({ chunk }) => {
  const name = chunk.name.substring(chunk.name.lastIndexOf('/') + 1, chunk.name.length)
  const banner = {
    [`jQuery ${camelCase(name)}`]: pkg.homepage,
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
    'dist/form-builder': resolve(__dirname, '../', pkg.config.files.formBuilder.js),
    'dist/form-render': resolve(__dirname, '../', pkg.config.files.formRender.js),
    'demo/assets/js/demo': resolve(__dirname, '../src/demo/', 'js/demo.js'),
  },
  output: {
    path: root,
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
              attributes: {
                class: 'formBuilder-injected-style',
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !PRODUCTION,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
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
    new CleanWebpackPlugin(
      { cleanOnceBeforeBuildPatterns: ['dist/*', 'demo/assets/js/form-*'] },
      {
        root: join(__dirname, '..'),
      },
    ),
    new WrapperPlugin({
      test: /\.js$/, // only wrap output of bundle files with '.js' extension
      header: '(function ($) { "use strict";\n',
      footer: '\n})(jQuery);',
    }),
    new DefinePlugin({
      FB_EN_US: JSON.stringify(langFiles['en-US']),
    }),
    new HtmlWebpackPlugin({
      template: '../src/demo/index.html',
      filename: '../demo/index.html',
      formBuilder: PRODUCTION ? 'assets/js/form-builder.min.js' : 'dist/form-builder.min.js',
      formRender: PRODUCTION ? 'assets/js/form-render.min.js' : 'dist/form-render.min.js',
      demo: PRODUCTION ? 'assets/js/demo.min.js' : 'demo/assets/js/demo.min.js',
      alwaysWriteToDisk: true,
      inject: false,
      langFiles: Object.entries(langFiles).map(([key, val]) => ({
        locale: key,
        nativeName: val.NATIVE_NAME,
      })),
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
    open: true
  },
}

if (ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
