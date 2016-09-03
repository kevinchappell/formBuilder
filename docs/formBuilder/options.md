# Options

Nearly every site and app will use formBuilder in a different way and to accommodate formBuilder comes with a fair number of options. Below you'll find the `default` options for the plugin. These options can be extended or disabled as needed and in this we'll cover how to do that.

<pre><code class="js">
var defaults = {
  controlPosition: 'right',
  controlOrder: [
    'autocomplete',
    'button',
    'checkbox',
    'checkbox-group',
    'date',
    'file',
    'header',
    'hidden',
    'paragraph',
    'number',
    'radio-group',
    'select',
    'text',
    'textarea'
  ],
  dataType: 'xml',
  /**
   * Disable-able field types
   * ['text','select','textarea','radio-group','hidden','file','date','checkbox-group','checkbox','button','autocomplete']
   */
  disableFields: [],
  editOnAdd: false,
  // formData: '', // accepts json or xml formData string
  // Uneditable fields or other content you would like to appear before and after regular fields:
  append: false,
  prepend: false,
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
  fieldRemoveWarn: false,
  roles: {
    1: 'Administrator'
  },
  messages: {
    addOption: 'Add Option',
    allFieldsRemoved: 'All fields were removed.',
    allowSelect: 'Allow Select',
    autocomplete: 'Autocomplete',
    button: 'Button',
    cannotBeEmpty: 'This field cannot be empty',
    checkboxGroup: 'Checkbox Group',
    checkbox: 'Checkbox',
    checkboxes: 'Checkboxes',
    className: 'Class',
    clearAllMessage: 'Are you sure you want to clear all fields?',
    clearAll: 'Clear',
    close: 'Close',
    content: 'Content',
    copy: 'Copy To Clipboard',
    dateField: 'Date Field',
    description: 'Help Text',
    descriptionField: 'Description',
    devMode: 'Developer Mode',
    editNames: 'Edit Names',
    editorTitle: 'Form Elements',
    editXML: 'Edit XML',
    enableOther: 'Enable &quot;Other&quot;',
    enableOtherMsg: 'Permit users to enter an unlisted option',
    fieldDeleteWarning: false,
    fieldVars: 'Field Variables',
    fieldNonEditable: 'This field cannot be edited.',
    fieldRemoveWarning: 'Are you sure you want to remove this field?',
    fileUpload: 'File Upload',
    formUpdated: 'Form Updated',
    getStarted: 'Drag a field from the right to this area',
    header: 'Header',
    hide: 'Edit',
    hidden: 'Hidden Input',
    label: 'Label',
    labelEmpty: 'Field Label cannot be empty',
    limitRole: 'Limit access to one or more of the following roles:',
    mandatory: 'Mandatory',
    maxlength: 'Max Length',
    minOptionMessage: 'This field requires a minimum of 2 options',
    name: 'Name',
    no: 'No',
    number: 'Number',
    off: 'Off',
    on: 'On',
    option: 'Option',
    optional: 'optional',
    optionLabelPlaceholder: 'Label',
    optionValuePlaceholder: 'Value',
    optionEmpty: 'Option value required',
    other: 'Other',
    paragraph: 'Paragraph',
    placeholder: 'Placeholder',
    placeholders: {
      value: 'Value',
      label: 'Label',
      text: '',
      textarea: '',
      email: 'Enter you email',
      placeholder: '',
      className: 'space separated classes',
      password: 'Enter your password'
    },
    preview: 'Preview',
    radioGroup: 'Radio Group',
    radio: 'Radio',
    removeMessage: 'Remove Element',
    remove: '&#215;',
    required: 'Required',
    richText: 'Rich Text Editor',
    roles: 'Access',
    save: 'Save',
    selectOptions: 'Options',
    select: 'Select',
    selectColor: 'Select Color',
    selectionsMessage: 'Allow Multiple Selections',
    size: 'Size',
    sizes: {
      xs: 'Extra Small',
      sm: 'Small',
      m: 'Default',
      lg: 'Large'
    },
    style: 'Style',
    styles: {
      btn: {
        'default': 'Default',
        danger: 'Danger',
        info: 'Info',
        primary: 'Primary',
        success: 'Success',
        warning: 'Warning'
      }
    },
    subtype: 'Type',
    subtypes: {
      text: [
        'text',
        'password',
        'email',
        'color'
      ],
      button: [
        'button',
        'submit'
      ],
      header: [
        'h1',
        'h2',
        'h3'
      ],
      paragraph: [
        'p',
        'address',
        'blockquote',
        'canvas',
        'output'
      ]
    },
    text: 'Text Field',
    textArea: 'Text Area',
    toggle: 'Toggle',
    warning: 'Warning!',
    viewXML: '&lt;/&gt;',
    yes: 'Yes'
  },
  notify: {
    error: function(message) {
      return console.error(message);
    },
    success: function(message) {
      return console.log(message);
    },
    warning: function(message) {
      return console.warn(message);
    }
  },
  sortableControls: false,
  stickyControls: false,
  prefix: 'form-builder-'
};
</code></pre>
