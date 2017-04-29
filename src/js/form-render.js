import '../sass/form-render.scss';
import utils from './utils';
import events from './events';
import {layout} from './layout';
import {config} from './config';
import {defaultSubtypes} from './dom';
import {control} from './control';
import {controlClasses} from './control/index';
import {controlCustom} from './control/custom';

// @todo: prototype.js compatibility
class FormRender {

  /**
   * Create & configure a new FormRender instance
   * @param options - an object hash of supported options
   */
  constructor(options = {}) {

    // initialise defaults & options
    let defaults = {
      layout: layout, // by default use the layout class, but support a child class being defined & passed as an option
      layoutTemplates: {}, // allow custom override layout templates to be defined
      controls: {}, // custom controls
      controlConfig: {}, // additional configuration for controls
      destroyTemplate: true, // @todo - still needed?
      container: false,
      dataType: 'json',
      formData: false,
      // subtypes: defaultSubtypes, // @todo - removed this - is it needed now?
      messages: {
        formRendered: 'Form Rendered',
        noFormData: 'No form data.',
        other: 'Other',
        selectColor: 'Select Color',
        invalidControl: 'Invalid control',
      },
      onRender: () => {
      },
      render: true,
      templates: {}, // custom inline defined templates
      notify: {
        error: function (message) {
          return console.error(message);
        },
        success: function (message) {
          return console.log(message);
        },
        warning: function (message) {
          return console.warn(message);
        }
      }
    };
    this.options = $.extend(true, defaults, options);

    // parse any passed formData
    (() => {
      if (!this.options.formData) {
        return false;
      }

      let setData = {
        xml: formData => utils.parseXML(formData),
        json: formData => window.JSON.parse(formData)
      };

      this.options.formData = setData[this.options.dataType](this.options.formData) || false;
    })();

    // ability for controls to have their own configuration / options of the format control identifier (type, or type.subtype): {options}
    control.controlConfig = options.controlConfig || {};

    // load in any custom specified controls, or preloaded plugin controls
    control.loadCustom(options.controls);

    // register any passed custom templates
    if (Object.keys(this.options.templates).length) {
      controlCustom.register(this.options.templates);
    }
  }

  /**
   * Main render method which produces the form from passed configuration
   * @param options - an object hash of supported options
   * @param element - an html element to render the form into (optional)
   * @returns {FormRender}
   */
  render(element = null) {
    const formRender = this;
    let opts = this.options;

    /**
     * Extend Element prototype to allow us to append fields
     *
     * @param  {Object} fields Node elements
     */
    Element.prototype.appendFormFields = function (fields) {
      let element = this;
      fields.forEach(field => {
        element.appendChild(field);
        field.dispatchEvent(events.fieldRendered);
      });
    };

    /**
     * Extend Element prototype to remove content
     */
    Element.prototype.emptyContainer = function () {
      let element = this;
      while (element.lastChild) {
        element.removeChild(element.lastChild);
      }
    };

    let runCallbacks = function () {
      if (opts.onRender) {
        opts.onRender();
      }
    };

    /**
     * Clean up passed object configuration to prepare for use with the markup function
     * @param field - object of field configuration
     * @returns sanitized field object
     */
    let santizeField = (field) => {
      let sanitizedField = Object.assign({}, field);
      sanitizedField.className = field.className || field.class || null;
      delete sanitizedField.class;

      if (field.values) {
        field.values = field.values.map(option => utils.trimObj(option));
      }

      return utils.trimObj(sanitizedField);
    };

    /**
     * Retrieve the html markup for a passed array of DomElements
     * @param fields - array of dom elements
     */
    let exportMarkup = fields => fields.map(elem => elem.innerHTML).join('');

    // Begin the core plugin
    let rendered = [];

    // generate field markup if we have fields
    if (opts.formData) {

      // instantiate the layout class & loop through the field configuration
      let engine = new opts.layout(opts.layoutTemplates);
      for (var i = 0; i < opts.formData.length; i++) {
        let fieldData = opts.formData[i];
        let sanitizedField = santizeField(fieldData);
        // let type = fieldData.subtype || fieldData.type;

        // determine the control class for this type, and then process it through the layout engine
        let controlClass = control.getClass(fieldData.type, fieldData.subtype);
        let field = engine.build(controlClass, sanitizedField);
        rendered.push(field);
      }

      // if rendering, inject the fields into the specified wrapper container/element
      if (opts.render) {
        if (opts.container) {
          // isn't this going to fail to dispatch the events.fieldRendered event as per appendFormFields?
          // perhaps a better approach is to create an empty wrapper div, append it to the container, and set the new wrapper as the element
          // then remove the 'else if' & empty the element + appendFormFields.
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
}

(function($) {
  $.fn.formRender = function(options) {
    let elems = this;
    let formRender = new FormRender(options);
    elems.each(function(i) {
      elems[i].dataset.formRender = formRender;
      return formRender.render(elems[i]);
    });
  };

})(jQuery);