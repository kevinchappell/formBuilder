import { FormBuilder } from 'ts/form_builder/formBuilder'
import { fbControlType, Field, FormBuilderOptions } from '../../types/formbuilder-types'
import events from '../shared/events'
import { hyphenCase, nameAttr } from '../shared/utils'
import { FormBuilderControlFieldAppender } from './fieldAppender'

export class FormBuilderControlHelper {
  constructor(public opts: FormBuilderOptions, public fb: FormBuilder) {}

  processControl(control: JQuery) {
    if (this.IsInputSetControl(control)) {
      this.processInputSetControl(control)
    } else {
      this.prepFieldVars(control, true)
    }
  }

  private IsInputSetControl(control: JQuery) {
    return control[0].classList.contains('input-set-control')
  }

  // builds the standard formbuilder datastructure for a field definition
  prepFieldVars($field: JQuery, isNew = false) {
    let field: Field = {}

    if ($field instanceof jQuery) {
      field.type = $field[0].dataset.type as fbControlType
      if (field.type) {
        const custom = this.fb.controlPanel.custom.lookup(field.type)

        if (custom) {
          field = Object.assign({}, custom)
        } else {
          const controlClass = this.fb.controlPanel.getClass(field.type)
          field.label = controlClass.label(field.type)
        }
      } else {
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
      field = Object.assign({}, $field) as Field
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

    //Get next ID before appending
    this.fb.lastID = this.fb.h.incrementId(this.fb.lastID)

    this.fb.opts.onAddField(this.fb.lastID, field)
    new FormBuilderControlFieldAppender(this.opts, this.fb, field, isNew).appendNewField()
    this.fb.opts.onAddFieldAfter(this.fb.lastID, field)

    this.fb.stage.classList.remove('empty')
  }

  private processInputSetControl(control: JQuery) {
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
  }
}
