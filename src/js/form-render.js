import mi18n from 'mi18n'
import utils, { parseXML } from './utils'
import events from './events'
import layout from './layout'
import control from './control'
import './control/index'
import controlCustom from './control/custom'
import { defaultI18n } from './config'
import '../sass/form-render.scss'

/**
 * FormRender Class
 */
class FormRender {
  /**
   * Create & configure a new FormRender instance
   * @param {Object} options - an object hash of supported options
   */
  constructor(options = {}) {
    // initialise defaults & options
    const defaults = {
      layout: layout, // by default use the layout class, but support a child class being defined & passed as an option
      layoutTemplates: {}, // allow custom override layout templates to be defined
      controls: {}, // custom controls
      controlConfig: {}, // additional configuration for controls
      container: false, // string selector or Node element
      dataType: 'json',
      formData: false,
      i18n: Object.assign({}, defaultI18n),
      messages: {
        formRendered: 'Form Rendered',
        noFormData: 'No form data.',
        other: 'Other',
        selectColor: 'Select Color',
        invalidControl: 'Invalid control',
      },
      onRender: () => {},
      render: true,
      templates: {}, // custom inline defined templates
      notify: {
        error: error => {
          console.log(error)
        },
        success: success => {
          console.log(success)
        },
        warning: warning => {
          console.warn(warning)
        },
      },
    }
    this.options = jQuery.extend(true, defaults, options)
    this.instanceContainers = []

    if (!mi18n.current) {
      mi18n.init(this.options.i18n)
    }

    // parse any passed formData
    if (!this.options.formData) {
      return false
    }

    this.options.formData = this.parseFormData(this.options.formData)

    // ability for controls to have their own configuration / options of the format control identifier (type, or type.subtype): {options}
    control.controlConfig = options.controlConfig || {}

    // load in any custom specified controls, or preloaded plugin controls
    control.loadCustom(options.controls)

    // register any passed custom templates
    if (Object.keys(this.options.templates).length) {
      controlCustom.register(this.options.templates)
    }

    /**
     * Extend Element prototype to allow us to append fields
     *
     * @param {Array} fields array of elements
     */
    if (typeof Element.prototype.appendFormFields !== 'function') {
      Element.prototype.appendFormFields = function(fields) {
        if (!Array.isArray(fields)) {
          fields = [fields]
        }
        const renderedFormWrap = utils.markup('div', fields, {
          className: 'rendered-form',
        })
        this.appendChild(renderedFormWrap)

        fields.forEach(field => {
          // Determine if rows are being used. If so, create the row and append to its row-{group}
          // If the fields have row-, create & append to the appropriate row
          const [rowGroup] = field.className.match(/row-([^\s]+)/) || []
          if (rowGroup) {
            const rowID = this.id ? `${this.id}-row-${rowGroup}` : `row-${rowGroup}`

            // Check if this rowID is created yet or not.
            let rowGroupNode = document.getElementById(rowID)
            if (!rowGroupNode) {
              rowGroupNode = utils.markup('div', null, { id: rowID, className: 'row form-inline' })
              renderedFormWrap.appendChild(rowGroupNode)
            }
            rowGroupNode.appendChild(field)
          } else {
            // Append without row
            renderedFormWrap.appendChild(field)
          }

          field.dispatchEvent(events.fieldRendered)
        })
      }
    }

    /**
     * Extend Element prototype to remove content
     */
    if (typeof Element.prototype.emptyContainer !== 'function') {
      Element.prototype.emptyContainer = function() {
        const element = this
        while (element.lastChild) {
          element.removeChild(element.lastChild)
        }
      }
    }
  }

  /**
   * Clean up passed object configuration to prepare for use with the markup function
   * @param {Object} field - object of field configuration
   * @param {Number} instanceIndex - instance index
   * @return {Object} sanitized field object
   */
  santizeField(field, instanceIndex) {
    const sanitizedField = Object.assign({}, field)
    if (instanceIndex) {
      sanitizedField.id = field.id && `${field.id}-${instanceIndex}`
      sanitizedField.name = field.name && `${field.name}-${instanceIndex}`
    }
    sanitizedField.className = Array.isArray(field.className)
      ? utils.unique(field.className.join(' ').split(' ')).join(' ')
      : field.className || field.class || null
    delete sanitizedField.class
    if (field.values) {
      field.values = field.values.map(option => utils.trimObj(option))
    }
    return utils.trimObj(sanitizedField)
  }

  /**
   * parses `container` option or returns element
   * @param  {Object} element
   * @return {Object} parsedElement
   */
  getElement(element) {
    element = this.options.container || element
    if (element instanceof jQuery) {
      element = element[0]
    } else if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    return element
  }

  /**
   * Main render method which produces the form from passed configuration
   * @param {Object} element - an html element to render the form into (optional)
   * @param {Number} instanceIndex - instance index
   * @return {Object} rendered form
   */
  render(element = null, instanceIndex = 0) {
    const formRender = this
    const opts = this.options
    element = this.getElement(element)

    const runCallbacks = function() {
      if (opts.onRender) {
        opts.onRender()
      }
    }

    // Begin the core plugin
    const rendered = []

    // generate field markup if we have fields
    if (opts.formData) {
      // instantiate the layout class & loop through the field configuration
      const engine = new opts.layout(opts.layoutTemplates)
      for (let i = 0; i < opts.formData.length; i++) {
        const fieldData = opts.formData[i]
        const sanitizedField = this.santizeField(fieldData, instanceIndex)

        // determine the control class for this type, and then process it through the layout engine
        const controlClass = control.getClass(fieldData.type, fieldData.subtype)
        const field = engine.build(controlClass, sanitizedField)

        rendered.push(field)
      }

      if (element) {
        this.instanceContainers[instanceIndex] = element
      }

      // if rendering, inject the fields into the specified wrapper container/element
      if (opts.render && element) {
        element.emptyContainer()
        element.appendFormFields(rendered)

        runCallbacks()
        opts.notify.success(opts.messages.formRendered)
      } else {
        /**
         * Retrieve the html markup for a passed array of DomElements
         * @param {Array} fields - array of dom elements
         * @return {String} fields html
         */
        const exportMarkup = fields => fields.map(elem => elem.innerHTML).join('')
        formRender.markup = exportMarkup(rendered)
      }
    } else {
      const noData = utils.markup('div', opts.messages.noFormData, {
        className: 'no-form-data',
      })
      rendered.push(noData)
      opts.notify.error(opts.messages.noFormData)
    }

    return formRender
  }

