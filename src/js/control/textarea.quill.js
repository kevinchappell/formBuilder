import controlTextarea from './textarea';

/**
 * Quill rich text editor element
 * See https://quilljs.com/ for more info
 */
export default class controlQuill extends controlTextarea {

  /**
   * configure the quill editor requirements
   */
  configure() {
    this.js = '//cdn.quilljs.com/1.2.4/quill.js';
    this.css = '//cdn.quilljs.com/1.2.4/quill.snow.css';
  }

  /**
   * build a div DOM element to be later replaced with the quill editor
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    // eslint-disable-next-line no-unused-vars
    let {value = '', ...attrs} = this.config;
    this.field = this.markup('div', null, attrs);
    return this.field;
  }

  /**
   * When the element is rendered into the DOM, execute the following code to initialise it
   * @param {Object} evt - event
   */
  onRender(evt) {
    let value = this.config.value || '';
    const Delta = window.Quill.import('delta');
    window.fbEditors.quill[this.id] = {};
    let editor = window.fbEditors.quill[this.id];
    editor.instance = new window.Quill(this.field, {
      modules: {
        toolbar: [
          [{'header': [1, 2, false]}],
          ['bold', 'italic', 'underline'],
          ['code-block']
        ]
      },
      placeholder: this.config.placeholder || '',
      theme: 'snow'
    });
    editor.data = new Delta();
    if (value) {
      editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
    }
    editor.instance.on('text-change', function(delta) {
      editor.data = editor.data.compose(delta);
    });
  }
}

// register quill as a richtext control
controlTextarea.register('quill', controlQuill, 'textarea');
