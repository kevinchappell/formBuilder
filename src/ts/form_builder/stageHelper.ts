import fontConfig from 'fonts/config.json'
import throttle from 'lodash/throttle'
import mi18n from 'mi18n'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { defaultTimeout } from 'ts/shared/constants'
import { addEventListeners, closest, forceNumber, forEach, parsedHtml, safename } from 'ts/shared/utils'
import { CustomDoubleClickEvent, CustomHandledEvent, CustomTouchHandledEvent } from 'types/helper-types'
import { fbControlType, FormBuilderOptions } from '../../types/formbuilder-types'
import { selectFieldOptions } from './attributes/field_attributes/select'
import { config } from './config'

export class FormBuilderStageHelper {
  cloneControls: JQuery
  doCancel = false
  from: any

  constructor(public opts: FormBuilderOptions, public fb: FormBuilder) {
    this.setupStage()
    this.registerEventHandlers()
  }

  setupStage() {
    this.fb.$stage.sortable({
      cursor: 'move',
      opacity: 0.9,
      revert: 150,
      beforeStop: (evt, ui) => this.beforeStop(evt, ui),
      start: (evt, ui) => this.startMoving(evt, ui),
      stop: (evt, ui) => this.stopMoving(evt, ui),
      cancel: ['input', 'select', 'textarea', '.disabled-field', '.form-elements', '.btn', 'button', '.is-locked'].join(
        ', ',
      ),
      placeholder: 'frmb-placeholder',
    })

    if (!this.fb.opts.allowStageSort) {
      this.fb.$stage.sortable('disable')
    }

    if (!this.fb.gh.enhancedBootstrapEnabled()) {
      this.fb.$control.sortable({
        helper: 'clone',
        opacity: 0.9,
        connectWith: this.fb.$stage,
        cancel: '.formbuilder-separator',
        cursor: 'move',
        scroll: false,
        placeholder: 'ui-state-highlight',
        start: (evt, ui) => this.startMoving(evt, ui),
        stop: (evt, ui) => this.stopMoving(evt, ui),
        revert: 150,
        beforeStop: (evt, ui) => this.beforeStop(evt, ui),
        distance: 3,
        update: (event, ui) => {
          if (this.doCancel) {
            return false
          }

          if (ui.item.parent()[0] === this.fb.stage) {
            this.doCancel = true
            this.fb.ch.processControl(ui.item)
          } else {
            this.fb.h.setFieldOrder(this.fb.$control)
            this.doCancel = !this.fb.opts.sortableControls
          }
        },
      })
    } else {
      // ControlBox with different fields
      this.fb.$control.sortable({
        opacity: 0.9,
        connectWith: this.fb.rowWrapperClassSelector,
        cancel: '.formbuilder-separator',
        cursor: 'move',
        scroll: false,
        start: (evt, ui) => {
          this.startMoving(evt, ui)
          this.fb.isMoving = true
        },
        stop: (evt, ui) => {
          this.stopMoving(evt, ui)
          this.fb.isMoving = false
          this.fb.sh.cleanupTempPlaceholders()
        },
        revert: 150,
        beforeStop: (evt, ui) => {
          this.beforeStop(evt, ui)
        },
        distance: 3,
        update: event => {
          this.fb.isMoving = false
          if (this.doCancel) {
            return false
          }

          //If started to enter a control into row but then moved it back, hide the placeholders again
          if ($(event.target).attr('id') == this.fb.$control.attr('id')) {
            this.fb.sh.HideInvisibleRowPlaceholders()
          }
          this.fb.h.setFieldOrder(this.fb.$control)
          this.doCancel = !this.fb.opts.sortableControls
        },
      })
    }
  }

