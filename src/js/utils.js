/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} utils
 */
const utils = {}
window.fbLoaded = {
  js: [],
  css: [],
}
window.fbEditors = {
  quill: {},
  tinymce: {},
}

// cleaner syntax for testing indexOf element
utils.inArray = function(needle, haystack) {
  return haystack.indexOf(needle) !== -1
}

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
utils.trimObj = function(attrs) {
  const xmlRemove = [null, undefined, '', false, 'false']
  for (const attr in attrs) {
    if (utils.inArray(attrs[attr], xmlRemove)) {
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
utils.validAttr = function(attr) {
  const invalid = [
    'values',
    'enableOther',
    'other',
    'label',
    // 'style',
    'subtype',
  ]
  return !utils.inArray(attr, invalid)
}

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
utils.attrString = attrs =>
  Object.entries(attrs)
    .map(([key, val]) => utils.validAttr(key) && Object.values(utils.safeAttr(key, val)).join(''))
    .filter(Boolean)
    .join(' ')

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
utils.safeAttr = (name, value) => {
  name = utils.safeAttrName(name)
  let valString

  if (value) {
    if (Array.isArray(value)) {
      valString = utils.escapeAttr(value.join(' '))
    } else {
      if (typeof value === 'boolean') {
        value = value.toString()
      }
      valString = utils.escapeAttr(value.trim())
    }
  }

  value = value ? `="${valString}"` : ''
  return {
    name,
    value,
  }
}

utils.safeAttrName = name => {
  const safeAttr = {
    className: 'class',
  }

  return safeAttr[name] || utils.hyphenCase(name)
}

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
utils.hyphenCase = str => {
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
utils.camelCase = str => str.replace(/-([a-z])/g, (m, w) => w.toUpperCase())

/**
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}                         contentType for mapping
 */
utils.contentType = content => {
  let type = typeof content
  if (content instanceof Node || content instanceof HTMLElement) {
    type = 'node'
  } else if (Array.isArray(content)) {
    type = 'array'
  }

  return type
}

/**
 * Bind events to an element
 * @param  {Object} element DOM element
 * @param  {Object} events  object full of events eg. {click: evt => callback}
 * @return {void}
 */
utils.bindEvents = (element, events) => {
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
utils.nameAttr = function(field) {
  const epoch = new Date().getTime()
  const prefix = field.type || utils.hyphenCase(field.label)
  return prefix + '-' + epoch
}

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attributes
 * @return {Object} DOM Element
 */
utils.markup = function(tag, content = '', attributes = {}) {
  let contentType = utils.contentType(content)
  const { events, ...attrs } = attributes
  const field = document.createElement(tag)

  const appendContent = {
    string: content => {
      field.innerHTML += content
    },
    object: config => {
      const { tag, content, ...data } = config
      return field.appendChild(utils.markup(tag, content, data))
    },
    node: content => {
      return field.appendChild(content)
    },
    array: content => {
      for (let i = 0; i < content.length; i++) {
        contentType = utils.contentType(content[i])
        appendContent[contentType](content[i])
      }
    },
    function: content => {
      content = content()
      contentType = utils.contentType(content)
      appendContent[contentType](content)
    },
    undefined: () => {},
  }

  for (const attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      const name = utils.safeAttrName(attr)
      const attrVal = Array.isArray(attrs[attr])
        ? utils.unique(attrs[attr].join(' ').split(' ')).join(' ')
        : attrs[attr]
      field.setAttribute(name, attrVal)
    }
  }

  if (content) {
    appendContent[contentType].call(this, content)
  }

  utils.bindEvents(field, events)

  return field
}

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
utils.parseAttrs = elem => {
  const attrs = elem.attributes
  const data = {}
  utils.forEach(attrs, attr => {
    let attrVal = attrs[attr].value || ''
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true'
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal
    }
  })

  return data
}

/**
 * Convert field options to optionData
 * @param  {NodeList} options  DOM elements
 * @return {Array} optionData array
 */
utils.parseOptions = options => {
  let optionData = {}
  const data = []

  for (let i = 0; i < options.length; i++) {
    optionData = utils.parseAttrs(options[i])
    optionData.label = options[i].textContent
    data.push(optionData)
  }

  return data
}

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
utils.parseXML = xmlString => {
  const parser = new window.DOMParser()
  const xml = parser.parseFromString(xmlString, 'text/xml')
  const formData = []

  if (xml) {
    const fields = xml.getElementsByTagName('field')
    for (let i = 0; i < fields.length; i++) {
      const fieldData = utils.parseAttrs(fields[i])
      const options = fields[i].getElementsByTagName('option')

      if (options && options.length) {
        fieldData.values = utils.parseOptions(options)
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
utils.parsedHtml = html => {
  const escapeElement = document.createElement('textarea')
  escapeElement.innerHTML = html
  return escapeElement.textContent
}

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
utils.escapeHtml = html => {
  const escapeElement = document.createElement('textarea')
  escapeElement.textContent = html
  return escapeElement.innerHTML
}

// Escape an attribute
utils.escapeAttr = str => {
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
utils.escapeAttrs = attrs => {
  for (const attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = utils.escapeAttr(attrs[attr])
    }
  }

  return attrs
}

// forEach that can be used on nodeList
utils.forEach = function(array, callback, scope) {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]) // passes back stuff we need
  }
}

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
utils.unique = array => {
  return array.filter((elem, pos, arr) => arr.indexOf(elem) === pos)
}

/**
 * Removes a value from an array
 * @param  {String|Number} val
 * @param  {Array} arr
 */
utils.remove = (val, arr) => {
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
utils.getScripts = (scriptScr, path) => {
  const $ = jQuery
  let _arr = []

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr]
  }

  if (!utils.isCached(scriptScr)) {
    _arr = $.map(scriptScr, src => {
      const options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src,
      }
      return $.ajax(options).done(() => window.fbLoaded.js.push(src))
    })
  }

  _arr.push($.Deferred(deferred => $(deferred.resolve)))

  return $.when(..._arr)
}

/**
 * Checks if remote resource is already loaded
 * @param  {String|Array} src  url of remote script or css
 * @param  {String}       type       'js' or 'css'
 * @return {Boolean}      isCached
 */
utils.isCached = (src, type = 'js') => {
  let isCached = false
  const cache = window.fbLoaded[type]
  if (Array.isArray(src)) {
    isCached = src.every(s => utils.inArray(s, cache))
  } else {
    isCached = utils.inArray(src, cache)
  }
  return isCached
}

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
utils.getStyles = (scriptScr, path) => {
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
    if (utils.isCached(key, 'css')) {
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
utils.capitalize = str => {
  return str.replace(/\b\w/g, function(m) {
    return m.toUpperCase()
  })
}

utils.merge = (obj1, obj2) => {
  const mergedObj = Object.assign({}, obj1, obj2)
  for (const prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? utils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop]
      } else if (typeof obj2[prop] === 'object') {
        mergedObj[prop] = utils.merge(obj1[prop], obj2[prop])
      } else {
        mergedObj[prop] = obj2[prop]
      }
    }
  }
  return mergedObj
}

utils.addEventListeners = (el, evts, fn) => {
  return evts.split(' ').forEach(e => el.addEventListener(e, fn, false))
}

/**
 * Find the closest parent by class
 * @param  {Object} el  DOM element
 * @param  {String} cls class
 * @return {Object}     DOM Element
 */
utils.closest = (el, cls) => {
  const className = cls.replace('.', '')
  while ((el = el.parentElement) && !el.classList.contains(className));
  return el
}

utils.noop = () => null

/**
 * Debounce often called functions, like save
 * @param  {Function}  func
 * @param  {Number}  wait
 * @param  {Boolean} immediate
 * @return {Function} debounce
 */
utils.debounce = (func, wait = 250, immediate = false) => {
  let timeout
  return function(...args) {
    // eslint-disable-next-line no-invalid-this
    const context = this
    const later = function() {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

/**
 * Add a mobile class
 * @todo find css only solution
 * @return {String} Mobile class added to formBuilder
 */
utils.mobileClass = () => {
  let mobileClass = ''
  ;(a => {
    // eslint-disable-next-line
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      )
    ) {
      mobileClass = ' fb-mobile'
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
utils.safename = str => {
  return str
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9[\]_-]/g, '')
    .toLowerCase()
}

/**
 * Strips non-numbers from a number only input
 *
 * @param  {string} str string with possible number
 * @return {string}     string without numbers
 */
utils.forceNumber = str => {
  return str.replace(/[^0-9]/g, '')
}

// subtract the contents of 1 array from another
utils.subtract = (arr, from) => {
  return from.filter(function(a) {
    return !~this.indexOf(a)
  }, arr)
}

export const insertStyle = srcs => {
  srcs = Array.isArray(srcs) ? srcs : [srcs]
  const promises = srcs.map(
    ({ src, id }) =>
      new Promise((resolve, reject) => {
        if (window.fbLoaded.css.includes(src)) {
          return resolve(src)
        }
        const formeoStyle = utils.markup('link', null, {
          href: src,
          rel: 'stylesheet',
          id,
        })

        document.head.insertBefore(formeoStyle, document.head.firstChild)
      })
  )

  return Promise.all(promises)
}

export const removeStyle = id => {
  const elem = document.getElementById(id)
  return elem.parentElement.removeChild(elem)
}

export default utils
