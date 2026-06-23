import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import { resolve } from 'path'
import { root, getBaseConfig } from './vite.config.base.js'

// SCSS/CSS imports in source exist only for the bundler's style injection; in
// tests we stub them out so the modules import without the style pipeline. The
// `find` regex must match the whole import id (not just the extension) because
// Vite resolves aliases via `id.replace(find, replacement)`.
const styleMock = resolve(__dirname, 'tests/__mocks__/styleMock.js')
const base = getBaseConfig()

export default defineConfig({
  define: base.define,
  resolve: {
    alias: [
      { find: '@', replacement: resolve(root, 'src/js') },
      { find: /.*\.(css|less|sass|scss)(\?.*)?$/, replacement: styleMock },
    ],
  },
  test: {
    environment: 'jsdom',
    // Mirror the original Jest testEnvironmentOptions so control plugins that
    // load editors (TinyMCE/Quill) from a CDN behave as they did under Jest.
    environmentOptions: {
      jsdom: {
        resources: 'usable',
        runScripts: 'dangerously',
      },
    },
    globals: true,
    setupFiles: ['./tests/setup-vitest.js'],
    coverage: {
      provider: 'v8',
      reportsDirectory: '.vitest/coverage',
      exclude: [...coverageConfigDefaults.exclude, 'tests/**', 'src/js/control/index.js', 'tools/**'],
    },
  },
})
