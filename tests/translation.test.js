require('./setup-fb')
require('./../src/js/form-builder.js')

const LANGUAGE_LOCATION = 'https://raw.githubusercontent.com/kevinchappell/formBuilder-languages/master/'

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
        location: LANGUAGE_LOCATION,
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

  test('can set form to another language than default with config', async () => {
    const config = {
      i18n: {
        location: LANGUAGE_LOCATION,
        locale: 'de-DE',
      }
    }

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    fb.actions.setLang('de-DE')
    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb.actions.addField(field)
    expect(fbWrap.find('.label-wrap label').text()).toBe('Beschriftung')
  })

  test('can set form to another language after load', async () => {
    const config = {
      i18n: {
        locale: 'en-US',
        location: LANGUAGE_LOCATION,
      }
    }

    const fbWrap = $('<div>')
    const fb = await $(fbWrap).formBuilder(config).promise
    await fb.actions.setLang('de-DE')
    const field = {
      type: 'text',
      class: 'form-control'
    }
    fb.actions.addField(field)
    expect(fbWrap.find('.label-wrap label').text()).toBe('Beschriftung')
  })
})