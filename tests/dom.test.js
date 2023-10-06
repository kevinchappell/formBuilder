const { remove, empty, filter } = require('./../src/js/dom')

describe('Test Dom functions', () => {
  test('remove', () => {
    const list = $('<ul><li>Item 1</li><li>Item 2</li></ul>')[0]
    const toRemove = list.firstChild

    expect(list.querySelectorAll('li').length).toBe(2)
    remove(toRemove)
    expect(list.querySelectorAll('li').length).toBe(1)
  })

  test('empty', () => {
    const list = $('<ul><li>Item 1</li><li>Item 2</li></ul>')[0]

    expect(list.querySelectorAll('li').length).toBe(2)
    empty(list)
    expect(list.firstChild).toBeNull()
  })

  test('filter', () => {
    const list = $('<ul><li>Item 1</li><li>Item 2</li><li>Empty</li></ul>')[0]

    expect(list.querySelectorAll('li').length).toBe(3)
    let filtered = filter(list.querySelectorAll('li'), 'Item', false)
    expect(filtered.length).toBe(2)
    expect(filtered[0].style.display).toBe('none')

    filtered = filter(list.querySelectorAll('li'), 'Item', true)
    expect(filtered.length).toBe(2)
    expect(filtered[0].style.display).toBe('block')
    expect(list.lastChild.style.display).toBe('none')

  })
})