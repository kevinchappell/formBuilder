'use strict';

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
      var event = document.createEvent('Event');
      event.initEvent(evt, true, true);
      return event;
    };
  })();
}
