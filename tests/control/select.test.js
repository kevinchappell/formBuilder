import controlSelect from '../../src/js/control/select.js'

describe('Test Text Control', () => {
  test('test building select element', async () => {
    const controlInstance = new controlSelect({
      'type': 'select',
      'required': false,
      'label': 'Select',
      'className': 'form-control',
      'name': 'test-select',
      'multiple': false,
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1',
          'selected': true
        },
        {
          'label': 'Option 2',
          'value': 'option-2',
          'selected': false
        },
        {
          'label': 'Option 3',
          'value': 'option-3',
          'selected': false
        }
      ]
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance.constructor.name).toBe('controlSelect')

    const element = controlInstance.build()
    expect(element.constructor.name).toBe('HTMLSelectElement')
    expect(element.name).toBe('test-select')
    expect(element.validity.valid).toBeTruthy()
  })

  test('required select with placeholder to be :invalid until an option is selected', async () => {
    const controlInstance = new controlSelect({
      'type': 'select',
      'required': true,
      'label': 'Select',
      'className': 'form-control',
      'placeholder': 'Select an option...',
      'name': 'test-select',
      'multiple': false,
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1',
          'selected': true
        },
        {
          'label': 'Option 2',
          'value': 'option-2',
          'selected': false
        },
        {
          'label': 'Option 3',
          'value': 'option-3',
          'selected': false
        }
      ]
    }, false)

    const element = controlInstance.build()

    controlInstance.on('render')(element)

    expect(element.constructor.name).toBe('HTMLSelectElement')
    expect(element.name).toBe('test-select')
    expect(element.value).toBe('')
    expect(element.validity.valid).toBeFalsy()
    expect(element.options[0].disabled).toBeTruthy()
    expect(element.options[0].selected).toBeTruthy()

    element.value = 'option-1'
    expect(element.validity.valid).toBeTruthy()
  })
})