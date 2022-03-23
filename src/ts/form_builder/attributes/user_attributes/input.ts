import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { attrString } from 'ts/utils'

/**
 * Text input value for attribute
 * @param  {String} name
 * @param  {Object} inputAttrs also known as values
 * @return {String}       input markup
 */
export const inputUserAttrs = (name, inputAttrs, fb: FormBuilderClass) => {
  const { class: classname, className, ...attrs } = inputAttrs
  let textAttrs = {
    id: name + '-' + fb.data.lastID,
    title: attrs.description || attrs.label || name.toUpperCase(),
    name: name,
    type: attrs.type || 'text',
    className: [`fld-${name}`, (classname || className || '').trim()],
    value: attrs.value || '',
  }
  const label = `<label for="${textAttrs.id}">${fb.i18n[name] || ''}</label>`

  const optionInputs = ['checkbox', 'checkbox-group', 'radio-group']
  if (!optionInputs.includes(textAttrs.type)) {
    textAttrs.className.push('form-control')
  }

  textAttrs = Object.assign({}, attrs, textAttrs)

  const textInput = (() => {
    if (textAttrs.type === 'textarea') {
      const textValue = textAttrs.value
      delete textAttrs.value
      return `<textarea ${attrString(textAttrs)}>${textValue}</textarea>`
    } else {
      return `<input ${attrString(textAttrs)}>`
    }
  })()

  const inputWrap = `<div class="input-wrap">${textInput}</div>`
  return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`
}
