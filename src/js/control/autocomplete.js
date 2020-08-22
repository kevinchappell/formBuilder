import control from '../control'
import { filter } from '../dom'
/**
 * Autocomplete class
 * Output an autocomplete form element
 */
export default class controlAutocomplete extends control {
  /**
   * definition
   * @return {Object} select control definition
   */
  static get definition() {
    return {
      mi18n: {
        requireValidOption: 'requireValidOption',
      },
    }
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    const { values, type, ...data } = this.config
    const keyboardNav = e => {
      const list = e.target.nextSibling.nextSibling
      const hiddenField = e.target.nextSibling
      const activeOption = this.getActiveOption(list)
      const keyCodeMapVals = [
        // up
        [
          38,
          () => {
            const previous = this.getPreviousOption(activeOption)
            if (previous) {
              this.selectOption(list, previous)
            }
          },
        ],
        // down
        [
          40,
          () => {
            const next = this.getNextOption(activeOption)
            if (next) {
              this.selectOption(list, next)
            }
          },
        ],
        // enter
        [
          13,
          () => {
            if (activeOption) {
              e.target.value = activeOption.innerHTML
              hiddenField.value = activeOption.getAttribute('value')
              if (list.style.display === 'none') {
                this.showList(list, activeOption)
              } else {
                this.hideList(list)
              }
            } else {
              // Don't allow a value not in the list
              if (this.config.requireValidOption) {
                if (!this.isOptionValid(list, e.target.value)) {
                  e.target.value = ''
                  e.target.nextSibling.value = ''
                }
              }
            }
            e.preventDefault()
          },
        ],
        // escape
        [
          27,
          () => {
            this.hideList(list)
          },
        ],
      ]
      const keyCodeMap = new Map(keyCodeMapVals)

      let direction = keyCodeMap.get(e.keyCode)
      if (!direction) {
        direction = () => false
      }

      return direction()
    }
    const fauxEvents = {
      focus: evt => {
        const list = evt.target.nextSibling.nextSibling
        const filteredOptions = filter(list.querySelectorAll('li'), evt.target.value)
        evt.target.addEventListener('keydown', keyboardNav)
        if (evt.target.value.length > 0) {
          const selectedOption = filteredOptions.length > 0 ? filteredOptions[filteredOptions.length - 1] : null
          this.showList(list, selectedOption)
        }
      },
      blur: evt => {
        evt.target.removeEventListener('keydown', keyboardNav)
        const blurTimeout = setTimeout(() => {
          evt.target.nextSibling.nextSibling.style.display = 'none'
          clearTimeout(blurTimeout)
        }, 200)
        // Validate the option entered exists
        if (this.config.requireValidOption) {
          const list = evt.target.nextSibling.nextSibling
          if (!this.isOptionValid(list, evt.target.value)) {
            evt.target.value = ''
            evt.target.nextSibling.value = ''
          }
        }
      },
      input: evt => {
        const list = evt.target.nextSibling.nextSibling
        const hiddenField = evt.target.nextSibling
        hiddenField.value = evt.target.value
        const filteredOptions = filter(list.querySelectorAll('li'), evt.target.value)
        if (filteredOptions.length == 0) {
          this.hideList(list)
        } else {
          let activeOption = this.getActiveOption(list)
          if (!activeOption) {
            activeOption = filteredOptions[filteredOptions.length - 1]
          }
          this.showList(list, activeOption)
        }
      },
    }
    const fauxAttrs = Object.assign({}, data, {
      id: `${data.id}-input`,
      autocomplete: 'off',
      events: fauxEvents,
    })
    const hiddenAttrs = Object.assign({}, data, { type: 'hidden' })
    delete fauxAttrs.name
    const field = [this.markup('input', null, fauxAttrs), this.markup('input', null, hiddenAttrs)]

    const options = values.map(optionData => {
      const label = optionData.label
      const config = {
        events: {
          click: evt => {
            const list = evt.target.parentElement
            const field = list.previousSibling.previousSibling
            field.value = optionData.label
            field.nextSibling.value = optionData.value
            this.hideList(list)
          },
        },
        value: optionData.value,
      }
      return this.markup('li', label, config)
    })

    field.push(this.markup('ul', options, { id: `${data.id}-list`, className: `formbuilder-${type}-list` }))
    return field
  }

