export const instanceDom = {}
export const defaultSubtypes = {
  text: ['text', 'password', 'email', 'color', 'tel'],
  header: ['h1', 'h2', 'h3'],
  button: ['button', 'submit', 'reset'],
  paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
  textarea: ['textarea', 'quill'],
}

/**
 * Removes a dom node
 * @param  {Object} element
 */
export const remove = element => {
  if (element.parentNode) {
    element.parentNode.removeChild(element)
  }
}

export const empty = element => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
  return element
}

export const filter = (elems, term, show = true) => {
  const filteredElems = []
  let toggle = ['none', 'block']

  if (show) {
    toggle = toggle.reverse()
  }

  for (let i = elems.length - 1; i >= 0; i--) {
    const txt = elems[i].textContent.toLowerCase()
    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0]
      filteredElems.push(elems[i])
    } else {
      elems[i].style.display = toggle[1]
    }
  }

  return filteredElems
}

export const optionFields = ['select', 'checkbox-group', 'checkbox', 'radio-group', 'autocomplete']

export const optionFieldsRegEx = new RegExp(`(${optionFields.join('|')})`)
/**
 * Dom class.
 */
export default class Dom {
  /**
   * Set defaults
   * @param  {String} formID [description]
   * @return {Object} Dom Instance
   */
  constructor(formID) {
    this.optionFields = optionFields
    this.optionFieldsRegEx = optionFieldsRegEx

    this.subtypes = defaultSubtypes

    /**
     * Util to remove contents of DOM Object
     * @param  {Object} element
     * @return {Object} element with its children removed
     */
    this.empty = empty

    /**
     * Hide or show an Array or HTMLCollection of elements
     * @param  {Array}   elems
     * @param  {String}  term  match textContent to this term
     * @param  {Boolean} show  or hide elements
     * @return {Array}         filtered elements
     */
    this.filter = filter

    instanceDom[formID] = this
    return instanceDom[formID]
  }

  /**
   * Do something when a specific dom element renders
   * @param {Object} node
   * @param {Function} cb
   */
  onRender(node, cb) {
    if (!node.parentElement) {
      window.requestAnimationFrame(() => this.onRender(node, cb))
    } else {
      cb(node)
    }
  }
}