  /**
   * Render a single control / field
   * Expects only a single field configuration to be set in opt.formData
   * @param {Object} element - an optional DOM element to render the field into - if not specified will just return the rendered field - note if you do this you will need to manually call element.dispatchEvent('fieldRendered') on the returned element when it is rendered into the DOM
   * @return {Object} the formRender object
   */
  renderControl(element = null) {
    const opts = this.options
    const fieldData = opts.formData
    if (!fieldData || Array.isArray(fieldData)) {
      throw new Error(
        'To render a single element, please specify a single object of formData for the field in question'
      )
    }
    const sanitizedField = this.santizeField(fieldData)

    // determine the control class for this type, and then build it
    const engine = new opts.layout()
    const controlClass = control.getClass(fieldData.type, fieldData.subtype)
    const forceTemplate = opts.forceTemplate || 'hidden' // support the ability to override what layout template the control is rendered using. This can be used to output the whole row (including label, help etc) using the standard templates if desired.
    const field = engine.build(controlClass, sanitizedField, forceTemplate)
    element.appendFormFields(field)
    opts.notify.success(opts.messages.formRendered)
    return this
  }

  /**
   * Return user entered data
   */
  get userData() {
    const options = this.options
    const definedFields = options.formData.slice()

    // save tinyMCE editors
    definedFields
      .filter(fieldData => fieldData.subtype === 'tinymce')
      .forEach(fieldData => window.tinymce.get(fieldData.name).save())

    this.instanceContainers.forEach((container) => {
      const userDataMap = $('select, input, textarea', container)
        .serializeArray()
        .reduce((acc, { name, value }) => {
          name = name.replace('[]', '')
          if (acc[name]) {
            acc[name].push(value)
          } else {
            acc[name] = [value]
          }
          return acc
        }, {})

      const definedFieldsLength = definedFields.length
      for (let i = 0; i < definedFieldsLength; i++) {
        const definedField = definedFields[i]
        // Skip fields that have no name--Likely these are fields that do not hold data(h1,p)
        if (definedField.name === undefined) continue
        // Skip disabled fields -- This will not have user data available
        if (definedField.disabled) continue

        definedField.userData = userDataMap[definedField.name]
      }
    })

    return definedFields
  }

  /** Clear all rendered fields */
  clear() {
    this.instanceContainers.forEach(container => {
      // clear tinyMCE editors
      this.options.formData
        .slice()
        .filter(fieldData => fieldData.subtype === 'tinymce')
        .forEach(fieldData => window.tinymce.get(fieldData.name).setContent(''))

      container.querySelectorAll('input, select, textarea').forEach(input => {
        if (['checkbox', 'radio'].includes(input.type)) {
          input.checked = false
        } else {
          input.value = ''
        }
      })
    })
  }
  /**
   * ensure formData is correct type
   * @param {Object|String} formData
   * @return {Object} formData
   */
  parseFormData(formData) {
    const setData = {
      xml: formData => parseXML(formData),
      json: formData => window.JSON.parse(formData),
    }
    if (typeof formData !== 'object') {
      formData = setData[this.options.dataType](formData) || false
    }
    return formData
  }
}

;(function() {
  let formRenderForms
  const methods = {
    init: (forms, options = {}) => {
      formRenderForms = forms
      methods.instance = new FormRender(options)
      forms.each(index => methods.instance.render(forms[index], index))
      return methods.instance
    },
    userData: () => methods.instance && methods.instance.userData,
    clear: () => methods.instance && methods.instance.clear(),
    setData: formData => {
      if (methods.instance) {
        const instance = methods.instance
        instance.options.formData = instance.parseFormData(formData)
      }
    },
    render: (formData, options = {}) => {
      if (methods.instance) {
        const instance = methods.instance
        instance.options = Object.assign({}, instance.options, options, { formData: instance.parseFormData(formData) })
        formRenderForms.each(index => methods.instance.render(formRenderForms[index], index))
      }
    },
    html: () => formRenderForms.map(index => formRenderForms[index]).html(),
  }

  jQuery.fn.formRender = function(methodOrOptions = {}, ...args) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, args)
    } else {
      const instance = methods.init(this, methodOrOptions)
      Object.assign(methods, instance)
      return instance
    }
  }

  /**
   * renders an individual field into the current element
   * @param {Object} data - data structure for a single field output from formBuilder
   * @param {Object} options - optional subset of formRender options - doesn't support container or other form rendering based options.
   * @return {DOMElement} the rendered field
   */
  jQuery.fn.controlRender = function(data, options = {}) {
    options.formData = data
    options.dataType = typeof data === 'string' ? 'json' : 'xml'
    const formRender = new FormRender(options)
    const $elems = this
    $elems.each(i => formRender.renderControl($elems[i]))
    return $elems
  }
})(jQuery)
