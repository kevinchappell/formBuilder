require('../setup-fb')
require('./../../src/js/form-builder.js')
require('./../../src/js/form-render.js')

describe('Test Custom Control', () => {
  test('test add custom field with template', async () => {
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
          field: this.markup('span', null, { name: fieldData.name}),
          onRender: cbOnRender
        }
      }
    }

    const fb = await $(fbWrap).formBuilder({fields, templates}).promise
    const field = {
      type: 'starRating',
      className: 'form-control'
    }
    fb.actions.addField(field)

    expect(cbOnRender.mock.calls).toHaveLength(1)

    $(fbWrap).find('li.input-control[data-type="starRating"]').click()

    expect(cbOnRender.mock.calls).toHaveLength(2)
  })

  test('test rendering custom field with template', async () => {
    const fbWrap = $('<div>')
    const cbOnRender = jest.fn()

    const formData = [
      {
        'type': 'starRating',
        'required': false,
        'label': 'Star Rating',
        'name': 'starRating-1697591966052-0'
      },
    ]
    const templates = {
      starRating: function(fieldData) {
        return {
          field: '<span id="'+fieldData.name+'">',
          onRender: cbOnRender
        }
      }
    }

    const fr = await $(fbWrap).formRender({formData, templates}).promise

    expect(cbOnRender.mock.calls).toHaveLength(1)

    expect($(fbWrap).find('#starRating-1697591966052-0')[0].outerHTML).toBe('<span id="starRating-1697591966052-0"></span>')

  })

  test('override built-in with template', async () => {
    const fbWrap = $('<div>')
    const cbOnRender = jest.fn()

    const fields = [
      {
        type: 'checkbox-group',
        subtype: 'custom-group',
        label: 'Custom Checkbox Group w/Sub Type',
        required: !0,
        values: [{
          label: 'Option 1'
        }, {
          label: 'Option 2'
        }]
      }
    ]
    const templates = {
      text: function(fieldData) {
        return {
          field: $('<input id="'+fieldData.name+'">')[0],
          onRender: cbOnRender
        }
      }
    }

    const fb = await $(fbWrap).formBuilder({fields, templates}).promise
    const field = {
      type: 'text',
      className: 'form-control'
    }
    fb.actions.addField(field)

    expect(cbOnRender.mock.calls).toHaveLength(1)

    $(fbWrap).find('li.input-control[data-type="text"]').click()

    expect(cbOnRender.mock.calls).toHaveLength(2)
  })

  test('can set field attributes from custom field config', async () => {
    const fbWrap = $('<div>')
    const fields = [
      {
        className: 'form-control custom-class',
        label: 'Custom Text Field',
        type: 'customText',
        value: 'String to look for',
        icon: '🔢'
      },
    ]
    const templates = {
      customText: function(fieldData) {
        let { name } = fieldData
        name = fieldData.multiple ? `${name}[]` : name
        const inputConfig = Object.assign({}, fieldData, { name })
        this.dom = this.markup('input', null, inputConfig)

        return {
          field: this.dom,
          onRender: function () {
            if (fieldData.userData) {
              $(this.dom).val(fieldData.userData[0])
            }
          }
        }
      },
    }

    const fb = await $(fbWrap).formBuilder({fields, templates, typeUserAttrs: { customText: { dataAttr: { value: '', label: 'textDataAttr'} } }}).promise
    const field = {
      type: 'customText',
      className: 'form-control api-class',
      value: 'Added by API',
    }
    fb.actions.addField(field)

    let renderedCtl = $(fbWrap).find('.prev-holder input')
    expect(renderedCtl.attr('class')).toBe('form-control api-class')
    expect(renderedCtl.attr('value')).toBe('Added by API')
    expect(renderedCtl.attr('id')).toMatch(new RegExp('^customText-.*'))

    fb.actions.clearFields()

    $(fbWrap).find('li.input-control[data-type="customText"]').click()

    renderedCtl = $(fbWrap).find('.prev-holder input')
    expect(renderedCtl.attr('class')).toBe('form-control custom-class')
    expect(renderedCtl.attr('value')).toBe('String to look for')
    expect(renderedCtl.attr('id')).toMatch(new RegExp('^customText-.*'))
  })

  test('can add custom fields from input-set', async () => {
    const fbWrap = $('<div>')
    const fields = [
      {
        className: 'form-control custom-class',
        label: 'Custom Text Field',
        type: 'customText',
        value: 'String to look for',
        icon: '🔢'
      },
    ]
    const templates = {
      customText: function(fieldData) {
        let { name } = fieldData
        name = fieldData.multiple ? `${name}[]` : name
        const inputConfig = Object.assign({}, fieldData, { name })
        this.dom = this.markup('input', null, inputConfig)

        return {
          field: this.dom,
          onRender: function () {
            if (fieldData.userData) {
              $(this.dom).val(fieldData.userData[0])
            }
          }
        }
      },
    }
    const inputSets = [
      {
        label: 'My Input Set',
        name: 'test-input-set',
        icon: '🔢',
        fields: [
          {
            className: 'form-control custom-class',
            label: 'My Custom Text',
            type: 'customText',
            value: 'String to look for',
            icon: '🔢',
          },
          {
            className: 'form-control',
            label: 'My Custom Text',
            type: 'text',
          },
        ]
      },

    ]

    const fb = await $(fbWrap).formBuilder({fields, templates, inputSets}).promise

    $(fbWrap).find('li.input-set-control[data-type="test-input-set"]').click()

    const renderedCtl = $(fbWrap).find('.prev-holder input')
    expect(renderedCtl.eq(0).attr('class')).toBe('form-control custom-class')
    expect(renderedCtl.eq(0).attr('value')).toBe('String to look for')
    expect(renderedCtl.eq(0).attr('type')).toBe('customText')
    expect(renderedCtl.eq(0).attr('id')).toMatch(new RegExp('^customText-.*'))

    expect(renderedCtl.eq(1).attr('class')).toBe('form-control')
    expect(renderedCtl.eq(1).attr('value')).toBeUndefined()
    expect(renderedCtl.eq(1).attr('type')).toBe('text')
    expect(renderedCtl.eq(1).attr('id')).toMatch(new RegExp('^text-.*'))
  })
})