import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const otherAttribute = (values, fb: FormBuilderClass) => {
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
