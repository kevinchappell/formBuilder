import mi18n from 'mi18n'
import { config } from 'ts/form_builder/config'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { hyphenCase } from 'ts/shared/utils'
import { selectFieldOptions } from './select'

/**
 * Add data for field with options [select, checkbox-group, radio-group]
 *
 * @param  {Object} fieldData
 * @return {String} field options markup
 */
export const fieldOptions = (fieldData, fb: FormBuilder) => {
  const { type, values } = fieldData
  let fieldValues
  const optionActions = [fb.m('a', mi18n.get('addOption'), { className: 'add add-opt' })]
  const fieldOptions = [fb.m('label', mi18n.get('selectOptions'), { className: 'false-label' })]
  const isMultiple = fieldData.multiple || type === 'checkbox-group'
  const optionDataTemplate = count => {
    const label = mi18n.get('optionCount', count)
    return {
      selected: false,
      label,
      value: hyphenCase(label),
    }
  }

  if (!values || !values.length) {
    let defaultOptCount = [1, 2, 3]
    if (['checkbox-group', 'checkbox'].includes(type)) {
      defaultOptCount = [1]
    }
    fieldValues = defaultOptCount.map(optionDataTemplate)

    const firstOption = fieldValues[0]
    if (firstOption.hasOwnProperty('selected') && type !== 'radio-group') {
      firstOption.selected = true
    }
  } else {
    // ensure option data is has all required keys
    fieldValues = values.map(option => Object.assign({}, { selected: false }, option))
  }

  const optionActionsWrap = fb.m('div', optionActions, { className: 'option-actions' })
  const options = fb.m(
    'ol',
    fieldValues.map((option, index) => {
      const optionData = config.opts.onAddOption(option, { type, index, isMultiple })
      return selectFieldOptions(optionData, isMultiple, fb)
    }),
    {
      className: 'sortable-options',
    },
  )
  const optionsWrap = fb.m('div', [options, optionActionsWrap], { className: 'sortable-options-wrap' })

  fieldOptions.push(optionsWrap)

  return fb.m('div', fieldOptions, { className: 'form-group field-options' }).outerHTML
}
