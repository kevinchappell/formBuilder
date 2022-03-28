import mi18n from 'mi18n'
import controlCustom from 'ts/control/custom'
import { defaultI18n } from 'ts/shared/constants'
import control from 'ts/shared/control'
import events from 'ts/shared/events'
import { Layout } from 'ts/shared/layout'
import { forEach, markup, parseXML, remove, trimObj, unique } from 'ts/shared/utils'
import { Field } from 'types/formbuilder-types'
import { FormRenderOptions, FormRenderPublicAPIActions, FormRenderPublicAPIOverrides } from 'types/formrender-types'
import '../../sass/form-render.scss'
import '../control/index'

export class FormRender {
  instanceContainers: any[]
  markup: any
  actions: FormRenderPublicAPIActions
  overrideMethods: FormRenderPublicAPIOverrides
  constructor(public options: FormRenderOptions = {}, public el: HTMLElement) {
    this.initDefaultsAndOptions(options)

    this.instanceContainers = []

    if (!mi18n.current) {
      mi18n.init(this.options.i18n)
    }

    if (!this.options.formData) {
      return
    }

    this.options.formData = this.parseFormData(this.options.formData)

    // ability for controls to have their own configuration / options of the format control identifier (type, or type.subtype): {options}
    control.controlConfig = options.controlConfig || {}

    // load in any custom specified controls, or preloaded plugin controls
    control.loadCustom(options.controls)

    this.registerCustomTemplates()
    this.setPublicActions()
  }

