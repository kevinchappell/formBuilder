import $ from 'jquery'
import langFiles from 'formbuilder-languages'
import { vi } from 'vitest'

globalThis.$ = $
globalThis.jQuery = $
globalThis.FB_EN_US = langFiles['en-US']
// Some legacy tests call jest.* helpers
if (typeof globalThis.jest === 'undefined') {
  globalThis.jest = vi
}

// Patch CommonJS require resolution so legacy tests can require source files
// that use extensionless / directory imports and SCSS imports.
const Module = require('module')
const originalResolveFilename = Module._resolveFilename
const styleExtensions = /\.(css|scss|sass|less)$/i

Module._resolveFilename = function (request, parent, isMain, options) {
  if (styleExtensions.test(request)) {
    return require.resolve('./__mocks__/styleMock.js', { paths: [parent.filename] })
  }

  const candidates = []
  if (!request.startsWith('.') || /\.[a-z0-9]+$/i.test(request)) {
    return originalResolveFilename(request, parent, isMain, options)
  }

  const baseDir = parent ? parent.filename : process.cwd()
  candidates.push(request + '.js')
  candidates.push(request + '/index.js')

  for (const candidate of candidates) {
    try {
      return originalResolveFilename(candidate, parent, isMain, options)
    } catch {
      // continue
    }
  }

  return originalResolveFilename(request, parent, isMain, options)
}
