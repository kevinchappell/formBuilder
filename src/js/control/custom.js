import control from '../control'

/**
 * Support for custom controls
 * Implementing support for custom templates being passed as options to formBuilder/Render
 * @extends control
 */
export default class controlCustom extends control {

  constructor(config, preview, template) {
    super(config,preview)
    this.template = template
  }

  /**
   * build a custom control defined in the templates option
   * @return {{field: any, layout: any}} DOM Element to be injected into the form.
   */
  build() {
    let custom = this.template
    /* istanbul ignore next */
    if (!custom) {
      return control.error(
        `Invalid custom control type '${this.type}'. Please ensure you have registered it correctly as a template option.`,
      )
    }

    // render the custom template
    // restore fieldData config structure for backwards compatibility
    const fieldData = Object.assign(this.config)
    const properties = [
      'label',
      'description',
      'subtype',
      'id',
      'preview',
      'required',
      'title',
      'aria-required',
      'type',
    ]
    for (const prop of properties) {
      fieldData[prop] = this.config[prop] || this[prop]
    }

    // build & retrieve element settings
    custom = custom.bind(this)
    custom = custom(fieldData)

    // check for CSS or JS to be injected
    if (custom.js) {
      this.js = custom.js
    }
    if (custom.css) {
      this.css = custom.css
    }

    // handle onRender events & return
    this.onRender = custom.onRender
    return {
      field: custom.field,
      layout: custom.layout,
    }
  }
}
