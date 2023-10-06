import $ from 'jquery'
global.$ = $
global.jQuery = $

const langFiles = require('formbuilder-languages')
global.FB_EN_US = langFiles['en-US']

const xhrMockClass = () => ({
  open            : jest.fn(), //(method, url) => {console.log(method + ':' + url)},
  send            : jest.fn().mockImplementation(function(){ this.onload() }),
  setRequestHeader: jest.fn(),
  abort: jest.fn(),
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  error: jest.fn(),
  getAllResponseHeaders: jest.fn(),
  getResponseHeader: jest.fn(),
  //load: jest.fn(),
  loadend: jest.fn(),
  loadstart: jest.fn(),
  onreadystatechange: jest.fn(),
  progress: jest.fn(),
  readyState: jest.fn(),
  removeEventListener: jest.fn(),
  response: jest.fn(),
  responseText: jest.fn(),
  responseType: jest.fn(),
  responseURL: jest.fn(),
  responseXML: jest.fn(),
  status: jest.fn(),
  statusText: jest.fn(),
  timeout: jest.fn(),
  upload: jest.fn(),
  withCredentials: jest.fn(),
})

window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)