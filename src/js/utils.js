import d from './dom';

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
  const fbUtils = {};
  window.fbLoaded = {
    js: [],
    css: []
  };
  window.fbEditors = {
    quill: {},
    tinymce: {}
  };

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
    for (let attr in attrs) {
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

    for (let attr in attrs) {
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
        valString = fbUtils.escapeAttr(value.join(' '));
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
   * Determine content type
   * @param  {Node | String | Array | Object} content
   * @return {String}                         contentType for mapping
   */
  fbUtils.contentType = content => {
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
  fbUtils.bindEvents = (element, events) => {
    if (events) {
      for (let event in events) {
        if (events.hasOwnProperty(event)) {
          element.addEventListener(event, evt => events[event](evt));
        }
      }
    }
  };

  /**
   * Generate markup wrapper where needed
   *
   * @param  {string}              tag
   * @param  {String|Array|Object} content we wrap this
   * @param  {Object}              attrs
   * @return {Object} DOM Element
   */
  fbUtils.markup = function(tag, content = '', attributes = {}) {
    let contentType = fbUtils.contentType(content);
    let {events, ...attrs} = attributes;
    const field = document.createElement(tag);

    const appendContent = {
      string: (content) => {
        field.innerHTML += content;
      },
      object: (config) => {
        let {tag, content, ...data} = config;
        return field.appendChild(fbUtils.markup(tag, content, data));
      },
      node: (content) => {
        return field.appendChild(content);
      },
      array: (content) => {
        for (let i = 0; i < content.length; i++) {
          contentType = fbUtils.contentType(content[i]);
          appendContent[contentType](content[i]);
        }
      },
      function: content => {
        content = content();
        contentType = fbUtils.contentType(content);
        appendContent[contentType](content);
      },
      undefined: () => {
        console.error(tag, content, attributes);
      },
    };


    for (let attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        let name = fbUtils.safeAttrName(attr);
        field.setAttribute(name, attrs[attr]);
      }
    }

    if (content) {
      appendContent[contentType].call(this, content);
    }

    fbUtils.bindEvents(field, events);

    return field;
  };
  const m = fbUtils.markup;

  /**
   * Convert html element attributes to key/value object
   * @param  {Object} elem DOM element
   * @return {Object} ex: {attrName: attrValue}
   */
  fbUtils.parseAttrs = function(elem) {
    let attrs = elem.attributes;
    let data = {};
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
   * @param  {Object} field  DOM element
   * @return {Array}         optionData array
   */
  fbUtils.parseOptions = function(field) {
    const options = field.getElementsByTagName('option');
    let optionData = {};
    let data = [];

    if (options.length) {
      for (let i = 0; i < options.length; i++) {
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
    let xml = parser.parseFromString(xmlString, 'text/xml');
    let formData = [];

    if (xml) {
      let fields = xml.getElementsByTagName('field');
      for (let i = 0; i < fields.length; i++) {
        let fieldData = fbUtils.parseAttrs(fields[i]);

        if (fields[i].children && fields[i].children.length) {
          fieldData.values = fbUtils.parseOptions(fields[i]);
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
  fbUtils.parsedHtml = function(html) {
    let escapeElement = document.createElement('textarea');
    escapeElement.innerHTML = html;
    return escapeElement.textContent;
  };

  /**
   * Escape markup so it can be displayed rather than rendered
   * @param  {String} html markup
   * @return {String}      escaped html
   */
  fbUtils.escapeHtml = function(html) {
    let escapeElement = document.createElement('textarea');
    escapeElement.textContent = html;
    return escapeElement.innerHTML;
  };

  // Escape an attribute
  fbUtils.escapeAttr = function(str) {
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
  fbUtils.escapeAttrs = function(attrs) {
    for (let attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
      }
    }

    return attrs;
  };

  // forEach that can be used on nodeList
  fbUtils.forEach = function(array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  /**
   * Remove duplicates from an array of elements
   * @param  {Array} array  array with possible duplicates
   * @return {Array}        array with only unique values
   */
  fbUtils.unique = function(array) {
    return array.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  };

  fbUtils.makeLabel = (data, label = '', description = '') => {
    let labelContents = [document.createTextNode(label)];

    if (data.hasOwnProperty('required')) {
      labelContents.push(m('span', '*', {className: 'required'}));
    }

    if (data.type !== 'hidden') {
      if (description) {
        labelContents.push(m('span', '?', {
          className: 'tooltip-element',
          tooltip: description
        }));
      }
    }

    return m('label', labelContents, {
      for: data.id,
      className: `fb-${data.type}-label`
    });
  };

  fbUtils.templateMap = (templates, type, fallback) => {
    let template;
    let templateMap = new Map(templates);
    for (let [key, value] of templateMap) {
      if (Array.isArray(key)) {
        if(fbUtils.inArray(type, key)) {
          template = value;
          break;
        }
      } else if (type === key) {
        template = value;
        break;
      }
    }

    if (!template) {
      template = fallback;
    }

    return template();
  };

  fbUtils.autocompleteTemplate = fieldData => {
    let {values, type, ...data} = fieldData;
    const fauxEvents = {
      input: (evt) => {
        const list = document.getElementById(`${data.id}-list`);
        d.filter(list.querySelectorAll('li'), evt.target.value);
        if (!evt.target.value) {
          list.style.display = 'none';
        } else {
          list.style.display = 'block';
        }
      }
    };
    let fauxAttrs = Object.assign({}, data,
      {
        id: `${data.id}-input`,
        events: fauxEvents
      });
    let hiddenAttrs = Object.assign({}, data, {type: 'hidden'});
    delete fauxAttrs.name;
    const field = [
      m('input', null, fauxAttrs),
      m('input', null, hiddenAttrs)
    ];

    const options = values.map((optionData, i) => {
      let label = optionData.label;
      let config = {
        events: {
          click: () => {
            const list = document.getElementById(`${data.id}-list`);
            const field = document.getElementById(data.id);
            field.value = optionData.value;
            field.previousSibling.value = optionData.label;
            list.style.display = 'none';
          }
        },
        value: optionData.value
      };
      return m('li', label, config);
    });

    field.push(m('ul', options,
      {id: `${data.id}-list`, className: `fb-${type}-list`}));

    const onRender = (evt) => {

    };

    return {field, onRender};
  };

  /**
   * Generate DOM elements for select, checkbox-group and radio-group.
   * @param  {Object} fieldData
   * @return {Object}           DOM elements
   */
  fbUtils.selectTemplate = fieldData => {
    let options = [];
    let {values, placeholder, type, inline, other, ...data} = fieldData;
    let optionType = type.replace('-group', '');
    let isSelect = type === 'select';

    if (values) {
      if (placeholder && isSelect) {
        options.push(m('option', placeholder, {
          disabled: null,
          selected: null
        }));
      }

      for (let i = 0; i < values.length; i++) {
        let {label = '', ...optionAttrs} = values[i];

        optionAttrs.id = `${data.id}-${i}`;
        if (!optionAttrs.selected || placeholder) {
          delete optionAttrs.selected;
        }

        if (isSelect) {
          let o = m('option', document.createTextNode(label), optionAttrs);
          options.push(o);
        } else {
          let wrapperClass = optionType;
          if (inline) {
            wrapperClass += '-inline';
          }
          optionAttrs.type = optionType;
          if (optionAttrs.selected) {
            optionAttrs.checked = null;
            delete optionAttrs.selected;
          }
          let input = m('input', null, Object.assign({}, data, optionAttrs));
          let inputLabel = m('label', [input, label], {for: optionAttrs.id});
          let wrapper = m('div', inputLabel, {className: wrapperClass});
          options.push(wrapper);
        }
      }

      if (!isSelect && other) {
        let otherOptionAttrs = {
          id: `${data.id}-other`,
          className: `${data.className} other-option`,
          events: {
            click: () => fbUtils.otherOptionCB(otherOptionAttrs.id)
          }
        };
        // let label = mi18n.current.other;
        let wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }

        let optionAttrs = Object.assign({}, data, otherOptionAttrs);
        optionAttrs.type = optionType;

        let otherValAttrs = {
          type: 'text',
          name: data.name,
          id: `${otherOptionAttrs.id}-value`,
          className: 'other-val'
        };
        let otherInputs = [
          m('input', null, optionAttrs),
          document.createTextNode('Other'),
          m('input', null, otherValAttrs)
        ];
        let inputLabel = m('label', otherInputs, {for: optionAttrs.id});
        let wrapper = m('div', inputLabel, {className: wrapperClass});
        options.push(wrapper);
      }
    }

    const templates = [
      ['select',
        () => m(optionType, options, data)],
      [['checkbox-group', 'radio-group'],
        () => m('div', options, {className: type})]
    ];

    return fbUtils.templateMap(templates, type);
  };

  fbUtils.defaultField = fieldData => {
    let {label, description, subtype, type, id, isPreview, ...data} = fieldData;
    if (id) {
      if (isPreview) {
        data.name = data.name + '-preview';
      }
      data.id = data.name;
    }
    if (description) {
      data.title = description;
    }
    if (subtype) {
      type = subtype;
    }

    let field = {
      field: m(type, label, data),
      onRender: fbUtils.noop
    };

    return () => field;
  };

  /**
   * Loads an array of scripts using jQuery's `getScript`
   * @param  {Array|String}  scriptScr    scripts
   * @param  {String} path   optional to load form
   * @return {Promise}       a promise
   */
  fbUtils.getScripts = (scriptScr, path) => {
    const $ = jQuery;
    let _arr = [];

    if (!Array.isArray(scriptScr)) {
      scriptScr = [scriptScr];
    }

    if (!fbUtils.isCached(scriptScr)) {
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
  fbUtils.isCached = (src, type = 'js') => {
    let isCached = false;
    const cache = window.fbLoaded[type];
    if (Array.isArray(src)) {
      isCached = src.every(s => fbUtils.inArray(s, cache));
    } else {
      isCached = fbUtils.inArray(src, cache);
    }
    return isCached;
  };

  /**
   * Appends stylesheets to the head
   * @param  {Array} scriptScr
   * @param  {String} path
   * @return {void}
   */
  fbUtils.getStyles = (scriptScr, path) => {
    if (fbUtils.isCached(scriptScr, 'css')) {
      return;
    }
    const appendStyle = (href) => {
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      window.fbLoaded.css.push(href);
    };
    scriptScr.forEach(src => appendStyle((path || '') + src));
  };

  fbUtils.longTextTemplate = data => {
    let {value = '', ...attrs} = data;
    let template = {
      field: m('textarea', fbUtils.parsedHtml(value), attrs)
    };
    let editors = {
      tinymce: {
        js: ['//cdn.tinymce.com/4/tinymce.min.js'],
        onRender: evt => {
          if (window.tinymce.editors[data.id]) {
            window.tinymce.editors[data.id].remove();
          }
          window.tinymce.init({
            target: template.field,
            height: 250,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
          });
        }
      },
      quill: {
        js: ['//cdn.quilljs.com/1.1.3/quill.js'],
        css: ['//cdn.quilljs.com/1.1.3/quill.snow.css'],
        onRender: evt => {
          const Delta = window.Quill.import('delta');
          window.fbEditors.quill[data.id] = {};
          let editor = window.fbEditors.quill[data.id];
          editor.instance = new window.Quill(template.field, {
            modules: {
              toolbar: [
                [{'header': [1, 2, false]}],
                ['bold', 'italic', 'underline'],
                ['code-block']
              ]
            },
            placeholder: attrs.placeholder || '',
            theme: 'snow'
          });
          editor.data = new Delta();
          if (value) {
            editor.instance.setContents(window.JSON.parse(fbUtils.parsedHtml(value)));
          }
          editor.instance.on('text-change', function(delta) {
            editor.data = editor.data.compose(delta);
          });
        }
      }
    };

    if (data.type !== 'textarea') {
      template.onRender = editors[data.type].onRender;
    }
    if (data.type === 'quill') {
      template.field = m('div', null, attrs);
    }

    const onRender = () => {
      if (editors[data.type]) {
        document.removeEventListener('fieldRendered', onRender);

        if (editors[data.type].css) {
          fbUtils.getStyles(editors[data.type].css);
        }
        if (editors[data.type].js && !fbUtils.isCached(editors[data.type].js)) {
          fbUtils.getScripts(editors[data.type].js).done(template.onRender);
        } else {
          template.onRender();
        }
      }
    };

    return {field: template.field, onRender};
  };

  fbUtils.getTemplate = (fieldData, isPreview = false) => {
    let {
      label,
      description,
      subtype,
      labelPosition,
      ...data} = fieldData;
    let template;
    let field;

    if (isPreview) {
      data.name = data.name + '-preview';
    }
    data.id = data.name;

    if (subtype) {
      data.type = subtype;
    }

    if (data.multiple || data.type === 'checkbox-group') {
      data.name = data.name + '[]';
    }

    if (data.required) {
      data.required = null;
      data['aria-required'] = 'true';
    }

    let fieldLabel = fbUtils.makeLabel(data, label, description);

    let templates = [
      [['autocomplete'],
        () => {
          let autocomplete = fbUtils.autocompleteTemplate(data);
          let template = {
            field: [fieldLabel, autocomplete.field],
            onRender: autocomplete.onRender
          };
          return template;
        }],
      [['text', 'password', 'email', 'number', 'file', 'color', 'date', 'tel'],
        () => {
          let template = {
            field: [fieldLabel, m('input', null, data)],
            onRender: fbUtils.noop
          };
          return template;
        }],
      [['button', 'submit', 'reset'],
        () => {
          let template = {
            field: m('button', label, data),
            onRender: fbUtils.noop
          };
          return template;
        }],
      [['select', 'checkbox-group', 'radio-group'],
        () => {
          let field = fbUtils.selectTemplate(data);
          let template = {
            field: [fieldLabel, field],
            onRender: fbUtils.noop
          };
          return template;
        }],
      ['checkbox',
        () => {
          let field = [m('input', null, data)];
          if (labelPosition === 'beforeInput') {
            field.unshift(fieldLabel, ' ');
          } else {
            field.push(' ', fieldLabel);
          }
          let template = {
            field,
            onRender: () => {
              if (data.toggle) {
                $(document.getElementById(data.id)).kcToggle();
              }
            }
          };
          return template;
        }],
      [['textarea', 'tinymce', 'quill'],
        () => {
          let field = fbUtils.longTextTemplate(data);
          let template = {
            field: [fieldLabel, field.field],
            onRender: field.onRender
          };
          return template;
        }]
      ];

      template = fbUtils.templateMap(
        templates,
        data.type,
        fbUtils.defaultField(fieldData) // fallback
      );

      if (data.type !== 'hidden') {
        let wrapperAttrs = {};
        if (data.id) {
          wrapperAttrs.className =
          `fb-${data.type} form-group field-${data.id}`;
        }
        field = fbUtils.markup('div', template.field, wrapperAttrs);
      } else {
        field = fbUtils.markup('input', null, data);
      }

      field.addEventListener('fieldRendered', template.onRender);

      return field;
  };

  /**
   * Callback for other option.
   * Toggles the hidden text area for "other" option.
   * @param  {String} otherId id of the "other" option input
   */
  fbUtils.otherOptionCB = (otherId) => {
    const otherInput = document.getElementById(otherId);
    const otherInputValue = document.getElementById(`${otherId}-value`);

    if (otherInput.checked) {
      otherInputValue.style.display = 'inline-block';
    } else {
      otherInputValue.style.display = 'none';
    }
  };

  /**
   * Capitalizes a string
   * @param  {String} str uncapitalized string
   * @return {String} str capitalized string
   */
  fbUtils.capitalize = str => {
    return str.replace(/\b\w/g, function(m) {
        return m.toUpperCase();
      });
  };


fbUtils.merge = (obj1, obj2) => {
  let mergedObj = Object.assign({}, obj1, obj2);
  for (let prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? fbUtils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if (typeof obj2[prop] === 'object') {
        mergedObj[prop] = fbUtils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

/**
 * Util to remove contents of DOM Object
 * @param  {Object} element
 * @return {Object}         element with its children removed
 */
fbUtils.empty = element => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

fbUtils.noop = () => null;


module.exports = fbUtils;
