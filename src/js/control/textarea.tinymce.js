import controlTextarea from './textarea'

/**
 * TinyMCE editor element
 * See https://www.tinymce.com/ for more info
 *
 * To customise the options on this editor, simply pass any properties you wish to overwrite in the controlConfig option to formRender
 * e.g. the below example would disable the ability to paste images as a base64 encoded src
 * ```
 * var renderOpts = {
 *    controlConfig: {
 *      'textarea.tinymce': {
 *         paste_data_images: false
 *       }
 *    }
 * };
 * ```
 * @extends controlTextarea
 */
export default class controlTinymce extends controlTextarea {
  /**
   * configure the tinymce editor requirements
   */
  configure() {
    this.js = []
    if (!window.tinymce) {
      this.js.push('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.11/tinymce.min.js')
    }

    // additional javascript config
    if (this.classConfig.js) {
      let js = this.classConfig.js
      if (!Array.isArray(js)) {
        js = new Array(js)
      }
      this.js = this.js.concat(js)
      delete this.classConfig.js
    }

    // additional css config
    if (this.classConfig.css) {
      this.css = this.classConfig.css
    }

    // configure the tinyMCE editor defaults
    this.editorOptions = {
      height: 250,
      paste_data_images: true,
      plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'print', 'preview', 'anchor',
               'searchreplace', 'visualblocks', 'code', 'fullscreen',
               'insertdatetime', 'media', 'table', 'contextmenu', 'paste', 'code'],
      toolbar:
        'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table',
    }
  }

  /**
   * build a textarea DOM element, to be later replaced by the TinyMCE editor
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    const { value = '', ...attrs } = this.config
    //Textareas do not have an attribute 'type'
    delete attrs['type']
    this.field = this.markup('textarea', this.parsedHtml(value), attrs)
    // Make the editor read only if disabled is set on the textarea
    if (attrs.disabled) {
      this.editorOptions.readonly = true
    }
    return this.field
  }

  /**
   * When the element is rendered into the DOM, execute the following code to initialise it
   */
  onRender() {
    const oldInst = window.tinymce.get(this.id)
    if (oldInst) {
      window.tinymce.remove(oldInst)
    }

    // define options & allow them to be overwritten in the class config
    const options = jQuery.extend(this.editorOptions, this.classConfig)
    options.target = this.field

    //Remove any defined plugins from the list if they have been removed or moved to Core as part of major version updates
    const removedPlugins = []
    if (Number(window.tinymce.majorVersion) >= 5) {
      removedPlugins.push('contextmenu')
    }
    if (Number(window.tinymce.majorVersion) >= 6) {
      removedPlugins.push('paste','print')
    }
    options.plugins = options.plugins.filter(plugin => {
      return (removedPlugins.indexOf(plugin) === -1)
    })

    const userData = this.config.userData ? this.parsedHtml(this.config.userData[0]) : undefined
    const copiedData = window.lastFormBuilderCopiedTinyMCE ? this.parsedHtml(window.lastFormBuilderCopiedTinyMCE) : undefined
    window.lastFormBuilderCopiedTinyMCE = null
    const afterInit = function (inst) {
      // Set userData
      if (copiedData) {
        inst[0].setContent(copiedData)
      } else if (userData) {
        inst[0].setContent(userData)
      }
    }

    setTimeout(() => {
      // initialise the editor within a timeout so that the main thread can continue while tinymce initialises
      window.tinymce.init(options).then(afterInit)
    }, 0)
  }
}

// register tinymce as a richtext control
controlTextarea.register('tinymce', controlTinymce, 'textarea')
