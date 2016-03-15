/*
formBuilder - http://kevinchappell.github.io/formBuilder/
Version: 1.9.4
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
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

// render the formBuilder XML into html
var FormRender = function FormRender(options, element) {
  'use strict';

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

  var opts = $.extend(defaults, options);

  /**
   * Require the html element if it has been lost
   *
   * @return {object} javascript object for html element
   */
  _helpers.getElement = function () {
    if (!element.id) {
      element.id = _helpers.makeId(element);
    }

    return document.getElementById(element.id);
  };

  /**
   * Make an ID for this element using current date and tag
   *
   * @param  {Boolean} element
   * @return {String}          new id for element
   */
  _helpers.makeId = function (element) {
    var epoch = new Date().getTime();

    return element.tagName + '-' + epoch;
  };

  if (!opts.formData && element) {
    element = _helpers.getElement();
    opts.formData = element.value;
  }

  /**
   * Generate markup wrapper where needed
   *
   * @param  {string} type
   * @param  {object} attrs
   * @param  {string} content we wrap this
   * @return {string}
   */
  _helpers.markup = function (type) {
    var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var content = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    attrs = _helpers.attrString(attrs);
    content = Array.isArray(content) ? content.join('') : content;
    var inlineElems = ['input'],
        template = inlineElems.indexOf(type) === -1 ? '<' + type + ' ' + attrs + '>' + content + '</' + type + '>' : '<' + type + ' ' + attrs + '/>';
    return template;
  };

  /**
   * Generate preview markup
   * @param  {object} field
   * @return {string}       preview markup for field
   * @todo
   */
  _helpers.fieldRender = function (field) {
    var fieldMarkup = '',
        fieldLabel = '',
        optionsMarkup = '';
    var fieldAttrs = _helpers.parseAttrs(field.attributes),
        fieldDesc = fieldAttrs.description || '',
        fieldRequired = '',
        fieldOptions = $('option', field);
    fieldAttrs.id = fieldAttrs.name;

    if (fieldAttrs.required) {
      fieldAttrs.required = null;
      fieldAttrs['aria-required'] = 'true';
      fieldRequired = '<span class="required">*</span>';
    }

    if (fieldAttrs.type !== 'hidden') {
      if (fieldDesc) {
        fieldDesc = '<span class="tooltip-element" tooltip="' + fieldDesc + '">?</span>';
      }
      var fieldLabelText = fieldAttrs.label || '';
      fieldLabel = '<label for="' + fieldAttrs.id + '">' + fieldLabelText + ' ' + fieldRequired + ' ' + fieldDesc + '</label>';
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
        fieldMarkup = fieldLabel + '<textarea ' + fieldAttrsString + '></textarea>';
        break;
      case 'select':
        fieldAttrs.type = fieldAttrs.type.replace('-group', '');

        if (fieldOptions.length) {
          fieldOptions.each(function (index, el) {
            index = index;
            var optionAttrs = _helpers.parseAttrs(el.attributes),
                optionAttrsString = _helpers.attrString(optionAttrs),
                optionText = el.innerHTML || el.innerContent || el.innerText || el.childNodes[0].nodeValue || el.value;
            optionsMarkup += '<option ' + optionAttrsString + '>' + optionText + '</option>';
          });
        }
        fieldMarkup = fieldLabel + '<select ' + fieldAttrsString + '>' + optionsMarkup + '</select>';
        break;
      case 'checkbox-group':
      case 'radio-group':
        fieldAttrs.type = fieldAttrs.type.replace('-group', '');

        delete fieldAttrs.className;

        if (fieldOptions.length) {
          (function () {
            var optionName = fieldAttrs.type === 'checkbox' ? fieldAttrs.name + '[]' : fieldAttrs.name;
            fieldOptions.each(function (index, el) {
              var optionAttrs = $.extend({}, fieldAttrs, _helpers.parseAttrs(el.attributes)),
                  optionAttrsString = void 0,
                  optionText = void 0;

              if (optionAttrs.selected) {
                delete optionAttrs.selected;
                optionAttrs.checked = null;
              }

              optionAttrs.name = optionName;
              optionAttrs.id = fieldAttrs.id + '-' + index;
              optionAttrsString = _helpers.attrString(optionAttrs);
              optionText = el.innerHTML || el.innerContent || el.innerText || el.value || '';

              optionsMarkup += '<input ' + optionAttrsString + ' /> <label for="' + optionAttrs.id + '">' + optionText + '</label><br>';
            });
          })();
        }
        fieldMarkup = fieldLabel + '<div class="' + fieldAttrs.type + '-group">' + optionsMarkup + '</div>';
        break;
      case 'text':
      case 'password':
      case 'email':
      case 'file':
      case 'hidden':
      case 'date':
      case 'autocomplete':
        fieldMarkup = fieldLabel + ' <input ' + fieldAttrsString + '>';
        break;
      case 'color':
        fieldMarkup = fieldLabel + ' <input ' + fieldAttrsString + '> ' + opts.label.selectColor;
        break;
      case 'button':
      case 'submit':
        fieldMarkup = '<button ' + fieldAttrsString + '>' + fieldLabelVal + '</button>';
        break;
      case 'checkbox':
        fieldMarkup = '<input ' + fieldAttrsString + '> ' + fieldLabel;

        if (fieldAttrs.toggle) {
          setTimeout(function () {
            $(document.getElementById(fieldAttrs.id)).kcToggle();
          }, 100);
        }
        break;
      default:
        fieldMarkup = '<' + fieldAttrs.type + '></' + fieldAttrs.type + '>';
    }

    if (fieldAttrs.type !== 'hidden') {
      fieldMarkup = _helpers.markup('div', {
        className: 'form-group field-' + fieldAttrs.id
      }, fieldMarkup);
    }

    return fieldMarkup;
  };

  _helpers.attrString = function (attrs) {
    var attributes = [];

    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attr = _helpers.safeAttr(attr, attrs[attr]);
        attributes.push(attr.name + attr.value);
      }
    }
    return attributes.join(' ');
  };

  _helpers.safeAttr = function (name, value) {
    var safeAttr = {
      className: 'class'
    };

    name = safeAttr[name] || name;
    value = value ? window.JSON.stringify(value) : false;
    value = value ? '=' + value : '';

    return {
      name: name,
      value: value
    };
  };

  _helpers.parseAttrs = function (attrNodes) {
    var fieldAttrs = {};
    for (var attr in attrNodes) {
      if (attrNodes.hasOwnProperty(attr)) {
        fieldAttrs[attrNodes[attr].nodeName] = attrNodes[attr].nodeValue;
      }
    }
    return fieldAttrs;
  };

  // Begin the core plugin
  var rendered = [];

  var formData = $.parseXML(opts.formData),
      fields = $('field', formData);
  // @todo - form configuration settings (control position, creatorId, theme etc)
  // settings = $('settings', formData);

  if (!formData) {
    opts.notify.error(opts.label.noFormData);
    return false;
  } else {
    opts.notify.success(opts.label.formRendered);
  }

  // generate field markup if we have fields
  if (fields.length) {
    fields.each(function (index, field) {
      index = index;
      rendered.push(_helpers.fieldRender(field));
    });
  }

  var output = rendered.join('');

  if (opts.render) {
    if (opts.container && opts.container.length) {
      opts.container.html(output);
    } else if (element) {
      element.replaceWith(output);
    }
  } else {
    formRender.markup = output;
  }

  return formRender;
};

(function ($) {
  'use strict';

  $.fn.formRender = function (options) {
    this.each(function () {
      var formRender = new FormRender(options, this);
      return formRender;
    });
  };
})(jQuery);