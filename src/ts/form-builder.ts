import mi18n from 'mi18n'
import { formBuilderOptions, FormBuilderPublicAPIActions } from 'types/formbuilder-types'
import '../sass/form-builder.scss'
import { defaultI18n, defaultOptions } from './form_builder/config'
import { FormBuilder } from './form_builder/formBuilder'

jQuery.fn.formBuilder = function (
  methodOrOptions: formBuilderOptions | keyof FormBuilderPublicAPIActions = {},
  ...args
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const el = this

  const isMethod = typeof methodOrOptions === 'string'
  if (isMethod) {
    const formBuilder = $(el).data('formBuilder') as FormBuilder

    if (formBuilder) {
      if (typeof formBuilder.actions[methodOrOptions] === 'function') {
        return formBuilder.actions[methodOrOptions].apply(this, args)
      } else {
        return formBuilder.actions[methodOrOptions]
      }
    }
  } else {
    return new Promise(function (resolve, reject) {
      //@ts-ignore
      const { i18n, ...opts } = jQuery.extend({}, defaultOptions, methodOrOptions, true)
      const i18nOpts = jQuery.extend({}, defaultI18n, i18n, true)

      mi18n
        .init(i18nOpts)
        .then(() => {
          const formBuilder = new FormBuilder(opts, el)
          jQuery(el).data('formBuilder', formBuilder)

          resolve(formBuilder)
        })
        .catch(err => {
          reject(err)
          ;(methodOrOptions as formBuilderOptions).notify.error(err)
        })
    })
  }
}
