// CONTROL.JS
import { camelCase, parsedHtml, markup, getStyles, getScripts, isCached } from './utils'
import mi18n from 'mi18n'

/**
 * Base class for all control classes
 * Defines the structure of a control class and some standard control methods
 */
export default class control {
  /**
   * initialise the control object
   * @param {Object} config each control class receives a control configuration
   * object ({name, label, etc})
   * @param {Boolean} preview isPreview
   */
  constructor(config, preview) {
    this.rawConfig = jQuery.extend({}, config)

    // make a copy of config so we don't change the object reference
    config = jQuery.extend({}, config)
    this.preview = preview
    delete config.isPreview
    if (this.preview) {
      delete config.required
    }

    // process config - extract standard properties
    const properties = ['label', 'description', 'subtype', 'required', 'disabled']
    for (const prop of properties) {
      this[prop] = config[prop]
      delete config[prop]
    }

    // default fields
    if (!config.id) {
      if (config.name) {
        config.id = config.name
      } else {
        config.id = 'control-' + Math.floor(Math.random() * 10000000 + 1)
      }
    }
    this.id = config.id
    this.type = config.type
    if (this.description) {
      config.title = this.description
    }

    // check for global class configuration
    if (!control.controlConfig) {
      control.controlConfig = {}
    }
    const classId = this.subtype ? this.type + '.' + this.subtype : this.type
    this.classConfig = jQuery.extend({}, control.controlConfig[this.type] || {}, control.controlConfig[classId] || {})

    // if subtype, update the config type for injecting into DOM elements
    if (this.subtype) {
      config.type = this.subtype
    }

    if (this.required) {
      config['required'] = 'required'
      config['aria-required'] = 'true'
    }

    // Allow setting disabled flag
    if (this.disabled) {
      config['disabled'] = 'disabled'
    }
    this.config = config
    this.configure()
  }

  /**
   * Getter to retrieve class configuration.
   * Supports properties:
   *  - mi18n - a mi18n lookup, (or object of type: lookup for classes supporting multiple types)
   *  - i18n - for custom / plugin controls, translations for labels can be specified here as an object of locale: label (or an object of type: label for classes supporting multiple types).
   *  - icon - icon, or object of type: icon for defined types
   *  - inactive - array of inactive types that shouldn't appear in formBuilder interface (but still be supported for rendering purposes)
   * @return {Object} configuration
   */
  static get definition() {
    return {}
  }

  /**
   * Class method to register supported controls and their associated classes
   * @param {Array} types - control type (or array of control types) to register
   * against the specifed class
   * @param {Class} controlClass - class to map against the types
   * @param {String} parentType - optional - if defined, any classes registered
   * will be registered as subtypes of this parent
   */
  static register(types, controlClass, parentType) {

    // store subtypes as <type>.<subtype> in the register
    const prefix = parentType ? parentType + '.' : ''

    // initialise the register
    if (!control.classRegister) {
      control.classRegister = {}
    }
    if (!Array.isArray(types)) {
      types = [types]
    }

    // associate the controlClass with each passed control type
    for (const type of types) {
      // '.' is a restricted character for type names
      if (type.indexOf('.') !== -1) {
        // eslint-disable-next-line max-len
        control.error(`Ignoring type ${type}. Cannot use the character '.' in a type name.`)
        continue
      }

      control.classRegister[prefix + type] = controlClass
    }
  }

  /**
   * Looks up the classRegister & returns registered types or subtypes
   * @param  {string|false} type optional type of control we want to look up
   * subtypes of. If not specified will return all types
   * @return {Array} registered types (or subtypes)
   */
  static getRegistered(type = false) {
    const types = Object.keys(control.classRegister)
    if (!types.length) {
      return types
    }
    return types.filter(key => {
      // if type is specified, then we want to return all subtypes
      // of that type (registered with the key <type>.<subtype>)
      if (type) {
        return key.indexOf(type + '.') > -1
      }
      return key.indexOf('.') === -1
    })
  }

  /**
   * Retrieves an object of types mapped to an array of subtypes.
   * Only returns types that have subtypes
   * @return {Object} an object containing {type: array of subtypes}.
   */
  static getRegisteredSubtypes() {
    const types = {}
    for (const key in control.classRegister) {
      if (control.classRegister.hasOwnProperty(key)) {
        const [type, subtype] = key.split('.')
        if (!subtype) {
          continue
        }
        if (!types[type]) {
          types[type] = []
        }
        types[type].push(subtype)
      }
    }
    return types
  }

  /**
   * Retrieve the class for a specified control type
   * @param {String} type type of control we are looking up
   * @param {String} [subtype] if specified we'll try to find
   * a class mapped to this subtype. If none found, fall back to the type.
   * @return {Class} control subclass as defined in the call to register
   */
  static getClass(type, subtype) {
    const lookup = subtype ? type + '.' + subtype : type
    const controlClass = control.classRegister[lookup] || control.classRegister[type]
    if (!controlClass) {
      return control.error(
        'Invalid control type. (Type: ' +
          type +
          ', Subtype: ' +
          subtype +
          '). Please ensure you have registered it, and imported it correctly.',
      )
    }

    // set the _type field on the control class so we never lose it
    return controlClass
  }

