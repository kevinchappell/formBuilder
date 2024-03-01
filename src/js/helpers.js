import mi18n from 'mi18n'
import { instanceDom, empty, remove, optionFields } from './dom'
import { instanceData } from './data'
import {
  mobileClass,
  markup as m,
  forEach,
  camelCase,
  escapeHtml,
  trimObj,
  subtract,
  parseXML,
  capitalize,
  unique,
  xmlAttrString,
  flattenArray,
  bootstrapColumnRegex,
  getAllGridRelatedClasses,
} from './utils'
import events from './events'
import { instanceConfig, defaultTimeout, styles } from './config'
import control from './control'
import storageAvailable from 'storage-available'

/**
 * Utilities specific to form-builder.js
 */
export default class Helpers {
  /**
   * Setup defaults, get instance data and dom
   * @param  {string} formId
   * @param {Object} layout object instance used by various helpers
   * @param {Object} formBuilder instance
   */
  constructor(formId, layout, formBuilder) {
    this.data = instanceData[formId]
    this.d = instanceDom[formId]
    this.config = instanceConfig[formId]
    this.doCancel = false
    this.layout = layout
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.formBuilder = formBuilder
    this.toastTimer = null
  }

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  startMoving(event, ui) {
    ui.item.show().addClass('moving')
    this.doCancel = true
    this.from = ui.item.parent()
  }

