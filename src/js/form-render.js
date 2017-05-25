import 'babel-polyfill';
import 'babel-regenerator-runtime';
import '../sass/form-render.scss';
import mi18n from 'mi18n';
import utils from './utils';
import events from './events';
import layout from './layout';
import control from './control';
import './control/index';
import controlCustom from './control/custom';
import {defaultI18n} from './config';

/**
 * FormRender Class
 */
class FormRender {

  /**
   * Create & configure a new FormRender instance
   * @param {Object} options - an object hash of supported options
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
      i18n: Object.assign({}, defaultI18n),
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
    this.options = $.extend(true, defaults, options);

    if (!mi18n.current) {
      mi18n.init(this.options.i18n);
    }

    // parse any passed formData
    (() => {
      if (!this.options.formData) {
        return false;
      }

      let setData = {
        xml: formData => utils.parseXML(formData),
        json: formData => window.JSON.parse(formData)
      };

      // if the user hasn't passed a pre-parsed formData object, parse it according to the specified dataType
      if (typeof this.options.formData !== 'object') {
        this.options.formData = setData[this.options.dataType](this.options.formData) || false;
      }
    })();

    // ability for controls to have their own configuration / options of the format control identifier (type, or type.subtype): {options}
    control.controlConfig = options.controlConfig || {};

    // load in any custom specified controls, or preloaded plugin controls
    control.loadCustom(options.controls);

    // register any passed custom templates
    if (Object.keys(this.options.templates).length) {
      controlCustom.register(this.options.templates);
    }

    /**
     * Extend Element prototype to allow us to append fields
     *
     * @param  {Object} fields Node elements
     */
    if (typeof Element.prototype.appendFormFields !== 'function') {
      Element.prototype.appendFormFields = function(fields) {
        let element = this;
        if (!Array.isArray(fields)) {
          fields = [fields];
        }
        fields.forEach(field => {
          element.appendChild(field);
          field.dispatchEvent(events.fieldRendered);
        });
      };
    }

    /**
     * Extend Element prototype to remove content
     */
    if (typeof Element.prototype.emptyContainer !== 'function') {
      Element.prototype.emptyContainer = function() {
        let element = this;
        while (element.lastChild) {
          element.removeChild(element.lastChild);
        }
      };
    }
  }

  /**
   * Clean up passed object configuration to prepare for use with the markup function
   * @param {Object} field - object of field configuration
   * @return {Object} sanitized field object
   */
  santizeField(field) {
    let sanitizedField = Object.assign({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;
    if (field.values) {
      field.values = field.values.map(option => utils.trimObj(option));
    }
    return utils.trimObj(sanitizedField);
  }

  /**
   * Main render method which produces the form from passed configuration
   * @param {Object} element - an html element to render the form into (optional)
   * @return {Object} FormRender
   */
  render(element = null) {
    const formRender = this;
    let opts = this.options;

    let runCallbacks = function() {
      if (opts.onRender) {
        opts.onRender();
      }
    };

    /**
     * Retrieve the html markup for a passed array of DomElements
     * @param {Array} fields - array of dom elements
     * @return {String} fields html
     */
    let exportMarkup = fields => fields.map(elem => elem.innerHTML).join('');

    // Begin the core plugin
    let rendered = [];

    // generate field markup if we have fields
    if (opts.formData) {
      // instantiate the layout class & loop through the field configuration
      let engine = new opts.layout(opts.layoutTemplates);
      for (let i = 0; i < opts.formData.length; i++) {
        let fieldData = opts.formData[i];
        let sanitizedField = this.santizeField(fieldData);

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

  /**
   * Render a single control / field
   * Expects only a single field configuration to be set in opt.formData
   * @param {Object} element - an optional DOM element to render the field into - if not specified will just return the rendered field - note if you do this you will need to manually call element.dispatchEvent('fieldRendered') on the returned element when it is rendered into the DOM
   * @return {Object} the formRender object
   */
  renderControl(element = null) {
    let opts = this.options;
    let fieldData = opts.formData;
    if (!fieldData || Array.isArray(fieldData)) {
      throw new Error('To render a single element, please specify a single object of formData for the field in question');
    }
    let sanitizedField = this.santizeField(fieldData);

    // determine the control class for this type, and then build it
    let engine = new opts.layout();
    let controlClass = control.getClass(fieldData.type, fieldData.subtype);
    let forceTemplate = opts.forceTemplate || 'hidden'; // support the ability to override what layout template the control is rendered using. This can be used to output the whole row (including label, help etc) using the standard templates if desired.
    let field = engine.build(controlClass, sanitizedField, forceTemplate);
    element.appendFormFields(field);
    opts.notify.success(opts.messages.formRendered);
    return this;
  }
}

(function($) {
  $.fn.formRender = function(options) {
    let elems = this;
    let formRender = new FormRender(options);
    elems.each(i => formRender.render(elems[i]));
  };

  /**
   * renders an individual field into the current element
   * @param {Object} data - data structure for a single field output from formBuilder
   * @param {Object} options - optional subset of formRender options - doesn't support container or other form rendering based options.
   * @return {DOMElement} the rendered field
   */
  $.fn.controlRender = function(data, options = {}) {
    options.formData = data;
    options.dataType = typeof data === 'string' ? 'json' : 'xml';
    let formRender = new FormRender(options);
    let elems = this;
    elems.each(i => formRender.renderControl(elems[i]));
    return elems;
  };
})(jQuery);
