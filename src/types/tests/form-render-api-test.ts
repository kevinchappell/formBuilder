import { Layout } from '../../ts/shared/layout'
import { FormRenderOptions } from '../formrender-types'

const defaults: FormRenderOptions = {
  layout: Layout,
  layoutTemplates: {},
  controls: {},
  controlConfig: {
    'textarea.tinymce': {
      paste_data_images: false,
    },
  },
  container: false,
  dataType: 'json',
  formData: false,
  i18n: Object.assign({}),
  messages: {
    formRendered: 'Form Rendered',
    noFormData: 'No form data.',
    other: 'Other',
    selectColor: 'Select Color',
    invalidControl: 'Invalid control',
  },
  onRender: () => {
    return
  },
  render: true,
  templates: {},
  notify: {
    error: error => {
      console.log(error)
    },
    success: success => {
      console.log(success)
    },
    warning: warning => {
      console.warn(warning)
    },
  },
  disableInjectedStyle: true,
  forceTemplate: 'hidden',
}
console.log(defaults)
