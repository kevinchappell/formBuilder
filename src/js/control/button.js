import control from '../control'

/**
 * Button class
 * Output a <button>Label</button> form element
 * @extends control
 */
export default class controlButton extends control {
  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {{field: HTMLElement, layout: string}} DOM Element to be injected into the form.
   */
  build() {
    return {
      field: this.markup('button', this.label, this.config),
      layout: 'noLabel',
    }
  }
}

// register the following controls
control.register('button', controlButton)
control.register(['button', 'submit', 'reset'], controlButton, 'button')
