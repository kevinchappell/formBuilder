import control from '../control'
import utils from '../utils'
/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controlParagraph extends control {
  /**
   * build a paragraph DOM element
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    const { type, ...attrs } = this.config
    let tag = type

    // some types use an element of a different name
    const typeMap = {
      paragraph: 'p',
      header: this.subtype,
    }
    if (typeMap[type]) {
      tag = typeMap[type]
    }
    return {
      field: this.markup(tag, utils.parsedHtml(this.label), attrs),
      layout: 'noLabel',
    }
  }
}

// register the following controls
control.register(['paragraph', 'header'], controlParagraph)
control.register(['p', 'address', 'blockquote', 'canvas', 'output'], controlParagraph, 'paragraph')
control.register(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], controlParagraph, 'header')
