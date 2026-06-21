require('./setup-fb')
require('../src/js/form-builder.js')

describe('formBuilder edit-panel hook', () => {
  test('exposes generateAdvFields returning a DOM node with a name input', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    const node = fb.actions.generateAdvFields({ type: 'text', name: 'a', label: 'A' })
    expect(node.querySelector('.fld-name')).toBeTruthy()
  })

  test('round-trips values via getAttrVals', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    const node = fb.actions.generateAdvFields({ type: 'text', name: 'a', label: 'A' })
    document.body.appendChild(node)
    const vals = fb.actions.getAttrVals(node)
    expect(vals.name).toBe('a')
  })

  test('stashes a usable instance on the stage element', async () => {
    const fbWrap = $('<div>')
    await $(fbWrap).formBuilder().promise
    const stage = fbWrap[0].querySelector('.frmb')
    expect(stage).toBeTruthy()
    expect(typeof stage.fbInstance.generateAdvFields).toBe('function')
    expect(typeof stage.fbInstance.getAttrVals).toBe('function')
    expect(typeof stage.fbInstance.updatePreview).toBe('function')
  })
})
