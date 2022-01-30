import { EditorManager } from 'tinymce'

export interface Field extends FieldTypes {
  label?: string
  values?: [] | {}
  name?: string
  className?: string
  style?: string
}

export interface FieldData extends Field {
  userData?: any[]
  class?: string
  value?: any
  role?: string
}

export interface MarkupAttributes extends BaseControlAttributes {
  events?: any
}

export interface Coords {
  pageX: number
  pageY: number
}

export interface GridInfo {
  rowNumber?: number
  columnSize?: number
  addedDefaultColumnClass?: boolean
}

export interface FieldTypes {
  type?: string
  subtype?: string
}

export interface Layout {
  controls: any
}

export interface i18nDefinition {
  mi18n: any
  inactive: any
  icon: any
  i18n: any
}

export interface BaseControlAttributes {
  type?: string
  id?: string
  className?: string
  name?: string
  placeholder?: any
  value?: any
  title?: string
  for?: string
  class?: string
  href?: string
  rel?: string

  style?: any
  dataFieldId?: string
}

export interface CheckboxAttributes extends BaseControlAttributes {
  checked?: string | boolean
}

export interface SelectAttributes extends BaseControlAttributes {
  selected?: string | boolean
  multiple?: boolean
}

export interface TextInputAttributes extends BaseControlAttributes {
  contenteditable?: any
}

export interface Labels {
  first?: string
  second?: string
  content?: any
}

export interface FormBuilderFormData {
  values: any[]
  userData: any[]
}

declare global {
  interface Window {
    fbLoaded: any
    fbEditors: any
    opera: any
    tinymce: EditorManager
    fbControls: any
    lastFormBuilderCopiedTinyMCE?: any
    Quill?: any
  }

  interface JQuery {
    formBuilder({}): JQuery
    formRender({}): JQuery
    swapWith(that: any): JQuery
    rateYo(rating?: any): JQuery
    fineUploader(args: any): JQuery
  }
}

export type MarkupType = string | HTMLElement
