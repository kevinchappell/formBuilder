import { Layout } from 'ts/shared/layout'
import { CustomControlTemplate } from './formbuilder-types'
import { ControlConfig, dataType, LayoutTemplates, notify } from './shared-types'

export interface FormRenderOptions {
  disableInjectedStyle?: boolean
  forceTemplate?: string
  layout?: typeof Layout
  layoutTemplates?: LayoutTemplates
  container?: boolean

  controls?: any
  controlConfig?: ControlConfig
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

  templates?: CustomControlTemplate
  notify?: notify
  overrideMethods?: FormRenderPublicAPIOverrides
}

export interface FormRenderPublicAPIActions {
  userData: () => any
  clear: () => any
  setData: (formData) => any
  render: (formData, options) => any
  html: () => string
}

export interface FormRenderPublicAPIOverrides {
  appendFormFields?: (fields: any) => any
  emptyContainer?: () => any
}
