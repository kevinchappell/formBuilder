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

  (function() {
    if (!opts.formData) {
      return false;
    }

    let setData = {
      xml: formData => utils.parseXML(formData),
      json: formData => window.JSON.parse(formData)
    };

    opts.formData = setData[opts.dataType](opts.formData) || false;
  })();

  /**
   * Generate preview markup
   * @param  {object} fieldData
   * @return {string}       preview markup for field
   */
  _helpers.fieldRender = function(fieldData) {
    var fieldMarkup = '',
      fieldLabel = '',
      optionsMarkup = '',
      fieldLabelText = utils.parsedHtml(fieldData.label) || '',
      fieldDesc = fieldData.description || '',
      fieldRequired = '',
      fieldOptions = fieldData.values || [];

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
      fieldLabel = `<label for="${fieldData.id}">${fieldLabelText} ${fieldRequired} ${fieldDesc}</label>`;
    }

    delete fieldData.label;
    delete fieldData.description;

    var fieldDataString = utils.attrString(fieldData);

    switch (fieldData.type) {
      case 'textarea':
      case 'rich-text':
        delete fieldData.type;
        let fieldVal = fieldData.value || '';
        fieldMarkup = `${fieldLabel}<textarea ${fieldDataString}>${fieldVal}</textarea>`;
        break;
      case 'select':
        var optionAttrsString;
        fieldData.type = fieldData.type.replace('-group', '');

        if (fieldOptions) {
          for (let i = 0; i < fieldOptions.length; i++) {
            if (!fieldOptions[i].selected) {
              delete fieldOptions[i].selected;
            }
            optionAttrsString = utils.attrString(fieldOptions[i]);
            optionsMarkup += `<option ${optionAttrsString}>${fieldOptions[i].label}</option>`;
          }
        }

        fieldMarkup = `${fieldLabel}<select ${fieldDataString}>${optionsMarkup}</select>`;
        break;
      case 'checkbox-group':
      case 'radio-group':
        let optionAttrs;
        fieldData.type = fieldData.type.replace('-group', '');

        if (fieldData.type === 'checkbox') {
          fieldData.name = fieldData.name + '[]';
        }

        if (fieldOptions) {
          let optionAttrsString;

          for (let i = 0; i < fieldOptions.length; i++) {
            optionAttrs = Object.assign({}, fieldData, fieldOptions[i]);

            if (optionAttrs.selected) {
              delete optionAttrs.selected;
              optionAttrs.checked = null;
            }

            optionAttrs.id = fieldData.id + '-' + i;
            optionAttrsString = utils.attrString(optionAttrs);
            optionsMarkup += `<input ${optionAttrsString} /> <label for="${optionAttrs.id}">${optionAttrs.label}</label><br>`;
          }

          if (fieldData.enableOther || fieldData['enable-other']) {
            let otherOptionAttrs = {
              id: fieldData.id + '-' + 'other',
              className: fieldData.className + ' other-option'
            };

            optionAttrsString = utils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

            optionsMarkup += `<input ${optionAttrsString} /> <label for="${otherOptionAttrs.id}">${opts.label.other}</label> <input type="text" data-other-id="${otherOptionAttrs.id}" name="${otherOptionAttrs.name}" id="${otherOptionAttrs.id}-value" style="display:none;" />`;
          }

        }
        fieldMarkup = `${fieldLabel}<div class="${fieldData.type}-group">${optionsMarkup}</div>`;
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
        fieldMarkup = `${fieldLabel} <input ${fieldDataString}>`;
        break;
      case 'color':
        fieldMarkup = `${fieldLabel} <input ${fieldDataString}> ${opts.label.selectColor}`;
        break;
      case 'button':
      case 'submit':
        fieldMarkup = `<button ${fieldDataString}>${fieldLabelText}</button>`;
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
        fieldMarkup = `<${fieldData.type} ${fieldDataString}>${fieldLabelText}</${fieldData.type}>`;
    }

    if (fieldData.type !== 'hidden') {
      let className = fieldData.id ? 'form-group field-' + fieldData.id : '';
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

  var otherOptionCB = function() {
    var otherOptions = document.getElementsByClassName('other-option');
    for (var i = 0; i < otherOptions.length; i++) {
      let otherInput = document.getElementById(otherOptions[i].id + '-value');
      otherOptions[i].onclick = function() {
        let option = this;
        if (this.checked) {
          otherInput.style.display = 'inline-block';
          option.nextElementSibling.style.display = 'none';
          otherInput.oninput = function() { option.value = this.value; };
        } else {
          otherInput.style.display = 'none';
          option.nextElementSibling.style.display = 'inline-block';
          otherInput.oninput = undefined;
        }
      };
    }
  };

  var runCallbacks = function() {
    otherOptionCB();
  };

  var santizeField = (field) => {
    let sanitizedField = Object.assign({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;

    return utils.trimObj(sanitizedField);
  };

  // Begin the core plugin
  var rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (var i = 0; i < opts.formData.length; i++) {
      let sanitizedField = santizeField(opts.formData[i]);
      rendered.push(_helpers.fieldRender(sanitizedField));
    }

    if (opts.render) {
      if (opts.container) {
        let renderedFormWrap = utils.markup('div', rendered, { className: 'rendered-form' });
        opts.container = (opts.container instanceof jQuery) ? opts.container[0] : opts.container;
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.label.formRendered);
    } else {
      formRender.markup = rendered.map(function(elem) {
        return elem.innerHTML;
      }).join('');
    }
  } else {
    let noData = utils.markup('div', opts.label.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.label.noFormData);
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
