import '../sass/form-builder.scss'
import throttle from 'lodash/throttle'
import Dom from './dom'
import { remove } from './dom'
import { Data } from './data'
import mi18n from 'mi18n'
import events from './events'
import layout from './layout'
import Helpers from './helpers'
import {
  defaultOptions,
  defaultI18n,
  instanceConfig,
  styles,
  gridClassNames,
  defaultTimeout,
  defaultFieldSelector,
} from './config'
import Controls from './controls'
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
  generateSelectorClassNames, firstNumberOrUndefined,
} from './utils'
import { attributeWillClobber, setElementContent, setSanitizerConfig } from './sanitizer'
import fontConfig from '../fonts/config.json'
const css_prefix_text = fontConfig.css_prefix_text

const { rowWrapperClass, colWrapperClass, tmpRowPlaceholderClass, invisibleRowPlaceholderClass } =
  gridClassNames

const {
  rowWrapperClassSelector,
  colWrapperClassSelector,
  tmpRowPlaceholderClassSelector,
  invisibleRowPlaceholderClassSelector,
} = generateSelectorClassNames(gridClassNames)

function FormBuilder(opts, element, $) {
  const formBuilder = this
  const i18n = mi18n.current
  const formID = `frmb-${Date.now()}`
  const data = new Data(formID)
  const d = new Dom(formID)
  const config = instanceConfig[formID] = {}

  /** @var formRows Allocated rows IDs in the builder */
  let formRows = []
  formBuilder.preserveTempContainers = []
  formBuilder.rowWrapperClassSelector = rowWrapperClassSelector
  formBuilder.colWrapperClassSelector = colWrapperClassSelector
  formBuilder.colWrapperClass = colWrapperClass
  formBuilder.fieldSelector = opts.enableEnhancedBootstrapGrid ? rowWrapperClassSelector : defaultFieldSelector

  //Initialise HTML sanitizer
  setSanitizerConfig(opts.sanitizerOptions)
  if ($(element).closest('form').length) {
    //Due to Dom Clobbering potential with the stage and the lack of requirement for a Form element, warn for this type of setup
    opts.notify.warning('WARNING: FormBuilder does not support being contained with a <form> Element')
  }

  // prepare a new layout object with appropriate templates
  if (!opts.layout) {
    opts.layout = layout
  }
  const layoutEngine = new opts.layout(opts.layoutTemplates, true, opts.disableHTMLLabels, opts.controlConfig)

  const h = new Helpers(formID, layoutEngine, formBuilder)
  const m = markup
  opts = h.processOptions(opts)
  h.editorUI(formID, opts.controlPosition)
  data.formID = formID
  data.lastID = `${data.formID}-fld-0`
  const controls = new Controls(opts, d)
  formBuilder.controls = controls

  const subtypes = (config.subtypes = h.processSubtypes(opts.subtypes))

  const $stage = $(d.stage)
  const $cbUL = $(d.controls)

  let insertingNewControl = false
  let insertTargetIsRow = false
  let insertTargetIsColumn = false

  let $targetInsertWrapper
  let cloneControls

  function enhancedBootstrapEnabled() {
    return !!opts.enableEnhancedBootstrapGrid
  }

  $stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
    start: (evt, ui) => h.startMoving.call(h, evt, ui),
    stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
    change: function(event, ui) {
      if (opts.prepend && ui.placeholder.index() < 1) {
        $('li.form-prepend').after(ui.placeholder)
      } else if (opts.append && ui.placeholder.index() >= ($stage.children('li').length - 1)) {
        $('li.form-append').before(ui.placeholder)
      }
    },
    cancel: ['input', 'select', 'textarea', '.disabled-field', '.form-elements', '.btn', 'button', '.is-locked'].join(
      ', ',
    ),
    placeholder: 'frmb-placeholder hoverDropStyleInverse',
  })

  if (!opts.allowStageSort) {
    $stage.sortable('disable')
  }

  $cbUL.sortable({
    helper: 'clone',
    opacity: 0.9,
    connectWith: `#${formID}, ${rowWrapperClassSelector}`,
    cancel: '.formbuilder-separator',
    cursor: 'move',
    scroll: false,
    placeholder: 'hoverDropStyleInverse ui-state-highlight',
    tolerance: 'pointer',
    start: (evt, ui) => h.startMoving.call(h, evt, ui),
    stop: (evt, ui) => {
      h.stopMoving.call(h, evt, ui)
    },
    revert: 150,
    beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
    distance: 3,
    change: function(event, ui) {
      if (opts.prepend && ui.placeholder.index() < 1) {
        $('li.form-prepend').after(ui.placeholder)
      } else if (opts.append && ui.placeholder.index() >= ($stage.children('li').length - 1)) {
        $('li.form-append').before(ui.placeholder)
      }
    },
    update: function (event, ui) {
      if (h.doCancel) {
        return false
      }

      if ($(ui.item).closest('.stage-wrap') && $(ui.item).closest(rowWrapperClassSelector).length === 0) {
          h.doCancel = true
          processControl(ui.item)
      } else {
        if (enhancedBootstrapEnabled()) {
          hideInvisibleRowPlaceholders()
        }
        h.setFieldOrder($cbUL)
        h.doCancel = !opts.sortableControls
      }
    },
  })

  $cbUL.on('mouseenter', function () {
    if (!h.stageIsEmpty()) {
      $stage.children(tmpRowPlaceholderClassSelector + ':not(:last-child)').addClass(invisibleRowPlaceholderClass)
    }
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
        inputSets.push(header)
      }

      inputSets.push(...inputSet.fields)
      inputSets.forEach(field => {
        prepFieldVars(field, true)
        if (h.stopIndex || h.stopIndex === 0) {
          h.stopIndex++
        }
      })
    } else {
      prepFieldVars(control, true)
    }
  }

  const $editorWrap = $(d.editorWrap)

  $('<div class="snackbar">').appendTo($editorWrap)

  // If option set, controls will remain in view in editor
  let cbClasses = 'cb-wrap'
  let cbStyle = ''
  if (opts.stickyControls.enable) {
    cbClasses += ' sticky-controls'
    const offsetDefaults = {
      top: 0,
      bottom: 'auto',
      right: 'auto',
      left: 'auto',
    }

    const offset = Object.assign({}, offsetDefaults, config.opts.stickyControls.offset)

    if (offset.top !== 0) {
      cbStyle = `top: ${offset.top}px`
    }
  }

  const cbWrap = m('div', d.controls, {
    id: `${data.formID}-cb-wrap`,
    className: cbClasses,
    style: cbStyle,
  })

  if (opts.showActionButtons) {
    cbWrap.appendChild(d.formActions)
  }

  const gridModeHelp = m('div', '', {
    id: `${data.formID}-gridModeHelp`,
    className: 'grid-mode-help',
  })
  cbWrap.appendChild(gridModeHelp)

  $editorWrap.append(d.stage, cbWrap)

  if (element.type !== 'textarea') {
    $(element).append($editorWrap)
  } else {
    // formBuilder no longer uses textArea for element
    $(element).replaceWith($editorWrap)
  }

  $(d.controls).on('click', 'li', ({ target }) => {
    //Remove initial placeholder if simply clicking to add field into blank stage
    if (h.stageIsEmpty()) {
      $stage.find(tmpRowPlaceholderClassSelector).eq(0).remove()
    }

    const $control = $(target).closest('li')
    h.stopIndex = opts.append ? $stage.children().length - 1 : undefined
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

    if (opts.append && !$('.disabled-field.form-append', d.stage).length) {
      cancelArray.push(true)
      $stage.append(disabledField('append'))
    }

    h.disabledTT(d.stage)
    return cancelArray.some(elem => elem === true)
  }

  // builds the standard formbuilder datastructure for a field definition
  const prepFieldVars = ($field, isNew = false) => {
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

    if (isNew) {
      const eventTimeout = setTimeout(() => {
        document.dispatchEvent(events.fieldAdded)
        clearTimeout(eventTimeout)
      }, 10)
    }

    opts.onAddField(data.lastID, field)
    appendNewField(field, isNew)
    opts.onAddFieldAfter(data.lastID, field)

    d.stage.classList.remove('empty')
  }

  formBuilder.prepFieldVars = prepFieldVars

  // Parse saved XML template data
  const loadFields = function (formData) {
    formData = h.getData(formData)
    if (formData && formData.length) {
      formData.forEach(field => CaptureRowData(field))
      formData.forEach(fieldData => prepFieldVars(trimObj(fieldData)))
      d.stage.classList.remove('empty')
    } else if (opts.defaultFields && opts.defaultFields.length) {
      config.opts.defaultFields.forEach(field => CaptureRowData(field))

      h.addDefaultFields()
    } else if (!opts.prepend && !opts.append) {
      d.stage.classList.add('empty')
      d.stage.dataset.content = mi18n.get('getStarted')
    }

    if (nonEditableFields()) {
      d.stage.classList.remove('empty')
    }

    h.save()
  }

  //Capture information of all the row- values so generating new values will not ever clash with existing data
  function CaptureRowData(field) {
    const gridRowValue = h.getRowValue(field.className)
    if (gridRowValue && !formRows.includes(gridRowValue)) {
      formRows.push(gridRowValue)
    }
  }

  /**
   * Add data for field with options [select, checkbox-group, radio-group]
   *
   * @param  {Object} fieldData
   * @return {string} field options markup
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
      fieldValues.map((option, index, _, fieldName = fieldData.name) => {
        const optionData = config.opts.onAddOption(option, { type, index, isMultiple })
        const optionGroupName = fieldName + '-options'
        return selectFieldOptions(optionGroupName, optionData, isMultiple)
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
      date: defaultAttrs.concat(['subtype','min', 'max', 'step']),
      file: defaultAttrs.concat(['multiple']),
      header: ['label', 'subtype', 'className', 'access'],
      hidden: ['name', 'value', 'access'],
      paragraph: ['label', 'subtype', 'className', 'access'],
      number: defaultAttrs.concat(['subtype','min', 'max', 'step']),
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
   * @param  {Object} values configuration object for advanced fields
   * @return {string}        markup for advanced fields
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
      subtype: isHidden => selectAttribute('subtype', values, subtypes[type], isHidden),
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
      advFieldMap[numAttr] = type === 'number' ? () => numberAttribute(numAttr, values) :  () => textAttribute(numAttr, values)
    })

    const noDisable = ['name', 'className', 'subtype', ]

    const typeUserAttrs = Object.assign({}, opts.typeUserAttrs['*'], opts.typeUserAttrs[type])

    Object.keys(fieldAttrs).forEach(index => {
      const attr = fieldAttrs[index]
      const useDefaultAttr = [true]
      const isDisabled = opts.disabledAttrs.includes(attr)

      if (opts.typeUserDisabledAttrs[type]) {
        const typeDisabledAttrs = opts.typeUserDisabledAttrs[type]
        useDefaultAttr.push(!typeDisabledAttrs.includes(attr))
      }

      if (typeClass.definition.hasOwnProperty('disabledAttrs')) {
        const userDisabledAttrs = typeClass.definition.disabledAttrs
        useDefaultAttr.push(!userDisabledAttrs.includes(attr))
      }

      if (typeClass.definition.hasOwnProperty('defaultAttrs')) {
        const userAttrs = Object.keys(typeClass.definition.defaultAttrs)
        useDefaultAttr.push(!userAttrs.includes(attr))
      }

      if (typeUserAttrs) {
        const userAttrs = Object.keys(typeUserAttrs)
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
    if (typeUserAttrs) {
      const customAttr = processTypeUserAttrs(typeUserAttrs, values)
      advFields.push(customAttr)
    }

    return advFields.join('')
  }

  /**
   * Detects the type of user defined attribute
   * @param {Object} attrData attribute config
   * @return {string} type of user attr
   */
  function userAttrType(attrData) {
    return (
      [
        ['array', ({ options }) => !!options],
        ['boolean', ({ type }) => type === 'checkbox'], // automatic bool if checkbox
        [typeof attrData.value, () => true], // string, number,
      ].find(typeCondition => typeCondition[1](attrData))[0]
    )
  }

  /**
   *
   * @param {Object} values    field attributes
   * @param {string} subType   subType
   * @return {boolean}         indicates whether or not the field has a subtype
   */
  function hasSubType(values, subType) {
    return values.subtype && values.subtype === subType
  }

  /**
   * Processes typeUserAttrs
   * @param  {Object} typeUserAttr option
   * @param  {Object} values       field attributes
   * @return {string}              markup for custom user attributes
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
        return boolAttribute(attr, { ...attrData, [attr]: isChecked }, { first: i18n[attr] })
      },
    }

    for (const attribute in typeUserAttr) {
      if (typeUserAttr.hasOwnProperty(attribute)) {
        const attrValType = userAttrType(typeUserAttr[attribute])
        if (attrValType !== 'undefined') {
          const orig = mi18n.get(attribute)
          const tUA = Object.assign({}, typeUserAttr[attribute]) //Ensure we work on a copy of the attributes
          let origValue = tUA.value
          if (attrValType === 'boolean') {
            tUA[attribute] ??= tUA.value
          } else if (attrValType === 'number') {
            tUA[attribute] ??= firstNumberOrUndefined(values[attribute], origValue)
          } else {
            origValue ??= ''
            tUA[attribute] ??= values[attribute] || origValue
          }
          tUA.value = tUA[attribute]

          if (tUA.label) {
            i18n[attribute] = Array.isArray(tUA.label) ? mi18n.get(...tUA.label) || tUA.label[0] : tUA.label
          }

          if (attrTypeMap[attrValType]) {
            advField.push(attrTypeMap[attrValType](attribute, tUA))
          }

          i18n[attribute] = orig
        } else if (attrValType === 'undefined' && hasSubType(values, attribute)) {
          advField.push(processTypeUserAttrs(typeUserAttr[attribute], values))
        } else {
          const def = {}
          def[attribute] = typeUserAttr[attribute]
          opts.notify.warning('Warning: unable to process typeUserAttr definition : ' + JSON.stringify(def))
        }
      }
    }

    return advField.join('')
  }

  /**
   * Text input value for attribute
   * @param  {string} name
   * @param  {Object} inputAttrs also known as values
   * @return {string}       input markup
   */
  function inputUserAttrs(name, inputAttrs) {
    const { class: classname, className, ...attrs } = inputAttrs
    let textAttrs = {
      id: name + '-' + data.lastID,
      title: attrs.description || attrs.label || name.toUpperCase(),
      name: name,
      type: attrs.type || 'text',
      className: [`fld-${name}`, (classname || className || '').trim()],
      value: attrs.hasOwnProperty(name) ? attrs[name] : attrs.value || '',
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
   * @param  {string} name
   * @param  {Object} fieldData
   * @return {string}         select markup
   */
  function selectUserAttrs(name, fieldData) {
    const { multiple, options, label: labelText, value, class: classname, className, ...restData } = fieldData
    const selectValues = fieldData.hasOwnProperty(name) ? fieldData[name] : value || []
    const optis = Object.keys(options).map(val => {
      const attrs = { value: val }
      const optionTextVal = options[val]
      const optionText = Array.isArray(optionTextVal) ? mi18n.get(...optionTextVal) || optionTextVal[0] : optionTextVal
      if (Array.isArray(selectValues) ? selectValues.includes(val) : val === selectValues) {
        attrs.selected = true
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
   * @param  {string} attribute
   * @param  {Object} values
   * @return {string} markup for number attribute
   */
  const numberAttribute = (attribute, values) => {
    const { class: classname, className, ...attrs } = values
    const attrVal = (Number.isNaN(attrs[attribute])) ? undefined : attrs[attribute]
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
   * @param  {string} attribute  attribute name
   * @param  {Object} values     aka attrs
   * @param  {Array} optionData  select field option data
   * @param  {boolean} [isHidden=false] field should be hidden on the stage
   * @return {string}            select input makrup
   */
  const selectAttribute = (attribute, values, optionData, isHidden = false) => {
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
    const visibility = isHidden ? 'none' : 'block'
    const attrWrap = m('div', [label, inputWrap], {
      className: `form-group ${selectAttrs.name}-wrap`,
      style: `display: ${visibility}`,
    })

    return attrWrap.outerHTML
  }

  /**
   * Generate some text inputs for field attributes, **will be replaced**
   * @param  {string} attribute
   * @param  {Object} values
   * @param  {boolean} [isHidden=false] field should be hidden on the stage
   * @return {string}
   */
  const textAttribute = (attribute, values, isHidden = false) => {
    const textArea = ['paragraph']

    let attrVal = values[attribute] || ''
    let attrLabel = mi18n.get(attribute) || attribute

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
      } else if (values.type === 'textarea' && attribute === 'value') {
        attributefield += m('textarea', attrVal, inputConfig).outerHTML
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

  // Append the new field to the editor
  const appendNewField = function (values, isNew = true) {
    const columnData = prepareFieldRow(values)
    data.lastID = h.incrementId(data.lastID)

    const type = values.type || 'text'
    let label = values.label || (isNew ? i18n[type] || mi18n.get('label') : '')
    if (type === 'hidden' || label === '') {
      label = `${mi18n.get(type) ?? type}: ${values.name}`
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

    if (enhancedBootstrapEnabled()) {
      fieldButtons.push(
        m('a', null, {
          type: 'grid',
          id: data.lastID + '-grid',
          className: `grid-button btn ${css_prefix_text}grid`,
          title: 'Grid Mode',
        }),
      )
    } else {
      fieldButtons.push(
        m('a', null, {
          type: 'sort',
          id: data.lastID + '-sort-higher',
          className: `sort-button sort-button-higher btn ${css_prefix_text}sort-higher`,
          title: 'Move Higher',
        }),
        m('a', null, {
          type: 'sort',
          id: data.lastID + '-sort-lower',
          className: `sort-button sort-button-lower btn ${css_prefix_text}sort-lower`,
          title: 'Move Lower',
        })
      )
    }

    if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) {
      fieldButtons = fieldButtons.filter(btnData => !disabledFieldButtons.includes(btnData.type))
    }

    const liContents = [m('div', fieldButtons, { className: 'field-actions' })]

    const labelValue = opts.disableHTMLLabels ? document.createTextNode(label) : parsedHtml(label)
    liContents.push(
      m('label', labelValue, {
        className: 'field-label',
      }),
    )

    liContents.push(
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
    liContents.push(m('span', '?', descAttrs))

    const prevHolder = m('div', '', { className: 'prev-holder', dataFieldId: data.lastID })
    liContents.push(prevHolder)

    const formElements = m('div', [advFields(values), m('a', mi18n.get('close'), { className: 'close-field' })], {
      className: 'form-elements',
    })

    const editPanel = m('div', formElements, {
      id: `${data.lastID}-holder`,
      className: 'frm-holder',
      dataFieldId: data.lastID,
    })

    formBuilder.currentEditPanel = editPanel

    liContents.push(editPanel)

    const field = m('li', liContents, {
      class: `${type}-field form-field`,
      type: type,
      id: data.lastID,
    })
    const $li = $(field)

    AttachColWrapperHandler($li)

    $li.data('fieldData', { attrs: values })

    if (typeof h.stopIndex !== 'undefined') {
      $(d.stage).children().eq(h.stopIndex).before($li)
    } else {
      $stage.append($li)
    }

    $('.sortable-options', $li).sortable({ update: () => h.updatePreview($li) })

    // generate the control, insert it into the list item & add it to the stage
    h.updatePreview($li)

    let rowWrapperNode

    if (enhancedBootstrapEnabled()) {
      const targetRow = `div.row-${columnData.rowUniqueId}`

      let newRowCreated = false
      //Check if an overall row already exists for the field, else create one
      if ($stage.children(targetRow).length) {
        rowWrapperNode = $stage.children(targetRow)
      } else {
        rowWrapperNode = m('div', null, {
          id: `${field.id}-row`,
          className: `row row-${columnData.rowUniqueId} ${rowWrapperClass}`,
        })
        newRowCreated = true
      }

      //Turn the placeholder into the new row. Copy some attributes over
      if (insertingNewControl && insertTargetIsRow) {
        $targetInsertWrapper.attr('id', rowWrapperNode.id)
        $targetInsertWrapper.attr('class', rowWrapperNode.className)
        $targetInsertWrapper.attr('style', '')
        $targetInsertWrapper.attr('data-row-id', columnData.rowUniqueId)
        rowWrapperNode = $targetInsertWrapper
      }

      //Add a wrapper div for the field itself. This div will be the rendered representation
      const colWrapperNode = m('div', null, {
        id: `${field.id}-cont`,
        className: `${columnData.columnSize} ${colWrapperClass}`,
      })

      if (insertingNewControl && insertTargetIsColumn) {
        if ($targetInsertWrapper.attr('prepend') === 'true') {
          $(colWrapperNode).prependTo(rowWrapperNode)
        } else {
          $(colWrapperNode).insertAfter(`#${$targetInsertWrapper.attr('appendAfter')}`)
        }
      }

      //Control insert will take care of inserting itself
      if (!insertTargetIsColumn) {
        $(colWrapperNode).appendTo(rowWrapperNode)
      }

      //If inserting, use the existing index, do not always append to end
      if (!insertingNewControl && newRowCreated) {
        $li.after(rowWrapperNode)
      }

      $li.appendTo(colWrapperNode)

      if (newRowCreated) {
        setupSortableRowWrapper(rowWrapperNode)
        hideInvisibleRowPlaceholders()
        SetupInvisibleRowPlaceholders(rowWrapperNode)
        if (opts.enableColumnInsertMenu) {
          $(rowWrapperNode).off('mouseenter')
          $(rowWrapperNode).on('mouseenter', function(e) {
            setupColumnInserts($(e.currentTarget))
          })

          $(rowWrapperNode).off('mouseleave')
          $(rowWrapperNode).on('mouseleave', function(e) {
            hideColumnInsertButtons($(e.currentTarget))
          })
        }
      }
      setupColumnInserts(rowWrapperNode, true)

      //Record the fact that this field did not originally have column information stored.
      //If no other fields were added to the same row and the user did not do anything with this information, then remove it when exporting the config
      if (columnData.addedDefaultColumnClass) {
        $li.attr('addedDefaultColumnClass', true)
      }

      h.tmpCleanPrevHolder($(prevHolder))
    }

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field)
    } else if (opts.typeUserEvents['*'] && opts.typeUserEvents['*'].onadd) {
      opts.typeUserEvents['*'].onadd(field)
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

    if (enhancedBootstrapEnabled()) {
      //Autosize entire row when using new insert mode
      if (insertingNewControl && insertTargetIsColumn) {
        autoSizeRowColumns(rowWrapperNode, true)
      }
    }

    insertingNewControl = false
    insertTargetIsRow = false
    insertTargetIsColumn = false
  }

  function AttachColWrapperHandler(colWrapper) {
    if (!enhancedBootstrapEnabled()) {
      return
    }

    colWrapper.mouseenter(function (e) {
      if (!gridMode) {
        gridModeTargetField = $(this)
        gridModeStartX = e.pageX
        gridModeStartY = e.pageY
      }
    })
  }

  function hideInvisibleRowPlaceholders() {
    $stage.find(tmpRowPlaceholderClassSelector + ':not(:last-child)').css('height','1px').addClass(invisibleRowPlaceholderClass)
  }

  function SetupInvisibleRowPlaceholders(rowWrapperNode) {
    const wrapperClone = $(rowWrapperNode).clone()
    wrapperClone.addClass(invisibleRowPlaceholderClass).addClass(tmpRowPlaceholderClass).html('')
    wrapperClone.css('height', '1px')

    wrapperClone.attr('class', wrapperClone.attr('class').replace('row-', ''))
    wrapperClone.removeAttr('id')

    if ($(rowWrapperNode).index() === 0) {
      const wrapperClone2 = $(wrapperClone).clone()
      $stage.prepend(wrapperClone2)
      setupSortableRowWrapper(wrapperClone2)
    }

    wrapperClone.insertAfter($(rowWrapperNode))
    setupSortableRowWrapper(wrapperClone)
    $stage.find(rowWrapperClassSelector + ':last-of-type').removeClass(invisibleRowPlaceholderClass)
  }

  function ResetAllInvisibleRowPlaceholders() {
    $stage.children(tmpRowPlaceholderClassSelector).remove()

    $stage.children(rowWrapperClassSelector).each((i, elem) => {
      SetupInvisibleRowPlaceholders($(elem))
    })

    $stage.find(rowWrapperClassSelector + ':last-of-type').removeClass(invisibleRowPlaceholderClass)
  }

  function setupSortableRowWrapper(rowWrapperNode) {
    if (!enhancedBootstrapEnabled()) {
      return
    }

    $(rowWrapperNode).sortable({
      connectWith: [rowWrapperClassSelector],
      cursor: 'move',
      opacity: 0.9,
      revert: 150,
      distance: 3,
      tolerance: 'pointer',
      helper: function (e, el) {
        //Shrink the control a little while dragging so it's not in the way as much
        const clone = el.clone()
        clone.find('.field-actions').remove()
        clone.css({ width: '20%', height: '100px', minHeight: '60px', overflow: 'hidden' })
        return clone
      },
      over: function (event) {
        const overTarget = $(event.target)
        const overTargetIsPlaceholder = overTarget.hasClass(tmpRowPlaceholderClass)

        if (!overTargetIsPlaceholder) {
          removeColumnInsertButtons(overTarget)
        }

        overTarget.addClass('hoverDropStyleInverse')

        if (!overTargetIsPlaceholder) {
          hideInvisibleRowPlaceholders()

          //Only show the placeholder for what is above/below the rowWrapper
          overTarget
            .prev(tmpRowPlaceholderClassSelector)
            .removeClass(invisibleRowPlaceholderClass)
            .css('height', '40px')
          overTarget
            .next(tmpRowPlaceholderClassSelector)
            .removeClass(invisibleRowPlaceholderClass)
            .css('height', '40px')
        }
      },
      out: function (event) {
        $stage.children(tmpRowPlaceholderClassSelector).removeClass('hoverDropStyleInverse')
        $(event.target).removeClass('hoverDropStyleInverse')
      },
      placeholder: 'hoverDropStyleInverse',
      receive: function (event, ui) {
        const senderIsControlsBox = $(ui.sender).attr('id') === $cbUL.attr('id')

        const droppingToNewRow = $(ui.item).parent().hasClass(tmpRowPlaceholderClass)
        const droppingToExistingRow = !droppingToNewRow && $(ui.item).parent().hasClass(rowWrapperClass)

        if (droppingToNewRow) {
          if (senderIsControlsBox) {
            insertTargetIsRow = true
            insertingNewControl = true
            $targetInsertWrapper = $(ui.item).parent()
          } else {
            const colWrapper = $(ui.item)

            const columnData = prepareFieldRow({})

            const rowWrapperNode = m('div', null, {
              id: `${colWrapper.find('li').attr('id')}-row`,
              className: `row row-${columnData.rowUniqueId} ${rowWrapperClass}`,
            })

            $(ui.item).parent().replaceWith(rowWrapperNode)
            AttachColWrapperHandler($(ui.item))

            colWrapper.appendTo(rowWrapperNode)

            setupSortableRowWrapper(rowWrapperNode)
            syncFieldWithNewRow(colWrapper.attr('id'))
          }
        }

        if (droppingToExistingRow && senderIsControlsBox) {
          //Look for the closest add control button and act as if that was used to add the control
          if ($(ui.item).prev().hasClass('btnAddControl')) {
            $targetInsertWrapper = $(ui.item).prev()
          } else if ($(ui.item).next().hasClass('btnAddControl')) {
            $targetInsertWrapper = $(ui.item).next()
          } else {
            $targetInsertWrapper = $(ui.item).attr('prepend', 'true')
          }

          const parentRowValue = h.getRowClass($(ui.item).parent().attr('class'))
          $targetInsertWrapper.addClass(parentRowValue)

          insertTargetIsColumn = true
          insertingNewControl = true

          h.stopIndex = undefined
        }

        if (insertingNewControl) {
          h.doCancel = true
          processControl(ui.item)
          h.save.call(h)
        }

        checkRowCleanup()
        ResetAllInvisibleRowPlaceholders()

        const listFieldItem = $(ui.item).find('li')
        if (listFieldItem.length) {
          CheckTinyMCETransition(listFieldItem)
          UpdatePreviewAndSave(listFieldItem)
          h.tmpCleanPrevHolder($(ui.item).find('.prev-holder'))
        }
      },
      start: (event, ui) => {
        $stage.addClass('__preventColButtons')
        removeColumnInsertButtons(ui.item.closest(rowWrapperClassSelector))
      },
      stop: (event, ui) => {
        $stage.removeClass('__preventColButtons')
        $stage.children(tmpRowPlaceholderClassSelector).removeClass('hoverDropStyleInverse')
        autoSizeRowColumns(ui.item.closest(rowWrapperClassSelector), true)
      },
      update: (event, ui) => {
        syncFieldWithNewRow(ui.item.attr('id'))
      },
    })

    const rowId = h.getRowValue(rowWrapperNode.className)
    if (rowId !== '0') {
      $(rowWrapperNode).attr('data-row-id',rowId)
    }
  }

  function CheckTinyMCETransition(fieldListItem) {
    const isTinyMCE = fieldListItem.find('textarea[type="tinymce"]')
    if (isTinyMCE.length) {
      window.lastFormBuilderCopiedTinyMCE = window.tinymce.get(isTinyMCE.attr('id')).save()
    }
  }

  function UpdatePreviewAndSave(fieldListItem) {
    h.updatePreview(fieldListItem)
    h.save.call(h)
  }

  /**
   * Setup column insert buttons next to each column.
   * @param {HTMLElement} rowWrapper
   * @param {boolean} [hide=false] If true hide when inserting
   */
  function setupColumnInserts(rowWrapper, hide = false) {
    if (!opts.enableColumnInsertMenu || $stage.hasClass('__preventColButtons')) {
      return
    }

    $(rowWrapper).children('button.btnAddControl').remove()

    const rowColumns = $(rowWrapper).children(colWrapperClassSelector)
    rowColumns.each((i, elem) => {
        const colWrapper = $(elem)
        colWrapper.addClass('colWithInsertButtons')

        if (rowColumns.index(colWrapper) === 0) {
          $(
            `<button type="button" class="formbuilder-icon-plus btnAddControl ${h.getRowClass(
              colWrapper.parent().attr('class'),
            )}" prepend="true" style='visibility: ${(hide ? 'hidden' : 'visible')}'></button>`,
          ).insertBefore(colWrapper)
        }

        $(
          `<button type="button" class="formbuilder-icon-plus btnAddControl ${h.getRowClass(
            colWrapper.parent().attr('class'),
          )}" appendAfter="${colWrapper.attr('id')}" style='visibility: ${(hide ? 'hidden' : 'visible')}'></button>`,
        ).insertAfter(colWrapper)
      })
  }

  function removeColumnInsertButtons(rowWrapper) {
    rowWrapper.find('button.btnAddControl').remove()
    rowWrapper.find(colWrapperClassSelector).removeClass('colWithInsertButtons')
  }

  function hideColumnInsertButtons(rowWrapper) {
    rowWrapper.find('button.btnAddControl').css('visibility', 'hidden')
  }

  function prepareFieldRow(data) {
    if (!enhancedBootstrapEnabled()) {
      return {}
    }

    const result = h.tryParseColumnInfo(data)
    if (!result.rowUniqueId) {
      //If inserting directly into column, use the correct rowUniqueId
      if (insertingNewControl && insertTargetIsColumn) {
        result.rowUniqueId = h.getRowValue($targetInsertWrapper.attr('class'))
      } else {
        //Column information wasn't defined, get new default configuration for one.
        let nextRow
        if (formRows.length === 0) {
          nextRow = 1
        } else {
          const numericalRows = formRows.filter(value => !isNaN(value) && !isNaN(parseInt(value))).map(str => parseInt(str))
          nextRow = (Math.max(...numericalRows, 0) + 1)
        }

        result.rowUniqueId = nextRow.toString()
      }

      result.columnSize = opts.defaultGridColumnClass

      if (!data.className) {
        data.className = ''
      }

      data.className += ` row-${result.rowUniqueId} ${result.columnSize}`
      result.addedDefaultColumnClass = true
    }

    if (!formRows.includes(result.rowUniqueId)) {
      formRows.push(result.rowUniqueId)
    }

    return result
  }

  // Select field html, since there may be multiple
  const selectFieldOptions = function (optionGroupName, optionData, multipleSelect) {
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
        attrs.name = optionGroupName //Set a name for the boolean checks to ensure radio-group can only have a maximum of one option selected
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

    CheckTinyMCETransition(currentItem)

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

    //Copy selects(includes subtype if applicable)
    const selects = currentItem.find('select')
    selects.each(function (i) {
      const select = this
      $clone.find('select').eq(i).val($(select).val())
    })

    $clone.attr('id', data.lastID)
    $clone.attr('name', cloneName)
    $clone.addClass('cloned')
    $('.sortable-options', $clone).sortable()

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0])
    } else if (opts.typeUserEvents['*'] && opts.typeUserEvents['*'].onclone) {
      opts.typeUserEvents['*'].onclone($clone[0])
    }

    return $clone
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

      UpdatePreviewAndSave($(evt.target).closest('.form-field'))
    }
  }

  const previewSelectors = ['.form-elements input', '.form-elements select', '.form-elements textarea'].join(', ')

  // Save field on change
  $stage.on('change blur keyup click', previewSelectors, throttle(saveAndUpdate, defaultTimeout, { leading: false }))

  // delete options
  $stage.on('click touchstart', '.remove', e => {
    const $field = $(e.target).parents('.form-field:eq(0)')
    const field = $field[0]
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
        UpdatePreviewAndSave($field)
      })
    }
  })

  // touch focus
  $stage.on('touchstart', 'input', e => {
    const $input = $(e.target)
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

  // toggle fields
  $stage.on('click touchstart', '.toggle-form, .close-field', function (e) {
    e.stopPropagation()
    e.preventDefault()
    if (e.handled !== true) {
      const targetID = $(e.target).parents('.form-field:eq(0)').attr('id')
      h.toggleEdit(targetID)
      e.handled = true
    } else {
      return false
    }
  })

  $stage.on('dblclick', 'li.form-field', e => {
    if (['select', 'input', 'label','textarea',].includes(e.target.tagName.toLowerCase()) || e.target.isContentEditable === true) {
      return
    }
    e.stopPropagation()
    e.preventDefault()
    if (e.handled !== true) {
      const targetID = $(e.target).closest('li.form-field').attr('id')
      h.toggleEdit(targetID)
      e.handled = true
    }
  })

  $stage.on('change', '[name="subtype"]', e => {
    const $field = $(e.target).closest('li.form-field')
    const $valWrap = $('.value-wrap', $field)
    $valWrap.toggle(e.target.value !== 'quill')
  })

  $stage.on('change', '[name="name"]', e => {
    const name = e.target.value
    if (attributeWillClobber(name)) {
      //@TODO Notify the user of this potential issue
      opts.notify.error('Potential for Dom Clobbering with field name ' + name)
    }
  })

  const stageOnChangeSelectors = ['.prev-holder input', '.prev-holder select', '.prev-holder textarea']
  $stage.on('change', stageOnChangeSelectors.join(', '), e => {
    let prevOptions
    if (e.target.classList.contains('other-option')) {
      return
    }
    const field = closest(e.target, '.form-field')
    const optionTypes = ['select', 'checkbox-group', 'radio-group']
    if (optionTypes.includes(field.type)) {
      const options = field.getElementsByClassName('option-value')
      if (field.type === 'select') {
        forEach(options, i => {
          const selectedOption = options[i].parentElement.childNodes[0]
          selectedOption.checked = e.target.value === options[i].value
        })
      } else {
        prevOptions = document.getElementsByName(e.target.name)
        forEach(prevOptions, i => {
          if (prevOptions[i].classList.contains('other-option')) return //Cannot set other as a default checked
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

  // update preview to label
  addEventListeners(d.stage, 'keyup change', ({ target }) => {
    if (!target.classList.contains('fld-label')) return
    const value = target.value || target.innerHTML
    const label = closest(target, '.form-field').querySelector('.field-label')
    setElementContent(label, parsedHtml(value), config.opts.disableHTMLLabels)
  })

  // remove error styling when users tries to correct mistake
  $stage.on('keyup', 'input.error', ({ target }) => $(target).removeClass('error'))

  // update preview for description
  $stage.on('keyup', 'input[name="description"]', function (e) {
    const $field = $(e.target).parents('.form-field:eq(0)')
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
   * @return {string} newType
   */
  $stage.on('change', '.fld-multiple', e => {
    const newType = e.target.checked ? 'checkbox' : 'radio'
    const $options = $('.option-selected', $(e.target).closest('.form-elements'))
    $options.each(i => ($options[i].type = newType))
    return newType
  })

  // format name attribute
  $stage.on('blur', 'input.fld-name', function (e) {
    e.target.value = safename(e.target.value)
    if (e.target.value === '') {
      $(e.target).addClass('field-error').attr('placeholder', mi18n.get('cannotBeEmpty'))
    } else {
      $(e.target).removeClass('field-error')
    }
  })

  $stage.on('blur', 'input.fld-maxlength', e => {
    e.target.value = forceNumber(e.target.value)
  })

  $stage.on('click touchstart', '.btnAddControl', function (evt) {
    const btn = $(evt.currentTarget)

    cloneControls = $cbUL.clone()

    cloneControls.hover(
      function () {},
      function () {
        cloneControls.remove()
      },
    )

    cloneControls.on('click', 'li', ({ target }) => {
      insertTargetIsColumn = true
      insertingNewControl = true
      $targetInsertWrapper = btn

      const $control = $(target).closest('li')
      h.stopIndex = undefined
      processControl($control)
      h.save.call(h)

      cloneControls.remove()
    })

    $stage.append(cloneControls)

    if (btn.index() == 0) {
      cloneControls.css({
        position: 'fixed',
        left: btn.offset().left,
        top: btn.offset().top - $(window).scrollTop(),
      })
    } else {
      cloneControls.css({
        position: 'fixed',
        left: btn.offset().left - 80,
        top: btn.offset().top - $(window).scrollTop(),
      })
    }

    //Ensure the bottom of the menu is visible when close to the bottom of page
    const bottomOfClone = cloneControls.offset().top + cloneControls.outerHeight()
    const bottomOfScreen = $(window).scrollTop() + $(window).innerHeight()
    if (bottomOfClone > bottomOfScreen) {
      cloneControls.css({ top: parseInt(cloneControls.css('top')) - (bottomOfClone - bottomOfScreen) })
    }
  })

  // Copy field
  $stage.on('click', `.${css_prefix_text}copy`, function (evt) {
    evt.preventDefault()
    const currentItem = $(evt.target).parent().parent('li')
    const $clone = cloneItem(currentItem)
    if (enhancedBootstrapEnabled()) {
      prepareCloneWrappers($clone, currentItem)
    } else {
      $clone.insertAfter(currentItem)
    }
    UpdatePreviewAndSave($clone)

    h.tmpCleanPrevHolder($clone.find('.prev-holder'))

    if (opts.editOnAdd) {
      h.closeField(data.lastID, false)
    }
  })

  if (enhancedBootstrapEnabled()) {
    $stage.on('stageEmptied', () => {
      formRows = [] //Reset row count
    })
  }

  /**
   * enhancedBootstrap feature helper post field clone
   * @param $clone
   * @param currentItem
   */
  function prepareCloneWrappers($clone, currentItem) {
    const inputClassElement = $(`#className-${currentItem.attr('id')}`)
    const columnData = prepareFieldRow({})

    const rowWrapper = m('div', null, {
      id: `${$clone.attr('id')}-row`,
      className: `row row-${columnData.rowUniqueId} ${rowWrapperClass}`,
    })

    const colWrapper = m('div', null, {
      id: `${$clone.attr('id')}-cont`,
      className: `${h.getBootstrapColumnClass(inputClassElement.val())} ${colWrapperClass}`,
    })
    $(colWrapper).appendTo(rowWrapper)

    let insertAfterElement
    if (currentItem.parent().is('div')) {
      insertAfterElement = currentItem.closest(rowWrapperClassSelector)
    } else if (currentItem.parent().is('ul')) {
      insertAfterElement = currentItem
    }

    $(rowWrapper).insertAfter(insertAfterElement)
    $clone.appendTo(colWrapper)

    setupSortableRowWrapper(rowWrapper)
    ResetAllInvisibleRowPlaceholders()
    syncFieldWithNewRow($clone.attr('id'))
  }

  // Delete field
  $stage.on('click', '.delete-confirm', e => {
    e.preventDefault()

    const buttonPosition = e.target.getBoundingClientRect()
    const bodyRect = document.body.getBoundingClientRect()
    const coords = {
      pageX: buttonPosition.left + buttonPosition.width / 2,
      pageY: buttonPosition.top - bodyRect.top - 12,
    }

    const deleteID = $(e.target).parents('.form-field:eq(0)').attr('id')
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

  let gridMode = false
  let gridModeTargetField
  let gridModeStartX
  let gridModeStartY
  let wheelDelta = 0
  $stage.on('click touchstart', '.grid-button', e => {
    e.preventDefault()

    const ID = $(e.target).parents('.form-field:eq(0)').attr('id')
    gridModeTargetField = $(document.getElementById(ID))
    gridModeStartX = e.pageX
    gridModeStartY = e.pageY

    //Reset wheelDelta
    wheelDelta = 0

    toggleGridModeActive()
  })

  //Use mousewheel to work resizing
  $stage.on('wheel', function (e) {
    if (e.originalEvent.deltaY === 0) {
      return
    }
    if (gridMode) {
      e.preventDefault()

      wheelDelta += e.originalEvent.deltaY
      const deltaPerShift = 120
      if ((wheelDelta > 0 && wheelDelta < deltaPerShift) || (wheelDelta < 0 && wheelDelta > -deltaPerShift)) {
        return
      }

      const parentCont = gridModeTargetField.closest('div')
      const currentColValue = h.getBootstrapColumnValue(parentCont.attr('class'))

      const change = Math.round(wheelDelta / deltaPerShift)
      wheelDelta = wheelDelta % deltaPerShift

      const nextColSize = currentColValue + change

      if (nextColSize > 12) {
        h.showToast('<b class="formbuilder-required">Column Size cannot exceed 12</b>')
        return
      }

      if (nextColSize < 1) {
        h.showToast('<b class="formbuilder-required">Column Size cannot be less than 1</b>')
        return
      }

      //Check overall column value, do not allow the entire row to exceed 12
      const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector)

      let totalRowValueCount = nextColSize
      rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
        const colWrapper = $(`#${elem.id}`)
        const fieldID = colWrapper.find('li').attr('id')

        if (fieldID != gridModeTargetField.attr('id')) {
          totalRowValueCount += h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr('class'))
        }
      })

      if (totalRowValueCount > 12) {
        h.showToast('<b class="formbuilder-required">There is a maximum of 12 columns per row</b>')
        return
      }

      h.syncBootstrapColumnWrapperAndClassProperty(gridModeTargetField.attr('id'), nextColSize)
      gridModeTargetField.attr('manuallyChangedDefaultColumnClass', true)

      buildGridModeCurrentRowInfo()
      h.toggleHighlight(gridModeTargetField)
    }
  })

  //Use W A S D or Arrow Keys to move the field up/down/left/right across the form
  //Use R to auto-size all columns in the row equally
  $(document).keydown(e => {
    if (gridMode) {
      e.preventDefault()
      const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector)

      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          removeColumnInsertButtons(rowWrapper)
          moveFieldUp(rowWrapper)
          break

        case 'KeyS':
        case 'ArrowDown':
          removeColumnInsertButtons(rowWrapper)
          moveFieldDown(rowWrapper)
          break

        case 'KeyA':
        case 'ArrowLeft':
          removeColumnInsertButtons(rowWrapper)
          moveFieldLeft()
          break

        case 'KeyD':
        case 'ArrowRight':
          removeColumnInsertButtons(rowWrapper)
          moveFieldRight()
          break

        case 'KeyR':
          removeColumnInsertButtons(rowWrapper)
          autoSizeRowColumns(rowWrapper, true)
          setupColumnInserts(rowWrapper, true)
          break
      }

      buildGridModeCurrentRowInfo()
      hideColumnInsertButtons(rowWrapper)
    }
  })

  function moveFieldUp(rowWrapper) {
    const previousRowSibling = rowWrapper.prevAll().not(tmpRowPlaceholderClassSelector).not('.form-prepend').first()
    if (previousRowSibling.length) {
      $(gridModeTargetField.parent().parent()).swapWith(previousRowSibling)
      h.toggleHighlight(gridModeTargetField)
    }
  }

  function moveFieldDown(rowWrapper) {
    const nextRowSibling = rowWrapper.nextAll().not(invisibleRowPlaceholderClassSelector).not('.form-append').first()
    if (nextRowSibling.length) {
      $(gridModeTargetField.parent().parent()).swapWith(nextRowSibling)
      h.toggleHighlight(gridModeTargetField)
    }
  }

  function moveFieldLeft() {
    const colSibling = gridModeTargetField.parent().prev()
    if (colSibling.length) {
      gridModeTargetField.parent().after(colSibling)
    }
    h.toggleHighlight(gridModeTargetField)
  }

  function moveFieldRight() {
    const colSibling = gridModeTargetField.parent().next()
    if (colSibling.length) {
      gridModeTargetField.parent().before(colSibling)
    }
    h.toggleHighlight(gridModeTargetField)
  }
  function autoSizeRowColumns(rowWrapper, force = false) {
    const childRowCount = rowWrapper.children(`div${colWrapperClassSelector}`).length
    const newAutoCalcSizeValue = Math.floor(12 / childRowCount)

    rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
      const colWrapper = $(`#${elem.id}`)

      //Don't auto-size the field if the user had manually adjusted it during this session
      if (!force && colWrapper.find('li').attr('manuallyChangedDefaultColumnClass') == 'true') {
        h.showToast(`Preserving column size of field ${i + 1} because you had personally adjusted it`, 4000)
        return
      }

      h.syncBootstrapColumnWrapperAndClassProperty(elem.id.replace('-cont', ''), newAutoCalcSizeValue)
    })
  }

  function syncFieldWithNewRow(fieldID) {
    if (fieldID) {
      const inputClassElement = $(`#className-${fieldID.replace('-cont', '')}`)
      if (inputClassElement.val()) {
        const oldRow = h.getRowClass(inputClassElement.val())
        const wrapperRow = h.getRowClass(inputClassElement.closest(rowWrapperClassSelector).attr('class'))
        inputClassElement.val(inputClassElement.val().replace(oldRow, wrapperRow))
        checkRowCleanup()
      }
    }
  }

  //When mouse moves away a certain distance, cancel grid mode
  $(document).mousemove(e => {
    if (
      gridMode &&
      h.getDistanceBetweenPoints(gridModeStartX, gridModeStartY, e.pageX, e.pageY) > config.opts.cancelGridModeDistance
    ) {
      toggleGridModeActive(false)
    }
  })

  $(document).on('checkRowCleanup', (event, data) => {
    checkRowCleanup()

    const rowWrapper = $(`#${data.rowWrapperID}`)
    if (rowWrapper.length) {
      autoSizeRowColumns(rowWrapper, true)
    }
  })

  $(document).on('fieldOpened', (event, data) => {
    const rowWrapper = $(`#${data.rowWrapperID}`)
    if (rowWrapper.length) {
      hideColumnInsertButtons(rowWrapper)
    }
  })

  /**
   * Checks rows after updates and performs the following
   *  - Remove empty column wrappers
   *  - Removes empty rows
   */
  function checkRowCleanup() {
    $stage.find(colWrapperClassSelector).each((i, elem) => {
      const $colWrapper = $(elem)
      if ($colWrapper.is(':empty') && !formBuilder.preserveTempContainers.includes($colWrapper.attr('id'))) {
        $colWrapper.remove()
      }
    })

    $stage
      .children(rowWrapperClassSelector)
      .not(tmpRowPlaceholderClassSelector)
      .each((i, elem) => {
        if ($(elem).children(colWrapperClassSelector).length === 0) {
          const rowValue = h.getRowValue($(elem).attr('class'))
          formRows = formRows.filter(x => x !== rowValue)
          $(elem).remove()
        } else {
          setupColumnInserts($(elem),true)
        }
      })
  }

  function toggleGridModeActive(active = true) {
    if (active) {
      gridMode = true
      h.showToast('Starting Grid Mode - Use the mousewheel to resize.', 1500)

      //Hide controls
      $cbUL.css('display', 'none')
      $(d.formActions).css('display', 'none')

      buildGridModeHelp()
      h.closeAllEdit()
      h.toggleHighlight(gridModeTargetField)
      hideInvisibleRowPlaceholders()
    } else {
      h.showToast('Grid Mode Finished', 1500)

      //If when exiting grid mode and the row columns end up being > 12 (This can happen if the user moved a column up/down and exited), auto-resize it.
      const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector)
      let totalRowValueCount = 0

      rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
        const colWrapper = $(`#${elem.id}`)
        const fieldID = colWrapper.find('li').attr('id')
        totalRowValueCount += h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr('class'))
      })

      if (totalRowValueCount > 12) {
        autoSizeRowColumns(rowWrapper, true)
      }

      gridMode = false
      gridModeTargetField = null

      $(gridModeHelp).empty()

      //Show controls
      $cbUL.css('display', 'unset')
      $(d.formActions).css('display', 'unset')
    }
  }

  function buildGridModeHelp() {
    $(gridModeHelp).html(`
    <div style='padding:5px'>
      <h3 class="text text-center">Grid Mode</h3>    
      
      <table style='border-spacing:7px;border-collapse: separate'>
        <thead>
          <tr>
            <th>Action</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>MOUSEWHEEL</kbd></td>
            <td>Adjust the field column size</td>
          </tr>    
          <tr>
            <td><kbd>W or &#x2191;</kbd></td> 
            <td>Move entire row up</td>
          </tr>
          <tr>
              <td><kbd>S or &#x2193;</kbd></td> 
              <td>Move entire row down</td>
          </tr>
          <tr>
              <td><kbd>A or &#x2190;</kbd></td>
              <td>Move field left within the row</td>
          </tr>
          <tr>
              <td><kbd>D or &#x2192;</kbd></td> 
              <td>Move field right within the row</td>
          </tr>
          <tr>
            <td><kbd>R</kbd></td> 
            <td>Resize all fields within the row to be maximally equal</td>
          </tr>
          <tr>
        </tbody> 
      </table>

      <h5 class="text text-center" style='padding-top:10px'>Current Row Fields</h5>    
      
      <table class='gridHelpCurrentRow'>
        <colgroup>
          <col width="100%" />
          <col width="0%" />
        </colgroup>
        
        <thead>
          <tr>
            <th>Field</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody>
        </tbody> 
      </table>
      
    </div>
    `)

    buildGridModeCurrentRowInfo()
  }

  function buildGridModeCurrentRowInfo() {
    $(gridModeHelp).find('.gridHelpCurrentRow tbody').empty()

    const rowWrapper = gridModeTargetField.closest(rowWrapperClassSelector)

    rowWrapper.children(`div${colWrapperClassSelector}`).each((i, elem) => {
      const colWrapper = $(`#${elem.id}`)
      const fieldID = colWrapper.find('li').attr('id')
      const field = $(`#${fieldID}`)
      const fieldType = field.attr('type')

      let label = $(`#label-${fieldID}`).html()
      if (fieldType === 'hidden' || fieldType === 'paragraph') {
        label = $(`#name-${fieldID}`).val()
      }

      if (!label) {
        label = field.attr('id')
      }

      //Highlight the current field being worked on
      let currentFieldClass = ''
      if (gridModeTargetField.attr('id') === fieldID) {
        currentFieldClass = 'currentGridModeFieldHighlight'
      }

      $(gridModeHelp).find('.gridHelpCurrentRow tbody').append(`
        <tr>
          <td class='grid-mode-help-row1 ${currentFieldClass}'>${label}</td>
          <td class='grid-mode-help-row2 ${currentFieldClass}'>
            ${h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr('class'))}
          </td>
        <tr>
      `)
    })
  }

  //Mobile support for sortable fields
  $stage.on('click', '.field-actions .sort-button', function (evt) {
    evt.preventDefault()
    const currentItem = $(evt.target).parent().parent('li')
    let swap
    if ($(evt.target).hasClass('sort-button-higher')) {
      swap = currentItem.prev('li')
      if (swap.length && !swap.hasClass('form-prepend')) {
        currentItem.insertBefore(swap)
      }
    } else {
      swap = currentItem.next('li')
      if (swap.length && !swap.hasClass('form-append')) {
        currentItem.insertAfter(swap)
      }
    }

    h.toggleHighlight(currentItem)
  })

  // Update button style selection
  $stage.on('click', '.style-wrap button', e => {
    const $button = $(e.target)
    const $attrsWrap = $button.closest('.form-elements')
    const styleVal = $button.val()
    const $btnStyle = $('.btn-style', $attrsWrap)
    $btnStyle.val(styleVal)
    $button.siblings('.btn').removeClass('selected')
    $button.addClass('selected')
    UpdatePreviewAndSave($btnStyle.closest('.form-field'))
  })

  // Attach a callback to toggle required asterisk
  $stage.on('click', '.fld-required', e => {
    $(e.target).closest('.form-field').find('.required-asterisk').toggle()
  })

  // Attach a callback to toggle roles visibility
  $stage.on('click', 'input.fld-access', function (e) {
    const roles = $(e.target).closest('.form-field').find('.available-roles')
    const enableRolesCB = $(e.target)
    roles.slideToggle(250, function () {
      if (!enableRolesCB.is(':checked')) {
        $('input[type=checkbox]', roles).removeAttr('checked')
      }
    })
  })

  // Attach a callback to add new options
  $stage.on('click', '.add-opt', function (e) {
    e.preventDefault()
    const type = $(e.target).closest('.form-field').attr('type')
    const $optionWrap = $(e.target).closest('.field-options')
    const $multiple = $('[name="multiple"]', $optionWrap)
    const $firstOption = $('.option-selected:eq(0)', $optionWrap)
    const isMultiple = ($multiple.length) ? $multiple.prop('checked') : $firstOption.attr('type') === 'checkbox'

    const optionTemplate = { selected: false, label: '', value: '' }
    const $sortableOptions = $('.sortable-options', $optionWrap)
    const optionData = config.opts.onAddOption(optionTemplate, {
      type,
      index: $sortableOptions.children().length,
      isMultiple,
    })
    $sortableOptions.append(selectFieldOptions($firstOption.attr('name'), optionData, isMultiple))
  })

  $stage.on('mouseover mouseout', '.remove, .del-button', e => $(e.target).closest('li').toggleClass('delete'))

  loadFields()

  if (opts.disableInjectedStyle === true) {
    const styleTags = document.getElementsByClassName('formBuilder-injected-style')
    forEach(styleTags, i => remove(styleTags[i]))
  } else if (opts.disableInjectedStyle === 'bootstrap') {
    d.editorWrap.classList.remove('formbuilder-embedded-bootstrap')
  }

  document.dispatchEvent(events.loaded)

  // Make actions accessible
  formBuilder.actions = {
    getFieldTypes: activeOnly =>
      activeOnly ? subtract(controls.getRegistered(), opts.disableFields) : controls.getRegistered(),
    clearFields: () => h.removeAllFields(d.stage),
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
      h.removeAllFields(d.stage)
      loadFields(formData)
    },
    setLang: locale => {
      return mi18n.setCurrent.call(mi18n, locale).then(() => {
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
      clearTimeout(onRenderTimeout)
    }, 0)
  })

  return formBuilder
}

