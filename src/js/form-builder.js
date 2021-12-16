import '../sass/form-builder.scss'
import throttle from 'lodash/throttle'
import Dom from './dom'
import { remove } from './dom'
import { Data } from './data'
import mi18n from 'mi18n'
import events from './events'
import layout from './layout'
import Helpers from './helpers'
import { defaultOptions, defaultI18n, config, styles } from './config'
import Controls from './controls'
require('jquery-ui')
require('jquery-ui-bundle')


import {
  subtract,
  hyphenCase,
  nameAttr,
  trimObj,
  forEach,
  markup,
  removeFromArray,
  attrString,
  capitalize,
  parsedHtml,
  addEventListeners,
  closest,
  safename,
  forceNumber,
  getContentType,
} from './utils'
import { css_prefix_text } from '../fonts/config.json'

const DEFAULT_TIMEOUT = 333

const FormBuilder = function (opts, element, $) {
  const formBuilder = this
  const i18n = mi18n.current
  const formID = `frmb-${new Date().getTime()}`
  const data = new Data(formID)
  const d = new Dom(formID)

  // prepare a new layout object with appropriate templates
  if (!opts.layout) {
    opts.layout = layout
  }
  const layoutEngine = new opts.layout(opts.layoutTemplates, true)

  const h = new Helpers(formID, layoutEngine, formBuilder)
  const m = markup
  opts = h.processOptions(opts)
  data.layout = h.editorLayout(opts.controlPosition)
  h.editorUI(formID)
  data.formID = formID
  data.lastID = `${data.formID}-fld-0`
  const controls = new Controls(opts, d)

  const subtypes = (config.subtypes = h.processSubtypes(opts.subtypes))

  const $stage = $(d.stage)
  const $cbUL = $(d.controls) 

  // Sortable fields
  /*$stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
    start: (evt, ui) => h.startMoving.call(h, evt, ui),
    stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
    cancel: ['input', 'select', 'textarea', '.disabled-field', '.form-elements', '.btn', 'button', '.is-locked'].join(
      ', ',
    ),
    placeholder: 'frmb-placeholder',
  })*/

  if (!opts.allowStageSort) {
    $stage.sortable('disable')
  }

  if( opts.propertiesInModal){
    $(document.body).append(m('div', '<div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="myModalLabel">Form Builder</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"></div></div></div>', {
      'class':'modal fade',
      'id': 'propertiesModal',
      'tabindex':'-1',
      'role':'dialog'
    }))
  }

  const $modal = $('#propertiesModal')
  let selectedPropertiesId = null
  let hoveredItems = []
  // ControlBox with different fields
  $cbUL.sortable({
    helper: function(e,elt) {
      const type = $(elt).attr('data-type')
      const helper = m('div', '<span>' + $(elt).find('span')[0].innerHTML + '</span>', {
        'class':`formbuilder-icon-${type} input-control formbuilder-icon-dragged`,
        'data-type': type
      })
      $(helper).css({'width': '200px', 'height': '35px'})
      return helper
    },
    opacity: 0.9,
    connectWith: $stage,
    cancel: '.formbuilder-separator',
    cursor: 'move',
    cursorAt: { 
      left: 5,
      top : 5
    },
    tolerance:'intersect',
    scroll: false,
    placeholder: 'ui-state-highlight',
    refreshPositions: true,
    start: (evt, ui) => h.startMoving.call(h, evt, ui),
    stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
    revert: 150,
    //beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
  })

  const processControl = control => {
    if (control[0].classList.contains('input-set-control')) {
      const inputSets = []
      const inputSet = opts.inputSets.find(set => hyphenCase(set.name || set.label) === control[0].dataset.type)
      if (inputSet && inputSet.showHeader) {
        const header = {
          type: 'header',
          subtype: 'h2',
          id: inputSet.name,
          label: inputSet.label,
        }
        inputSets.push([header])
      }

      inputSets.push(...inputSet.fields)
      inputSets.forEach((row, index) => {
        let newRow = true
        row.forEach((fieldData, i) => {
          prepFieldVars(trimObj(fieldData), true,newRow)
          newRow = false
        })
      })
    } else {
      prepFieldVars(control, true)
    }
  }

  const $editorWrap = $(d.editorWrap)
  const cbWrap = m('div', d.controls, {
    id: `${data.formID}-cb-wrap`,
    className: `cb-wrap ${data.layout.controls}`,
  })

  if (opts.showActionButtons) {
    cbWrap.appendChild(d.formActions)
  }

  $editorWrap.append(d.stage, cbWrap)

  if (element.type !== 'textarea') {
    $(element).append($editorWrap)
  } else {
    // formBuilder no longer uses textArea for element
    $(element).replaceWith($editorWrap)
  }

  $(d.controls).on('click', 'li', ({ target }) => {
    const $control = $(target).closest('li')
    h.stopIndex = undefined
    processControl($control)
    h.save.call(h)
  })

  // Add append and prepend options if necessary
  const nonEditableFields = () => {
    const cancelArray = []
    const disabledField = type =>
      m('li', opts[type], {
        className: `disabled-field form-${type}`,
      })

    if (opts.prepend && !$('.disabled-field.form-prepend', d.stage).length) {
      cancelArray.push(true)
      $stage.prepend(disabledField('prepend'))
    }

    if (opts.append && !$('.disabled-field.form-.append', d.stage).length) {
      cancelArray.push(true)
      $stage.append(disabledField('append'))
    }

    h.disabledTT(d.stage)
    return cancelArray.some(elem => elem === true)
  }

  // builds the standard formbuilder datastructure for a field definition
  const prepFieldVars = ($field, isNew = false,newRow = true) => {

    const field = populateFieldVars($field, isNew)
    if (isNew) {
      const eventTimeout = setTimeout(() => {
        document.dispatchEvent(events.fieldAdded)
        clearTimeout(eventTimeout)
      }, 10)
    }

    opts.onAddField(data.lastID, field)
    appendNewField(field, isNew,newRow)
    opts.onAddFieldAfter(data.lastID, field)
    resetDropAreas() //don't change the order
    updateColumns()
    d.stage.classList.remove('empty')
  }
  
  formBuilder.prepFieldVars = prepFieldVars

  const populateFieldVars = function($field, isNew = false){
    let field = {}
    if ($field instanceof jQuery) {
      // get the default type etc & label for this field
      field.type = $field[0].dataset.type
      if (field.type) {
        // check for a custom type
        const custom = controls.custom.lookup(field.type)
        if (custom) {
          field = Object.assign({}, custom)
        } else {
          const controlClass = controls.getClass(field.type)
          field.label = controlClass.label(field.type)
        }

        // @todo: any other attrs ever set in aFields? value or selected?
      } else {
        // is dataType XML
        const attrs = $field[0].attributes
        if (!isNew) {
          field.values = $field.children().map((index, elem) => {
            return {
              label: $(elem).text(),
              value: $(elem).attr('value'),
              selected: Boolean($(elem).attr('selected')),
            }
          })
        }

        for (let i = attrs.length - 1; i >= 0; i--) {
          field[attrs[i].name] = attrs[i].value
        }
      }
    } else {
      field = Object.assign({}, $field)
    }

    if (!field.name) {
      field.name = nameAttr(field)
    }

    if (isNew && ['text', 'number', 'file', 'date', 'select', 'textarea', 'autocomplete'].includes(field.type)) {
      field.className = field.className || 'form-control'
    }

    const match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className)
    if (match) {
      field.style = match[1]
    }
    return field
  }

  // Parse saved XML template data
  const loadFields = function (formData) {
    formData = h.getData(formData)
    if (formData && formData.length) {
      formData.forEach((row, index) => {
        let newRow = true
        row.forEach((fieldData, i) => {
          fieldData = trimObj(fieldData)
          let className = fieldData.className
          className = className.replace(/(^|\s)row-\S+/g, '')
          className = className.replace(/(^|\s)col-md-\S+/g, '')
          fieldData.className = className
          prepFieldVars(fieldData, true,newRow)
          newRow = false
        })
      })
      d.stage.classList.remove('empty')
    } else if (opts.defaultFields && opts.defaultFields.length) {
      h.addDefaultFields()
    } else if (!opts.prepend && !opts.append) {
      d.stage.dataset.content = mi18n.get('getStarted')
    }

    if (nonEditableFields()) {
      d.stage.classList.remove('empty')
    }
    resetDropAreas() //don't change the order
    updateColumns()
    h.save()
  }

  /**
   * Add data for field with options [select, checkbox-group, radio-group]
   *
   * @param  {Object} fieldData
   * @return {String} field options markup
   */
  const fieldOptions = function (fieldData) {
    const { type, values } = fieldData
    let fieldValues
    const optionActions = [m('a', mi18n.get('addOption'), { className: 'add add-opt' })]
    const fieldOptions = [m('label', mi18n.get('selectOptions'), { className: 'false-label' })]
    const isMultiple = fieldData.multiple || type === 'checkbox-group'
    const optionDataTemplate = count => {
      const label = mi18n.get('optionCount', count)
      return {
        selected: false,
        label,
        value: hyphenCase(label),
      }
    }

    if (!values || !values.length) {
      let defaultOptCount = [1, 2, 3]
      if (['checkbox-group', 'checkbox'].includes(type)) {
        defaultOptCount = [1]
      }
      fieldValues = defaultOptCount.map(optionDataTemplate)

      const firstOption = fieldValues[0]
      if (firstOption.hasOwnProperty('selected') && type !== 'radio-group') {
        firstOption.selected = true
      }
    } else {
      // ensure option data is has all required keys
      fieldValues = values.map(option => Object.assign({}, { selected: false }, option))
    }

    const optionActionsWrap = m('div', optionActions, { className: 'option-actions' })
    const options = m(
      'ol',
      fieldValues.map((option, index) => {
        const optionData = config.opts.onAddOption(option, { type, index, isMultiple })
        return selectFieldOptions(optionData, isMultiple)
      }),
      {
        className: 'sortable-options',
      },
    )
    const optionsWrap = m('div', [options, optionActionsWrap], { className: 'sortable-options-wrap' })

    fieldOptions.push(optionsWrap)

    return m('div', fieldOptions, { className: 'form-group field-options' }).outerHTML
  }

  const defaultFieldAttrs = type => {
    const defaultAttrs = ['required', 'label', 'description', 'placeholder', 'className', 'name', 'access', 'value']
    const noValFields = ['header', 'paragraph', 'file', 'autocomplete'].concat(d.optionFields)

    const valueField = !noValFields.includes(type)

    const typeAttrsMap = {
      autocomplete: defaultAttrs.concat(['options', 'requireValidOption']),
      button: ['label', 'subtype', 'style', 'className', 'name', 'value', 'access'],
      checkbox: [
        'required',
        'label',
        'description',
        'toggle',
        'inline',
        'className',
        'name',
        'access',
        'other',
        'options',
      ],
      text: defaultAttrs.concat(['subtype', 'maxlength']),
      date: defaultAttrs,
      file: defaultAttrs.concat(['subtype', 'multiple']),
      header: ['label', 'subtype', 'className', 'access'],
      hidden: ['name', 'value', 'access'],
      paragraph: ['label', 'subtype', 'className', 'access'],
      number: defaultAttrs.concat(['min', 'max', 'step']),
      select: defaultAttrs.concat(['multiple', 'options']),
      textarea: defaultAttrs.concat(['subtype', 'maxlength', 'rows']),
    }

    if (type in controls.registeredSubtypes && !(type in typeAttrsMap)) {
      typeAttrsMap[type] = defaultAttrs.concat(['subtype'])
    }

    typeAttrsMap['checkbox-group'] = typeAttrsMap.checkbox
    typeAttrsMap['radio-group'] = typeAttrsMap.checkbox

    const typeAttrs = typeAttrsMap[type]

    if (type === 'radio-group') {
      removeFromArray('toggle', typeAttrs)
    }

    // Help Text / Description Field
    if (['header', 'paragraph', 'button'].includes(type)) {
      removeFromArray('description', typeAttrs)
    }

    if (!valueField) {
      removeFromArray('value', typeAttrs)
    }

    return typeAttrs || defaultAttrs
  }

  /**
   * Build the editable properties for the field
   * @param  {object} values configuration object for advanced fields
   * @return {String}        markup for advanced fields
   */
  const advFields = values => {
    const { type } = values
    const advFields = []
    const typeClass = controls.getClass(type)
    const fieldAttrs = defaultFieldAttrs(type)
    const advFieldMap = {
      required: () => requiredField(values),
      toggle: () => boolAttribute('toggle', values, { first: mi18n.get('toggle') }),
      inline: () => {
        const labels = {
          first: mi18n.get('inline'),
          second: mi18n.get('inlineDesc', type.replace('-group', '')),
        }

        return boolAttribute('inline', values, labels)
      },
      label: () => textAttribute('label', values),
      description: () => textAttribute('description', values),
      subtype: () => selectAttribute('subtype', values, subtypes[type]),
      style: () => btnStyles(values.style),
      placeholder: () => textAttribute('placeholder', values),
      rows: () => numberAttribute('rows', values),
      className: isHidden => textAttribute('className', values, isHidden),
      name: isHidden => textAttribute('name', values, isHidden),
      value: () => textAttribute('value', values),
      maxlength: () => numberAttribute('maxlength', values),
      access: () => {
        const rolesDisplay = values.role ? 'style="display:block"' : ''
        const availableRoles = [`<div class="available-roles" ${rolesDisplay}>`]
        for (key in opts.roles) {
          if (opts.roles.hasOwnProperty(key)) {
            const roleId = `fld-${data.lastID}-roles-${key}`
            const cbAttrs = {
              type: 'checkbox',
              name: 'roles[]',
              value: key,
              id: roleId,
              className: 'roles-field',
            }
            if (roles.includes(key)) {
              cbAttrs.checked = 'checked'
            }

            availableRoles.push(`<label for="${roleId}">`)
            availableRoles.push(h.input(cbAttrs).outerHTML)
            availableRoles.push(` ${opts.roles[key]}</label>`)
          }
        }
        availableRoles.push('</div>')
        const accessLabels = {
          first: mi18n.get('roles'),
          second: mi18n.get('limitRole'),
          content: availableRoles.join(''),
        }

        return boolAttribute('access', values, accessLabels)
      },
      other: () =>
        boolAttribute('other', values, {
          first: mi18n.get('enableOther'),
          second: mi18n.get('enableOtherMsg'),
        }),
      options: () => fieldOptions(values),
      requireValidOption: () =>
        boolAttribute('requireValidOption', values, {
          first: ' ',
          second: mi18n.get('requireValidOption'),
        }),
      multiple: () => {
        const typeLabels = {
          default: {
            first: 'Multiple',
            second: 'set multiple attribute',
          },
          file: {
            first: mi18n.get('multipleFiles'),
            second: mi18n.get('allowMultipleFiles'),
          },
          select: {
            first: ' ',
            second: mi18n.get('selectionsMessage'),
          },
        }
        return boolAttribute('multiple', values, typeLabels[type] || typeLabels.default)
      },
    }
    let key
    const roles = values.role !== undefined ? values.role.split(',') : []
    const numAttrs = ['min', 'max', 'step']

    numAttrs.forEach(numAttr => {
      advFieldMap[numAttr] = () => numberAttribute(numAttr, values)
    })

    const noDisable = ['name', 'className']

    Object.keys(fieldAttrs).forEach(index => {
      const attr = fieldAttrs[index]
      const useDefaultAttr = [true]
      const isDisabled = opts.disabledAttrs.includes(attr)

      if (opts.typeUserDisabledAttrs[type]) {
        const typeDisabledAttrs = opts.typeUserDisabledAttrs[type]
        useDefaultAttr.push(!typeDisabledAttrs.includes(attr))
      }

      if (typeClass.definition.hasOwnProperty('defaultAttrs')) {
        const userAttrs = Object.keys(typeClass.definition.defaultAttrs)
        useDefaultAttr.push(!userAttrs.includes(attr))
      }

      if (opts.typeUserAttrs[type]) {
        const userAttrs = Object.keys(opts.typeUserAttrs[type])
        useDefaultAttr.push(!userAttrs.includes(attr))
      }

      if (isDisabled && !noDisable.includes(attr)) {
        useDefaultAttr.push(false)
      }

      if (useDefaultAttr.every(Boolean)) {
        advFields.push(advFieldMap[attr](isDisabled))
      }
    })

    // Append custom attributes as defined in control plugin definition
    if (typeClass.definition.hasOwnProperty('defaultAttrs')) {
      const customAttr = processTypeUserAttrs(typeClass.definition.defaultAttrs, values)
      advFields.push(customAttr)
    }

    // Append custom attributes as defined in typeUserAttrs option
    if (opts.typeUserAttrs[type]) {
      const customAttr = processTypeUserAttrs(opts.typeUserAttrs[type], values)
      advFields.push(customAttr)
    }

    return advFields.join('')
  }

  /**
   * Detects the type of user defined attribute
   * @param {Object} attrData attribute config
   * @return {String} type of user attr
   */
  function userAttrType(attrData) {
    return (
      [
        ['array', ({ options }) => !!options],
        ['boolean', ({ type }) => type === 'checkbox'], // automatic bool if checkbox
        [typeof attrData.value, () => true], // string, number,
      ].find(typeCondition => typeCondition[1](attrData))[0] || 'string'
    )
  }

  /**
   *
   * @param {Object} values    field attributes
   * @param {String} subType   subType
   * @return {Boolean}         indicates whether or not the field has a subtype
   */
  function hasSubType(values, subType) {
    return values.subtype && values.subtype === subType
  }

  /**
   * Processes typeUserAttrs
   * @param  {Object} typeUserAttr option
   * @param  {Object} values       field attributes
   * @return {String}              markup for custom user attributes
   */
  function processTypeUserAttrs(typeUserAttr, values) {
    const advField = []
    const attrTypeMap = {
      array: selectUserAttrs,
      string: inputUserAttrs,
      number: numberAttribute,
      boolean: (attr, attrData) => {
        let isChecked = false
        if (attr.type === 'checkbox') {
          isChecked = Boolean(attrData.hasOwnProperty('value') ? attrData.value : false)
        } else if (values.hasOwnProperty(attr)) {
          isChecked = values[attr]
        } else if (attrData.hasOwnProperty('value') || attrData.hasOwnProperty('checked')) {
          isChecked = attrData.value || attrData.checked || false
        }
        return boolAttribute(attr, { ...attrData, [attr]: isChecked }, { first: attrData.label })
      },
    }

    for (const attribute in typeUserAttr) {
      if (typeUserAttr.hasOwnProperty(attribute)) {
        const attrValType = userAttrType(typeUserAttr[attribute])
        if (attrValType !== 'undefined') {
          const orig = mi18n.get(attribute)
          const tUA = typeUserAttr[attribute]
          const origValue = tUA.value || ''
          tUA.value = values[attribute] || tUA.value || ''

          if (tUA.label) {
            i18n[attribute] = Array.isArray(tUA.label) ? mi18n.get(...tUA.label) || tUA.label[0] : tUA.label
          }

          if (attrTypeMap[attrValType]) {
            advField.push(attrTypeMap[attrValType](attribute, tUA))
          }

          i18n[attribute] = orig
          tUA.value = origValue
        } else if (attrValType === 'undefined' && hasSubType(values, attribute)) {
          advField.push(processTypeUserAttrs(typeUserAttr[attribute], values))
        } else {
          continue
        }
      }
    }

    return advField.join('')
  }

  /**
   * Text input value for attribute
   * @param  {String} name
   * @param  {Object} inputAttrs also known as values
   * @return {String}       input markup
   */
  function inputUserAttrs(name, inputAttrs) {
    const { class: classname, className, ...attrs } = inputAttrs
    let textAttrs = {
      id: name + '-' + data.lastID,
      title: attrs.description || attrs.label || name.toUpperCase(),
      name: name,
      type: attrs.type || 'text',
      className: [`fld-${name}`, (classname || className || '').trim()],
      value: attrs.value || '',
    }
    const label = `<label for="${textAttrs.id}">${i18n[name] || ''}</label>`

    const optionInputs = ['checkbox', 'checkbox-group', 'radio-group']
    if (!optionInputs.includes(textAttrs.type)) {
      textAttrs.className.push('form-control')
    }

    textAttrs = Object.assign({}, attrs, textAttrs)

    const textInput = (() => {
      if (textAttrs.type === 'textarea') {
        const textValue = textAttrs.value
        delete textAttrs.value
        return `<textarea ${attrString(textAttrs)}>${textValue}</textarea>`
      } else {
        return `<input ${attrString(textAttrs)}>`
      }
    })()

    const inputWrap = `<div class="input-wrap">${textInput}</div>`
    return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`
  }

  /**
   * Select input for multiple choice user attributes
   * @todo  replace with selectAttr
   * @param  {String} name
   * @param  {Object} fieldData
   * @return {String}         select markup
   */
  function selectUserAttrs(name, fieldData) {
    const { multiple, options, label: labelText, value, class: classname, className, ...restData } = fieldData
    const optis = Object.keys(options).map(val => {
      const attrs = { value: val }
      const optionTextVal = options[val]
      const optionText = Array.isArray(optionTextVal) ? mi18n.get(...optionTextVal) || optionTextVal[0] : optionTextVal
      if (Array.isArray(value) ? value.includes(val) : val === value) {
        attrs.selected = null
      }

      return m('option', optionText, attrs)
    })

    const selectAttrs = {
      id: `${name}-${data.lastID}`,
      title: restData.description || labelText || name.toUpperCase(),
      name,
      className: `fld-${name} form-control ${classname || className || ''}`.trim(),
    }

    if (multiple) {
      selectAttrs.multiple = true
    }

    const label = `<label for="${selectAttrs.id}">${i18n[name]}</label>`

    Object.keys(restData).forEach(function (attr) {
      selectAttrs[attr] = restData[attr]
    })

    const select = m('select', optis, selectAttrs).outerHTML
    const inputWrap = `<div class="input-wrap">${select}</div>`
    return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`
  }

  const boolAttribute = (name, values, labels = {}) => {
    const label = txt =>
      m('label', txt, {
        for: `${name}-${data.lastID}`,
      }).outerHTML
    const cbAttrs = {
      type: 'checkbox',
      className: `fld-${name}`,
      name,
      id: `${name}-${data.lastID}`,
    }
    if (values[name]) {
      cbAttrs.checked = true
    }
    const left = []
    let right = [m('input', null, cbAttrs).outerHTML]

    if (labels.first) {
      left.push(label(labels.first))
    }

    if (labels.second) {
      right.push(' ', label(labels.second))
    }
    if (labels.content) {
      right.push(labels.content)
    }

    right = m('div', right, { className: 'input-wrap' }).outerHTML

    return m('div', left.concat(right), {
      className: `form-group ${name}-wrap`,
    }).outerHTML
  }

  const btnStyles = style => {
    let styleField = ''

    // corrects issue where 'undefined' was saved to formData
    if (style === 'undefined') {
      style = 'default'
    }

    const styleLabel = `<label>${i18n.style}</label>`
    styleField += h.input({
      value: style || 'default',
      type: 'hidden',
      className: 'btn-style',
    }).outerHTML
    styleField += '<div class="btn-group" role="group">'

    styles.btn.forEach(btnStyle => {
      const classList = ['btn-xs', 'btn', `btn-${btnStyle}`]
      if (style === btnStyle) {
        classList.push('selected')
      }
      const btn = m('button', mi18n.get(`styles.btn.${btnStyle}`), {
        value: btnStyle,
        type: 'button',
        className: classList.join(' '),
      }).outerHTML

      styleField += btn
    })

    styleField += '</div>'

    styleField = m('div', [styleLabel, styleField], {
      className: 'form-group style-wrap',
    })

    return styleField.outerHTML
  }

  /**
   * Add a number attribute to a field.
   * @param  {String} attribute
   * @param  {Object} values
   * @return {String} markup for number attribute
   */
  const numberAttribute = (attribute, values) => {
    const { class: classname, className, value, ...attrs } = values
    const attrVal = attrs[attribute] || value
    const attrLabel = mi18n.get(attribute) || attribute
    const placeholder = mi18n.get(`placeholder.${attribute}`)

    const inputConfig = {
      type: 'number',
      value: attrVal,
      name: attribute,
      placeholder,
      className: `fld-${attribute} form-control ${classname || className || ''}`.trim(),
      id: `${attribute}-${data.lastID}`,
    }
    const numberAttribute = h.input(trimObj(inputConfig)).outerHTML
    const inputWrap = `<div class="input-wrap">${numberAttribute}</div>`
    const inputLabel = `<label for="${inputConfig.id}">${attrLabel}</label>`

    return m('div', [inputLabel, inputWrap], {
      className: `form-group ${attribute}-wrap`,
    }).outerHTML
  }

  /**
   * selectAttribute
   * @param  {String} attribute  attribute name
   * @param  {Object} values     aka attrs
   * @param  {Array} optionData  select field option data
   * @return {String}            select input makrup
   */
  const selectAttribute = (attribute, values, optionData) => {
    const selectOptions = optionData.map((option, i) => {
      let optionAttrs = Object.assign(
        {
          label: `${i18n.option} ${i}`,
          value: undefined,
        },
        option,
      )
      if (option.value === values[attribute]) {
        optionAttrs.selected = true
      }
      optionAttrs = trimObj(optionAttrs)
      return m('option', optionAttrs.label, optionAttrs)
    })
    const selectAttrs = {
      id: attribute + '-' + data.lastID,
      name: attribute,
      className: `fld-${attribute} form-control`,
    }
    const labelText = mi18n.get(attribute) || capitalize(attribute) || ''
    const label = m('label', labelText, { for: selectAttrs.id })
    const select = m('select', selectOptions, selectAttrs)
    const inputWrap = m('div', select, { className: 'input-wrap' })
    const attrWrap = m('div', [label, inputWrap], {
      className: `form-group ${selectAttrs.name}-wrap`,
    })

    return attrWrap.outerHTML
  }

  /**
   * Generate some text inputs for field attributes, **will be replaced**
   * @param  {String} attribute
   * @param  {Object} values
   * @param  {Boolean} isHidden
   * @return {String}
   */
  const textAttribute = (attribute, values, isHidden = false) => {
    const textArea = ['paragraph']

    let attrVal = values[attribute] || ''
    let attrLabel = mi18n.get(attribute)

    if (attribute === 'label') {
      if (textArea.includes(values.type)) {
        attrLabel = mi18n.get('content')
      } else {
        attrVal = parsedHtml(attrVal)
      }
    }

    const placeholder = mi18n.get(`placeholders.${attribute}`) || ''
    let attributefield = ''
    const noMakeAttr = []

    if (!noMakeAttr.some(elem => elem === true)) {
      const inputConfig = {
        name: attribute,
        placeholder,
        className: `fld-${attribute} form-control`,
        id: `${attribute}-${data.lastID}`,
      }
      const attributeLabel = m('label', attrLabel, {
        for: inputConfig.id,
      }).outerHTML

      if (attribute === 'label' && !opts.disableHTMLLabels) {
        inputConfig.contenteditable = true
        attributefield += m('div', attrVal, inputConfig).outerHTML
      } else {
        inputConfig.value = attrVal
        inputConfig.type = 'text'
        attributefield += `<input ${attrString(inputConfig)}>`
      }

      const inputWrap = `<div class="input-wrap">${attributefield}</div>`

      let visibility = isHidden ? 'none' : 'block'
      if (attribute === 'value') {
        visibility = values.subtype && values.subtype === 'quill' && 'none'
      }

      attributefield = m('div', [attributeLabel, inputWrap], {
        className: `form-group ${attribute}-wrap`,
        style: `display: ${visibility}`,
      })
    }

    return attributefield.outerHTML
  }

  const requiredField = fieldData => {
    const { type } = fieldData
    const noRequire = ['header', 'paragraph', 'button']
    const noMake = []
    let requireField = ''

    if (noRequire.includes(type)) {
      noMake.push(true)
    }
    if (!noMake.some(elem => elem === true)) {
      requireField = boolAttribute('required', fieldData, {
        first: mi18n.get('required'),
      })
    }

    return requireField
  }
  const appendNewField = function(values, isNew = true,newRow = true) {

    const rowWrapper = createNewField(values, isNew,newRow)
    const $rowWrapper = $(rowWrapper)
    const field = $rowWrapper.find('.form-field.fb-row')[0]
    if( newRow ){
      if (typeof h.stopIndex !== 'undefined') {
        $('> .fb-fields-children', d.stage).eq(h.stopIndex).before(rowWrapper)
      } else {
        $stage.append(rowWrapper)
      }
    }
    const type = values.type || 'text'
    triggerEvents(isNew, field, type)
    return $rowWrapper
  }


  
  // Append the new field to the editor
  const createNewField = function (values, isNew = true,newRow = true) {

    data.lastID = h.incrementId(data.lastID)

    const type = values.type || 'text'
    let label = undefined
    if (type === 'hidden') {
      label = `${mi18n.get(type)}: ${values.name}`
    }
    else{
      label = values.label || (isNew ? i18n.get(type) || mi18n.get('label') : '')
    }
   
    const disabledFieldButtons = opts.disabledFieldButtons[type] || values.disabledFieldButtons
    let fieldButtons = [
      m('a', null, {
        type: 'remove',
        id: 'del_' + data.lastID,
        className: `del-button btn ${css_prefix_text}cancel delete-confirm`,
        title: mi18n.get('removeMessage'),
      }),
      m('a', null, {
        type: 'edit',
        id: data.lastID + '-edit',
        className: `toggle-form btn ${css_prefix_text}pencil`,
        title: mi18n.get('hide'),
      }),
      m('a', null, {
        type: 'copy',
        id: data.lastID + '-copy',
        className: `copy-button btn ${css_prefix_text}copy`,
        title: mi18n.get('copyButtonTooltip'),
      }),
    ]

    if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) {
      fieldButtons = fieldButtons.filter(btnData => !disabledFieldButtons.includes(btnData.type))
    }

    const fieldContents = [m('div', fieldButtons, { className: 'field-actions' })]

    fieldContents.push(
      m('label', parsedHtml(label), {
        className: 'field-label',
      }),
    )

    fieldContents.push(
      m('span', ' *', {
        className: 'required-asterisk',
        style: values.required ? 'display:inline' : '',
      }),
    )

    // add the help icon
    const descAttrs = {
      className: 'tooltip-element',
      tooltip: values.description,
      style: values.description ? 'display:inline-block' : 'display:none',
    }
    fieldContents.push(m('span', '?', descAttrs))
    let formElements
    fieldContents.push(m('div', '', { className: 'prev-holder' }))
    if( !opts.propertiesInModal ){
      formElements = m('div', [advFields(values), m('a', mi18n.get('close'), { className: 'close-field' })], {
        className: 'form-elements',
      })
    }
    else{
      formElements = m('div', [advFields(values), ''], {
        className: 'form-elements',
      })
    }

    const editPanel = m('div', formElements, {
      id: `${data.lastID}-holder`,
      className: 'frm-holder',
      dataFieldId: data.lastID,
    })

    formBuilder.currentEditPanel = editPanel
    fieldContents.push(editPanel)

    const fieldBlock = m('div', fieldContents, {
      class: `${type}-field fb-field-wrapper`,
      type: type,
      id: data.lastID,
    })

    const colItems = []
    const dropZoneLeft = h.generateDropZones(true)
    const dropZoneRight = h.generateDropZones(true)
    colItems.push( dropZoneLeft )
    colItems.push( fieldBlock )
    colItems.push( dropZoneRight )
    makeDroppable($(dropZoneLeft))
    makeDroppable($(dropZoneRight))

    const column = m('div', colItems, {
      class: 'fb-field-col-12 fb-field-draggable',
      type: type,
      id: data.lastID,
      style:'display:flex'
    })

    //New Row creation
    let rowWrapper = {}
    if( newRow ){
      rowWrapper = createNewRow(true, column,data.lastID,type, values)
    }
    else{
      $('.fb-fields-children').last().find('.fb-row').append(column)
      rowWrapper = $('.fb-fields-children').last()
      $(column).data('fieldData', { attrs: values })
      h.updatePreview($(column))
    }
    return rowWrapper
  }
  const createNewRow = function(isNew,content, dataId, type, values){
    const firstRow = $('.fb-row').length
    const rowItems = []
    const dropZoneAbove = h.generateDropZones(false,firstRow)
    const dropZoneBelow = h.generateDropZones(false)
    makeDroppable($(dropZoneAbove))
    makeDroppable($(dropZoneBelow))

    const row = m('div', content, {class: 'form-field fb-row no-padding',type: type})
    rowItems.push( dropZoneAbove )
    rowItems.push( row )
    rowItems.push( dropZoneBelow )

    const rowWrapper = m('div', rowItems, {class: 'fb-fields-children'})
    $(content).data('fieldData', { attrs: values })
    
    // generate the control, insert it into the list item & add it to the stage
    if( isNew ){
      h.updatePreview($(content))
    }
    const $rowWrapper = $(rowWrapper)
    return $rowWrapper
  }

  const drop = function(ev, ui){
    hoveredItems = []
    if( $(ev.target).is('.hover-selected') ){
      $(ev.target).removeClass('hover-selected')
      const $dropContainer = $(ev.target)
      const $dragContainer = $(ui.draggable)
      let $dragElement = undefined
      let isNew = false
      if ( $dropContainer.is('.fb-drop-target')){
        const $row = $dropContainer.parents('.fb-row')
        if( $row.find('.fb-field-draggable').length >= opts.maxFieldsInRow ){
          if( !$dragContainer.is('.fb-field-draggable') ){
            opts.notify.error('Error: ' + mi18n.get('maxFieldsInRow', opts.maxFieldsInRow) )
            return
          }
          else{
            if( !$dragContainer.parents('.fb-row').is($row) ){
              opts.notify.error('Error: ' + mi18n.get('maxFieldsInRow', opts.maxFieldsInRow) )
              return
            }
          }
        }
      }

      if( $dragContainer.is('.fb-field-draggable')){
        if( $dropContainer.is('.fb-drop-target-wrapper')){
          $dragElement = $(createNewRow(false,$dragContainer[0],$dragContainer.id,$dragContainer.attr('type'),$dragContainer.data('fieldData')))
        }
        else if ( $dropContainer.is('.fb-drop-target')){
          $dragElement = $dragContainer
        }
      }
      else if ($dragContainer.is('.input-control')){
        isNew = true
        const $control = $(ui.draggable)
        const values = populateFieldVars($control, true)
        $dragElement = $(createNewField(values, false))
        if( $dropContainer.is('.fb-drop-target')){
          $dragElement = $dragElement.find('.fb-field-draggable')[0]
        }
      }

        //Existing object
      if( $dropContainer.is('.fb-drop-target-wrapper') || $dropContainer.is('.fb-dropzone-new-field')){
        //Row Insertion
        const $droppedParent = $dropContainer.parent()
        const droppedIndex = $droppedParent.index()
        if( $dropContainer.is('.fb-drop-target-wrapper') ){
          if( $dropContainer.index() == 0 ){
            $('> .fb-fields-children', d.stage).eq(droppedIndex).before($dragElement)
          }
          else{
            $('> .fb-fields-children', d.stage).eq(droppedIndex).after($dragElement)
          }
        }
        else{
          $(d.stage).append($dragElement)
        }
      }
      else if ( $dropContainer.is('.fb-drop-target')){
        //Column Insertion
        const $droppedParent = $dropContainer.parents('.fb-row')
        const droppedIndex = $dropContainer.parent().index()
        if( $dropContainer.index() == 0){
          $('> .fb-field-draggable', $droppedParent).eq(droppedIndex).before($dragElement)
        }
        else{
          $('> .fb-field-draggable', $droppedParent).eq(droppedIndex).after($dragElement)
        }
      }
      resetDropAreas(ui) //don't change the order
      updateColumns()
    }
  }

  const updateColumns = function(){
    $('.fb-row').each((i,row) => {
      const cols = Math.round(12 / ($(row).find('.fb-field-draggable').length))
      
      $(row).find('.fb-field-draggable').each((i,col) => {
        $(col).removeClass (function (index, css) {
          return (css.match (/(^|\s)fb-field-col-\S+/g) || []).join(' ')
        })
       $(col).addClass(`fb-field-col-${cols}`)
      })

      if( $(row).find('.fb-field-draggable').length >= opts.maxFieldsInRow && opts.hideDropZones){
        $(row).find('.fb-drop-target').css('display','none')
      }
    })

    $('.fb-field-draggable:not(.ui-draggable)').draggable({ 
      revert: false,
      zIndex: 100,
      helper: function(e) {
        const type = $(this).attr('type')
        return m('div', '<span>' + $(this).find('.field-label')[0].innerHTML + '</span>', {
          'class':`formbuilder-icon-${type} input-control input-control-9 formbuilder-icon-dragged`,
          'data-type': type
        })
      },
      stack: '.formbuilder-icon-dragged',
      cursorAt: { 
        left: 5,
        top : 5
      },
      start: function(  ) { 
        $('.fb-drop-target').addClass('is-active')
        $('.fb-drop-target-wrapper').addClass('is-active')
      },
      stop: function(  ) { 
        $('.fb-drop-target-wrapper').removeClass('is-active')
        $('.fb-drop-target').removeClass('is-active')
      }
    })
  }
  const resetDropAreas = function( ui ){
    if( ui !== undefined)
      $(ui.helper).remove() 

    $('.fb-fields-children:not(:has(.fb-row))').remove()
    $('.fb-fields-children > .fb-row:empty').closest('.fb-fields-children').remove()
    $('.fb-fields-children').find('.fb-drop-target-wrapper').css('display','block')
    $('.fb-fields-children').find('.fb-drop-target-wrapper').each((i,dropZone) => {
      if( i && !$(dropZone).index()){
        $(dropZone).css('display','none')
      }
    })
    const $cols = $('.fb-row').find('.fb-drop-target')
    $cols.css('display','block')
    $cols.each((i,dropZone) => {
      if($(dropZone).index() > 0 && !$(dropZone).parent().is(':last-child')){
        $(dropZone).css('display','none')
      }
    })
    if( $(d.stage).find('.fb-fields-children').length > 0 ){
      $(d.stage).removeClass('empty fb-dropzone-new-field')
      if( $(d.stage).is('.ui-droppable') ){
        $(d.stage).droppable('destroy')
      }
    }
    else{
      $(d.stage).addClass('empty fb-dropzone-new-field')
      if( !$(d.stage).is('.ui-droppable') ){
        makeDroppable($(d.stage))
      }
    }
  }
  formBuilder.resetDropAreas = resetDropAreas
  formBuilder.updateColumns = updateColumns

  const triggerEvents = function(isNew, field, type){
    
    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field)
    }

    if (isNew) {
      if (opts.editOnAdd) {
        h.closeAllEdit()
        h.toggleEdit(data.lastID, false)
      }
      if (field.scrollIntoView && opts.scrollToFieldOnAdd) {
        field.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  const hoverOver = function(ev){
    hoveredItems.push(ev.target)
    if( $('.is-hover').length > 1 ){
      $(ev.target).removeClass('is-hover')
    }
    else{
      $(ev.target).addClass('hover-selected')
    }
  }

  const hoverOut = function(ev){
    hoveredItems.splice(hoveredItems.indexOf(ev.target),1)
    $(ev.target).removeClass('hover-selected')
    if(hoveredItems.length) {
      $(hoveredItems.pop()).addClass('hover-selected is-hover')
    }
  }
  
  const makeDroppable = function($dropItem){
    $dropItem.droppable({
      hoverClass: 'is-hover',
      tolerance: 'touch',
      drop: drop,
      over: hoverOver,
      out: hoverOut
    })
  }

  // Select field html, since there may be multiple
  const selectFieldOptions = function (optionData, multipleSelect) {
    const optionTemplate = { selected: false, label: '', value: '' }
    const optionInputType = {
      selected: multipleSelect ? 'checkbox' : 'radio',
    }
    const optionInputTypeMap = {
      boolean: (value, prop) => {
        const attrs = { value, type: optionInputType[prop] || 'checkbox' }
        if (value) {
          attrs.checked = !!value
        }
        return ['input', null, attrs]
      },
      number: value => ['input', null, { value, type: 'number' }],
      string: (value, prop) => [
        'input',
        null,
        { value, type: 'text', placeholder: mi18n.get(`placeholder.${prop}`) || '' },
      ],
      array: values => ['select', values.map(({ label, value }) => m('option', label, { value }))],
      object: ({ tag, content, ...attrs }) => [tag, content, attrs],
    }

    optionData = { ...optionTemplate, ...optionData }

    const optionInputs = Object.entries(optionData).map(([prop, val]) => {
      const optionInputDataType = getContentType(val)

      const [tag, content, attrs] = optionInputTypeMap[optionInputDataType](val, prop)
      const optionClassName = `option-${prop} option-attr`
      attrs['data-attr'] = prop
      attrs.className = attrs.className ? `${attrs.className} ${optionClassName}` : optionClassName

      return m(tag, content, attrs)
    })

    const removeAttrs = {
      className: `remove btn ${css_prefix_text}cancel`,
      title: mi18n.get('removeMessage'),
    }
    optionInputs.push(m('a', null, removeAttrs))

    return m('li', optionInputs).outerHTML
  }

  const cloneItem = function cloneItem(currentItem) {
    data.lastID = h.incrementId(data.lastID)
    const currentId = currentItem.attr('id')
    const type = currentItem.attr('type')
    const ts = new Date().getTime()
    const cloneName = type + '-' + ts
    const $clone = currentItem.clone()

    $('.fld-name', $clone).val(cloneName)
    $clone.find('[id]').each((i, elem) => {
      elem.id = elem.id.replace(currentId, data.lastID)
    })
    $clone.find('[for]').each((index, elem) => {
      const curId = elem.getAttribute('for')
      const newForId = curId.replace(currentId, data.lastID)
      elem.setAttribute('for', newForId)
    })

    $clone.attr('id', data.lastID)
    $clone.attr('name', cloneName)
    $clone.addClass('cloned')
    $('.sortable-options', $clone).sortable()

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0])
    }

    return $clone
  }

  const editProperties = function (e){
    const targetID = $(e.target).parents('.fb-field-draggable:eq(0)').attr('id')
    if( opts.propertiesInModal ){
      const field = document.getElementById(targetID)
      if (!field) {
        return field
      }

      selectedPropertiesId = targetID
      const $editPanel = $('.frm-holder', field)
      $modal.modal('show')
      //e.handled = true
      $modal.on('shown.bs.modal', function(e) {
        field.classList.toggle('editing')
        h.updatePreview($(field))
        opts.onOpenFieldEdit($editPanel[0])
        document.dispatchEvent(events.fieldEditOpened)
        $('.modal-body',$modal).append($editPanel)
        $(this).off('shown.bs.modal')
      })

      $modal.on('hide.bs.modal', function(e) {
        field.classList.toggle('editing')
        $('.fb-field-wrapper',field).append($('.frm-holder',$modal))
        h.updatePreview($(field))
        opts.onCloseFieldEdit($editPanel[0])
        document.dispatchEvent(events.fieldEditClosed)
        $(this).off('hide.bs.modal')
      })
    }
    else{
      if (e.handled !== true) {
        h.toggleEdit(targetID)
        e.handled = true
      } else {
        return false
      }
    }
  }
  // ---------------------- Event listeners ---------------------- //

  const saveAndUpdate = evt => {
    if (evt) {
      const isDisabled = [({ type, target }) => type === 'keyup' && target.name === 'className'].some(typeCondition =>
        typeCondition(evt),
      )
      if (isDisabled) {
        return false
      }

      h.updatePreview($(evt.target).closest('.fb-field-draggable'))
      h.save.call(h)
    }
  }

  const previewSelectors = ['.form-elements input', '.form-elements select', '.form-elements textarea'].join(', ')

  // Save field on change
  $stage.on('change blur keyup click', previewSelectors, throttle(saveAndUpdate, DEFAULT_TIMEOUT, { leading: false }))

  // delete options
  $(document.body).on('click touchstart', '.remove', e => {
    let field = null
    if( opts.propertiesInModal ){
      field = document.getElementById(selectedPropertiesId)
      const $field = $(e.target).parents('.form-group:eq(0)')
      const type = field.getAttribute('type')
      const $option = $(e.target.parentElement)
      e.preventDefault()
      const options = $field[0].querySelector('.sortable-options')
      const optionsCount = options.childNodes.length
      if (optionsCount <= 2 && !type.includes('checkbox')) {
        opts.notify.error('Error: ' + mi18n.get('minOptionMessage'))
      } else {
        $option.slideUp('250', () => {
          $option.remove()
          h.updatePreview($(field))
          h.save.call(h)
        })
      }
    }
    else{
      const $field = $(e.target).parents('.fb-field-draggable:eq(0)')
      field = $field[0]
      const type = field.getAttribute('type')
      const $option = $(e.target.parentElement)
      e.preventDefault()
      const options = field.querySelector('.sortable-options')
      const optionsCount = options.childNodes.length
      if (optionsCount <= 2 && !type.includes('checkbox')) {
        opts.notify.error('Error: ' + mi18n.get('minOptionMessage'))
      } else {
        $option.slideUp('250', () => {
          $option.remove()
          h.updatePreview($(field))
          h.save.call(h)
        })
      }
    }
    
  })

  // touch focus
  $(document.body).on('touchstart', 'input', e => {
    const $input = $(this)
    if (e.handled !== true) {
      if ($input.attr('type') === 'checkbox') {
        $input.trigger('click')
      } else {
        $input.focus()
        const fieldVal = $input.val()
        $input.val(fieldVal)
      }
    } else {
      return false
    }
  })

  // edit properties
  $stage.off('click touchstart').on('click touchstart', '.toggle-form, .close-field', function (e) {
    e.stopPropagation()
    e.preventDefault()
    editProperties(e)
  })
  // double click to edit properties
  $stage.on('dblclick', 'div.fb-field-draggable', e => {
    if (['select', 'input', 'label'].includes(e.target.tagName.toLowerCase()) || e.target.contentEditable === 'true') {
      return
    }
    e.stopPropagation()
    e.preventDefault()
    editProperties(e)
  })
  //sub type change
  $(document.body).on('change', '[name="subtype"]', e => {
    let $field
    if( opts.propertiesInModal ){
      const field = $(e.target).parents('.form-elements:eq(0)')
      $field = $(field)
    }
    else{
      $field = $(e.target).closest('.fb-field-draggable')
    }
    const $valWrap = $('.value-wrap', $field)
    $valWrap.toggle(e.target.value !== 'quill')
  })

  //preview field value change
  const stageOnChangeSelectors = ['.prev-holder input', '.prev-holder select', '.prev-holder textarea']
  $stage.on('change', stageOnChangeSelectors.join(', '), e => {
    let prevOptions
    if (e.target.classList.contains('other-option')) {
      return
    }
    const field = closest(e.target, '.fb-field-draggable')
    const optionTypes = ['select', 'checkbox-group', 'radio-group']
    if (optionTypes.includes($(field).attr('type'))) {
      const options = field.getElementsByClassName('option-value')
      if ($(field).attr('type') === 'select') {
        forEach(options, i => {
          const selectedOption = options[i].parentElement.childNodes[0]
          selectedOption.checked = e.target.value === options[i].value
        })
      } else {
        prevOptions = document.getElementsByName(e.target.name)
        forEach(prevOptions, i => {
          const selectedOption = options[i].parentElement.childNodes[0]
          selectedOption.checked = prevOptions[i].checked
        })
      }
    } else {
      const fieldVal = document.getElementById('value-' + field.id)
      if (fieldVal) {
        fieldVal.value = e.target.value
      }
    }

    h.save.call(h)
  })

  // update label from properties
  addEventListeners(document.body, 'keyup change', ({ target }) => {
    if (!target.classList.contains('fld-label')) return

    const value = target.value || target.innerHTML
    if( opts.propertiesInModal ){
      const field = document.getElementById(selectedPropertiesId)
      const label = $(field).closest('.fb-field-draggable').find('.field-label')
      label.empty()
      label.append(parsedHtml(value))
    }
    else{
      const label = closest(target, '.fb-field-draggable').querySelector('.field-label')
      label.innerHTML = parsedHtml(value)
    }
  })

  // remove error styling when users tries to correct mistake
  $stage.on('keyup', 'input.error', ({ target }) => $(target).removeClass('error'))

  //update tooltip
  $(document.body).on('keyup', 'input[name="description"]', function (e) {
    let $field
    if( opts.propertiesInModal ){
      const field = document.getElementById(selectedPropertiesId)
      $field = $(field).closest('.fb-field-draggable')
    }
    else{
      $field = $(e.target).parents('.fb-field-draggable:eq(0)')
    }
    const closestToolTip = $('.tooltip-element', $field)
    const ttVal = $(e.target).val()
    if (ttVal !== '') {
      if (!closestToolTip.length) {
        const tt = `<span class="tooltip-element" tooltip="${ttVal}">?</span>`
        $('.field-label', $field).after(tt)
      } else {
        closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block')
      }
    } else {
      if (closestToolTip.length) {
        closestToolTip.css('display', 'none')
      }
    }
  })

  /**
   * Toggle multiple select options
   * @param  {Object} e click event
   * @return {String} newType
   */
  //TODO
  $stage.on('change', '.fld-multiple', e => {
    const newType = e.target.checked ? 'checkbox' : 'radio'
    const $options = $('.option-selected', $(e.target).closest('.form-elements'))
    $options.each(i => ($options[i].type = newType))
    return newType
  })

  // properties - name attribute
  $(document.body).on('blur', 'input.fld-name', function (e) {
    e.target.value = safename(e.target.value)
    if (e.target.value === '') {
      $(e.target).addClass('field-error').attr('placeholder', mi18n.get('cannotBeEmpty'))
    } else {
      $(e.target).removeClass('field-error')
    }
  })
  //properties - maxlength attribute
  $(document.body).on('blur', 'input.fld-maxlength', e => {
    e.target.value = forceNumber(e.target.value)
  })

  // Copy field
  $stage.on('click touchstart', `.${css_prefix_text}copy`, function (evt) {
    evt.preventDefault()
    const currentItem = $(evt.target).closest('.fb-field-draggable')
    const $clone = cloneItem(currentItem)

    const rowWrapper = createNewRow(true, $clone[0],data.lastID,$clone.attr('type'), {})
    const $rowWrapper = $(rowWrapper)
    $rowWrapper.find('.fb-drop-target').each(function( index ) {
      makeDroppable($(this))
    })
    const field = $rowWrapper.find('.form-field.fb-row')[0]
    $stage.append(rowWrapper)
    h.updatePreview($clone)
    resetDropAreas() //don't change the order
    updateColumns()
    h.save.call(h)
    triggerEvents(true, field, $clone.type)
  })

  // Delete field
  $stage.on('click touchstart', '.delete-confirm', e => {
    e.preventDefault()

    const buttonPosition = e.target.getBoundingClientRect()
    const bodyRect = document.body.getBoundingClientRect()
    const coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12,
    }

    const deleteID = $(e.target).parents('.fb-field-wrapper:eq(0)').attr('id')
    const $field = $(document.getElementById(deleteID))

    document.addEventListener(
      'modalClosed',
      function () {
        $field.removeClass('deleting')
      },
      false,
    )

    // Check if user is sure they want to remove the field
    if (opts.fieldRemoveWarn) {
      const warnH3 = m('h3', mi18n.get('warning'))
      const warnMessage = m('p', mi18n.get('fieldRemoveWarning'))
      h.confirm([warnH3, warnMessage], () => h.removeField(deleteID), coords)
      $field.addClass('deleting')
    } else {
      h.removeField(deleteID)
    }
  })

  // change button style
  $(document.body).on('click', '.style-wrap button', e => {
    const $button = $(e.target)
    const $attrsWrap = $button.closest('.form-elements')
    const styleVal = $button.val()
    const $btnStyle = $('.btn-style', $attrsWrap)
    $btnStyle.val(styleVal)
    $button.siblings('.btn').removeClass('selected')
    $button.addClass('selected')
    if( !opts.propertiesInModal ){
      h.updatePreview($btnStyle.closest('.fb-field-draggable'))
    }
    h.save()
  })

  // Attach a callback to toggle required asterisk
  $(document.body).on('click', '.fld-required', e => {
    if( opts.propertiesInModal ){
      const field = document.getElementById(selectedPropertiesId)
      $(field).closest('.fb-field-draggable').find('.required-asterisk').toggle()
    }
    else{
      $(e.target).closest('.fb-field-draggable').find('.required-asterisk').toggle()
    }
  })

  // Attach a callback to toggle roles visibility
  $(document.body).on('click', 'input.fld-access', function (e) {
    const roles = $(e.target).closest('.form-elements').find('.available-roles')
    const enableRolesCB = $(e.target)
    roles.slideToggle(250, function () {
      if (!enableRolesCB.is(':checked')) {
        $('input[type=checkbox]', roles).removeAttr('checked')
      }
    })
  })

  // Attach a callback to add new options
  $(document.body).on('click', '.add-opt', function (e) {
    e.preventDefault()
    const type = $(e.target).closest('.form-field').attr('type')
    const $optionWrap = $(e.target).closest('.field-options')
    const $multiple = $('[name="multiple"]', $optionWrap)
    const $firstOption = $('.option-selected:eq(0)', $optionWrap)
    let isMultiple = false

    if ($multiple.length) {
      isMultiple = $multiple.prop('checked')
    } else {
      isMultiple = $firstOption.attr('type') === 'checkbox'
    }

    const optionTemplate = { selected: false, label: '', value: '' }
    const $sortableOptions = $('.sortable-options', $optionWrap)
    const optionData = config.opts.onAddOption(optionTemplate, {
      type,
      index: $sortableOptions.children().length,
      isMultiple,
    })
    $sortableOptions.append(selectFieldOptions(optionData, isMultiple))
  })

  $(document.body).on('mouseover mouseout', '.remove, .del-button', e => $(e.target).closest('.fb-field-wrapper').toggleClass('delete'))

  loadFields()

  if (opts.disableInjectedStyle) {
    const styleTags = document.getElementsByClassName('formBuilder-injected-style')
    forEach(styleTags, i => remove(styleTags[i]))
  }

  document.dispatchEvent(events.loaded)

  // Make actions accessible
  formBuilder.actions = {
    getFieldTypes: activeOnly =>
      activeOnly ? subtract(controls.getRegistered(), opts.disableFields) : controls.getRegistered(),
    clearFields: animate => h.removeAllFields(d.stage, animate),
    showData: h.showData.bind(h),
    save: minify => {
      const formData = h.save(minify)
      const formDataJS = window.JSON.parse(formData)
      config.opts.onSave(formDataJS)

      return formDataJS
    },
    addField: (field, index) => {
      h.stopIndex = data.formData.length ? index : undefined
      prepFieldVars(field)
    },
    removeField: h.removeField.bind(h),
    getData: h.getFormData.bind(h),
    setData: formData => {
      h.stopIndex = undefined
      h.removeAllFields(d.stage, false)
      loadFields(formData)
    },
    setLang: locale => {
      mi18n.setCurrent.call(mi18n, locale).then(() => {
        d.stage.dataset.content = mi18n.get('getStarted')
        controls.init()
        d.empty(d.formActions)
        h.formActionButtons().forEach(button => d.formActions.appendChild(button))
      })
    },
    showDialog: h.dialog.bind(h),
    toggleFieldEdit: fieldId => {
      const fieldIds = Array.isArray(fieldId) ? fieldId : [fieldId]
      fieldIds.forEach(fId => {
        if (!['number', 'string'].includes(typeof fId)) {
          return
        }
        if (typeof fId === 'number') {
          fId = d.stage.children[fId].id
        } else if (!/^frmb-/.test(fId)) {
          fId = d.stage.querySelector(fId).id
        }
        h.toggleEdit(fId)
      })
    },
    toggleAllFieldEdit: () => {
      forEach(d.stage.children, index => {
        h.toggleEdit(d.stage.children[index].id)
      })
    },
    closeAllFieldEdit: h.closeAllEdit.bind(h),
    getCurrentFieldId: () => {
      return data.lastID
    },
  }

  // set min-height on stage onRender
  d.onRender(d.controls, () => {
    // Ensure style has loaded
    const onRenderTimeout = setTimeout(() => {
      d.stage.style.minHeight = `${d.controls.clientHeight}px`
      // If option set, controls will remain in view in editor
      if (opts.stickyControls.enable) {
        h.stickyControls($stage)
      }
      clearTimeout(onRenderTimeout)
    }, 0)
  })

  return formBuilder
}

