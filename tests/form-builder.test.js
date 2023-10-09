require('./setup-fb')
require('./../src/js/form-builder.js')
const { defaultOptions } = require('../src/js/config')
const {errorHandler} = require('./__mocks__/errorHandlers.js')
import control from '../src/js/control'

describe('FormBuilder Stage Setup', () => {
  test('stage will initialise with default values', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    await $(fbWrap).formBuilder().promise.then(cb)
    expect(cb.mock.calls).toHaveLength(1)
    expect(cb.mock.calls[0]).toHaveLength(1)
    //expect(cb.mock.calls[0][0].constructor.name).toEqual('FormBuilder')
    expect(cb.mock.calls[0][0].hasOwnProperty('actions')).toEqual(true)
  })
})

describe('FormBuilder Add/Remove from Stage', () => {
  test('fieldAdded callback called after adding field', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    const fb = await $(fbWrap).formBuilder({'onAddField': cb}).promise
    const field = {
      type: 'text',
      class: 'form-control',
      name: 'on-add-test'
    }
    fb.actions.addField(field)
    expect(cb.mock.calls).toHaveLength(1)
    expect(cb.mock.calls[0]).toHaveLength(2)
    expect(typeof cb.mock.calls[0][0]).toBe('string')
    expect(typeof cb.mock.calls[0][1]).toBe('object')
    expect(cb.mock.calls[0][1].name).toBe('on-add-test')
  })
  
  test('fieldsRemovedOnClean', async() => {
    const config = {
      formData: [
        {
          'type': 'textarea',
          'subtype': 'textList',
          'label': 'Comments',
          'className': 'form-control',
          'name': 'textarea-1696482495077'
        }
      ],
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    expect($('.frmb.stage-wrap li', fbWrap).length).toBe(1)
    fb.actions.clearFields()
    expect($('.frmb.stage-wrap li', fbWrap).length).toBe(0)
    fb.actions.clearFields() //Test no error on empty stage
    expect($('.frmb.stage-wrap li', fbWrap).length).toBe(0)
  })
})

describe('FormBuilder can add all default fields via clicking on control panel',  () => {
  defaultOptions.controlOrder.forEach(controlType => {
    const controlClass = control.getClass(controlType)
    if (!controlClass || !controlClass.active(controlType)) {
      return
    }
    test(controlType, async () => {
      const errors = [], warnings = [], success = []
      const fbWrap = $('<div>')
      await $(fbWrap).formBuilder({notify: errorHandler(errors,warnings,success)}).promise
      $(`.frmb-control li[data-type="${controlType}"]`, fbWrap).click()
      expect(success).toHaveLength(0)
      expect(errors).toHaveLength(0)
      expect(warnings).toHaveLength(0)
      expect($(`.frmb.stage-wrap li[type="${controlType}"]`, fbWrap).length).toBe(1)
    })
  })
})

describe('FormBuilder can add all default fields via API',  () => {
  defaultOptions.controlOrder.forEach(controlType => {
    const controlClass = control.getClass(controlType)
    if (!controlClass || !controlClass.active(controlType)) {
      return
    }
    test(controlType, async () => {
      const errors = [], warnings = [], success = []
      const fbWrap = $('<div>')
      const fb = await $(fbWrap).formBuilder({notify: errorHandler(errors,warnings,success)}).promise
      const field = {
        type: controlType,
        name: 'on-add-test',
        label: controlType,
      }
      fb.actions.addField(field)
      expect(success).toHaveLength(0)
      expect(errors).toHaveLength(0)
      expect(warnings).toHaveLength(0)
      expect($(`.frmb.stage-wrap li[type="${controlType}"]`, fbWrap).length).toBe(1)
    })
  })
})

describe('FormBuilder stage names translated', () => {
  test('boolAttribute name translated', async () => {
    const config = {
      typeUserAttrs: {
        text: {
          readonly: {
            label: ['readOnly'],
            value: false,
            type: 'checkbox',
          }
        }
      },
      i18n: {
        override: {
          'en-US': {
            readOnly: 'Is Readonly',
          }
        }
      }
    }

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb.actions.addField(field)
    expect(fbWrap.find('.readonly-wrap label').text()).toBe(config.i18n.override['en-US'].readOnly)
  })
})

describe('FormBuilder userAttrType detection', () => {
  test('renders text/string user attribute', async () => {
    const config = {
      typeUserAttrs: {
        text: {
          testAttribute: {
            label: 'test',
            value: '',
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({ type: 'text'})
    const input = fbWrap.find('.testAttribute-wrap input')
    expect(input.attr('type')).toBe('text')
    expect(input.val()).toBe('')
  })
  test('renders checkbox user attribute when type set', async () => {
    const config = {
      typeUserAttrs: {
        text: {
          testAttribute: {
            label: 'test',
            value: false,
            type: 'checkbox',
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({ type: 'text'})
    const input = fbWrap.find('.testAttribute-wrap input')
    expect(input.attr('type')).toBe('checkbox')
    expect(input.is(':checked')).toBeFalsy()
  })
  test('renders number user attribute when value is number', async () => {
    const config = {
      typeUserAttrs: {
        text: {
          testAttribute: {
            label: 'test',
            value: 0,
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({ type: 'text'})
    const input = fbWrap.find('.testAttribute-wrap input')
    expect(input.attr('type')).toBe('number')
  })
  test('renders select user attribute when options given', async () => {
    const config = {
      typeUserAttrs: {
        text: {
          testAttribute: {
            label: 'test',
            options: {
              'option-1': 'Option-1',
              'option-2': 'Option-2',
            }
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({ type: 'text'})
    const input = fbWrap.find('.testAttribute-wrap select')
    expect(input.length).toBe(1)
    expect(input[0].options.length).toBe(2)
  })
})

describe('FormBuilder can return formData', () => {
  const formData = [
      {
        type: 'header',
        subtype: 'h1',
        label: 'MyHeader',
        access: false,
      },
      {
        access: false,
        'type': 'textarea',
        'subtype': 'textarea',
        'label': 'Comments',
        'className': 'form-control',
        'name': 'textarea-1696482495077',
        'required': false,
      }
      ]

  test('as JSON', async () => {
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder({formData}).promise

    expect(JSON.parse(fb.actions.getData('json'))).toEqual(formData)
  })

  test('as Javascript Array', async () => {
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder({formData}).promise

    expect(fb.actions.getData('js')).toEqual(formData)
  })

  test('as XML', async () => {
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder({formData}).promise

    expect(fb.actions.getData('xml')).toEqual('<form-template xmlns="http://www.w3.org/1999/xhtml"><fields><field type="header" subtype="h1" label="MyHeader" access="false"></field><field type="textarea" required="false" label="Comments" class-name="form-control" name="textarea-1696482495077" access="false" subtype="textarea"></field></fields></form-template>')
  })
})