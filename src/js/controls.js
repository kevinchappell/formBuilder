import './control/index'
import control from './control'
import customControls from './customControls'
import { unique, hyphenCase, markup as m } from './utils'
import { empty } from './dom'
import fontConfig from '../fonts/config.json'
import storageAvailable from 'storage-available'

const css_prefix_text = fontConfig.css_prefix_text

/**
 * control parent class for creating control panel
 */
export default class Controls {
  /**
   * setup instance
   * @param {Object} opts
   * @param {Object} d dom instance
   */
  constructor(opts, d) {
    this.opts = opts
    this.dom = d.controls
    this.getRegistered = control.getRegistered
    this.init()
  }

  /**
   * bootstrap controls and append them
   */
  init() {
    this.setupControls()
    this.appendControls()
  }

  /**
   * registers controls
   */
  setupControls() {
    const opts = this.opts

    // load in any custom specified controls, or preloaded plugin controls
    control.loadCustom(opts.controls)
    // register any passed custom templates & fields
    this.custom =  new customControls(opts.templates, opts.fields)
    
    // retrieve a full list of loaded controls
    const registeredControls = control.getRegistered()
    const customFields = this.custom.getRegistered()
    if (customFields) {
      jQuery.merge(registeredControls, customFields)
    }

    this.registeredSubtypes = control.getRegisteredSubtypes()

    // if we support rearranging control order, add classes to support this
    if (opts.sortableControls) {
      this.dom.classList.add('sort-enabled')
    }

    // add each control to the interface
    this.controlList = []
    this.allControls = {}

    for (let i = 0; i < registeredControls.length; i++) {
      const type = registeredControls[i]
      // first check if this is a custom control
      let custom = this.custom.lookup(type)
      let controlClass
      let label
      if (custom) {
        controlClass = custom.class
        label = this.custom.label(type)
      } else {
        custom = {}

        // determine the class, icon & label for this control
        controlClass = control.getClass(type)
        if (!controlClass || !controlClass.active(type)) {
          continue
        }
        label = controlClass.label(type)
      }
      const icon = custom.icon || controlClass.icon(type)
      const iconClassName = !icon ? custom.iconClassName || `${css_prefix_text + type.replace(/-[\d]{4}$/, '')}` : ''

      // if the class has specified a custom icon, inject it into the label
      if (icon) {
        label = `<span class="control-icon">${icon}</span>${label}`
      }

      // build & insert the new list item to represent this control
      const newFieldControl = m('li', m('span', label), {
        className: `${iconClassName} input-control input-control-${i}`,
      })
      newFieldControl.dataset.type = type
      this.controlList.push(type)
      this.allControls[type] = newFieldControl
    }

    if (opts.inputSets.length) {
      opts.inputSets.forEach((set, i) => {
        let { name, label } = set
        name = name || hyphenCase(label)
        if (set.icon) {
          label = `<span class="control-icon">${set.icon}</span>${label}`
        }
        const inputSet = m('li', m('span', label), {
          className: `input-set-control input-set-${i}`,
        })
        inputSet.dataset.type = name
        this.controlList.push(name)
        this.allControls[name] = inputSet
      })
    }
  }

  /**
   * Reorder the controls if the user has previously ordered them.
   *
   * @param  {Array} controls - an array of control types
   * @return {Array} ordered fields
   */
  orderFields(controls) {
    const opts = this.opts
    const controlOrder = opts.controlOrder.concat(controls)
    let fieldOrder

    // retrieve any saved ordering from the session
    if (storageAvailable('sessionStorage')) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder')
      } else {
        window.sessionStorage.removeItem('fieldOrder')
      }
    }

    // if we have a saved order, use it. Otherwise build the order ourselves
    if (!fieldOrder) {
      fieldOrder = unique(controlOrder)
    } else {
      fieldOrder = window.JSON.parse(fieldOrder)
      fieldOrder = unique(fieldOrder.concat(controls))
      fieldOrder = Object.keys(fieldOrder).map(i => fieldOrder[i])
    }

    // order custom fields
    fieldOrder.forEach(field => {
      // identify custom field
      const randomKey = new RegExp('-[\\d]{4}$')

      if (field.match(randomKey)) {
        const baseFieldIndex = fieldOrder.indexOf(field.replace(randomKey, ''))
        if (baseFieldIndex !== -1) {
          fieldOrder.splice(fieldOrder.indexOf(field), 1)
          fieldOrder.splice(baseFieldIndex + 1, fieldOrder.indexOf(field), field)
        }
      }
    })

    // remove disableFields
    if (opts.disableFields.length) {
      fieldOrder = fieldOrder.filter(type => !opts.disableFields.includes(type))
    }

    return fieldOrder.filter(Boolean)
  }

  /**
   * Adds the controls to the control list
   */
  appendControls() {
    const fragment = document.createDocumentFragment()
    empty(this.dom)
    // append controls to list
    this.orderFields(this.controlList).forEach(controlKey => {
      const control = this.allControls[controlKey]
      if (control) {
        fragment.appendChild(control)
      }
    })
    this.dom.appendChild(fragment)
  }

  /**
   * Retrieve the class for a specified control type
   * @param {String} type type of control we are looking up
   * @param {String} [subtype] if specified we'll try to find
   * a class mapped to this subtype. If none found, fall back to the type.
   * @return {Class} control subclass as defined in the call to register
   */
  getClass(type, subtype) {
    return this.custom.getClass(type) || control.getClass(type, subtype)
  }
}
