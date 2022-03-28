import { optionFields } from 'ts/shared/constants'
import { empty, filter } from 'ts/shared/utils'

export default class Dom {
  defaultSubtypes = {
    text: ['text', 'password', 'email', 'color', 'tel'],
    header: ['h1', 'h2', 'h3'],
    button: ['button', 'submit', 'reset'],
    paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
    textarea: ['textarea', 'quill'],
  }

  optionFields: string[]
  optionFieldsRegEx: RegExp
  subtypes: { text: string[]; header: string[]; button: string[]; paragraph: string[]; textarea: string[] }
  empty: (element: any) => any
  filter: (elems: any, term: any, show?: boolean) => any[]
  stage: HTMLElement
  controls: HTMLElement
  editorWrap: HTMLElement
  formActions: HTMLElement

  constructor() {
    this.optionFields = optionFields
    this.optionFieldsRegEx = new RegExp(`(${optionFields.join('|')})`)

    this.subtypes = this.defaultSubtypes

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
