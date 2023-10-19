const utils = require('./../src/js/utils.js')
const { safeAttr, flattenArray, safeAttrName, hyphenCase, camelCase, bindEvents, attrString, nameAttr, markup,
  parsedHtml, escapeAttrs, getScripts, capitalize, addEventListeners, unique, escapeAttr, escapeHtml,
  getAllGridRelatedClasses, subtract, safename, xmlParseAttrs, parseXML
} = require('../src/js/utils')

describe('Test Util functions', () => {
  test('trimObj', () => {
    const obj = {
      a: null,
      b: '',
      c: undefined,
      d: 'A string',
      e: 123,
      f: false,
      g: true,
    }
    const origObjLength = Object.keys(obj).length

    const trimObjExceptFalse = utils.trimObj(obj, false)

    expect(Object.keys(obj).length).toBe(origObjLength) //Ensure original is not modified
    expect(trimObjExceptFalse).not.toHaveProperty('a')
    expect(trimObjExceptFalse).toHaveProperty('d')
    expect(trimObjExceptFalse).toHaveProperty('f')

    expect(trimObjExceptFalse).toEqual({
      d: 'A string',
      e: 123,
      f: false,
      g: true,
    })

    const trimObjIncludeFalse = utils.trimObj(obj, true)
    expect(Object.keys(obj).length).toBe(origObjLength) //Ensure original is not modified
    expect(trimObjIncludeFalse.hasOwnProperty('f')).toBe(false)
    expect(trimObjIncludeFalse).toEqual({
      d: 'A string',
      e: 123,
      g: true,
    })
  })

  test('forceNumber', () => {
    expect(utils.forceNumber('abc')).toBe('')
    expect(utils.forceNumber('abc123')).toBe('123')
    expect(utils.forceNumber('1abc123')).toBe('1123')
    expect(utils.forceNumber('1a3bc123')).toBe('13123')
  })

  // Returns false if the attr is one of these
  //     'values',
  //     'enableOther',
  //     'other',
  //     'label',
  //     'subtype',
  test.todo('validAttr')

  test('attrString', () => {
    //@TODO Test some invalid values. Passing a number for an attribute value will trigger an error with trim()
    expect(attrString({type: 'number', min: '0', max: '10', class: 'input-control input-lg', 'data-target': 'someValue'}))
      .toBe('type="number" min="0" max="10" class="input-control input-lg" data-target="someValue"')
  })

  test.todo('safeAttr')

  test('flattenArray', () => {
    expect(flattenArray([[1,2],[3,[4,[5]]]])).toStrictEqual([ 1, 2, 3, 4, 5 ])
  })

  test('safeAttrName', () => {
    expect(safeAttrName('className')).toBe('class')
    expect(safeAttrName('dataTarget')).toBe('data-target')
  })

  test('hyphenCase', () => {
    expect(hyphenCase('dataTarget')).toBe('data-target')
    expect(hyphenCase('dataElementName')).toBe('data-element-name')
  })

  test('camelCase', () => {
    expect(camelCase('data-target')).toBe('dataTarget')
    expect(camelCase('data-element-name')).toBe('dataElementName')
  })

  test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('HELLO')).toBe('HELLO')
    expect(capitalize('hEllO')).toBe('HEllO')
  })

  test('unique', () => {
    expect(unique(['orange','blue','orange','pink','red','red'])).toStrictEqual(['orange','blue','pink','red'])
  })

  test.todo('closest')

  test('bindEvents', () => {
    const cb = jest.fn()
    const el = document.createElement('input')
    bindEvents(el, {'change': cb, 'input': cb})
    el.dispatchEvent(new Event('input'))
    expect(cb.mock.calls).toHaveLength(1)
    el.dispatchEvent(new Event('change'))
    expect(cb.mock.calls).toHaveLength(2)
  })

  test('addEventListeners', () => {
    const cb = jest.fn()
    const el = document.createElement('input')
    addEventListeners(el, 'change input', cb)
    el.dispatchEvent(new Event('input'))
    expect(cb.mock.calls).toHaveLength(1)
    el.dispatchEvent(new Event('change'))
    expect(cb.mock.calls).toHaveLength(2)
  })

  test('nameAttr', () => {
    const origDateNow = Date.now
    try {
      Date.now = jest.fn(() => 1696669493206)
      const n1 = nameAttr({ type: 'text' })
      const n2 = nameAttr({ type: 'text' })
      const n3 = nameAttr({ type: 'textarea' })
      const n4 = nameAttr({ label: 'starControl' })
      Date.now = jest.fn(() => 1696669493207)
      const n5 = nameAttr({ type: 'text' })

      expect(n1).toMatch(new RegExp('text-1696669493206-0'))
      expect(n2).toMatch(new RegExp('text-1696669493206-1'))
      expect(n3).toMatch(new RegExp('textarea-1696669493206-2'))
      expect(n4).toMatch(new RegExp('star-control-1696669493206-3'))
      expect(n5).toMatch(new RegExp('text-1696669493207-0'))
    } finally {
      Date.now = origDateNow
    }
  })

  test.todo('merge')

  test('subtract', () => {
    expect(subtract([1,2,3],[2])).toEqual([])
    expect(subtract([2],[1,2,3])).toEqual([1,3])
    expect(subtract(['remove-me'],['classA','classB','remove-me','classC'])).toEqual(['classA','classB','classC'])
  })
})