  private initDefaultsAndOptions(options: FormRenderOptions) {
    const defaults: FormRenderOptions = {
      layout: Layout,
      layoutTemplates: {},
      controls: {},
      controlConfig: {},
      container: false,
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
      onRender: () => {
        return
      },
      render: true,
      templates: {},
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
  }

  setPublicActions() {
    this.actions = {
      userData: () => this.userData,
      clear: () => this.clearFormData(),
      setData: formData => {
        this.options.formData = this.parseFormData(formData)
      },
      render: (formData, options = {}) => {
        if (!formData) {
          formData = this.options.formData
        }

        this.options = Object.assign({}, this.options, options, {
          formData: this.parseFormData(formData),
        })

        this.render()
      },
      html: () => $(this.el).html(),
    }
  }

  private registerCustomTemplates() {
    if (Object.keys(this.options.templates).length) {
      controlCustom.registerCustom(this.options.templates)
    }
  }

  /**
   * Clean up passed object configuration to prepare for use with the markup function
   * @param {Object} field - object of field configuration
   * @param {Number} instanceIndex - instance index
   * @return {Object} sanitized field object
   */
  santizeField(field: Field, instanceIndex?: number): Field {
    const sanitizedField = Object.assign({}, field)
    if (instanceIndex) {
      sanitizedField.id = field.id && `${field.id}-${instanceIndex}`
      sanitizedField.name = field.name && `${field.name}-${instanceIndex}`
    }

    sanitizedField.className = Array.isArray(field.className)
      ? unique(field.className.join(' ').split(' ')).join(' ')
      : field.className || field.class || null

    delete sanitizedField.class

    if (field.values) {
      field.values = (field.values as []).map(option => trimObj(option))
    }

    return trimObj(sanitizedField)
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
  render(instanceIndex = 0) {
    const opts = this.options
    this.el = this.getElement(this.el)

    if (opts.formData) {
      const rendered: HTMLElement[] = []

      const engine = new Layout(opts.layoutTemplates)

      for (let i = 0; i < opts.formData.length; i++) {
        const fieldData: Field = opts.formData[i]
        const sanitizedField = this.santizeField(fieldData, instanceIndex)

        const controlClass = control.getRegisteredClassControl(fieldData.type, fieldData.subtype)
        const field = engine.build(controlClass, sanitizedField)

        rendered.push(field)
      }

      //Kevin -- what is instanceIndex all about? If you had multiple forms wouldnt you load this separately?
      if (this.el) {
        this.instanceContainers[instanceIndex] = this.el
      }

      //Kevin -- why would we not be rendering? does this really need an if/else?
      // if rendering, inject the fields into the specified wrapper container/element
      if (opts.render && this.el) {
        this.emptyContainer()
        this.appendFormFields(rendered)

        if (opts.onRender) {
          opts.onRender()
        }

        opts.notify.success(opts.messages.formRendered)
      } else {
        //Kevin - is there any point to this else block? this.markup doesn't appear to be used anywhere else so not sure why this is happening
        /**
         * Retrieve the html markup for a passed array of DomElements
         * @param {Array} fields - array of dom elements
         * @return {String} fields html
         */
        const exportMarkup = fields => fields.map(elem => elem.innerHTML).join('')
        this.markup = exportMarkup(rendered)
      }
    } else {
      opts.notify.error(opts.messages.noFormData)
    }

    //Kevin -- does this section below really need to be done if there is no form data?
    if (opts.disableInjectedStyle) {
      const styleTags = document.getElementsByClassName('formBuilder-injected-style')
      forEach(styleTags, i => remove(styleTags[i]))
    }
  }

  emptyContainer() {
    if (this.options?.overrideMethods?.emptyContainer) {
      this.options.overrideMethods.emptyContainer()
      return
    }

    while (this.el.lastChild) {
      this.el.removeChild(this.el.lastChild)
    }
  }

  appendFormFields(fields: HTMLElement[]) {
    if (this.options?.overrideMethods?.appendFormFields) {
      this.options.overrideMethods.appendFormFields(fields)
      return
    }

    if (!Array.isArray(fields)) {
      fields = [fields]
    }

    const renderedFormWrap = markup('div', fields, {
      className: 'rendered-form',
    })

    this.el.appendChild(renderedFormWrap)

    fields.forEach(field => {
      // Determine if rows are being used. If so, create the row and append to its row-{group}
      // If the fields have row-, create & append to the appropriate row
      const [rowGroup] = field.className.match(/row-([^\s]+)/) || []
      if (rowGroup) {
        const rowID = this.el.id ? `${this.el.id}-row-${rowGroup}` : `row-${rowGroup}`

        // Check if this rowID is created yet or not.
        let rowGroupNode = document.getElementById(rowID)
        if (!rowGroupNode) {
          rowGroupNode = markup('div', null, { id: rowID, className: 'row form-inline' })
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

  /**
   * Render a single control / field
   * Expects only a single field configuration to be set in opt.formData
   * @param {Object} element - an optional DOM element to render the field into - if not specified will just return the rendered field - note if you do this you will need to manually call element.dispatchEvent('fieldRendered') on the returned element when it is rendered into the DOM
   * @return {Object} the formRender object
   */
  // renderControl(element = null) {
  //   const opts = this.options
  //   const fieldData = opts.formData
  //   if (!fieldData || Array.isArray(fieldData)) {
  //     throw new Error(
  //       'To render a single element, please specify a single object of formData for the field in question',
  //     )
  //   }
  //   const sanitizedField = this.santizeField(fieldData)

  //   // determine the control class for this type, and then build it
  //   const engine = new opts.layout()
  //   const controlClass = control.getClass(fieldData.type, fieldData.subtype)
  //   const forceTemplate = opts.forceTemplate || 'hidden' // support the ability to override what layout template the control is rendered using. This can be used to output the whole row (including label, help etc) using the standard templates if desired.
  //   const field = engine.build(controlClass, sanitizedField, forceTemplate)
  //   element.appendFormFields(field)
  //   opts.notify.success(opts.messages.formRendered)
  //   return this
  // }

  /**
   * Return user entered data
   */
  get userData() {
    const options = this.options
    const definedFields = options.formData.slice()

    // save tinyMCE editors
    definedFields
      .filter(fieldData => fieldData.subtype === 'tinymce')
      .forEach(fieldData => window.tinymce.get(fieldData.name).save({}))

    this.instanceContainers.forEach(container => {
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

  clearFormData() {
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

  //Kevin -- how is this method different than helpers.ts getData() ?
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
