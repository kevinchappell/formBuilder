/**
 * Polyfills for older browsers and added functionality
 * @return {void}
 */
function polyfills() {
  // Element.remove() polyfill
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  // Event polyfill
  if (typeof Event !== 'function') {
    (function() {
      window.Event = function(evt) {
        let event = document.createEvent('Event');
        event.initEvent(evt, true, true);
        return event;
      };
    })();
  }

  // Object.assign polyfill
  if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
      'use strict';
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (let index = 1; index < arguments.length; index++) {
        let source = arguments[index];
        if (source != null) {
          for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
}

module.exports = polyfills();
