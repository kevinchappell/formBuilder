/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('../package.json')
const { resolve, join } = require('path')
const { BannerPlugin, DefinePlugin } = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const langFiles = require('formbuilder-languages')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

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
    'dist/form-builder': resolve(__dirname, '../', pkg.config.files.formBuilder.ts),
    'dist/form-render': resolve(__dirname, '../', pkg.config.files.formRender.ts),
    'demo/assets/js/demo': resolve(__dirname, '../src/demo/', 'js/demo.js'),
  },
  output: {
    path: root,
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2015',
        },
      },
      {
        test: /\.lang$/,
        use: [
          {
            loader: 'file-loader?name=[path][name].[ext]&context=./src',
          },
        ],
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
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
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
    // new CompressionPlugin({
    //   filename: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js)$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
    new ESLintPlugin(),
  ],
  devtool,
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.scss', '.ts'],
    alias: {
      fonts: resolve(__dirname, '../src/fonts/'),
      ts: resolve(__dirname, '../src/ts/'),
      form_builder: resolve(__dirname, '../src/ts/form_builder'),
      form_render: resolve(__dirname, '../src/ts/form_render'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../demo'),
    },
    open: true,
  },
}

if (ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
