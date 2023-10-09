import controlButton from '../../src/js/control/button.js'

describe('Test Button Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlButton({
      'type': 'button',
      'required': false,
      'label': 'Test button element',
      'name': 'test-elem',
      'access': false,
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance).toBeInstanceOf(controlButton)

    const built = controlInstance.build()
    expect(typeof built).toBe('object')
    const element = built.field
    expect(element.constructor.name).toBe('HTMLButtonElement')
    expect(element.textContent).toBe('Test button element')
  })

})

describe('Test building button variations and subtypes', () => {
  const inputSubTypes = ['button', 'submit', 'reset'];
  inputSubTypes.forEach(subtype => {
    test('can render single text subtype ' + subtype + ' element', () => {
      const controlInstance = new controlButton({
        'type': 'button',
        'required': false,
        'label': 'Test button element',
        'name': 'test-elem',
        'access': false,
        'subtype': subtype
      }, false)
      const built = controlInstance.build()
      expect(typeof built).toBe('object')
      const element = built.field
      expect(element.type).toBe(subtype)
    })
  })
})