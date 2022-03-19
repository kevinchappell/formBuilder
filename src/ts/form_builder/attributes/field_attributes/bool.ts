import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { CheckboxAttributes, Labels } from 'types/formbuilder-types'

export const boolAttribute = (name, values, labels = {} as Labels, fb: FormBuilderClass) => {
  const label = txt =>
    fb.m('label', txt, {
      for: `${name}-${fb.data.lastID}`,
    }).outerHTML

  const cbAttrs: CheckboxAttributes = {
    type: 'checkbox-group',
    className: `fld-${name}`,
    name,
    id: `${name}-${fb.data.lastID}`,
  }

  if (values[name]) {
    cbAttrs.checked = true
  }

  const left = []
  let right = [fb.m('input', null, cbAttrs).outerHTML]

  if (labels.first) {
    left.push(label(labels.first))
  }

  if (labels.second) {
    right.push(' ', label(labels.second))
  }
  if (labels.content) {
    right.push(labels.content)
  }

  right = [fb.m('div', right, { className: 'input-wrap' }).outerHTML]

  return fb.m('div', left.concat(right), {
    className: `form-group ${name}-wrap`,
  }).outerHTML
}
