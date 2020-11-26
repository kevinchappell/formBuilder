/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 */

window.fbLoaded = {
  js: [],
  css: [],
}
window.fbEditors = {
  quill: {},
  tinymce: {},
}

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
export const trimObj = function(attrs, removeFalse = false) {
  const xmlRemove = [null, undefined, '']
  if (removeFalse) {
    xmlRemove.push(false)
  }
  for (const attr in attrs) {
    if (xmlRemove.includes(attrs[attr])) {
      delete attrs[attr]
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr]
      }
    }
  }

  return attrs
}

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
export const validAttr = function(attr) {
  const invalid = [
    'values',
    'enableOther',
    'other',
    'label',
    // 'style',
    'subtype',
  ]
  return !invalid.includes(attr)
}

/**
 * Convert an attrs object into a string for xml node
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
export const xmlAttrString = attrs =>
  Object.entries(attrs)
    .map(([key, val]) => `${hyphenCase(key)}="${val}"`)
    .join(' ')

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
export const attrString = attrs =>
  Object.entries(attrs)
    .map(([key, val]) => validAttr(key) && Object.values(safeAttr(key, val)).join(''))
    .filter(Boolean)
    .join(' ')

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
export const safeAttr = (name, value) => {
  name = safeAttrName(name)
  let valString

  if (value) {
    if (Array.isArray(value)) {
      valString = escapeAttr(value.join(' '))
    } else {
      if (typeof value === 'boolean') {
        value = value.toString()
      }
      valString = escapeAttr(value.trim())
    }
  }

  value = value ? `="${valString}"` : ''
  return {
    name,
    value,
  }
}

/**
 * recursively flatten a nested array
 * @param {Array} arr to be flattened
 * @return {Array} flattened array
 */
export const flattenArray = arr =>
  arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), [])

export const safeAttrName = name => {
  const safeAttr = {
    className: 'class',
  }

  return safeAttr[name] || hyphenCase(name)
}

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
export const hyphenCase = str => {
  // eslint-disable-next-line no-useless-escape
  str = str.replace(/[^\w\s\-]/gi, '')
  str = str.replace(/([A-Z])/g, function($1) {
    return '-' + $1.toLowerCase()
  })

  return str.replace(/\s/g, '-').replace(/^-+/g, '')
}

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
export const camelCase = str => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase())

/**
 * Bind events to an element
 * @param  {Object} element DOM element
 * @param  {Object} events  object full of events eg. {click: evt => callback}
 * @return {void}
 */
export const bindEvents = (element, events) => {
  if (events) {
    for (const event in events) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, evt => events[event](evt))
      }
    }
  }
}

/**
 * Generate a unique name attribute
 * @param  {Object} field
 * @return {String}       name
 */
export const nameAttr = function(field) {
  const epoch = new Date().getTime()
  const prefix = field.type || hyphenCase(field.label)
  return prefix + '-' + epoch
}

/**
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}
 */
export const getContentType = content => {
  if (content === undefined) {
    return content
  }

  return [
    ['array', content => Array.isArray(content)],
    ['node', content => content instanceof window.Node || content instanceof window.HTMLElement],
    ['component', () => content && content.dom],
    [typeof content, () => true],
  ].find(typeCondition => typeCondition[1](content))[0]
}

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attributes
 * @return {Object} DOM Element
 */
export const markup = function(tag, content = '', attributes = {}) {
  let contentType = getContentType(content)
  const { events, ...attrs } = attributes
  const field = document.createElement(tag)

  const appendContent = {
    string: content => {
      field.innerHTML += content
    },
    object: config => {
      const { tag, content, ...data } = config
      return field.appendChild(markup(tag, content, data))
    },
    node: content => {
      return field.appendChild(content)
    },
    array: content => {
      for (let i = 0; i < content.length; i++) {
        contentType = getContentType(content[i])
        appendContent[contentType](content[i])
      }
    },
    function: content => {
      content = content()
      contentType = getContentType(content)
      appendContent[contentType](content)
    },
    undefined: () => {},
  }

  for (const attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      const name = safeAttrName(attr)
      const attrVal = Array.isArray(attrs[attr]) ? unique(attrs[attr].join(' ').split(' ')).join(' ') : attrs[attr]
      field.setAttribute(name, attrVal)
    }
  }

  if (content) {
    appendContent[contentType](content)
  }

  bindEvents(field, events)

  return field
}

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
export const parseAttrs = elem => {
  const attrs = elem.attributes
  const data = {}
  forEach(attrs, attr => {
    let attrVal = attrs[attr].value || ''
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true'
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined
    }

    if (attrVal) {
      data[camelCase(attrs[attr].name)] = attrVal
    }
  })

  return data
}

