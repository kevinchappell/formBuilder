'use strict';

// Polyfill for Object.assign
if (typeof Object.assign !== 'function') {
  (function() {
    Object.assign = (target) => {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

// Element.remove() polyfill
if (typeof Element.remove !== 'function') {
  (function() {
    Element.prototype.remove = () => {
      this.parentElement.removeChild(this);
    };
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
      for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
        }
      }
    };
  })();
}

// Event polyfill
if (typeof Event !== 'function') {
  (function() {
    Event = (evt) => {
      var event = document.createEvent('Event');
      event.initEvent(evt, true, true);
      return event;
    };
  })();
}
