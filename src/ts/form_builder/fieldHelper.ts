import fontConfig from 'fonts/config.json'
import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { formBuilderOptions } from '../../types/formbuilder-types'
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

export class FormBuilderControlFieldHelper {
  constructor(public opts: formBuilderOptions, public fb: FormBuilderClass) {}

  // Append the new field to the editor
  appendNewField(values, isNew = true) {
    const columnData = this.fb.gh.prepareFieldRow(values)
    this.fb.data.lastID = this.fb.h.incrementId(this.fb.data.lastID)

    const type = values.type || 'text'
    let label = values.label || (isNew ? this.fb.i18n.get(type) || mi18n.get('label') : '')

    if (type === 'hidden') {
      label = `${mi18n.get(type)}: ${values.name}`
    }

    const disabledFieldButtons = this.fb.opts.disabledFieldButtons[type] || values.disabledFieldButtons

    let fieldButtons = [
      this.fb.m('a', null, {
        type: 'remove',
        id: 'del_' + this.fb.data.lastID,
        className: `del-button btn ${fontConfig.css_prefix_text}cancel delete-confirm`,
        title: mi18n.get('removeMessage'),
      }),
      this.fb.m('a', null, {
        type: 'edit',
        id: this.fb.data.lastID + '-edit',
        className: `toggle-form btn ${fontConfig.css_prefix_text}pencil`,
        title: mi18n.get('hide'),
      }),
      this.fb.m('a', null, {
        type: 'copy',
        id: this.fb.data.lastID + '-copy',
        className: `copy-button btn ${fontConfig.css_prefix_text}copy`,
        title: mi18n.get('copyButtonTooltip'),
      }),
    ]

    if (this.fb.gh.enhancedBootstrapEnabled()) {
      fieldButtons.push(
        this.fb.m('a', null, {
          type: 'grid',
          id: this.fb.data.lastID + '-grid',
          className: `grid-button btn ${fontConfig.css_prefix_text}grid`,
          title: 'Grid Mode',
        }),
      )
    }

    if (disabledFieldButtons && Array.isArray(disabledFieldButtons)) {
      fieldButtons = fieldButtons.filter(btnData => !disabledFieldButtons.includes(btnData.type))
    }

    const liContents = [this.fb.m('div', fieldButtons, { className: 'field-actions' })]

    liContents.push(
      this.fb.m('label', parsedHtml(label), {
        className: 'field-label',
      }),
    )

    liContents.push(
      this.fb.m('span', ' *', {
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

    liContents.push(this.fb.m('span', '?', descAttrs))

    const prevHolder = this.fb.m('div', '', { className: 'prev-holder', dataFieldId: this.fb.data.lastID })
    liContents.push(prevHolder)

    const formElements = this.fb.m(
      'div',
      [this.advFields(values), this.fb.m('a', mi18n.get('close'), { className: 'close-field' })],
      {
        className: 'form-elements',
      },
    )

    const editPanel = this.fb.m('div', formElements, {
      id: `${this.fb.data.lastID}-holder`,
      className: 'frm-holder',
      dataFieldId: this.fb.data.lastID,
    })

    this.fb.currentEditPanel = editPanel

    liContents.push(editPanel)

    const field = this.fb.m('li', liContents, {
      class: `${type}-field form-field`,
      type: type,
      id: this.fb.data.lastID,
    })

    const $li = $(field)

    this.fb.sh.AttatchColWrapperHandler($li)

    $li.data('fieldData', { attrs: values })

    if (typeof this.fb.h.stopIndex !== 'undefined') {
      $('> li', this.fb.d.stage).eq(this.fb.h.stopIndex).before($li)
    } else {
      this.fb.$stage.append($li)
    }

    $('.sortable-options', $li).sortable({ update: () => this.fb.h.updatePreview($li) })

    // generate the control, insert it into the list item & add it to the stage
    this.fb.h.updatePreview($li)

    let rowWrapperNode

    if (this.fb.gh.enhancedBootstrapEnabled()) {
      const targetRow = `div.row-${columnData.rowNumber}`

      //Check if an overall row already exists for the field, else create one
      if (this.fb.$stage.children(targetRow).length) {
        rowWrapperNode = this.fb.$stage.children(targetRow)
      } else {
        rowWrapperNode = this.fb.m('div', null, {
          id: `${field.id}-row`,
          className: `row row-${columnData.rowNumber} ${this.fb.rowWrapperClass}`,
        })
      }

      //Turn the placeholder into the new row. Copy some attributes over
      if (this.fb.insertingNewControl && this.fb.insertTargetIsRow) {
        this.fb.$targetInsertWrapper.attr('id', rowWrapperNode.id)
        this.fb.$targetInsertWrapper.attr('class', rowWrapperNode.className)
        this.fb.$targetInsertWrapper.attr('style', '')
        rowWrapperNode = this.fb.$targetInsertWrapper
      }

      //Add a wrapper div for the field itself. This div will be the rendered representation
      const colWrapperNode = this.fb.m('div', null, {
        id: `${field.id}-cont`,
        className: `${columnData.columnClassSize} ${this.fb.colWrapperClass}`,
      })

      if (this.fb.insertingNewControl && this.fb.insertTargetIsColumn) {
        if (this.fb.$targetInsertWrapper.attr('prepend') == 'true') {
          $(colWrapperNode).prependTo(rowWrapperNode)
        } else {
          $(colWrapperNode).insertAfter(`#${this.fb.$targetInsertWrapper.attr('appendAfter')}`)
        }
      }

      //Control insert will take care of inserting itself
      if (!this.fb.insertTargetIsColumn) {
        $(colWrapperNode).appendTo(rowWrapperNode)
      }

      //If inserting, use the existing index, do not always append to end
      if (!this.fb.insertingNewControl) {
        this.fb.$stage.append(rowWrapperNode)
      }

      $li.appendTo(colWrapperNode)

      this.fb.sh.setupSortableRowWrapper(rowWrapperNode)

      this.fb.gh.SetupInvisibleRowPlaceholders(rowWrapperNode)

      //Record the fact that this field did not originally have column information stored.
      //If no other fields were added to the same row and the user did not do anything with this information, then remove it when exporting the config
      if (columnData.addedDefaultColumnClass) {
        //@ts-ignore
        $li.attr('addedDefaultColumnClass', true)
      }

      this.fb.h.tmpCleanPrevHolder($(prevHolder))
    }

    if (this.fb.opts.typeUserEvents[type] && this.fb.opts.typeUserEvents[type].onadd) {
      this.fb.opts.typeUserEvents[type].onadd(field)
    }

    if (isNew) {
      if (this.fb.opts.editOnAdd) {
        this.fb.h.closeAllEdit()
        this.fb.h.toggleEdit(this.fb.data.lastID, false)
      }

      if (field.scrollIntoView && this.fb.opts.scrollToFieldOnAdd) {
        field.scrollIntoView({ behavior: 'smooth' })
      }
    }

    if (this.fb.gh.enhancedBootstrapEnabled()) {
      //Autosize entire row when using new insert mode
      if (this.fb.insertingNewControl && this.fb.insertTargetIsColumn) {
        this.fb.gh.autoSizeRowColumns(rowWrapperNode, true)
      }

      this.fb.sh.cleanupTempPlaceholders()
    }

    this.fb.insertingNewControl = false
    this.fb.insertTargetIsRow = false
    this.fb.insertTargetIsColumn = false
  }

  advFields(values) {
    const { type } = values
    const advFields = []
    const typeClass = this.fb.controls.getClass(type)
    const fieldAttrs = defaultFieldAttrs(type, this.fb)

    const advFieldMap = {
      required: () => requiredAttribute(values, this.fb),
      toggle: () => boolAttribute('toggle', values, { first: mi18n.get('toggle') }, this.fb),
      inline: () => inlineAttribute(type, values, this.fb),
      label: () => textAttribute('label', values, this.fb),
      description: () => textAttribute('description', values, this.fb),
      subtype: () => subTypeAttribute(type, values, this.fb),
      style: () => btnStyles(values.style, this.fb),
      placeholder: () => textAttribute('placeholder', values, this.fb),
      rows: () => numberAttribute('rows', values, this.fb),
      className: isHidden => textAttribute('className', values, this.fb, isHidden),
      name: isHidden => textAttribute('name', values, this.fb, isHidden),
      value: () => textAttribute('value', values, this.fb),
      maxlength: () => numberAttribute('maxlength', values, this.fb),
      access: () => accessAttributes(type, values, this.fb),
      other: () => otherAttribute(values, this.fb),
      options: () => fieldOptions(values, this.fb),
      requireValidOption: () => requireValidOptionAttribute(values, this.fb),
      multiple: () => multipleAttribute(type, values, this.fb),
    }

    const numAttrs = ['min', 'max', 'step']

    numAttrs.forEach(numAttr => {
      advFieldMap[numAttr] = () => numberAttribute(numAttr, values, this.fb)
    })

    const noDisable = ['name', 'className']

    Object.keys(fieldAttrs).forEach(index => {
      const attr = fieldAttrs[index]
      const useDefaultAttr = [true]
      const isDisabled = this.fb.opts.disabledAttrs.includes(attr)

      if (this.fb.opts.typeUserDisabledAttrs[type]) {
        const typeDisabledAttrs = this.fb.opts.typeUserDisabledAttrs[type]
        useDefaultAttr.push(!typeDisabledAttrs.includes(attr))
      }

      if (typeClass.definition.hasOwnProperty('defaultAttrs')) {
        const userAttrs = Object.keys(typeClass.definition.defaultAttrs)
        useDefaultAttr.push(!userAttrs.includes(attr))
      }

      if (this.fb.opts.typeUserAttrs[type]) {
        const userAttrs = Object.keys(this.fb.opts.typeUserAttrs[type])
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
      const customAttr = this.processTypeUserAttrs(typeClass.definition.defaultAttrs, values)
      advFields.push(customAttr)
    }

    // Append custom attributes as defined in typeUserAttrs option
    if (this.fb.opts.typeUserAttrs[type]) {
      const customAttr = this.processTypeUserAttrs(this.fb.opts.typeUserAttrs[type], values)
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