/**
 * Convert field options to optionData
 * @param  {NodeList} options  DOM elements
 * @return {Array} optionData array
 */
export const parseOptions = options => {
  const data = []

  for (let i = 0; i < options.length; i++) {
    const optionData = {
      ...parseAttrs(options[i]),
      label: options[i].textContent,
    }
    data.push(optionData)
  }

  return data
}

/**
 * Convert field user data to userData
 * @param  {NodeList} userData  DOM elements
 * @return {Array} optionData array
 */
export const parseUserData = userData => {
  const data = []

  if(userData.length){
    const values = userData[0].getElementsByTagName('value')

    for (let i = 0; i < values.length; i++) {
      data.push(values[i].textContent)
    }
  }

  return data
}

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
export const parseXML = xmlString => {
  const parser = new window.DOMParser()
  const xml = parser.parseFromString(xmlString, 'text/xml')
  const formData = []

  if (xml) {
    const fields = xml.getElementsByTagName('field')
    for (let i = 0; i < fields.length; i++) {
      const fieldData = parseAttrs(fields[i])
      const options = fields[i].getElementsByTagName('option')
      const userData = fields[i].getElementsByTagName('userData')

      if (options && options.length) {
        fieldData.values = parseOptions(options)
      }

      if (userData && userData.length) {
        fieldData.userData = parseUserData(userData)
      }

      formData.push(fieldData)
    }
  }

  return formData
}

/**
 * Converts escaped HTML into usable HTML
 * @param  {String} html escaped HTML
 * @return {String}      parsed HTML
 */
export const parsedHtml = html => {
  const escapeElement = document.createElement('textarea')
  escapeElement.innerHTML = html
  return escapeElement.textContent
}

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
export const escapeHtml = html => {
  const escapeElement = document.createElement('textarea')
  escapeElement.textContent = html
  return escapeElement.innerHTML
}

// Escape an attribute
export const escapeAttr = str => {
  const match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  }

  const replaceTag = tag => match[tag] || tag

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str
}

// Escape attributes
export const escapeAttrs = attrs => {
  for (const attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = escapeAttr(attrs[attr])
    }
  }

  return attrs
}

// forEach that can be used on nodeList
export const forEach = function(array, callback, scope) {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]) // passes back stuff we need
  }
}

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
export const unique = array => {
  return array.filter((elem, pos, arr) => arr.indexOf(elem) === pos)
}

/**
 * Removes a value from an array
 * @param  {String|Number} val
 * @param  {Array} arr
 */
export const removeFromArray = (val, arr) => {
  const index = arr.indexOf(val)

  if (index > -1) {
    arr.splice(index, 1)
  }
}

/**
 * Loads an array of scripts using jQuery's `getScript`
 * @param  {Array|String}  scriptScr    scripts
 * @param  {String} path   optional to load form
 * @return {Promise}       a promise
 */
export const getScripts = (scriptScr, path) => {
  const $ = jQuery
  let _arr = []

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr]
  }

  if (!isCached(scriptScr)) {
    _arr = jQuery.map(scriptScr, src => {
      const options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src,
      }
      return jQuery.ajax(options).done(() => window.fbLoaded.js.push(src))
    })
  }

  _arr.push(jQuery.Deferred(deferred => $(deferred.resolve)))

  return jQuery.when(..._arr)
}

/**
 * Checks if remote resource is already loaded
 * @param  {String|Array} src  url of remote script or css
 * @param  {String}       type       'js' or 'css'
 * @return {Boolean}      isCached
 */
export const isCached = (src, type = 'js') => {
  let isCached = false
  const cache = window.fbLoaded[type]
  if (Array.isArray(src)) {
    isCached = src.every(s => cache.includes(s))
  } else {
    isCached = cache.includes(src)
  }
  return isCached
}

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
export const getStyles = (scriptScr, path) => {
  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr]
  }
  scriptScr.forEach(src => {
    // if a string is passed, assume a href URL
    let type = 'href'
    let key = src
    let id = ''

    // if an object is passed, work out details from it's properties
    if (typeof src == 'object') {
      type = src.type || (src.style ? 'inline' : 'href')
      id = src.id
      src = type == 'inline' ? src.style : src.href
      key = id || src.href || src.style
    }

    // check we haven't already loaded this css
    if (isCached(key, 'css')) {
      return
    }

    // append the style into the head
    if (type == 'href') {
      const link = document.createElement('link')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      link.href = (path || '') + src
      document.head.appendChild(link)
    } else {
      $(`<style type="text/css">${src}</style>`)
        .attr('id', id)
        .appendTo($(document.head))
    }

    // record this is cached
    window.fbLoaded.css.push(key)
  })
}

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
export const capitalize = str => {
  return str.replace(/\b\w/g, function(m) {
    return m.toUpperCase()
  })
}

