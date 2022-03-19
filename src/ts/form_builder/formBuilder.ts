// import { defaultOptions } from '../config'
import mi18n from 'mi18n'
import { config } from 'ts/config'
import { FormBuilderEditorHelper } from 'ts/editorHelper'
import events from 'ts/events'
import { formBuilderOptions } from '../../types/formbuilder-types'
import Controls from '../controls'
import { Data } from '../data'
import Dom, { remove } from '../dom'
import Helpers from '../helpers'
import { Layout } from '../layout'
import { forEach, markup, subtract, trimObj } from '../utils'
import { FormBuilderControlHelper } from './controlHelper'
import { GridHelper } from './gridHelper'
import { FormBuilderStageHelper } from './stageHelper'

export class FormBuilderClass {
  rowWrapperClassSelector = '.rowWrapper'
  rowWrapperClass = this.rowWrapperClassSelector.replace('.', '')

  colWrapperClassSelector = '.colWrapper'
  colWrapperClass = this.colWrapperClassSelector.replace('.', '')

  tmpColWrapperClassSelector = '.tempColWrapper'
  tmpColWrapperClass = this.tmpColWrapperClassSelector.replace('.', '')

  tmpRowPlaceholderClassSelector = '.tempRowWrapper'
  tmpRowPlaceholderClass = this.tmpRowPlaceholderClassSelector.replace('.', '')

  invisibleRowPlaceholderClassSelector = '.invisibleRowPlaceholder'
  invisibleRowPlaceholderClass = this.invisibleRowPlaceholderClassSelector.replace('.', '')
  formRows = []
  preserveTempContainers = []
  isMoving = false

  $targetInsertWrapper: JQuery

  insertingNewControl = false
  insertTargetIsRow = false
  insertTargetIsColumn = false

  i18n = mi18n.current
  formID = `frmb-${new Date().getTime()}`
  data: Data
  d: Dom
  h: Helpers
  m = markup
  gh: GridHelper
  controls: Controls

  $stage: JQuery<HTMLElement>
  $cbUL: JQuery<HTMLElement>

  prepFieldVars: ($field: any, isNew?: boolean) => void
  currentEditPanel: any
  sh: FormBuilderStageHelper
  ch: FormBuilderControlHelper
  editorHelper: FormBuilderEditorHelper
  constructor(public opts: formBuilderOptions, public el: HTMLElement) {
    this.initBase(opts)

    opts = this.h.processOptions(opts)
    this.h.editorUI(this.formID, opts)
    this.data.formID = this.formID
    this.data.lastID = `${this.data.formID}-fld-0`

    this.controls = new Controls(opts, this.d)

    this.$stage = $(this.d.stage)
    this.$cbUL = $(this.d.controls)

    this.gh = new GridHelper(opts, this)
    this.ch = new FormBuilderControlHelper(opts, this)

    this.sh = new FormBuilderStageHelper(opts, this)
    this.editorHelper = new FormBuilderEditorHelper(opts, this)

    this.loadFields()
    this.checkLoadOptions()

    this.doneLoading()
  }

  CheckTinyMCETransition(fieldListItem) {
    const isTinyMCE = fieldListItem.find('textarea[type="tinymce"]')
    if (isTinyMCE.length) {
      window.lastFormBuilderCopiedTinyMCE = window.tinymce.get(isTinyMCE.attr('id')).save(null)
    }
  }

  // Parse saved XML template data
  loadFields(formData = null) {
    formData = this.h.getData(formData)
    if (formData && formData.length) {
      formData.forEach(field => {
        this.CaptureRowData(field)
      })

      formData.forEach(fieldData => this.ch.prepFieldVars(trimObj(fieldData)))
      this.d.stage.classList.remove('empty')
    } else if (this.opts.defaultFields && this.opts.defaultFields.length) {
      config.opts.defaultFields.forEach(field => this.CaptureRowData(field))

      this.h.addDefaultFields()
    } else if (!this.opts.prepend && !this.opts.append) {
      this.d.stage.classList.add('empty')
      this.d.stage.dataset.content = mi18n.get('getStarted')
    }

    if (this.nonEditableFields()) {
      this.d.stage.classList.remove('empty')
    }

    this.h.save()
  }

  checkLoadOptions() {
    if (this.opts.disableInjectedStyle) {
      const styleTags = document.getElementsByClassName('formBuilder-injected-style')
      forEach(styleTags, i => remove(styleTags[i]))
    }
  }

  doneLoading() {
    document.dispatchEvent(events.loaded)
    this.setActions()
    this.handleOnRender()
  }

