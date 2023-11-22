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
})