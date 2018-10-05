import { instanceDom, empty, optionFieldsRegEx, remove } from './dom'
import { instanceData } from './data'
import utils from './utils'
import events from './events'
import mi18n from 'mi18n'
import { config } from './config'
import control from './control'
import controlCustom from './control/custom'

const m = utils.markup

/**
 * Utilities specific to form-builder.js
 */
export default class Helpers {
  /**
   * Setup defaults, get instance data and dom
   * @param  {String} formId
   * @param {Object} layout object instance used by various helpers
   * @param {Object} formBuilder instance
   */
  constructor(formId, layout, formBuilder) {
    this.data = instanceData[formId]
    this.d = instanceDom[formId]
    this.doCancel = false
    this.layout = layout
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.formBuilder = formBuilder
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
    const opts = config.opts
    const form = _this.d.stage
    const lastIndex = form.childNodes.length - 1
    const cancelArray = []
    _this.stopIndex = ui.placeholder.index() - 1

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
      const $option = $($options[i])
      const selected = $('.option-selected', $option).is(':checked')
      const attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val(),
      }

      if (selected) {
        attrs.selected = selected
      }

      options.push(attrs)
    })

    return options
  }

  /**
   * XML save
   *
   * @param  {Object} form sortableFields node
   * @return {String} xml in string
   */
  xmlSave(form) {
    const formData = this.prepData(form)
    const indent = (width = 1) => Array(width + 1).join('  ')
    const xml = ['<form-template>', `${indent()}<fields>`]

    utils.forEach(formData, function(fieldIndex, field) {
      let fieldContent = null
      const { values, ...fieldData } = field
      const optionFields = optionFieldsRegEx

      // Handle options
      if (field.type.match(optionFields)) {
        fieldContent = `\n${values
          .map(option => indent(4) + m('option', option.label, option).outerHTML)
          .join('\n')}\n${indent(3)}`
      }

      xml.push(indent(3) + m('field', fieldContent, fieldData).outerHTML)
    })

    xml.push(`${indent()}</fields>`, '</form-template>')

    return xml.join('\n')
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

    if (form.childNodes.length !== 0) {
      // build data object
      utils.forEach(form.childNodes, function(index, field) {
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
              if (window.tinymce.editors[id]) {
                const editor = window.tinymce.editors[id]
                fieldData.value = editor.getContent()
              }
            }
          }

          if (roleVals.length) {
            fieldData.role = roleVals.join(',')
          }

          fieldData.className = fieldData.className || fieldData.class

          if (fieldData.className) {
            const match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className)
            if (match) {
              fieldData.style = match[1]
            }
          }

          fieldData = utils.trimObj(fieldData)

          const multipleField = fieldData.type && fieldData.type.match(d.optionFieldsRegEx)

          if (multipleField) {
            fieldData.values = _this.fieldOptionData($field)
          }

          formData.push(fieldData)
        }
      })
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
      formData = config.opts.formData
    }

    if (!formData) {
      return false
    }

    const setData = {
      xml: formData => utils.parseXML(formData),
      json: formData => {
        if (typeof formData === 'string') {
          return window.JSON.parse(formData)
        }
        return formData
      },
    }

    data.formData = setData[config.opts.dataType](formData) || []

    return data.formData
  }

  /**
   * Saves and returns formData
   * @param {Boolean} minify whether to return formatted or minified data
   * @return {XML|JSON} formData
   */
  save(minify) {
    const _this = this
    const data = this.data
    const stage = this.d.stage
    const doSave = {
      xml: minify => _this.xmlSave(stage, minify),
      json: minify => window.JSON.stringify(_this.prepData(stage), null, minify && '  '),
    }

    // save action for current `dataType`
    data.formData = doSave[config.opts.dataType](minify)

    // trigger formSaved event
    document.dispatchEvent(events.formSaved)
    return data.formData
  }

  /**
   * increments the field ids with support for multiple editors
   * @param  {String} id field ID
   * @return {String}    incremented field ID
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
    const fieldData = Object.create(null)
    const attrs = field.querySelectorAll('[class*="fld-"]')
    utils.forEach(attrs, index => {
      const attr = attrs[index]
      const name = utils.camelCase(attr.getAttribute('name'))
      const value = [
        [attr.attributes.contenteditable, () => utils.escapeHtml(attr.innerHTML)],
        [attr.type === 'checkbox', () => attr.checked],
        [attr.attributes.multiple, () => $(attr).val()],
        [true, () => attr.value],
      ].find(([condition]) => !!condition)[1]()
      fieldData[name] = value
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
    let previewData = Object.assign({}, _this.getAttrVals(field, previewData), { type: fieldType })

    const style = $('.btn-style', field).val()
    if (style) {
      previewData.style = style
    }

    if (fieldType.match(d.optionFieldsRegEx)) {
      previewData.values = []
      previewData.multiple = $('[name="multiple"]', field).is(':checked')

      $('.sortable-options li', field).each(function(i, $option) {
        const option = {
          selected: $('.option-selected', $option).is(':checked'),
          value: $('.option-value', $option).val(),
          label: $('.option-label', $option).val(),
        }
        previewData.values.push(option)
      })
    }

    previewData = utils.trimObj(previewData)

    previewData.className = _this.classNames(field, previewData)

    $field.data('fieldData', previewData)

    // determine the control class for this type, and then process it through the layout engine
    const custom = controlCustom.lookup(previewData.type)
    const controlClass = custom ? custom.class : control.getClass(previewData.type, previewData.subtype)
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
    utils.forEach(disabledFields, index => {
      const field = disabledFields[index]
      const title = mi18n.get('fieldNonEditable')

      if (title) {
        const tt = utils.markup('p', title, { className: 'frmb-tt' })
        field.appendChild(tt)
        field.addEventListener('mousemove', e => move(e, { tt, field }))
      }
    })
  }

  /**
   * Process classNames for field
   * @param  {Object} field
   * @param  {Object} previewData
   * @return {String} classNames
   */
  classNames(field, previewData) {
    const className = field.querySelector('.fld-className')
    if (!className) {
      return
    }
    const { type, style } = previewData
    const classes = className.multiple ? $(className).val() : className.value.split(' ')
    const types = {
      button: 'btn',
      submit: 'btn',
    }

    const primaryType = types[type]

    if (primaryType) {
      if (style) {
        for (let i = 0; i < classes.length; i++) {
          const re = new RegExp(`(?:^|\\s)${primaryType}-(.*?)(?:\\s|$)+`, 'g')
          const match = classes[i].match(re)
          if (match) {
            classes.splice(i, 1)
          }
        }
        classes.push(primaryType + '-' + style)
      }
      classes.push(primaryType)
    }

    // reverse the array to put custom classes at end,
    // remove any duplicates, convert to string, remove whitespace
    return utils
      .unique(classes)
      .join(' ')
      .trim()
  }

  /**
   * Closes and open dialog
   *
   * @param  {Object} overlay Existing overlay if there is one
   * @param  {Object} dialog  Existing dialog
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
   * @param {Object} e keydown event object
   * @param {Function} cb callback
   */
  handleKeyDown(e) {
    const keyCode = e.keyCode || e.which
    if (keyCode === 27) {
      e.preventDefault()
      this.closeConfirm.call(this)
    }
  }

  /**
   * Returns the layout data based on controlPosition option
   * @param  {String} controlPosition 'left' or 'right'
   * @return {Object} layout object
   */
  editorLayout(controlPosition) {
    const layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left',
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right',
      },
    }

    return layoutMap[controlPosition] || ''
  }

  /**
   * Adds overlay to the page. Used for modals.
   * @return {Object} DOM Object
   */
  showOverlay() {
    const overlay = utils.markup('div', null, {
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
   * @param  {Func}  yesAction callback to fire if they confirm
   * @param  {Boolean} coords    location to put the dialog
   * @param  {String}  className Custom class to be added to the dialog
   * @return {Object}            Reference to the modal
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

    no.onclick = function() {
      _this.closeConfirm(overlay)
    }

    yes.onclick = function() {
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
   * @param  {String|DOM|Array}  content
   * @param  {Boolean} coords    screen coordinates to position dialog
   * @param  {String}  className classname to be added to the dialog
   * @return {Object}            dom
   */
  dialog(content, coords = false, className = '') {
    const _this = this
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    _this.showOverlay()

    className = 'form-builder-dialog ' + className

    const miniModal = utils.markup('div', content, { className: className })
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
        function() {
          _this.removeAllFields.call(_this, stage)
          config.opts.notify.success(i18n.allFieldsRemoved)
          config.opts.onClearAll()
        },
        coords
      )
    } else {
      _this.dialog(i18n.noFieldsToClear, coords)
    }
  }

  /**
   * Removes all fields from the form
   * @param {Object} stage to remove fields form
   * @param {Boolean} animate whether to animate or not
   * @return {void}
   */
  removeAllFields(stage, animate = true) {
    const i18n = mi18n.current
    const opts = config.opts
    const fields = stage.querySelectorAll('li.form-field')
    const markEmptyArray = []

    if (!fields.length) {
      return false
    }

    if (opts.prepend) {
      markEmptyArray.push(true)
    }

    if (opts.append) {
      markEmptyArray.push(true)
    }

    if (!markEmptyArray.some(elem => elem === true)) {
      stage.classList.add('empty')
      stage.dataset.content = i18n.getStarted
    }

    if (animate) {
      stage.classList.add('removing')
      let outerHeight = 0
      utils.forEach(fields, index => (outerHeight += fields[index].offsetHeight + 3))
      fields[0].style.marginTop = `${-outerHeight}px`
      setTimeout(() => {
        empty(stage).classList.remove('removing')
        this.save()
      }, 400)
    } else {
      empty(stage)
      this.save()
    }
  }

  /**
   * If user re-orders the elements their order should be saved.
   * @param {Object} $cbUL our list of elements
   * @return {Array} fieldOrder
   */
  setFieldOrder($cbUL) {
    if (!config.opts.sortableControls) {
      return false
    }
    const { sessionStorage, JSON } = window

    const fieldOrder = []

    $cbUL.children().each((index, element) => {
      const type = $(element).data('type')
      if (type) {
        fieldOrder.push(type)
      }
    })

    if (sessionStorage) {
      sessionStorage.setItem('fieldOrder', JSON.stringify(fieldOrder))
    }
    return fieldOrder
  }

  /**
   * Reorder the controls if the user has previously ordered them.
   *
   * @param  {Array} controls - an array of control types
   * @return {Array} ordered fields
   */
  orderFields(controls) {
    const opts = config.opts
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
      fieldOrder = utils.unique(controlOrder)
    } else {
      fieldOrder = window.JSON.parse(fieldOrder)
      fieldOrder = utils.unique(fieldOrder.concat(controls))
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
      fieldOrder = fieldOrder.filter(type => opts.disableFields.indexOf(type) == -1)
    }

    return fieldOrder.filter(Boolean)
  }

  /**
   * Close fields being editing
   * @param  {Object} stage
   */
  closeAllEdit() {
    const _this = this
    const fields = $('> li.editing', _this.d.stage)
    const toggleBtns = $('.toggle-form', _this.d.stage)
    const editPanels = $('.frm-holder', fields)

    toggleBtns.removeClass('open')
    fields.removeClass('editing')
    $('.prev-holder', fields).show()
    editPanels.hide()
  }

  /**
   * Toggles the edit mode for the given field
   * @param  {String} fieldId
   * @param  {Boolean} animate
   */
  toggleEdit(fieldId, animate = true) {
    const field = document.getElementById(fieldId)
    const $editPanel = $('.frm-holder', field)
    const $preview = $('.prev-holder', field)
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
    if (field.classList.contains('editing')) {
      this.formBuilder.currentEditPanel = $editPanel[0]
      config.opts.onOpenFieldEdit($editPanel[0])
      document.dispatchEvent(events.fieldEditOpened)
    } else {
      config.opts.onCloseFieldEdit($editPanel[0])
      document.dispatchEvent(events.fieldEditClosed)
    }
  }

  /**
   * Get the computed style for DOM element
   * @param  {Object}  elem     dom element
   * @param  {Boolean} property style eg. width, height, opacity
   * @return {String}           computed style
   */
  getStyle(elem, property = false) {
    let style
    if (window.getComputedStyle) {
      style = window.getComputedStyle(elem, null)
    } else if (elem.currentStyle) {
      style = elem.currentStyle
    }

    return property ? style[property] : style
  }

  /**
   * Controls follow scroll to the bottom of the editor
   */
  stickyControls() {
    const { controls, stage } = this.d
    const $cbWrap = $(controls).parent()
    const cbPosition = controls.getBoundingClientRect()
    const { top: stageTop } = stage.getBoundingClientRect()

    $(window).scroll(function(evt) {
      const scrollTop = $(evt.target).scrollTop()
      const offsetDefaults = {
        top: 5,
        bottom: 'auto',
        right: 'auto',
        left: cbPosition.left,
      }

      const offset = Object.assign({}, offsetDefaults, config.opts.stickyControls.offset)

      if (scrollTop > stageTop) {
        const style = {
          position: 'sticky',
        }

        const cbStyle = Object.assign(style, offset)

        const cbPosition = controls.getBoundingClientRect()
        const stagePosition = stage.getBoundingClientRect()
        const cbBottom = cbPosition.top + cbPosition.height
        const stageBottom = stagePosition.top + stagePosition.height
        const atBottom = cbBottom === stageBottom && cbPosition.top > scrollTop

        if (cbBottom > stageBottom && cbPosition.top !== stagePosition.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto',
          })
        }

        if (cbBottom < stageBottom || atBottom) {
          $cbWrap.css(cbStyle)
        }
      } else {
        controls.parentElement.removeAttribute('style')
      }
    })
  }

  /**
   * Open a dialog with the form's data
   */
  showData() {
    const data = this.data
    const formData = utils.escapeHtml(data.formData)
    const code = m('code', formData, {
      className: `formData-${config.opts.dataType}`,
    })

    this.dialog(m('pre', code), null, 'data-dialog')
  }

  /**
   * Remove a field from the stage
   * @param  {String}  fieldID ID of the field to be removed
   * @param  {Number}  animationSpeed
   * @return {Boolean} fieldRemoved returns true if field is removed
   */
  removeField(fieldID, animationSpeed = 250) {
    let fieldRemoved = false
    const _this = this
    const form = this.d.stage
    const fields = form.getElementsByClassName('form-field')

    if (!fields.length) {
      config.opts.notify.warn('No fields to remove')
      return false
    }

    if (!fieldID) {
      const availableIds = [].slice.call(fields).map(field => {
        return field.id
      })
      config.opts.notify.warn('fieldID required to remove specific fields.')
      config.opts.notify.warn('Removing last field since no ID was supplied.')
      config.opts.notify.warn('Available IDs: ' + availableIds.join(', '))
      fieldID = form.lastChild.id
    }

    const field = document.getElementById(fieldID)
    const $field = $(field)
    if (!field) {
      config.opts.notify.warn('Field not found')
      return false
    }

    $field.slideUp(animationSpeed, function() {
      $field.removeClass('deleting')
      $field.remove()
      fieldRemoved = true
      _this.save()
      if (!form.childNodes.length) {
        form.classList.add('empty')
        form.dataset.content = mi18n.current.getStarted
      }
    })

    document.dispatchEvent(events.fieldRemoved)
    return fieldRemoved
  }

  /**
   * Generate markup for form action buttons
   * @param  {Object} buttonData
   * @return {Object} DOM element for action button
   */
  processActionButtons(buttonData) {
    const { label, events, ...attrs } = buttonData
    let labelText = label
    const data = this.data
    if (!labelText) {
      if (attrs.id) {
        labelText = mi18n.current[attrs.id] || utils.capitalize(attrs.id)
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
    const disabledSubtypes = config.opts.disabledSubtypes
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
      acc[key] = (disabledSubtypes[key] && utils.subtract(disabledSubtypes[key], val)) || val
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
   * @param  {String} formID [description]
   */
  editorUI(formID) {
    const d = this.d
    const data = this.data
    d.stage = m('ul', null, {
      id: data.formID,
      className: `frmb stage-wrap ${data.layout.stage}`,
    })

    // Create draggable fields for formBuilder
    d.controls = m('ul', null, {
      id: `${data.formID}-control-box`,
      className: 'frmb-control',
    })
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
            config.opts.onSave(evt, _this.data.formData)
          },
        },
      },
    ].concat(actionButtons)

    opts.fields = opts.fields.concat(replaceFields)
    opts.disableFields = opts.disableFields.concat(replaceFields.map(({ type }) => type && type))
    config.opts = Object.assign({}, { actionButtons: mergedActionButtons }, { fieldEditContainer }, opts)
    return config.opts
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
   * @param  {String} type
   * @param  {Boolean} formatted
   * @return {Array|String} formData
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

  // end class
}

// export default Helpers;
