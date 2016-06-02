'use strict';
// render the formBuilder XML into html
function FormRenderFn(options, element) {

  var formRender = this,
    defaults = {
      destroyTemplate: true, // @todo
      container: false,
      dataType: 'xml',
      formData: false,
      label: {
        selectColor: 'Select Color',
        noFormData: 'No form data.',
        formRendered: 'Form Rendered'
      },
      render: true,
      notify: {
        error: function(message) {
          return console.error(message);
        },
        success: function(message) {
          return console.log(message);
        },
        warning: function(message) {
          return console.warn(message);
        }
      }
    },
    _helpers = {};

  var opts = $.extend(true, defaults, options);


  /**
   * Require the html element if it has been lost
   *
   * @return {object} javascript object for html element
   */
  _helpers.getElement = function() {
    if (!element.id) {
      element.id = _helpers.makeId(element);
    }

    return document.getElementById(element.id);
  };

  /**
   * Make an ID for this element using current date and tag
   *
   * @param  {Boolean} element
   * @return {String}  new id for element
   */
  _helpers.makeId = function(element) {
    let epoch = new Date().getTime();

    return `${element.tagName}-${epoch}`;
  };

  if (!opts.formData && element) {
    element = _helpers.getElement();
    opts.formData = element.value;
  }

  /**
   * Generate markup wrapper where needed
   *
   * @param  {string}              tag
   * @param  {String|Array|Object} content we wrap this
   * @param  {object}              attrs
   * @return {String}
   */
  _helpers.markup = function(tag, content = '', attrs = {}) {
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
        let name = _helpers.safeAttrName(attr);
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
   * Generate preview markup
   * @param  {object} field
   * @return {string}       preview markup for field
   * @todo
   */
  _helpers.fieldRender = function(field) {
    var fieldMarkup = '',
      fieldLabel = '',
      optionsMarkup = '';
    var fieldAttrs = _helpers.parseAttrs(field.attributes),
      fieldLabelText = fieldAttrs.label || '',
      fieldDesc = fieldAttrs.description || '',
      fieldRequired = '',
      fieldOptions = $('option', field);
    fieldAttrs.id = fieldAttrs.name;

    fieldAttrs.type = fieldAttrs.subtype || fieldAttrs.type;

    if (fieldAttrs.required) {
      fieldAttrs.required = null;
      fieldAttrs['aria-required'] = 'true';
      fieldRequired = `<span class="required">*</span>`;
    }

    if (fieldAttrs.type !== 'hidden') {
      if (fieldDesc) {
        fieldDesc = `<span class="tooltip-element" tooltip="${fieldDesc}">?</span>`;
      }
      fieldLabel = `<label for="${fieldAttrs.id}">${fieldLabelText} ${fieldRequired} ${fieldDesc}</label>`;
    }

    var fieldLabelVal = fieldAttrs.label;

    delete fieldAttrs.label;
    delete fieldAttrs.description;

    var fieldAttrsString = _helpers.attrString(fieldAttrs);

    switch (fieldAttrs.type) {
      case 'textarea':
      case 'rich-text':
        delete fieldAttrs.type;
        delete fieldAttrs.value;
        fieldMarkup = `${fieldLabel}<textarea ${fieldAttrsString}></textarea>`;
        break;
      case 'select':
        fieldAttrs.type = fieldAttrs.type.replace('-group', '');

        if (fieldOptions.length) {
          fieldOptions.each(function(index, el) {
            index = index;
            let optionAttrs = _helpers.parseAttrs(el.attributes),
              optionAttrsString = _helpers.attrString(optionAttrs);
            optionsMarkup += `<option ${optionAttrsString}>${el.textContent}</option>`;
          });
        }
        fieldMarkup = `${fieldLabel}<select ${fieldAttrsString}>${optionsMarkup}</select>`;
        break;
      case 'checkbox-group':
      case 'radio-group':
        fieldAttrs.type = fieldAttrs.type.replace('-group', '');

        // delete fieldAttrs.className;

        if (fieldOptions.length) {
          let optionName = fieldAttrs.type === 'checkbox' ? fieldAttrs.name + '[]' : fieldAttrs.name;
          fieldOptions.each(function(index, el) {
            let optionAttrs = Object.assign({}, fieldAttrs, _helpers.parseAttrs(el.attributes)),
              optionAttrsString;

            if (optionAttrs.selected) {
              delete optionAttrs.selected;
              optionAttrs.checked = null;
            }

            optionAttrs.name = optionName;
            optionAttrs.id = fieldAttrs.id + '-' + index;
            optionAttrsString = _helpers.attrString(optionAttrs);
            optionsMarkup += `<input ${optionAttrsString} /> <label for="${optionAttrs.id}">${el.textContent}</label><br>`;
          });
        }
        fieldMarkup = `${fieldLabel}<div class="${fieldAttrs.type}-group">${optionsMarkup}</div>`;
        break;
      case 'text':
      case 'password':
      case 'email':
      case 'file':
      case 'hidden':
      case 'date':
      case 'autocomplete':
        fieldMarkup = `${fieldLabel} <input ${fieldAttrsString}>`;
        break;
      case 'color':
        fieldMarkup = `${fieldLabel} <input ${fieldAttrsString}> ${opts.label.selectColor}`;
        break;
      case 'button':
      case 'submit':
        fieldMarkup = `<button ${fieldAttrsString}>${fieldLabelVal}</button>`;
        break;
      case 'checkbox':
        fieldMarkup = `<input ${fieldAttrsString}> ${fieldLabel}`;

        if (fieldAttrs.toggle) {
          setTimeout(function() {
            $(document.getElementById(fieldAttrs.id)).kcToggle();
          }, 100);
        }
        break;
      default:
        fieldMarkup = `<${fieldAttrs.type} ${fieldAttrsString}>${fieldLabelVal}</${fieldAttrs.type}>`;
    }

    if (fieldAttrs.type !== 'hidden') {
      let className = fieldAttrs.id ? 'form-group field-' + fieldAttrs.id : '';
      fieldMarkup = _helpers.markup('div', fieldMarkup, {
        className: className
      });
    } else {
      fieldMarkup = _helpers.markup('input', null, fieldAttrs);
    }

    return fieldMarkup;
  };

  /**
   * Convert camelCase into lowercase-hyphen
   *
   * @param  {string} str
   * @return {string}
   */
  _helpers.hyphenCase = (str) => {
    str = str.replace(/[^\w\s\-]/gi, '');
    str = str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });

    return str.replace(/\s/g, '-').replace(/^-+/g, '');
  };

  _helpers.attrString = function(attrs) {
    let attributes = [];

    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attr = _helpers.safeAttr(attr, attrs[attr]);
        attributes.push(attr.name + attr.value);
      }
    }
    return attributes.join(' ');
  };

  _helpers.safeAttr = function(name, value) {
    let safeAttr = {
      className: 'class'
    };

    name = safeAttr[name] || name;
    value = value ? window.JSON.stringify(value) : false;
    value = value ? `=${value}` : '';

    return {
      name,
      value
    };
  };

  _helpers.safeAttrName = function(name) {
    let safeAttr = {
      className: 'class'
    };

    return safeAttr[name] || _helpers.hyphenCase(name);
  };

  _helpers.parseAttrs = function(attrNodes) {
    var fieldAttrs = {};
    for (var attr in attrNodes) {
      if (attrNodes.hasOwnProperty(attr)) {
        fieldAttrs[attrNodes[attr].name] = attrNodes[attr].value;
      }
    }
    return fieldAttrs;
  };

  /**
   * Extend Element prototype to allow us to append fields
   *
   * @param  {object} fields Node elements
   */
  Element.prototype.appendFormFields = function(fields) {
    var element = this;
    fields.reverse();
    for (var i = fields.length - 1; i >= 0; i--) {
      element.appendChild(fields[i]);
    }
  };

  /**
   * Extend Element prototype to remove content
   */
  Element.prototype.emptyContainer = function() {
    var element = this;
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  };

  // Begin the core plugin
  var rendered = [];

  var formData = $.parseXML(opts.formData),
    fields = $('field', formData);
  // @todo - form configuration settings (control position, creatorId, theme etc)
  // settings = $('settings', formData);

  // generate field markup if we have fields
  if (fields.length) {
    fields.each(function(index, field) {
      index = index;
      rendered.push(_helpers.fieldRender(field));
    });
  } else {
    let noData = _helpers.markup('div', opts.label.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.label.noFormData);
  }

  if (opts.render) {
    if (opts.container) {
      opts.container = (opts.container instanceof jQuery) ? opts.container[0] : opts.container;
      opts.container.emptyContainer();
      opts.container.appendFormFields(rendered);
    } else if (element) {
      let renderedFormWrap = document.querySelector('.rendered-form');
      if (renderedFormWrap) {
        renderedFormWrap.emptyContainer();
        renderedFormWrap.appendFormFields(rendered);
      } else {
        renderedFormWrap = _helpers.markup('div', rendered, { className: 'rendered-form' });
        element.parentNode.insertBefore(renderedFormWrap, element.nextSibling);
        element.style.display = 'none';
        element.setAttribute('disabled', 'disabled');
      }
    }
    if (fields.length) {
      opts.notify.success(opts.label.formRendered);
    }
  } else {
    formRender.markup = rendered.map(function(elem) {
      return elem.innerHTML;
    }).join('');
  }

  return formRender;
}

(function($) {

  $.fn.formRender = function(options) {
    this.each(function() {
      let formRender = new FormRenderFn(options, this);
      return formRender;
    });
  };

})(jQuery);
