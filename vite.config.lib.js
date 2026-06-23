import { defineConfig } from 'vite'
import { entries, getBaseConfig, getLibraryOutput } from './vite.config.base.js'

export default defineConfig(({ mode }) => {
  const minify = mode !== 'unminified'
  const entryName = process.env.LIB_ENTRY || 'form-builder'
  const entry = entries[entryName]
  if (!entry) {
    throw new Error(`Unknown entry: ${entryName}. Expected one of: ${Object.keys(entries).join(', ')}`)
  }
  return {
    ...getBaseConfig(),
    build: {
      emptyOutDir: false,
      minify,
      lib: {
        entry,
        formats: ['umd'],
        name: entryName,
      },
      rollupOptions: {
        external: ['jquery'],
        output: getLibraryOutput(minify, entryName),
      },
    },
  }
})
