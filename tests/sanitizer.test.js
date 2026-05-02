const createDOMPurify = require('dompurify');
window.DOMPurify = createDOMPurify()
const { isPotentiallyDangerousAttribute, attributeWillClobber, setElementContent, setSanitizerConfig }
  = require('./../src/js/sanitizer.js')

const backends = ['fallback','dompurify'] //@NOTE No SanitizerAPI polyfill is available in Node for testing, it is still considered experimental

describe('When Sanitizer disabled', () => {

  beforeEach(() => {
    setSanitizerConfig({
      backendOrder: [],
    })
  })

  test('does not remove on* attribute', () => {

    const unsafe = '<img src="" onerror="alert(\'xss\');">'
    const el = document.createElement('div')
    setElementContent(el, unsafe, false)
    const elCompare = document.createElement('div')
    elCompare.innerHTML = unsafe
    expect(el.innerHTML).toBe(elCompare.innerHTML)
  })

  test('does not remove javascript in attribute value', () => {
    const unsafe = '<a href="javascript:alert(\'xss\');">Link</a>'
    const el = document.createElement('div')
    setElementContent(el, unsafe, false)
    const elCompare = document.createElement('div')
    elCompare.innerHTML = unsafe
    expect(el.innerHTML).toBe(elCompare.innerHTML)
  })

  test('does not remove <script> tags', () => {
    const unsafe = '<div><script>alert("xss");</script></div>'
    const el = document.createElement('div')
    setElementContent(el, unsafe, false)
    const elCompare = document.createElement('div')
    elCompare.innerHTML = unsafe
    expect(el.innerHTML).toBe(elCompare.innerHTML)
  })

  test('does not remove iframes', () => {
    const unsafe = '<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'
    const el = document.createElement('div')
    setElementContent(el, unsafe, false)
    const elCompare = document.createElement('div')
    elCompare.innerHTML = unsafe
    expect(el.innerHTML).toBe(elCompare.innerHTML)
  })

})

backends.forEach(backend => {
  describe(backend + ' Sanitizer', () => {

    beforeEach(() => {
      setSanitizerConfig({
        backendOrder: [backend],
      })
    })

    test('removes on* attribute', () => {
      const unsafe = '<img src="" onerror="alert(\'xss\');">'
      const el = document.createElement('div')
      setElementContent(el, unsafe, false)
      expect(el.innerHTML).toBe('<img src="">')
    })

    test('removes javascript in attribute value', () => {
      const unsafe = '<a href="javascript:alert(\'xss\');">Link</a>'
      const el = document.createElement('div')
      setElementContent(el, unsafe, false)
      expect(el.innerHTML).toBe('<a>Link</a>')
    })

    test('removes <script> tags', () => {
      const unsafe = '<div><script>alert("xss");</script></div>'
      const el = document.createElement('div')
      setElementContent(el, unsafe, false)
      expect(el.innerHTML).toBe('<div></div>')
    })

    test('removes iframes', () => {
      const unsafe = '<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'
      const el = document.createElement('div')
      setElementContent(el, unsafe, false)
      expect(el.innerHTML).toBe('<p>abc</p>')
    })
  })
})

