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
  dataType: 'json', // 'json' or 'xml'
  disableFields: [],
  disabledAttrs: [], // globally disabled field attributes
  editOnAdd: false,
  formData: '',
  append: false,
  prepend: false,
  defaultFields: [],
  fieldRemoveWarn: false,
  roles: {
    1: 'Administrator'
  },
  i18n: {
    locale: 'en-US',
    location: 'url/to/language/directory',
    preloaded: {...},
    extension: '.lang'
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
  showActionButtons: false,
  sortableControls: false,
  stickyControls: false,
  template: {},
  typeUserDisabledAttrs: {}, // field specific disabled attributes
  typeUserAttrs: {}, // user defined attributes
  typeUserEvents: {}, // onChange and onAdd events for specific fields
  fields: [],
  prefix: 'form-builder-'
};
</code></pre>
