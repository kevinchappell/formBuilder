/**
 * Sanitizer utility for handling untrusted HTML
 */

const sanitizerConfig = {
  sanitizer: typeof window['Sanitizer'] === 'function' ? new window.Sanitizer() : false,
  dompurify: window.DOMPurify ? (purify => {
    purify.setConfig({
      //USE_PROFILES: { html: true }, //Only process HTML (exclude SVG and MATHML)
      SANITIZE_DOM: false, //formBuilder uses inputs with names that clash built-in attributes of Form element, we use our modified DomClobbing function instead
      ADD_ATTR: ['contenteditable'] //label input requires this to be allowed
    })
    return purify
  })(window.DOMPurify) : false,
  fallback: content => {
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
          const attrNameLc = attribute.name.toLowerCase()
          if (
            attrNameLc.startsWith('on')
            || ['form','formaction'].includes(attrNameLc)
            || attribute.value.trim().toLowerCase().startsWith('javascript:')
          ) {
            $(node).removeAttr(attribute.name)
          }
        })
      }
    })

    const tmp = context.createElement('div')
    $(tmp).html(output)
    return tmp.innerHTML
  }
}

export const setSanitizerConfig = config => { Object.keys(config).forEach(implementation => sanitizerConfig[implementation] = config[implementation]) }

const sanitizeDomClobbering = element => {
  $(element).find('*').each((nindex, node) => {
    //Prevent dom clobbering of document.X from Element.name
    if (['embed', 'form', 'iframe', 'image', 'img', 'object'].includes(node.tagName.toLowerCase())) {
      node.removeAttribute('name')
    }

    ['id','name'].forEach(attrName => {
      if (node.hasAttribute(attrName) && (node.getAttribute(attrName) in document)) { //@TODO for formRender we should also ensure no DomClobbering for Form
        node.removeAttribute(attrName)
      }
    })
  })
  return element
}

const sanitizersCallbacks = {
  fallback: (element, content) => {
    //fallback will return the content as-is if the fallback is disabled
    const purifier = sanitizerConfig.fallback
    const supported = typeof purifier === 'function'
    if (supported) {
      content = purifier(content)
    }
    element.innerHTML = content
    return supported
  },
  dompurify: (element, content) => {
    const purifier = sanitizerConfig.dompurify
    if (purifier === false || !purifier.isSupported) {
      return false
    }

    element.innerHTML = purifier.sanitize(content)
    return true
  },
  sanitizer: (element, content) => {
    const sanitizer = sanitizerConfig.sanitizer
    if (sanitizer) {
      element.setHTML(content, {sanitizer: sanitizer})
    }
    return false
  }
}

export const setElementContent = (element, content, asText = false) => {
  if (asText) {
    element.textContent = content
  } else {
    const proxyElem = document.createElement(element.tagName)
    const performedBy = ['sanitizer','dompurify','fallback'].find(type => sanitizersCallbacks[type](proxyElem, content))
    if (performedBy !== undefined) {
      sanitizeDomClobbering(proxyElem, '')
    }
    element.innerHTML = proxyElem.innerHTML
  }
}

const sanitizer = {
  setElementContent,
  setSanitizerConfig,
}

export default sanitizer