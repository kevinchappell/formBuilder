import fontConfig from 'fonts/config.json'
import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { fbControlType, Field, FieldAttributes, FormBuilderOptions, GridInfo } from '../../types/formbuilder-types'
import { parsedHtml } from '../shared/utils'
import { accessAttributes } from './attributes/field_attributes/access'
import { boolAttribute } from './attributes/field_attributes/bool'
import { defaultFieldAttrs } from './attributes/field_attributes/default'
import { inlineAttribute } from './attributes/field_attributes/inline'
import { multipleAttribute } from './attributes/field_attributes/multiple'
import { numberAttribute } from './attributes/field_attributes/number'
import { fieldOptions } from './attributes/field_attributes/options'
import { otherAttribute } from './attributes/field_attributes/other'
import { requiredAttribute } from './attributes/field_attributes/required'
import { requireValidOptionAttribute } from './attributes/field_attributes/requireValidOption'
import { btnStyles } from './attributes/field_attributes/style'
import { subTypeAttribute } from './attributes/field_attributes/subtype'
import { textAttribute } from './attributes/field_attributes/text'
import { userAttrType } from './attributes/field_attributes/user-defined'
import { inputUserAttrs } from './attributes/user_attributes/input'
import { selectUserAttrs } from './attributes/user_attributes/select'

export class FormBuilderControlFieldAppender {
  fieldType: fbControlType
  columnData: GridInfo
  label: string
  liContents: any[]
  prevHolder: HTMLElement
  fieldWrapper: HTMLElement
  $fieldWrapper: JQuery
  rowWrapperNode: any

  advFieldMap = {
    required: () => requiredAttribute(this.field, this.fb),
    toggle: () => boolAttribute('toggle', this.field, { first: mi18n.get('toggle') }, this.fb),
    inline: () => inlineAttribute(this.fieldType, this.field, this.fb),
    label: () => textAttribute('label', this.field, this.fb),
    description: () => textAttribute('description', this.field, this.fb),
    subtype: () => subTypeAttribute(this.fieldType, this.field, this.fb),
    style: () => btnStyles(this.field.style, this.fb),
    placeholder: () => textAttribute('placeholder', this.field, this.fb),
    rows: () => numberAttribute('rows', this.field, this.fb),
    className: isHidden => textAttribute('className', this.field, this.fb, isHidden),
    name: isHidden => textAttribute('name', this.field, this.fb, isHidden),
    value: () => textAttribute('value', this.field, this.fb),
    maxlength: () => numberAttribute('maxlength', this.field, this.fb),
    access: () => accessAttributes(this.fieldType, this.field, this.fb),
    other: () => otherAttribute(this.field, this.fb),
    options: () => fieldOptions(this.field, this.fb),
    requireValidOption: () => requireValidOptionAttribute(this.field, this.fb),
    multiple: () => multipleAttribute(this.fieldType, this.field, this.fb),
    min: () => numberAttribute('min', this.field, this.fb),
    max: () => numberAttribute('max', this.field, this.fb),
    step: () => numberAttribute('step', this.field, this.fb),
  }

  neverDisableAttributes = ['name', 'className']

  constructor(
    public opts: FormBuilderOptions,
    public fb: FormBuilder,
    public field: Field,
    public isNew: boolean = true,
  ) {
    this.liContents = []

    this.fieldType = this.field.type || 'text'
    this.columnData = this.fb.gh.prepareFieldRow(this.field)

    this.label = this.getLabelText()
    this.buildButtons()
  }

  appendNewField() {
    this.addLabel()
    this.addRequiredAttribute()
    this.addHelpIcon()
    this.addPreviewHolder()
    this.addFieldAttributes()
    this.addFieldWrapper()

    if (typeof this.fb.h.stopIndex !== 'undefined') {
      $('> li', this.fb.stage).eq(this.fb.h.stopIndex).before(this.$fieldWrapper)
    } else {
      this.fb.$stage.append(this.$fieldWrapper)
    }

    $('.sortable-options', this.$fieldWrapper).sortable({ update: () => this.fb.h.updatePreview(this.$fieldWrapper) })

    // generate the control, insert it into the list item & add it to the stage
    this.fb.h.updatePreview(this.$fieldWrapper)

    this.checkGridSetup()

    if (this.fb.opts.typeUserEvents[this.fieldType] && this.fb.opts.typeUserEvents[this.fieldType].onadd) {
      this.fb.opts.typeUserEvents[this.fieldType].onadd(this.fieldWrapper)
    }

    if (this.isNew) {
      if (this.fb.opts.editOnAdd) {
        this.fb.h.closeAllEdit()
        this.fb.h.toggleEdit(this.fb.lastID, false)
      }

      if (this.fieldWrapper.scrollIntoView && this.fb.opts.scrollToFieldOnAdd) {
        this.fieldWrapper.scrollIntoView({ behavior: 'smooth' })
      }
    }

    this.checkGridAutoSizeRow()

    this.fb.insertingNewControl = false
    this.fb.insertTargetIsRow = false
    this.fb.insertTargetIsColumn = false
  }

