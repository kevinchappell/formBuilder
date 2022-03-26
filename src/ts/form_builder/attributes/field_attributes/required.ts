import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { boolAttribute } from './bool'

export const requiredAttribute = (fieldData, fb: FormBuilder) => {
  const { type } = fieldData
  const noRequire = ['header', 'paragraph', 'button']
  const noMake = []
  let requireField = ''

  if (noRequire.includes(type)) {
    noMake.push(true)
  }

  if (!noMake.some(elem => elem === true)) {
    requireField = boolAttribute(
      'required',
      fieldData,
      {
        first: mi18n.get('required'),
      },
      fb,
    )
  }

  return requireField
}
