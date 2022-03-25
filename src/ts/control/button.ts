import Control from 'ts/shared/control'

/**
 * Button class
 * Output a <button>Label</button> form element
 */
export default class controlButton extends Control {
  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    return {
      field: this.markup('button', controlButton.label, this.config),
      layout: 'noLabel',
    }
  }
}

// register the following controls
Control.register('button', controlButton)
Control.register(['button', 'submit', 'reset'], controlButton, 'button')
