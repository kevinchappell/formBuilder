import mi18n from 'mi18n'
import control from './control'
import controlCustom from './control/custom'

/**
 * customControls serves as a register for two types of custom fields supported by formBuilder
 *  - Custom controls defined by a template
 *  - Custom control defined by a field definition only
 *
 *  The code takes two paths
 *   - Custom controls with a template will be a proxy function created to generate a controlCustom class
 *   - Fields without templates will map to their defined type/subtype class
 */
export default class customControls {
  constructor(templates = {}, fields = []) {
    this.customRegister = {}
    this.templateControlRegister = {}
    this.def = {
      icon: {},
      i18n: {},
    }
    this.register(templates, fields)
  }

  /**
   * Override the register method to allow passing 'templates' configuration data
   * @param {Object} templates an object/hash of template data as defined https://formbuilder.online/docs/formBuilder/options/templates/
   * @param {Array} fields
   */
  register(templates = {}, fields = []) {
    // prepare i18n locale definition
    const locale = mi18n.locale
    if (!this.def.i18n[locale]) {
      this.def.i18n[locale] = {}
    }

    const _this = this
    Object.keys(templates).forEach(templateName => {
      const templateControl = function(config, preview) {
        this.customControl = new controlCustom(config, preview, templates[templateName])

        /**
         * build a custom control defined in the templates option
         * @return {{field: any, layout: any}} DOM Element to be injected into the form.
         */
        this.build = function() {
          return this.customControl.build()
        }

        this.on = function(eventType) {
          return this.customControl.on(eventType)
        }
      }
      templateControl.definition = {}
      templateControl.label = type => _this.label(type)
      templateControl.icon = type => _this.icon(type)
      this.templateControlRegister[templateName] = templateControl
    })

    // build the control label & icon definitions
    for (const field of fields) {
      let type = field.type
      field.attrs = field.attrs || {}
      if (!type) {
        if (!field.attrs.type) {
          control.error('Ignoring invalid custom field definition. Please specify a type property.')
          continue
        }
        type = field.attrs.type
      }

      // default icon & label lookup
      let lookup = field.subtype || type

      // if there is no template defined for this type, check if we already have this type/subtype registered
      if (!templates[type]) {
        // check that this type is already registered
        const controlClass = control.getClass(type, field.subtype)
        if (!controlClass) {
          super.error(
            'Error while registering custom field: ' +
            type +
            (field.subtype ? ':' + field.subtype : '') +
            '. Unable to find any existing defined control or template for rendering.',
          )
          continue
        }

        // generate a random key & map the settings against it
        lookup = field.datatype ? field.datatype : `${type}-${Math.floor(Math.random() * 9000 + 1000)}`

        this.customRegister[lookup] = jQuery.extend(field, {
          type: type,
          class: controlClass,
        })
      } else {
        //Map the field definition into the templated control class
        const controlClass = this.templateControlRegister[type]
        controlClass.definition = field
        this.customRegister[lookup] = jQuery.extend(field, {
          type: type,
          class: controlClass,
        })
      }

      // map label & icon
      this.def.i18n[locale][lookup] = field.label
      this.def.icon[lookup] = field.icon
    }
  }

  /**
   * Retrieve the translated control label for a control type
   * @param {String} type
   * @return {String} translated control
   */
   label(type) {
    /**
     * Retrieve a translated string
     * By default looks for translations defined against the class (for plugin controls)
     * Expects {locale1: {type: label}, locale2: {type: label}}, or {default: label}, or {local1: label, local2: label2}
     * @param {String} lookup string to retrieve the label / translated string for
     * @param {Object|Number|String} [args] - string or key/val pairs for string lookups with variables
     * @return {String} the translated label
     */
      const def = this.definition
      let i18n = def.i18n || {}
      const locale = mi18n.locale
      i18n = i18n[locale] || i18n.default || i18n
      const lookupCamel = control.camelCase(type)

      // if translation is defined in the control, return it
      const value = typeof i18n == 'object' ? i18n[lookupCamel] || i18n[type] : i18n
      if (value) {
        return value
      } else {
        // otherwise check the mi18n object - allow for mapping a lookup to a custom mi18n lookup
        let mapped = def.mi18n
        if (typeof mapped === 'object') {
          mapped = mapped[lookupCamel] || mapped[type]
        }
        if (!mapped) {
          mapped = lookupCamel
        }
        return mi18n.get(mapped)
      }
  }

  get definition() {
    return {}
  }

  /**
   * Retrieve the icon for a control type
   * @param {String} type
   * @return {String} icon
   */
  icon(type) {
    // @todo - support for `${css_prefix_text}${attr.name}` - is this for inputSets? Doesnt look like it but can't see anything else that sets attr.name?
    // https://formbuilder.online/docs/formBuilder/options/inputSets/
    const def = this.definition
    if (def && typeof def.icon === 'object') {
      return def.icon[type]
    }
    return def.icon
  }

  /**
   * Returns any custom fields that map to an existing type/subtype combination
   * @param  {string|false} type optional type of control we want to look up
   * subtypes of. If not specified will return all types
   * @return {Array|function} registered custom lookup keys
   */
  getRegistered(type = false) {
    if (type) {
      return this.templateControlRegister[type] ?? undefined
    }
    return Object.keys(this.customRegister)
  }

  /**
   * Retrieve the class for a specified control type
   * @param {String} type type of control we are looking up
   * a class mapped to this subtype. If none found, fall back to the type.
   * @return {Class} control subclass as defined in the call to register
   */
   getClass(type) {
    return this.templateControlRegister[type] ?? undefined
  }

  /**
   * Retrieve the class for a specified control type
   * @param {string} lookup - custom control lookup to check for
   * @return {Class} control subclass as defined in the call to register
   */
  lookup(lookup) {
    return this.customRegister[lookup]
  }
}