  // Make actions accessible
  setActions() {
    this.actions = {
      getFieldTypes: activeOnly =>
        activeOnly ? subtract(this.controls.getRegistered(), this.opts.disableFields) : this.controls.getRegistered(),
      clearFields: animate => this.h.removeAllFields(this.d.stage),
      showData: this.h.showData.bind(this.h),
      save: minify => {
        const formData = this.h.save(minify)
        const formDataJS = JSON.parse(formData)
        config.opts.onSave(undefined, formDataJS)

        return formDataJS
      },
      addField: (field, index) => {
        this.h.stopIndex = (this.data.formData as []).length ? index : undefined
        this.ch.prepFieldVars(field)
      },
      removeField: this.h.removeField.bind(this.h),
      getData: this.h.getFormData.bind(this.h),
      setData: formData => {
        this.h.stopIndex = undefined
        this.h.removeAllFields(this.d.stage)
        this.loadFields(formData)
      },
      setLang: locale => {
        mi18n.setCurrent.call(mi18n, locale).then(() => {
          this.d.stage.dataset.content = mi18n.get('getStarted')
          this.controls.init()
          this.d.empty(this.d.formActions)
          this.h.formActionButtons().forEach(button => this.d.formActions.appendChild(button))
        })
      },
      showDialog: this.h.dialog.bind(this.h),
      toggleFieldEdit: fieldId => {
        const fieldIds = Array.isArray(fieldId) ? fieldId : [fieldId]
        fieldIds.forEach(fId => {
          if (!['number', 'string'].includes(typeof fId)) {
            return
          }
          if (typeof fId === 'number') {
            fId = this.d.stage.children[fId].id
          } else if (!/^frmb-/.test(fId)) {
            fId = this.d.stage.querySelector(fId).id
          }
          this.h.toggleEdit(fId)
        })
      },
      toggleAllFieldEdit: () => {
        forEach(this.d.stage.children, index => {
          this.h.toggleEdit(this.d.stage.children[index].id)
        })
      },
      closeAllFieldEdit: this.h.closeAllEdit.bind(this.h),
      getCurrentFieldId: () => {
        return this.data.lastID
      },
    }
  }

  handleOnRender() {
    // set min-height on stage onRender
    this.d.onRender(this.d.controls, () => {
      // Ensure style has loaded
      const onRenderTimeout = setTimeout(() => {
        this.d.stage.style.minHeight = `${this.d.controls.clientHeight}px`
        // If option set, controls will remain in view in editor
        if (this.opts.stickyControls.enable) {
          this.h.stickyControls()
        }

        this.sh.checkSetupBlankStage()

        clearTimeout(onRenderTimeout)
      }, 0)
    })
  }

  //Capture information of all the row- values so generating new values will not ever clash with existing data
  private CaptureRowData(field) {
    const gridRowValue = this.h.getRowValue(field.className)
    if (gridRowValue && !this.formRows.includes(gridRowValue)) {
      this.formRows.push(gridRowValue)
    }
  }

  // Add append and prepend options if necessary
  private nonEditableFields() {
    const cancelArray = []
    const disabledField = type =>
      this.m('li', this.opts[type], {
        className: `disabled-field form-${type}`,
      })

    if (this.opts.prepend && !$('.disabled-field.form-prepend', this.d.stage).length) {
      cancelArray.push(true)
      this.$stage.prepend(disabledField('prepend'))
    }

    if (this.opts.append && !$('.disabled-field.form-.append', this.d.stage).length) {
      cancelArray.push(true)
      this.$stage.append(disabledField('append'))
    }

    this.h.disabledTT(this.d.stage)
    return cancelArray.some(elem => elem === true)
  }

  actions: {
    getFieldTypes: (activeOnly: any) => any
    clearFields: (animate: any) => boolean
    showData: any
    save: (minify: any) => any
    addField: (field: any, index: any) => void
    removeField: any
    getData: any
    setData: (formData: any) => void
    setLang: (locale: any) => void
    showDialog: any
    toggleFieldEdit: (fieldId: any) => void
    toggleAllFieldEdit: () => void
    closeAllFieldEdit: any
    getCurrentFieldId: () => string
  }

  private initBase(opts: formBuilderOptions) {
    this.data = new Data(this.formID)
    this.d = new Dom(this.formID)

    // prepare a new layout object with appropriate templates
    if (!opts.layout) {
      opts.layout = Layout
    }
    const layoutEngine = new opts.layout(opts.layoutTemplates, true)
    this.h = new Helpers(this.formID, layoutEngine, this)
  }
}

export default {}