describe('Sanitizer API backend', () => {
  let setElementContentSanitizer
  let setSanitizerConfigSanitizer
  let mockSanitizerConstructor
  let capturedSanitizerConfig
  let mockSetHTML

  beforeAll(() => {
    // Capture the config passed to the Sanitizer constructor
    capturedSanitizerConfig = null
    mockSanitizerConstructor = jest.fn(function (config) {
      capturedSanitizerConfig = config
      return this
    })
    window.Sanitizer = mockSanitizerConstructor

    // Provide a setHTML implementation on Element.prototype so the sanitizer
    // backend callback can call element.setHTML(content, { sanitizer })
    mockSetHTML = jest.fn(function (content) {
      this.innerHTML = content
    })
    Element.prototype.setHTML = mockSetHTML

    // Re-require the module after mocking so the IIFE picks up window.Sanitizer
    jest.resetModules()
    const mod = require('./../src/js/sanitizer.js')
    setElementContentSanitizer = mod.setElementContent
    setSanitizerConfigSanitizer = mod.setSanitizerConfig

    setSanitizerConfigSanitizer({ backendOrder: ['sanitizer'] })
  })

  afterAll(() => {
    delete window.Sanitizer
    delete Element.prototype.setHTML
    jest.resetModules()
  })

  test('instantiates Sanitizer with a form element allowlist', () => {
    expect(mockSanitizerConstructor).toHaveBeenCalledTimes(1)
    const elements = capturedSanitizerConfig.elements
    expect(elements).toContain('input')
    expect(elements).toContain('select')
    expect(elements).toContain('textarea')
    expect(elements).toContain('label')
    expect(elements).toContain('button')
  })

  test('instantiates Sanitizer with a form attribute allowlist', () => {
    const attributes = capturedSanitizerConfig.attributes
    expect(attributes).toContain('type')
    expect(attributes).toContain('name')
    expect(attributes).toContain('value')
    expect(attributes).toContain('checked')
  })

  test('uses setHTML when the Sanitizer backend is active', () => {
    const el = document.createElement('div')
    setElementContentSanitizer(el, '<input type="checkbox">', false)
    expect(mockSetHTML).toHaveBeenCalled()
  })

  test('preserves form elements via the Sanitizer backend', () => {
    mockSetHTML.mockImplementation(function (content) {
      // Simulate a Sanitizer that keeps all allowed elements
      this.innerHTML = content
    })
    const el = document.createElement('div')
    setElementContentSanitizer(el, '<label><input type="checkbox" checked> Accept</label>', false)
    expect(el.innerHTML).toContain('<input')
    expect(el.innerHTML).toContain('<label')
  })

  test('falls back to false when Sanitizer constructor throws', () => {
    // Temporarily replace Sanitizer with one that throws
    const throwingSanitizer = jest.fn(() => {
      throw new Error('Unsupported config')
    })
    window.Sanitizer = throwingSanitizer
    jest.resetModules()
    const mod = require('./../src/js/sanitizer.js')
    const setSanitizerConfigLocal = mod.setSanitizerConfig
    const setElementContentLocal = mod.setElementContent
    setSanitizerConfigLocal({ backendOrder: ['sanitizer'] })

    // With sanitizer backend returning false, setHTML should NOT be called
    const freshSetHTML = jest.fn(function (content) {
      this.innerHTML = content
    })
    Element.prototype.setHTML = freshSetHTML
    const el = document.createElement('div')
    setElementContentLocal(el, '<p>test</p>', false)
    expect(freshSetHTML).not.toHaveBeenCalled()

    // Restore for subsequent tests and re-require so module state is consistent
    window.Sanitizer = mockSanitizerConstructor
    Element.prototype.setHTML = mockSetHTML
    jest.resetModules()
    const restoredMod = require('./../src/js/sanitizer.js')
    setElementContentSanitizer = restoredMod.setElementContent
    setSanitizerConfigSanitizer = restoredMod.setSanitizerConfig
    setSanitizerConfigSanitizer({ backendOrder: ['sanitizer'] })
  })
})

describe('Potentially dangerous attributes', () => {
  test('onerror attribute is dangerous', () => {
    expect(isPotentiallyDangerousAttribute('onerror', 'alert("")')).toBe(true)
  })

  test('javascript: attribute value is dangerous', () => {
    expect(isPotentiallyDangerousAttribute('attribute', 'javascript:')).toBe(true)
  })

  test('attribute name overrides form attributes', () => {
    expect(isPotentiallyDangerousAttribute('form', 'myform')).toBe(true)
    expect(isPotentiallyDangerousAttribute('formaction', 'POST')).toBe(true)
  })
})