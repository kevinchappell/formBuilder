import controlParagraph from '../../src/js/control/paragraph.js'

describe('Test Paragraph Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlParagraph({
      'type': 'paragraph',
      'required': false,
      'label': 'Test p element',
      'className': 'form-control',
      'name': 'test-elem',
      'access': false,
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance.constructor.name).toBe('controlParagraph')

    const built = controlInstance.build()
    expect(typeof built).toBe('object')
    const element = built.field
    expect(element.constructor.name).toBe('HTMLParagraphElement')
    expect(element.textContent).toBe('Test p element')
  })
})

describe('Test building paragraph variations and subtypes', () => {
  const inputSubTypes = ['p', 'address', 'blockquote', 'canvas', 'output'];
  inputSubTypes.forEach(subtype => {
    test('can render single text subtype ' + subtype + ' element', () => {
      const controlInstance = new controlParagraph({
        'type': 'paragraph',
        'required': false,
        'label': 'Test p element',
        'className': 'form-control',
        'name': 'test-elem',
        'access': false,
        'subtype': subtype
      }, false)
      const built = controlInstance.build()
      expect(typeof built).toBe('object')
      const element = built.field
      expect(element.tagName).toBe(subtype.toUpperCase())
    })
  })

  const headerSubTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  inputSubTypes.forEach(subtype => {
    test('can render single text subtype ' + subtype + ' element', () => {
      const controlInstance = new controlParagraph({
        'type': 'header',
        'required': false,
        'label': 'Header test',
        'className': 'form-control',
        'name': 'test-elem',
        'access': false,
        'subtype': subtype
      }, false)
      const built = controlInstance.build()
      expect(typeof built).toBe('object')
      const element = built.field
      expect(element.tagName).toBe(subtype.toUpperCase())
      expect(element.textContent).toBe('Header test')
    })
  })
})