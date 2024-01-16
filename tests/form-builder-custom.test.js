require('./setup-fb')
require('./../src/js/form-builder.js')

beforeAll(() => {
  window.fbControls = []

  window.fbControls.push(function(controlClass) {
    class controlTest extends controlClass {
      static get definition() {
        return {
          icon: 'T',
          i18n: {
            default: 'Test Control Plugin',
          },
          disabledAttrs: [
            'description', 'placeholder',
          ],
          defaultAttrs:{
            'Extra Content': {
              'label': 'extracontent',
              'value' : '',
              'type': 'textarea'
            }
          }
        }
      }

      build() {
        this.dom = this.markup('div', null, this.config)
        return {
          field: this.dom,
          layout: 'hidden',
        }
      }
    }

    // register this control for the following types & text subtypes
    controlClass.register('testPlugin', controlTest)
  })
})

describe('controlPlugins', () => {
  test('ensure plugin appears in fieldTypes', async () => {
    expect(window.fbControls).toHaveLength(1)
    const config = {}

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise

    expect(fb.actions.getFieldTypes()).toContain('testPlugin')
  })

  test('add control plugin to stage', async () => {
    const config = {}

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise

    const field = {
      type: 'testPlugin',
      class: 'form-control'
    }
    fb.actions.addField(field)

    expect(fb.actions.getData()).toHaveLength(1)
  })

  test('control plugin can disable attrs', async () => {
    const config = {}

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    const field = {
      type: 'testPlugin',
      class: 'form-control'
    }
    fb.actions.addField(field)

    expect(fbWrap.find('.label-wrap')).toHaveLength(1)
    expect(fbWrap.find('.description-wrap')).toHaveLength(0)
    expect(fbWrap.find('.placeholder-wrap')).toHaveLength(0)
  })

  test('control plugin can set default attrs', async () => {
    const config = {}

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    const field = {
      type: 'testPlugin',
      class: 'form-control'
    }
    fb.actions.addField(field)

    expect(fbWrap.find('textarea[name="Extra Content"]')).toHaveLength(1)
  })
})