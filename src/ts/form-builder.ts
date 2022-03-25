import mi18n from 'mi18n'
import { formBuilderOptions } from 'types/formbuilder-types'
import '../sass/form-builder.scss'
import { config, defaultI18n, defaultOptions } from './form_builder/config'
import { FormBuilderClass } from './form_builder/formBuilder'
import { markup } from './shared/utils'

function FormBuilder(opts: formBuilderOptions, element, $) {
  const fb = new FormBuilderClass(opts, element)
  return fb
}

const methods = {
  init: (options, elems) => {
    const { i18n, ...opts } = jQuery.extend({}, defaultOptions, options, true)
    const i18nOpts = jQuery.extend({}, defaultI18n, i18n, true)

    config.opts = opts

    methods.instance = {
      actions: {
        getFieldTypes: null,
        addField: null,
        clearFields: null,
        closeAllFieldEdit: null,
        getData: null,
        removeField: null,
        save: null,
        setData: null,
        setLang: null,
        showData: null,
        showDialog: null,
        toggleAllFieldEdit: null,
        toggleFieldEdit: null,
        getCurrentFieldId: null,
      },
      markup,
      get formData() {
        return methods.instance.actions.getData && methods.instance.actions.getData('json')
      },
      promise: new Promise(function (resolve, reject) {
        mi18n
          .init(i18nOpts)
          .then(() => {
            elems.each(i => {
              const formBuilder = new FormBuilder(opts, elems[i], jQuery)
              jQuery(elems[i]).data('formBuilder', formBuilder)
              Object.assign(methods, formBuilder.actions, { markup })
              methods.instance.actions = formBuilder.actions
            })
            delete methods.instance.promise
            resolve(methods.instance)
          })
          .catch(err => {
            reject(err)
            opts.notify.error(err)
          })
      }),
    }

    return methods.instance
  },
}

jQuery.fn.formBuilder = function (methodOrOptions: formBuilderOptions = {}, ...args) {
  const isMethod = typeof methodOrOptions === 'string'
  if (isMethod) {
    if (methods[methodOrOptions]) {
      if (typeof methods[methodOrOptions] === 'function') {
        //@ts-ignore
        return methods[methodOrOptions].apply(this, args)
      }
      return methods[methodOrOptions]
    }
  } else {
    const instance = methods.init(methodOrOptions, this)
    Object.assign(methods, instance)
    return instance
  }
}
