import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const inlineAttribute = (type, values, fb: FormBuilder) => {
  const labels = {
    first: mi18n.get('inline'),
    second: mi18n.get('inlineDesc', type.replace('-group', '')),
  }

  return boolAttribute('inline', values, labels, fb)
}
