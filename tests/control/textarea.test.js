import controlTextarea from '../../src/js/control/textarea.js'
import controlTinymce from '../../src/js/control/textarea.tinymce'
import controlQuill from '../../src/js/control/textarea.quill'
describe('Test Text Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlTextarea({
      'type': 'textarea',
      'subtype': 'textarea',
      'required': false,
      'label': 'Test text element',
      'className': 'form-control',
      'name': 'test-elem',
      'access': false,
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance.constructor.name).toBe('controlTextarea')

    const element = controlInstance.build()
    expect(element.constructor.name).toBe('HTMLTextAreaElement')
    expect(element.type).toBe('textarea')
    expect(element.name).toBe('test-elem')
    expect(element.id).toBe('test-elem')
  })

  test('test userData loaded after render', () => {
    const controlInstance = new controlTextarea({
      'type': 'textarea',
      'userData': ['loadedValue']
    }, false)
    const element = controlInstance.build()
    expect(element.value).toBe('')
    controlInstance.onRender()
    expect(element.value).toBe('loadedValue')
  })
})

describe('Test building text variations and subtypes', () => {
    test('can render TinyMCE', () => {
      const controlInstance = new controlTinymce({
        'type': 'textarea',
        'required': false,
        'label': 'Test tinymce element',
        'className': 'form-control',
        'name': 'tinymce-elem',
        'access': false,
        'subtype': 'tinymce',
      }, false)
      const element = controlInstance.build()
      expect(element.constructor.name).toBe('HTMLTextAreaElement')
      expect(element.type).toBe('textarea')
    })

    test('can render Quill', () => {
      const controlInstance = new controlQuill({
        'type': 'textarea',
        'required': false,
        'label': 'Test quill element',
        'className': 'form-control',
        'name': 'quill-elem',
        'access': false,
        'subtype': 'quill',
      }, false)
      const element = controlInstance.build()
      expect(element.constructor.name).toBe('HTMLDivElement')
    })
})