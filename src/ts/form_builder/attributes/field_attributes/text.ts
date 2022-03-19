import mi18n from 'mi18n'
import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { attrString, parsedHtml } from 'ts/utils'
import { MarkupType, TextInputAttributes } from 'types/formbuilder-types'

export const textAttribute = (attribute, values, fb: FormBuilderClass, isHidden = false) => {
  const textArea = ['paragraph']

  let attrVal = values[attribute] || ''
  let attrLabel = mi18n.get(attribute)

  if (attribute === 'label') {
    if (textArea.includes(values.type)) {
      attrLabel = mi18n.get('content')
    } else {
      attrVal = parsedHtml(attrVal)
    }
  }

  const placeholder = mi18n.get(`placeholders.${attribute}`) || ''
  let attributefield: MarkupType = ''
  const noMakeAttr = []

  if (!noMakeAttr.some(elem => elem === true)) {
    const inputConfig: TextInputAttributes = {
      name: attribute,
      placeholder,
      className: `fld-${attribute} form-control`,
      id: `${attribute}-${fb.data.lastID}`,
    }
    const attributeLabel = fb.m('label', attrLabel, {
      for: inputConfig.id,
    }).outerHTML

    if (attribute === 'label' && !fb.opts.disableHTMLLabels) {
      inputConfig.contenteditable = true
      attributefield += fb.m('div', attrVal, inputConfig).outerHTML
    } else {
      inputConfig.value = attrVal
      inputConfig.type = 'text'
      attributefield += `<input ${attrString(inputConfig)}>`
    }

    const inputWrap = `<div class="input-wrap">${attributefield}</div>`

    let visibility = isHidden ? 'none' : 'block'
    if (attribute === 'value') {
      visibility = values.subtype && values.subtype === 'quill' && 'none'
    }

    attributefield = fb.m('div', [attributeLabel, inputWrap], {
      className: `form-group ${attribute}-wrap`,
      style: `display: ${visibility}`,
    })
  }

  return (attributefield as HTMLElement).outerHTML
}
