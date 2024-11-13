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

  test('typeUserEvents onadd called for wildcard', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    const fb = await $(fbWrap).formBuilder({
      typeUserEvents: {
        '*': {
          onadd: cb,
        },
      },
    }).promise
    const field = {
      type: 'text',
      class: 'form-control',
      name: 'on-add-test'
    }
    fb.actions.addField(field)
    expect(cb.mock.calls).toHaveLength(1)
    expect(cb.mock.calls[0]).toHaveLength(1)
    expect(typeof cb.mock.calls[0][0]).toBe('object')
  })

  test('typeUserEvents onadd called for type', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    const fb = await $(fbWrap).formBuilder({
      typeUserEvents: {
        'text': {
          onadd: cb,
        },
      },
    }).promise
    const field = {
      type: 'text',
      class: 'form-control',
      name: 'on-add-test'
    }
    fb.actions.addField(field)
    expect(cb.mock.calls).toHaveLength(1)
    expect(cb.mock.calls[0]).toHaveLength(1)
    expect(typeof cb.mock.calls[0][0]).toBe('object')
  })

  test('typeUserEvents onadd called for type when wildcard and type keys exist', async () => {
    const fbWrap = $('<div>')
    const cbType = jest.fn()
    const cbWildcard = jest.fn()
    const fb = await $(fbWrap).formBuilder({
      typeUserEvents: {
        '*': {
          onadd: cbWildcard,
        },
        'text': {
          onadd: cbType,
        },
      },
    }).promise
    const field = {
      type: 'text',
      class: 'form-control',
      name: 'on-add-test'
    }
    fb.actions.addField(field)
    expect(cbType.mock.calls).toHaveLength(1)
    expect(cbType.mock.calls[0]).toHaveLength(1)
    expect(typeof cbType.mock.calls[0][0]).toBe('object')
    expect(cbWildcard.mock.calls).toHaveLength(0)
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

describe('FormBuilder attribute setup', () => {
  test('number control number attributes do not inherit field value when not set', async() => {
    const config = {}
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({
      type: 'number',
      value: '5.2',
    })
    expect(fbWrap.find('.value-wrap input').val()).toBe('5.2')
    expect(fbWrap.find('.min-wrap input').val()).toBe('')
    expect(fbWrap.find('.max-wrap input').val()).toBe('')
    expect(fbWrap.find('.step-wrap input').val()).toBe('')
  })
  test('number control number attributes do not inherit field value when set', async() => {
    const config = {}
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({
      type: 'number',
      value: '5.2',
      min: 2,
      max: 10,
      step: 1.0,
    })
    expect(fbWrap.find('.value-wrap input').val()).toBe('5.2')
    expect(fbWrap.find('.min-wrap input').val()).toBe('2')
    expect(fbWrap.find('.max-wrap input').val()).toBe('10')
    expect(fbWrap.find('.step-wrap input').val()).toBe('1')
  })

})
describe('FormBuilder typeUserAttrs detection', () => {
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
            value: 10,
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({
      type: 'text',
      value: '1',
    })
    const input = fbWrap.find('.testAttribute-wrap input')
    expect(input.attr('type')).toBe('number')
    expect(input.val()).toBe('10')
  })
  test('renders number user attribute when value is zero', async () => {
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
    fb.actions.addField({
      type: 'text',
      value: '1',
    })
    const input = fbWrap.find('.testAttribute-wrap input')
    expect(input.attr('type')).toBe('number')
    expect(input.val()).toBe('0')
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
  test('renders text/string user attribute when set by wildcard', async () => {
    const config = {
      typeUserAttrs: {
        '*': {
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
    let input = fbWrap.find('.text-field .testAttribute-wrap input')
    expect(input.attr('type')).toBe('text')
    expect(input.val()).toBe('')
    fb.actions.addField({ type: 'button'})
    input = fbWrap.find('.button-field .testAttribute-wrap input')
    expect(input.attr('type')).toBe('text')
    expect(input.val()).toBe('')
  })
  test('user attribute definition by type takes precedence over wildcard definition', async () => {
    const config = {
      typeUserAttrs: {
        '*': {
          testAttribute: {
            label: 'test',
            value: '',
          },
        },
        button: {
          testAttribute: {
            label: 'override',
            value: 'buttonOverride',
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.addField({ type: 'text'})
    let input = fbWrap.find('.text-field .testAttribute-wrap input')
    expect(input.attr('type')).toBe('text')
    expect(input.val()).toBe('')

    input = fbWrap.find('.text-field .testAttribute-wrap label')
    expect(input.text()).toBe('test')

    fb.actions.addField({ type: 'button'})
    input = fbWrap.find('.button-field .testAttribute-wrap input')
    expect(input.attr('type')).toBe('text')
    expect(input.val()).toBe('buttonOverride')

    input = fbWrap.find('.button-field .testAttribute-wrap label')
    expect(input.text()).toBe('override')
  })
  test('lifts bootstrap classes from field', async () => {
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder({}).promise
    fb.actions.addField({ type: 'text', className: 'form-control row-1 col-md-4'})
    const input = fbWrap.find('.form-field[type="text"] .prev-holder input')
    expect(input.attr('class')).toContain('form-control')
    expect(input.attr('class')).not.toContain('row-1')
    expect(input.attr('class')).not.toContain('col-md-4')
    fb.actions.addField({ type: 'select', className: 'form-control row-1 col-md-4', values: {'yes':'yes','no':'no'}})
    const select = fbWrap.find('.form-field[type="select"] .prev-holder select')
    expect(select.attr('class')).toContain('form-control')
    expect(select.attr('class')).not.toContain('row-1')
    expect(select.attr('class')).not.toContain('col-md-4')
    fb.actions.addField({ type: 'autocomplete', className: 'form-control row-1 col-md-4'})
    const auto = fbWrap.find('.form-field[type="autocomplete"] .prev-holder .form-group')
    expect(auto.find('[class*=row-],[class*=col-]')).toHaveLength(0)
  })
  test('can load formData for string typeUserAttr into stage', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          testStringAttribute: {
            label: 'testString',
            value: 'default',
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        testStringAttribute: 'findme',
      }
    ])

    const input = fbWrap.find('.text-field .testStringAttribute-wrap input')
    expect(input.attr('type')).toBe('text')
    expect(input.val()).toBe('findme')
  })
  test('can load formData for number typeUserAttr into stage', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          testNumberAttribute: {
            label: 'testNumber',
            type: 'number',
            value: 0,
          },
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        testNumberAttribute: 2,
      }
    ])

    const input = fbWrap.find('.text-field .testNumberAttribute-wrap input')
    expect(input.attr('type')).toBe('number')
    expect(input.val()).toBe('2')
  })
  test('can load formData for checkbox typeUserAttr into stage', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          testCheckboxAttribute: {
            label: 'readonly',
            value: false,
            type: 'checkbox',
          }
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        testCheckboxAttribute: true,
      }
    ])

    const input = fbWrap.find('.text-field .testCheckboxAttribute-wrap input')
    expect(input.attr('type')).toBe('checkbox')
    expect(input.prop('checked')).toBeTruthy()
  })
  test('can load formData with value for select typeUserAttr into stage', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          testSelectAttribute: {
            label: 'Test Select',
            multiple: false,
            options: {
              'red form-control': 'Red',
              'green form-control': 'Green',
              'blue form-control': 'Blue'
            },
            style: 'border: 1px solid red',
            value: 'red form-control',
          }
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        testSelectAttribute: 'green form-control',
      }
    ])

    const input = fbWrap.find('.text-field .testSelectAttribute-wrap select')
    expect(input.length).toBe(1)
    expect(input.val()).toEqual('green form-control')
  })
  test('can load formData with value for select typeUserAttr into stage where attribute name is className', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          className: {
            label: 'Class',
            multiple: false,
            options: {
              'red form-control': 'Red',
              'green form-control': 'Green',
              'blue form-control': 'Blue'
            },
            style: 'border: 1px solid red',
            value: 'red form-control',
          }
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        className: 'green form-control',
      }
    ])

    const input = fbWrap.find('.text-field .className-wrap select')
    expect(input.length).toBe(1)
    expect(input.val()).toEqual('green form-control')
  })

  test('fix GH-1534', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          className: {
            label: 'Class',
            multiple: false,
            options: {
              'red form-control': 'Red',
              'green form-control': 'Green',
              'blue form-control': 'Blue'
            },
            style: 'border: 1px solid red',
            value: 'red form-control',
          }
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        className: 'green form-control',
      },
      {
        type: 'text',
        className: 'blue form-control',
      }
    ])

    const input = fbWrap.find('.text-field .className-wrap select')
    expect(input.length).toBe(2)
    expect($(input.get(0)).val()).toEqual('green form-control')
    expect($(input.get(1)).val()).toEqual('blue form-control')
  })

  test('can load formData with value for multi select typeUserAttr into stage', async() => {
    const config = {
      typeUserAttrs: {
        '*': {
          testSelectAttribute: {
            label: 'Test Select',
            multiple: true,
            options: {
              'red form-control': 'Red',
              'green form-control': 'Green',
              'blue form-control': 'Blue'
            },
            style: 'border: 1px solid red',
            value: 'red form-control',
          }
        },
      },
    }
    const fbWrap = $('<div>')
    const fb = await fbWrap.formBuilder(config).promise
    fb.actions.setData([
      {
        type: 'text',
        testSelectAttribute: ['green form-control','blue form-control'],
      }
    ])
    const input = fbWrap.find('.text-field .testSelectAttribute-wrap select')
    expect(input.length).toBe(1)
    expect(input.val()).toEqual(['green form-control','blue form-control'])
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

describe('async loading tests', () => {
  test('Will be log uninitialised errors if actions are called until the plugin has initialised', async () => {
    const errorLogSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    const infoLogSpy = jest.spyOn(console, 'info').mockImplementation(() => {})
    const fbWrap = $('<div>')
    const fb = $(fbWrap).formBuilder()
    expect(fb.actions.getData()).toBeUndefined()
    expect(errorLogSpy).toHaveBeenCalledWith('formBuilder is still initialising')

    await fb.promise
    expect(fb.actions.getData()).toStrictEqual([])
  })

  test('Can load multiple formBuilders concurrently via promise interface without interference', async () => {
    const wrap1 = $('<div>')
    const wrap2 = $('<div>')
    const p1 = wrap1.formBuilder().promise
    const p2 = wrap2.formBuilder().promise

    const fb1 = await p1
    const fb2 = await p2

    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb1.actions.addField(field)

    expect(fb1.actions.getData()).toHaveLength(1)
    expect(fb2.actions.getData()).toHaveLength(0)
    expect(fb1.formData).toHaveLength(96)
    expect(fb2.formData).toHaveLength(2)

    fb2.actions.addField(field)
    fb2.actions.addField(field)

    expect(wrap1.formBuilder('getData')).toHaveLength(1)
    expect(wrap2.formBuilder('getData')).toHaveLength(2)
    expect(wrap1.formBuilder('formData')).toHaveLength(96)
    expect(wrap2.formBuilder('formData')).toHaveLength(191)

    expect(wrap2.formBuilder('markup', 'div').outerHTML).toBe('<div></div>')
  })

  test('controlConfig is loaded per instance', async () => {
    const wrap1 = $('<div>')
    const wrap2 = $('<div>')
    const templates = {
      text: function(fieldData) {
        this.classConfig.callback()
        return {
          field: '<span>preview</span>'
        }
      }
    }
    const cb1 = jest.fn()
    const cb2 = jest.fn()
    const config1 = {
      templates,
      controlConfig: {
        'text.text': {
          callback: cb1
        }
      }
    }
    const config2 = {
      templates,
      controlConfig: {
        'text.text': {
          callback: cb2
        }
      }
    }
    const p1 = wrap1.formBuilder(config1).promise
    const p2 = wrap2.formBuilder(config2).promise

    const fb1 = await p1
    const fb2 = await p2

    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb1.actions.addField(field)

    expect(cb1.mock.calls).toHaveLength(1)
    expect(cb2.mock.calls).toHaveLength(0)

    fb2.actions.addField(field)
    expect(cb1.mock.calls).toHaveLength(1)
    expect(cb2.mock.calls).toHaveLength(1)
  })

})

describe('FormBuilder disabling attributes', () => {
  test('attributes not on stage when disabled via disableAttr', async () => {
    const config = {
      disabledAttrs: ['label','description'],
    }

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb.actions.addField(field)
    expect(fbWrap.find('.subtype-wrap')).toHaveLength(1)
    expect(fbWrap.find('.label-wrap')).toHaveLength(0)
    expect(fbWrap.find('.description-wrap')).toHaveLength(0)
  })

  test('special attributes hidden when disabled via disableAttr', async () => {
    const config = {
      disabledAttrs: ['subtype','name','className'],
    }

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb.actions.addField(field)
    expect(fbWrap.find('.subtype-wrap').css('display')).toBe('none')
    expect(fbWrap.find('.name-wrap').css('display')).toBe('none')
    expect(fbWrap.find('.className-wrap').css('display')).toBe('none')
    expect(fbWrap.find('.label-wrap').css('display')).toBe('block')
  })

  test('attributes not on stage when disabled via typeUserDisabledAttrs', async () => {
    const config = {
      typeUserDisabledAttrs: {'text': ['label','description']},
    }

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb.actions.addField(field)
    const field2 = {
      type: 'textarea',
      class: 'form-control'
    }
    fb.actions.addField(field2)
    expect(fbWrap.find('.form-field[type="text"] .subtype-wrap')).toHaveLength(1)
    expect(fbWrap.find('.form-field[type="text"] .label-wrap')).toHaveLength(0)
    expect(fbWrap.find('.form-field[type="text"] .description-wrap')).toHaveLength(0)

    expect(fbWrap.find('.form-field[type="textarea"] .subtype-wrap')).toHaveLength(1)
    expect(fbWrap.find('.form-field[type="textarea"] .label-wrap')).toHaveLength(1)
    expect(fbWrap.find('.form-field[type="textarea"] .description-wrap')).toHaveLength(1)
  })
})

describe('FormBuilder option attributes', () => {
  test('default rendered options', async () => {
    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder({ }).promise
    const field = {
      type: 'select',
      class: 'form-control'
    }
    fb.actions.addField(field)
    expect(fbWrap.find('.field-options')).toHaveLength(1)

    const defaultOptions = [
      {
        'label': 'Option 1',
        'value': 'option-1',
        'selected': true
      },
      {
        'label': 'Option 2',
        'value': 'option-2',
        'selected': false
      },
      {
        'label': 'Option 3',
        'value': 'option-3',
        'selected': false
      }
    ]
    expect(fb.actions.getData('js')[0].values).toEqual(defaultOptions)
  })
})

describe('FormBuilder callbacks', () => {
  test('onAddField callback called after adding field', async () => {
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

  test('onAddFieldAfter callback called after adding field', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    const fb = await $(fbWrap).formBuilder({'onAddFieldAfter': cb}).promise
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

  test.failing('onSave callback called after save', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    const fb = await $(fbWrap).formBuilder({'onSave': cb}).promise

    //Calling Save action
    fb.actions.save()
    expect(cb.mock.calls).toHaveLength(1)
    expect(cb.mock.calls[0]).toHaveLength(1)
    expect(cb.mock.calls[0][0]).toBeUndefined()
    expect(typeof cb.mock.calls[0][1]).toBe('object')
    expect(cb.mock.calls[0][1]).toHaveLength(0)

    const field = {
      type: 'text',
      class: 'form-control',
    }
    fb.actions.addField(field)
    $('button.save-template', fbWrap).click()
    expect(cb.mock.calls).toHaveLength(2)
    expect(cb.mock.calls[1]).toHaveLength(2)
    expect(typeof cb.mock.calls[1][0]).toBe('object')
    expect(typeof cb.mock.calls[1][1]).toBe('object')
    expect(cb.mock.calls[1][1]).toHaveLength(1)
  })

  test('onAddOption callback called after clicking .add-opt', async () => {
    const fbWrap = $('<div>')
    const cb = jest.fn()
    const fb = await $(fbWrap).formBuilder({'onAddOption': cb}).promise

    const field = {
      type: 'select',
      class: 'form-control',
      name: 'on-add-test'
    }
    fb.actions.addField(field)

    expect(cb.mock.calls).toHaveLength(3)
    expect(typeof cb.mock.calls[0][0]).toBe('object')
    expect(typeof cb.mock.calls[0][1]).toBe('object')
    expect(Object.keys(cb.mock.calls[0][0])).toHaveLength(3)
    expect(Object.keys(cb.mock.calls[0][1])).toHaveLength(4)
  })
})