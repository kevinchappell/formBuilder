import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const requireValidOptionAttribute = (values, fb: FormBuilder) => {
  boolAttribute(
    'requireValidOption',
    values,
    {
      first: ' ',
      second: mi18n.get('requireValidOption'),
    },
    fb,
  )
}
