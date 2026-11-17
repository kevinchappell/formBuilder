import './setup-fb.js'
import '../src/js/form-builder.js'

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

  test('does not keep a trailing <br> added by contenteditable labels', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    const node = fb.actions.generateAdvFields({ type: 'text', name: 'a', label: 'A' })
    document.body.appendChild(node)
    const labelEl = node.querySelector('.fld-label')
    labelEl.innerHTML = 'Name<br>'
    const vals = fb.actions.getAttrVals(node)
    expect(vals.label).toBe('Name')
  })

  test('keeps a <br> that is not at the end of a contenteditable label', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    const node = fb.actions.generateAdvFields({ type: 'text', name: 'a', label: 'A' })
    document.body.appendChild(node)
    node.querySelector('.fld-label').innerHTML = 'Na<br>me'
    expect(fb.actions.getAttrVals(node).label).toBe('Na<br>me')
  })

  test('removes only one trailing <br> from a contenteditable label', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    const node = fb.actions.generateAdvFields({ type: 'text', name: 'a', label: 'A' })
    document.body.appendChild(node)
    node.querySelector('.fld-label').innerHTML = 'Name<br><br>'
    expect(fb.actions.getAttrVals(node).label).toBe('Name<br>')
  })

  test('saves the label without the trailing <br> as XML', async () => {
    // dataType: 'xml' forces disableHTMLLabels, so use the default builder and export as XML
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    fb.actions.addField({ type: 'text', name: 'a', label: 'A' })
    const labelEl = fbWrap[0].querySelector('.fld-label')
    expect(labelEl.hasAttribute('contenteditable')).toBe(true)
    labelEl.innerHTML = 'Name<br>'
    $(labelEl).trigger('input')
    const xml = fb.actions.getData('xml')
    expect(xml).toContain('label="Name"')
    expect(xml).not.toContain('&lt;br')
  })

  test('leaves plain input label values unchanged when disableHTMLLabels is true', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder({ disableHTMLLabels: true }).promise
    fb.actions.addField({ type: 'text', name: 'a', label: 'A' })
    const labelEl = fbWrap[0].querySelector('.fld-label')
    expect(labelEl.tagName).toBe('INPUT')
    expect(labelEl.hasAttribute('contenteditable')).toBe(false)
    labelEl.value = 'Name<br>'
    $(labelEl).trigger('input')
    expect(fb.actions.getAttrVals(labelEl.closest('.form-field')).label).toBe('Name<br>')
    expect(fbWrap[0].querySelector('.field-label').textContent).toBe('Name<br>')
  })

  test('field header label has no trailing <br> after editing a contenteditable label', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder().promise
    fb.actions.addField({ type: 'text', name: 'a', label: 'A', required: true })
    const field = fbWrap[0].querySelector('.form-field')
    const labelEl = field.querySelector('.fld-label')
    labelEl.innerHTML = 'Name<br>'
    labelEl.dispatchEvent(new Event('input', { bubbles: true }))
    const headerLabel = field.querySelector('.field-label')
    expect(headerLabel.innerHTML).toBe('Name')
    expect(headerLabel.querySelector('br')).toBeNull()
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