  /**
   * support dynamic loading of custom control classes
   * @param {Array} controls
   */
  static loadCustom(controls) {
    let controlClasses = []
    if (controls) {
      controlClasses = controlClasses.concat(controls)
    }

    // support for user loaded plugin controls
    if (window.fbControls) {
      controlClasses = controlClasses.concat(window.fbControls)
    }

    // loop through each defined custom control.
    // expects a function that receives the master control class to inherit from (or optional classRegister to inherit from subclass)
    // see src/js/control_plugins/ for an example
    if (!this.fbControlsLoaded) {
      for (const loadControl of controlClasses) {
        loadControl(control, control.classRegister)
      }
      this.fbControlsLoaded = true
    }
  }

  /**
   * Retrieve a translated string
   * By default looks for translations defined against the class (for plugin controls)
   * Expects {locale1: {type: label}, locale2: {type: label}}, or {default: label}, or {local1: label, local2: label2}
   * @param {String} lookup string to retrieve the label / translated string for
   * @param {Object|Number|String} [args] - string or key/val pairs for string lookups with variables
   * @return {String} the translated label
   */
  static mi18n(lookup, args) {
    const def = this.definition
    let i18n = def.i18n || {}
    const locale = mi18n.locale
    i18n = i18n[locale] || i18n.default || i18n
    const lookupCamel = this.camelCase(lookup)

    // if translation is defined in the control, return it
    const value = typeof i18n == 'object' ? i18n[lookupCamel] || i18n[lookup] : i18n
    if (value) {
      return value
    }

    // otherwise check the mi18n object - allow for mapping a lookup to a custom mi18n lookup
    let mapped = def.mi18n
    if (typeof mapped === 'object') {
      mapped = mapped[lookupCamel] || mapped[lookup]
    }
    if (!mapped) {
      mapped = lookupCamel
    }
    return mi18n.get(mapped, args)
  }

  /**
   * Should this control type appear in the list of form controls
   * @param {String} type
   * @return {Boolean} isActive
   */
  static active(type) {
    return !Array.isArray(this.definition.inactive) || this.definition.inactive.indexOf(type) === -1
  }

  /**
   * Retrieve the translated control label for a control type
   * @param {String} type
   * @return {String} translated control
   */
  static label(type) {
    return this.mi18n(type)
  }

  /**
   * Retrieve the icon for a control type
   * @param {String} type
   * @return {String} icon
   */
  static icon(type) {
    // @todo - support for `${css_prefix_text}${attr.name}` - is this for inputSets? Doesnt look like it but can't see anything else that sets attr.name?
    // https://formbuilder.online/docs/formBuilder/options/inputSets/
    const def = this.definition
    if (def && typeof def.icon === 'object') {
      return def.icon[type]
    }
    return def.icon
  }

  /**
   * this method is called by the constructor and should be overwritten for controls that need to
   * process the configuration arguments prior to rendering
   */
  configure() {}

  /**
   * this is the core method for all controls to produce the form elements to be injected into the dom
   * the implementation in control.js will return
   * Supported return configuration elements:
   *   - field - the DOM element
   *   - noLabel - this control shouldn't have a label (nor a space for a label)
   *   - hidden - this control shouldn't render anything visible to the page
   * @return {Object} DOM Element to be injected into the form, or an object/hash of configuration as above
   */
  build() {
    const { label, type, ...data } = this.config
    return this.markup(type, parsedHtml(label), data)
  }

  /**
   * code to execute for supported events
   * to implement an onRender event in a child class, simply define an onRender method
   * @param {String} eventType - optional type of event to retrieve an event function for. If not specified all events returned
   * @return {Function/Object} - function to execute for specified event, or all events of no eventType is specified
   */
  on(eventType) {
    const events = {
      // executed just prior to the row being returned by the layout class. Receives the DOMelement about to be passed back
      /**
       * @param {Node} element
       */
      prerender: element => element,

      /**
       * onRender event to execute code each time an instance of this control is injected into the DOM
       * @param {Node} evt
       */
      render: evt => {
        // check for a class render event - default to an empty function
        const onRender = () => {
          if (this.onRender) {
            this.onRender(evt)
          }
        }

        // check for any css & javascript to include
        if (this.css) {
          getStyles(this.css)
        }
        if (this.js && !isCached(this.js)) {
          getScripts(this.js).done(onRender)
        } else {
          onRender(evt)
        }
      },
    }
    return eventType ? events[eventType] : events
  }

  /**
   * centralised error handling
   * @param {String} message message to output to the console
   */
  static error(message) {
    throw new Error(message)
  }

  /**
   * wrap the utils.markup method
   * ideally this would be inherited from a parent 'dom' type element supporting dom helper type methods
   * @param  {String} tag
   * @param  {Object|String|Array} content
   * @param  {Object} attributes
   * @return {Object} DOM element
   */
  markup(tag, content = '', attributes = {}) {
    this.element = markup(tag, content, attributes)
    return this.element
  }

  /**
   * Converts escaped HTML into usable HTML
   * @param  {String} html escaped HTML
   * @return {String}      parsed HTML
   */
  parsedHtml(html) {
    return parsedHtml(html)
  }

  /**
   * convert a hyphenated string to camelCase
   * @param  {String} str
   * @return {String}
   */
  static camelCase(str) {
    return camelCase(str)
  }
}
