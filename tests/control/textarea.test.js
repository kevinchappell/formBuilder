import controlTextarea from '../../src/js/control/textarea.js'
import controlTinymce from '../../src/js/control/textarea.tinymce'
import controlQuill from '../../src/js/control/textarea.quill'
import { getScripts, getStyles, isCached } from '../../src/js/utils'

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const loadResources = async (js, css) => {
  if (css) {
    getStyles(css)
  }
  if (js && !isCached(js)) {
    await getScripts(js)
  }
}

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
    test('can render TinyMCE', async () => {
      const controlInstance = new controlTinymce({
        'type': 'textarea',
        'required': false,
        'label': 'Test tinymce element',
        'className': 'form-control',
        'name': 'tinymce-elem',
        'access': false,
        'subtype': 'tinymce',
      }, false)
      controlInstance.configure()
      const element = controlInstance.build()
      expect(element.constructor.name).toBe('HTMLTextAreaElement')
      expect(element.type).toBe('textarea')

      window.document.body.appendChild(element) //Element must be attached to dom for tinymce theme to work otherwise exception thrown

      await loadResources(controlInstance.js, controlInstance.css)

      expect(window.tinymce).not.toBeUndefined()
      controlInstance.onRender()
      await sleep(2000)
      expect(window.tinymce.get('tinymce-elem')).not.toBeNull()
    })

    test('can render Quill', async () => {
      const controlInstance = new controlQuill({
        'type': 'textarea',
        'required': false,
        'label': 'Test quill element',
        'className': 'form-control',
        'name': 'quill-elem',
        'access': false,
        'subtype': 'quill',
      }, false)
      controlInstance.configure()
      const element = controlInstance.build()
      expect(element.constructor.name).toBe('HTMLDivElement')

      window.document.body.appendChild(element) //Element must be attached to dom for quill to work otherwise exception thrown

      await loadResources(controlInstance.js, controlInstance.css)
      controlInstance.onRender()
    })
})