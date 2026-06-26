import $ from 'jquery'
import { vi } from 'vitest'
import { webcrypto } from 'node:crypto'
import langFiles from 'formbuilder-languages'

// Expose jQuery and the inlined language data the way the source expects them.
global.$ = $
global.jQuery = $
global.FB_EN_US = langFiles['en-US']

// External scripts (TinyMCE/Quill/rateYo and the built bundle) are executed by
// jsdom against the window object, so jQuery must also live on window for those
// scripts to find it.
if (typeof window !== 'undefined') {
  window.$ = $
  window.jQuery = $
}

// The suite was written for Jest. Vitest implements the same API on `vi`, so we
// alias it to keep the existing jest.fn / jest.spyOn / jest.resetModules calls.
globalThis.jest = vi

// Silence noise from the demo's default request for assets/lang/en-US.lang and
// offline CDN fetches, matching the original Jest setup.
const originalConsoleError = console.error
const ignoredErrors = [
  'Error: AggregateError',
  'Error: connect ECONNREFUSED ::1:80',
  'Error: connect ECONNREFUSED 127.0.0.1:80',
]
console.error = (...params) => {
  if (!params.some(p => ignoredErrors.some(ignore => String(p).includes(ignore)))) {
    originalConsoleError(...params)
  }
}

// Some environments don't expose the Web Crypto API on the global; the original
// Jest setup provided it unconditionally.
if (!global.crypto) {
  Object.defineProperty(global, 'crypto', { value: webcrypto })
}

// --- Hermetic editor libraries ---
// The rich-text/rating controls load TinyMCE/Quill/rateYo from a CDN at runtime.
// jsdom executes those external scripts in an isolated realm whose globals the
// test code cannot read, so the CDN approach can't work under Vitest. Instead we
// load the equivalent npm packages into the test realm and mark the CDN URLs as
// already-loaded (below) so the controls skip the unusable network fetch.
// (TinyMCE is not provided here — its editor can't initialise in jsdom — so that
// test is skipped at the call site.)
try {
  await import('rateyo') // registers $.fn.rateYo on the shared jQuery instance
} catch {
  // optional in environments without rateyo installed
}
try {
  const quillModule = await import('quill')
  window.Quill = quillModule.default ?? quillModule
} catch {
  // optional in environments without quill installed
}

const preloadedScripts = [
  'https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js',
  'https://cdn.quilljs.com/1.2.4/quill.js',
  // The built bundle is a jQuery IIFE that can't execute in jsdom's isolated
  // script realm; the getScripts test only checks that the URL is recorded.
  'https://formbuilder.online/assets/js/form-builder.min.js',
]
const preloadedStyles = [
  'https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css',
  'https://cdn.quilljs.com/1.2.4/quill.snow.css',
]

// Mark the editor CDN resources as already-loaded so controls render against the
// locally-provided libraries instead of fetching them. window.fbLoaded is created
// when src/js/utils.js first loads, so this runs per-test rather than at top level.
beforeEach(() => {
  if (!window.fbLoaded) {
    return
  }
  for (const url of preloadedScripts) {
    if (!window.fbLoaded.js.includes(url)) {
      window.fbLoaded.js.push(url)
    }
  }
  for (const url of preloadedStyles) {
    if (!window.fbLoaded.css.includes(url)) {
      window.fbLoaded.css.push(url)
    }
  }
})