const methods = {
  init: (options, elems) => {
    const { i18n, ...opts } = jQuery.extend({}, defaultOptions, options, true)
    config.opts = opts
    const i18nOpts = jQuery.extend({}, defaultI18n, i18n, true)
    methods.instance = {
      actions: {
        getFieldTypes: null,
        addField: null,
        clearFields: null,
        closeAllFieldEdit: null,
        getData: null,
        removeField: null,
        save: null,
        setData: null,
        setLang: null,
        showData: null,
        showDialog: null,
        toggleAllFieldEdit: null,
        toggleFieldEdit: null,
        getCurrentFieldId: null,
      },
      markup,
      get formData() {
        return methods.instance.actions.getData && methods.instance.actions.getData('json')
      },
      promise: new Promise(function (resolve, reject) {
        mi18n
          .init(i18nOpts)
          .then(() => {
            elems.each(i => {
              const formBuilder = new FormBuilder(opts, elems[i], jQuery)
              jQuery(elems[i]).data('formBuilder', formBuilder)
              Object.assign(methods, formBuilder.actions, { markup })
              methods.instance.actions = formBuilder.actions
            })
            delete methods.instance.promise
            resolve(methods.instance)
          })
          .catch(err => {
            reject(err)
            opts.notify.error(err)
          })
      }),
    }

    return methods.instance
  },
}

jQuery.fn.formBuilder = function (methodOrOptions = {}, ...args) {
  const isMethod = typeof methodOrOptions === 'string'
  if (isMethod) {
    if (methods[methodOrOptions]) {
      if (typeof methods[methodOrOptions] === 'function') {
        return methods[methodOrOptions].apply(this, args)
      }
      return methods[methodOrOptions]
    }
  } else {
    const instance = methods.init(methodOrOptions, this)
    Object.assign(methods, instance)
    return instance
  }
}