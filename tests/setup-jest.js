import $ from 'jquery'
global.$ = $
global.jQuery = $

const langFiles = require('formbuilder-languages')
global.FB_EN_US = langFiles['en-US']

/** Hack to silence errors from default request to assets/lang/en-US.lang **/
const originalConsoleError = console.error
const jsIgnoreErrors = [
  'Error: AggregateError',
  'Error: connect ECONNREFUSED ::1:80',
]
console.error = (...params) => {
  if (!params.find(p => jsIgnoreErrors.find(ignore => p.toString().includes(ignore)))) {
    originalConsoleError(...params)
  }
}