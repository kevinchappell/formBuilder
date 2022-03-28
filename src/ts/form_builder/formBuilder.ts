// import { defaultOptions } from '../config'
import mi18n from 'mi18n'
import { config } from 'ts/form_builder/config'
import { FormBuilderEditorHelper } from 'ts/form_builder/editorHelper'
import { defaultFieldSelector, gridClassNames } from 'ts/shared/constants'
import events from 'ts/shared/events'
import '../../sass/form-builder.scss'
import {
  ActionButton,
  fbControlType,
  FormBuilderOptions,
  FormBuilderPublicAPIActions,
} from '../../types/formbuilder-types'
import { Layout } from '../shared/layout'
import {
  empty,
  forEach,
  generateSelectorClassNames,
  markup,
  mobileClass,
  remove,
  subtract,
  trimObj,
} from '../shared/utils'
import ControlPanel from './control-panel'
import { FormBuilderControlHelper } from './controlHelper'
import { GridHelper } from './gridHelper'
import { Helpers } from './helpers'
import { FormBuilderStageHelper } from './stageHelper'

export class FormBuilder {
  rowWrapperClassSelector
  rowWrapperClass

  colWrapperClassSelector
  colWrapperClass

  tmpColWrapperClassSelector
  tmpColWrapperClass

  tmpRowPlaceholderClassSelector
  tmpRowPlaceholderClass

  invisibleRowPlaceholderClassSelector
  invisibleRowPlaceholderClass

  fieldSelector = defaultFieldSelector

  formRows = []
  preserveTempContainers = []
  isMoving = false

  $targetInsertWrapper: JQuery

  insertingNewControl = false
  insertTargetIsRow = false
  insertTargetIsColumn = false

  i18n = mi18n.current
  formID = `frmb-${new Date().getTime()}`
  lastID: string
  formData: any

  stage: HTMLElement
  $stage: JQuery<HTMLElement>
  control: HTMLElement
  $control: JQuery<HTMLElement>
  editorWrap: HTMLElement
  formActions: HTMLElement

  h: Helpers
  m = markup
  gh: GridHelper
  controlPanel: ControlPanel

  prepFieldVars: ($field: any, isNew?: boolean) => void
  currentEditPanel: HTMLElement
  sh: FormBuilderStageHelper
  ch: FormBuilderControlHelper
  editorHelper: FormBuilderEditorHelper

  actions: FormBuilderPublicAPIActions
  constructor(public opts: FormBuilderOptions, public el: HTMLElement) {
    this.initBase(opts)

    this.controlPanel = new ControlPanel(opts, this)
    this.$stage = $(this.stage)
    this.$control = $(this.control)

    this.loadHelpers(opts)

    this.loadFields()
    this.checkLoadOptions()

    this.doneLoading()
  }

  private initGridClasses() {
    Object.assign(this, gridClassNames)
    Object.assign(this, generateSelectorClassNames(gridClassNames))
  }

  private loadHelpers(opts: FormBuilderOptions) {
    this.gh = new GridHelper(opts, this)
    this.ch = new FormBuilderControlHelper(opts, this)
    this.sh = new FormBuilderStageHelper(opts, this)
    this.editorHelper = new FormBuilderEditorHelper(opts, this)
  }

  // Parse saved XML template data
  loadFields(formData = null) {
    formData = this.h.getData(formData)
    if (formData && formData.length) {
      formData.forEach(field => {
        this.CaptureRowData(field)
      })

      formData.forEach(fieldData => this.ch.prepFieldVars(trimObj(fieldData)))
      this.stage.classList.remove('empty')
    } else if (this.opts.defaultFields && this.opts.defaultFields.length) {
      config.opts.defaultFields.forEach(field => this.CaptureRowData(field))

      this.h.addDefaultFields()
    } else if (!this.opts.prepend && !this.opts.append) {
      this.stage.classList.add('empty')
      this.stage.dataset.content = mi18n.get('getStarted')
    }

    if (this.nonEditableFields()) {
      this.stage.classList.remove('empty')
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
    this.setPublicActions()
    this.handleOnRender()
  }

  setPublicActions() {
    this.actions = {
      getFieldTypes: activeOnly =>
        activeOnly
          ? subtract(this.controlPanel.getRegistered(), this.opts.disableFields)
          : this.controlPanel.getRegistered(),
      clearFields: () => this.h.removeAllFields(this.stage),
      showData: this.h.showData.bind(this.h),
      save: minify => {
        const formData = this.h.save(minify)
        const formDataJS = JSON.parse(formData)
        config.opts.onSave(undefined, formDataJS)

        return formDataJS
      },
      addField: (field, index) => {
        this.h.stopIndex = (this.formData as []).length ? index : undefined
        this.ch.prepFieldVars(field)
      },
      removeField: fieldID => this.h.removeField(fieldID),
      getData: this.h.getFormData.bind(this.h),
      setData: formData => {
        this.h.stopIndex = undefined
        this.h.removeAllFields(this.stage)
        this.loadFields(formData)
      },
      setLang: locale => {
        mi18n.setCurrent.call(mi18n, locale).then(() => {
          this.stage.dataset.content = mi18n.get('getStarted')
          this.controlPanel.init()
          empty(this.formActions)
          this.h.formActionButtons().forEach(button => this.formActions.appendChild(button))
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
            fId = this.stage.children[fId].id
          } else if (!/^frmb-/.test(fId)) {
            fId = this.stage.querySelector(fId).id
          }
          this.h.toggleEdit(fId)
        })
      },
      toggleAllFieldEdit: () => {
        forEach(this.stage.children, index => {
          this.h.toggleEdit(this.stage.children[index].id)
        })
      },
      closeAllFieldEdit: this.h.closeAllEdit.bind(this.h),
      getCurrentFieldId: () => {
        return this.lastID
      },
    }
  }

