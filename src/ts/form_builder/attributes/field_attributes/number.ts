import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { trimObj } from 'ts/shared/utils'

export const numberAttribute = (attribute, values, fb: FormBuilder) => {
  const { class: classname, className, value, ...attrs } = values
  const attrVal = attrs[attribute] || value
  const attrLabel = mi18n.get(attribute) || attribute
  const placeholder = mi18n.get(`placeholder.${attribute}`)

  const inputConfig = {
    type: 'number',
    value: attrVal,
    name: attribute,
    placeholder,
    className: `fld-${attribute} form-control ${classname || className || ''}`.trim(),
    id: `${attribute}-${fb.lastID}`,
  }
  const numberAttribute = fb.h.input(trimObj(inputConfig)).outerHTML
  const inputWrap = `<div class="input-wrap">${numberAttribute}</div>`
  const inputLabel = `<label for="${inputConfig.id}">${attrLabel}</label>`

  return fb.m('div', [inputLabel, inputWrap], {
    className: `form-group ${attribute}-wrap`,
  }).outerHTML
}
