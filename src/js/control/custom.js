import {control} from '../control';
import mi18n from 'mi18n';

/**
 * Support for custom controls
 * Implementing support for custom templates being passed as options to formBuilder/Render
 */
export class controlCustom extends control {

  /**
   * Override the register method to allow passing 'templates' configuration data
   * @param templates an object/hash of template data as defined http://formbuilder.readthedocs.io/en/latest/formBuilder/options/templates/
   */
  static register(templates, fields=[]) {
    if (!controlCustom.def) {
      controlCustom.def = {
        icon: {},
        i18n: {}
      };
    }

    // store the template data against a static property
    controlCustom.templates = templates;

    // prepare i18n locale definition
    let locale = mi18n.locale;
    if (!controlCustom.def.i18n[locale]) {
      controlCustom.def.i18n[locale] = {};
    }

    // build the control label & icon definitions
    for (let field of fields) {
      let type = field.type;
      field.attrs = field.attrs || {};
      if (!type) {
        if (!field.attrs.type) {
          this.error('Ignoring invalid custom field definition. Please specify a type property.');
          continue;
        }
        type = field.attrs.type;
      }

      // ensure there is a template defined for this field
      if (!templates[type]) {
        this.error('Error while registering custom field: ' + field + '. Unable to find a related defined template.');
      }

      // map label & icon
      controlCustom.def.i18n[locale][type] = field.label;
      controlCustom.def.icon[type] = field.icon;
    }

    // register each defined template against this class
    control.register(Object.keys(templates), controlCustom);
  }

  /**
   * Class configuration - return the icons & label translations defined in register
   * @returns definition object
   */
  static get definition() {
    return controlCustom.def;
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