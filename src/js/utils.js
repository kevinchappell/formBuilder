'use strict';

const fbUtils = {};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function(needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function(attrs) {
  let xmlRemove = [
    null,
    undefined,
    '',
    false,
    'false'
  ];
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
fbUtils.validAttr = function(attr) {
  let invalid = [
    'values',
    'enableOther',
    'other',
    'label',
    // 'style',
    'subtype'
  ];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function(attrs) {
  let attributes = [];

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
fbUtils.safeAttr = function(name, value) {
  name = fbUtils.safeAttrName(name);
  let valString;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '))
    } else {
      if (typeof(value) === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? `="${valString}"` : '';
  return {
    name,
    value
  };
};

fbUtils.safeAttrName = function(name) {
  let safeAttr = {
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
fbUtils.hyphenCase = (str) => {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = (str) => {
  return str.replace(/-([a-z])/g, function(m, w) {
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
fbUtils.markup = function(tag, content = '', attrs = {}) {
  let contentType,
    field = document.createElement(tag),
    getContentType = function(content) {
      return Array.isArray(content) ? 'array' : typeof content;
    },
    appendContent = {
      string: function(content) {
        field.innerHTML = content;
      },
      object: function(content) {
        return field.appendChild(content);
      },
      array: function(content) {
        for (var i = 0; i < content.length; i++) {
          contentType = getContentType(content[i]);
          appendContent[contentType](content[i]);
        }
      }
    };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      let name = fbUtils.safeAttrName(attr);
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
fbUtils.parseAttrs = function(elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, attr => {
    let attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = (attrVal === 'true');
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
fbUtils.parseOptions = function(field) {
  let options = field.getElementsByTagName('option'),
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
fbUtils.parseXML = function(xmlString) {
  const parser = new window.DOMParser();
  let xml = parser.parseFromString(xmlString, 'text/xml'),
    formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      let fieldData = fbUtils.parseAttrs(fields[i]);
      let nodeChildren = fields[i].children || [];

      if (nodeChildren.length) {
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
fbUtils.escapeHtml = function(html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function(str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  function replaceTag(tag) {
    return match[tag] || tag;
  }

  return (typeof str === 'string') ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function(attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} arrArg array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function(array) {
  return array.filter((elem, pos, arr) => {
    return arr.indexOf(elem) === pos;
  });
};

/**
   * Generate preview markup
   * @param  {object} fieldData
   * @return {string}       preview markup for field
   */
fbUtils.fieldRender = function(fieldData, opts, preview = false) {
    var fieldMarkup = '',
      fieldLabel = '',
      optionsMarkup = '',
      fieldLabelText = fieldData.label || '',
      fieldDesc = fieldData.description || '',
      fieldRequired = '',
      fieldOptions = fieldData.values;

    fieldData.name = preview ? fieldData.name + '-preview' : fieldData.name;
    fieldData.id = fieldData.name;
    fieldData.name = fieldData.multiple ? fieldData.name + '[]' : fieldData.name;

    fieldData.type = fieldData.subtype || fieldData.type;

    if (fieldData.required) {
      fieldData.required = null;
      fieldData['aria-required'] = 'true';
      fieldRequired = '<span class="required">*</span>';
    }

    if (fieldData.type !== 'hidden') {
      if (fieldDesc) {
        fieldDesc = `<span class="tooltip-element" tooltip="${fieldDesc}">?</span>`;
      }
      fieldLabel = `<label for="${fieldData.id}" class="fb-${fieldData.type}-label">${fieldLabelText} ${fieldRequired} ${fieldDesc}</label>`;
    }

    var fieldLabelVal = fieldData.label;

    delete fieldData.label;
    delete fieldData.description;

    var fieldDataString = fbUtils.attrString(fieldData);

    switch (fieldData.type) {
      case 'textarea':
      case 'rich-text': {
        delete fieldData.type;
        let fieldVal = fieldData.value || '';
        fieldMarkup = `${fieldLabel}<textarea ${fieldDataString}>${fieldVal}</textarea>`;
        break;
      }
      case 'select':
        var optionAttrsString;
        fieldData.type = fieldData.type.replace('-group', '');

        if (fieldOptions) {

          if (fieldData.placeholder) {
            optionsMarkup += `<option disabled selected>${fieldData.placeholder}</option>`;
          }

          for (let i = 0; i < fieldOptions.length; i++) {
            if (!fieldOptions[i].selected || fieldData.placeholder) {
              delete fieldOptions[i].selected;
            }
            if (!fieldOptions[i].label) {
              fieldOptions[i].label = '';
            }
            optionAttrsString = fbUtils.attrString(fieldOptions[i]);
            optionsMarkup += `<option ${optionAttrsString}>${fieldOptions[i].label}</option>`;
          }
        }

        fieldMarkup = `${fieldLabel}<select ${fieldDataString}>${optionsMarkup}</select>`;
        break;
      case 'checkbox-group':
      case 'radio-group': {
        let optionAttrs;
        fieldData.type = fieldData.type.replace('-group', '');

        if (fieldData.type === 'checkbox') {
          fieldData.name = fieldData.name + '[]';
        }

        if (fieldOptions) {
          let optionAttrsString;

          for (let i = 0; i < fieldOptions.length; i++) {
            optionAttrs = Object.assign({value: '', label: ''}, fieldData, fieldOptions[i]);

            if (optionAttrs.selected) {
              delete optionAttrs.selected;
              optionAttrs.checked = null;
            }

            optionAttrs.id = fieldData.id + '-' + i;
            optionAttrsString = fbUtils.attrString(optionAttrs);
            optionsMarkup += `<input ${optionAttrsString} /> <label for="${optionAttrs.id}">${optionAttrs.label}</label><br>`;
          }

          if (fieldData.other) {
            let otherOptionAttrs = {
              id: fieldData.id + '-' + 'other',
              className: fieldData.className + ' other-option',
              onclick: `fbUtils.otherOptionCB('${fieldData.id}-other')`
            };

            optionAttrsString = fbUtils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

            optionsMarkup += `<input ${optionAttrsString} /> <label for="${otherOptionAttrs.id}">${opts.messages.other}</label> <input type="text" name="${fieldData.name}" id="${otherOptionAttrs.id}-value" style="display:none;" />`;
          }

        }
        fieldMarkup = `${fieldLabel}<div class="${fieldData.type}-group">${optionsMarkup}</div>`;
        break;
      }
      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'file':
      case 'hidden':
      case 'date':
      case 'tel':
      case 'autocomplete':
        fieldMarkup = `${fieldLabel} <input ${fieldDataString}>`;
        break;
      case 'color':
        fieldMarkup = `${fieldLabel} <input ${fieldDataString}> ${opts.messages.selectColor}`;
        break;
      case 'button':
      case 'submit':
        fieldMarkup = `<button ${fieldDataString}>${fieldLabelVal}</button>`;
        break;
      case 'checkbox':
        fieldMarkup = `<input ${fieldDataString}> ${fieldLabel}`;

        if (fieldData.toggle) {
          setTimeout(function() {
            $(document.getElementById(fieldData.id)).kcToggle();
          }, 100);
        }
        break;
      default:
        fieldMarkup = `<${fieldData.type} ${fieldDataString}>${fieldLabelVal}</${fieldData.type}>`;
    }

    if (fieldData.type !== 'hidden') {
      let className = fieldData.id ? `fb-${fieldData.type} form-group field-${fieldData.id}` : '';
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
fbUtils.otherOptionCB = (otherId) => {
  let otherInput = document.getElementById(otherId),
  otherInputValue = document.getElementById(`${otherId}-value`);

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
fbUtils.capitalize = (str) => {
  return str.replace(/\b\w/g, function(m) {
      return m.toUpperCase();
    });
};
