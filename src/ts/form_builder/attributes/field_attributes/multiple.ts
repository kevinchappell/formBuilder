import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const multipleAttribute = (type, values, fb: FormBuilder) => {
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

  return boolAttribute('multiple', values, typeLabels[type] || typeLabels.default, fb)
}