describe('Test XML functions', () => {
  test('parseXml', () => {
    const xml = '<form-template xmlns="http://www.w3.org/1999/xhtml"><fields><field type="header" subtype="h1" label="Header" class-name="my-class"></field><field type="number" required="true" label="Number" class-name="form-control myClass" name="number-1696560201856-0" min="1" max="100" step="1" value="2"></field><field type="select" required="false" label="Select" class-name="form-control" name="select-1696560229465-0" multiple="false"><option label="Option 1" value="option-1" selected="selected">Option 1</option><option label="Option 2" value="option-2">Option 2</option><option label="Option 3" value="option-3">Option 3</option></field></fields></form-template>'
    const parsed = parseXML(xml)
    expect(parsed).toEqual([{'className': 'my-class', 'label': 'Header', 'subtype': 'h1', 'type': 'header'}, {'className': 'form-control myClass', 'label': 'Number', 'max': '100', 'min': '1', 'name': 'number-1696560201856-0', 'required': true, 'step': '1', 'type': 'number', value: '2'}, {'className': 'form-control', 'label': 'Select', 'name': 'select-1696560229465-0', 'type': 'select', 'values': [{'label': 'Option 1', 'selected': 'selected', 'value': 'option-1'}, {'label': 'Option 2', 'value': 'option-2'}, {'label': 'Option 3', 'value': 'option-3'}]}])
  })

  test.todo('xmlParseAttrs')
  test.todo('xmlParseOptions')
  test.todo('xmlParseUserData')
})

describe('Test markup function', () => {
  test('markup input with attributes', () => {
    const input = markup('input', null, {type: 'text', 'value': 'simple input'})
    expect(input).toBeInstanceOf(HTMLElement)
    expect(input.value).toBe('simple input')
  })

  test('markup span with text', () => {
    const span = markup('span', 'Example span text', {class: 'small'})
    expect(span).toBeInstanceOf(HTMLElement)
    expect(span.tagName).toBe('SPAN')
    expect(span.textContent).toBe('Example span text')
    expect(span.classList).toContain('small')
  })

  test('markup div with child span', () => {
    const div = markup('div', {tag: 'span', content:'Example span text', class: 'small' }, {class: 'content'})
    expect(div).toBeInstanceOf(HTMLElement)
    expect(div.tagName).toBe('DIV')
    expect(div.classList).toContain('content')
    const span = div.firstChild
    expect(span.tagName).toBe('SPAN')
    expect(span.textContent).toBe('Example span text')
    expect(span.classList).toContain('small')
  })

  test('markup input with boolean attribute', () => {
    const input = markup('input', null, {required: true,})
    expect(input.getAttribute('required')).toBe('required')
    const input2 = markup('input', null, {required: false,})
    expect(input2.getAttribute('required')).toBeNull()
    const textarea = markup('textarea', null, {contenteditable: true,})
    expect(textarea.getAttribute('contenteditable')).toBe('true')
  })

  test('markup input with bound events', () => {
    const cb = jest.fn()
    const input = markup('input', null, {type: 'text', 'events': {'change': cb, 'input': cb}})
    input.dispatchEvent(new Event('input'))
    expect(cb.mock.calls).toHaveLength(1)
    input.dispatchEvent(new Event('change'))
    expect(cb.mock.calls).toHaveLength(2)
  })

})