const pluginInit = function(options,elem) {
  const _this = this
  const { i18n, ...opts } = jQuery.extend({}, defaultOptions, options, true)
  this.i18nOpts = jQuery.extend({}, defaultI18n, i18n, true)

  const notInitialised = () => {
    console.error('formBuilder is still initialising')
    console.info('See https://formbuilder.online/docs/formBuilder/actions/getData/#wont-work and https://formbuilder.online/docs/formBuilder/promise/ for more information on formBuilder asynchronous loading')
  }

  const actionList = [
    'getFieldTypes',
    'addField',
    'clearFields',
    'closeAllFieldEdit',
    'getData',
    'removeField',
    'save',
    'setData',
    'setLang',
    'showData',
    'showDialog',
    'toggleAllFieldEdit',
    'toggleFieldEdit',
    'getCurrentFieldId',
  ]

  this.instance = {
    actions: actionList.reduce((actions, currentAction) => { actions[currentAction] = notInitialised; return actions }, {}),
    markup,
    get formData() {
      return _this.instance.actions.getData !== notInitialised && _this.instance.actions.getData('json')
    },
    promise: new Promise(function(resolve, reject) {
      mi18n
        .init(_this.i18nOpts)
        .then(() => {
          const formBuilder = new FormBuilder(opts, elem[0], jQuery)
          jQuery(elem[0]).data('formBuilder', formBuilder)
          Object.assign(_this.instance, formBuilder.actions)
          _this.instance.actions = formBuilder.actions
          delete _this.instance.promise
          resolve(_this.instance)
        })
        .catch(err => {
          reject(err)
          opts.notify.error(err)
        })
    })
  }
}

jQuery.fn.formBuilder = function (methodOrOptions = {}, ...args) {
  const isMethod = typeof methodOrOptions === 'string'
  if (isMethod) {
    const instance = this.data('fbInstance')
    if (instance[methodOrOptions]) {
      if (typeof instance[methodOrOptions] === 'function') {
        return instance[methodOrOptions].apply(this, args)
      }
      return instance[methodOrOptions]
    }
  } else {
    const plugin = new pluginInit(methodOrOptions, this)
    this.data('fbInstance', plugin.instance)
    return plugin.instance
  }
}
