import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const inlineAttribute = (type, values, fb: FormBuilderClass) => {
  const labels = {
    first: mi18n.get('inline'),
    second: mi18n.get('inlineDesc', type.replace('-group', '')),
  }

  return boolAttribute('inline', values, labels, fb)
}
