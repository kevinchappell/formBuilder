export const defaultOptions = {
  controlPosition: 'right',
  append: false,
  actionButtons: [],
  allowStageSort: true,
  controlOrder: [
    'autocomplete',
    'button',
    'checkbox',
    'checkbox-group',
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
  dataType: 'json',
  // Array of fields to disable
  disableFields: [],
  disabledAttrs: [],
  disabledActionButtons: [], // save, data, clear
  disabledFieldButtons: {},
  editOnAdd: false,
  // Uneditable fields or other content you would like to appear
  // before and after regular fields:
  // array of objects with fields values
  // ex:
  // defaultFields: [{
  //   label: 'First Name',
  //   name: 'first-name',
  //   required: 'true',
  //   description: 'Your first name',
  //   type: 'text'
  // }, {
  //   label: 'Phone',
  //   name: 'phone',
  //   description: 'How can we reach you?',
  //   type: 'text'
  // }],
  defaultFields: [],
  fields: [],
  fieldRemoveWarn: false,
  fieldEditContainer: null, // DOM node or selector
  inputSets: [],
  notify: {
    error: console.error,
    success: console.log,
    warning: console.warn,
  },
  replaceFields: [],
  roles: {
    1: 'Administrator',
  },
  showActionButtons: true,
  onSave: (evt, formData) => null,
  onAddField: (fieldData, fieldId) => fieldData,
  onClearAll: () => null,
  onOpenFieldEdit: () => null,
  onCloseFieldEdit: () => null,
  prepend: false,
  sortableControls: false,
  scrollToFieldOnAdd: true,
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
  typeUserDisabledAttrs: {},
  typeUserAttrs: {},
  typeUserEvents: {},
}

export const styles = {
  btn: ['default', 'danger', 'info', 'primary', 'success', 'warning'],
}

export const defaultI18n = {
  location: 'https://formbuilder.online/assets/lang/',
}

export const config = {}
