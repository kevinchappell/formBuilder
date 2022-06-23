'use strict'

const ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers')

class WrapperPlugin {
  /**
   * @param {Object} args
   * @param {string | Function} [args.header]  Text that will be prepended to an output file.
   * @param {string | Function} [args.footer] Text that will be appended to an output file.
   * @param {string | RegExp} [args.test] Tested against output file names to check if they should be affected by this
   * plugin.
   * @param {boolean} [args.afterOptimizations=false] Indicating whether this plugin should be activated before
   * (`false`) or after (`true`) the optimization stage. Example use case: Set this to true if you want to avoid
   * minification from affecting the text added by this plugin.
   */
  constructor(args) {
    if (typeof args !== 'object') {
      throw new TypeError('Argument "args" must be an object.')
    }

    this.header = args.hasOwnProperty('header') ? args.header : ''
    this.footer = args.hasOwnProperty('footer') ? args.footer : ''
    this.afterOptimizations = args.hasOwnProperty('afterOptimizations') ? !!args.afterOptimizations : false
    this.test = args.hasOwnProperty('test') ? args.test : ''
  }

  apply(compiler) {
    const WebpackSources = compiler.webpack.sources
    const ConcatSource = WebpackSources.ConcatSource
    const header = this.header
    const footer = this.footer
    const tester = { test: this.test }

    compiler.hooks.compilation.tap('WrapperPlugin', compilation => {
      if (this.afterOptimizations) {
        compilation.hooks.afterOptimizeChunkAssets.tap('WrapperPlugin', chunks => {
          wrapChunks(compilation, chunks, footer, header)
        })
      } else {
        compilation.hooks.optimizeChunkAssets.tapAsync('WrapperPlugin', (chunks, done) => {
          wrapChunks(compilation, chunks, footer, header)
          done()
        })
      }
    })

    function wrapFile(compilation, fileName, chunkHash) {
      const headerContent = typeof header === 'function' ? header(fileName, chunkHash) : header
      const footerContent = typeof footer === 'function' ? footer(fileName, chunkHash) : footer

      compilation.assets[fileName] = new ConcatSource(
        String(headerContent),
        compilation.assets[fileName],
        String(footerContent),
      )
    }

    function wrapChunks(compilation, chunks) {
      for (const chunk of chunks) {
        if (!chunk.rendered) {
          // Skip already rendered (cached) chunks
          // to avoid rebuilding unchanged code.
          continue
        }

        const args = {
          hash: compilation.hash,
          chunkhash: chunk.hash,
        }
        for (const fileName of chunk.files) {
          if (ModuleFilenameHelpers.matchObject(tester, fileName)) {
            wrapFile(compilation, fileName, args)
          }
        }
      }
    } // wrapChunks
  }
}

module.exports = WrapperPlugin