  registerEventHandlers() {
    const previewSelectors = ['.form-elements input', '.form-elements select', '.form-elements textarea'].join(', ')

    //Save field on change
    this.fb.$stage.on(
      'change blur keyup click',
      previewSelectors,
      throttle(this.saveAndUpdate, defaultTimeout, { leading: false }),
    )

    // delete options
    this.fb.$stage.on('click touchstart', '.remove', e => {
      const $field = $(e.target).parents('.form-field:eq(0)')
      const field = $field[0]
      const type = field.getAttribute('type')
      const $option = $(e.target.parentElement)
      e.preventDefault()
      const options = field.querySelector('.sortable-options')
      const optionsCount = options.childNodes.length

      if (optionsCount <= 2 && !type.includes('checkbox')) {
        this.fb.opts.notify.error(`Error: ${mi18n.get('minOptionMessage')}`)
      } else {
        $option.slideUp('250', () => {
          $option.remove()
          this.UpdatePreviewAndSave($field)
        })
      }
    })

    // Copy field
    this.fb.$stage.on('click touchstart', `.${fontConfig.css_prefix_text}copy`, evt => {
      evt.preventDefault()
      const currentItem = $(evt.target).parent().parent('li')
      const $clone = this.cloneItem(currentItem)
      this.prepareCloneWrappers($clone, currentItem)
      this.UpdatePreviewAndSave($clone)

      this.fb.h.tmpCleanPrevHolder($clone.find('.prev-holder'))

      if (this.fb.opts.editOnAdd) {
        this.fb.h.closeField(this.fb.lastID, false)
      }
    })

    // Update button style selection
    this.fb.$stage.on('click', '.style-wrap button', e => {
      const $button = $(e.target)
      const $attrsWrap = $button.closest('.form-elements')
      const styleVal = $button.val()
      const $btnStyle = $('.btn-style', $attrsWrap)
      $btnStyle.val(styleVal)
      $button.siblings('.btn').removeClass('selected')
      $button.addClass('selected')
      this.UpdatePreviewAndSave($btnStyle.closest('.form-field'))
    })

    // Attach a callback to add new options
    this.fb.$stage.on('click', '.add-opt', e => {
      e.preventDefault()
      const type = $(e.target).closest('.form-field').attr('type') as fbControlType
      const $optionWrap = $(e.target).closest('.field-options')
      const $multiple = $('[name="multiple"]', $optionWrap)
      const $firstOption = $('.option-selected:eq(0)', $optionWrap)
      let isMultiple = false

      if ($multiple.length) {
        isMultiple = $multiple.prop('checked')
      } else {
        isMultiple = $firstOption.attr('type') === 'checkbox'
      }

      const optionTemplate = { selected: false, label: '', value: '' }
      const $sortableOptions = $('.sortable-options', $optionWrap)
      const optionData = config.opts.onAddOption(optionTemplate, {
        type,
        index: $sortableOptions.children().length,
        isMultiple,
      })
      $sortableOptions.append(selectFieldOptions(optionData, isMultiple, this.fb))
    })

    $(this.fb.control).on('click', 'li', ({ target }) => {
      //Prevent duplicate add when click & dragging control to specific spot
      if (this.fb.isMoving) {
        return
      }

      //Remove initial placeholder if simply clicking to add field into blank stage
      if (!this.stageHasFields()) {
        this.fb.$stage.find(this.fb.tmpRowPlaceholderClassSelector).eq(0).remove()
      }

      const $control = $(target).closest('li')
      this.fb.h.stopIndex = undefined
      this.fb.ch.processControl($control)
      this.fb.h.save.call(this.fb.h)
    })

    this.fb.$stage.on('click touchstart', '.btnAddControl', evt => {
      const btn = $(evt.currentTarget)

      this.cloneControls = this.fb.$control.clone()

      this.cloneControls.hover(
        function () {
          return
        },
        () => {
          this.cloneControls.remove()
        },
      )

      this.cloneControls.on('click', 'li', ({ target }) => {
        this.fb.insertTargetIsColumn = true
        this.fb.insertingNewControl = true
        this.fb.$targetInsertWrapper = btn

        const $control = $(target).closest('li')
        this.fb.h.stopIndex = undefined
        this.fb.ch.processControl($control)
        this.fb.h.save.call(this.fb.h)

        this.cloneControls.remove()
      })

      this.fb.$stage.append(this.cloneControls)

      if (btn.index() == 0) {
        this.cloneControls.css({
          position: 'fixed',
          left: btn.offset().left,
          top: btn.offset().top - $(window).scrollTop(),
        })
      } else {
        this.cloneControls.css({
          position: 'fixed',
          left: btn.offset().left - 80,
          top: btn.offset().top - $(window).scrollTop(),
        })
      }

      //Ensure the bottom of the menu is visible when close to the bottom of page
      const bottomOfClone = this.cloneControls.offset().top + this.cloneControls.outerHeight()
      const bottomOfScreen = $(window).scrollTop() + $(window).innerHeight()
      if (bottomOfClone > bottomOfScreen) {
        this.cloneControls.css({ top: parseInt(this.cloneControls.css('top')) - (bottomOfClone - bottomOfScreen) })
      }
    })

    this.fb.$control.on('mouseenter', () => {
      if (this.fb.sh.stageHasFields()) {
        this.fb.$stage.children(this.fb.tmpRowPlaceholderClassSelector).addClass(this.fb.invisibleRowPlaceholderClass)
      }
    })

    // touch focus
    this.fb.$stage.on('touchstart', 'input', (e: CustomTouchHandledEvent) => {
      const $input = $(this)
      if (e.handled !== true) {
        if ($input.attr('type') === 'checkbox') {
          $input.trigger('click')
        } else {
          $input.focus()
          const fieldVal = $input.val()
          $input.val(fieldVal)
        }
      } else {
        return false
      }
    })

    // toggle fields
    this.fb.$stage.on('click touchstart', '.toggle-form, .close-field', (e: CustomHandledEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (e.handled !== true) {
        const targetID = $(e.target).parents('.form-field:eq(0)').attr('id')
        this.fb.h.toggleEdit(targetID)
        e.handled = true
      } else {
        return false
      }
    })

    this.fb.$stage.on('dblclick', 'li.form-field', (e: CustomDoubleClickEvent) => {
      if (
        ['select', 'input', 'label'].includes(e.target.tagName.toLowerCase()) ||
        e.target.contentEditable === 'true'
      ) {
        return
      }
      e.stopPropagation()
      e.preventDefault()
      if (e.handled !== true) {
        const targetID =
          e.target.tagName == 'li' ? $(e.target).attr('id') : $(e.target).closest('li.form-field').attr('id')
        this.fb.h.toggleEdit(targetID)
        e.handled = true
      }
    })

    this.fb.$stage.on('change', '[name="subtype"]', e => {
      const $field = $(e.target).closest('li.form-field')
      const $valWrap = $('.value-wrap', $field)
      $valWrap.toggle(e.target.value !== 'quill')
    })

    const stageOnChangeSelectors = ['.prev-holder input', '.prev-holder select', '.prev-holder textarea']
    this.fb.$stage.on('change', stageOnChangeSelectors.join(', '), e => {
      let prevOptions
      if (e.target.classList.contains('other-option')) {
        return
      }
      const field = closest(e.target, '.form-field')
      const optionTypes = ['select', 'checkbox-group', 'radio-group']
      if (optionTypes.includes(field.type)) {
        const options = field.getElementsByClassName('option-value')
        if (field.type === 'select') {
          forEach(options, i => {
            const selectedOption = options[i].parentElement.childNodes[0]
            selectedOption.checked = e.target.value === options[i].value
          })
        } else {
          prevOptions = document.getElementsByName(e.target.name)
          forEach(prevOptions, i => {
            const selectedOption = options[i].parentElement.childNodes[0]
            selectedOption.checked = prevOptions[i].checked
          })
        }
      } else {
        const fieldVal = document.getElementById(`value-${field.id}`) as HTMLInputElement
        if (fieldVal) {
          fieldVal.value = e.target.value
        }
      }

      this.fb.h.save.call(this.fb.h)
    })

    // update preview to label
    addEventListeners(this.fb.stage, 'keyup change', ({ target }) => {
      if (!target.classList.contains('fld-label')) return
      const value = target.value || target.innerHTML
      const label = closest(target, '.form-field').querySelector('.field-label')
      label.innerHTML = parsedHtml(value)
    })

    // remove error styling when users tries to correct mistake
    this.fb.$stage.on('keyup', 'input.error', ({ target }) => $(target).removeClass('error'))

    // update preview for description
    this.fb.$stage.on('keyup', 'input[name="description"]', e => {
      const $field = $(e.target).parents('.form-field:eq(0)')
      const closestToolTip = $('.tooltip-element', $field)
      const ttVal = $(e.target).val() as string
      if (ttVal !== '') {
        if (!closestToolTip.length) {
          const tt = `<span class="tooltip-element" tooltip="${ttVal}">?</span>`
          $('.field-label', $field).after(tt)
        } else {
          closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block')
        }
      } else {
        if (closestToolTip.length) {
          closestToolTip.css('display', 'none')
        }
      }
    })

    /**
     * Toggle multiple select options
     * @param  {Object} e click event
     * @return {String} newType
     */
    this.fb.$stage.on('change', '.fld-multiple', e => {
      const newType = e.target.checked ? 'checkbox' : 'radio'
      const $options = $('.option-selected', $(e.target).closest('.form-elements'))
      //@ts-ignore
      $options.each(i => ($options[i].type = newType))
      return newType
    })

    // format name attribute
    this.fb.$stage.on('blur', 'input.fld-name', e => {
      e.target.value = safename(e.target.value)
      if (e.target.value === '') {
        $(e.target).addClass('field-error').attr('placeholder', mi18n.get('cannotBeEmpty'))
      } else {
        $(e.target).removeClass('field-error')
      }
    })

    this.fb.$stage.on('blur', 'input.fld-maxlength', e => {
      e.target.value = forceNumber(e.target.value)
    })

    // Delete field
    this.fb.$stage.on('click touchstart', '.delete-confirm', e => {
      e.preventDefault()

      const buttonPosition = e.target.getBoundingClientRect()
      const bodyRect = document.body.getBoundingClientRect()
      const coords = {
        pageX: buttonPosition.left + buttonPosition.width / 2,
        pageY: buttonPosition.top - bodyRect.top - 12,
      }

      const deleteID = $(e.target).parents('.form-field:eq(0)').attr('id')
      const $field = $(document.getElementById(deleteID))

      document.addEventListener(
        'modalClosed',
        function () {
          $field.removeClass('deleting')
        },
        false,
      )

      // Check if user is sure they want to remove the field
      if (this.fb.opts.fieldRemoveWarn) {
        const warnH3 = this.fb.m('h3', mi18n.get('warning'))
        const warnMessage = this.fb.m('p', mi18n.get('fieldRemoveWarning'))
        this.fb.h.confirm([warnH3, warnMessage], () => this.fb.h.removeField(deleteID), coords)
        $field.addClass('deleting')
      } else {
        this.fb.h.removeField(deleteID)
      }
    })

    $(document).on('fieldOpened', (event, data) => {
      const rowWrapper = $(`#${data.rowWrapperID}`)
      if (rowWrapper.length) {
        this.fb.sh.removeColumnInsertButtons(rowWrapper)
      }
    })

    // Attach a callback to toggle required asterisk
    this.fb.$stage.on('click', '.fld-required', e => {
      $(e.target).closest('.form-field').find('.required-asterisk').toggle()
    })

    // Attach a callback to toggle roles visibility
    this.fb.$stage.on('click', 'input.fld-access', e => {
      const roles = $(e.target).closest('.form-field').find('.available-roles')
      const enableRolesCB = $(e.target)
      roles.slideToggle(250, () => {
        if (!enableRolesCB.is(':checked')) {
          $('input[type=checkbox]', roles).removeAttr('checked')
        }
      })
    })

    this.fb.$stage.on('mouseover mouseout', '.remove, .del-button', e =>
      $(e.target).closest('li').toggleClass('delete'),
    )
  }

