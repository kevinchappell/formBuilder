import control from '../control';
import mi18n from 'mi18n';

/**
 * Support for custom controls
 * Implementing support for custom templates being passed as options to formBuilder/Render
 */
export default class controlCustom extends control {

  /**
   * Override the register method to allow passing 'templates' configuration data
   * @param {Object} templates an object/hash of template data as defined http://formbuilder.readthedocs.io/en/latest/formBuilder/options/templates/
   * @param {Array} fields
   */
  static register(templates = {}, fields = []) {
    if (!controlCustom.def) {
      controlCustom.def = {
        icon: {},
        i18n: {}
      };
    }

    // store the template data against a static property
    controlCustom.templates = templates;

    // store class mappings (for type/subtype combos that are already registered) against a static register
    controlCustom.customRegister = {};

    // prepare i18n locale definition
    let locale = mi18n.locale;
    if (!controlCustom.def.i18n[locale]) {
      controlCustom.def.i18n[locale] = {};
    }

    // register each defined template against this class
    control.register(Object.keys(templates), controlCustom);

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

      // default icon & label lookup
      let lookup = field.subtype || type;

      // if there is no template defined for this type, check if we already have this type/subtype registered
      if (!templates[type]) {
        // can only define a new subtype for existing controls
        if (!field.subtype) {
          // ensure we aren't overriding an existing core type
          this.error('Error while registering custom field: ' + type + '. A control of this type is already registered. If you wish to use the existing control, please specify a supported subtype, or define a new template.');
          continue;
        }

        // check that this type is already registered
        let controlClass = control.getClass(type, field.subtype);
        if (!controlClass) {
          this.error('Error while registering custom field: ' + type + (field.subtype ? ':' + field.subtype : '') + '. Unable to find any existing defined control or template for rendering.');
          continue;
        }

        // map the control class against this type/subtype
        let registerKey = type + '-' + field.subtype;
        if (!controlCustom.customRegister) {
          controlCustom.customRegister = {};
        }
        controlCustom.customRegister[registerKey] = {
          type: type,
          subtype: field.subtype,
          class: controlClass
        };

        // now register a new type against this controlCustom class so that it renders in
        lookup = registerKey;
        control.register(registerKey, controlCustom);
      }

      // map label & icon
      controlCustom.def.i18n[locale][lookup] = field.label;
      controlCustom.def.icon[lookup] = field.icon;
    }
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
      // if there isn't a custom template defined, check if this type is registered against another control type/subtype combo
      let registered = controlCustom.customRegister[this.type];
      if (registered) {
        // create & build the registered control
        let config = this.rawConfig;
        config.type = registered.type;
        config.subtype = registered.subtype;
        let controlObj = new registered.class(config, this.preview);
        return controlObj.build();
      } else {
        new Error('Invalid custom control type. Please ensure you have registered it correctly as a template option.');
      }
    }

    // render the custom template
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