  handleOnRender() {
    // set min-height on stage onRender
    this.h.onRender(this.control, () => {
      // Ensure style has loaded
      const onRenderTimeout = setTimeout(() => {
        this.stage.style.minHeight = `${this.control.clientHeight}px`
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

    if (this.opts.prepend && !$('.disabled-field.form-prepend', this.stage).length) {
      cancelArray.push(true)
      this.$stage.prepend(disabledField('prepend'))
    }

    if (this.opts.append && !$('.disabled-field.form-.append', this.stage).length) {
      cancelArray.push(true)
      this.$stage.append(disabledField('append'))
    }

    this.h.disabledTT(this.stage)

    return cancelArray.some(elem => elem === true)
  }

  private initBase(opts: FormBuilderOptions) {
    this.initGridClasses()

    this.fieldSelector = opts.enableEnhancedBootstrapGrid ? this.rowWrapperClassSelector : defaultFieldSelector

    // prepare a new layout object with appropriate templates
    if (!opts.layout) {
      opts.layout = Layout
    }

    this.h = new Helpers(opts, this)

    opts = this.processActionButtons(opts)
    this.opts = opts

    this.editorUI()

    this.lastID = `${this.formID}-fld-0`
  }

  /**
   * Generate stage and controls dom elements
   * @param  {String} formID [description]
   */
  private editorUI() {
    this.editorWrap = this.m('div', null, {
      id: `${this.formID}-form-wrap`,
      className: `form-wrap form-builder ${mobileClass()}`,
    })

    const id = this.formID
    this.stage = this.m('ul', null, {
      id,
      className: `frmb stage-wrap pull-${this.opts.controlPosition == 'left' ? 'right' : 'left'}`,
    })

    // Create container for controls
    this.control = this.m('ul', null, {
      id: `${this.formID}-control-box`,
      className: 'frmb-control',
    })

    const buttons = this.h.formActionButtons()
    this.formActions = this.m('div', buttons, {
      className: 'form-actions btn-group',
    })
  }

  private processActionButtons(options: FormBuilderOptions) {
    const { actionButtons, replaceFields, ...opts } = options

    let mergedActionButtons: ActionButton[] = [
      {
        type: 'button',
        id: 'clear',
        className: 'clear-all btn btn-danger',
        events: {
          click: e => this.h.confirmRemoveAll(e),
        },
      },
      {
        type: 'button',
        label: 'viewJSON',
        id: 'data',
        className: 'btn btn-default get-data',
        events: {
          click: () => this.h.showData(),
        },
      },
      {
        type: 'button',
        id: 'save',
        className: 'btn btn-primary save-template',
        events: {
          click: evt => {
            this.h.save()
            config.opts.onSave(evt, this.h.fb.formData)
          },
        },
      },
    ]

    mergedActionButtons = [...mergedActionButtons, ...actionButtons]

    opts.fields = opts.fields.concat(replaceFields)
    opts.disableFields = [...opts.disableFields, ...(replaceFields.map(({ type }) => type && type) as fbControlType[])]

    if (opts.dataType === 'xml') {
      // html labels are not available using xml dataType
      opts.disableHTMLLabels = true
    }
    config.opts = Object.assign({}, { actionButtons: mergedActionButtons }, opts)
    return config.opts
  }
}

export default {}
