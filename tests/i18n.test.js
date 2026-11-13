import http from 'http'
import './setup-fb.js'
import './../src/js/form-builder.js'

// Serves `/<dir>/<locale>.lang` from `files`, and 404 for `/missing/`, so language loading can be tested offline
const files = {
  'de-DE': 'label = Beschriftung\nplaceholder = Platzhalter\n',
  'en-US': 'label = Hosted Label\n',
}
const requests = []
let server
let baseUrl

beforeAll(
  () =>
    new Promise(resolve => {
      server = http
        .createServer((req, res) => {
          requests.push(req.url)
          const locale = req.url.split('/').pop().replace(/\.lang$/, '')
          if (req.url.startsWith('/missing/') || !files[locale]) {
            res.statusCode = 404
            return res.end()
          }
          res.end(files[locale])
        })
        .listen(0, '127.0.0.1', () => {
          baseUrl = `http://127.0.0.1:${server.address().port}`
          resolve()
        })
    }),
)

afterAll(() => new Promise(resolve => server.close(resolve)))

const renderLabel = async i18n => {
  const fbWrap = $('<div>')
  const fb = await $(fbWrap).formBuilder({ i18n }).promise
  fb.actions.addField({ type: 'text', class: 'form-control' })
  return { fb, fbWrap, label: () => fbWrap.find('.label-wrap label').last().text() }
}

describe('formBuilder i18n language loading', () => {
  test('uses the built in en-US strings when no language file can be loaded', async () => {
    const { label } = await renderLabel({ location: `${baseUrl}/missing/`, locale: 'en-US' })
    expect(label()).toBe('Label')
    expect(requests).toContain('/missing/en-US.lang')
  })

  test('merges en-US.lang from location over the built in strings', async () => {
    const { label } = await renderLabel({ location: `${baseUrl}/hosted/`, locale: 'en-US' })
    expect(label()).toBe('Hosted Label')
  })

  test('loads the locale file when the locale also has overrides', async () => {
    const { fbWrap, label } = await renderLabel({
      location: `${baseUrl}/override/`,
      locale: 'de-DE',
      override: { 'de-DE': { placeholder: 'Platzhalter (override)' } },
    })
    expect(requests).toContain('/override/de-DE.lang')
    expect(label()).toBe('Beschriftung')
    expect(fbWrap.find('.placeholder-wrap label').last().text()).toBe('Platzhalter (override)')
  })

  test('fetches each language file once', async () => {
    const { fb, label } = await renderLabel({ location: `${baseUrl}/once/`, locale: 'en-US', override: {} })
    await fb.actions.setLang('de-DE')
    await fb.actions.setLang('en-US')
    await fb.actions.setLang('de-DE')
    fb.actions.addField({ type: 'text', class: 'form-control' })
    expect(label()).toBe('Beschriftung')
    expect(requests.filter(url => url.startsWith('/once/')).sort()).toEqual(['/once/de-DE.lang', '/once/en-US.lang'])
  })
})
