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
  let mockSetHTML

  beforeAll(() => {
    mockSanitizerConstructor = jest.fn(function () {
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
    const config = mockSanitizerConstructor.mock.calls[0][0]
    expect(config.elements).toContain('input')
    expect(config.elements).toContain('select')
    expect(config.elements).toContain('textarea')
    expect(config.elements).toContain('label')
    expect(config.elements).toContain('button')
  })

  test('instantiates Sanitizer with a form attribute allowlist', () => {
    const config = mockSanitizerConstructor.mock.calls[0][0]
    expect(config.attributes).toContain('type')
    expect(config.attributes).toContain('name')
    expect(config.attributes).toContain('value')
    expect(config.attributes).toContain('checked')
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

  describe('when Sanitizer constructor throws', () => {
    let setElementContentLocal

    beforeAll(() => {
      window.Sanitizer = jest.fn(function () {
        throw new Error('Unsupported config')
      })
      jest.resetModules()
      const mod = require('./../src/js/sanitizer.js')
      setElementContentLocal = mod.setElementContent
      mod.setSanitizerConfig({ backendOrder: ['sanitizer'] })
    })

    afterAll(() => {
      // Restore the outer mock so the outer afterAll clean-up is consistent
      window.Sanitizer = mockSanitizerConstructor
      jest.resetModules()
    })

    test('falls back to false and does not call setHTML', () => {
      const freshSetHTML = jest.fn(function (content) {
        this.innerHTML = content
      })
      Element.prototype.setHTML = freshSetHTML
      const el = document.createElement('div')
      setElementContentLocal(el, '<p>test</p>', false)
      expect(freshSetHTML).not.toHaveBeenCalled()
      // Restore prototype for outer describe clean-up
      Element.prototype.setHTML = mockSetHTML
    })
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