import {control} from '../control';

/**
 * Support for custom controls
 * Implementing support for custom templates being passed as options to formBuilder/Render
 */
export class controlCustom extends control {

  /**
   * Override the register method to allow passing 'templates' configuration data
   * @param templates an object/hash of template data as defined http://formbuilder.readthedocs.io/en/latest/formBuilder/options/templates/
   */
  static register(templates) {

    // store the template data against a static property
    controlCustom.templates = templates;

    // register each defined template against this class
    control.register(Object.keys(templates), controlCustom);
  }

  /**
   * build a custom control defined in the templates option
   * @return DOM Element to be injected into the form.
   */
  build() {
    let custom = controlCustom.templates[this.type];
    if (!custom) {
      new Error('Invalid custom control type. Please ensure you have registered it correctly as a template option.');
    }

    // restore fieldData config structure for backwards compatibility
    let fieldData = Object.assign(this.config);
    let properties = ['label', 'description', 'subtype', 'id', 'isPreview', 'required', 'title', 'aria-required', 'type'];
    for (let prop of properties) {
      fieldData[prop] = this.config[prop] || this[prop];
    }

    // build & retrieve element settings
    custom = custom.bind(this);
    custom = custom(fieldData);

    // check for CSS or JS to be injected
    if (custom.js) {
      this.js = custom.js;
    }
    if (custom.css) {
      this.css = custom.css;
    }

    // handle onrender events & return
    this.onRender = custom.onRender;
    return {
      field: custom.field,
      layout: custom.layout
    };
  }
}