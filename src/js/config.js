import mi18n from 'mi18n'

// eslint-disable-next-line
mi18n.addLanguage('en-US', FB_EN_US)

export const defaultOptions = {
  actionButtons: [], // additional form action buttons- save, data, clear
  allowStageSort: true,
  append: false, // append non-editable content to the form.
  controlOrder: [
    'autocomplete',
    'button',
    'checkbox-group',
    'checkbox',
    'date',
    'file',
    'header',
    'hidden',
    'number',
    'paragraph',
    'radio-group',
    'select',
    'text',
    'textarea',
  ],
  controlPosition: 'right',
  dataType: 'json',
  defaultFields: [],
  disabledActionButtons: [], // save, data, clear
  disabledAttrs: [],
  disabledFieldButtons: {},
  disabledSubtypes: {}, // subtypes you want disabled
  disableFields: [], // Array of fields to disable
  disableHTMLLabels: false, // disables html in field labels
  disableInjectedStyle: false, // removes the injected style
  editOnAdd: false, // opens the edit panel on added field
  fields: [], // add custom control configs
  fieldRemoveWarn: false,
  fieldEditContainer: null, // DOM node or selector
  inputSets: [], // add groups of fields at a time
  notify: {
    error: console.error,
    success: console.log,
    warning: console.warn,
  },
  onAddField: (fieldData, fieldId) => fieldData,
  onClearAll: () => null,
  onCloseFieldEdit: () => null,
  onOpenFieldEdit: () => null,
  onSave: (evt, formData) => null,
  prepend: false,
  replaceFields: [],
  roles: {
    1: 'Administrator',
  },
  scrollToFieldOnAdd: true,
  showActionButtons: true,
  sortableControls: false,
  stickyControls: {
    enable: true,
    offset: {
      top: 5,
      bottom: 'auto',
      right: 'auto',
    },
  },
  subtypes: {},
  templates: {},
  typeUserAttrs: {},
  typeUserDisabledAttrs: {},
  typeUserEvents: {},
}

export const styles = {
  btn: ['default', 'danger', 'info', 'primary', 'success', 'warning'],
}

export const defaultI18n = {
  location: 'https://formbuilder.online/assets/lang/',
}

export const config = {}
