// LAYOUT.JS
import utils from './utils';

/**
 * Base class for controlling the layout of each 'row' on the form
 * Can be extended & customised with the new object being passed to FormRender as the new layout object
 * Controls things like the label, help text, and how they fit together with the control itself
 */
export default class layout {

  /**
   * Prepare the templates for layout
   * @param {Object} templates object containing custom or overwrite templates
   * @param {Boolean} preview - are we rendering a preview for the formBuilder stage
   */
  constructor(templates, preview) {
    this.preview = preview;

    // supported templates for outputting a field
    // preferred layout template can be indicated by specifying a 'layout' in the return object of control::build
    this.templates = {
      label: null, // can be overridden with a function(labelDOMElements, data) to generate the label element - returns a DOM element
      help: null, // can be overridden with a function(helpText, data) to generate the help element - returns a DOM element
      default: (field, label, help, data) => {
        // append help into the label
        if (help) {
          label.append(help);
        }

        // wrap the output in a form-group div & return
        let className = data.id ? `fb-${data.type} form-group field-${data.id}` : '';
        return this.markup('div', [label, field], {
          className: className
        });
      },
      noLabel: (field, label, help, data) => {
        // wrap the output in a form-group div & return without a label element
        let className = data.id ? `fb-${data.type} form-group field-${data.id}` : '';
        return this.markup('div', field, {
          className: className
        });
      },
      hidden: (field, label, help, data) => {
        // no wrapper any any visible elements
        return field;
      }
    };

    // merge in any custom templates
    if (templates) {
      this.templates = $.extend(this.templates, templates);
    }
    this.configure();
  }

  /**
   * this method is called by the constructor and should be overwritten for custom layouts that need to
   * process the configuration arguments prior to rendering
   */
  configure() {}

  /**
   * Process the configuration from an element from the standard formData array
   * building the control, label and help text, and then putting them all together.
   * Should support the control object returning a DOM element, or an object containing
   * configuration properties:
   *   - field - the DOM element
   *   - noLabel - this control shouldn't have a label (nor a space for a label)
   *   - hidden - this control shouldn't render anything visible to the page
   * @param {Object} renderControl - the relevant control class
   * @param {Object} data - configuration data passed through formData for this control
   * @param {String} forceTemplate - programatically force the template with which this control to be rendered
   * @return {Object} element
   */
  build(renderControl, data, forceTemplate) {
    // prepare the data
    if (this.preview) {
      if (data.name) {
        data.name = data.name + '-preview';
      } else {
        data.name = utils.nameAttr(data) + '-preview';
      }
    }
    data.id = data.name;
    this.data = $.extend({}, data);

    // build the control
    let control = new renderControl(data, this.preview);
    let field = control.build();
    if (typeof field !== 'object' || !field.field) {
      field = {field: field};
    }

    // build the label & help text
    let label = this.label();
    let help = this.help();

    // process the relevant layout template
    let elementTemplate;
    if (forceTemplate && this.isTemplate(forceTemplate)) {
        elementTemplate = forceTemplate;
    } else {
		elementTemplate = this.isTemplate(field.layout) ? field.layout : 'default';
    }
    let element = this.processTemplate(elementTemplate, field.field, label, help);

    // execute prerender events
    control.on('prerender')(element);

    // bind control on render events
    element.addEventListener('fieldRendered', control.on('render'));
    return element;
  }

  /**
   * Build a label element
   * @return {Object} dom element to render the label
   */
  label() {
    let label = this.data.label || '';
    let labelText = utils.parsedHtml(label);
    let labelContents = [labelText];
    if (this.data.required) {
      labelContents.push(this.markup('span', '*', {className: 'fb-required'}));
    }

    // support an override template for labels
    if (this.isTemplate('label')) {
      return this.processTemplate('label', labelContents);
    }

    // generate a label element
    return this.markup('label', labelContents, {
      for: this.data.id,
      className: `fb-${this.data.type}-label`
    });
  }

  /**
   * Build a help element
   * @return {Object} dom element to render the help text
   */
  help() {
    if (!this.data.description) {
      return null;
    }

    // support an override template for labels
    if (this.isTemplate('help')) {
      return this.processTemplate('help', this.data.description);
    }

    // generate the default help element
    return this.markup('span', '?', {
      className: 'tooltip-element',
      tooltip: this.data.description
    });
  }

  /**
   * Determines if a template is defined for the specified key
   * @param {String} template string template key to check for
   * @return {Boolean}
   */
  isTemplate(template) {
    return typeof this.templates[template] === 'function';
  }

  /**
   * Process a template & prepare the results
   * @param {String} template - template key to execute
   * @param {Array} args - any number of args that should be passed to the template. this.data is sent as the last parameter to any template.
   * @return {DOMElement}
   */
  processTemplate(template, ...args) {
    let processed = this.templates[template](...args, this.data);
    if (processed.jquery) {
      processed = processed[0];
    }
    return processed;
  }

  /**
   * link to the utils.markup method
   * ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
   * @param {String} tag
   * @param {Object|String|Array} content
   * @param {Object} attributes
   * @return {Object} DOM element
   */
  markup(tag, content = '', attributes = {}) {
    return utils.markup(tag, content, attributes);
  }
}
