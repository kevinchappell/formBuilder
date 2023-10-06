/**
 * Sanitizer utility for handling untrusted HTML
 */

const sanitizerConfig = {
  clobberingProtection: {
    document: true,
    form: true,
    namespaceAttributes: false, //whether to prefix with user-content-
  },
  backendOrder: ['dompurify', 'sanitizer', 'fallback'],
  backends: {
    sanitizer: typeof window['Sanitizer'] === 'function' ? new window.Sanitizer() : false,
    dompurify: window.DOMPurify ? (purify => {
      purify.setConfig({
        //USE_PROFILES: { html: true }, //Only process HTML (exclude SVG and MATHML)
        SANITIZE_DOM: false, //formBuilder uses inputs with names that clash built-in attributes of Form element, we use our modified DomClobbering function instead
        ADD_ATTR: ['contenteditable'] //label input requires this to be allowed
      })
      return purify
    })(window.DOMPurify) : false,
    fallback: content => content,
  }
}

export const setSanitizerConfig = config => {
  if (typeof config !== 'object') {
    throw 'Invalid value given to setSanitizerConfig, expected config object'
  }

  if (config.hasOwnProperty('clobberingProtection')) {
    ['document', 'form', 'namespaceAttributes'].forEach(type => {
      if (config.clobberingProtection.hasOwnProperty(type) && typeof config.clobberingProtection[type] === 'boolean') {
        sanitizerConfig.clobberingProtection[type] = config.clobberingProtection[type]
      }
    })
  }
  if (config.hasOwnProperty('backends')) {
    if (typeof config.backends === 'object') {
      Object.keys(config.backends).forEach(implementation => sanitizerConfig.backends[implementation] = config.backends[implementation])
    } else {
      throw 'backends config expected to be an Object'
    }
  }
  if (config.hasOwnProperty('backendOrder')) {
    sanitizerConfig.backendOrder = []
    if (Array.isArray(config.backendOrder)) {
      config.backendOrder.forEach(backend => {
        if (sanitizerConfig.backends.hasOwnProperty(backend)) {
          sanitizerConfig.backendOrder.push(backend)
        } else {
          throw 'unknown sanitizer backend ' + backend
        }
      })
    } else {
      throw 'backendOrder config expected to be an Array of backend keys as strings'
    }
  }
}

export const isPotentiallyDangerousAttribute = (attrName, attrValue) => {
  if (sanitizerConfig.backendOrder.length === 0) {
    //All backends disabled so no sanitization checks to be performed
    return false
  }
  const attrNameLc = attrName.toLowerCase()
  attrValue = attrValue ? attrValue + '' : ''
  return (
    attrNameLc.startsWith('on')
    || ['form', 'formaction'].includes(attrNameLc)
    || attrValue.trim().toLowerCase().startsWith('javascript:')
  )
}

function fallbackSanitizer(content) {
  //Fallback function if no other sanitizer is available

  //jQuery < 3.5 doesn't have this safety feature, so we implement it here
  // Stop scripts or inline event handlers from being executed immediately
  // by using document.implementation
  const context = document.implementation.createHTMLDocument('')

  // Set the base href for the created document
  // so any parsed elements with URLs
  // are based on the document's URL
  const base = context.createElement('base')
  base.href = document.location.href
  context.head.appendChild(base)

  const exclude_tags = [
    'applet',
    'comment',
    'embed',
    'iframe',
    'link',
    'listing',
    'meta',
    'noscript',
    'object',
    'plaintext',
    'script',
    'style',
    'xmp',
  ]

  const output = $.parseHTML(content, context, false)
  $(output).find('*').addBack().each((nindex, node) => {
    if (node.nodeName === '#text') {
      return //Allow through text nodes
    }

    //Strip potentially dangerous tags
    if (node.tagName && exclude_tags.includes(node.tagName.toLowerCase())) {
      if (node.parentElement) {
        node.parentElement.removeChild(node)
      } else if (output.includes(node)) {
        output.splice(output.indexOf(node), 1)
      }
      return
    }

    //Strip attributes that can execute Javascript or cause dom clobbering
    if (node.attributes) {
      Array.from(node.attributes).forEach(attribute => {
        if (isPotentiallyDangerousAttribute(attribute.name, attribute.value)) {
          $(node).removeAttr(attribute.name)
        }
      })
    }
  })

  const tmp = context.createElement('div')
  $(tmp).html(output)
  return tmp.innerHTML
}

sanitizerConfig.backends.fallback = fallbackSanitizer

export const attributeWillClobber = value => {
  const check_doc = document
  const check_form = document.createElement('form')

  return (value in check_doc || value in check_form)
}

export const sanitizeNamedAttribute = value => {
  const check_doc = sanitizerConfig.clobberingProtection.document ? document : false
  const check_form = sanitizerConfig.clobberingProtection.form ? document.createElement('form') : false

  if ((check_doc && value in check_doc) || (check_form && value in check_form)) {
    return (sanitizerConfig.clobberingProtection.namespaceAttributes) ? 'user-content-' + value : undefined
  }
  return value
}

const sanitizeDomClobbering = element => {
  $(element).find('*').each((nindex, node) => {
    const protectedTypes = ['id', 'name']

    //Prevent dom clobbering of document.X from Element.name
    if (['embed', 'form', 'iframe', 'image', 'img', 'object'].includes(node.tagName.toLowerCase())) {
      node.removeAttribute('name')
    }

    protectedTypes.forEach(attrName => {
      if (node.hasAttribute(attrName)) {
        const value = sanitizeNamedAttribute(node.getAttribute(attrName))
        if (value === undefined) {
          node.removeAttribute(attrName)
        } else {
          node.setAttribute(attrName, value)
        }
      }
    })
  })
  return element
}

const sanitizersCallbacks = {
  fallback: (element, content) => {
    //fallback will return the content as-is if the fallback is disabled
    const purifier = sanitizerConfig.backends.fallback
    const supported = typeof purifier === 'function'
    if (supported) {
      content = purifier(content)
    }
    element.innerHTML = content
    return supported
  },
  dompurify: (element, content) => {
    const purifier = sanitizerConfig.backends.dompurify
    if (purifier === false || !purifier.isSupported) {
      return false
    }

    element.innerHTML = purifier.sanitize(content)
    return true
  },
  sanitizer: (element, content) => {
    const sanitizer = sanitizerConfig.backends.sanitizer
    if (sanitizer) {
      element.setHTML(content, { sanitizer: sanitizer })
      return true
    }
    return false
  }
}

export const setElementContent = (element, content, asText = false) => {
  if (asText) {
    element.textContent = content
  } else {
    const proxyElem = document.createElement(element.tagName)
    const performedBy = sanitizerConfig.backendOrder.find(type => sanitizersCallbacks[type](proxyElem, content))
    if (performedBy !== undefined) {
      sanitizeDomClobbering(proxyElem)
      element.innerHTML = proxyElem.innerHTML
      return element
    }
    element.innerHTML = content

    return element
  }
}

const sanitizer = {
  setElementContent,
  setSanitizerConfig,
  sanitizeNamedAttribute,
  isPotentiallyDangerousAttribute,
  attributeWillClobber,
}

export default sanitizer
