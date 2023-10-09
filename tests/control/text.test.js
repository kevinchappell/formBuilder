import controlText from '../../src/js/control/text.js'

describe('Test Text Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlText({
      'type': 'text',
      'required': false,
      'label': 'Test text element',
      'className': 'form-control',
      'name': 'test-elem',
      'access': false,
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance.constructor.name).toBe('controlText')

    const element = controlInstance.build()
    expect(element.constructor.name).toBe('HTMLInputElement')
    expect(element.type).toBe('text')
    expect(element.name).toBe('test-elem')
    expect(element.id).toBe('test-elem')
  })

  test('test userData loaded after render', () => {
    const controlInstance = new controlText({
      'type': 'text',
      'userData': ['loadedValue']
    }, false)
    const element = controlInstance.build()
    expect(element.value).toBe('')
    controlInstance.onRender()
    expect(element.value).toBe('loadedValue')
  })

  test('test multiple flag', () => {
    const controlInstance = new controlText({
      'type': 'text',
      'multiple': true,
      'name': 'test-elem',
    }, false)
    const element = controlInstance.build()
    expect(element.name).toBe('test-elem[]')
  })
})

describe('Test building text variations and subtypes', () => {
  const inputBaseTypes = ['text', 'file', 'date', 'number','hidden']
  inputBaseTypes.forEach(type => {
    test('can render single input based ' + type + ' element', () => {
      const controlInstance = new controlText({
        'type': type,
        'required': false,
        'label': 'Test ' + type + ' element',
        'className': 'form-control',
        'name': type + '-elem',
        'access': false,
      }, false)
      const element = controlInstance.build()
      expect(element.constructor.name).toBe('HTMLInputElement')
      expect(element.type).toBe(type)
    })
  })

  const textSubTypes = ['text', 'password', 'email', 'color', 'tel']
  textSubTypes.forEach(subtype => {
    test('can render single text subtype ' + subtype + ' element', () => {
      const controlInstance = new controlText({
        'type': 'text',
        'required': false,
        'label': 'Test ' + subtype + ' element',
        'className': 'form-control',
        'name': subtype + '-elem',
        'access': false,
        'subtype': subtype,
      }, false)
      const element = controlInstance.build()
      expect(element.constructor.name).toBe('HTMLInputElement')
      expect(element.type).toBe(subtype)
    })
  })
})