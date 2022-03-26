import { Field } from './formbuilder-types'

//Need Kevin to review for completeness
export interface layoutTemplates {
  label?: (label: string, data: any) => any
  help?: (helpText: string) => any
  default?: (field: Field, label: JQuery<HTMLElement>, help: JQuery<HTMLElement>, data: any) => any
  noLabel?: (field: Field, label: JQuery<HTMLElement>, help: JQuery<HTMLElement>, data: any) => any
  hidden?: (field: Field) => any

  configure?: () => any
  build?: () => any
}

export type dataType = 'json' | 'xml'

type notifyFunction = (message: string) => any

export interface notify {
  error?: notifyFunction
  success?: notifyFunction
  warning?: notifyFunction
}
