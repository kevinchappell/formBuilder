import control from '../control'

/**
 * Hidden input class
 * Output a <input type="hidden" ... /> form element
 * @extends control
 */
export default class controlHidden extends control {
  /**
   * build a hidden input dom element
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    this.field = this.markup('input', null, this.config)
    return {
      field: this.field,
      layout: 'hidden',
    }
  }

  /**
   * onRender callback
   */
  onRender() {
    // Set userData if available
    if (this.config.userData) {
      $(this.field).val(this.config.userData[0])
    }
  }
}

// register the following controls
control.register('hidden', controlHidden)
