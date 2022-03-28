import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { styles } from 'ts/shared/constants'
import { MarkupType } from 'types/formbuilder-types'

export const btnStyles = (style, fb: FormBuilder) => {
  let styleField: MarkupType = ''

  // corrects issue where 'undefined' was saved to formData
  if (style === 'undefined') {
    style = 'default'
  }

  const styleLabel = `<label>${fb.i18n.style}</label>`
  styleField += fb.h.input({
    value: style || 'default',
    type: 'hidden',
    className: 'btn-style',
  }).outerHTML
  styleField += '<div class="btn-group" role="group">'

  styles.btn.forEach(btnStyle => {
    const classList = ['btn-xs', 'btn', `btn-${btnStyle}`]
    if (style === btnStyle) {
      classList.push('selected')
    }
    const btn = fb.m('button', mi18n.get(`styles.btn.${btnStyle}`), {
      value: btnStyle,
      type: 'button',
      className: classList.join(' '),
    }).outerHTML

    styleField += btn
  })

  styleField += '</div>'

  styleField = fb.m('div', [styleLabel, styleField], {
    className: 'form-group style-wrap',
  })

  return (styleField as HTMLElement).outerHTML
}
