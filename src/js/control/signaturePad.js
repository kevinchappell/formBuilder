import control from '../control'

/**
 * SignaturePad class
 * @extends control
 */
export default class controlSignaturePad extends control {
  constructor(config) {
    super(config)
    this.userData = config.userData || null
  }

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
    this.clearButton = this.markup('button', 'Clear Signature', { type: 'button', className: 'clear-button' })
    this.clearButton.addEventListener('click', () => {
      const context = this.canvas.getContext('2d')
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.clearCanvas()
    })

    this.labelSpan = this.markup('span', this.config.label, { className: 'form-label' })

    const container = this.markup('div', [this.canvas, this.clearButton], { className: 'signature-container' })

    if (this.userData) {
      this.loadSignature(this.userData)
    }

    return [this.labelSpan, container]
  }

  /**
   * Clear the canvas and any existing drawing data
   */
  clearCanvas() {
    const context = this.canvas.getContext('2d')
    if (context) {
      context.beginPath()
      context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  /**
   * onRender callback
   * @param {Object} evt Event object
   */
  onRender(evt) {
    this.canvas.width = this.canvas.parentElement.offsetWidth
    this.canvas.height = 150

    const context = this.canvas.getContext('2d')
    if (context) {
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
        this.saveSignature()
      })
      this.canvas.addEventListener('mouseout', () => {
        isDrawing = false
      })

      // Load saved user data if available
      if (this.userData) {
        this.loadSignature(this.userData)
      } 
    }
    return evt
  }


  /**
   * Load signature data from userData
   * @param {Array} userData
   */
  loadSignature(userData) {
    const context = this.canvas.getContext('2d')
    const image = new Image()
    image.onload = () => {
      context.drawImage(image, 0, 0)
    }
    image.src = JSON.parse(userData[0])
  }

  /**
   * Save the signature data to user data
   */
  saveSignature() {
    const dataUrl = this.canvas.toDataURL('image/png')
    this.config.userData = [dataUrl]
    console.log('save signature:', this.config.userData)
  }
 /**
   * extend the default events to add a prerender for the signature pad
   * @param {string} eventType
   * @return {Function} prerender function
   */
 on(eventType) {
  if (eventType === 'prerender' && this.preview) {
    return element => {
      if (this.field) {
        element = this.field
      }

      $(element).on('mousedown', e => {
        e.stopPropagation()
      })
    }
  }
  return super.on(eventType)
  }

}

control.register('signaturePad', controlSignaturePad)