describe('Test escaping', () => {
  //Escape markup so it can be displayed as text rather than rendered
  test('escapeHtml', () => {
    //Used when saving to XML data type
    expect(escapeHtml('<img src="image.jpg?&time=<123>">')).toStrictEqual('&lt;img src="image.jpg?&amp;time=&lt;123&gt;"&gt;')
    expect(escapeHtml('<img src="myimage.jpg">')).toStrictEqual('&lt;img src="myimage.jpg"&gt;')
    expect(escapeHtml('<img src=\'myimage.jpg\'>')).toStrictEqual('&lt;img src=\'myimage.jpg\'&gt;')

  })

  //Converts escaped HTML into usable HTML
  test('parsedHtml', () => {
    expect(parsedHtml('&lt;img src=&quot;myimage.jpg&quot;&gt;')).toBe('<img src="myimage.jpg">')
    expect(parsedHtml('&lt;img src=\'myimage.jpg\'&gt;')).toBe('<img src=\'myimage.jpg\'>')
    expect(parsedHtml('&lt;img src="image.jpg?&amp;time=&lt;123&gt;"&gt;')).toBe('<img src="image.jpg?&time=<123>">')
  })

  //Escape an attribute by changing ", &, < & > to HTML Entities
  test('escapeAttr', () => {
    expect(escapeAttr('my-"&<>attr')).toBe('my-&quot;&amp;&lt;&gt;attr')
  })

  //Escape a list of attributes using escapeAttr
  test.todo('escapeAttrs')

  //Make strings safe to be used as classes (replaces all spaces with - and removes all characters except a-zA-Z0-9[]_-
  test('safename', () => {
    expect(safename('string with space')).toBe('string-with-space')
    expect(safename('perfectString-Here')).toBe('perfectString-Here')
    expect(safename('invalid* characters')).toBe('invalid-characters')
  })
})

describe('Test util Asset inclusion', () => {
  test('can include style via href link', () => {
    utils.getStyles('https://formbuilder.online/assets/css/site.min.css?1')
    const linkTag = document.querySelector('head > link[href="https://formbuilder.online/assets/css/site.min.css?1"]')
    expect(linkTag).toBeInstanceOf(HTMLLinkElement)
    expect(window.fbLoaded.css).toContain('https://formbuilder.online/assets/css/site.min.css?1')
  })
  test('can include style via href object', () => {
    utils.getStyles({
      'id': 'test1',
      'type': 'href',
      'href': 'https://formbuilder.online/assets/css/site.min.css?2'
    })
    const linkTag = document.querySelector('head > link[href="https://formbuilder.online/assets/css/site.min.css?2"]')
    expect(linkTag).toBeInstanceOf(HTMLLinkElement)
    expect(window.fbLoaded.css).toContain('test1')
  })
  test('can include style via inline', () => {
    utils.getStyles({
      'id': 'test2',
      'type': 'inline',
      'style': 'width: 10px; height: 100px'
    })
    const styleTag = document.querySelector('head > style[id="test2"]')
    expect(styleTag).toBeInstanceOf(HTMLStyleElement)
    expect(styleTag.textContent).toBe('width: 10px; height: 100px')
    expect(window.fbLoaded.css).toContain('test2')
  })

  test('include js', async () => {
    await getScripts('https://formbuilder.online/assets/js/form-builder.min.js').then(() => {
      expect(window.fbLoaded.js).toContain('https://formbuilder.online/assets/js/form-builder.min.js')
    })
  })
})

describe('enhancedBootstrap feature utils', () => {


  test('getAllGridRelatedClasses', () => {
    expect(getAllGridRelatedClasses('test row-1 col-md-6')).toEqual(['row-1', 'col-md-6'])
  })
})