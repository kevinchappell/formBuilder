import controlSelect from '../../src/js/control/select.js'

const getCheckboxGroupValue = element => {
  return $('input[type=checkbox]:checked', element).map(function(){
    return this.value
  }).get().join(',')
}

describe('Test Checkbox Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': false,
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1',
          'selected': true
        }
      ]
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance).toBeInstanceOf(controlSelect)

    const element = controlInstance.build()
    expect(element.constructor.name).toBe('HTMLDivElement')
    expect($(element).find('input[type="checkbox"]')).toHaveLength(1)
    expect($('input[type="checkbox"]', element)[0].checked).toBeTruthy()
  })

  test('test building control element with other flag set', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': true,
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1',
          'selected': true
        }
      ]
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance).toBeInstanceOf(controlSelect)

    const element = controlInstance.build()
    expect(element.constructor.name).toBe('HTMLDivElement')
    expect($(element).find('input[type="checkbox"]')).toHaveLength(2)
    expect($(element).find('input[type="text"]')).toHaveLength(1)
  })

  test('required checkbox', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': false,
      'required': true,
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1',
          'selected': false
        },
        {
          'label': 'Option 2',
          'value': 'option-2',
          'selected': false
        }
      ]
    }, false)

    const element = controlInstance.build()
    controlInstance.onRender()
    expect($('input[type="checkbox"]:valid', element)).toHaveLength(0)
    const firstCheckbox = $('input[type="checkbox"]', element)[0]
    firstCheckbox.click()
    firstCheckbox.dispatchEvent(new Event('change')) //Element isn't in the DOM so we need to manually dispatch a change event
    expect($('input[type="checkbox"]', element)[0].checked).toBeTruthy()
    expect($('input[type="checkbox"]:valid', element)).toHaveLength(2)
  })

  test('userData overrides default selections', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': false,
      'required': true,
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
        }
      ],
      userData: ['option-2']
    }, false)

    const element = controlInstance.build()
    controlInstance.onRender()
    expect($('input[type="checkbox"]', element)[0].checked).toBeFalsy()
    expect($('input[type="checkbox"]', element)[1].checked).toBeTruthy()
    expect(getCheckboxGroupValue(element)).toBe('option-2')
  })

  test('empty userData overrides default selections', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': false,
      'required': true,
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1',
          'selected': true
        },
        {
          'label': 'Option 2',
          'value': 'option-2',
          'selected': true
        }
      ],
      userData: []
    }, false)

    const element = controlInstance.build()
    controlInstance.onRender()
    expect($('input[type="checkbox"]', element)[0].checked).toBeFalsy()
    expect($('input[type="checkbox"]', element)[1].checked).toBeFalsy()
    expect(getCheckboxGroupValue(element)).toBe('')
  })

  test('unknown value in userData sets other', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': true,
      'required': true,
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
        }
      ],
      userData: ['Option 3']
    }, false)

    const element = controlInstance.build()
    controlInstance.onRender()

    expect($('input[type="checkbox"]', element)[0].checked).toBeFalsy()
    expect($('input[type="checkbox"]', element)[1].checked).toBeFalsy()
    expect($('input[type="checkbox"]', element)[2].checked).toBeTruthy()
    expect(getCheckboxGroupValue(element)).toBe('Option 3')
  })

  test('text entered into other box updates otherInput', async () => {
    const controlInstance = new controlSelect({
      'type': 'checkbox-group',
      'label': 'Test',
      'name': 'test-elem',
      'access': false,
      'other': true,
      'required': true,
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
        }
      ],
    }, false)

    const element = controlInstance.build()
    controlInstance.onRender()

    expect($('input[type="checkbox"]', element)[0].checked).toBeTruthy()
    expect($('input[type="checkbox"]', element)[1].checked).toBeFalsy()
    expect($('input[type="checkbox"]', element)[2].checked).toBeFalsy()
    const otherValue = $('#test-elem-other-value', element)[0]
    otherValue.value = 'Test value'
    otherValue.dispatchEvent(new Event('input'))
    expect($('#test-elem-other', element).val()).toBe('Test value')
    $('#test-elem-other', element).prop('checked','checked')
    expect(getCheckboxGroupValue(element)).toBe('option-1,Test value')
    expect($('input[type="checkbox"]', element)[0].checked).toBeTruthy()
    expect($('input[type="checkbox"]', element)[1].checked).toBeFalsy()
    expect($('input[type="checkbox"]', element)[2].checked).toBeTruthy()
  })
})