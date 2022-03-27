import { EditorManager } from 'tinymce'
import { Layout } from '../ts/shared/layout'
import { PartialRecord } from './helper-types'
import { ControlConfig, dataType, LayoutTemplates, notify } from './shared-types'

export interface Field extends FieldTypes, BaseControlAttributes, SelectAttributes {
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
  columnClassSize?: string
  addedDefaultColumnClass?: boolean
}

export interface FieldTypes {
  type?: fbControlType
  subtype?: fbControlSubtype
}

export interface i18nDefinition {
  mi18n: any
  inactive: any
  icon: any
  i18n: any
}

export interface BaseControlAttributes {
  type?: fbControlType
  id?: string
  className?: string
  name?: string
  placeholder?: string
  value?: any
  title?: string
  for?: string
  class?: string
  href?: string
  rel?: string
  style?: any
  dataFieldId?: string
  icon?: string
  required?: boolean
}

export interface CheckboxAttributes extends BaseControlAttributes {
  checked?: string | boolean
}

export interface SelectAttributes extends BaseControlAttributes {
  selected?: string | boolean
  multiple?: boolean
}

export interface TextInputAttributes extends BaseControlAttributes {
  contenteditable?: boolean
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
    fbLoaded: fbLoaded
    fbEditors: any
    opera: any
    tinymce: EditorManager
    fbControls: any
    lastFormBuilderCopiedTinyMCE?: any
    Quill?: any
  }

  interface fbLoaded {
    js: string[]
    css: string[]
  }

  interface JQuery {
    formBuilder({}): JQuery
    formRender({}): JQuery
    controlRender({}): JQuery
    swapWith(that: any): JQuery
    rateYo(rating?: any): JQuery
    fineUploader(args: any): JQuery
  }
}

export type MarkupType = string | HTMLElement

export type SubTypeOptions = PartialRecord<fbControlType, fbAllControlTypes[] | string[]>

export type CustomControlTemplate = Record<string, templateFunction>

export interface FormBuilderOptions {
  layout?: typeof Layout
  layoutTemplates?: LayoutTemplates
  onAddField?: (lastID: string, field: Field) => any
  onAddFieldAfter?: (lastID: string, field: Field) => any
  onAddOption?: (option: OptionTemplate, params: OptionTemplateParams) => any
  actionButtons?: ActionButton[]
  disabledActionButtons?: string[]
  allowStageSort?: boolean
  controlOrder?: fbControlType[]
  controlPosition?: 'right' | 'left'
  dataType?: dataType
  defaultFields?: Field[]
  disabledAttrs?: DefaultAttributeNames[]
  disabledFieldButtons?: PartialRecord<fbControlType, layoutFieldButtons[]>
  disabledSubtypes?: PartialRecord<fbControlType, fbControlSubtype[]>
  disableFields?: fbControlType[]
  disableHTMLLabels?: boolean
  disableInjectedStyle?: boolean
  editOnAdd?: boolean
  fields?: Field[]
  fieldRemoveWarn?: boolean
  inputSets?: InputSets[]
  notify?: notify
  onClearAll?: () => any
  onCloseFieldEdit?: editPanelCallback
  onOpenFieldEdit?: editPanelCallback
  onSave?: onSaveCallback
  persistDefaultFields?: boolean
  prepend?: string | HTMLElement | string[] | HTMLElement[] | boolean
  append?: string | HTMLElement | string[] | HTMLElement[] | boolean
  replaceFields?: Field[]
  roles?: Record<number, string>
  scrollToFieldOnAdd?: boolean
  showActionButtons?: boolean
  sortableControls?: boolean
  stickyControls?: StickyControls
  formData?: any
  subtypes?: SubTypeOptions
  templates?: CustomControlTemplate
  typeUserAttrs?: PartialRecord<fbControlType, any>
  typeUserDisabledAttrs?: PartialRecord<fbControlType, DefaultAttributeNames[]>
  typeUserEvents?: PartialRecord<
    fbControlType,
    PartialRecord<'onadd' | 'onclone' | 'onremove', (field: HTMLElement) => any>
  >
  defaultGridColumnClass?: string
  cancelGridModeDistance?: number
  enableColumnInsertMenu?: boolean
  enableEnhancedBootstrapGrid?: boolean
  i18n?: i18n
  controlConfig?: ControlConfig
}

export type fbAllControlTypes = fbControlType | fbControlSubtype

interface i18n {
  locale?: string
  locations?: string
  extension?: string
  override?: Record<string, any>
}

export interface StickyControls {
  enable?: boolean
  offset?: Offset
}
export interface Offset {
  top?: number | string
  bottom?: number | string
  right?: number | string
  left?: number | string
}

export type ActionButton = ButtonAttributes

export interface ButtonAttributes {
  title?: string
  id?: string
  className?: string
  label?: string
  type?: string
  events?: {
    click: (evt) => any
  }
}

type DefaultAttributeNames =
  | 'access'
  | 'className'
  | 'description'
  | 'inline'
  | 'label'
  | 'max'
  | 'maxlength'
  | 'min'
  | 'multiple'
  | 'name'
  | 'options'
  | 'other'
  | 'placeholder'
  | 'required'
  | 'rows'
  | 'step'
  | 'style'
  | 'subtype'
  | 'toggle'
  | 'value'

// export interface fbField {
//   type: fbControlType

//   className?: string
//   label?: string
//   placeholder?: string
//   name?: string
//   required?: boolean
//   value?: any
//   values?: any[]

//   toggle?: boolean
//   rows?: number
//   other?: boolean
//   multiple?: boolean
//   min?: number
//   max?: number
//   maxlength?: number
//   access?: boolean
//   description?: string
//   inline?: boolean
//   options?: []
//   style?: string
//   subtype?: fbControlSubtype
//   icon?: string
// }

export type fbControlType =
  | 'file'
  | 'autocomplete'
  | 'button'
  | 'checkbox-group'
  | 'checkbox'
  | 'date'
  | 'header'
  | 'hidden'
  | 'number'
  | 'paragraph'
  | 'radio-group'
  | 'select'
  | 'starRating'
  | 'text'
  | 'textarea'

export type fbControlSubtype = 'file' | 'date' | 'number' | 'password' | 'email' | 'color' | 'tel' | 'tinymce' | 'quill'

export type layoutFieldButtons = 'remove' | 'edit' | 'delete' | 'grid'

interface InputSets {
  label: string
  name: string
  showHeader: boolean
  fields: Field[]
}

type editPanelCallback = (editPanel: HTMLElement) => any
type onSaveCallback = (event: any, formData: any) => any

type templateFunction = (fieldData: any) => ControlBase
interface ControlBase {
  field: string
  onRender: () => any
}

interface OptionTemplate {
  label: string
  value?: string
  selected?: boolean
}

interface OptionTemplateParams {
  type: fbControlType
  index: number
  isMultiple: boolean
}

export interface FormBuilderPublicAPIActions {
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
