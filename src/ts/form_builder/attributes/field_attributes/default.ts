import { FormBuilder } from 'ts/form_builder/formBuilder'
import { optionFields } from 'ts/shared/constants'
import { fbControlType, FieldAttributes, TypeAttributeMap } from 'types/formbuilder-types'
import { removeFromArray } from '../../../shared/utils'

export const defaultFieldAttrs = (type: fbControlType, fb: FormBuilder) => {
  const defaultAttrs: FieldAttributes[] = [
    'required',
    'label',
    'description',
    'placeholder',
    'className',
    'name',
    'access',
    'value',
  ]
  const noValFields: fbControlType[] = ['header', 'paragraph', 'file', 'autocomplete', ...optionFields]

  const valueField = !noValFields.includes(type)

  const typeAttrsMap: TypeAttributeMap = {
    autocomplete: [...defaultAttrs, 'options', 'requireValidOption'],
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
    text: [...defaultAttrs, 'subtype', 'maxlength'],
    date: defaultAttrs,
    file: [...defaultAttrs, 'subtype', 'multiple'],
    header: ['label', 'subtype', 'className', 'access'],
    hidden: ['name', 'value', 'access'],
    paragraph: ['label', 'subtype', 'className', 'access'],
    number: [...defaultAttrs, 'min', 'max', 'step'],
    select: [...defaultAttrs, 'multiple', 'options'],
    textarea: [...defaultAttrs, 'subtype', 'maxlength', 'rows'],
  }

  if (type in fb.controlPanel.registeredSubtypes && !(type in typeAttrsMap)) {
    typeAttrsMap[type] = [...defaultAttrs, 'subtype']
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
