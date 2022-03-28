import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { SelectAttributes } from 'types/formbuilder-types'

/**
 * Select input for multiple choice user attributes
 * @todo  replace with selectAttr
 * @param  {String} name
 * @param  {Object} fieldData
 * @return {String}         select markup
 */
export const selectUserAttrs = (name, fieldData, fb: FormBuilder) => {
  const { multiple, options, label: labelText, value, class: classname, className, ...restData } = fieldData
  const optis = Object.keys(options).map(val => {
    const attrs: SelectAttributes = { value: val }
    const optionTextVal = options[val]
    const optionText = Array.isArray(optionTextVal) ? mi18n.get(...optionTextVal) || optionTextVal[0] : optionTextVal
    if (Array.isArray(value) ? value.includes(val) : val === value) {
      attrs.selected = null
    }

    return fb.m('option', optionText, attrs)
  })

  const selectAttrs: SelectAttributes = {
    id: `${name}-${fb.lastID}`,
    title: restData.description || labelText || name.toUpperCase(),
    name,
    className: `fld-${name} form-control ${classname || className || ''}`.trim(),
  }

  if (multiple) {
    selectAttrs.multiple = true
  }

  const label = `<label for="${selectAttrs.id}">${fb.i18n[name]}</label>`

  Object.keys(restData).forEach(function (attr) {
    selectAttrs[attr] = restData[attr]
  })

  const select = fb.m('select', optis, selectAttrs).outerHTML
  const inputWrap = `<div class="input-wrap">${select}</div>`
  return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`
}
