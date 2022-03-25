import Control from 'ts/shared/control'

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controlText extends Control {
  dom: any
  /**
   * class configuration
   */
  static get definition() {
    return {
      // mi18n custom mappings (defaults to camelCase type)
      mi18n: {
        date: 'dateField',
        file: 'fileUpload',
      },
    }
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    let { name } = this.config
    name = this.config.multiple ? `${name}[]` : name
    const inputConfig = Object.assign({}, this.config, { name })
    this.dom = this.markup('input', null, inputConfig)
    return this.dom
  }

  /**
   * onRender callback
   */
  onRender() {
    super.build()
    // Set userData if available
    if (this.config.userData) {
      $(this.dom).val(this.config.userData[0])
    }
  }
}

// register this control for the following types & text subtypes
Control.register(['text', 'file', 'date', 'number'], controlText)
Control.register(['text', 'password', 'email', 'color', 'tel'], controlText, 'text')
