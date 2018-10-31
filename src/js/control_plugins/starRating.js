/**
 * Star rating class - show 5 stars with the ability to select a rating
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function(controlClass) {
  /**
   * Star rating class
   */
  class controlStarRating extends controlClass {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        icon: '🌟',
        i18n: {
          default: 'Star Rating'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
      this.js = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.js';
      this.css = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.css';
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
      this.inputId = this.config.name;
      let defaultValue = this.config.value || 3.6;
      this.input = this.markup('input', null, {
        name: this.inputId,
        id: this.inputId,
        value: defaultValue,
        type: 'hidden'
      });

      this.field = this.markup('span', null, { id: this.config.name + "_render" });

      return this.markup('div', [this.input, this.field]);
    }

    /**
     * onRender callback
     */
    onRender() {
      const value = this.config.value || 3.6;
      var targetId = this.config.name;
      $('#' + this.config.name + "_render").rateYo({
          rating: value,
          onSet: function onSet(rating, rateYoInstance) {
            $('#' + targetId).val(rating);
          }
      });
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('starRating', controlStarRating);
  return controlStarRating;
});
