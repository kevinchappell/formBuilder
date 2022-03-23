import { FormBuilderClass } from 'ts/form_builder/formBuilder'
import { Field, formBuilderOptions } from '../../types/formbuilder-types'
import events from '../events'
import { hyphenCase, nameAttr } from '../utils'
import { FormBuilderControlFieldHelper } from './fieldHelper'

export class FormBuilderControlHelper {
  fieldHelper: FormBuilderControlFieldHelper
  constructor(public opts: formBuilderOptions, public fb: FormBuilderClass) {
    this.fieldHelper = new FormBuilderControlFieldHelper(opts, fb)
  }

  processControl(control) {
    if (control[0].classList.contains('input-set-control')) {
      const inputSets = []
      const inputSet = this.fb.opts.inputSets.find(set => hyphenCase(set.name || set.label) === control[0].dataset.type)
      if (inputSet && inputSet.showHeader) {
        const header = {
          type: 'header',
          subtype: 'h2',
          id: inputSet.name,
          label: inputSet.label,
        }
        inputSets.push(header)
      }

      inputSets.push(...inputSet.fields)
      inputSets.forEach(field => {
        this.prepFieldVars(field, true)
        if (this.fb.h.stopIndex || this.fb.h.stopIndex === 0) {
          this.fb.h.stopIndex++
        }
      })
    } else {
      this.prepFieldVars(control, true)
    }
  }

  // builds the standard formbuilder datastructure for a field definition
  prepFieldVars($field, isNew = false) {
    let field: Field = {}
    if ($field instanceof jQuery) {
      // get the default type etc & label for this field
      field.type = $field[0].dataset.type
      if (field.type) {
        // check for a custom type
        const custom = this.fb.controls.custom.lookup(field.type)
        if (custom) {
          field = Object.assign({}, custom)
        } else {
          const controlClass = this.fb.controls.getClass(field.type)
          field.label = controlClass.label(field.type)
        }

        // @todo: any other attrs ever set in aFields? value or selected?
      } else {
        // is dataType XML
        const attrs = $field[0].attributes
        if (!isNew) {
          field.values = ($field as JQuery).children().map((index, elem) => {
            return {
              label: $(elem).text(),
              value: $(elem).attr('value'),
              selected: Boolean($(elem).attr('selected')),
            }
          })
        }

        for (let i = attrs.length - 1; i >= 0; i--) {
          field[attrs[i].name] = attrs[i].value
        }
      }
    } else {
      field = Object.assign({}, $field)
    }

    if (!field.name) {
      field.name = nameAttr(field)
    }

    if (isNew && ['text', 'number', 'file', 'date', 'select', 'textarea', 'autocomplete'].includes(field.type)) {
      field.className = field.className || 'form-control'
    }

    const match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className)
    if (match) {
      field.style = match[1]
    }

    if (isNew) {
      const eventTimeout = setTimeout(() => {
        document.dispatchEvent(events.fieldAdded)
        clearTimeout(eventTimeout)
      }, 10)
    }

    this.fb.opts.onAddField(this.fb.data.lastID, field)
    this.fieldHelper.appendNewField(field, isNew)
    this.fb.opts.onAddFieldAfter(this.fb.data.lastID, field)

    this.fb.d.stage.classList.remove('empty')
  }
}
