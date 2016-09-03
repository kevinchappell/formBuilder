/*
formBuilder - https://formbuilder.online/
Version: 1.15.6
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
'use strict';

// Element.remove() polyfill

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

// Event polyfill
if (typeof Event !== 'function') {
  (function () {
    window.Event = function (evt) {
      var event = document.createEvent('Event');
      event.initEvent(evt, true, true);
      return event;
    };
  })();
}

// Object.assign polyfill
if (typeof Object.assign != 'function') {
  Object.assign = function (target) {
    'use strict';

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}
'use strict';

(function ($) {
  'use strict';

  var Toggle = function Toggle(element, options) {

    var defaults = {
      theme: 'fresh',
      labels: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options),
        $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = '<div class="kct-on">' + opts.labels.on + '</div>',
        kctOff = '<div class="kct-off">' + opts.labels.off + '</div>',
        kctHandle = '<div class="kct-handle"></div>',
        kctInner = '<div class="kct-inner">' + kctOn + kctHandle + kctOff + '</div>';

    $kcToggle.append(kctInner);

    $kcToggle.click(function () {
      element.attr('checked', !element.attr('checked'));
      $(this).toggleClass('on');
    });
  };

  $.fn.kcToggle = function (options) {
    var toggle = this;
    return toggle.each(function () {
      var element = $(this);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
})(jQuery);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var fbUtils = {};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

// Remove null or undefined values
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false];
  for (var i in attrs) {
    if (fbUtils.inArray(attrs[i], xmlRemove)) {
      delete attrs[i];
    }
  }
  return attrs;
};

/**
 * Make an ID for this element using current date and tag
 *
 * @param  {Boolean} element
 * @return {String}  new id for element
 */
fbUtils.makeId = function () {
  var element = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  var epoch = new Date().getTime();

  return element.tagName + '-' + epoch;
};

fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label', 'style', 'subtype'];
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

fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);

  var valString = window.JSON.stringify(fbUtils.escapeAttr(value));

  value = value ? '=' + valString : '';
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
 * Convert strings
 into lowercase-hyphen
 *
 * @param  {string} str
 * @return {string}
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
    m = m;
    return w.toUpperCase();
  });
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {object}              attrs
 * @return {String}
 */
fbUtils.markup = function (tag) {
  var content = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var attrs = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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

fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      data[attrs[attr].name] = attrs[attr].value;
    }
  }

  return data;
};

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

fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml'),
      formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);
      fieldData.values = fbUtils.parseOptions(fields[i]);
      formData.push(fieldData);
    }
  }

  return formData;
};

fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  function replaceTag(tag) {
    return match[tag] || tag;
  }

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Remove null or undefined values
fbUtils.escapeAttrs = function (attrs) {

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};
'use strict';

// render the formBuilder XML into html

