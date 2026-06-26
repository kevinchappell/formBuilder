import { defineConfig } from 'vite'
import { entries, getBaseConfig, getLibraryOutput } from './vite.config.base.js'

export default defineConfig(async ({ mode }) => {
  // vite-plugin-css-injected-by-js is ESM-only, so it must be imported dynamically
  // (Vite's config loader would otherwise try to require() it and fail).
  const { default: cssInjectedByJsPlugin } = await import('vite-plugin-css-injected-by-js')
  const minify = mode !== 'unminified'
  const entryName = process.env.LIB_ENTRY || 'form-builder'
  const entry = entries[entryName]
  if (!entry) {
    throw new Error(`Unknown entry: ${entryName}. Expected one of: ${Object.keys(entries).join(', ')}`)
  }
  return {
    ...getBaseConfig(),
    // Inject the compiled CSS into the JS bundle at runtime, replicating the old
    // style-loader behavior. The `formBuilder-injected-style` class matches what
    // the source uses to find and remove the styles (the disableInjectedStyle option).
    plugins: [cssInjectedByJsPlugin({ attributes: { class: 'formBuilder-injected-style' } })],
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
