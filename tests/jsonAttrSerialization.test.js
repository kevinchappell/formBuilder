import control from '../src/js/control.js'

describe('control JSON attribute helpers', () => {
  beforeEach(() => {
    control.jsonAttrs = new Map()
    control.jsonAttrs.set('group', ['fields'])
  })
  it('parses a registered attr from string to array', () => {
    const out = control.parseJsonAttrs({ type: 'group', name: 'g', fields: '[{"type":"text","name":"a"}]' })
    expect(out.fields).toEqual([{ type: 'text', name: 'a' }])
  })
  it('leaves malformed JSON untouched', () => {
    const out = control.parseJsonAttrs({ type: 'group', fields: '{not json' })
    expect(out.fields).toBe('{not json')
  })
  it('stringifies a registered attr from array to string', () => {
    const out = control.stringifyJsonAttrs({ type: 'group', name: 'g', fields: [{ type: 'text', name: 'a' }] })
    expect(out.fields).toBe('[{"type":"text","name":"a"}]')
  })
  it('ignores types with no registered json attrs', () => {
    const field = { type: 'text', name: 't', value: 'x' }
    expect(control.parseJsonAttrs({ ...field })).toEqual(field)
    expect(control.stringifyJsonAttrs({ ...field })).toEqual(field)
  })
})
