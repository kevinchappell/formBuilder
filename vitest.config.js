import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import fs from 'fs'
import { getBaseConfig } from './vite.config.base.js'

const styleMock = resolve(__dirname, 'tests/__mocks__/styleMock.js')

function nodeCompatibleResolve() {
  return {
    name: 'node-compatible-resolve',
    enforce: 'pre',
    resolveId(id, importer) {
      console.log('RESOLVE', id, 'from', importer)
      if (/\.(css|scss|sass|less)(\?.*)?$/i.test(id)) {
        return styleMock
      }

      if (!importer || !id.startsWith('.')) return null

      const baseDir = resolve(importer, '..')

      for (const ext of ['', '.js']) {
        const candidate = resolve(baseDir, `${id}${ext}`)
        try {
          if (fs.statSync(candidate).isFile()) return candidate
        } catch {
          // continue
        }
      }

      const dirCandidate = resolve(baseDir, id)
      try {
        if (fs.statSync(dirCandidate).isDirectory()) {
          const indexFile = resolve(dirCandidate, 'index.js')
          if (fs.existsSync(indexFile)) return indexFile
        }
      } catch {
        // continue
      }

      return null
    },
  }
}

export default defineConfig({
  ...getBaseConfig(),
  plugins: [nodeCompatibleResolve()],
  test: {
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        resources: 'usable',
        runScripts: 'dangerously',
      },
    },
    globals: true,
    setupFiles: ['./tests/setup-vitest.js'],
    css: false,
    coverage: {
      provider: 'v8',
      directory: '.vitest/coverage',
      exclude: ['tests/', 'src/js/control/index.js'],
    },
  },
})
