'use strict';

const fbUtils = {};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function(needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

// Remove null or undefined values
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
 * Make an ID for this element using current date and tag
 *
 * @param  {Boolean} element
 * @return {String}  new id for element
 */
fbUtils.makeId = function(element = false) {
  let epoch = new Date().getTime();

  return `${element.tagName}-${epoch}`;
};

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
 * Convert strings
 into lowercase-hyphen
 *
 * @param  {string} str
 * @return {string}
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

fbUtils.escapeHtml = function(html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

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

// Remove null or undefined values
fbUtils.escapeAttrs = function(attrs) {

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};
