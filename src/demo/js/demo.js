import '../sass/demo.scss'
import { insertStyle, removeStyle } from '../../js/utils'
import { demoActions, generateActionTable, setCurrentFieldIdValues } from './actionButtons'

const localeSessionKey = 'formBuilder-locale'
const defaultLocale = 'en-US'

const dataTypes = document.querySelectorAll('.demo-dataType')
const dataType = window.sessionStorage.getItem('dataType') || 'json'
const changeDataType = ({ target }) => {
  window.sessionStorage.setItem('dataType', target.value)
  demoActions.resetDemo()
}
for (let i = 0; i < dataTypes.length; i++) {
  if (dataType === dataTypes[i].value) {
    dataTypes[i].checked = true
  }
  dataTypes[i].addEventListener('click', changeDataType, false)
}

const toggleBootStrap = ({ target }) => {
  if (!target.checked) {
    removeStyle('bootstrap')
  } else {
    insertStyle({
      src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
      id: 'bootstrap',
    })
  }
}

document.getElementById('toggleBootstrap').addEventListener('click', toggleBootStrap, false)

jQuery(function($) {
  const fields = [
    {
      type: 'autocomplete',
      label: 'Custom Autocomplete',
      required: true,
      values: [
        { label: 'SQL' },
        { label: 'C#' },
        { label: 'JavaScript' },
        { label: 'Java' },
        { label: 'Python' },
        { label: 'C++' },
        { label: 'PHP' },
        { label: 'Swift' },
        { label: 'Ruby' },
      ],
    },
    {
      label: 'Star Rating',
      attrs: {
        type: 'starRating',
      },
      icon: '🌟',
    },
  ]

  const replaceFields = [
    {
      type: 'textarea',
      subtype: 'tinymce',
      datatype: 'custom-tinymce',
      label: 'tinyMCE',
      required: true,
    },
  ]

  const actionButtons = [
    {
      id: 'smile',
      className: 'btn btn-success',
      label: '😁',
      type: 'button',
      events: {
        click: () => {
          // @todo toggle options editor instead
          alert('😁😁😁 !SMILE! 😁😁😁')
        },
      },
    },
    'save',
  ]

  const templates = {
    starRating: function(fieldData) {
      return {
        field: '<span id="' + fieldData.name + '">',
        onRender: () => {
          $(document.getElementById(fieldData.name)).rateYo({ rating: 3.6 })
        },
      }
    },
  }

  const inputSets = [
    {
      label: 'User Details',
      icon: '👨',
      name: 'user-details', // optional
      showHeader: true, // optional
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
    {
      label: 'User Agreement',
      fields: [
        {
          type: 'header',
          subtype: 'h3',
          label: 'Terms & Conditions',
          className: 'header',
        },
        {
          type: 'paragraph',
          label:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        },
        {
          type: 'paragraph',
          label:
            'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
        },
        {
          type: 'checkbox',
          label: 'Do you agree to the terms and conditions?',
        },
      ],
    },
  ]

  const typeUserDisabledAttrs = {
    autocomplete: ['access'],
  }

  const typeUserAttrs = {
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
      readonly: {
        label: 'readonly',
        value: false,
      },
    },
    number: {
      volume: {
        label: 'Volume Level',
        value: 1,
        max: 11,
      },
    },
    'checkbox-group': {
      randomize: {
        label: 'Randomize',
        type: 'checkbox',
        value: false,
      },
    },
  }

  // test disabledAttrs
  const disabledAttrs = ['placeholder', 'name']

  const fbOptions = {
    disabledSubtypes: {
      text: ['password'],
    },
    // disableHTMLLabels: true,
    disabledAttrs,
    // allowStageSort: false,
    dataType,
    subtypes: {
      text: ['datetime-local'],
    },
    onSave: toggleEdit,
    onAddField: fieldId => {
      setCurrentFieldIdValues(fieldId)
    },
    onClearAll: () => window.sessionStorage.removeItem('formData'),
    stickyControls: {
      enable: true,
    },
    sortableControls: true,
    fields: fields,
    templates: templates,
    inputSets: inputSets,
    typeUserDisabledAttrs: typeUserDisabledAttrs,
    typeUserAttrs: typeUserAttrs,
    disableInjectedStyle: false,
    actionButtons: actionButtons,
    disableFields: ['autocomplete', 'custom-tinymce'],
    replaceFields: replaceFields,
    disabledFieldButtons: {
      text: ['copy'],
    },
    controlPosition: 'right', // left|right,
    i18n: {
      override: {
        [defaultLocale]: {
          number: 'Big Numbers',
        },
      },
    },
  }
  const formData = window.sessionStorage.getItem('formData')
  let editing = true

  if (formData) {
    fbOptions.formData = formData
  }

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing)
    if (!editing) {
      $('.build-wrap').formBuilder('setData', $('.render-wrap').formRender('userData'))
    } else {
      const formRenderData = $('.build-wrap').formBuilder('getData', dataType)
      $('.render-wrap').formRender({
        formData: formRenderData,
        templates: templates,
        dataType,
      })
      window.sessionStorage.setItem('formData', formRenderData)
    }
    return (editing = !editing)
  }

  const formBuilder = $('.build-wrap').formBuilder(fbOptions)

  const fbPromise = formBuilder.promise

  fbPromise.then(function(fb) {
    document.querySelectorAll('.editForm').forEach(element => element.addEventListener('click', toggleEdit), false)
    const langSelect = document.getElementById('setLanguage')
    const savedLocale = window.sessionStorage.getItem(localeSessionKey) || defaultLocale

    langSelect.value = savedLocale
    fb.actions.setLang(savedLocale)

    const columns = ['action', 'description', 'demo']
    const actions = {
      getFieldTypes: 'Get the registered field types for the form.',
      showData: 'Trigger a modal to appear that shows the current formData value',
      clearFields: 'Removes all the fields from the template editor',
      getData: 'Read the current formData',
      getXML: 'Get the current formData in XML format',
      getJSON: 'Get the current formData in JSON format',
      getJS: 'Get the current formData in JS object format',
      setData: 'set the current formData value for the editor',
      toggleAllEdit: 'toggle the edit mode for all fields',
      toggleEdit: 'toggle a specific field edit mode by index or id',
      addField: 'programmatically add a field to the template editor',
      removeField: 'remove a field by its index or id from the editor stage',
      resetDemo: 'reset the demo to default state',
    }

    const actionApi = document.getElementById('action-api')
    actionApi.appendChild(generateActionTable(actions, columns))
    if (formData && formData !== '[]') {
      document.getElementById('set-form-data-value').value = window.JSON.stringify(JSON.parse(formData), null, '  ')
    }

    langSelect.addEventListener(
      'change',
      ({ target: { value: lang } }) => {
        window.sessionStorage.setItem(localeSessionKey, lang)
        fb.actions.setLang(lang)
      },
      false,
    )
  })
})