  private checkGridAutoSizeRow() {
    if (this.fb.gh.enhancedBootstrapEnabled()) {
      //Autosize entire row when using new insert mode
      if (this.fb.insertingNewControl && this.fb.insertTargetIsColumn) {
        this.fb.gh.autoSizeRowColumns(this.rowWrapperNode, true)
      }

      this.fb.sh.cleanupTempPlaceholders()
    }
  }

  private checkGridSetup() {
    if (this.fb.gh.enhancedBootstrapEnabled()) {
      const targetRow = `div.row-${this.columnData.rowNumber}`

      //Check if an overall row already exists for the field, else create one
      if (this.fb.$stage.children(targetRow).length) {
        this.rowWrapperNode = this.fb.$stage.children(targetRow)
      } else {
        this.rowWrapperNode = this.fb.m('div', null, {
          id: `${this.fieldWrapper.id}-row`,
          className: `row row-${this.columnData.rowNumber} ${this.fb.rowWrapperClass}`,
        })
      }

      //Turn the placeholder into the new row. Copy some attributes over
      if (this.fb.insertingNewControl && this.fb.insertTargetIsRow) {
        this.fb.$targetInsertWrapper.attr('id', this.rowWrapperNode.id)
        this.fb.$targetInsertWrapper.attr('class', this.rowWrapperNode.className)
        this.fb.$targetInsertWrapper.attr('style', '')
        this.rowWrapperNode = this.fb.$targetInsertWrapper
      }

      //Add a wrapper div for the field itself. This div will be the rendered representation
      const colWrapperNode = this.fb.m('div', null, {
        id: `${this.fieldWrapper.id}-cont`,
        className: `${this.columnData.columnClassSize} ${this.fb.colWrapperClass}`,
      })

      if (this.fb.insertingNewControl && this.fb.insertTargetIsColumn) {
        if (this.fb.$targetInsertWrapper.attr('prepend') == 'true') {
          $(colWrapperNode).prependTo(this.rowWrapperNode)
        } else {
          $(colWrapperNode).insertAfter(`#${this.fb.$targetInsertWrapper.attr('appendAfter')}`)
        }
      }

      //Control insert will take care of inserting itself
      if (!this.fb.insertTargetIsColumn) {
        $(colWrapperNode).appendTo(this.rowWrapperNode)
      }

      //If inserting, use the existing index, do not always append to end
      if (!this.fb.insertingNewControl) {
        this.fb.$stage.append(this.rowWrapperNode)
      }

      this.$fieldWrapper.appendTo(colWrapperNode)

      this.fb.sh.setupSortableRowWrapper(this.rowWrapperNode)

      this.fb.gh.SetupInvisibleRowPlaceholders(this.rowWrapperNode)

      //Record the fact that this field did not originally have column information stored.
      //If no other fields were added to the same row and the user did not do anything with this information, then remove it when exporting the config
      if (this.columnData.addedDefaultColumnClass) {
        //@ts-ignore
        this.$fieldWrapper.attr('addedDefaultColumnClass', true)
      }

      this.fb.h.tmpCleanPrevHolder($(this.prevHolder))
    }
  }

  private addFieldWrapper() {
    this.fieldWrapper = this.fb.m('li', this.liContents, {
      class: `${this.fieldType}-field form-field`,
      type: this.fieldType,
      id: this.fb.lastID,
    })

    this.$fieldWrapper = $(this.fieldWrapper)

    this.fb.sh.AttatchColWrapperHandler(this.$fieldWrapper)

    this.$fieldWrapper.data('fieldData', { attrs: this.field })
  }

  private addFieldAttributes() {
    const formElements = this.fb.m(
      'div',
      [this.advFields(), this.fb.m('a', mi18n.get('close'), { className: 'close-field' })],
      {
        className: 'form-elements',
      },
    )

    //Wrap attributes a div container
    const editPanel = this.fb.m('div', formElements, {
      id: `${this.fb.lastID}-holder`,
      className: 'frm-holder',
      dataFieldId: this.fb.lastID,
    })

    this.fb.currentEditPanel = editPanel
    this.liContents.push(editPanel)
  }

  private addPreviewHolder() {
    this.prevHolder = this.fb.m('div', '', { className: 'prev-holder', dataFieldId: this.fb.lastID })
    this.liContents.push(this.prevHolder)
  }

  private addLabel() {
    this.liContents.push(
      this.fb.m('label', parsedHtml(this.label), {
        className: 'field-label',
      }),
    )
  }

  private addRequiredAttribute() {
    this.liContents.push(
      this.fb.m('span', ' *', {
        className: 'required-asterisk',
        style: this.field.required ? 'display:inline' : '',
      }),
    )
  }

