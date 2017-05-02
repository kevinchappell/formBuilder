import {control} from '../control';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export class controlButton extends control {

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return DOM Element to be injected into the form.
   */
  build() {
    return {
      field: this.markup('button', this.label, this.config),
      layout: 'noLabel'
    };
  }
}

// register the following controls
control.register('button', controlButton);
control.register(['button', 'submit', 'reset'], controlButton, 'button');