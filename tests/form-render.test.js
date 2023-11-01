require('./../src/js/form-render.js')
const {errorHandler} = require('./__mocks__/errorHandlers.js')

const basicTextAreaDef = {
  'type': 'textarea',
  'required': false,
  'label': 'Text Area',
  'className': 'form-control',
  'description': 'A nice help bubble',
  'name': 'textarea-elem',
  'access': false,
  'subtype': 'textarea',
  'userData': ['AValue'],
}

describe('Form Rendering', () => {
  test('can render json form document', () => {
    const container = $('<div>')
    const formData = JSON.stringify([basicTextAreaDef])
    const errors = [], warnings = [], success = []
    const fb = container.formRender({notify: errorHandler(errors,warnings,success), formData: formData})

    const html = container.formRender('html')

    expect(success[0]).toBe('Form Rendered')
    expect(html).toContain('<textarea class="form-control" name="textarea-elem" user-data="AValue" id="textarea-elem" title="A nice help bubble"></textarea>')
    expect(container.find('textarea[name=textarea-elem]').val()).toBe('AValue')
  })

  test('can render xml form document', () => {
    const container = $('<div>')
    const formData = '<form-template><fields><field class="form-control" label="Full Name" name="text-input-1459436848806" type="text" subtype="text"><userData><value>GivenName</value></userData></field><field class="form-control" label="Select" name="select-1459436851691" type="select"><option value="option-1">Option 1</option><option value="option-2">Option 2</option></field><field class="form-control" label="Your Message" name="textarea-1459436854560" type="textarea"></field></fields></form-template>'
    const errors = [], warnings = [], success = []
    const fb = container.formRender({notify: errorHandler(errors,warnings,success), formData: formData, dataType: 'xml'})

    const html = container.formRender('html')

    expect(success[0]).toBe('Form Rendered')
    expect(html).toContain('<input name="text-input-1459436848806" type="text" user-data="GivenName" class="form-control" id="text-input-1459436848806">')
    expect(container.find('input[name=text-input-1459436848806]').val()).toBe('GivenName')
  })

  test('can render single textarea element', () => {
    const container = $('<div>')
    const elementData = JSON.stringify(basicTextAreaDef)
    const errors = [], warnings = [], success = []
    container.controlRender(elementData,{notify: errorHandler(errors,warnings,success)})

    expect(success[0]).toBe('Form Rendered')
    const textarea = container.find('#textarea-elem')
    expect(textarea).not.toHaveLength(0)
  })

  test('can retrieve userdata', () => {
    const container = $('<div>')
    const formData = JSON.stringify([basicTextAreaDef])
    const errors = [], warnings = [], success = []
    const fb = container.formRender({notify: errorHandler(errors,warnings,success), formData: formData})

    container.find('#textarea-elem').val('string to find')

    expect(fb.userData[0].userData).toEqual(['string to find'])
    expect(container.formRender('userData')[0].userData).toEqual(['string to find'])
  })

  test('can clear form-render of user data', () => {
    const container = $('<div>')
    const formData = JSON.stringify([basicTextAreaDef])
    const errors = [], warnings = [], success = []
    const fb = container.formRender({notify: errorHandler(errors,warnings,success), formData: formData})

    container.find('#textarea-elem').val('string to find')
    fb.clear()
    expect(fb.userData[0].userData).not.toEqual(['string to find'])
  })

  test('will load empty form on no formData', () => {
    const errors = [], warnings = [], success = []
    $('<div>').formRender({notify: errorHandler(errors,warnings,success)})
    expect(warnings[0]).toBe('No form data.')
    expect(success).toHaveLength(1)
  })

  test('will load empty form on undefined formData', () => {
    const errors = [], warnings = [], success = []
    $('<div>').formRender({notify: errorHandler(errors,warnings,success), formData: undefined})
    expect(warnings[0]).toBe('No form data.')
    expect(success).toHaveLength(1)
  })

  test('Can set data then render after initialisation of empty form', () => {
    const errors = [], warnings = [], success = []
    const container = $('<div>')
    container.formRender({notify: errorHandler(errors,warnings,success)})
    container.formRender('setData', [basicTextAreaDef])
    let textarea = container.find('#textarea-elem')
    expect(textarea).toHaveLength(0)

    container.formRender('render')

    textarea = container.find('#textarea-elem')
    expect(textarea).not.toHaveLength(0)
  })

  test('Can render after initialisation of empty form', () => {
    const errors = [], warnings = [], success = []
    const container = $('<div>')
    container.formRender({notify: errorHandler(errors,warnings,success)})
    let textarea = container.find('#textarea-elem')
    expect(textarea).toHaveLength(0)

    container.formRender('render', [basicTextAreaDef])
    textarea = container.find('#textarea-elem')
    expect(textarea).not.toHaveLength(0)
  })

  test('check userData when no value set', () => {
    const container = $('<div>')
    const formData = [
      {type: 'textarea', name: 'input-textarea'},
      {type: 'text', name: 'input-text'},
      {type: 'checkbox-group', name: 'input-checkbox-group', 'values': [ { 'label': 'O', 'value': 'option-1', 'selected': false }, ]},
      {type: 'radio-group', name: 'input-radio-group', 'values': [ { 'label': 'O', 'value': 'option-1', 'selected': false }, ]},
      {type: 'select', name: 'input-select', placeholder: 'Select...', 'values': [ { 'label': 'O', 'value': 'option-1', 'selected': false }, ]},
      {type: 'select', name: 'input-select-multiple', placeholder: 'Select...', multiple: true, 'values': [ { 'label': 'O', 'value': 'option-1', 'selected': false }, ]},
    ]
    container.formRender({ formData })

    const userData = {}

    container.formRender('userData').forEach(elem => {
        userData[elem.name] = elem.userData
    })

    expect(userData['input-textarea']).toStrictEqual([''])
    expect(userData['input-text']).toStrictEqual([''])
    expect(userData['input-checkbox-group']).toStrictEqual([])
    expect(userData['input-radio-group']).toStrictEqual([])
    expect(userData['input-select']).toStrictEqual([])
    expect(userData['input-select-multiple']).toStrictEqual([])
  })
})