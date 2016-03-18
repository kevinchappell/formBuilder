'use strict';

// Polyfill for Object.assign
if (typeof Object.assign !== 'function') {
  (function() {
    Object.assign = function(target) {
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

/**
 * Nice syntax for testing if element is in array
 * @param  {String|Object} needle
 * @return {Boolean}
 */
Array.prototype.inArray = function(needle) {
  return this.indexOf(needle) !== -1;
};


/**
 * Remove duplicates from an array of elements
 * @param  {array} arrArg array with possible duplicates
 * @return {array}        array with only unique values
 */
Array.prototype.unique = function() {
  return this.filter((elem, pos, arr) => {
    return arr.indexOf(elem) === pos;
  });
};

// Remove specific values from array. use sparingly
Array.prototype.remove = function() {
  var what, a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

// Lets us loop and map through NodeLists
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;