function FormRenderFn(options, element) {

  var utils = fbUtils;

  var formRender = this,
      defaults = {
    destroyTemplate: true, // @todo
    container: false,
    dataType: 'xml',
    formData: false,
    label: {
      formRendered: 'Form Rendered',
      noFormData: 'No form data.',
      other: 'Other',
      selectColor: 'Select Color'
    },
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
  },
      _helpers = {};

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
   * Generate preview markup
   * @param  {object} fieldData
   * @return {string}       preview markup for field
   */
  _helpers.fieldRender = function (fieldData) {
    var fieldMarkup = '',
        fieldLabel = '',
        optionsMarkup = '',
        fieldLabelText = fieldData.label || '',
        fieldDesc = fieldData.description || '',
        fieldRequired = '',
        fieldOptions = fieldData.values || [];
    fieldData.id = fieldData.name;

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
      fieldLabel = '<label for="' + fieldData.id + '">' + fieldLabelText + ' ' + fieldRequired + ' ' + fieldDesc + '</label>';
    }

    var fieldLabelVal = fieldData.label;

    delete fieldData.label;
    delete fieldData.description;

    var fieldDataString = utils.attrString(fieldData);

    switch (fieldData.type) {
      case 'textarea':
      case 'rich-text':
        delete fieldData.type;
        var fieldVal = fieldData.value || '';
        fieldMarkup = fieldLabel + '<textarea ' + fieldDataString + '>' + fieldVal + '</textarea>';
        break;
      case 'select':
        var optionAttrsString;
        fieldData.type = fieldData.type.replace('-group', '');

        if (fieldOptions) {
          for (var _i = 0; _i < fieldOptions.length; _i++) {
            if (!fieldOptions[_i].selected) {
              delete fieldOptions[_i].selected;
            }
            optionAttrsString = utils.attrString(fieldOptions[_i]);
            optionsMarkup += '<option ' + optionAttrsString + '>' + fieldOptions[_i].label + '</option>';
          }
        }

        fieldMarkup = fieldLabel + '<select ' + fieldDataString + '>' + optionsMarkup + '</select>';
        break;
      case 'checkbox-group':
      case 'radio-group':
        var optionAttrs = void 0;
        fieldData.type = fieldData.type.replace('-group', '');

        if (fieldOptions) {
          var optionName = fieldData.type === 'checkbox' ? fieldData.name + '[]' : fieldData.name,
              _optionAttrsString = void 0;

          for (var _i2 = 0; _i2 < fieldOptions.length; _i2++) {
            optionAttrs = Object.assign({}, fieldData, fieldOptions[_i2]);

            if (optionAttrs.selected) {
              delete optionAttrs.selected;
              optionAttrs.checked = null;
            }

            optionAttrs.name = optionName;
            optionAttrs.id = fieldData.id + '-' + _i2;
            _optionAttrsString = utils.attrString(optionAttrs);
            optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + optionAttrs.id + '">' + optionAttrs.label + '</label><br>';
          }

          if (fieldData.enableOther || fieldData['enable-other']) {
            var otherOptionAttrs = {
              id: fieldData.id + '-' + 'other',
              className: (fieldData.class || fieldData.className) + ' other-option'
            };

            _optionAttrsString = utils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

            optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + otherOptionAttrs.id + '">' + opts.label.other + '</label> <input type="text" data-other-id="' + otherOptionAttrs.id + '" name="' + optionName + '" id="' + otherOptionAttrs.id + '-value" style="display:none;" />';
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
      case 'autocomplete':
        fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '>';
        break;
      case 'color':
        fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '> ' + opts.label.selectColor;
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
      var className = fieldData.id ? 'form-group field-' + fieldData.id : '';
      fieldMarkup = utils.markup('div', fieldMarkup, {
        className: className
      });
    } else {
      fieldMarkup = utils.markup('input', null, fieldData);
    }

    return fieldMarkup;
  };

  /**
   * Extend Element prototype to allow us to append fields
   *
   * @param  {object} fields Node elements
   */
  Element.prototype.appendFormFields = function (fields) {
    var element = this;
    fields.reverse();
    for (var i = fields.length - 1; i >= 0; i--) {
      element.appendChild(fields[i]);
    }
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

  var otherOptionCB = function otherOptionCB() {
    var otherOptions = document.getElementsByClassName('other-option');

    var _loop = function _loop() {
      var otherInput = document.getElementById(otherOptions[i].id + '-value');
      otherOptions[i].onclick = function () {
        var option = this;
        if (this.checked) {
          otherInput.style.display = 'inline-block';
          option.nextElementSibling.style.display = 'none';
          otherInput.oninput = function () {
            option.value = this.value;
          };
        } else {
          otherInput.style.display = 'none';
          option.nextElementSibling.style.display = 'inline-block';
          otherInput.oninput = undefined;
        }
      };
    };

    for (var i = 0; i < otherOptions.length; i++) {
      _loop();
    }
  };

  var runCallbacks = function runCallbacks() {
    otherOptionCB();
  };

  // Begin the core plugin
  var rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (var i = 0; i < opts.formData.length; i++) {
      rendered.push(_helpers.fieldRender(opts.formData[i]));
    }

    if (opts.render) {
      if (opts.container) {
        var renderedFormWrap = utils.markup('div', rendered, { className: 'rendered-form' });
        opts.container = opts.container instanceof jQuery ? opts.container[0] : opts.container;
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.label.formRendered);
    } else {
      formRender.markup = rendered.map(function (elem) {
        return elem.innerHTML;
      }).join('');
    }
  } else {
    var noData = utils.markup('div', opts.label.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.label.noFormData);
  }

  return formRender;
}

(function ($) {

  $.fn.formRender = function (options) {
    this.each(function () {
      var formRender = new FormRenderFn(options, this);
      return formRender;
    });
  };
})(jQuery);