  /**
   * Callback for when a drag ends
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  stopMoving(event, ui) {
    const _this = this
    ui.item.removeClass('moving')
    if (_this.doCancel) {
      if (ui.sender) {
        $(ui.sender).sortable('cancel')
      }
      this.from.sortable('cancel')
    }
    _this.save()
    _this.doCancel = false
  }

  /**
   * jQuery UI sortable beforeStop callback used for both lists.
   * Logic for canceling the sort or drop.
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */
  beforeStop(event, ui) {
    const _this = this
    const opts = this.config.opts
    const form = _this.d.stage
    const lastIndex = form.childNodes.length - 1
    const cancelArray = []
    //Find the index within the stage even if the placeholder is not a direct descendant
    _this.stopIndex = ui.placeholder.closest('ul.stage-wrap > *').index() - 1

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true)
    }

    if (opts.prepend) {
      cancelArray.push(_this.stopIndex === 0)
    }

    if (opts.append) {
      cancelArray.push(_this.stopIndex + 1 === lastIndex)
    }

    _this.doCancel = cancelArray.some(elem => elem === true)
  }

  /**
   * Attempts to get element type and subtype
   *
   * @param  {Object} $field
   * @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
   */
  getTypes($field) {
    const types = {
      type: $field.attr('type'),
    }
    const subtype = $('.fld-subtype', $field).val()

    if (subtype !== types.type) {
      types.subtype = subtype
    }

    return types
  }

  /**
   * Get option data for a field
   * @param  {Object} field jQuery field object
   * @return {Array}        Array of option values
   */
  fieldOptionData(field) {
    const options = []
    const $options = $('.sortable-options li', field)

    $options.each(i => {
      const option = $options[i]
      const stringAttrs = option.querySelectorAll('input[type=text], input[type=number], select')
      const boolAttrs = option.querySelectorAll('input[type=checkbox], input[type=radio]')
      const attrs = {}

      forEach(stringAttrs, i => {
        const stringAttr = stringAttrs[i]
        const attrName = stringAttr.dataset.attr
        attrs[attrName] = stringAttr.value
      })

      forEach(boolAttrs, i => {
        const boolAttr = boolAttrs[i]
        const attrName = boolAttr.getAttribute('data-attr')
        attrs[attrName] = boolAttr.checked
      })

      options.push(attrs)
    })

    return options
  }

  /**
   * XML save
   * @param  {Object} form sortableFields node
   * @return {string} xml in string
   */
  xmlSave(form) {
    const formData = this.prepData(form)
    const xmlSerializer = new XMLSerializer()
    /** @type {Array.<string|string[]>} fields */
    const fields = ['<fields>']

    formData.forEach(field => {
      const { values, ...fieldData } = field
      let fieldHTML = [`<field ${xmlAttrString(fieldData)}>`]

      // Handle options
      if (optionFields.includes(field.type)) {
        const options = values.map(option => m('option', option.label, option).outerHTML)
        fieldHTML = fieldHTML.concat(options)
      }

      fieldHTML.push('</field>')
      fields.push(fieldHTML)
    })

    fields.push('</fields>')

    const formTemplate = m('form-template', flattenArray(fields).join(''))
    return xmlSerializer.serializeToString(formTemplate)
  }

  /**
   * Get formData from editor in JS Object format
   * @param  {Object} form aka stage, DOM element
   * @return {Object} formData
   */
  prepData(form) {
    const formData = []
    const d = this.d
    const _this = this
    const config = this.config

    if (form.childNodes.length !== 0) {
      const fields = []
      //Get form-fields as expected(within rowWrapper)
      forEach(form.childNodes, function (_index, fieldWrapper) {
        const $fieldWrapper = $(fieldWrapper)

        //Go one level deeper than the row container to find the li
        $fieldWrapper.find('li.form-field').each(function (i, field) {
          fields.push(field)
        })
      })

      //Get form-fields that might still be currently editing and are temporarily outside a rowWrapper
      forEach(form.childNodes, function (_index, testElement) {
        const $testElement = $(testElement)
        if ($testElement.is('li') && $testElement.hasClass('form-field')) {
          fields.push(testElement)
        }
      })

      if (fields.length) {
        fields.forEach(field => {
          const $field = $(field)

          if (!$field.hasClass('disabled-field')) {
            let fieldData = _this.getTypes($field)
            const $roleInputs = $('.roles-field:checked', field)
            const roleVals = $roleInputs.map(index => $roleInputs[index].value).get()

            fieldData = Object.assign({}, fieldData, _this.getAttrVals(field))

            if (fieldData.subtype) {
              if (fieldData.subtype === 'quill') {
                const id = `${fieldData.name}-preview`
                if (window.fbEditors.quill[id]) {
                  const instance = window.fbEditors.quill[id].instance
                  const data = instance.getContents()
                  fieldData.value = window.JSON.stringify(data.ops)
                }
              } else if (fieldData.subtype === 'tinymce' && window.tinymce) {
                const id = `${fieldData.name}-preview`
                const editor = window.tinymce.get(id)
                if (editor) {
                  fieldData.value = editor.getContent()
                }
              }
            }

            if (roleVals.length) {
              fieldData.role = roleVals.join(',')
            }

            fieldData.className = fieldData.className || fieldData.class

            //If no other fields were added to the same row and the user did not do anything with this information, then remove it when exporting the config
            if (
              fieldData.className &&
              $field.attr('addeddefaultcolumnclass') == 'true' &&
              $field.closest(this.formBuilder.rowWrapperClassSelector).children().length == 1 &&
              fieldData.className.includes(config.opts.defaultGridColumnClass)
            ) {
              const classes = getAllGridRelatedClasses(fieldData.className)

              if (classes && classes.length > 0) {
                classes.forEach(element => {
                  fieldData.className = fieldData.className.replace(element, '').trim()
                })
              }
            }

            if (fieldData.className) {
              const regex = new RegExp('(?:^|\\s)btn-(' + styles.btn.join('|') + ')(?:\\s|$)', 'g')
              const match = regex.exec(fieldData.className)
              if (match) {
                fieldData.style = match[1]
              }
            }

            fieldData = trimObj(fieldData)

            const multipleField = fieldData.type && fieldData.type.match(d.optionFieldsRegEx)

            if (multipleField) {
              fieldData.values = _this.fieldOptionData($field)
            }

            formData.push(fieldData)
          }
        })
      }
    }

    return formData
  }

  /**
   * Get and set the data for an editor. Mainly
   * a wrapper for handling dataType option
   * @param  {Object} formData
   * @return {Object} formData
   */
  getData(formData) {
    const data = this.data

    if (!formData) {
      formData = this.config.opts.formData
    }

    if (!formData) {
      return false
    }

    const setData = {
      xml: formData => (Array.isArray(formData) ? formData : parseXML(formData)),
      json: formData => {
        if (typeof formData === 'string') {
          return window.JSON.parse(formData)
        }
        return formData
      },
    }

    data.formData = setData[this.config.opts.dataType](formData) || []

    return data.formData
  }

  /**
   * Saves and returns formData
   * @param {boolean} [minify=false] whether to return formatted or minified data
   * @return {string} formData FormData formatted in either XML or JSON depending on the current config.opts.dataType value
   */
  save(minify = false) {
    const _this = this
    const data = this.data
    const stage = this.d.stage
    const doSave = {
      xml: () => _this.xmlSave(stage),
      json: minify => window.JSON.stringify(_this.prepData(stage), null, minify && '  '),
    }

    // save action for current `dataType`
    data.formData = doSave[this.config.opts.dataType](minify)

    // trigger formSaved event
    document.dispatchEvent(events.formSaved)
    return data.formData
  }

  /**
   * increments the field ids with support for multiple editors
   * @param  {string} id field ID
   * @return {string}    incremented field ID
   */
  incrementId(id) {
    const split = id.lastIndexOf('-')
    const newFieldNumber = parseInt(id.substring(split + 1)) + 1
    const baseString = id.substring(0, split)

    return `${baseString}-${newFieldNumber}`
  }

  /**
   * Set the values for field attributes in the editor
   * @param {Object} field
   * @return {Object} fieldData
   */
  getAttrVals(field) {
    const config = this.config
    const fieldData = Object.create(null)
    const attrs = field.querySelectorAll('[class*="fld-"]')
    forEach(attrs, index => {
      const attr = attrs[index]
      const name = camelCase(attr.getAttribute('name'))
      fieldData[name] = [
        [
          attr.attributes.contenteditable,
          () => (config.opts.dataType === 'xml' ? escapeHtml(attr.innerHTML) : attr.innerHTML),
        ],
        [attr.type === 'checkbox', () => attr.checked],
        [attr.type === 'number' && attr.value !== '', () => Number(attr.value)],
        [attr.attributes.multiple, () => $(attr).val()],
        [true, () => attr.value],
      ].find(([condition]) => !!condition)[1]()
    })
    return fieldData
  }

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} $field jQuery DOM element
   */
  updatePreview($field) {
    const _this = this
    const d = this.d
    const fieldClass = $field.attr('class')
    const field = $field[0]
    if (fieldClass.includes('input-control')) {
      return
    }

    const fieldType = $field.attr('type')
    const $prevHolder = $('.prev-holder', field)
    let previewData = Object.assign({}, _this.getAttrVals(field), { type: fieldType })

    if (fieldType.match(d.optionFieldsRegEx)) {
      previewData.values = []
      previewData.multiple = $('[name="multiple"]', field).is(':checked')

      $('.sortable-options li', field).each(function (i, $option) {
        const option = {
          selected: $('.option-selected', $option).is(':checked'),
          value: $('.option-value', $option).val(),
          label: $('.option-label', $option).val(),
        }
        previewData.values.push(option)
      })
    }

    previewData = trimObj(previewData, true)

    previewData.className = _this.classNames(field, previewData)

    $field.data('fieldData', previewData)

    // determine the control class for this type, and then process it through the layout engine
    const custom = _this.formBuilder.controls.custom.lookup(previewData.type)
    const template = _this.formBuilder.controls.custom.getClass(previewData.type)
    const controlClass = custom ? custom.class : template || control.getClass(previewData.type, previewData.subtype)
    const preview = this.layout.build(controlClass, previewData)

    empty($prevHolder[0])
    $prevHolder[0].appendChild(preview)
    preview.dispatchEvent(events.fieldRendered)
  }

  /**
   * Display a custom tooltip for disabled fields.
   *
   * @param  {Object} stage
   */
  disabledTT(stage) {
    const move = (e, elem) => {
      const fieldOffset = elem.field.getBoundingClientRect()
      const x = e.clientX - fieldOffset.left - 21
      const y = e.clientY - fieldOffset.top - elem.tt.offsetHeight - 12
      elem.tt.style.transform = `translate(${x}px, ${y}px)`
    }

    const disabledFields = stage.querySelectorAll('.disabled-field')
    forEach(disabledFields, index => {
      const field = disabledFields[index]
      const title = mi18n.get('fieldNonEditable')

      if (title) {
        const tt = m('p', title, { className: 'frmb-tt' })
        field.appendChild(tt)
        field.addEventListener('mousemove', e => move(e, { tt, field }))
      }
    })
  }

  /**
   * Process classNames for field
   * @param  {Object} field
   * @param  {Object} previewData
   * @return {String|void} classNames
   */
  classNames(field, previewData) {
    const className = field.querySelector('.fld-className')
    const styleField = field.querySelector('.btn-style')
    const style = styleField && styleField.value

    if (!className) {
      return
    }
    const { type } = previewData
    const classes = className.multiple ? $(className).val() : className.value.trim().split(' ')
    const types = {
      button: 'btn',
      submit: 'btn',
    }

    const primaryType = types[type]

    if (primaryType && style) {
      for (let i = 0; i < classes.length; i++) {
        const re = new RegExp(`^${primaryType}-(?:` + styles.btn.join('|') + ')$')
        const match = classes[i].match(re)
        if (match) {
          classes.splice(i, 1, primaryType + '-' + style)
        }
      }

      classes.push(primaryType + '-' + style)
      classes.push(primaryType)
    }

    const trimmedClassName = unique(classes).join(' ').trim()

    className.value = trimmedClassName

    // reverse the array to put custom classes at end,
    // remove any duplicates, convert to string, remove whitespace
    return trimmedClassName
  }

  /**
   * Closes and open dialog
   *
   * @param  {HTMLElement} [overlay] Existing overlay if there is one
   * @param  {HTMLElement} [dialog]  Existing dialog
   */
  closeConfirm(overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0]
    }
    overlay && remove(overlay)
    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0]
    }
    dialog && remove(dialog)
    document.removeEventListener('keydown', this.handleKeyDown, false)
    document.dispatchEvent(events.modalClosed)
  }

  /**
   *
   * @param {KeyboardEvent} e keydown event object
   */
  handleKeyDown(e) {
    const keyCode = e.keyCode || e.which
    if (keyCode === 27) {
      e.preventDefault()
      this.closeConfirm.call(this)
    }
  }

  /**
   * Adds overlay to the page. Used for modals.
   * @return {HTMLElement} DOM Object
   */
  showOverlay() {
    const overlay = m('div', null, {
      className: 'form-builder-overlay',
    })
    document.body.appendChild(overlay)
    overlay.classList.add('visible')

    overlay.addEventListener('click', ({ target }) => this.closeConfirm(target), false)
    document.addEventListener('keydown', this.handleKeyDown, false)

    return overlay
  }

  /**
   * Custom confirmation dialog
   *
   * @param  {Object}  message   Content to be displayed in the dialog
   * @param  {Function}  yesAction callback to fire if they confirm
   * @param  {{pageX: Number, pageY: Number}|false} [coords=false]    location to put the dialog
   * @param  {string}  [className=''] Custom class to be added to the dialog
   * @return {HTMLElement}            Reference to the modal
   */
  confirm(message, yesAction, coords = false, className = '') {
    const _this = this
    const i18n = mi18n.current
    const overlay = _this.showOverlay()
    const yes = m('button', i18n.yes, {
      className: 'yes btn btn-success btn-sm',
    })
    const no = m('button', i18n.no, {
      className: 'no btn btn-danger btn-sm',
    })

    no.onclick = function () {
      _this.closeConfirm(overlay)
    }

    yes.onclick = function () {
      yesAction()
      _this.closeConfirm(overlay)
    }

    const btnWrap = m('div', [no, yes], { className: 'button-wrap' })

    className = 'form-builder-dialog ' + className

    const miniModal = m('div', [message, btnWrap], { className })
    if (!coords) {
      const dE = document.documentElement
      coords = {
        pageX: Math.max(dE.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(dE.clientHeight, window.innerHeight || 0) / 2,
      }
      miniModal.style.position = 'fixed'
    } else {
      miniModal.classList.add('positioned')
    }

    miniModal.style.left = coords.pageX + 'px'
    miniModal.style.top = coords.pageY + 'px'

    document.body.appendChild(miniModal)

    yes.focus()
    return miniModal
  }

  /**
   * Popup dialog the does not require confirmation.
   * @param  {string|HTMLElement|Array}  content
   * @param  {{pageX: Number, pageY: Number}|false} [coords=false]   screen coordinates to position dialog
   * @param  {string} [className=''] classname to be added to the dialog
   * @return {HTMLElement}            dom
   */
  dialog(content, coords = false, className = '') {
    const _this = this
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    _this.showOverlay()

    className = 'form-builder-dialog ' + className

    const miniModal = m('div', content, { className: className })
    if (!coords) {
      coords = {
        pageX: Math.max(clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(clientHeight, window.innerHeight || 0) / 2,
      }
      miniModal.style.position = 'fixed'
    } else {
      miniModal.classList.add('positioned')
    }

    miniModal.style.left = coords.pageX + 'px'
    miniModal.style.top = coords.pageY + 'px'

    document.body.appendChild(miniModal)

    document.dispatchEvent(events.modalOpened)

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(events.viewData)
    }

    return miniModal
  }

  /**
   * Confirm all fields will be removed then remove them
   * @param  {Object} e click event object
   */
  confirmRemoveAll(e) {
    const _this = this
    const config = this.config
    const formID = e.target.id.match(/frmb-\d{13}/)[0]
    const stage = document.getElementById(formID)
    const i18n = mi18n.current
    const fields = $('li.form-field', stage)
    const buttonPosition = e.target.getBoundingClientRect()
    const bodyRect = document.body.getBoundingClientRect()
    const coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12,
    }

    if (fields.length) {
      _this.confirm(
        i18n.clearAllMessage,
        () => {
          _this.removeAllFields.call(_this, stage)
          if (config.opts.persistDefaultFields && config.opts.defaultFields) {
            this.addDefaultFields()
          } else {
            config.opts.notify.success(i18n.allFieldsRemoved)
          }
          config.opts.onClearAll()
        },
        coords,
      )
    } else {
      _this.dialog(i18n.noFieldsToClear, coords)
    }
  }

  addDefaultFields() {
    // Load default fields if none are set
    this.config.opts.defaultFields.forEach(field => this.formBuilder.prepFieldVars(field))
    this.d.stage.classList.remove('empty')
  }

  /**
   * Removes all fields from the form
   * @param {HTMLElement} stage to remove fields form
   * @return {void}
   */
  removeAllFields(stage) {
    const i18n = mi18n.current
    const opts = this.config.opts
    const fields = stage.querySelectorAll(this.formBuilder.fieldSelector)
    const markEmptyArray = []

    if (!fields.length) {
      return
    }

    if (opts.prepend) {
      markEmptyArray.push(true)
    }

    if (opts.append) {
      markEmptyArray.push(true)
    }

    if (!markEmptyArray.some(Boolean)) {
      stage.classList.add('empty')
      stage.dataset.content = i18n.getStarted
    }

    this.emptyStage(stage)
  }

  /**
   * @param {HTMLElement} stage
   */
  emptyStage(stage) {
    empty(stage).classList.remove('removing')
    stage.dispatchEvent(events.stageEmptied)
    this.save()
  }

  /**
   * Check if stage is empty
   * @return {boolean}
   */
  stageIsEmpty() {
    return $(this.d.stage).find('li').length === 0
  }

  /**
   * If user re-orders the elements their order should be saved.
   * @param {Object} $cbUL our list of elements
   * @return {Array|false} fieldOrder
   */
  setFieldOrder($cbUL) {
    if (!this.config.opts.sortableControls) {
      return false
    }
    const JSON = window.JSON

    const fieldOrder = []

    $cbUL.children().each((index, element) => {
      const type = $(element).data('type')
      if (type) {
        fieldOrder.push(type)
      }
    })

    if (storageAvailable('sessionStorage')) {
      window.sessionStorage.setItem('fieldOrder', JSON.stringify(fieldOrder))
    }
    return fieldOrder
  }

  /**
   * Close fields being editing
   */
  closeAllEdit() {
    const _this = this

    $(_this.d.stage)
      .find('li.form-field')
      .each((i, elem) => {
        this.closeField(elem.id, false)
      })
  }

  /**
   * Toggles the edit mode for the given field
   * @param  {string} fieldId
   * @param  {boolean} animate
   * @return {HTMLElement|void} field
   */
  toggleEdit(fieldId, animate = true) {
    const field = document.getElementById(fieldId)
    if (!field) {
      return
    }

    if ($(field).hasClass('editing')) {
      return this.closeField(fieldId, animate)
    } else {
      return this.openField(fieldId, animate)
    }
  }

  /**
   * Close the editing panel of the field
   * @param {string} fieldId
   * @param {boolean} animate
   * @returns {HTMLElement}
   */
  closeField(fieldId, animate = true) {
    const _this = this

    const field = document.getElementById(fieldId)
    if (!field) {
      return field
    }

    const $editPanel = $('.frm-holder', field)
    const $preview = $('.prev-holder', field)

    let currentlyEditing = false
    if ($(field).hasClass('editing')) {
      currentlyEditing = true
    }

    if (!currentlyEditing) {
      return field
    }

    field.classList.toggle('editing')
    $('.toggle-form', field).toggleClass('open')

    if (animate) {
      $preview.slideToggle(250)
      $editPanel.slideToggle(250)
    } else {
      $preview.toggle()
      $editPanel.toggle()
    }
    this.updatePreview($(field))

    const liContainer = $(`#${fieldId}`)
    const rowContainer = $(`#${fieldId}-cont`)

    //Put the li back in its place
    rowContainer.append(liContainer)

    this.removeContainerProtection(rowContainer.attr('id'))

    this.config.opts.onCloseFieldEdit($editPanel[0])
    document.dispatchEvent(events.fieldEditClosed)

    const prevHolder = liContainer.find('.prev-holder')
    const resultsTimeout = setTimeout(() => {
      clearTimeout(resultsTimeout)
      const cleanResults = _this.tmpCleanPrevHolder(prevHolder)

      cleanResults.forEach(result => {
        if (result['columnInfo'].columnSize) {
          const currentClassRow = _this.getBootstrapColumnClass(rowContainer.attr('class'))
          if (currentClassRow !== result['columnInfo'].columnSize) {
            //Keep the wrapping column div sync'd to the column property from the field
            rowContainer.removeClass(currentClassRow).addClass(result['columnInfo'].columnSize)
            _this.tmpCleanPrevHolder(prevHolder)
          }
        }
      })
    }, 300)

    return field
  }

  /**
   * Open the editing panel of the field
   * @param {string} fieldId
   * @param {boolean} animate
   * @returns {HTMLElement}
   */
  openField(fieldId, animate = true) {
    const field = document.getElementById(fieldId)
    if (!field) {
      return field
    }

    const $editPanel = $('.frm-holder', field)
    const $preview = $('.prev-holder', field)

    let currentlyEditing = false
    if ($(field).hasClass('editing')) {
      currentlyEditing = true
    }

    if (currentlyEditing) {
      return field
    }

    field.classList.toggle('editing')
    $('.toggle-form', field).toggleClass('open')

    if (animate) {
      $preview.slideToggle(250)
      $editPanel.slideToggle(250)
    } else {
      $preview.toggle()
      $editPanel.toggle()
    }
    this.updatePreview($(field))

    const liContainer = $(`#${fieldId}`)
    const colWrapper = $(`#${fieldId}-cont`)
    const rowWrapper = colWrapper.closest(this.formBuilder.rowWrapperClassSelector)

    //Mark the container as something we don't want to cleanup immediately
    this.formBuilder.preserveTempContainers.push(colWrapper.attr('id'))

    //Temporarily move the li outside(keeping same relative overall spot in the form) so that the field details show in full width regardless of its column size
    liContainer.insertAfter(rowWrapper)

    this.formBuilder.currentEditPanel = $editPanel[0]
    this.config.opts.onOpenFieldEdit($editPanel[0])
    document.dispatchEvent(events.fieldEditOpened)

    $(document).trigger('fieldOpened', [{ rowWrapperID: rowWrapper.attr('id') }])

    return field
  }

  /**
   * Get the computed style for DOM element @TODO Find usage?
   * @param  {Element}  elem     dom element
   * @param  {boolean} property style eg. width, height, opacity
   * @return {string}           computed style
   * @deprecated Function is not called anywhere
   */
  getStyle(elem, property = false) {
    let style
    if (window.getComputedStyle) {
      style = window.getComputedStyle(elem, null)
    } else if (elem.currentStyle) { //@ie-6 only feature
      style = elem.currentStyle
    }

    return property ? style[property] : style
  }

  /**
   * Open a dialog with the form's data
   */
  showData() {
    const formData = escapeHtml(this.getFormData(this.config.opts.dataType, true))

    const code = m('code', formData, {
      className: `formData-${this.config.opts.dataType}`,
    })

    this.dialog(m('pre', code), false, 'data-dialog')
  }

  /**
   * Remove a given field from the stage or the last field if no fieldID is provided
   * @param  {string}  fieldID ID of the field to be removed
   * @param  {Number}  animationSpeed
   * @return {boolean} fieldRemoved returns true if field is removed
   */
  removeField(fieldID, animationSpeed = 250) {
    let fieldRemoved = false
    const _this = this
    const form = this.d.stage
    const fields = form.getElementsByClassName('form-field')

    if (!fields.length) {
      this.config.opts.notify.warning('No fields to remove')
      return false
    }

    if (!fieldID) {
      const availableIds = [].slice.call(fields).map(field => {
        return field.id
      })
      this.config.opts.notify.warning('fieldID required to remove specific fields.')
      this.config.opts.notify.warning('Removing last field since no ID was supplied.')
      this.config.opts.notify.warning('Available IDs: ' + availableIds.join(', '))
      fieldID = availableIds[availableIds.length-1]
    }

    const field = document.getElementById(fieldID)
    if (!field) {
      this.config.opts.notify.warning('Field not found')
      return false
    }

    const $field = $(field)
    const fieldRowWrapper = $field.closest(this.formBuilder.rowWrapperClassSelector)

    $field.slideUp(animationSpeed, function () {
      $field.removeClass('deleting')
      $field.remove()
      fieldRemoved = true
      _this.save()
      if (!form.childNodes.length) {
        form.classList.add('empty')
        form.dataset.content = mi18n.current.getStarted
      }
    })

    const userEvents = Object.assign({}, this.config.opts.typeUserEvents['*'], this.config.opts.typeUserEvents[field.type])

    if (userEvents && userEvents.onremove) {
      userEvents.onremove(field)
    }

    document.dispatchEvent(events.fieldRemoved)

    if (fieldRowWrapper.length) {
      this.removeContainerProtection(`${fieldID}-cont`)
      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        $(document).trigger('checkRowCleanup', [{ rowWrapperID: fieldRowWrapper.attr('id') }])
      }, defaultTimeout)
    }

    return fieldRemoved
  }

  /**
   * Generate markup for form action buttons
   * @param  {Object} buttonData
   * @return {HTMLElement} DOM element for action button
   */
  processActionButtons(buttonData) {
    const { label, events, ...attrs } = buttonData
    let labelText = label
    const data = this.data
    if (!labelText) {
      if (attrs.id) {
        labelText = mi18n.current[attrs.id] || capitalize(attrs.id)
      } else {
        labelText = ''
      }
    } else {
      labelText = mi18n.current[labelText] || labelText
    }

    if (!attrs.id) {
      attrs.id = `${data.formID}-action-${Math.round(Math.random() * 1000)}`
    } else {
      attrs.id = `${data.formID}-${attrs.id}-action`
    }

    const button = m('button', labelText, attrs)

    if (events) {
      for (const event in events) {
        if (events.hasOwnProperty(event)) {
          button.addEventListener(event, evt => events[event](evt))
        }
      }
    }

    return button
  }

  /**
   * Register any subtype controls specified in the 'subtypes' option, retrieve
   * all defined subtypes & build the export subtype format
   * @param  {Array} subtypeOpts
   * @return {Array} subtypes
   */
  processSubtypes(subtypeOpts) {
    const disabledSubtypes = this.config.opts.disabledSubtypes
    // first register any passed subtype options against the appropriate type control class
    for (const fieldType in subtypeOpts) {
      if (subtypeOpts.hasOwnProperty(fieldType)) {
        control.register(subtypeOpts[fieldType], control.getClass(fieldType), fieldType)
      }
    }

    // retrieve a list of all subtypes
    const registeredSubtypes = control.getRegisteredSubtypes()

    // remove disabled subtypes
    const subtypeDef = Object.entries(registeredSubtypes).reduce((acc, [key, val]) => {
      acc[key] = (disabledSubtypes[key] && subtract(disabledSubtypes[key], val)) || val
      return acc
    }, {})

    // reformat the subtypes for each fieldType
    const subtypes = {}
    for (const fieldType in subtypeDef) {
      if (subtypeDef.hasOwnProperty(fieldType)) {
        // loop through each defined subtype & build the formatted data structure
        const formatted = []
        for (const subtype of subtypeDef[fieldType]) {
          const controlClass = control.getClass(fieldType, subtype)
          const label = controlClass.mi18n(`subtype.${subtype}`) || controlClass.mi18n(subtype) || subtype
          formatted.push({
            label,
            value: subtype,
          })
        }
        subtypes[fieldType] = formatted
      }
    }

    return subtypes
  }

  /**
   * Generate stage and controls dom elements
   * @param  {string} formID
   * @param  {string} controlPosition
   */
  editorUI(formID, controlPosition) {
    const d = this.d
    const data = this.data
    const id = formID || data.formID

    const controlPositionClass = (controlPosition || '') === 'left' ? 'controls-left' : 'controls-right'

    d.editorWrap = m('div', null, {
      id: `${data.formID}-form-wrap`,
      className: `form-wrap form-builder formbuilder-embedded-bootstrap ${mobileClass()} ${controlPositionClass}`,
    })

    d.stage = m('ul', null, {
      id,
      className: 'frmb stage-wrap',
    })

    // Create container for controls
    d.controls = m('ul', null, {
      id: `${id}-control-box`,
      className: 'frmb-control',
    })

    const buttons = this.formActionButtons()
    d.formActions = m('div', buttons, {
      className: 'form-actions btn-group',
    })
  }

  /**
   * Generates form action buttons
   * @return {HTMLElement[]} formActions btn-group
   */
  formActionButtons() {
    const opts = this.config.opts
    return opts.actionButtons
      .map(btnData => {
        if (btnData.id && opts.disabledActionButtons.indexOf(btnData.id) === -1) {
          return this.processActionButtons(btnData)
        }
      })
      .filter(Boolean)
  }

  /**
   * Process user options for actionButtons
   * @param  {Object} options
   * @return {Object} processedOptions
   */
  processOptions(options) {
    const _this = this
    const { actionButtons, replaceFields, ...opts } = options
    let fieldEditContainer = opts.fieldEditContainer
    if (typeof opts.fieldEditContainer === 'string') {
      fieldEditContainer = document.querySelector(opts.fieldEditContainer)
    }
    const mergedActionButtons = [
      {
        type: 'button',
        id: 'clear',
        className: 'clear-all btn btn-danger',
        events: {
          click: _this.confirmRemoveAll.bind(_this),
        },
      },
      {
        type: 'button',
        label: 'viewJSON',
        id: 'data',
        className: 'btn btn-default get-data',
        events: {
          click: _this.showData.bind(_this),
        },
      },
      {
        type: 'button',
        id: 'save',
        className: 'btn btn-primary save-template',
        events: {
          click: evt => {
            _this.save()
            _this.config.opts.onSave(evt, _this.data.formData)
          },
        },
      },
    ].concat(actionButtons)

    opts.fields = opts.fields.concat(replaceFields)
    opts.disableFields = opts.disableFields.concat(replaceFields.map(({ type }) => type && type))

    if (opts.dataType === 'xml') {
      // html labels are not available using xml dataType
      opts.disableHTMLLabels = true
    }
    _this.config.opts = Object.assign({}, { actionButtons: mergedActionButtons }, { fieldEditContainer }, opts)
    return _this.config.opts
  }

  /**
   * Small wrapper for input markup
   * @param  {Object} attrs
   * @return {Object} DOM element
   */
  input(attrs = {}) {
    return m('input', null, attrs)
  }

  /**
   * Gets the data for current instance of formBuilder
   * @param  {string} type
   * @param  {boolean} formatted
   * @return {Array|string} formData
   */
  getFormData(type = 'js', formatted = false) {
    const h = this
    const data = {
      js: () => h.prepData(h.d.stage),
      xml: () => h.xmlSave(h.d.stage),
      json: formatted => window.JSON.stringify(h.prepData(h.d.stage), null, formatted && '  '),
    }

    return data[type](formatted)
  }

  /**
   * @param $prevHolder
   * @returns {Object[]}
   */
  tmpCleanPrevHolder($prevHolder) {
    const _this = this
    const cleanedFields = []

    const formGroup = $prevHolder.find('.form-group')
    tmpCleanColumnInfo(formGroup)

    formGroup.find('*').each(function (i, field) {
      tmpCleanColumnInfo($(field))
    })

    function tmpCleanColumnInfo($field) {
      const classAttr = $field.attr('class')

      if (typeof classAttr !== 'undefined' && classAttr !== false) {
        const parseResult = _this.tryParseColumnInfo($field[0])

        //tmpCleanColumnInfo may be called multiple times, remove previous work to ensure we don't keep appending tmp- to class names
        $field.attr('class', $field.attr('class').replace('__fb-tmp-col-', 'col-' ))
        $field.attr('class', $field.attr('class').replace('__fb-tmp-row-', 'row-' ))
        $field.attr('class', $field.attr('class').replace('col-', '__fb-tmp-col-'))
        $field.attr('class', $field.attr('class').replace('row-', '__fb-tmp-row-'))

        const result = {}
        result['field'] = $field
        result['columnInfo'] = parseResult
        cleanedFields.push(result)
      }
    }

    return cleanedFields
  }

  /**
   * @typedef BsColumnInfo
   * @param {string} [rowUniqueId]
   * @param {string} [columnSize]
   */

  /**
   * @param data
   * @returns {BsColumnInfo}
   */
  tryParseColumnInfo(data) {
    const result = {}

    if (data.className) {
      const classes = getAllGridRelatedClasses(data.className)

      if (classes && classes.length > 0) {
        classes.forEach(element => {
          if (element.startsWith('row-')) {
            result['rowUniqueId'] = element.replace('row-', '').trim()
          } else {
            result['columnSize'] = element
          }
        })
      }
    }

    return result
  }

  /**
   *  Remove one reference that protected this potentially empty container. There may be other open fields needing the container
   *  @param {string} containerID
   */
  removeContainerProtection(containerID) {
    const index = this.formBuilder.preserveTempContainers.indexOf(containerID)
    if (index !== -1) {
      this.formBuilder.preserveTempContainers.splice(index, 1)
    }
  }

  /**
   * Briefly highlight on/off
   * @param {jQuery} field
   * @param {number} ms
   */
  toggleHighlight(field, ms = 600) {
    field.addClass('moveHighlight')
    setTimeout(function () {
      field.removeClass('moveHighlight')
    }, ms)
  }

  /**
   * Show a message in the snackbar
   * @param {string} msg
   * @param {number} timeout
   */
  showToast(msg, timeout = 3000) {
    if (this.toastTimer != null) {
      window.clearTimeout(this.toastTimer)
      this.toastTimer = null
    }

    this.toastTimer = setTimeout(function () {
      $('.snackbar').removeClass('show')
    }, timeout)

    $('.snackbar').addClass('show').html(msg)
  }

  /**
   * Calculate the 2D distance between two points
   * @param x1
   * @param y1
   * @param x2
   * @param y2
   * @returns {number}
   */
  getDistanceBetweenPoints(x1, y1, x2, y2) {
    const y = x2 - x1
    const x = y2 - y1

    return Math.floor(Math.sqrt(x * x + y * y))
  }

  /**
   * Return full row name (row-1)
   * @param className
   * @returns {string}
   */
  getRowClass(className) {
    if (className) {
      const splitClasses = className.split(' ').filter(x => x.startsWith('row-'))
      if (splitClasses && splitClasses.length > 0) {
        return splitClasses[0]
      }
    }
    return ''
  }

  /**
   * Return the row value i.e row-2 would return '2'
   * @param {string} className
   * @returns {string} Row value as string or '0' for invalid definitions
   */
  getRowValue(className) {
    if (className) {
      const rowClass = this.getRowClass(className)
      if (rowClass) {
        return rowClass.split('-')[1]
      }
    }
    return '0'
  }

  /**
   * Example className of 'row row-1' would be changed for 'row row-4' where 4 is the newValue
   * @deprecated Function is not called anywhere
   */
  changeRowClass(className, newValue) {
    const rowClass = this.getRowClass(className)
    return className.replace(rowClass, `row-${newValue}`)
  }

  /**
   * Return the column size i.e col-md-6 would return 6
   * @param {string} className
   * @return {number} Column value between 1-12 or 0 for invalid definitions
   */
  getBootstrapColumnValue(className) {
    if (className) {
      const bootstrapClass = this.getBootstrapColumnClass(className)
      if (bootstrapClass) {
        return parseInt(bootstrapClass.split('-')[2])
      }
    }
    return 0
  }

  /**
   * Return the prefix (col-md)
   * @param {string} className
   * @returns {string}
   */
  getBootstrapColumnPrefix(className) {
    if (className) {
      const bootstrapClass = this.getBootstrapColumnClass(className)
      if (bootstrapClass) {
        return `${bootstrapClass.split('-')[0]}-${bootstrapClass.split('-')[1]}`
      }
    }
    return ''
  }

  /**
   * Return full class name (col-md-6)
   * @param {string} className
   * @returns {string}
   */
  getBootstrapColumnClass(className) {
    if (className) {
      const splitClasses = className.split(' ').filter(className => bootstrapColumnRegex.test(className))
      if (splitClasses && splitClasses.length > 0) {
        return splitClasses[0]
      }
    }
    return ''
  }

  /**
   * Example className of 'row row-1 col-md-6' would be changed for 'row row-1 col-md-4' where 4 is the newValue
   * @param {string} className
   * @param {number} newValue
   * @returns {string}
   */
  changeBootstrapClass(className, newValue) {
    const boostrapClass = this.getBootstrapColumnClass(className)
    return className.replace(boostrapClass, `${this.getBootstrapColumnPrefix(className)}-${newValue}`)
  }

  /**
   *
   * @param {string} fieldID
   * @param {number} newValue
   */
  syncBootstrapColumnWrapperAndClassProperty(fieldID, newValue) {
    const colWrapper = $(`#${fieldID}-cont`)
    colWrapper.attr('class', this.changeBootstrapClass(colWrapper.attr('class'), newValue))

    const inputClassElement = $(`#className-${fieldID}`)
    if (inputClassElement.val()) {
      inputClassElement.val(this.changeBootstrapClass(inputClassElement.val(), newValue))
    }
  }
}
