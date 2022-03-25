import { Layout } from 'ts/shared/layout'
import { dataType, layoutTemplates, notify } from './shared-types'

export interface formRenderOptions {
  disableInjectedStyle?: boolean
  forceTemplate?: string
  layout?: typeof Layout
  layoutTemplates?: layoutTemplates
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
