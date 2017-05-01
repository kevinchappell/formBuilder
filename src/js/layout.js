// LAYOUT.JS
import utils from './utils';
import events from './events';

/**
 * Base class for controlling the layout of each 'row' on the form
 * Can be extended & customised with the new object being passed to FormRender as the new layout object
 * Controls things like the label, help text, and how they fit together with the control itself
 */
export class layout {
  constructor() {

    // supported templates for outputting a field
    // preferred layout template can be indicated by specifying a 'layout' in the return object of control::build
    this.templates = {
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
   * @param control - the relevant control class
   * @param data - configuration data passed through formData for this control
   */
  build(renderControl, data) {

    // prepare the data
    if (data.isPreview) {
      if (data.name) {
        data.name = data.name + '-preview';
      } else {
        data.name = utils.nameAttr(data) + '-preview';
      }
    }
    data.id = data.name;
    this.data = $.extend({}, data);

    // build the control
    let control = new renderControl(data);
    let field = control.build();
    if (typeof field !== 'object' || !field.field) {
      field = {field: field};
    }

    // build the label & help text
    let label = this.label();
    let help = this.help();

    // process the relevant layout template
    let template = this.templates[field.layout] || this.templates.default;
    let element = template(field.field, label, help, this.data);

    // bind control on render events
    element.addEventListener('fieldRendered', control.on('render'));
    return element;
  }

  /**
   * Build a label element
   * @returns dom element to render the label
   */
  label() {
    let label = this.data.label || '';
    let labelText = utils.parsedHtml(label);
    let labelContents = [labelText];
    if (this.data.required) {
      labelContents.push(this.markup('span', '*', {className: 'required'}));
    }

    // generate a label element
    return this.markup('label', labelContents, {
      for: this.data.id,
      className: `fb-${this.data.type}-label`
    });
  }

  /**
   * Build a help element
   * @returns dom element to render the help text
   */
  help() {
    if (!this.data.description) {
      return null;
    }
    return this.markup('span', '?', {
      className: 'tooltip-element',
      tooltip: this.data.description
    });
  }

  /**
   * link to the utils.markup method
   * ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
   */
  markup(tag, content = '', attributes = {}) {
    return utils.markup(tag, content, attributes);
  }
}