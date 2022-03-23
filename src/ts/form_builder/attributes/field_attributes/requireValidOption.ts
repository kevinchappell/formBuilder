import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const requireValidOptionAttribute = (values, fb: FormBuilderClass) => {
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
