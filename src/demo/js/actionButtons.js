const setFormData =
  '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]'

const currentFieldId = document.getElementById('currentFieldId')

export const builderActions = {
  showData: () => $('.build-wrap').formBuilder('showData'),
  clearFields: () => $('.build-wrap').formBuilder('clearFields'),
  getData: () => {
    console.log($('.build-wrap').formBuilder('getData'))
  },
  setData: () => {
    $('.build-wrap').formBuilder('setData', setFormData)
  },
  addField: () => {
    const field = {
      type: 'text',
      class: 'form-control',
      label: 'Text Field added at: ' + new Date().getTime(),
    }
    $('.build-wrap').formBuilder('addField', field)
  },
  removeField: () => {
    const fieldId = currentFieldId.value
    $('.build-wrap').formBuilder('removeField', fieldId)
  },
  getXML: () => {
    alert($('.build-wrap').formBuilder('getData', 'xml'))
  },
  getJSON: () => {
    alert($('.build-wrap').formBuilder('getData', 'json', true))
  },
  getJS: () => {
    alert('check console')
    console.log($('.build-wrap').formBuilder('getData'))
  },
  toggleEdit: () => {
    $('.build-wrap').formBuilder('toggleFieldEdit', currentFieldId.value)
  },
  toggleAllEdit: () => $('.build-wrap').formBuilder('toggleAllFieldEdit'),
  getFieldTypes: () => console.log($('.build-wrap').formBuilder('getFieldTypes')),
}

export const renderActions = {
  loadUserForm: () => {
    const formRenderOptions = {
      controlConfig: {
        'textarea.tinymce': {
          branding: false,
          encoding: 'xml',
          menubar: 'edit insert format table',
          plugins: 'preview searchreplace autolink link table lists textcolor colorpicker',
          toolbar:
            'formatselect | bold italic forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | preview',
        },
      },
      formData:
        '[{"type":"autocomplete","label":"Autocomplete","className":"form-control","name":"autocomplete-1526094918549","requireValidOption":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"},{"label":"Option 3","value":"option-3"}],"userData":["option-1"]},{"type":"checkbox-group","label":"Checkbox Group","name":"checkbox-group-1526095813035","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}],"userData":["option-1","Bilbo \\"baggins\\""]},{"type":"text","label":"Color Field","name":"text-1526099104236","subtype":"color","userData":["#00ff00"]},{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"tel","userData":["123-456-7890"]},{"type":"date","label":"Date Field","className":"form-control","name":"date-1526096579821","userData":["2018-01-01"]},{"type":"number","label":"Number","className":"form-control","name":"number-1526099204594","min":"1","max":"3","step":".2","userData":["1.1"]},{"type":"textarea","label":"Text Area","className":"form-control","name":"textarea-1526099273610","subtype":"textarea","userData":["Tennessee Welcomes You!"]},{"type":"textarea","subtype":"tinymce","label":"TinyMCE","className":"form-control","name":"textarea-1526099273610","userData":["&lt;p&gt;&lt;span style=&quot;color: #339966;&quot;&gt;It&#39;s a great place&lt;/span&gt;&lt;/p&gt;"]}]',
    }
    $('.render-wrap').formRender(formRenderOptions)
  },
  clearUserForm: () => {
    $('.render-wrap').formRender('clear')
  },
  renderUserForm: () => {
    const formData =
      '[{"type":"text","label":"Color picker","name":"text-1526099104236","subtype":"color","userData":["#00ff00"]},{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"tel","userData":["123-456-7890"]},{"type":"date","label":"Date Field","className":"form-control","name":"date-1526096579821","userData":["2018-01-01"]},{"type":"number","label":"Number","className":"form-control","name":"number-1526099204594","min":"1","max":"3","step":".2","userData":["1.1"]},{"type":"textarea","label":"Text Area","className":"form-control","name":"textarea-1526099273610","subtype":"textarea","userData":["Tennessee Welcomes You!"]},{"type":"textarea","subtype":"tinymce","label":"TinyMCE","className":"form-control","name":"textarea-1526099273610","userData":["&lt;p&gt;&lt;span style=&quot;color: #339966;&quot;&gt;It&#39;s a great place&lt;/span&gt;&lt;/p&gt;"]}]'
    $('.render-wrap').formRender('render', formData)
  },
  getHTML: () => {
    console.log($('.render-wrap').formRender('html'))
  },
  showUserData: () => {
    alert(JSON.stringify($('.render-wrap').formRender('userData')))
  },
}

export const demoActions = {
  testSubmit: () => {
    const formData = new FormData(document.forms[0])
    console.log('Can submit: ', document.forms[0].checkValidity())
    // Display the key/value pairs
    console.log('FormData:', formData)
  },
  resetDemo: () => {
    window.sessionStorage.removeItem('formData')
    location.reload()
  },
}
