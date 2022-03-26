import { Layout } from '../ts/shared/layout'
import { FormBuilderOptions } from './formbuilder-types'
import { FormRenderOptions } from './formrender-types'
import { LayoutTemplates } from './shared-types'

//Test form builder options

const myTemplates: LayoutTemplates = {
  help: function (helpText) {
    return $('<div/>').addClass('help').append(helpText)
  },
  label: function (label, data) {
    return $('<label class="bright" style="margin-top:15px;"/>').attr('for', data.id).append(label)
  },
}

const actionButtons = [
  {
    type: 'button',
    id: 'clear',
    className: 'clear-all btn btn-danger',
    events: {
      click: () => {
        return
      },
    },
  },
  {
    type: 'button',
    label: 'viewJSON',
    id: 'data',
    className: 'btn btn-default get-data',
    events: {
      click: () => {
        return
      },
    },
  },
  {
    type: 'button',
    id: 'save',
    className: 'btn btn-primary save-template',
    events: {
      click: () => {
        click: () => {
          return
        }
      },
    },
  },
]

class customLayoutClass extends Layout {}

const options: Partial<FormBuilderOptions> = {
  actionButtons: actionButtons,
  allowStageSort: true,
  controlOrder: ['autocomplete', 'checkbox-group'],
  controlPosition: 'left',
  dataType: 'json',
  defaultFields: [
    {
      className: 'form-control',
      label: 'First Name',
      placeholder: 'Enter your first name',
      name: 'first-name',
      required: true,
      type: 'text',
    },
    {
      className: 'form-control',
      label: 'Select',
      name: 'select-1454862249997',
      type: 'select',
      multiple: true,
      values: [
        {
          label: 'Custom Option 1',
          value: 'test-value',
        },
        {
          label: 'Custom Option 2',
          value: 'test-value-2',
        },
      ],
    },
    {
      label: 'Radio',
      name: 'select-1454862249997',
      type: 'radio-group',
    },
  ],
  disabledActionButtons: ['clear'],
  disabledAttrs: ['access'],
  disabledFieldButtons: {
    file: ['delete'],
    text: ['edit', 'remove'],
  },
  disabledSubtypes: {
    text: ['password'],
  },
  disableFields: ['autocomplete'],
  disableHTMLLabels: true,
  disableInjectedStyle: true,
  editOnAdd: true,
  fields: [
    {
      label: 'Email',
      type: 'text',
      subtype: 'email',
      icon: '✉',
    },
  ],
  fieldRemoveWarn: true,
  inputSets: [
    {
      label: 'User Details',
      name: 'user-details',
      showHeader: true,
      fields: [
        {
          type: 'text',
          label: 'First Name',
          className: 'form-control',
        },
        {
          type: 'select',
          label: 'Profession',
          className: 'form-control',
          values: [
            {
              label: 'Street Sweeper',
              value: 'option-2',
              selected: false,
            },
            {
              label: 'Brain Surgeon',
              value: 'option-3',
              selected: false,
            },
          ],
        },
        {
          type: 'textarea',
          label: 'Short Bio:',
          className: 'form-control',
        },
      ],
    },
  ],
  notify: {
    error: function (message) {
      return console.error(message)
    },
    success: function (message) {
      return console.log(message)
    },
    warning: () => {
      return
    },
  },
  onClearAll: function () {
    alert('all fields removed')
  },
  onOpenFieldEdit: function () {
    alert('a field edit panel was opened')
  },
  onCloseFieldEdit: function () {
    alert('a field edit panel was opened')
  },
  onSave: function () {
    return
  },
  persistDefaultFields: true,
  prepend: '<h1>Profile for Miss Marple.</h1>',
  append: '<h2>All information is confidential.</h2>',
  replaceFields: [
    {
      type: 'checkbox-group',
      label: 'Checkbox',
      values: [{ label: 'Option 1', value: '' }],
      icon: '☑',
    },
  ],
  roles: {
    1: 'Administrator',
  },
  scrollToFieldOnAdd: true,
  showActionButtons: false,
  sortableControls: true,
  stickyControls: {
    enable: true,
    offset: {
      top: 20,
      right: 20,
      left: 'auto',
    },
  },
  subtypes: {
    text: ['datetime-local'],
  },
  templates: {
    starRating: function (fieldData) {
      return {
        field: '<span id="' + fieldData.name + '">',
        onRender: function () {
          return
        },
      }
    },
  },
  typeUserAttrs: {
    text: {
      shape: {
        label: 'Class',
        multiple: true,
        options: {
          'red form-control': 'Red',
          'green form-control': 'Green',
          'blue form-control': 'Blue',
        },
        style: 'border: 1px solid red',
      },
    },
  },
  typeUserDisabledAttrs: {
    'checkbox-group': ['name', 'description', 'required', 'inline', 'toggle'],
    text: ['name', 'description', 'required', 'inline', 'toggle'],
  },
  typeUserEvents: {
    text: {
      onadd: function () {
        return
      },
      onclone: function () {
        return
      },
    },
  },
  defaultGridColumnClass: 'col-xs-12',
  cancelGridModeDistance: 3,
  enableColumnInsertMenu: true,
  enableEnhancedBootstrapGrid: true,
  layoutTemplates: myTemplates,
  onAddOption: (optionTemplate, params) => {
    optionTemplate.label = `Option ${params.index + 1}`
    optionTemplate.value = `option-${params.index + 1}`
    return optionTemplate
  },
  onAddFieldAfter: function () {
    return
  },
  onAddField: function () {
    return
  },
  layout: customLayoutClass,
}
console.log(options)

const defaults: FormRenderOptions = {
  layout: Layout,
  layoutTemplates: {},
  controls: {},
  controlConfig: {},
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
