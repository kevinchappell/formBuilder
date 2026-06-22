require('./../src/js/form-render.js')

describe('formRender per-element instances', () => {
  // Regression: the jQuery plugin kept the active instance in a module-level singleton
  // (methods.instance), so creating a second form (independent OR nested, e.g. a container
  // control that renders children via formRender) clobbered the first. Any subsequent method
  // call (userData/clear/setData/render/html) then operated on the wrong form.
  test('method calls resolve the instance for the element they are called on', () => {
    const formA = $('<div>')
    const formB = $('<div>')

    formA.formRender({ formData: [{ type: 'text', name: 'a_field' }] })
    // Second render must not clobber formA's instance.
    formB.formRender({ formData: [{ type: 'text', name: 'b_field' }] })

    expect(formA.formRender('userData').map(f => f.name)).toEqual(['a_field'])
    expect(formB.formRender('userData').map(f => f.name)).toEqual(['b_field'])
  })
})