  stageHasFields() {
    return this.fb.$stage.find('li').length > 0
  }

  prepareCloneWrappers($clone, currentItem) {
    if (!this.fb.gh.enhancedBootstrapEnabled()) {
      $clone.insertAfter(currentItem)
      return
    }

    const inputClassElement = $(`#className-${currentItem.attr('id')}`)
    const columnData = this.fb.gh.prepareFieldRow({})

    const rowWrapper = this.fb.m('div', null, {
      id: `${$clone.attr('id')}-row`,
      className: `row row-${columnData.rowNumber} ${this.fb.rowWrapperClass}`,
    })

    const colWrapper = this.fb.m('div', null, {
      id: `${$clone.attr('id')}-cont`,
      className: `${this.fb.h.getBootstrapColumnClass(inputClassElement.val())} ${this.fb.colWrapperClass}`,
    })
    $(colWrapper).appendTo(rowWrapper)

    let insertAfterElement
    if (currentItem.parent().is('div')) {
      insertAfterElement = currentItem.closest(this.fb.rowWrapperClassSelector)
    } else if (currentItem.parent().is('ul')) {
      insertAfterElement = currentItem
    }

    $(rowWrapper).insertAfter(insertAfterElement)
    $clone.appendTo(colWrapper)

    this.setupSortableRowWrapper(rowWrapper)
    this.syncFieldWithNewRow($clone.attr('id'))
  }

