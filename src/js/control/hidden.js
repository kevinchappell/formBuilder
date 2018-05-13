import control from '../control';

/**
 * Hidden input class
 * Output a <input type="hidden" ... /> form element
 */
export default class controlHidden extends control {

  /**
   * build a hidden input dom element
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    return {
      field: this.markup('input', null, this.config),
      layout: 'hidden'
    };
  }

    /**
   * onRender callback
   */
  onRender() {
    // Set userData if available
    if(this.config.userData){       
      $('#'+this.config.name).val(this.config.userData[0]);        
    }
  }
}

// register the following controls
control.register('hidden', controlHidden);
