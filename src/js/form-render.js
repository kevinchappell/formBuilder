/**
 * render the formBuilder XML into html
 * @param  {Object} options
 * @param  {Object} element html element where form will be rendered (optional)
 * @return {Object} formRender instance
 */
function FormRender(options, element) {
  const utils = require('./utils.js');
  const events = require('./events.js');

  const formRender = this;
  const defaults = {
      destroyTemplate: true, // @todo
      container: false,
      dataType: 'json',
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

  let opts = $.extend(true, defaults, options);

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
    let element = this;
    fields.forEach(field => {
      element.appendChild(field);
      field.dispatchEvent(events.fieldRendered);
    });
  };

  /**
   * Extend Element prototype to remove content
   */
  Element.prototype.emptyContainer = function() {
    let element = this;
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  };

  let runCallbacks = function() {
    if (opts.onRender) {
      opts.onRender();
    }
  };

  let santizeField = (field) => {
    let sanitizedField = Object.assign({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;

    if (field.values) {
      field.values = field.values.map(option => utils.trimObj(option));
    }

    return utils.trimObj(sanitizedField);
  };

  let exportMarkup = fields => fields.map(elem => elem.innerHTML).join('');

  // Begin the core plugin
  let rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (let i = 0; i < opts.formData.length; i++) {
      let sanitizedField = santizeField(opts.formData[i]);
      rendered.push(utils.getTemplate(sanitizedField, opts));
      // rendered.push(utils.fieldRender(sanitizedField, opts));
    }

    if (opts.render) {
      if (opts.container) {
        let renderedFormWrap = utils.markup('div', rendered, {
          className: 'rendered-form'
        });
        if (opts.container instanceof jQuery) {
          opts.container = opts.container[0];
        }
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.messages.formRendered);
    } else {
      formRender.markup = exportMarkup(rendered);
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
    let elems = this;
    elems.each(function(i) {
      let formRender = new FormRender(options, elems[i]);
      elems[i].dataset.formRender = formRender;
      return formRender;
    });
  };
})(jQuery);

window.FormRender = FormRender;

export default FormRender;
