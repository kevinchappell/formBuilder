import control from '../control';
import mi18n from 'mi18n';

/**
 * Support for custom controls
 * Implementing support for custom templates being passed as options to formBuilder/Render
 */
export default class controlCustom extends control {

  /**
   * Override the register method to allow passing 'templates' configuration data
   * @param {Object} templates an object/hash of template data as defined https://formbuilder.online/docs/formBuilder/options/templates/
   * @param {Array} fields
   */
  static register(templates = {}, fields = []) {
    controlCustom.customRegister = {}

    if (!controlCustom.def) {
      controlCustom.def = {
        icon: {},
        i18n: {}
      };
    }

    // store the template data against a static property
    controlCustom.templates = templates;

    // prepare i18n locale definition
    const locale = mi18n.locale;
    if (!controlCustom.def.i18n[locale]) {
      controlCustom.def.i18n[locale] = {};
    }

    // register each defined template against this class
    control.register(Object.keys(templates), controlCustom);

    // build the control label & icon definitions
    for (const field of fields) {
      let type = field.type;
      field.attrs = field.attrs || {};
      if (!type) {
        if (!field.attrs.type) {
          this.error('Ignoring invalid custom field definition. Please specify a type property.');
          continue;
        }
        type = field.attrs.type;
      }

      // default icon & label lookup
      let lookup = field.subtype || type;

      // if there is no template defined for this type, check if we already have this type/subtype registered
      if (!templates[type]) {
        // check that this type is already registered
        const controlClass = control.getClass(type, field.subtype);
        if (!controlClass) {
          this.error('Error while registering custom field: ' + type + (field.subtype ? ':' + field.subtype : '') + '. Unable to find any existing defined control or template for rendering.');
          continue;
        }

        // generate a random key & map the settings against it
        lookup = field.datatype ? field.datatype : `${type}-${Math.floor((Math.random() * 9000) + 1000)}`;

        controlCustom.customRegister[lookup] = jQuery.extend(field, {
          type: type,
          class: controlClass
        });
      }

      // map label & icon
      controlCustom.def.i18n[locale][lookup] = field.label;
      controlCustom.def.icon[lookup] = field.icon;
    }
  }

  /**
   * Returns any custom fields that map to an existing type/subtype combination
   * @param  {String} type optional type of control we want to look up
   * subtypes of. If not specified will return all types
   * @return {Array} registered custom lookup keys
   */
  static getRegistered(type=false) {
    if (type) {
      return control.getRegistered(type);
    }
    return Object.keys(controlCustom.customRegister);
  }

  /**
   * Retrieve the class for a specified control type
   * @param {String} lookup - custom control lookup to check for
   * @return {Class} control subclass as defined in the call to register
   */
  static lookup(lookup) {
    return controlCustom.customRegister[lookup];
  }

  /**
   * Class configuration - return the icons & label translations defined in register
   * @return {Class} definition object
   */
  static get definition() {
    return controlCustom.def;
  }

  /**
   * build a custom control defined in the templates option
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    let custom = controlCustom.templates[this.type];
    if (!custom) {
      return this.error('Invalid custom control type. Please ensure you have registered it correctly as a template option.');
    }

    // render the custom template
    // restore fieldData config structure for backwards compatibility
    const fieldData = Object.assign(this.config);
    const properties = ['label', 'description', 'subtype', 'id', 'isPreview', 'required', 'title', 'aria-required', 'type'];
    for (const prop of properties) {
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
controlCustom.customRegister = {};
