/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} utils
 */
  const utils = {};
  window.fbLoaded = {
    js: [],
    css: []
  };
  window.fbEditors = {
    quill: {},
    tinymce: {}
  };

  // cleaner syntax for testing indexOf element
  utils.inArray = function(needle, haystack) {
    return haystack.indexOf(needle) !== -1;
  };

  /**
   * Remove null or undefined values
   * @param  {Object} attrs {attrName: attrValue}
   * @return {Object}       Object trimmed of null or undefined values
   */
  utils.trimObj = function(attrs) {
    let xmlRemove = [
      null,
      undefined,
      '',
      false,
      'false'
    ];
    for (let attr in attrs) {
      if (utils.inArray(attrs[attr], xmlRemove)) {
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
  utils.validAttr = function(attr) {
    let invalid = [
      'values',
      'enableOther',
      'other',
      'label',
      // 'style',
      'subtype'
    ];
    return !utils.inArray(attr, invalid);
  };

  /**
   * Convert an attrs object into a string
   *
   * @param  {Object} attrs object of attributes for markup
   * @return {string}
   */
  utils.attrString = function(attrs) {
    let attributes = [];

    for (let attr in attrs) {
      if (attrs.hasOwnProperty(attr) && utils.validAttr(attr)) {
        attr = utils.safeAttr(attr, attrs[attr]);
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
  utils.safeAttr = function(name, value) {
    name = utils.safeAttrName(name);
    let valString;

    if (value) {
      if (Array.isArray(value)) {
        valString = utils.escapeAttr(value.join(' '));
      } else {
        if (typeof(value) === 'boolean') {
          value = value.toString();
        }
        valString = utils.escapeAttr(value.replace(',', ' ').trim());
      }
    }

    value = value ? `="${valString}"` : '';
    return {
      name,
      value
    };
  };

  utils.safeAttrName = function(name) {
    let safeAttr = {
      className: 'class'
    };

    return safeAttr[name] || utils.hyphenCase(name);
  };

  /**
   * Convert strings into lowercase-hyphen
   *
   * @param  {String} str
   * @return {String}
   */
  utils.hyphenCase = (str) => {
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
  utils.camelCase = str => str.replace(/-([a-z])/g, (m, w) =>
    w.toUpperCase());

  /**
   * Determine content type
   * @param  {Node | String | Array | Object} content
   * @return {String}                         contentType for mapping
   */
  utils.contentType = content => {
    let type = typeof content;
    if (content instanceof Node || content instanceof HTMLElement) {
      type = 'node';
    } else if (Array.isArray(content)) {
      type = 'array';
    }

    return type;
  };

  /**
   * Bind events to an element
   * @param  {Object} element DOM element
   * @param  {Object} events  object full of events eg. {click: evt => callback}
   * @return {void}
   */
  utils.bindEvents = (element, events) => {
    if (events) {
      for (let event in events) {
        if (events.hasOwnProperty(event)) {
          element.addEventListener(event, evt => events[event](evt));
        }
      }
    }
  };

/**
 * Generate a unique name attribute
 * @param  {Object} field
 * @return {String}       name
 */
  utils.nameAttr = function(field) {
    let epoch = new Date().getTime();
    let prefix = field.type || utils.hyphenCase(field.label);
    return prefix + '-' + epoch;
  };

  /**
   * Generate markup wrapper where needed
   *
   * @param  {string}              tag
   * @param  {String|Array|Object} content we wrap this
   * @param  {Object}              attributes
   * @return {Object} DOM Element
   */
  utils.markup = function(tag, content = '', attributes = {}) {
    let contentType = utils.contentType(content);
    let {events, ...attrs} = attributes;
    const field = document.createElement(tag);

    const appendContent = {
      string: content => {
        field.innerHTML += content;
      },
      object: config => {
        let {tag, content, ...data} = config;
        return field.appendChild(utils.markup(tag, content, data));
      },
      node: content => {
        return field.appendChild(content);
      },
      array: content => {
        for (let i = 0; i < content.length; i++) {
          contentType = utils.contentType(content[i]);
          appendContent[contentType](content[i]);
        }
      },
      function: content => {
        content = content();
        contentType = utils.contentType(content);
        appendContent[contentType](content);
      },
      undefined: () => {
        // console.error(tag, content, attributes);
      },
    };

    for (let attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        let name = utils.safeAttrName(attr);
        field.setAttribute(name, attrs[attr]);
      }
    }

    if (content) {
      appendContent[contentType].call(this, content);
    }

    utils.bindEvents(field, events);

    return field;
  };

  /**
   * Convert html element attributes to key/value object
   * @param  {Object} elem DOM element
   * @return {Object} ex: {attrName: attrValue}
   */
  utils.parseAttrs = elem => {
    let attrs = elem.attributes;
    let data = {};
    utils.forEach(attrs, attr => {
      let attrVal = attrs[attr].value || '';
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
   * @param  {NodeList} options  DOM elements
   * @return {Array} optionData array
   */
  utils.parseOptions = options => {
    let optionData = {};
    let data = [];

    for (let i = 0; i < options.length; i++) {
      optionData = utils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }

    return data;
  };

  /**
   * Parse XML formData
   * @param  {String} xmlString
   * @return {Array}            formData array
   */
  utils.parseXML = xmlString => {
    const parser = new window.DOMParser();
    let xml = parser.parseFromString(xmlString, 'text/xml');
    let formData = [];

    if (xml) {
      let fields = xml.getElementsByTagName('field');
      for (let i = 0; i < fields.length; i++) {
        let fieldData = utils.parseAttrs(fields[i]);
        const options = fields[i].getElementsByTagName('option');

        if (options && options.length) {
          fieldData.values = utils.parseOptions(options);
        }

        formData.push(fieldData);
      }
    }

    return formData;
  };

  /**
   * Converts escaped HTML into usable HTML
   * @param  {String} html escaped HTML
   * @return {String}      parsed HTML
   */
  utils.parsedHtml = html => {
    let escapeElement = document.createElement('textarea');
    escapeElement.innerHTML = html;
    return escapeElement.textContent;
  };

  /**
   * Escape markup so it can be displayed rather than rendered
   * @param  {String} html markup
   * @return {String}      escaped html
   */
  utils.escapeHtml = html => {
    let escapeElement = document.createElement('textarea');
    escapeElement.textContent = html;
    return escapeElement.innerHTML;
  };

  // Escape an attribute
  utils.escapeAttr = str => {
    let match = {
      '"': '&quot;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    };

    const replaceTag = tag => match[tag] || tag;

    return (typeof str === 'string') ? str.replace(/["&<>]/g, replaceTag) : str;
  };

  // Escape attributes
  utils.escapeAttrs = attrs => {
    for (let attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attrs[attr] = utils.escapeAttr(attrs[attr]);
      }
    }

    return attrs;
  };

  // forEach that can be used on nodeList
  utils.forEach = function(array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  /**
   * Remove duplicates from an array of elements
   * @param  {Array} array  array with possible duplicates
   * @return {Array}        array with only unique values
   */
  utils.unique = array => {
    return array.filter((elem, pos, arr) =>
      (arr.indexOf(elem) === pos)
    );
  };

  /**
   * Removes a value from an array
   * @param  {String|Number} val
   * @param  {Array} arr
   */
  utils.remove = (val, arr) => {
    let index = arr.indexOf(val);

    if (index > -1) {
       arr.splice(index, 1);
    }
  };

  /**
   * Loads an array of scripts using jQuery's `getScript`
   * @param  {Array|String}  scriptScr    scripts
   * @param  {String} path   optional to load form
   * @return {Promise}       a promise
   */
  utils.getScripts = (scriptScr, path) => {
    const $ = jQuery;
    let _arr = [];

    if (!Array.isArray(scriptScr)) {
      scriptScr = [scriptScr];
    }

    if (!utils.isCached(scriptScr)) {
      _arr = $.map(scriptScr, src => {
        let options = {
          dataType: 'script',
          cache: true,
          url: (path || '') + src
        };
        return $.ajax(options).done(() => window.fbLoaded.js.push(src));
      });
    }

    _arr.push($.Deferred( deferred => $( deferred.resolve )));

    return $.when(..._arr);
  };

  /**
   * Checks if remote resource is already loaded
   * @param  {String|Array} src  url of remote script or css
   * @param  {String}       type       'js' or 'css'
   * @return {Boolean}      isCached
   */
  utils.isCached = (src, type = 'js') => {
    let isCached = false;
    const cache = window.fbLoaded[type];
    if (Array.isArray(src)) {
      isCached = src.every(s => utils.inArray(s, cache));
    } else {
      isCached = utils.inArray(src, cache);
    }
    return isCached;
  };

  /**
   * Appends stylesheets to the head
   * @param  {Array} scriptScr
   * @param  {String} path
   * @return {void}
   */
  utils.getStyles = (scriptScr, path) => {
    if (!Array.isArray(scriptScr)) {
      scriptScr = [scriptScr];
    }
    scriptScr.forEach(src => {
      // if a string is passed, assume a href URL
      let type = 'href';
      let key = src;
      let id = '';

      // if an object is passed, work out details from it's properties
      if (typeof src == 'object') {
        type = src.type || (src.style ? 'inline' : 'href');
        id = src.id;
        src = type == 'inline' ? src.style : src.href;
        key = id || src.href || src.style;
      }

      // check we haven't already loaded this css
      if (utils.isCached(key, 'css')) {
        return;
      }

      // append the style into the head
      if (type == 'href') {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = (path || '') + src;
        document.head.appendChild(link);
      } else {
        $(`<style type="text/css">${src}</style>`)
          .attr('id', id)
          .appendTo($(document.head));
      }

      // record this is cached
      window.fbLoaded.css.push(key);
    });
  };

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
utils.capitalize = str => {
  return str.replace(/\b\w/g, function(m) {
      return m.toUpperCase();
    });
};


utils.merge = (obj1, obj2) => {
  let mergedObj = Object.assign({}, obj1, obj2);
  for (let prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? utils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if (typeof obj2[prop] === 'object') {
        mergedObj[prop] = utils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

utils.addEventListeners = (el, evts, fn) => {
  return evts.split(' ').forEach(e => el.addEventListener(e, fn, false));
};

/**
 * Find the closest parent by class
 * @param  {Object} el  DOM element
 * @param  {String} cls class
 * @return {Object}     DOM Element
 */
utils.closest = (el, cls) => {
  let className = cls.replace('.', '');
  while ((el = el.parentElement) && !el.classList.contains(className));
  return el;
};

utils.noop = () => null;

/**
 * Debounce often called functions, like save
 * @param  {Function}  func
 * @param  {Number}  wait
 * @param  {Boolean} immediate
 * @return {Function} debounce
 */
utils.debounce = (func, wait = 250, immediate = false) => {
  let timeout;
  return function(...args) {
    // eslint-disable-next-line no-invalid-this
    let context = this;
    let later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/**
 * Add a mobile class
 * @todo find css only solution
 * @return {String} Mobile class added to formBuilder
 */
utils.mobileClass = () => {
  let mobileClass = '';
  (a => {
    // eslint-disable-next-line
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      mobileClass = ' fb-mobile';
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return mobileClass;
};

/**
 * Convert converts messy `cl#ssNames` into valid `class-names`
 *
 * @param  {String} str
 * @return {String} hyphenated string
 */
utils.makeClassName = str => {
  return utils.hyphenCase(str.replace(/[^\w\s\-]/gi, ''));
};

/**
 * Make strings safe to be used as classes
 *
 * @param  {String} str string to be converted
 * @return {String}     converter string
 */
utils.safename = str => {
  return str.replace(/\s/g, '-')
  .replace(/[^a-zA-Z0-9\[\]\_-]/g, '').toLowerCase();
};

/**
 * Strips non-numbers from a number only input
 *
 * @param  {string} str string with possible number
 * @return {string}     string without numbers
 */
utils.forceNumber = str => {
  return str.replace(/[^0-9]/g, '');
};

export default utils;
