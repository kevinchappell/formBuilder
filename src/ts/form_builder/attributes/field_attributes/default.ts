import { FormBuilder } from 'ts/form_builder/formBuilder'
import { removeFromArray } from '../../../shared/utils'

export const defaultFieldAttrs = (type, fb: FormBuilder) => {
  const defaultAttrs = ['required', 'label', 'description', 'placeholder', 'className', 'name', 'access', 'value']
  const noValFields = ['header', 'paragraph', 'file', 'autocomplete'].concat(fb.d.optionFields)

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

  if (type in fb.controls.registeredSubtypes && !(type in typeAttrsMap)) {
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
