import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const otherAttribute = (values, fb: FormBuilder) => {
  boolAttribute(
    'other',
    values,
    {
      first: mi18n.get('enableOther'),
      second: mi18n.get('enableOtherMsg'),
    },
    fb,
  )
}
