import controlHidden from '../../src/js/control/hidden.js'

describe('Test Hidden Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlHidden({
      'type': 'hidden',
      'required': false,
      'label': 'Test text element',
      'className': 'form-control',
      'name': 'test-elem',
      'access': false,
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance.constructor.name).toBe('controlHidden')

    const built = controlInstance.build()
    expect(typeof built).toBe('object')
    const element = built.field
    expect(element.constructor.name).toBe('HTMLInputElement')
    expect(element.type).toBe('hidden')
    expect(element.name).toBe('test-elem')
    expect(element.id).toBe('test-elem')
  })

  test('test userData supported for hidden', () => {
    const controlInstance = new controlHidden({
      'type': 'hidden',
      'name': 'test-elem',
      'userData': ['loadedValue']
    }, false)
    const element = controlInstance.build()['field']
    expect(element.value).toBe('')
    //$(element).appendTo('body') //Hidden must be appended to DOM to be able to call onRender
    controlInstance.onRender()
    expect(element.value).toBe('loadedValue')
  })
})