  removeColumnInsertButtons(rowWrapper) {
    rowWrapper.find(this.fb.tmpColWrapperClassSelector).remove()
    rowWrapper.find(this.fb.colWrapperClassSelector).removeClass('colHoverTempStyle')
  }

  HideInvisibleRowPlaceholders() {
    this.fb.$stage.find(this.fb.tmpRowPlaceholderClassSelector).addClass(this.fb.invisibleRowPlaceholderClass)
  }

  syncFieldWithNewRow(fieldID) {
    if (fieldID) {
      const inputClassElement = $(`#className-${fieldID.replace('-cont', '')}`)
      if (inputClassElement.val()) {
        const oldRow = this.fb.h.getRowClass(inputClassElement.val())
        const wrapperRow = this.fb.h.getRowClass(
          inputClassElement.closest(this.fb.rowWrapperClassSelector).attr('class'),
        )
        inputClassElement.val(inputClassElement.val().toString().replace(oldRow, wrapperRow))
        this.checkRowCleanup()
      }
    }
  }

  checkRowCleanup() {
    this.fb.$stage.find(this.fb.colWrapperClassSelector).each((i, elem) => {
      const $colWrapper = $(elem)
      if ($colWrapper.is(':empty') && !this.fb.preserveTempContainers.includes($colWrapper.attr('id'))) {
        $colWrapper.remove()
      }
    })

    this.fb.$stage
      .children(this.fb.rowWrapperClassSelector)
      .not(this.fb.tmpRowPlaceholderClassSelector)
      .each((i, elem) => {
        if ($(elem).children(this.fb.colWrapperClassSelector).length == 0) {
          const rowValue = this.fb.h.getRowValue($(elem).attr('class'))
          this.fb.formRows = this.fb.formRows.filter(x => x != rowValue)
          $(elem).remove()
        } else {
          this.fb.sh.removeColumnInsertButtons($(elem))
        }
      })
  }

