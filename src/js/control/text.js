import {control} from '../control';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export class controlText extends control {

  // class definition used in the builder interface & rendering this control
  // static get definition() {
  //   return {
  //     id: 'text',
  //     label: 'Text'
  //   }
  // }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return DOM Element to be injected into the form.
   */
  build() {
    return this.markup('input', null, this.config);
  }
}

// register this control for the following types & text subtypes
control.register(['text','file', 'date'], controlText);
control.register(['password', 'email', 'color', 'tel', 'number'], controlText, 'text');