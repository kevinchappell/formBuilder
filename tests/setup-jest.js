import $ from 'jquery'
global.$ = $
global.jQuery = $

const langFiles = require('formbuilder-languages')
global.FB_EN_US = langFiles['en-US']

/** Hack to silence errors from default request to assets/lang/en-US.lang **/
const originalConsoleError = console.error
const jsDomCssError = 'Error: AggregateError'
console.error = (...params) => {
  if (!params.find(p => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params)
  }
}