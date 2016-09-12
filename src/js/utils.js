'use strict';
/**
 *
 */

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
    false
  ];
  for (var i in attrs) {
    if (fbUtils.inArray(attrs[i], xmlRemove)) {
      delete attrs[i];
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

  let valString = fbUtils.escapeAttr(value);

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
 * @param  {DOM Object} DOM element
 * @return {Object}     ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function(elem) {
  var attrs = elem.attributes;
  var data = {};

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      data[attrs[attr].name] = attrs[attr].value;
    }
  }

  return data;
};

/**
 * Convert field options to optionData
 * @param  {DOM Object} DOM element
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
      fieldData.values = fbUtils.parseOptions(fields[i]);
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

/**
 * Converts escaped HTML into usable HTML
 * @param  {String} html escaped HTML
 * @return {String}      parsed HTML
 */
fbUtils.parsedHtml = function(html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
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
