import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { capitalize, trimObj } from 'ts/shared/utils'
import { fbControlType, Field } from 'types/formbuilder-types'
import { ControlTypeLabel } from 'types/shared-types'

export const subTypeAttribute = (type: fbControlType, values, fb: FormBuilder) => {
  return selectAttribute('subtype', values, fb.h.processSubtypes(fb.opts.subtypes)[type], fb)
}

const selectAttribute = (attribute, values, optionData: ControlTypeLabel[], fb: FormBuilder) => {
  const selectOptions = optionData.map((option, i) => {
    let optionAttrs: Field = Object.assign(
      {
        label: `${fb.i18n.option} ${i}`,
        value: undefined,
      },
      option,
    )

    if (option.value === values[attribute]) {
      optionAttrs.selected = true
    }
    optionAttrs = trimObj(optionAttrs)
    return fb.m('option', optionAttrs.label, optionAttrs)
  })

  const selectAttrs = {
    id: `${attribute}-${fb.lastID}`,
    name: attribute,
    className: `fld-${attribute} form-control`,
  }

  const labelText = mi18n.get(attribute) || capitalize(attribute) || ''
  const label = fb.m('label', labelText, { for: selectAttrs.id })
  const select = fb.m('select', selectOptions, selectAttrs)
  const inputWrap = fb.m('div', select, { className: 'input-wrap' })
  const attrWrap = fb.m('div', [label, inputWrap], {
    className: `form-group ${selectAttrs.name}-wrap`,
  })

  return attrWrap.outerHTML
}
