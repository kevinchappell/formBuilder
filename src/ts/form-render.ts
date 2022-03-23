import { formRenderOptions } from 'types/formrender-types'
import '../sass/form-render.scss'
import './control/index'
import { FormRender } from './form_render/formRender'
;(function ($) {
  let formRenderForms

  const methods = {
    init: (forms, options = {}) => {
      formRenderForms = forms
      methods.instance = new FormRender(options)
      forms.each(index => methods.instance.render(forms[index], index))

      return { ...methods.instance, ...methods }
    },
    userData: () => methods.instance && methods.instance.userData,
    clear: () => methods.instance && methods.instance.clear(),
    setData: formData => {
      if (methods.instance) {
        const instance = methods.instance
        instance.options.formData = instance.parseFormData(formData)
      }
    },
    render: (formData, options = {}) => {
      if (methods.instance) {
        const instance = methods.instance
        if (!formData) {
          formData = instance.options.formData
        }
        instance.options = Object.assign({}, instance.options, options, { formData: instance.parseFormData(formData) })
        formRenderForms.each(index => methods.instance.render(formRenderForms[index], index))
      }
    },
    html: () => formRenderForms.map(index => formRenderForms[index]).html(),
  }

  $.fn.formRender = function (methodOrOptions = {}, ...args) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, args)
    } else {
      return methods.init(this, methodOrOptions)
    }
  }

  /**
   * renders an individual field into the current element
   * @param {Object} data - data structure for a single field output from formBuilder
   * @param {Object} options - optional subset of formRender options - doesn't support container or other form rendering based options.
   * @return {DOMElement} the rendered field
   */
  $.fn.controlRender = function (data, options: formRenderOptions = {}) {
    options.formData = data
    options.dataType = typeof data === 'string' ? 'json' : 'xml'

    const formRender = new FormRender(options)
    const $elems = this
    $elems.each(i => formRender.renderControl($elems[i]))

    return $elems
  }
})(jQuery)