  AttatchColWrapperHandler(colWrapper: JQuery<HTMLElement>) {
    if (!this.fb.gh.enhancedBootstrapEnabled()) {
      return
    }

    colWrapper.on('mouseenter', e => {
      const $el = $(e.currentTarget)
      if (!this.fb.gh.gridMode) {
        this.fb.sh.HideInvisibleRowPlaceholders()

        //Only show the placeholder for what is above/below the rowWrapper
        $el
          .closest(this.fb.rowWrapperClassSelector)
          .prevAll(this.fb.tmpRowPlaceholderClassSelector)
          .first()
          .removeClass(this.fb.invisibleRowPlaceholderClass)
        $el
          .closest(this.fb.rowWrapperClassSelector)
          .nextAll(this.fb.tmpRowPlaceholderClassSelector)
          .first()
          .removeClass(this.fb.invisibleRowPlaceholderClass)

        this.fb.gh.gridModeTargetField = $el
        this.fb.gh.gridModeStartX = e.pageX
        this.fb.gh.gridModeStartY = e.pageY
      }
    })
  }

  cleanupTempPlaceholders() {
    this.fb.$stage.find(this.fb.colWrapperClassSelector).removeClass('colHoverTempStyle')
    this.fb.$stage.find(this.fb.tmpColWrapperClassSelector).remove()
  }

