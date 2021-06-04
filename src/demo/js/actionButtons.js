import { titleCase } from '../../js/utils'

export const setCurrentFieldIdValues = value => {
  const currentFieldIds = document.querySelectorAll('.current-field-id')
  currentFieldIds.forEach(field => {
    field.value = value
  })
}

export const builderActions = {
  showData: () => $('.build-wrap').formBuilder('showData'),
  clearFields: () => $('.build-wrap').formBuilder('clearFields'),
  getData: () => {
    console.log($('.build-wrap').formBuilder('getData'))
  },
  setData: () => {
    const fb = $('.build-wrap').formBuilder
    const dataInput = fb('markup', 'textarea', fb('getData', 'json', true), {
      id: 'setData-value',
      rows: 30,
      style: 'width: 100%',
    })
    const click = () => $('.build-wrap').formBuilder('setData', dataInput.value)
    const setDataButton = fb('markup', 'button', 'Set Data', { events: { click } })
    const dialogContents = fb('markup', 'div', [dataInput, setDataButton])
    fb('showDialog', dialogContents, null, 'data-dialog')
  },
  save: () => {
    $('.build-wrap').formBuilder('save')
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
    const currentFieldId = $('.build-wrap').formBuilder('getCurrentFieldId')
    setCurrentFieldIdValues('')
    $('.build-wrap').formBuilder('removeField', currentFieldId)
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
    const currentFieldId = $('.build-wrap').formBuilder('getCurrentFieldId')
    $('.build-wrap').formBuilder('toggleFieldEdit', currentFieldId)
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
          toolbar: [
            'formatselect',
            'bold italic forecolor backcolor',
            'link',
            'alignleft aligncenter alignright alignjustify',
            'numlist bullist outdent indent',
            'preview',
          ].join(' | '),
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
    const form = document.querySelector('.render-wrap')
    const formData = new FormData(form)
    console.log('Can submit: ', form.checkValidity())
    // Display the key/value pairs
    console.log('FormData:')
    for (var pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`)
    }
  },
  resetDemo: () => {
    window.sessionStorage.removeItem('formData')
    location.reload()
  },
}

const processCell = cellData => {
  let cell = cellData
  if (typeof cell === 'string') {
    cell = { attrs: { scope: 'col' }, content: titleCase(cellData) }
  }

  if (typeof cell.content === 'string') {
    cell.content = document.createTextNode(cell.content)
  }

  return { attrs: {}, ...cell }
}

const generateTr = (columns, isHeader = false) =>
  columns.reduce((acc, cur) => {
    const column = processCell(cur)
    const type = isHeader ? 'th' : 'td'
    const td = document.createElement(type)
    td.appendChild(column.content)
    Object.entries(column.attrs).forEach(([key, val]) => {
      td.setAttribute(key, val)
    })
    acc.appendChild(td)
    return acc
  }, document.createElement('tr'))

const apiBtns = {
  ...builderActions,
  ...renderActions,
  ...demoActions,
}

export const generateActionTable = (actions, columns) => {
  const fragment = document.createDocumentFragment()
  const thead = document.createElement('thead')
  thead.appendChild(generateTr(columns, true))
  const actionApiRows = Object.entries(actions).reduce((acc, [key, content]) => {
    const description = { content }
    const code = document.createElement('code')
    code.appendChild(document.createTextNode(key))
    const action = { content: code }
    let actionDemoTrigger = document.getElementById(key)
    if (!actionDemoTrigger) {
      actionDemoTrigger = document.createElement('button')
      actionDemoTrigger.id = key
      actionDemoTrigger.textContent = titleCase(key)
      actionDemoTrigger.addEventListener('click', e => apiBtns[key] && apiBtns[key](e))
    } else {
      const trigger = actionDemoTrigger.querySelector('.trigger')
      if (trigger) {
        trigger.addEventListener('click', e => apiBtns[key] && apiBtns[key](e))
      }
    }
    const demo = { content: actionDemoTrigger }
    acc.appendChild(generateTr([action, description, demo]))
    return acc
  }, document.createDocumentFragment())
  const tbody = document.createElement('tbody')
  tbody.appendChild(actionApiRows)

  fragment.appendChild(thead)
  fragment.appendChild(tbody)
  return fragment
}
