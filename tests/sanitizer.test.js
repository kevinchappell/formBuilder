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