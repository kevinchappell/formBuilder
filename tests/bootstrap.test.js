require('./setup-fb')
require('./../src/js/form-builder.js')
import layout from '../src/js/layout'
import Helpers from '../src/js/helpers'

describe('Test Boostrap Helper functions', () => {
  let helper

  beforeEach(async () => {
    const fbWrap = $('<div>')
    await fbWrap.formBuilder({}).promise
    const formBuilder = fbWrap.data('formBuilder')
    const layoutEngine = new layout({}, true, false)
    helper = new Helpers(formBuilder.formID, layoutEngine, formBuilder )
  })

  test('tryParseColumnInfo', () => {
    expect(helper.tryParseColumnInfo({className: 'col-md-5 row-1 random-class row col'})).toEqual({ 'columnSize': 'col-md-5', 'rowUniqueId': '1', })
    expect(helper.tryParseColumnInfo({className: 'col-md-5 row-unique random-class row col'})).toEqual({ 'columnSize': 'col-md-5', 'rowUniqueId': 'unique', })
    expect(helper.tryParseColumnInfo({className: ''})).toEqual({ })
  })

  test('getDistanceBetweenPoints', () => {
    expect(helper.getDistanceBetweenPoints(1,1,2,2)).toBe(1)
    expect(helper.getDistanceBetweenPoints(-2,3,4,-7)).toBe(11)
    expect(helper.getDistanceBetweenPoints(100,2,35,5)).toBe(65)
  })

  //Returns first matching row-* value
  test('getRowClass', () => {
    expect(helper.getRowClass('')).toBe('')
    expect(helper.getRowClass('row row-4 col-md-2')).toBe('row-4')
    expect(helper.getRowClass('row row-4 row-me col-md-2')).toBe('row-4')
  })

  test('getRowValue', () => {
    expect(helper.getRowValue('row row-4 col-md-2')).toBe('4')
    expect(helper.getRowValue('row row-5 row-me col-md-2')).toBe('5')
    expect(helper.getRowValue('row row-myrow row-me col-md-2')).toBe('myrow')
  })

  test('changeRowClass', () => {
    expect(helper.changeRowClass('row row-4 col-md-2', 'row-6')).toBe('row row-row-6 col-md-2')
  })

  test('getBootstrapColumnValue', () => {
    expect(helper.getBootstrapColumnValue('')).toBe(0)
    expect(helper.getBootstrapColumnValue('no column class')).toBe(0)
    expect(helper.getBootstrapColumnValue('col-md-5 row-1 random-class row col')).toBe(5)
    expect(helper.getBootstrapColumnValue('col-md- row-1 random-class row col')).toBe(0)
  })

  test('getBootstrapColumnPrefix', () => {
    expect(helper.getBootstrapColumnPrefix('')).toBe('')
    expect(helper.getBootstrapColumnPrefix(undefined)).toBe('')
    expect(helper.getBootstrapColumnPrefix('no column class')).toBe('')
    expect(helper.getBootstrapColumnPrefix('col-md-5 row-1 random-class row col')).toBe('col-md')
    expect(helper.getBootstrapColumnPrefix('col-md- row-1 random-class row col')).toBe('')
  })

  test('getBootstrapColumnClass', () => {
    expect(helper.getBootstrapColumnClass('')).toBe('')
    expect(helper.getBootstrapColumnClass(undefined)).toBe('')
    expect(helper.getBootstrapColumnClass('no column class')).toBe('')
    expect(helper.getBootstrapColumnClass('col-md-5 row-1 random-class row col')).toBe('col-md-5')
    expect(helper.getBootstrapColumnClass('col-md- row-1 random-class row col')).toBe('')
  })

  test('changeBootstrapClass', () => {
    expect(helper.changeBootstrapClass('col-md-5 row-1 random-class row col', 7)).toBe('col-md-7 row-1 random-class row col')
  })

})