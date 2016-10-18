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
      messages: {
        formRendered: 'Form Rendered',
        noFormData: 'No form data.',
        other: 'Other',
        selectColor: 'Select Color'
      },
      onRender: () => {},
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
    };

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
   * Extend Element prototype to allow us to append fields
   *
   * @param  {Object} fields Node elements
   */
  Element.prototype.appendFormFields = function(fields) {
    var element = this;
    fields.forEach(field => element.appendChild(field));
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

  var runCallbacks = function() {
    if (opts.onRender) {
      opts.onRender();
    }
  };

  var santizeField = (field) => {
    let sanitizedField = Object.assign({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;

    if (field.values) {
      field.values = field.values.map(option => utils.trimObj(option));
    }

    return utils.trimObj(sanitizedField);
  };

  // Begin the core plugin
  var rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (var i = 0; i < opts.formData.length; i++) {
      let sanitizedField = santizeField(opts.formData[i]);
      rendered.push(utils.fieldRender(sanitizedField, opts));
    }

    if (opts.render) {
      if (opts.container) {
        let renderedFormWrap = utils.markup('div', rendered, {className: 'rendered-form'});
        opts.container = (opts.container instanceof jQuery) ? opts.container[0] : opts.container;
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.messages.formRendered);
    } else {
      formRender.markup = rendered.map(function(elem) {
        return elem.innerHTML;
      }).join('');
    }
  } else {
    let noData = utils.markup('div', opts.messages.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.messages.noFormData);
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