  /**
   * Hides autocomplete list and deselects all the options
   * @param {Object} list - list of autocomplete options
   */
  hideList(list) {
    this.selectOption(list, null)
    list.style.display = 'none'
  }

  /**
   * Shows autocomplete list. Automatically selects 'selectedOption'
   * @param {Object} list - list of autocomplete options
   * @param {Object} selectedOption - option to be selected
   */
  showList(list, selectedOption) {
    this.selectOption(list, selectedOption)
    list.style.display = 'block'
    list.style.width = list.parentElement.offsetWidth + 'px'
  }

  /**
   * Returns first option from autocomplete list with 'active-option' class
   * @param {Object} list - list of autocomplete options
   * @return {Object} first list option with 'active-option' class
   */
  getActiveOption(list) {
    const activeOption = list.getElementsByClassName('active-option')[0]
    if (activeOption && activeOption.style.display !== 'none') {
      return activeOption
    }
    return null
  }

  /**
   * Previous next option to the current option
   * @param {Object} current - currently selected option
   * @return {Object} previous option to the current option or null if previous doesn't exist
   */
  getPreviousOption(current) {
    let previous = current
    do {
      previous = previous ? previous.previousSibling : null
    } while (previous != null && previous.style.display === 'none')
    return previous
  }

  /**
   * Returns next option to the current option
   * @param {Object} current - currently selected option
   * @return {Object} next option to the current option or null if next doesn't exist
   */
  getNextOption(current) {
    let next = current
    do {
      next = next ? next.nextSibling : null
    } while (next != null && next.style.display === 'none')
    return next
  }

  /**
   * Selects option in autocomplete list. Removes class 'active-option' from all options
   * and then adds that class to 'selected' option. If 'selected' is null then no option is selected
   * @param {Object} list - list of autocomplete options
   * @param {Object} selectedOption - option - 'li' element - to be selected in autocomplete list
   */
  selectOption(list, selectedOption) {
    const options = list.querySelectorAll('li')
    // --Fix for IE11
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('active-option')
    }
    if (selectedOption) {
      selectedOption.classList.add('active-option')
    }
  }

  /**
   * Is the value in the autocomplete field in the pre-defined Options list?
   * @param {Object} list - list of autocomplete options
   * @param {Object} value -value trying to be set
   * @return {Object} - is the option in the pre defined list
   */
  isOptionValid(list, value) {
    const options = list.querySelectorAll('li')
    let validValue = false
    for (let i = 0; i < options.length; i++) {
      if (options[i].innerHTML === value) {
        validValue = true
        break
      }
    }
    return validValue
  }

  /**
   * onRender callback
   * @param {Object} evt
   */
  onRender(evt) {
    // Set userData if available
    if (this.config.userData) {
      const $el = $('#' + this.config.name)
      const $options = $el.next()

      const preSelectedOption = this.config.userData[0]
      let selectedOption = null

      $options.find('li').each(function() {
        // eslint-disable-next-line no-invalid-this
        if ($(this).attr('value') === preSelectedOption) {
          // eslint-disable-next-line no-invalid-this
          selectedOption = $(this).get(0)
          return
        }
      })

      // If the option was not set, and configuration says it doesn't have to be pre-defined, set the value
      if (selectedOption === null) {
        if (this.config.requireValidOption) {
          // Don't allow
          return
        } else {
          // Set it to whatever the value is
          $el.prev().val(this.config.userData[0])
          return
        }
      }

      $el.prev().val(selectedOption.innerHTML)
      $el.val(selectedOption.getAttribute('value'))

      const list = $el.next().get(0)

      if (list.style.display === 'none') {
        this.showList(list, selectedOption)
      } else {
        this.hideList(list)
      }
    }
    return evt
  }
}

control.register('autocomplete', controlAutocomplete)
