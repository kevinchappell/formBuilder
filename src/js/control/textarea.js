import {control} from '../control';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export class controlTextarea extends control {

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return DOM Element to be injected into the form.
   */
  build() {
    let {value = '', ...attrs} = this.config;
    return this.markup('textarea', this.parsedHtml(value), attrs);
  }
}

// register the following controls
control.register('textarea', controlTextarea);