  setupSortableRowWrapper(rowWrapperNode) {
    if (!this.fb.gh.enhancedBootstrapEnabled()) {
      return
    }

    $(rowWrapperNode).sortable({
      connectWith: [this.fb.rowWrapperClassSelector],
      cursor: 'move',
      opacity: 0.9,
      revert: 150,
      tolerance: 'pointer',
      helper: (e, el) => {
        //Shrink the control a little while dragging so it's not in the way as much
        //@ts-ignore
        const clone = el.clone()
        clone.find('.field-actions').remove()
        clone.css({ width: '20%', height: '100px', minHeight: '60px', overflow: 'hidden' })
        return clone
      },
      over: event => {
        const overTarget = $(event.target)
        const overTargetIsPlaceholder = overTarget.hasClass(this.fb.tmpRowPlaceholderClass)

        if (!overTargetIsPlaceholder) {
          this.removeColumnInsertButtons(overTarget)
        }

        overTarget.addClass('hoverDropStyleInverse')

        if (!overTargetIsPlaceholder) {
          this.HideInvisibleRowPlaceholders()

          //Only show the placeholder for what is above/below the rowWrapper
          overTarget
            .prevAll(this.fb.tmpRowPlaceholderClassSelector)
            .first()
            .removeClass(this.fb.invisibleRowPlaceholderClass)
            .css('height', '40px')
          overTarget
            .nextAll(this.fb.tmpRowPlaceholderClassSelector)
            .first()
            .removeClass(this.fb.invisibleRowPlaceholderClass)
            .css('height', '40px')
        }
      },
      out: event => {
        this.fb.$stage.children(this.fb.tmpRowPlaceholderClassSelector).removeClass('hoverDropStyleInverse')
        $(event.target).removeClass('hoverDropStyleInverse')
      },
      placeholder: 'hoverDropStyleInverse',
      receive: (event, ui) => {
        const senderIsControlsBox = $(ui.sender).attr('id') == this.fb.$control.attr('id')

        const droppingToNewRow = $(ui.item).parent().hasClass(this.fb.tmpRowPlaceholderClass)
        const droppingToPlaceholderRow = $(ui.item).parent().hasClass(this.fb.tmpRowPlaceholderClass)
        const droppingToExistingRow =
          $(ui.item).parent().hasClass(this.fb.rowWrapperClass) &&
          !$(ui.item).parent().hasClass(this.fb.tmpRowPlaceholderClass)

        if (droppingToNewRow && !senderIsControlsBox) {
          const colWrapper = $(ui.item)

          const columnData = this.fb.gh.prepareFieldRow({})

          const rowWrapperNode = this.fb.m('div', null, {
            id: `${colWrapper.find('li').attr('id')}-row`,
            className: `row row-${columnData.rowNumber} ${this.fb.rowWrapperClass}`,
          })

          $(ui.item).parent().replaceWith(rowWrapperNode)
          this.AttatchColWrapperHandler($(ui.item))

          colWrapper.appendTo(rowWrapperNode)

          this.setupSortableRowWrapper(rowWrapperNode)
          this.syncFieldWithNewRow(colWrapper.attr('id'))
          this.checkRowCleanup()
        }

        if (droppingToPlaceholderRow && senderIsControlsBox) {
          this.fb.insertTargetIsRow = true
          this.fb.insertingNewControl = true
          this.fb.$targetInsertWrapper = $(ui.item).parent()
        }

        if (droppingToExistingRow && senderIsControlsBox) {
          //Look for the closest add control button and act as if that was used to add the control
          if ($(ui.item).prev().hasClass('btnAddControl')) {
            this.fb.$targetInsertWrapper = $(ui.item).prev()
          } else if ($(ui.item).next().hasClass('btnAddControl')) {
            this.fb.$targetInsertWrapper = $(ui.item).next()
          } else {
            this.fb.$targetInsertWrapper = $(ui.item).attr('prepend', 'true')
          }

          const parentRowValue = this.fb.h.getRowClass($(ui.item).parent().attr('class'))
          this.fb.$targetInsertWrapper.addClass(parentRowValue)

          this.fb.insertTargetIsColumn = true
          this.fb.insertingNewControl = true

          this.fb.h.stopIndex = undefined
        }

        this.cleanupTempPlaceholders()

        if (this.fb.insertingNewControl) {
          this.doCancel = true
          this.fb.ch.processControl(ui.item)
          this.fb.h.save.call(this.fb.h)
        }

        this.fb.gh.ResetAllInvisibleRowPlaceholders()

        const listFieldItem = $(ui.item).find('li')
        if (listFieldItem.length) {
          this.checkTinyMCETransition(listFieldItem)
          this.fb.sh.UpdatePreviewAndSave(listFieldItem)
        }
      },
      start: () => {
        this.cleanupTempPlaceholders()
      },
      stop: (event, ui) => {
        this.fb.$stage.children(this.fb.tmpRowPlaceholderClassSelector).removeClass('hoverDropStyleInverse')
        this.fb.gh.autoSizeRowColumns(ui.item.closest(this.fb.rowWrapperClassSelector), true)
      },
      update: (event, ui) => {
        this.syncFieldWithNewRow(ui.item.attr('id'))
      },
    })

    $(rowWrapperNode).off('mouseenter')
    $(rowWrapperNode).on('mouseenter', e => {
      this.fb.gh.setupColumnInserts($(e.currentTarget))
    })

    $(rowWrapperNode).off('mouseleave')
    $(rowWrapperNode).on('mouseleave', e => {
      this.removeColumnInsertButtons($(e.currentTarget))
    })
  }