export const merge = (obj1, obj2) => {
  const mergedObj = Object.assign({}, obj1, obj2)
  for (const prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? unique(obj1[prop].concat(obj2[prop])) : obj2[prop]
      } else if (typeof obj2[prop] === 'object') {
        mergedObj[prop] = merge(obj1[prop], obj2[prop])
      } else {
        mergedObj[prop] = obj2[prop]
      }
    }
  }
  return mergedObj
}

/**
 *
 * @param {Node} el
 * @param {String} evts events to bind to
 * @param {Function} cb
 * @return {Array} events
 */
export const addEventListeners = (el, evts, cb) => evts.split(' ').forEach(e => el.addEventListener(e, cb, false))

/**
 * Find the closest parent by class
 * @param  {Object} el  DOM element
 * @param  {String} cls class
 * @return {Object}     DOM Element
 */
export const closest = (el, cls) => {
  const className = cls.replace('.', '')
  while ((el = el.parentElement) && !el.classList.contains(className));
  return el
}

/**
 * Add a mobile class
 * @todo find css only solution
 * @return {String} Mobile class added to formBuilder
 */
export const mobileClass = () => {
  let mobileClass = ''
  ;(a => {
    // eslint-disable-next-line
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      )
    ) {
      mobileClass = 'formbuilder-mobile'
    }
  })(navigator.userAgent || navigator.vendor || window.opera)
  return mobileClass
}

/**
 * Make strings safe to be used as classes
 *
 * @param  {String} str string to be converted
 * @return {String}     converter string
 */
export const safename = str => {
  return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9[\]_-]/g, '')
}

/**
 * Strips non-numbers from a number only input
 *
 * @param  {string} str string with possible number
 * @return {string}     string without numbers
 */
export const forceNumber = str => str.replace(/[^0-9]/g, '')

// subtract the contents of 1 array from another
export const subtract = (arr, from) => {
  return from.filter(function(a) {
    return !~this.indexOf(a)
  }, arr)
}

export const insertStyle = srcs => {
  srcs = Array.isArray(srcs) ? srcs : [srcs]
  const promises = srcs.map(
    ({ src, id }) =>
      new Promise(resolve => {
        if (window.fbLoaded.css.includes(src)) {
          return resolve(src)
        }
        const formeoStyle = markup('link', null, {
          href: src,
          rel: 'stylesheet',
          id,
        })

        document.head.insertBefore(formeoStyle, document.head.firstChild)
      }),
  )

  return Promise.all(promises)
}

export const removeStyle = id => {
  const elem = document.getElementById(id)
  return elem.parentElement.removeChild(elem)
}

/**
 *
 * @param {String} str
 * @return {String} titleized string
 */
export function titleCase(str) {
  const lowers = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'for',
    'for',
    'from',
    'in',
    'into',
    'near',
    'nor',
    'of',
    'on',
    'onto',
    'or',
    'the',
    'to',
    'with',
  ].map(lower => `\\s${lower}\\s`)
  const regex = new RegExp(`(?!${lowers.join('|')})\\w\\S*`, 'g')
  return `${str}`.replace(
    regex,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).replace(/[A-Z]/g, word => ` ${word}`),
  )
}

const utils = {
  addEventListeners,
  attrString,
  camelCase,
  capitalize,
  closest,
  getContentType,
  escapeAttr,
  escapeAttrs,
  escapeHtml,
  forceNumber,
  forEach,
  getScripts,
  getStyles,
  hyphenCase,
  isCached,
  markup,
  merge,
  mobileClass,
  nameAttr,
  parseAttrs,
  parsedHtml,
  parseOptions,
  parseUserData,
  parseXML,
  removeFromArray,
  safeAttr,
  safeAttrName,
  safename,
  subtract,
  trimObj,
  unique,
  validAttr,
  titleCase,
}

/**
 * Splits an object based on array of keys
 *
 * @param {Object} obj Object to be split
 * @param {Array}  keys Array of keys to use when splitting Object
 *
 * @return {Array} returns an array of Objects, the first where the keys matched,
 *                 the second where they did not
 */
utils.splitObject = (obj, keys) => {
  // reducer for recreating the initial object after splitting via keys
  // provide a function so I don't reference the original obj
  const reconstructObj = initialObj => (result, key) => {
    result[key] = initialObj[key]
    return result
  }

  const kept = Object.keys(obj)
    .filter(key => keys.includes(key))
    .reduce(reconstructObj(obj), {})
  const rest = Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce(reconstructObj(obj), {})
  return [kept, rest]
}

export default utils
