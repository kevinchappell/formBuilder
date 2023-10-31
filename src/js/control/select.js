import control from '../control'
import { trimObj } from '../utils'

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 * @extends control
 */
export default class controlSelect extends control {
  /**
   * definition
   * @return {Object} select control definition
   */
  static get definition() {
    return {
      inactive: ['checkbox'],
      mi18n: {
        minSelectionRequired: 'minSelectionRequired',
      },
    }
  }

  /**
   * build a select DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    const options = []
    const { values, value, placeholder, type, inline, other, toggle, ...data } = this.config
    const optionType = type.replace('-group', '')
    const isSelect = type === 'select'
    if (data.multiple || type === 'checkbox-group') {
      data.name = data.name + '[]'
    }

    if (type === 'checkbox-group' && data.required) {
      const self = this
      const defaultOnRender = this.onRender.bind(this)
      this.onRender = function() {
        defaultOnRender()
        self.groupRequired()
      }
    }

    delete data.title

    if (values) {
      // if a placeholder is specified, add it to the top of the option list
      if (placeholder && isSelect) {
        options.push(
          this.markup('option', placeholder, {
            disabled: true,
            selected: true,
            value: '',
          }),
        )
      }

      // process the rest of the options
      for (let i = 0; i < values.length; i++) {
        let option = values[i]
        if (typeof option === 'string') {
          option = { label: option, value: option }
        }
        const { label = '', ...optionAttrs } = option
        optionAttrs.id = `${data.id}-${i}`

        // don't select this option if a placeholder is defined
        if (!optionAttrs.selected || placeholder) {
          delete optionAttrs.selected
        }

        // if a value is defined at select level, select this attribute
        if (typeof value !== 'undefined' && optionAttrs.value === value) {
          optionAttrs.selected = true
        }

        if (isSelect) {
          const o = this.markup('option', document.createTextNode(label), optionAttrs)
          options.push(o)
        } else {
          const labelContents = [label]
          let wrapperClass = `formbuilder-${optionType}`
          if (inline) {
            wrapperClass += '-inline'
          }
          optionAttrs.type = optionType
          if (optionAttrs.selected) {
            optionAttrs.checked = 'checked'
            delete optionAttrs.selected
          }
          const input = this.markup('input', null, Object.assign({}, data, optionAttrs))
          const labelAttrs = { for: optionAttrs.id }
          let output = [input, this.markup('label', labelContents, labelAttrs)]
          if (toggle) {
            labelAttrs.className = 'kc-toggle'
            labelContents.unshift(input, this.markup('span'))
            output = this.markup('label', labelContents, labelAttrs)
          }

          const wrapper = this.markup('div', output, { className: wrapperClass })
          options.push(wrapper)
        }
      }

      // if configured to display an 'other' option, prepare the elements
      if (!isSelect && other) {
        const otherOptionAttrs = {
          id: `${data.id}-other`,
          className: `${data.className ?? ''} other-option`,
          value: '',
        }

        let wrapperClass = `formbuilder-${optionType}`
        if (inline) {
          wrapperClass += '-inline'
        }

        const optionAttrs = Object.assign({}, data, otherOptionAttrs)
        optionAttrs.type = optionType

        const otherValAttrs = {
          type: 'text',
          events: {
            input: evt => {
              const otherInput = evt.target
              const other = otherInput.parentElement.previousElementSibling
              other.value = otherInput.value
            },
          },
          id: `${otherOptionAttrs.id}-value`,
          className: 'other-val',
        }
        const primaryInput = this.markup('input', null, optionAttrs)
        const otherInputs = [document.createTextNode(control.mi18n('other')), this.markup('input', null, otherValAttrs)]
        const inputLabel = this.markup('label', otherInputs, { for: optionAttrs.id })
        const wrapper = this.markup('div', [primaryInput, inputLabel], { className: wrapperClass })
        options.push(wrapper)
      }
    }

    // build & return the DOM elements
    if (type == 'select') {
      this.dom = this.markup(optionType, options, trimObj(data, true))
    } else {
      this.dom = this.markup('div', options, { className: type })
    }
    return this.dom
  }

  /**
   * setCustomValidity for checkbox-group
   */
  groupRequired() {
    const checkboxes = this.element.getElementsByTagName('input')
    const setValidity = (checkbox, isValid) => {
      const minReq = control.mi18n('minSelectionRequired', 1)
      if (!isValid) {
        checkbox.setCustomValidity(minReq)
      } else {
        checkbox.setCustomValidity('')
      }
    }
    const toggleRequired = (checkboxes, isValid) => {
      [].forEach.call(checkboxes, cb => {
        if (isValid) {
          cb.removeAttribute('required')
        } else {
          cb.setAttribute('required', 'required')
        }
        setValidity(cb, isValid)
      })
    }

    const toggleValid = () => {
      const isValid = [].some.call(checkboxes, cb => cb.checked)
      toggleRequired(checkboxes, isValid)
    }

    for (let i = checkboxes.length - 1; i >= 0; i--) {
      checkboxes[i].addEventListener('change', toggleValid)
    }
    toggleValid()
  }

  /**
   * onRender callback
   */
  onRender() {
    // Set userData if available
    if (this.config.userData) {
      const selectedOptions = this.config.userData.slice()

      if (this.config.type === 'select') {
        $(this.dom)
          .val(selectedOptions)
          .prop('selected', true)
      } else if (this.config.type.endsWith('-group')) {
        if (this.config.type === 'checkbox-group') {
          //clear all checked elements prior to setting them from userData
          this.dom.querySelectorAll('input[type=checkbox]').forEach(input => {
            input.removeAttribute('checked')
          })
        }
        this.dom.querySelectorAll('input').forEach(input => {
          if (input.classList.contains('other-val')) {
            return
          }

          for (let i = 0; i < selectedOptions.length; i++) {
            if (input.value === selectedOptions[i]) {
              input.setAttribute('checked', 'checked')
              selectedOptions.splice(i, 1) // Remove this item from the list
              break
            }
          }

          // Did not find a match for the selectedOption, see if this is an "other"
          if (input.id.endsWith('-other') && selectedOptions.length > 0) {
            const otherVal = this.dom.querySelector(`#${input.id}-value`)

            // set the other value
            input.setAttribute('checked', 'checked')
            otherVal.value = input.value = selectedOptions[0]
            // show other value
            otherVal.style.display = 'inline-block'
          }
        })
      }
    }
  }
}

// register this control for the following types & text subtypes
control.register(['select', 'checkbox-group', 'radio-group', 'checkbox'], controlSelect)
