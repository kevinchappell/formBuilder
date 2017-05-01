// CONTROL.JS
import utils from './utils';
/**
 * Base class for all control classes
 * Defines the structure of a control class and some standard control methods
 */
export class control {

  /**
   * initialse the control object
   * @param config each control class receives a control configuration object ({name, label, etc})
   */
  constructor(config) {

    // make a copy of config so we don't change the object reference
    config = $.extend({}, config);

    // process config - extract standard properties
    let properties = ['label', 'description', 'subtype', 'isPreview', 'required'];
    for (let prop of properties) {
      this[prop] = config[prop];
      delete config[prop];
    }

    // default fields
    if (!config.id) {
      config.id = config.name || 'control-' + Math.floor((Math.random() * 10000000) + 1);
    };
    this.id = config.id;
    this.type = config.type;
    if (this.description) {
      config.title = this.description;
    }

    // check for global class configuration
    let classId = this.subtype ? this.type + '.' + this.subtype : this.type;
    this.classConfig = control.controlConfig[classId] || {};

    // if there is a subtype, update the config type for injecting into DOM elements
    if (this.subtype) {
      config.type = this.subtype;
    }

    if (this.required) {
      config['aria-required'] = 'true';
    }
    this.config = config;
    this.configure();
  }

  /**
   * Class method to register supported controls and their associated classes
   * @param types - control type (or array of control types) to register against the specifed class
   * @param controlClass - class to map against the types
   * @param parentType - optional - if defined, any classes registered will be registered as subtypes of this parent
   */
  static register(types, controlClass, parentType) {
    let prefix = parentType ? parentType + '.' : ''; // store subtypes as <type>.<subtype> in the register

    // initialise the register
    if (!control.classRegister) {
      control.classRegister = {};
    }
    if (!Array.isArray(types)) {
      types = [types];
    }

    // associate the controlClass with each passed control type
    for (let type of types) {
      control.classRegister[prefix + type] = controlClass;
    }
  }

  /**
   * Retrieve the class for a specified control type
   * @param type type of control we are looking up
   * @param subtype if specified we'll try to find a class mapped to this subtype. If none found, fall back to the type.
   * @return control subclass as defined in the call to register
   */
  static getClass(type, subtype) {
    let lookup = subtype ? type + '.' + subtype : type;
    let controlClass = control.classRegister[lookup] || control.classRegister[type];
    if (!controlClass) {
      //this.options.notify.error(this.options.messages.invalidControl);
      return control.error('Invalid control type. Please ensure you have registered it, and imported it correctly.');
    }

    // set the _type field on the control class so we never lose it
    return controlClass;
  }

  /**
   * support dynamic loading of custom control classes
   * @param controls
   */
  static loadCustom(controls) {
    let controlClasses = new Array();
    if (controls) {
      controlClasses = controlClasses.concat(controls);
    }

    // support for user loaded plugin controls
    if (window.fbControls) {
      controlClasses = controlClasses.concat(window.fbControls);
    }

    // loop through each defined custom control.
    // expects a function that receives the master control class to inherit from (or optional classRegister to inherit from subclass)
    // see src/js/control_plugins/ for an example
    if (!window.fbControlsLoaded) {
      for (let loadControl of controlClasses) {
        loadControl(control, control.classRegister);
      }
      window.fbControlsLoaded = true;
    }
  }

  /**
   * this method is called by the constructor and should be overwritten for controls that need to
   * process the configuration arguments prior to rendering
   */
  configure() {
  }

  /**
   * this is the core method for all controls to produce the form elements to be injected into the dom
   * the implementation in control.js will return
   * Supported return configuration elements:
   *   - field - the DOM element
   *   - noLabel - this control shouldn't have a label (nor a space for a label)
   *   - hidden - this control shouldn't render anything visible to the page
   * @return DOM Element to be injected into the form, or an object/hash of configuration as above
   */
  build() {
    var {label, type, ...attrs} = this.config;
    return this.markup(type, utils.parsedHtml(label), attrs);
  }

  /**
   * code to execute for supported events
   * to implement an onRender event in a child class, simply define an onRender method
   */
  on(eventType) {
    let events = {

      // onRender event to execute code each time an instance of this control is injected into the DOM
      render: (evt) => {

        // check for a class render event - default to an empty function
        let onRender = () => {
          if (this.onRender) {
            this.onRender();
          }
        };

        // check for any css & javascript to include
        if (this.css) {
          utils.getStyles(this.css);
        }
        if (this.js && !utils.isCached(this.js)) {
          utils.getScripts(this.js).done(onRender);
        } else {
          onRender();
        }
      }
    };
    return events[eventType];
  }

  /**
   * centralised error handling
   * @param message message to output to the console
   */
  static error(message) {
    throw new Error(message);
  }

  /**
   * link to the utils.markup method
   * ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
   */
  markup(tag, content = '', attributes = {}) {
    return utils.markup(tag, content, attributes);
  }

  /**
   * Converts escaped HTML into usable HTML
   * @param  {String} html escaped HTML
   * @return {String}      parsed HTML
   */
  parsedHtml(html) {
    return utils.parsedHtml(html);
  }
}