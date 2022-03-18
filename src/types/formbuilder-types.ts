import { EditorManager } from 'tinymce'
import { PartialRecord } from './helper-types'

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
  columnClassSize?: string
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

export interface formBuilderOptions {
  actionButtons?: actionButtonTypes[]
  allowStageSort?: boolean
  controlOrder?: fbControlType[]
  controlPosition?: 'right' | 'left'
  dataType?: 'json' | 'xml'
  defaultFields?: fbField[]
  disabledActionButtons?: actionButtonTypes[]
  disabledAttrs?: defaultAttributeNames[]
  disabledFieldButtons?: PartialRecord<fbControlType, layoutFieldButtons[]>
  disabledSubtypes: PartialRecord<fbControlType, fbControlSubtype[]>
  disableFields?: fbControlType[]
  disableHTMLLabels?: boolean
  disableInjectedStyle?: boolean
  editOnAdd?: boolean
  fields?: fbField[]
  fieldRemoveWarn?: boolean
  inputSets?: inputSets[]
  notify?: notify
  onClearAll?: (formData: any) => any
  onCloseFieldEdit?: editPanelCallback
  onOpenFieldEdit?: editPanelCallback
  onSave?: onSaveCallback
  persistDefaultFields?: boolean
  prepend?: string | HTMLElement | string[] | HTMLElement[] | boolean
  append?: string | HTMLElement | string[] | HTMLElement[] | boolean
  replaceFields?: fbField[]
  roles?: Record<number, string>
  scrollToFieldOnAdd?: boolean
  showActionButtons?: boolean
  sortableControls?: boolean
  stickyControls?: StickyControls
  formData?: any
  subtypes?: PartialRecord<fbControlType, fbControlSubtype[] | string[]>
  templates?: Record<string, templateFunction>
  typeUserAttrs?: PartialRecord<fbControlType, any>
  typeUserDisabledAttrs?: PartialRecord<fbControlType, defaultAttributeNames[]>
  typeUserEvents?: PartialRecord<fbControlType, PartialRecord<'onadd' | 'onclone', (field: HTMLElement) => any>>
  defaultGridColumnClass?: string
  cancelGridModeDistance?: number
  enableColumnInsertMenu?: boolean
  enableEnhancedBootstrapGrid?: boolean
}
export interface DisabledFieldButtonsOrDisabledSubtypesOrNotifyOrFormDataOrSubtypesOrTemplatesOrTypeUserAttrsOrTypeUserDisabledAttrsOrTypeUserEvents {}

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

type actionButtonTypes = 'data' | 'save' | 'clear'

type defaultAttributeNames =
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

export interface fbField {
  type: fbControlType

  className?: string
  label?: string
  placeholder?: string
  name?: string
  required?: boolean
  value?: any
  values?: any[]

  toggle?: boolean
  rows?: number
  other?: boolean
  multiple?: boolean
  min?: number
  max?: number
  maxlength?: number
  access?: boolean
  description?: string
  inline?: boolean
  options?: []
  style?: string
  subtype?: fbControlSubtype
  icon?: string
}

export type fbControlType =
  | 'file'
  | 'autocomplete'
  | 'button'
  | 'checkbox-group'
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

export type layoutFieldButtons = 'remove' | 'edit' | 'delete'

interface inputSets {
  label: string
  name: string
  showHeader: boolean
  fields: fbField[]
}

interface notify {
  error?: notifyFunction
  success?: notifyFunction
  warning?: notifyFunction
}
type notifyFunction = (message: string) => any
type editPanelCallback = (editPanel: HTMLElement) => any
type onSaveCallback = (event: any, formData: any) => any

type templateFunction = (fieldData: any) => ControlBase
interface ControlBase {
  field: string
  onRender: () => any
}
