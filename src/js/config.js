export const defaultOptions = {
  controlPosition: 'right',
      append: false,
      actionButtons: [],
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
      dataType: 'json',
      // Array of fields to disable
      disableFields: [],
      disabledAttrs: [],
      disabledActionButtons: [],
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
      inputSets: [],
      roles: {
        1: 'Administrator'
      },
      notify: {
        error: message => console.error(message),
        success: message => console.log(message),
        warning: message => console.warn(message)
      },
      onSave: (evt, formData) => null,
      onClearAll: () => null,
      prepend: false,
      sortableControls: false,
      stickyControls: {
        enable: true,
        offset: {
          top: 5,
          bottom: 'auto',
          right: 'auto'
        }
      },
      templates: {},
      showActionButtons: true,
      typeUserDisabledAttrs: {},
      typeUserAttrs: {},
      typeUserEvents: {},
      prefix: 'form-builder-'
    };


export const styles = {
  btn: [
    'default',
    'danger',
    'info',
    'primary',
    'success',
    'warning'
  ]
};

export const defaultI18n = {
      location: 'https://formbuilder.online/assets/lang/',
      langs: [
        'en-US'
      ],
      preloaded: {
        'en-US': {
          addOption: 'Add Option +',
          allFieldsRemoved: 'All fields were removed.',
          allowMultipleFiles: 'Allow users to upload multiple files',
          autocomplete: 'Autocomplete',
          button: 'Button',
          cannotBeEmpty: 'This field cannot be empty',
          checkboxGroup: 'Checkbox Group',
          checkbox: 'Checkbox',
          checkboxes: 'Checkboxes',
          className: 'Class',
          clearAllMessage: 'Are you sure you want to clear all fields?',
          clear: 'Clear',
          close: 'Close',
          content: 'Content',
          copy: 'Copy To Clipboard',
          copyButton: '&#43;',
          copyButtonTooltip: 'Copy',
          dateField: 'Date Field',
          description: 'Help Text',
          descriptionField: 'Description',
          devMode: 'Developer Mode',
          editNames: 'Edit Names',
          editorTitle: 'Form Elements',
          editXML: 'Edit XML',
          enableOther: 'Enable &quot;Other&quot;',
          enableOtherMsg: 'Let users to enter an unlisted option',
          fieldNonEditable: 'This field cannot be edited.',
          fieldRemoveWarning: 'Are you sure you want to remove this field?',
          fileUpload: 'File Upload',
          formUpdated: 'Form Updated',
          getStarted: 'Drag a field from the right to this area',
          header: 'Header',
          hide: 'Edit',
          hidden: 'Hidden Input',
          inline: 'Inline',
          inlineDesc: 'Display {type} inline',
          label: 'Label',
          labelEmpty: 'Field Label cannot be empty',
          limitRole: 'Limit access to one or more of the following roles:',
          mandatory: 'Mandatory',
          maxlength: 'Max Length',
          minOptionMessage: 'This field requires a minimum of 2 options',
          minSelectionRequired: 'Minimum {min} selections required',
          multipleFiles: 'Multiple Files',
          name: 'Name',
          no: 'No',
          noFieldsToClear: 'There are no fields to clear',
          number: 'Number',
          off: 'Off',
          on: 'On',
          option: 'Option',
          options: 'Options',
          optional: 'optional',
          optionLabelPlaceholder: 'Label',
          optionValuePlaceholder: 'Value',
          optionEmpty: 'Option value required',
          other: 'Other',
          paragraph: 'Paragraph',
          placeholder: 'Placeholder',
          'placeholder.value': 'Value',
          'placeholder.label': 'Label',
          'placeholder.text': '',
          'placeholder.textarea': '',
          'placeholder.email': 'Enter you email',
          'placeholder.placeholder': '',
          'placeholder.className': 'space separated classes',
          'placeholder.password': 'Enter your password',
          preview: 'Preview',
          radioGroup: 'Radio Group',
          radio: 'Radio',
          removeMessage: 'Remove Element',
          removeOption: 'Remove Option',
          remove: '&#215;',
          required: 'Required',
          richText: 'Rich Text Editor',
          roles: 'Access',
          rows: 'Rows',
          save: 'Save',
          selectOptions: 'Options',
          select: 'Select',
          selectColor: 'Select Color',
          selectionsMessage: 'Allow Multiple Selections',
          size: 'Size',
          'size.xs': 'Extra Small',
          'size.sm': 'Small',
          'size.m': 'Default',
          'size.lg': 'Large',
          style: 'Style',
          'styles.btn.default': 'Default',
          'styles.btn.danger': 'Danger',
          'styles.btn.info': 'Info',
          'styles.btn.primary': 'Primary',
          'styles.btn.success': 'Success',
          'styles.btn.warning': 'Warning',
          subtype: 'Type',
          text: 'Text Field',
          textArea: 'Text Area',
          toggle: 'Toggle',
          warning: 'Warning!',
          value: 'Value',
          viewJSON: '{  }',
          viewXML: '&lt;/&gt;',
          yes: 'Yes'
        }
      }
    };

export const config = {};
