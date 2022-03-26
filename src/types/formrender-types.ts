import { Layout } from 'ts/shared/layout'
import { dataType, LayoutTemplates, notify } from './shared-types'

export interface FormRenderOptions {
  disableInjectedStyle?: boolean
  forceTemplate?: string
  layout?: typeof Layout
  layoutTemplates?: LayoutTemplates
  container?: boolean

  controls?: any
  controlConfig?: any
  dataType?: dataType
  formData?: any
  i18n?: any
  messages?: {
    formRendered: string
    noFormData: string
    other: string
    selectColor: string
    invalidControl: string
  }
  onRender?: () => any
  render?: boolean

  templates?: {}
  notify?: notify
}

export interface FormRenderPublicAPIActions {
  userData: () => any
  clear: () => any
  setData: (formData) => any
  render: (formData, options) => any
  html: () => string
}