  cloneItem(currentItem) {
    this.fb.lastID = this.fb.h.incrementId(this.fb.lastID)

    this.checkTinyMCETransition(currentItem)

    const currentId = currentItem.attr('id')
    const type = currentItem.attr('type')
    const ts = new Date().getTime()
    const cloneName = `${type}-${ts}`
    const $clone = currentItem.clone()

    $('.fld-name', $clone).val(cloneName)
    $clone.find('[id]').each((i, elem) => {
      elem.id = elem.id.replace(currentId, this.fb.lastID)
    })
    $clone.find('[for]').each((index, elem) => {
      const curId = elem.getAttribute('for')
      const newForId = curId.replace(currentId, this.fb.lastID)
      elem.setAttribute('for', newForId)
    })

    //Copy selects(includes subtype if applicable)
    const selects = currentItem.find('select')
    selects.each((index, el) => {
      const select = $(el)
      $clone.find('select').eq(index).val($(select).val())
    })

    $clone.attr('id', this.fb.lastID)
    $clone.attr('name', cloneName)
    $clone.addClass('cloned')
    $('.sortable-options', $clone).sortable()

    if (this.fb.opts.typeUserEvents[type] && this.fb.opts.typeUserEvents[type].onclone) {
      this.fb.opts.typeUserEvents[type].onclone($clone[0])
    }

    return $clone
  }

  saveAndUpdate = evt => {
    if (evt) {
      const isDisabled = [({ type, target }) => type === 'keyup' && target.name === 'className'].some(typeCondition =>
        typeCondition(evt),
      )
      if (isDisabled) {
        return false
      }

      this.UpdatePreviewAndSave($(evt.target).closest('.form-field'))
    }
  }

  UpdatePreviewAndSave(fieldListItem) {
    this.fb.h.updatePreview(fieldListItem)
    this.fb.h.save.call(this.fb.h)
  }

  checkSetupBlankStage() {
    if (this.fb.sh.stageHasFields() || !this.fb.gh.enhancedBootstrapEnabled()) {
      return
    }

    const columnData = this.fb.gh.prepareFieldRow({})

    const rowWrapperNode = this.fb.m('div', null, {
      id: `${this.fb.h.incrementId(this.fb.lastID)}-row`,
      className: `row row-${columnData.rowNumber} ${this.fb.rowWrapperClass}`,
    })

    this.fb.$stage.append(rowWrapperNode)
    this.fb.sh.setupSortableRowWrapper(rowWrapperNode)
    this.fb.gh.ResetAllInvisibleRowPlaceholders()

    //Create 1 invisible placeholder which will allow the initial drag anywhere in the stage
    this.fb.$stage
      .find(this.fb.tmpRowPlaceholderClassSelector)
      .eq(0)
      .removeClass(this.fb.invisibleRowPlaceholderClass)
      .css({ height: this.fb.$stage.css('height'), backgroundColor: 'transparent' })
  }

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  startMoving(event, ui) {
    ui.item.show().addClass('moving')
    this.doCancel = true
    this.from = ui.item.parent()
  }

  /**
   * Callback for when a drag ends
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  stopMoving(event, ui) {
    ui.item.removeClass('moving')
    if (this.doCancel) {
      if (ui.sender) {
        $(ui.sender).sortable('cancel')
      }
      this.from.sortable('cancel')
    }

    this.fb.h.save()
    this.doCancel = false
  }

  /**
   * jQuery UI sortable beforeStop callback used for both lists.
   * Logic for canceling the sort or drop.
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */
  beforeStop(event, ui) {
    const opts = config.opts
    const form = this.fb.stage
    const lastIndex = form.childNodes.length - 1
    const cancelArray = []
    this.fb.h.stopIndex = ui.placeholder.index() - 1

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true)
    }

    if (opts.prepend) {
      cancelArray.push(this.fb.h.stopIndex === 0)
    }

    if (opts.append) {
      cancelArray.push(this.fb.h.stopIndex + 1 === lastIndex)
    }

    this.doCancel = cancelArray.some(elem => elem === true)
  }

  checkTinyMCETransition(fieldListItem) {
    const isTinyMCE = fieldListItem.find('textarea[type="tinymce"]')
    if (isTinyMCE.length) {
      window.lastFormBuilderCopiedTinyMCE = window.tinymce.get(isTinyMCE.attr('id')).save(null)
    }
  }
}
