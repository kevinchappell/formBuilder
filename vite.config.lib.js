import { defineConfig } from 'vite'
import { root, entries, getBaseConfig, getLibraryOutput } from './vite.config.base.js'

export default defineConfig(({ mode }) => {
  const minify = mode !== 'unminified'
  return {
    ...getBaseConfig(),
    build: {
      emptyOutDir: false,
      minify,
      lib: {
        entry: entries,
        formats: ['umd'],
      },
      rollupOptions: {
        external: ['jquery'],
        output: getLibraryOutput(minify),
      },
    },
  }
})
