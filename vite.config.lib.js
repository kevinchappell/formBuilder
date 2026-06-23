import { defineConfig } from 'vite'
import { entries, getBaseConfig, getLibraryOutput } from './vite.config.base.js'

export default defineConfig(async ({ mode }) => {
  const { default: cssInjectedByJsPlugin } = await import('vite-plugin-css-injected-by-js')
  const minify = mode !== 'unminified'
  const entryName = process.env.LIB_ENTRY || 'form-builder'
  const entry = entries[entryName]
  if (!entry) {
    throw new Error(`Unknown entry: ${entryName}. Expected one of: ${Object.keys(entries).join(', ')}`)
  }
  return {
    ...getBaseConfig(),
    plugins: [cssInjectedByJsPlugin()],
    build: {
      emptyOutDir: false,
      minify,
      cssCodeSplit: false,
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
