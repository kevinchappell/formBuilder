import controlTextarea from './textarea'
import utils, { splitObject } from '../utils'

/**
 * Quill rich text editor element
 * See https://quilljs.com/ for more info
 */
export default class controlQuill extends controlTextarea {
  editorConfig: any
  /**
   * configure the quill editor requirements
   */
  configure() {
    const defaultClassConfig = {
      js: '//cdn.quilljs.com/1.2.4/quill.js',
      css: '//cdn.quilljs.com/1.2.4/quill.snow.css',
    }

    const defaultEditorConfig = {
      modules: {
        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['code-block']],
      },
      placeholder: this.config.placeholder || '',
      theme: 'snow',
    }

    const [customClassConfig, customEditorConfig] = splitObject(this.classConfig, ['css', 'js'])

    // Allow for customization of the control
    Object.assign(this, {
      ...defaultClassConfig,
      ...customClassConfig,
    })

    // Allow for customization of the editor
    this.editorConfig = {
      ...defaultEditorConfig,
      ...customEditorConfig,
    }
  }

  /**
   * build a div DOM element to be later replaced with the quill editor
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    // eslint-disable-next-line no-unused-vars
    const { value = '', ...attrs } = this.config
    //Textareas do not have an attribute 'type'
    delete attrs['type']
    this.field = this.markup('div', null, attrs)
    return this.field
  }

  /**
   * When the element is rendered into the DOM, execute the following code to initialise it
   * @param {Object} evt - event
   */
  onRender(evt) {
    const value = this.config.value || ''
    const Delta = window.Quill.import('delta')
    window.fbEditors.quill[this.id] = {}
    const editor = window.fbEditors.quill[this.id]
    editor.instance = new window.Quill(this.field, this.editorConfig)
    editor.data = new Delta()
    if (value) {
      editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)))
    }
    editor.instance.on('text-change', function (delta) {
      editor.data = editor.data.compose(delta)
    })
    return evt
  }
}

// register quill as a richtext control
controlTextarea.register('quill', controlQuill, 'textarea')
