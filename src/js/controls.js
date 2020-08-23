import './control/index'
import control from './control'
import controlCustom from './control/custom'
import { unique, hyphenCase, markup as m } from './utils'
import { empty } from './dom'
import { css_prefix_text } from '../fonts/config.json'

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
    this.custom = controlCustom
    this.getClass = control.getClass
    this.getRegistered = control.getRegistered
    // ability for controls to have their own configuration / options
    // of the format control identifier (type, or type.subtype): {options}
    control.controlConfig = opts.controlConfig || {}
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
    if (Object.keys(opts.fields).length) {
      controlCustom.register(opts.templates, opts.fields)
    }

    // retrieve a full list of loaded controls
    const registeredControls = control.getRegistered()
    this.registeredControls = registeredControls
    const customFields = controlCustom.getRegistered()
    if (customFields) {
      jQuery.merge(registeredControls, customFields)
    }
    const registeredSubtypes = control.getRegisteredSubtypes()
    this.registeredSubtypes = registeredSubtypes

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
      let custom = controlCustom.lookup(type)
      let controlClass
      if (custom) {
        controlClass = custom.class
      } else {
        custom = {}

        // determine the class, icon & label for this control
        controlClass = control.getClass(type)
        if (!controlClass || !controlClass.active(type)) {
          continue
        }
      }
      const icon = custom.icon || controlClass.icon(type)
      let label = custom.label || controlClass.label(type)
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
        const inputSet = m('li', label, {
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
    if (window.sessionStorage) {
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
}
