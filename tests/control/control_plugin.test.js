import control from '../../src/js/control.js'
require('../../src/js/control/custom.js')
require('../../src/js/control_plugins/starRating.js')

let controlStarRating
describe('Initialise Custom Control', () => {
  test('test load control', () => {
    expect(control.fbControlsLoaded).toBeFalsy()
    control.loadCustom([])
    expect(control.fbControlsLoaded).toBe(true)
    controlStarRating = control.getClass('starRating')
  })
  test('test control definition', () => {
    const def = controlStarRating.definition
    expect(def.icon).toBe('🌟')
  })
})

describe('Test Custom Control', () => {
  test('test building control element', async () => {
    const controlInstance = new controlStarRating({
      'type': 'starRating',
      'label': 'Rating',
      'name': 'star-1492424082853',
      'value': 3,
    }, false)
    expect(typeof controlInstance).toBe('object')
    expect(controlInstance.constructor.name).toBe('controlStarRating')

    const controlBuild = controlInstance.build()
    const element = controlBuild[0]
    expect(element.constructor.name).toBe('HTMLInputElement')
    expect(element.id).toBe('star-1492424082853')
    expect(element.type).toBe('hidden')

    controlInstance.on('render')(controlBuild)

    await new Promise(r => setTimeout(r, 2000))

    const rateYoInstance = controlBuild[1]
    expect(rateYoInstance.classList.contains('jq-ry-container')).toBeTruthy()
  })
})