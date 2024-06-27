import control from '../control'

/**
 * SignaturePad class
 * @extends control
 */
export default class controlSignaturePad extends control {
  /**
   * definition
   * @return {Object} 
   */
  static get definition() {
    return {
      icon: '🖊️', 
      i18n: {
        default: 'Signature Pad',
      },
    }
  }

  /**
   * build a signature pad DOM element
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    this.canvas = this.markup('canvas', null, { className: 'signature-pad' })
    this.clearButton = this.markup('button', 'Clear', { type: 'button', className: 'clear-button' })
    this.clearButton.addEventListener('click', () => {
      const context = this.canvas.getContext('2d')
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // Clear any existing drawing data
      this.clearCanvas()

    })
    this.labelSpan = this.markup('span', this.config.label || 'Signature', { className: 'form-label' })

    // Created a container div and wrap the canvas inside it
    const container = this.markup('div', [this.canvas], { className: 'signature-container' })
  
    return [this.labelSpan, container, this.clearButton]
    
  }

  /**
   * Clear the canvas and any existing drawing data
   */
  clearCanvas() {
    const context = this.canvas.getContext('2d')

    context.beginPath() // Start a new path to clear previous strokes

    context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  /**
   * onRender callback
   * @param {Object} evt Event object
   */
  onRender(evt) {
    this.canvas.width = this.canvas.parentElement.offsetWidth
    this.canvas.height = 150 // Fixed height for the canvas

    const context = this.canvas.getContext('2d')
    context.strokeStyle = '#000' 
    context.lineWidth = 2 

    let isDrawing = false 
    this.canvas.addEventListener('mousedown', e => {
      isDrawing = true
      context.moveTo(e.offsetX, e.offsetY)
    })
    this.canvas.addEventListener('mousemove', e => {
      if (isDrawing) {
        context.lineTo(e.offsetX, e.offsetY)
        context.stroke()
      }
    })
    this.canvas.addEventListener('mouseup', () => {
      isDrawing = false
    })
    this.canvas.addEventListener('mouseout', () => {
      isDrawing = false
    })
    return evt
  }
}
control.register('signaturePad', controlSignaturePad)