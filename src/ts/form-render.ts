import { formRenderOptions, FormRenderPublicAPIActions } from 'types/formrender-types'
import '../sass/form-render.scss'
import './control/index'
import { FormRender } from './form_render/formRender'

jQuery.fn.formRender = function (methodOrOptions: formRenderOptions | keyof FormRenderPublicAPIActions = {}, ...args) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const el = this

  const isMethod = typeof methodOrOptions === 'string'
  if (isMethod) {
    const formRender = $(el).data('formRender') as FormRender
    if (formRender) {
      if (typeof formRender.actions[methodOrOptions] === 'function') {
        return formRender.actions[methodOrOptions].apply(this, args)
      } else {
        return formRender.actions[methodOrOptions]
      }
    }
  } else {
    const formRender = new FormRender(methodOrOptions, el)
    jQuery(el).data('formRender', formRender)
    formRender.actions.render(formRender.options.formData, formRender.options)

    return formRender
  }
}