  private addHelpIcon() {
    const descAttrs = {
      className: 'tooltip-element',
      tooltip: this.field.description,
      style: this.field.description ? 'display:inline-block' : 'display:none',
    }

    this.liContents.push(this.fb.m('span', '?', descAttrs))
  }

  private getLabelText(): string {
    let label = this.field.label || (this.isNew ? this.fb.i18n.get(this.fieldType) || mi18n.get('label') : '')

    if (this.fieldType === 'hidden') {
      label = `${mi18n.get(this.fieldType)}: ${this.field.name}`
    }
    return label
  }

  private buildButtons() {
    const disabledFieldButtons = this.fb.opts.disabledFieldButtons[this.fieldType] || this.opts.disabledFieldButtons

    let fieldButtons = [
      this.fb.m('a', null, {
        type: 'remove',
        id: `del_${this.fb.lastID}`,
        className: `del-button btn ${fontConfig.css_prefix_text}cancel delete-confirm`,
        title: mi18n.get('removeMessage'),
      }),
      this.fb.m('a', null, {
        type: 'edit',
        id: `${this.fb.lastID}-edit`,
        className: `toggle-form btn ${fontConfig.css_prefix_text}pencil`,
        title: mi18n.get('hide'),
      }),
      this.fb.m('a', null, {
        type: 'copy',
        id: `${this.fb.lastID}-copy`,
        className: `copy-button btn ${fontConfig.css_prefix_text}copy`,
        title: mi18n.get('copyButtonTooltip'),
      }),
    ]

    if (this.fb.gh.enhancedBootstrapEnabled()) {
      fieldButtons.push(
        this.fb.m('a', null, {
          type: 'grid',
          id: `${this.fb.lastID}-grid`,
          className: `grid-button btn ${fontConfig.css_prefix_text}grid`,
          title: 'Grid Mode',
        }),
      )
    }

    if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) {
      fieldButtons = fieldButtons.filter(btnData => !disabledFieldButtons.includes(btnData.type))
    }

    this.liContents.push([this.fb.m('div', fieldButtons, { className: 'field-actions' })])
  }

  advFields() {
    const advFields = []
    const controlClass = this.fb.controlPanel.getClass(this.fieldType)
    const fieldAttrs = defaultFieldAttrs(this.fieldType, this.fb)

    Object.keys(fieldAttrs).forEach(index => {
      const attr: FieldAttributes = fieldAttrs[index]
      const useDefaultAttr = [true]
      const isDisabled = this.fb.opts.disabledAttrs.includes(attr)

      if (this.fb.opts.typeUserDisabledAttrs[this.fieldType]) {
        const typeDisabledAttrs = this.fb.opts.typeUserDisabledAttrs[this.fieldType]
        useDefaultAttr.push(!typeDisabledAttrs.includes(attr))
      }

      if (controlClass.definition.hasOwnProperty('defaultAttrs')) {
        const userAttrs = Object.keys(controlClass.definition.defaultAttrs)
        useDefaultAttr.push(!userAttrs.includes(attr))
      }

      if (this.fb.opts.typeUserAttrs[this.fieldType]) {
        const userAttrs = Object.keys(this.fb.opts.typeUserAttrs[this.fieldType])
        useDefaultAttr.push(!userAttrs.includes(attr))
      }

      if (isDisabled && !this.neverDisableAttributes.includes(attr)) {
        useDefaultAttr.push(false)
      }

      if (useDefaultAttr.every(Boolean)) {
        advFields.push(this.advFieldMap[attr](isDisabled))
      }
    })

    // Append custom attributes as defined in control plugin definition
    if (controlClass.definition.hasOwnProperty('defaultAttrs')) {
      const customAttr = this.processTypeUserAttrs(controlClass.definition.defaultAttrs, this.field)
      advFields.push(customAttr)
    }

    // Append custom attributes as defined in typeUserAttrs option
    if (this.fb.opts.typeUserAttrs[this.fieldType]) {
      const customAttr = this.processTypeUserAttrs(this.fb.opts.typeUserAttrs[this.fieldType], this.field)
      advFields.push(customAttr)
    }

    return advFields.join('')
  }

  processTypeUserAttrs(typeUserAttr, values) {
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

        return boolAttribute(attr, { ...attrData, [attr]: isChecked }, { first: attrData.label }, this.fb)
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
            this.fb.i18n[attribute] = Array.isArray(tUA.label) ? mi18n.get(...tUA.label) || tUA.label[0] : tUA.label
          }

          if (attrTypeMap[attrValType]) {
            advField.push(attrTypeMap[attrValType](attribute, tUA))
          }

          this.fb.i18n[attribute] = orig
          tUA.value = origValue
        } else if (attrValType === 'undefined' && this.hasSubType(values, attribute)) {
          advField.push(this.processTypeUserAttrs(typeUserAttr[attribute], values))
        } else {
          continue
        }
      }
    }

    return advField.join('')
  }

  hasSubType(values, subType) {
    return values.subtype && values.subtype === subType
  }
}
