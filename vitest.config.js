import { defineConfig } from 'vitest/config'
import { getBaseConfig } from './vite.config.base.js'

export default defineConfig({
  ...getBaseConfig(),
  test: {
    environment: 'jsdom',
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
