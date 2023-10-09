/**
 * Star rating class - show 5 stars with the ability to select a rating
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = []
window.fbControls.push(function(controlClass) {
  /**
   * Star rating class
   * @extends control
   */
  class controlStarRating extends controlClass {
    /**
     * Class configuration - return the icons & label related to this control
     * @return {Object} definition object
     */
    static get definition() {
      return {
        icon: '🌟',
        i18n: {
          default: 'Star Rating',
        },
      }
    }

    /**
     * javascript & css to load
     */
    configure() {
      this.js = 'https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js'
      this.css = 'https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css'
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {HTMLElement|Object|HTMLElement[]} DOM Element to be injected into the form.
     */
    build() {
      this.input = this.markup('input', null, { ...this.config, type: 'hidden', })
      this.field = this.markup('span')
      return [this.input, this.field]
    }

    /**
     * onRender callback
     */
    onRender() {
      const value = this.config.userData ? this.config.userData[0] : this.config.value || 3.6
      const input = $(this.input)
      $(this.field).rateYo({
        rating: value,
        onSet: function(rating) {
          input.val(rating)
        }
      })
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('starRating', controlStarRating)
  return controlStarRating
})
