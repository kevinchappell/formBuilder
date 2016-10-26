/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * render the formBuilder XML into html
 * @param  {Object} options
 * @param  {Object} element html element where form will be rendered (optional)
 * @return {Object} formRender instance
 */
function FormRender(options, element) {
  var utils = require('./utils.js');

  var formRender = this;
  var defaults = {
    destroyTemplate: true, // @todo
    container: false,
    dataType: 'json',
    formData: false,
    messages: {
      formRendered: 'Form Rendered',
      noFormData: 'No form data.',
      other: 'Other',
      selectColor: 'Select Color'
    },
    onRender: function onRender() {},
    render: true,
    notify: {
      error: function error(message) {
        return console.error(message);
      },
      success: function success(message) {
        return console.log(message);
      },
      warning: function warning(message) {
        return console.warn(message);
      }
    }
  };

  var opts = $.extend(true, defaults, options);

  (function () {
    if (!opts.formData) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return utils.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    opts.formData = setData[opts.dataType](opts.formData) || false;
  })();

  /**
   * Extend Element prototype to allow us to append fields
   *
   * @param  {Object} fields Node elements
   */
  Element.prototype.appendFormFields = function (fields) {
    var element = this;
    fields.forEach(function (field) {
      return element.appendChild(field);
    });
  };

  /**
   * Extend Element prototype to remove content
   */
  Element.prototype.emptyContainer = function () {
    var element = this;
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  };

  var runCallbacks = function runCallbacks() {
    if (opts.onRender) {
      opts.onRender();
    }
  };

  var santizeField = function santizeField(field) {
    var sanitizedField = Object.assign({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;

    if (field.values) {
      field.values = field.values.map(function (option) {
        return utils.trimObj(option);
      });
    }

    return utils.trimObj(sanitizedField);
  };

  var exportMarkup = function exportMarkup(fields) {
    return fields.map(function (elem) {
      return elem.innerHTML;
    }).join('');
  };

  // Begin the core plugin
  var rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (var i = 0; i < opts.formData.length; i++) {
      var sanitizedField = santizeField(opts.formData[i]);
      rendered.push(utils.fieldRender(sanitizedField, opts));
    }

    if (opts.render) {
      if (opts.container) {
        var renderedFormWrap = utils.markup('div', rendered, {
          className: 'rendered-form'
        });
        if (opts.container instanceof jQuery) {
          opts.container = opts.container[0];
        }
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.messages.formRendered);
    } else {
      formRender.markup = exportMarkup(rendered);
    }
  } else {
    var noData = utils.markup('div', opts.messages.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.messages.noFormData);
  }

  return formRender;
}

(function ($) {
  $.fn.formRender = function (options) {
    var elems = this;
    elems.each(function (i) {
      var formRender = new FormRender(options, elems[i]);
      elems[i].dataset.formRender = formRender;
      return formRender;
    });
  };
})(jQuery);

window.FormRender = FormRender;

exports.default = FormRender;

},{"./utils.js":2}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (fbUtils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && fbUtils.validAttr(attr)) {
      attr = fbUtils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

fbUtils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || fbUtils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
fbUtils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {String}
 */
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = void 0,
      field = document.createElement(tag),
      getContentType = function getContentType(content) {
    return Array.isArray(content) ? 'array' : typeof content === 'undefined' ? 'undefined' : _typeof(content);
  },
      appendContent = {
    string: function string(content) {
      field.innerHTML = content;
    },
    object: function object(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = getContentType(content[i]);
        appendContent[contentType](content[i]);
      }
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  contentType = getContentType(content);

  if (content) {
    appendContent[contentType].call(this, content);
  }

  return field;
};

/**
 * Convert html element attributes to key/value object
 * @param  {Object} DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

/**
 * Convert field options to optionData
 * @param  {Object} DOM element
 * @return {Array}      optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option'),
      optionData = {},
      data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = fbUtils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }
  }

  return data;
};

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml'),
      formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = fbUtils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} arrArg array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

/**
 * Generate preview markup
 * @param  {Object}  fieldData
 * @param  {Object}  opts
 * @param  {Boolean} preview
 * @return {String}  preview markup for field
 */
fbUtils.fieldRender = function (fieldData, opts) {
  var preview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var fieldMarkup = '';
  var fieldLabel = '';
  var optionsMarkup = '';
  var fieldLabelText = fieldData.label || '';
  var fieldDesc = fieldData.description || '';
  var fieldRequired = '';
  var fieldOptions = fieldData.values;

  fieldData.name = preview ? fieldData.name + '-preview' : fieldData.name;
  fieldData.id = fieldData.name;
  if (fieldData.multiple) {
    fieldData.name = fieldData.name + '[]';
  }

  fieldData.type = fieldData.subtype || fieldData.type;

  if (fieldData.required) {
    fieldData.required = null;
    fieldData['aria-required'] = 'true';
    fieldRequired = '<span class="required">*</span>';
  }

  if (fieldData.type !== 'hidden') {
    if (fieldDesc) {
      fieldDesc = '<span class="tooltip-element" tooltip="' + fieldDesc + '">?</span>';
    }
    fieldLabel = '<label for="' + fieldData.id + '" class="fb-' + fieldData.type + '-label">' + fieldLabelText + ' ' + fieldRequired + ' ' + fieldDesc + '</label>';
  }

  var fieldLabelVal = fieldData.label;

  delete fieldData.label;
  delete fieldData.description;

  var fieldDataString = fbUtils.attrString(fieldData);

  switch (fieldData.type) {
    case 'textarea':
    case 'rich-text':
      delete fieldData.type;
      var fieldVal = fieldData.value || '';
      fieldMarkup = fieldLabel + '<textarea ' + fieldDataString + '>' + fieldVal + '</textarea>';
      break;
    case 'select':
      var optionAttrsString = void 0;
      fieldData.type = fieldData.type.replace('-group', '');

      if (fieldOptions) {
        if (fieldData.placeholder) {
          optionsMarkup += '<option disabled selected>' + fieldData.placeholder + '</option>';
        }

        for (var i = 0; i < fieldOptions.length; i++) {
          if (!fieldOptions[i].selected || fieldData.placeholder) {
            delete fieldOptions[i].selected;
          }
          if (!fieldOptions[i].label) {
            fieldOptions[i].label = '';
          }
          optionAttrsString = fbUtils.attrString(fieldOptions[i]);
          optionsMarkup += '<option ' + optionAttrsString + '>' + fieldOptions[i].label + '</option>';
        }
      }

      fieldMarkup = fieldLabel + '<select ' + fieldDataString + '>' + optionsMarkup + '</select>';
      break;
    case 'checkbox-group':
    case 'radio-group':
      var optionAttrs = void 0;
      fieldData.type = fieldData.type.replace('-group', '');

      if (fieldData.type === 'checkbox') {
        fieldData.name = fieldData.name + '[]';
      }

      if (fieldOptions) {
        var _optionAttrsString = void 0;

        for (var _i = 0; _i < fieldOptions.length; _i++) {
          optionAttrs = Object.assign({ value: '', label: '' }, fieldData, fieldOptions[_i]);

          if (optionAttrs.selected) {
            delete optionAttrs.selected;
            optionAttrs.checked = null;
          }

          optionAttrs.id = fieldData.id + '-' + _i;
          _optionAttrsString = fbUtils.attrString(optionAttrs);
          optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + optionAttrs.id + '">' + optionAttrs.label + '</label><br>';
        }

        if (fieldData.other) {
          var otherOptionAttrs = {
            id: fieldData.id + '-' + 'other',
            className: fieldData.className + ' other-option',
            onclick: 'fbUtils.otherOptionCB(\'' + fieldData.id + '-other\')'
          };

          _optionAttrsString = fbUtils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

          optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + otherOptionAttrs.id + '">' + opts.messages.other + '</label> <input type="text" name="' + fieldData.name + '" id="' + otherOptionAttrs.id + '-value" style="display:none;" />';
        }
      }
      fieldMarkup = fieldLabel + '<div class="' + fieldData.type + '-group">' + optionsMarkup + '</div>';
      break;
    case 'text':
    case 'password':
    case 'email':
    case 'number':
    case 'file':
    case 'hidden':
    case 'date':
    case 'tel':
    case 'autocomplete':
      fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '>';
      break;
    case 'color':
      fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '> ' + opts.messages.selectColor;
      break;
    case 'button':
    case 'submit':
      fieldMarkup = '<button ' + fieldDataString + '>' + fieldLabelVal + '</button>';
      break;
    case 'checkbox':
      fieldMarkup = '<input ' + fieldDataString + '> ' + fieldLabel;

      if (fieldData.toggle) {
        setTimeout(function () {
          $(document.getElementById(fieldData.id)).kcToggle();
        }, 100);
      }
      break;
    default:
      fieldMarkup = '<' + fieldData.type + ' ' + fieldDataString + '>' + fieldLabelVal + '</' + fieldData.type + '>';
  }

  if (fieldData.type !== 'hidden') {
    var className = fieldData.id ? 'fb-' + fieldData.type + ' form-group field-' + fieldData.id : '';
    fieldMarkup = fbUtils.markup('div', fieldMarkup, {
      className: className
    });
  } else {
    fieldMarkup = fbUtils.markup('input', null, fieldData);
  }

  return fieldMarkup;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
fbUtils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInput.style.display = 'none';
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInput.style.display = 'inline-block';
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};
//   return fbUtils;
// }

module.exports = fbUtils;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZm9ybS1yZW5kZXIuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBOzs7Ozs7QUFNQSxTQUFTLFVBQVQsQ0FBb0IsT0FBcEIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDcEMsTUFBTSxRQUFRLFFBQVEsWUFBUixDQUFkOztBQUVBLE1BQU0sYUFBYSxJQUFuQjtBQUNBLE1BQU0sV0FBVztBQUNiLHFCQUFpQixJQURKLEVBQ1U7QUFDdkIsZUFBVyxLQUZFO0FBR2IsY0FBVSxNQUhHO0FBSWIsY0FBVSxLQUpHO0FBS2IsY0FBVTtBQUNSLG9CQUFjLGVBRE47QUFFUixrQkFBWSxlQUZKO0FBR1IsYUFBTyxPQUhDO0FBSVIsbUJBQWE7QUFKTCxLQUxHO0FBV2IsY0FBVSxvQkFBTSxDQUFFLENBWEw7QUFZYixZQUFRLElBWks7QUFhYixZQUFRO0FBQ04sYUFBTyxlQUFTLE9BQVQsRUFBa0I7QUFDdkIsZUFBTyxRQUFRLEtBQVIsQ0FBYyxPQUFkLENBQVA7QUFDRCxPQUhLO0FBSU4sZUFBUyxpQkFBUyxPQUFULEVBQWtCO0FBQ3pCLGVBQU8sUUFBUSxHQUFSLENBQVksT0FBWixDQUFQO0FBQ0QsT0FOSztBQU9OLGVBQVMsaUJBQVMsT0FBVCxFQUFrQjtBQUN6QixlQUFPLFFBQVEsSUFBUixDQUFhLE9BQWIsQ0FBUDtBQUNEO0FBVEs7QUFiSyxHQUFqQjs7QUEwQkEsTUFBSSxPQUFPLEVBQUUsTUFBRixDQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCLE9BQXpCLENBQVg7O0FBRUEsR0FBQyxZQUFXO0FBQ1YsUUFBSSxDQUFDLEtBQUssUUFBVixFQUFvQjtBQUNsQixhQUFPLEtBQVA7QUFDRDs7QUFFRCxRQUFJLFVBQVU7QUFDWixXQUFLO0FBQUEsZUFBWSxNQUFNLFFBQU4sQ0FBZSxRQUFmLENBQVo7QUFBQSxPQURPO0FBRVosWUFBTTtBQUFBLGVBQVksT0FBTyxJQUFQLENBQVksS0FBWixDQUFrQixRQUFsQixDQUFaO0FBQUE7QUFGTSxLQUFkOztBQUtBLFNBQUssUUFBTCxHQUFnQixRQUFRLEtBQUssUUFBYixFQUF1QixLQUFLLFFBQTVCLEtBQXlDLEtBQXpEO0FBQ0QsR0FYRDs7QUFhQTs7Ozs7QUFLQSxVQUFRLFNBQVIsQ0FBa0IsZ0JBQWxCLEdBQXFDLFVBQVMsTUFBVCxFQUFpQjtBQUNwRCxRQUFJLFVBQVUsSUFBZDtBQUNBLFdBQU8sT0FBUCxDQUFlO0FBQUEsYUFBUyxRQUFRLFdBQVIsQ0FBb0IsS0FBcEIsQ0FBVDtBQUFBLEtBQWY7QUFDRCxHQUhEOztBQUtBOzs7QUFHQSxVQUFRLFNBQVIsQ0FBa0IsY0FBbEIsR0FBbUMsWUFBVztBQUM1QyxRQUFJLFVBQVUsSUFBZDtBQUNBLFdBQU8sUUFBUSxTQUFmLEVBQTBCO0FBQ3hCLGNBQVEsV0FBUixDQUFvQixRQUFRLFNBQTVCO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQUksZUFBZSxTQUFmLFlBQWUsR0FBVztBQUM1QixRQUFJLEtBQUssUUFBVCxFQUFtQjtBQUNqQixXQUFLLFFBQUw7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBSSxlQUFlLFNBQWYsWUFBZSxDQUFDLEtBQUQsRUFBVztBQUM1QixRQUFJLGlCQUFpQixPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLENBQXJCO0FBQ0EsbUJBQWUsU0FBZixHQUEyQixNQUFNLFNBQU4sSUFBbUIsTUFBTSxLQUF6QixJQUFrQyxJQUE3RDtBQUNBLFdBQU8sZUFBZSxLQUF0Qjs7QUFFQSxRQUFJLE1BQU0sTUFBVixFQUFrQjtBQUNoQixZQUFNLE1BQU4sR0FBZSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQWlCO0FBQUEsZUFBVSxNQUFNLE9BQU4sQ0FBYyxNQUFkLENBQVY7QUFBQSxPQUFqQixDQUFmO0FBQ0Q7O0FBRUQsV0FBTyxNQUFNLE9BQU4sQ0FBYyxjQUFkLENBQVA7QUFDRCxHQVZEOztBQVlBLE1BQUksZUFBZSxTQUFmLFlBQWU7QUFBQSxXQUFVLE9BQU8sR0FBUCxDQUFXO0FBQUEsYUFBUSxLQUFLLFNBQWI7QUFBQSxLQUFYLEVBQW1DLElBQW5DLENBQXdDLEVBQXhDLENBQVY7QUFBQSxHQUFuQjs7QUFFQTtBQUNBLE1BQUksV0FBVyxFQUFmOztBQUVBO0FBQ0EsTUFBSSxLQUFLLFFBQVQsRUFBbUI7QUFDakIsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssUUFBTCxDQUFjLE1BQWxDLEVBQTBDLEdBQTFDLEVBQStDO0FBQzdDLFVBQUksaUJBQWlCLGFBQWEsS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFiLENBQXJCO0FBQ0EsZUFBUyxJQUFULENBQWMsTUFBTSxXQUFOLENBQWtCLGNBQWxCLEVBQWtDLElBQWxDLENBQWQ7QUFDRDs7QUFFRCxRQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNmLFVBQUksS0FBSyxTQUFULEVBQW9CO0FBQ2xCLFlBQUksbUJBQW1CLE1BQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsUUFBcEIsRUFBOEI7QUFDbkQscUJBQVc7QUFEd0MsU0FBOUIsQ0FBdkI7QUFHQSxZQUFJLEtBQUssU0FBTCxZQUEwQixNQUE5QixFQUFzQztBQUNwQyxlQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFqQjtBQUNEO0FBQ0QsYUFBSyxTQUFMLENBQWUsY0FBZjtBQUNBLGFBQUssU0FBTCxDQUFlLFdBQWYsQ0FBMkIsZ0JBQTNCO0FBQ0QsT0FURCxNQVNPLElBQUksT0FBSixFQUFhO0FBQ2xCLGdCQUFRLGNBQVI7QUFDQSxnQkFBUSxnQkFBUixDQUF5QixRQUF6QjtBQUNEOztBQUVEO0FBQ0EsV0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixLQUFLLFFBQUwsQ0FBYyxZQUFsQztBQUNELEtBakJELE1BaUJPO0FBQ0wsaUJBQVcsTUFBWCxHQUFvQixhQUFhLFFBQWIsQ0FBcEI7QUFDRDtBQUNGLEdBMUJELE1BMEJPO0FBQ0wsUUFBSSxTQUFTLE1BQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsS0FBSyxRQUFMLENBQWMsVUFBbEMsRUFBOEM7QUFDekQsaUJBQVc7QUFEOEMsS0FBOUMsQ0FBYjtBQUdBLGFBQVMsSUFBVCxDQUFjLE1BQWQ7QUFDQSxTQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEtBQUssUUFBTCxDQUFjLFVBQWhDO0FBQ0Q7O0FBRUQsU0FBTyxVQUFQO0FBQ0Q7O0FBRUQsQ0FBQyxVQUFTLENBQVQsRUFBWTtBQUNYLElBQUUsRUFBRixDQUFLLFVBQUwsR0FBa0IsVUFBUyxPQUFULEVBQWtCO0FBQ2xDLFFBQUksUUFBUSxJQUFaO0FBQ0EsVUFBTSxJQUFOLENBQVcsVUFBUyxDQUFULEVBQVk7QUFDckIsVUFBSSxhQUFhLElBQUksVUFBSixDQUFlLE9BQWYsRUFBd0IsTUFBTSxDQUFOLENBQXhCLENBQWpCO0FBQ0EsWUFBTSxDQUFOLEVBQVMsT0FBVCxDQUFpQixVQUFqQixHQUE4QixVQUE5QjtBQUNBLGFBQU8sVUFBUDtBQUNELEtBSkQ7QUFLRCxHQVBEO0FBUUQsQ0FURCxFQVNHLE1BVEg7O0FBV0EsT0FBTyxVQUFQLEdBQW9CLFVBQXBCOztrQkFFZSxVOzs7Ozs7O0FDakpmOzs7OztBQUtBO0FBQ0UsSUFBTSxVQUFVLEVBQWhCOztBQUVBO0FBQ0EsUUFBUSxPQUFSLEdBQWtCLFVBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQjtBQUMzQyxTQUFPLFNBQVMsT0FBVCxDQUFpQixNQUFqQixNQUE2QixDQUFDLENBQXJDO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQSxRQUFRLE9BQVIsR0FBa0IsVUFBUyxLQUFULEVBQWdCO0FBQ2hDLE1BQUksWUFBWSxDQUNkLElBRGMsRUFFZCxTQUZjLEVBR2QsRUFIYyxFQUlkLEtBSmMsRUFLZCxPQUxjLENBQWhCO0FBT0EsT0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxRQUFRLE9BQVIsQ0FBZ0IsTUFBTSxJQUFOLENBQWhCLEVBQTZCLFNBQTdCLENBQUosRUFBNkM7QUFDM0MsYUFBTyxNQUFNLElBQU4sQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJLE1BQU0sT0FBTixDQUFjLE1BQU0sSUFBTixDQUFkLENBQUosRUFBZ0M7QUFDckMsVUFBSSxDQUFDLE1BQU0sSUFBTixFQUFZLE1BQWpCLEVBQXlCO0FBQ3ZCLGVBQU8sTUFBTSxJQUFOLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7OztBQUtBLFFBQVEsU0FBUixHQUFvQixVQUFTLElBQVQsRUFBZTtBQUNqQyxNQUFJLFVBQVUsQ0FDWixRQURZLEVBRVosYUFGWSxFQUdaLE9BSFksRUFJWixPQUpZO0FBS1o7QUFDQSxXQU5ZLENBQWQ7QUFRQSxTQUFPLENBQUMsUUFBUSxPQUFSLENBQWdCLElBQWhCLEVBQXNCLE9BQXRCLENBQVI7QUFDRCxDQVZEOztBQVlBOzs7Ozs7QUFNQSxRQUFRLFVBQVIsR0FBcUIsVUFBUyxLQUFULEVBQWdCO0FBQ25DLE1BQUksYUFBYSxFQUFqQjs7QUFFQSxPQUFLLElBQUksSUFBVCxJQUFpQixLQUFqQixFQUF3QjtBQUN0QixRQUFJLE1BQU0sY0FBTixDQUFxQixJQUFyQixLQUE4QixRQUFRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbEMsRUFBMkQ7QUFDekQsYUFBTyxRQUFRLFFBQVIsQ0FBaUIsSUFBakIsRUFBdUIsTUFBTSxJQUFOLENBQXZCLENBQVA7QUFDQSxpQkFBVyxJQUFYLENBQWdCLEtBQUssSUFBTCxHQUFZLEtBQUssS0FBakM7QUFDRDtBQUNGO0FBQ0QsU0FBTyxXQUFXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBUDtBQUNELENBVkQ7O0FBWUE7Ozs7OztBQU1BLFFBQVEsUUFBUixHQUFtQixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ3ZDLFNBQU8sUUFBUSxZQUFSLENBQXFCLElBQXJCLENBQVA7QUFDQSxNQUFJLGtCQUFKOztBQUVBLE1BQUksS0FBSixFQUFXO0FBQ1QsUUFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFkLENBQUosRUFBMEI7QUFDeEIsa0JBQVksUUFBUSxVQUFSLENBQW1CLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBbkIsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksT0FBTyxLQUFQLEtBQWtCLFNBQXRCLEVBQWlDO0FBQy9CLGdCQUFRLE1BQU0sUUFBTixFQUFSO0FBQ0Q7QUFDRCxrQkFBWSxRQUFRLFVBQVIsQ0FBbUIsTUFBTSxPQUFOLENBQWMsR0FBZCxFQUFtQixHQUFuQixFQUF3QixJQUF4QixFQUFuQixDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxVQUFRLGVBQWEsU0FBYixTQUE0QixFQUFwQztBQUNBLFNBQU87QUFDTCxjQURLO0FBRUw7QUFGSyxHQUFQO0FBSUQsQ0FwQkQ7O0FBc0JBLFFBQVEsWUFBUixHQUF1QixVQUFTLElBQVQsRUFBZTtBQUNwQyxNQUFJLFdBQVc7QUFDYixlQUFXO0FBREUsR0FBZjs7QUFJQSxTQUFPLFNBQVMsSUFBVCxLQUFrQixRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBekI7QUFDRCxDQU5EOztBQVFBOzs7Ozs7QUFNQSxRQUFRLFVBQVIsR0FBcUIsVUFBQyxHQUFELEVBQVM7QUFDNUIsUUFBTSxJQUFJLE9BQUosQ0FBWSxhQUFaLEVBQTJCLEVBQTNCLENBQU47QUFDQSxRQUFNLElBQUksT0FBSixDQUFZLFVBQVosRUFBd0IsVUFBUyxFQUFULEVBQWE7QUFDekMsV0FBTyxNQUFNLEdBQUcsV0FBSCxFQUFiO0FBQ0QsR0FGSyxDQUFOOztBQUlBLFNBQU8sSUFBSSxPQUFKLENBQVksS0FBWixFQUFtQixHQUFuQixFQUF3QixPQUF4QixDQUFnQyxNQUFoQyxFQUF3QyxFQUF4QyxDQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7QUFLQSxRQUFRLFNBQVIsR0FBb0IsVUFBQyxHQUFELEVBQVM7QUFDM0IsU0FBTyxJQUFJLE9BQUosQ0FBWSxXQUFaLEVBQXlCLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTtBQUM3QyxXQUFPLEVBQUUsV0FBRixFQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRDs7QUFNQTs7Ozs7Ozs7QUFRQSxRQUFRLE1BQVIsR0FBaUIsVUFBUyxHQUFULEVBQXdDO0FBQUEsTUFBMUIsT0FBMEIsdUVBQWhCLEVBQWdCO0FBQUEsTUFBWixLQUFZLHVFQUFKLEVBQUk7O0FBQ3ZELE1BQUksb0JBQUo7QUFBQSxNQUNFLFFBQVEsU0FBUyxhQUFULENBQXVCLEdBQXZCLENBRFY7QUFBQSxNQUVFLGlCQUFpQixTQUFqQixjQUFpQixDQUFTLE9BQVQsRUFBa0I7QUFDakMsV0FBTyxNQUFNLE9BQU4sQ0FBYyxPQUFkLElBQXlCLE9BQXpCLFVBQTBDLE9BQTFDLHlDQUEwQyxPQUExQyxDQUFQO0FBQ0QsR0FKSDtBQUFBLE1BS0UsZ0JBQWdCO0FBQ2QsWUFBUSxnQkFBUyxPQUFULEVBQWtCO0FBQ3hCLFlBQU0sU0FBTixHQUFrQixPQUFsQjtBQUNELEtBSGE7QUFJZCxZQUFRLGdCQUFTLE9BQVQsRUFBa0I7QUFDeEIsYUFBTyxNQUFNLFdBQU4sQ0FBa0IsT0FBbEIsQ0FBUDtBQUNELEtBTmE7QUFPZCxXQUFPLGVBQVMsT0FBVCxFQUFrQjtBQUN2QixXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksUUFBUSxNQUE1QixFQUFvQyxHQUFwQyxFQUF5QztBQUN2QyxzQkFBYyxlQUFlLFFBQVEsQ0FBUixDQUFmLENBQWQ7QUFDQSxzQkFBYyxXQUFkLEVBQTJCLFFBQVEsQ0FBUixDQUEzQjtBQUNEO0FBQ0Y7QUFaYSxHQUxsQjs7QUFvQkEsT0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixVQUFJLE9BQU8sUUFBUSxZQUFSLENBQXFCLElBQXJCLENBQVg7QUFDQSxZQUFNLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUIsTUFBTSxJQUFOLENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxnQkFBYyxlQUFlLE9BQWYsQ0FBZDs7QUFFQSxNQUFJLE9BQUosRUFBYTtBQUNYLGtCQUFjLFdBQWQsRUFBMkIsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsT0FBdEM7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQW5DRDs7QUFxQ0E7Ozs7O0FBS0EsUUFBUSxVQUFSLEdBQXFCLFVBQVMsSUFBVCxFQUFlO0FBQ2xDLE1BQUksUUFBUSxLQUFLLFVBQWpCO0FBQ0EsTUFBSSxPQUFPLEVBQVg7QUFDQSxVQUFRLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsZ0JBQVE7QUFDN0IsUUFBSSxVQUFVLE1BQU0sSUFBTixFQUFZLEtBQTFCO0FBQ0EsUUFBSSxRQUFRLEtBQVIsQ0FBYyxhQUFkLENBQUosRUFBa0M7QUFDaEMsZ0JBQVcsWUFBWSxNQUF2QjtBQUNELEtBRkQsTUFFTyxJQUFJLFFBQVEsS0FBUixDQUFjLFlBQWQsQ0FBSixFQUFpQztBQUN0QyxnQkFBVSxTQUFWO0FBQ0Q7O0FBRUQsUUFBSSxPQUFKLEVBQWE7QUFDWCxXQUFLLE1BQU0sSUFBTixFQUFZLElBQWpCLElBQXlCLE9BQXpCO0FBQ0Q7QUFDRixHQVhEOztBQWFBLFNBQU8sSUFBUDtBQUNELENBakJEOztBQW1CQTs7Ozs7QUFLQSxRQUFRLFlBQVIsR0FBdUIsVUFBUyxLQUFULEVBQWdCO0FBQ3JDLE1BQUksVUFBVSxNQUFNLG9CQUFOLENBQTJCLFFBQTNCLENBQWQ7QUFBQSxNQUNFLGFBQWEsRUFEZjtBQUFBLE1BRUUsT0FBTyxFQUZUOztBQUlBLE1BQUksUUFBUSxNQUFaLEVBQW9CO0FBQ2xCLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFRLE1BQTVCLEVBQW9DLEdBQXBDLEVBQXlDO0FBQ3ZDLG1CQUFhLFFBQVEsVUFBUixDQUFtQixRQUFRLENBQVIsQ0FBbkIsQ0FBYjtBQUNBLGlCQUFXLEtBQVgsR0FBbUIsUUFBUSxDQUFSLEVBQVcsV0FBOUI7QUFDQSxXQUFLLElBQUwsQ0FBVSxVQUFWO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQWREOztBQWdCQTs7Ozs7QUFLQSxRQUFRLFFBQVIsR0FBbUIsVUFBUyxTQUFULEVBQW9CO0FBQ3JDLE1BQU0sU0FBUyxJQUFJLE9BQU8sU0FBWCxFQUFmO0FBQ0EsTUFBSSxNQUFNLE9BQU8sZUFBUCxDQUF1QixTQUF2QixFQUFrQyxVQUFsQyxDQUFWO0FBQUEsTUFDRSxXQUFXLEVBRGI7O0FBR0EsTUFBSSxHQUFKLEVBQVM7QUFDUCxRQUFJLFNBQVMsSUFBSSxvQkFBSixDQUF5QixPQUF6QixDQUFiO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE9BQU8sTUFBM0IsRUFBbUMsR0FBbkMsRUFBd0M7QUFDdEMsVUFBSSxZQUFZLFFBQVEsVUFBUixDQUFtQixPQUFPLENBQVAsQ0FBbkIsQ0FBaEI7O0FBRUEsVUFBSSxPQUFPLENBQVAsRUFBVSxRQUFWLElBQXNCLE9BQU8sQ0FBUCxFQUFVLFFBQVYsQ0FBbUIsTUFBN0MsRUFBcUQ7QUFDbkQsa0JBQVUsTUFBVixHQUFtQixRQUFRLFlBQVIsQ0FBcUIsT0FBTyxDQUFQLENBQXJCLENBQW5CO0FBQ0Q7O0FBRUQsZUFBUyxJQUFULENBQWMsU0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxRQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBOzs7OztBQUtBLFFBQVEsVUFBUixHQUFxQixVQUFTLElBQVQsRUFBZTtBQUNsQyxNQUFJLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBcEI7QUFDQSxnQkFBYyxXQUFkLEdBQTRCLElBQTVCO0FBQ0EsU0FBTyxjQUFjLFNBQXJCO0FBQ0QsQ0FKRDs7QUFNQTtBQUNBLFFBQVEsVUFBUixHQUFxQixVQUFTLEdBQVQsRUFBYztBQUNqQyxNQUFJLFFBQVE7QUFDVixTQUFLLFFBREs7QUFFVixTQUFLLE9BRks7QUFHVixTQUFLLE1BSEs7QUFJVixTQUFLO0FBSkssR0FBWjs7QUFPQSxNQUFNLGFBQWEsU0FBYixVQUFhO0FBQUEsV0FBTyxNQUFNLEdBQU4sS0FBYyxHQUFyQjtBQUFBLEdBQW5COztBQUVBLFNBQVEsT0FBTyxHQUFQLEtBQWUsUUFBaEIsR0FBNEIsSUFBSSxPQUFKLENBQVksU0FBWixFQUF1QixVQUF2QixDQUE1QixHQUFpRSxHQUF4RTtBQUNELENBWEQ7O0FBYUE7QUFDQSxRQUFRLFdBQVIsR0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLE9BQUssSUFBSSxJQUFULElBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQUksTUFBTSxjQUFOLENBQXFCLElBQXJCLENBQUosRUFBZ0M7QUFDOUIsWUFBTSxJQUFOLElBQWMsUUFBUSxVQUFSLENBQW1CLE1BQU0sSUFBTixDQUFuQixDQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQVJEOztBQVVBO0FBQ0EsUUFBUSxPQUFSLEdBQWtCLFVBQVMsS0FBVCxFQUFnQixRQUFoQixFQUEwQixLQUExQixFQUFpQztBQUNqRCxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxhQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLENBQXJCLEVBQXdCLE1BQU0sQ0FBTixDQUF4QixFQURxQyxDQUNGO0FBQ3BDO0FBQ0YsQ0FKRDs7QUFNQTs7Ozs7QUFLQSxRQUFRLE1BQVIsR0FBaUIsVUFBUyxLQUFULEVBQWdCO0FBQy9CLFNBQU8sTUFBTSxNQUFOLENBQWEsVUFBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBb0I7QUFDdEMsV0FBTyxJQUFJLE9BQUosQ0FBWSxJQUFaLE1BQXNCLEdBQTdCO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRDs7QUFNQTs7Ozs7OztBQU9BLFFBQVEsV0FBUixHQUFzQixVQUFTLFNBQVQsRUFBb0IsSUFBcEIsRUFBMkM7QUFBQSxNQUFqQixPQUFpQix1RUFBUCxLQUFPOztBQUM3RCxNQUFJLGNBQWMsRUFBbEI7QUFDQSxNQUFJLGFBQWEsRUFBakI7QUFDQSxNQUFJLGdCQUFnQixFQUFwQjtBQUNBLE1BQUksaUJBQWlCLFVBQVUsS0FBVixJQUFtQixFQUF4QztBQUNBLE1BQUksWUFBWSxVQUFVLFdBQVYsSUFBeUIsRUFBekM7QUFDQSxNQUFJLGdCQUFnQixFQUFwQjtBQUNBLE1BQUksZUFBZSxVQUFVLE1BQTdCOztBQUVBLFlBQVUsSUFBVixHQUFpQixVQUFVLFVBQVUsSUFBVixHQUFpQixVQUEzQixHQUF3QyxVQUFVLElBQW5FO0FBQ0EsWUFBVSxFQUFWLEdBQWUsVUFBVSxJQUF6QjtBQUNBLE1BQUksVUFBVSxRQUFkLEVBQXdCO0FBQ3RCLGNBQVUsSUFBVixHQUFpQixVQUFVLElBQVYsR0FBaUIsSUFBbEM7QUFDRDs7QUFFRCxZQUFVLElBQVYsR0FBaUIsVUFBVSxPQUFWLElBQXFCLFVBQVUsSUFBaEQ7O0FBRUEsTUFBSSxVQUFVLFFBQWQsRUFBd0I7QUFDdEIsY0FBVSxRQUFWLEdBQXFCLElBQXJCO0FBQ0EsY0FBVSxlQUFWLElBQTZCLE1BQTdCO0FBQ0Esb0JBQWdCLGlDQUFoQjtBQUNEOztBQUVELE1BQUksVUFBVSxJQUFWLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFFBQUksU0FBSixFQUFlO0FBQ2IsOERBQXNELFNBQXREO0FBQ0Q7QUFDRCxrQ0FBNEIsVUFBVSxFQUF0QyxvQkFBdUQsVUFBVSxJQUFqRSxnQkFBZ0YsY0FBaEYsU0FBa0csYUFBbEcsU0FBbUgsU0FBbkg7QUFDRDs7QUFFRCxNQUFJLGdCQUFnQixVQUFVLEtBQTlCOztBQUVBLFNBQU8sVUFBVSxLQUFqQjtBQUNBLFNBQU8sVUFBVSxXQUFqQjs7QUFFQSxNQUFJLGtCQUFrQixRQUFRLFVBQVIsQ0FBbUIsU0FBbkIsQ0FBdEI7O0FBRUEsVUFBUSxVQUFVLElBQWxCO0FBQ0UsU0FBSyxVQUFMO0FBQ0EsU0FBSyxXQUFMO0FBQ0UsYUFBTyxVQUFVLElBQWpCO0FBQ0EsVUFBSSxXQUFXLFVBQVUsS0FBVixJQUFtQixFQUFsQztBQUNBLG9CQUFpQixVQUFqQixrQkFBd0MsZUFBeEMsU0FBMkQsUUFBM0Q7QUFDQTtBQUNGLFNBQUssUUFBTDtBQUNFLFVBQUksMEJBQUo7QUFDQSxnQkFBVSxJQUFWLEdBQWlCLFVBQVUsSUFBVixDQUFlLE9BQWYsQ0FBdUIsUUFBdkIsRUFBaUMsRUFBakMsQ0FBakI7O0FBRUEsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUksVUFBVSxXQUFkLEVBQTJCO0FBQ3pCLDBEQUE4QyxVQUFVLFdBQXhEO0FBQ0Q7O0FBRUQsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGFBQWEsTUFBakMsRUFBeUMsR0FBekMsRUFBOEM7QUFDNUMsY0FBSSxDQUFDLGFBQWEsQ0FBYixFQUFnQixRQUFqQixJQUE2QixVQUFVLFdBQTNDLEVBQXdEO0FBQ3RELG1CQUFPLGFBQWEsQ0FBYixFQUFnQixRQUF2QjtBQUNEO0FBQ0QsY0FBSSxDQUFDLGFBQWEsQ0FBYixFQUFnQixLQUFyQixFQUE0QjtBQUMxQix5QkFBYSxDQUFiLEVBQWdCLEtBQWhCLEdBQXdCLEVBQXhCO0FBQ0Q7QUFDRCw4QkFBb0IsUUFBUSxVQUFSLENBQW1CLGFBQWEsQ0FBYixDQUFuQixDQUFwQjtBQUNBLHdDQUE0QixpQkFBNUIsU0FBaUQsYUFBYSxDQUFiLEVBQWdCLEtBQWpFO0FBQ0Q7QUFDRjs7QUFFRCxvQkFBaUIsVUFBakIsZ0JBQXNDLGVBQXRDLFNBQXlELGFBQXpEO0FBQ0E7QUFDRixTQUFLLGdCQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0UsVUFBSSxvQkFBSjtBQUNBLGdCQUFVLElBQVYsR0FBaUIsVUFBVSxJQUFWLENBQWUsT0FBZixDQUF1QixRQUF2QixFQUFpQyxFQUFqQyxDQUFqQjs7QUFFQSxVQUFJLFVBQVUsSUFBVixLQUFtQixVQUF2QixFQUFtQztBQUNqQyxrQkFBVSxJQUFWLEdBQWlCLFVBQVUsSUFBVixHQUFpQixJQUFsQztBQUNEOztBQUVELFVBQUksWUFBSixFQUFrQjtBQUNoQixZQUFJLDJCQUFKOztBQUVBLGFBQUssSUFBSSxLQUFJLENBQWIsRUFBZ0IsS0FBSSxhQUFhLE1BQWpDLEVBQXlDLElBQXpDLEVBQThDO0FBQzVDLHdCQUFjLE9BQU8sTUFBUCxDQUFjLEVBQUMsT0FBTyxFQUFSLEVBQVksT0FBTyxFQUFuQixFQUFkLEVBQXNDLFNBQXRDLEVBQWlELGFBQWEsRUFBYixDQUFqRCxDQUFkOztBQUVBLGNBQUksWUFBWSxRQUFoQixFQUEwQjtBQUN4QixtQkFBTyxZQUFZLFFBQW5CO0FBQ0Esd0JBQVksT0FBWixHQUFzQixJQUF0QjtBQUNEOztBQUVELHNCQUFZLEVBQVosR0FBaUIsVUFBVSxFQUFWLEdBQWUsR0FBZixHQUFxQixFQUF0QztBQUNBLCtCQUFvQixRQUFRLFVBQVIsQ0FBbUIsV0FBbkIsQ0FBcEI7QUFDQSx1Q0FBMkIsa0JBQTNCLHdCQUErRCxZQUFZLEVBQTNFLFVBQWtGLFlBQVksS0FBOUY7QUFDRDs7QUFFRCxZQUFJLFVBQVUsS0FBZCxFQUFxQjtBQUNuQixjQUFJLG1CQUFtQjtBQUNyQixnQkFBSSxVQUFVLEVBQVYsR0FBZSxHQUFmLEdBQXFCLE9BREo7QUFFckIsdUJBQVcsVUFBVSxTQUFWLEdBQXNCLGVBRlo7QUFHckIsa0RBQW1DLFVBQVUsRUFBN0M7QUFIcUIsV0FBdkI7O0FBTUEsK0JBQW9CLFFBQVEsVUFBUixDQUFtQixPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFNBQWxCLEVBQTZCLGdCQUE3QixDQUFuQixDQUFwQjs7QUFFQSx1Q0FBMkIsa0JBQTNCLHdCQUErRCxpQkFBaUIsRUFBaEYsVUFBdUYsS0FBSyxRQUFMLENBQWMsS0FBckcsMENBQStJLFVBQVUsSUFBekosY0FBc0ssaUJBQWlCLEVBQXZMO0FBQ0Q7QUFDRjtBQUNELG9CQUFpQixVQUFqQixvQkFBMEMsVUFBVSxJQUFwRCxnQkFBbUUsYUFBbkU7QUFDQTtBQUNGLFNBQUssTUFBTDtBQUNBLFNBQUssVUFBTDtBQUNBLFNBQUssT0FBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssS0FBTDtBQUNBLFNBQUssY0FBTDtBQUNFLG9CQUFpQixVQUFqQixnQkFBc0MsZUFBdEM7QUFDQTtBQUNGLFNBQUssT0FBTDtBQUNFLG9CQUFpQixVQUFqQixnQkFBc0MsZUFBdEMsVUFBMEQsS0FBSyxRQUFMLENBQWMsV0FBeEU7QUFDQTtBQUNGLFNBQUssUUFBTDtBQUNBLFNBQUssUUFBTDtBQUNFLGlDQUF5QixlQUF6QixTQUE0QyxhQUE1QztBQUNBO0FBQ0YsU0FBSyxVQUFMO0FBQ0UsZ0NBQXdCLGVBQXhCLFVBQTRDLFVBQTVDOztBQUVBLFVBQUksVUFBVSxNQUFkLEVBQXNCO0FBQ3BCLG1CQUFXLFlBQVc7QUFDcEIsWUFBRSxTQUFTLGNBQVQsQ0FBd0IsVUFBVSxFQUFsQyxDQUFGLEVBQXlDLFFBQXpDO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNEO0FBQ0Y7QUFDRSwwQkFBa0IsVUFBVSxJQUE1QixTQUFvQyxlQUFwQyxTQUF1RCxhQUF2RCxVQUF5RSxVQUFVLElBQW5GO0FBakdKOztBQW9HQSxNQUFJLFVBQVUsSUFBVixLQUFtQixRQUF2QixFQUFpQztBQUMvQixRQUFJLFlBQVksVUFBVSxFQUFWLFdBQXFCLFVBQVUsSUFBL0IsMEJBQXdELFVBQVUsRUFBbEUsR0FBeUUsRUFBekY7QUFDQSxrQkFBYyxRQUFRLE1BQVIsQ0FBZSxLQUFmLEVBQXNCLFdBQXRCLEVBQW1DO0FBQy9DLGlCQUFXO0FBRG9DLEtBQW5DLENBQWQ7QUFHRCxHQUxELE1BS087QUFDTCxrQkFBYyxRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXdCLElBQXhCLEVBQThCLFNBQTlCLENBQWQ7QUFDRDs7QUFFRCxTQUFPLFdBQVA7QUFDRCxDQW5KSDs7QUFxSkE7Ozs7O0FBS0EsUUFBUSxhQUFSLEdBQXdCLFVBQUMsT0FBRCxFQUFhO0FBQ25DLE1BQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbkI7QUFDQSxNQUFNLGtCQUFrQixTQUFTLGNBQVQsQ0FBMkIsT0FBM0IsWUFBeEI7O0FBRUEsTUFBSSxXQUFXLE9BQWYsRUFBd0I7QUFDdEIsZUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0Esb0JBQWdCLEtBQWhCLENBQXNCLE9BQXRCLEdBQWdDLGNBQWhDO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsZUFBVyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLGNBQTNCO0FBQ0Esb0JBQWdCLEtBQWhCLENBQXNCLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0Q7QUFDRixDQVhEOztBQWFBOzs7OztBQUtBLFFBQVEsVUFBUixHQUFxQixVQUFDLEdBQUQsRUFBUztBQUM1QixTQUFPLElBQUksT0FBSixDQUFZLE9BQVosRUFBcUIsVUFBUyxDQUFULEVBQVk7QUFDcEMsV0FBTyxFQUFFLFdBQUYsRUFBUDtBQUNELEdBRkksQ0FBUDtBQUdELENBSkQ7QUFLRjtBQUNBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIHJlbmRlciB0aGUgZm9ybUJ1aWxkZXIgWE1MIGludG8gaHRtbFxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgaHRtbCBlbGVtZW50IHdoZXJlIGZvcm0gd2lsbCBiZSByZW5kZXJlZCAob3B0aW9uYWwpXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZvcm1SZW5kZXIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gRm9ybVJlbmRlcihvcHRpb25zLCBlbGVtZW50KSB7XG4gIGNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuXG4gIGNvbnN0IGZvcm1SZW5kZXIgPSB0aGlzO1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGRlc3Ryb3lUZW1wbGF0ZTogdHJ1ZSwgLy8gQHRvZG9cbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZm9ybURhdGE6IGZhbHNlLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgZm9ybVJlbmRlcmVkOiAnRm9ybSBSZW5kZXJlZCcsXG4gICAgICAgIG5vRm9ybURhdGE6ICdObyBmb3JtIGRhdGEuJyxcbiAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJ1xuICAgICAgfSxcbiAgICAgIG9uUmVuZGVyOiAoKSA9PiB7fSxcbiAgICAgIHJlbmRlcjogdHJ1ZSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgbGV0IG9wdHMgPSAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICghb3B0cy5mb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgb3B0cy5mb3JtRGF0YSA9IHNldERhdGFbb3B0cy5kYXRhVHlwZV0ob3B0cy5mb3JtRGF0YSkgfHwgZmFsc2U7XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBFbGVtZW50IHByb3RvdHlwZSB0byBhbGxvdyB1cyB0byBhcHBlbmQgZmllbGRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGRzIE5vZGUgZWxlbWVudHNcbiAgICovXG4gIEVsZW1lbnQucHJvdG90eXBlLmFwcGVuZEZvcm1GaWVsZHMgPSBmdW5jdGlvbihmaWVsZHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXM7XG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChmaWVsZCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgRWxlbWVudCBwcm90b3R5cGUgdG8gcmVtb3ZlIGNvbnRlbnRcbiAgICovXG4gIEVsZW1lbnQucHJvdG90eXBlLmVtcHR5Q29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuICAgIHdoaWxlIChlbGVtZW50Lmxhc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBydW5DYWxsYmFja3MgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAob3B0cy5vblJlbmRlcikge1xuICAgICAgb3B0cy5vblJlbmRlcigpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgc2FudGl6ZUZpZWxkID0gKGZpZWxkKSA9PiB7XG4gICAgbGV0IHNhbml0aXplZEZpZWxkID0gT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpO1xuICAgIHNhbml0aXplZEZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzTmFtZSB8fCBmaWVsZC5jbGFzcyB8fCBudWxsO1xuICAgIGRlbGV0ZSBzYW5pdGl6ZWRGaWVsZC5jbGFzcztcblxuICAgIGlmIChmaWVsZC52YWx1ZXMpIHtcbiAgICAgIGZpZWxkLnZhbHVlcyA9IGZpZWxkLnZhbHVlcy5tYXAob3B0aW9uID0+IHV0aWxzLnRyaW1PYmoob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLnRyaW1PYmooc2FuaXRpemVkRmllbGQpO1xuICB9O1xuXG4gIGxldCBleHBvcnRNYXJrdXAgPSBmaWVsZHMgPT4gZmllbGRzLm1hcChlbGVtID0+IGVsZW0uaW5uZXJIVE1MKS5qb2luKCcnKTtcblxuICAvLyBCZWdpbiB0aGUgY29yZSBwbHVnaW5cbiAgbGV0IHJlbmRlcmVkID0gW107XG5cbiAgLy8gZ2VuZXJhdGUgZmllbGQgbWFya3VwIGlmIHdlIGhhdmUgZmllbGRzXG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2FuaXRpemVkRmllbGQgPSBzYW50aXplRmllbGQob3B0cy5mb3JtRGF0YVtpXSk7XG4gICAgICByZW5kZXJlZC5wdXNoKHV0aWxzLmZpZWxkUmVuZGVyKHNhbml0aXplZEZpZWxkLCBvcHRzKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucmVuZGVyKSB7XG4gICAgICBpZiAob3B0cy5jb250YWluZXIpIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkRm9ybVdyYXAgPSB1dGlscy5tYXJrdXAoJ2RpdicsIHJlbmRlcmVkLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAncmVuZGVyZWQtZm9ybSdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRzLmNvbnRhaW5lciBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICAgIG9wdHMuY29udGFpbmVyID0gb3B0cy5jb250YWluZXJbMF07XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5jb250YWluZXIuZW1wdHlDb250YWluZXIoKTtcbiAgICAgICAgb3B0cy5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRGb3JtV3JhcCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5lbXB0eUNvbnRhaW5lcigpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZEZvcm1GaWVsZHMocmVuZGVyZWQpO1xuICAgICAgfVxuXG4gICAgICBydW5DYWxsYmFja3MoKTtcbiAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5mb3JtUmVuZGVyZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtUmVuZGVyLm1hcmt1cCA9IGV4cG9ydE1hcmt1cChyZW5kZXJlZCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBub0RhdGEgPSB1dGlscy5tYXJrdXAoJ2RpdicsIG9wdHMubWVzc2FnZXMubm9Gb3JtRGF0YSwge1xuICAgICAgY2xhc3NOYW1lOiAnbm8tZm9ybS1kYXRhJ1xuICAgIH0pO1xuICAgIHJlbmRlcmVkLnB1c2gobm9EYXRhKTtcbiAgICBvcHRzLm5vdGlmeS5lcnJvcihvcHRzLm1lc3NhZ2VzLm5vRm9ybURhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1SZW5kZXI7XG59XG5cbihmdW5jdGlvbigkKSB7XG4gICQuZm4uZm9ybVJlbmRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBsZXQgZWxlbXMgPSB0aGlzO1xuICAgIGVsZW1zLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IGZvcm1SZW5kZXIgPSBuZXcgRm9ybVJlbmRlcihvcHRpb25zLCBlbGVtc1tpXSk7XG4gICAgICBlbGVtc1tpXS5kYXRhc2V0LmZvcm1SZW5kZXIgPSBmb3JtUmVuZGVyO1xuICAgICAgcmV0dXJuIGZvcm1SZW5kZXI7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuXG53aW5kb3cuRm9ybVJlbmRlciA9IEZvcm1SZW5kZXI7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1SZW5kZXI7XG4iLCIvKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZiVXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IGZiVXRpbHMgPSB7fTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgZmJVdGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChmYlV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZiVXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIWZiVXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIGZiVXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSBmYlV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZmJVdGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5jYW1lbENhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihtLCB3KSB7XG4gICAgICByZXR1cm4gdy50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJzID0ge30pIHtcbiAgICBsZXQgY29udGVudFR5cGUsXG4gICAgICBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgIGdldENvbnRlbnRUeXBlID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb250ZW50KSA/ICdhcnJheScgOiB0eXBlb2YgY29udGVudDtcbiAgICAgIH0sXG4gICAgICBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgICBzdHJpbmc6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICBmaWVsZC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICBvYmplY3Q6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFycmF5OiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9IGdldENvbnRlbnRUeXBlKGNvbnRlbnRbaV0pO1xuICAgICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudFR5cGUgPSBnZXRDb250ZW50VHlwZShjb250ZW50KTtcblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXS5jYWxsKHRoaXMsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKSxcbiAgICAgIG9wdGlvbkRhdGEgPSB7fSxcbiAgICAgIGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKSxcbiAgICAgIGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgZmJVdGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICBmYlV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgZmJVdGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gZmJVdGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIGZiVXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyckFyZyBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgcHJldmlldyBtYXJrdXBcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgZmllbGREYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9wdHNcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gcHJldmlld1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICBwcmV2aWV3IG1hcmt1cCBmb3IgZmllbGRcbiAgICovXG4gIGZiVXRpbHMuZmllbGRSZW5kZXIgPSBmdW5jdGlvbihmaWVsZERhdGEsIG9wdHMsIHByZXZpZXcgPSBmYWxzZSkge1xuICAgICAgbGV0IGZpZWxkTWFya3VwID0gJyc7XG4gICAgICBsZXQgZmllbGRMYWJlbCA9ICcnO1xuICAgICAgbGV0IG9wdGlvbnNNYXJrdXAgPSAnJztcbiAgICAgIGxldCBmaWVsZExhYmVsVGV4dCA9IGZpZWxkRGF0YS5sYWJlbCB8fCAnJztcbiAgICAgIGxldCBmaWVsZERlc2MgPSBmaWVsZERhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICBsZXQgZmllbGRSZXF1aXJlZCA9ICcnO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZpZWxkRGF0YS52YWx1ZXM7XG5cbiAgICAgIGZpZWxkRGF0YS5uYW1lID0gcHJldmlldyA/IGZpZWxkRGF0YS5uYW1lICsgJy1wcmV2aWV3JyA6IGZpZWxkRGF0YS5uYW1lO1xuICAgICAgZmllbGREYXRhLmlkID0gZmllbGREYXRhLm5hbWU7XG4gICAgICBpZiAoZmllbGREYXRhLm11bHRpcGxlKSB7XG4gICAgICAgIGZpZWxkRGF0YS5uYW1lID0gZmllbGREYXRhLm5hbWUgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS5zdWJ0eXBlIHx8IGZpZWxkRGF0YS50eXBlO1xuXG4gICAgICBpZiAoZmllbGREYXRhLnJlcXVpcmVkKSB7XG4gICAgICAgIGZpZWxkRGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICAgIGZpZWxkRGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgICAgICBmaWVsZFJlcXVpcmVkID0gJzxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPic7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKGZpZWxkRGVzYykge1xuICAgICAgICAgIGZpZWxkRGVzYyA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke2ZpZWxkRGVzY31cIj4/PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtmaWVsZERhdGEuaWR9XCIgY2xhc3M9XCJmYi0ke2ZpZWxkRGF0YS50eXBlfS1sYWJlbFwiPiR7ZmllbGRMYWJlbFRleHR9ICR7ZmllbGRSZXF1aXJlZH0gJHtmaWVsZERlc2N9PC9sYWJlbD5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmllbGRMYWJlbFZhbCA9IGZpZWxkRGF0YS5sYWJlbDtcblxuICAgICAgZGVsZXRlIGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgIGRlbGV0ZSBmaWVsZERhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBmaWVsZERhdGFTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoZmllbGREYXRhKTtcblxuICAgICAgc3dpdGNoIChmaWVsZERhdGEudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNhc2UgJ3JpY2gtdGV4dCc6XG4gICAgICAgICAgZGVsZXRlIGZpZWxkRGF0YS50eXBlO1xuICAgICAgICAgIGxldCBmaWVsZFZhbCA9IGZpZWxkRGF0YS52YWx1ZSB8fCAnJztcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHRleHRhcmVhICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICBsZXQgb3B0aW9uQXR0cnNTdHJpbmc7XG4gICAgICAgICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG5cbiAgICAgICAgICBpZiAoZmllbGRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+JHtmaWVsZERhdGEucGxhY2Vob2xkZXJ9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKCFmaWVsZE9wdGlvbnNbaV0uc2VsZWN0ZWQgfHwgZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkT3B0aW9uc1tpXS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWZpZWxkT3B0aW9uc1tpXS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGZpZWxkT3B0aW9uc1tpXS5sYWJlbCA9ICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKGZpZWxkT3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gJHtvcHRpb25BdHRyc1N0cmluZ30+JHtmaWVsZE9wdGlvbnNbaV0ubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHNlbGVjdCAke2ZpZWxkRGF0YVN0cmluZ30+JHtvcHRpb25zTWFya3VwfTwvc2VsZWN0PmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94LWdyb3VwJzpcbiAgICAgICAgY2FzZSAncmFkaW8tZ3JvdXAnOlxuICAgICAgICAgIGxldCBvcHRpb25BdHRycztcbiAgICAgICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICdbXSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpZWxkT3B0aW9ucykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbkF0dHJzU3RyaW5nO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe3ZhbHVlOiAnJywgbGFiZWw6ICcnfSwgZmllbGREYXRhLCBmaWVsZE9wdGlvbnNbaV0pO1xuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzLmlkID0gZmllbGREYXRhLmlkICsgJy0nICsgaTtcbiAgICAgICAgICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcob3B0aW9uQXR0cnMpO1xuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3B0aW9uQXR0cnMuaWR9XCI+JHtvcHRpb25BdHRycy5sYWJlbH08L2xhYmVsPjxicj5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLm90aGVyKSB7XG4gICAgICAgICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgICAgICAgIGlkOiBmaWVsZERhdGEuaWQgKyAnLScgKyAnb3RoZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZmllbGREYXRhLmNsYXNzTmFtZSArICcgb3RoZXItb3B0aW9uJyxcbiAgICAgICAgICAgICAgICBvbmNsaWNrOiBgZmJVdGlscy5vdGhlck9wdGlvbkNCKCcke2ZpZWxkRGF0YS5pZH0tb3RoZXInKWBcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhPYmplY3QuYXNzaWduKHt9LCBmaWVsZERhdGEsIG90aGVyT3B0aW9uQXR0cnMpKTtcblxuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3RoZXJPcHRpb25BdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXMub3RoZXJ9PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIiR7ZmllbGREYXRhLm5hbWV9XCIgaWQ9XCIke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PGRpdiBjbGFzcz1cIiR7ZmllbGREYXRhLnR5cGV9LWdyb3VwXCI+JHtvcHRpb25zTWFya3VwfTwvZGl2PmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICBjYXNlICdhdXRvY29tcGxldGUnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH0gPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfSA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PiAke29wdHMubWVzc2FnZXMuc2VsZWN0Q29sb3J9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgY2FzZSAnc3VibWl0JzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8YnV0dG9uICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkTGFiZWxWYWx9PC9idXR0b24+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+ICR7ZmllbGRMYWJlbH1gO1xuXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGREYXRhLmlkKSkua2NUb2dnbGUoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDwke2ZpZWxkRGF0YS50eXBlfSAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZExhYmVsVmFsfTwvJHtmaWVsZERhdGEudHlwZX0+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gZmllbGREYXRhLmlkID8gYGZiLSR7ZmllbGREYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtmaWVsZERhdGEuaWR9YCA6ICcnO1xuICAgICAgICBmaWVsZE1hcmt1cCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE1hcmt1cCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRNYXJrdXAgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBmaWVsZERhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRNYXJrdXA7XG4gICAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAgICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gICAqL1xuICBmYlV0aWxzLm90aGVyT3B0aW9uQ0IgPSAob3RoZXJJZCkgPT4ge1xuICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gICAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgICAgb3RoZXJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICB9O1xuLy8gICByZXR1cm4gZmJVdGlscztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
