require('../setup-fb')
require('./../../src/js/form-builder.js')

describe('Test Custom Control', () => {
  test('test building custom control element', async () => {
    const fbWrap = $('<div>')
    const cbOnRender = jest.fn()

    const fields = [{
      label: 'Star Rating',
      attrs: {
        type: 'starRating'
      },
      icon: '🌟'
    }]
    const templates = {
      starRating: function(fieldData) {
        return {
          field: '<span id="'+fieldData.name+'">',
          onRender: cbOnRender
        }
      }
    }

    const fb = await $(fbWrap).formBuilder({fields, templates}).promise
    const field = {
      type: 'starRating',
      class: 'form-control'
    }
    fb.actions.addField(field)

    expect(cbOnRender.mock.calls).toHaveLength(1)
  })
})