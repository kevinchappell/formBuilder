import fontConfig from 'fonts/config.json'
import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { getContentType } from 'ts/utils'
import { CheckboxAttributes } from 'types/formbuilder-types'

export const selectFieldOptions = (optionData, multipleSelect, fb: FormBuilderClass) => {
  const optionTemplate = { selected: false, label: '', value: '' }
  const optionInputType = {
    selected: multipleSelect ? 'checkbox' : 'radio',
  }

  const optionInputTypeMap = {
    boolean: (value, prop) => {
      const attrs: CheckboxAttributes = { value, type: optionInputType[prop] || 'checkbox' }
      if (value) {
        attrs.checked = !!value
      }
      return ['input', null, attrs]
    },
    number: value => ['input', null, { value, type: 'number' }],
    string: (value, prop) => [
      'input',
      null,
      { value, type: 'text', placeholder: mi18n.get(`placeholder.${prop}`) || '' },
    ],
    array: values => ['select', values.map(({ label, value }) => fb.m('option', label, { value }))],
    object: ({ tag, content, ...attrs }) => [tag, content, attrs],
  }

  optionData = { ...optionTemplate, ...optionData }

  const optionInputs = Object.entries(optionData).map(([prop, val]) => {
    const optionInputDataType = getContentType(val)

    const [tag, content, attrs] = optionInputTypeMap[optionInputDataType](val, prop)
    const optionClassName = `option-${prop} option-attr`
    attrs['data-attr'] = prop
    attrs.className = attrs.className ? `${attrs.className} ${optionClassName}` : optionClassName

    return fb.m(tag, content, attrs)
  })

  const removeAttrs = {
    className: `remove btn ${fontConfig.css_prefix_text}cancel`,
    title: mi18n.get('removeMessage'),
  }

  optionInputs.push(fb.m('a', null, removeAttrs))

  return fb.m('li', optionInputs).outerHTML
}
