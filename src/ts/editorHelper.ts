import { formBuilderOptions } from 'types/formbuilder-types'
import { FormBuilderClass } from './form_builder/formBuilder'

export class FormBuilderEditorHelper {
  constructor(public opts: formBuilderOptions, public fb: FormBuilderClass) {
    this.init()
  }

  init() {
    const $editorWrap = $(this.fb.d.editorWrap)

    $('<div class="snackbar">').appendTo($editorWrap)

    const cbWrap = this.fb.m('div', this.fb.d.controls, {
      id: `${this.fb.data.formID}-cb-wrap`,
      className: `cb-wrap pull-${this.fb.opts.controlPosition}`,
    })

    if (this.fb.opts.showActionButtons) {
      cbWrap.appendChild(this.fb.d.formActions)
    }

    this.fb.gh.gridModeHelp = this.fb.m('div', '', {
      id: `${this.fb.data.formID}-gridModeHelp`,
      className: 'grid-mode-help',
    })

    cbWrap.appendChild(this.fb.gh.gridModeHelp)

    $editorWrap.append(this.fb.d.stage, cbWrap)

    //@ts-ignore
    if (this.fb.el.type !== 'textarea') {
      $(this.fb.el).append($editorWrap)
    } else {
      // formBuilder no longer uses textArea for element
      $(this.fb.el).replaceWith($editorWrap)
    }
  }
}
