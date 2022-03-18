// import { defaultOptions } from '../config'
import mi18n from 'mi18n'

import { formBuilderOptions } from '../../types/formbuilder-types'
import { Data } from '../data'
import Dom from '../dom'

export class FormBuilderClass {
  i18n = mi18n.current
  formID = `frmb-${new Date().getTime()}`
  data = new Data(this.formID)
  d = new Dom(this.formID)

  formRows = []

  preserveTempContainers: any[]
  rowWrapperClassSelector: string
  colWrapperClassSelector: string
  colWrapperClass: string
  prepFieldVars: ($field: any, isNew?: boolean) => void
  currentEditPanel: any

  constructor(public opts: formBuilderOptions, el: HTMLElement) {}

  actions: {
    getFieldTypes: (activeOnly: any) => any
    clearFields: (animate: any) => boolean
    showData: any
    save: (minify: any) => any
    addField: (field: any, index: any) => void
    removeField: any
    getData: any
    setData: (formData: any) => void
    setLang: (locale: any) => void
    showDialog: any
    toggleFieldEdit: (fieldId: any) => void
    toggleAllFieldEdit: () => void
    closeAllFieldEdit: any
    getCurrentFieldId: () => string
  }
}

export default {}
