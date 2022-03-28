import { config } from 'ts/form_builder/config'
import { FormBuilder } from 'ts/form_builder/formBuilder'
import { FormBuilderOptions, GridInfo } from '../../types/formbuilder-types'

export class GridHelper {
  gridMode = false
  gridModeTargetField: JQuery<HTMLElement>
  gridModeStartX: number
  gridModeStartY: number

  constructor(public opts: FormBuilderOptions, public fb: FormBuilder) {
    this.stageHandlers()
  }

  enhancedBootstrapEnabled() {
    if (!this.fb.opts.enableEnhancedBootstrapGrid) {
      return false
    }

    return true
  }

  prepareFieldRow(data) {
    let result: GridInfo = {} as GridInfo

    if (!this.fb.gh.enhancedBootstrapEnabled()) {
      return result
    }

    result = this.fb.h.tryParseColumnInfo(data)
    this.TryCreateNew(result, data)

    if (!this.fb.formRows.includes(result.rowNumber)) {
      this.fb.formRows.push(result.rowNumber)
    }

    return result
  }

  ResetAllInvisibleRowPlaceholders() {
    this.fb.$stage.children(this.fb.tmpRowPlaceholderClassSelector).remove()

    this.fb.$stage.children(this.fb.rowWrapperClassSelector).each((i, elem) => {
      this.SetupInvisibleRowPlaceholders($(elem))
    })
  }

  SetupInvisibleRowPlaceholders(rowWrapperNode) {
    const wrapperClone = $(rowWrapperNode).clone()
    wrapperClone.addClass(this.fb.invisibleRowPlaceholderClass).addClass(this.fb.tmpRowPlaceholderClass).html('')
    wrapperClone.css('height', '1px')

    wrapperClone.attr('class', wrapperClone.attr('class').replace('row-', ''))
    wrapperClone.removeAttr('id')

    if ($(rowWrapperNode).index() == 0) {
      const wrapperClone2 = $(wrapperClone).clone()
      this.fb.$stage.prepend(wrapperClone2)
      this.fb.sh.setupSortableRowWrapper(wrapperClone2)
    }

    wrapperClone.insertAfter($(rowWrapperNode))
    this.fb.sh.setupSortableRowWrapper(wrapperClone)
  }

  private TryCreateNew(result: GridInfo, data) {
    if (!result.rowNumber) {
      //Column information wasn't defined, get new default configuration for one.
      let nextRow
      if (this.fb.formRows.length == 0) {
        nextRow = 1
      } else {
        nextRow = Math.max(...this.fb.formRows) + 1
      }

      result.rowNumber = nextRow

      //If inserting directly into column, use the correct rowNumber
      if (this.fb.insertingNewControl && this.fb.insertTargetIsColumn) {
        result.rowNumber = this.fb.h.getRowValue(this.fb.$targetInsertWrapper.attr('class'))
      }

      result.columnClassSize = this.fb.opts.defaultGridColumnClass

      if (!data.className) {
        data.className = ''
      }

      data.className += ` row-${result.rowNumber} ${result.columnClassSize}`
      result.addedDefaultColumnClass = true
    }
  }

  autoSizeRowColumns(rowWrapper, force = false) {
    const childRowCount = rowWrapper.children(`div${this.fb.colWrapperClassSelector}`).length
    const newAutoCalcSizeValue = Math.floor(12 / childRowCount)

    rowWrapper.children(`div${this.fb.colWrapperClassSelector}`).each((i, elem) => {
      const colWrapper = $(`#${elem.id}`)

      //Don't auto-size the field if the user had manually adjusted it during this session
      if (!force && colWrapper.find('li').attr('manuallyChangedDefaultColumnClass') == 'true') {
        this.fb.h.showToast(`Preserving column size of field ${i + 1} because you had personally adjusted it`, 4000)
        return
      }

      this.syncBootstrapColumnWrapperAndClassProperty(elem.id.replace('-cont', ''), newAutoCalcSizeValue)
    })
  }

  syncBootstrapColumnWrapperAndClassProperty(fieldID, newValue) {
    const colWrapper = $(`#${fieldID}-cont`)
    colWrapper.attr('class', this.fb.h.changeBootstrapClass(colWrapper.attr('class'), newValue))

    const inputClassElement = $(`#className-${fieldID}`)
    if (inputClassElement.val()) {
      inputClassElement.val(this.fb.h.changeBootstrapClass(inputClassElement.val(), newValue))
    }
  }

  setupColumnInserts(rowWrapper) {
    if (!this.fb.opts.enableColumnInsertMenu) {
      return
    }

    $(rowWrapper)
      .children(this.fb.colWrapperClassSelector)
      .each((i, elem) => {
        const colWrapper = $(elem)
        colWrapper.addClass('colHoverTempStyle')

        if (colWrapper.index() == 0) {
          $(
            `<button type="button" class=" ${
              this.fb.tmpColWrapperClass
            } formbuilder-icon-plus btnAddControl ${this.fb.h.getRowClass(
              colWrapper.parent().attr('class'),
            )}" prepend="true"></button>`,
          ).insertBefore(colWrapper)
        }

        $(
          `<button type="button" class=" ${
            this.fb.tmpColWrapperClass
          } formbuilder-icon-plus btnAddControl ${this.fb.h.getRowClass(
            colWrapper.parent().attr('class'),
          )}" appendAfter="${colWrapper.attr('id')}"></button>`,
        ).insertAfter(colWrapper)
      })
  }

  toggleGridModeActive(active = true) {
    if (active) {
      this.fb.gh.gridMode = true
      this.fb.h.showToast('Starting Grid Mode - Use the mousewheel to resize.', 1500)

      //Hide controls
      this.fb.$control.css('display', 'none')
      $(this.fb.formActions).css('display', 'none')

      //Cleanup temp artifacts
      this.fb.sh.cleanupTempPlaceholders()

      this.buildGridModeHelp()
      this.fb.h.closeAllEdit()
      this.fb.h.toggleHighlight(this.fb.gh.gridModeTargetField)
      this.fb.sh.HideInvisibleRowPlaceholders()
    } else {
      this.fb.h.showToast('Grid Mode Finished', 1500)

      //If when exiting grid mode and the row columns end up being > 12 (This can happen if the user moved a column up/down and exited), auto-resize it.
      const rowWrapper = this.fb.gh.gridModeTargetField.closest(this.fb.rowWrapperClassSelector)
      let totalRowValueCount = 0

      rowWrapper.children(`div${this.fb.colWrapperClassSelector}`).each((i, elem) => {
        const colWrapper = $(`#${elem.id}`)
        const fieldID = colWrapper.find('li').attr('id')
        totalRowValueCount += this.fb.h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr('class'))
      })

      if (totalRowValueCount > 12) {
        this.fb.gh.autoSizeRowColumns(rowWrapper, true)
      }

      this.fb.gh.gridMode = false
      this.fb.gh.gridModeTargetField = null

      $(this.fb.gridModeHelp).html('')

      //Show controls
      this.fb.$control.css('display', 'unset')
      $(this.fb.formActions).css('display', 'unset')
    }
  }

  buildGridModeHelp() {
    $(this.fb.gridModeHelp).html(`
    <div style='padding:5px'>    
      <h3 class="text text-center">Grid Mode</h3>    
      
      <table style='border-spacing:7px;border-collapse: separate'>
        <thead>
          <tr>
            <th>Action</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>MOUSEWHEEL</kbd></td>
            <td>Adjust the field column size</td>
          </tr>    
          <tr>
            <td><kbd>W or &#x2191;</kbd></td> 
            <td>Move entire row up</td>
          </tr>
          <tr>
              <td><kbd>S or &#x2193;</kbd></td> 
              <td>Move entire row down</td>
          </tr>
          <tr>
              <td><kbd>A or &#x2190;</kbd></td>
              <td>Move field left within the row</td>
          </tr>
          <tr>
              <td><kbd>D or &#x2192;</kbd></td> 
              <td>Move field right within the row</td>
          </tr>
          <tr>
            <td><kbd>R</kbd></td> 
            <td>Resize all fields within the row to be maximally equal</td>
          </tr>
          <tr>
        </tbody> 
      </table>

      <h5 class="text text-center" style='padding-top:10px'>Current Row Fields</h5>    
      
      <table class='gridHelpCurrentRow'>
        <colgroup>
          <col width="100%" />
          <col width="0%" />
        </colgroup>
        
        <thead>
          <tr>
            <th>Field</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody>
        </tbody> 
      </table>
      
    </div>
    `)

    this.buildGridModeCurrentRowInfo()
  }

  buildGridModeCurrentRowInfo() {
    $(this.fb.gridModeHelp).find('.gridHelpCurrentRow tbody').empty()

    const rowWrapper = this.fb.gh.gridModeTargetField.closest(this.fb.rowWrapperClassSelector)

    rowWrapper.children(`div${this.fb.colWrapperClassSelector}`).each((i, elem) => {
      const colWrapper = $(`#${elem.id}`)
      const fieldID = colWrapper.find('li').attr('id')
      const fieldType = $(`#${fieldID}`).attr('type')

      let label = $(`#label-${fieldID}`).html()
      if (fieldType == 'hidden' || fieldType == 'paragraph') {
        label = $(`#name-${fieldID}`).val() as string
      }

      if (!label) {
        label = $(`#${fieldID}`).attr('id')
      }

      //Highlight the current field being worked on
      let currentFieldClass = ''
      if (this.fb.gh.gridModeTargetField.attr('id') == fieldID) {
        currentFieldClass = 'currentGridModeFieldHighlight'
      }

      $(this.fb.gridModeHelp).find('.gridHelpCurrentRow tbody').append(`
        <tr>
          <td class='grid-mode-help-row1 ${currentFieldClass}'>${label}</td>
          <td class='grid-mode-help-row2 ${currentFieldClass}'>
            ${this.fb.h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr('class'))}
          </td>
        <tr>
      `)
    })
  }

  stageHandlers() {
    this.fb.$stage.on('click touchstart', '.grid-button', e => {
      e.preventDefault()

      const ID = $(e.target).parents('.form-field:eq(0)').attr('id')
      this.fb.gh.gridModeTargetField = $(document.getElementById(ID))
      this.fb.gh.gridModeStartX = e.pageX
      this.fb.gh.gridModeStartY = e.pageY

      this.toggleGridModeActive()
    })

    //Use mousewheel to work resizing
    this.fb.$stage.on('mousewheel', e => {
      if (this.fb.gh.gridMode) {
        e.preventDefault()

        const parentCont = this.fb.gh.gridModeTargetField.closest('div')
        const currentColValue = this.fb.h.getBootstrapColumnValue(parentCont.attr('class'))

        let nextColSize
        //@ts-ignore
        if (e.originalEvent.wheelDelta / 120 > 0) {
          nextColSize = currentColValue + 1
        } else {
          nextColSize = currentColValue - 1
        }

        if (nextColSize > 12) {
          this.fb.h.showToast('<b class="formbuilder-required">Column Size cannot exceed 12</b>')
          return
        }

        if (nextColSize < 1) {
          this.fb.h.showToast('<b class="formbuilder-required">Column Size cannot be less than 1</b>')
          return
        }

        //Check overall column value, do not allow the entire row to exceed 12
        const rowWrapper = this.fb.gh.gridModeTargetField.closest(this.fb.rowWrapperClassSelector)

        let totalRowValueCount = nextColSize
        rowWrapper.children(`div${this.fb.colWrapperClassSelector}`).each((i, elem) => {
          const colWrapper = $(`#${elem.id}`)
          const fieldID = colWrapper.find('li').attr('id')

          if (fieldID != this.fb.gh.gridModeTargetField.attr('id')) {
            totalRowValueCount += this.fb.h.getBootstrapColumnValue($(`#${fieldID}-cont`).attr('class'))
          }
        })

        if (totalRowValueCount > 12) {
          this.fb.h.showToast('<b class="formbuilder-required">There is a maximum of 12 columns per row</b>')
          return
        }

        this.syncBootstrapColumnWrapperAndClassProperty(this.fb.gh.gridModeTargetField.attr('id'), nextColSize)
        this.fb.gh.gridModeTargetField.attr('manuallyChangedDefaultColumnClass', 'true')

        this.buildGridModeCurrentRowInfo()
        this.fb.h.toggleHighlight(this.fb.gh.gridModeTargetField)
      }
    })

    //Use W A S D or Arrow Keys to move the field up/down/left/right across the form
    //Use R to auto-size all columns in the row equally
    $(document).keydown(e => {
      if (this.fb.gh.gridMode) {
        e.preventDefault()
        const rowWrapper = this.fb.gh.gridModeTargetField.closest(this.fb.rowWrapperClassSelector)

        if (e.keyCode == 87 || e.keyCode == 38) {
          this.moveFieldUp(rowWrapper)
        }

        if (e.keyCode == 83 || e.keyCode == 40) {
          this.moveFieldDown(rowWrapper)
        }

        if (e.keyCode == 65 || e.keyCode == 37) {
          this.moveFieldLeft()
        }

        if (e.keyCode == 68 || e.keyCode == 39) {
          this.moveFieldRight()
        }

        if (e.keyCode == 82) {
          this.fb.gh.autoSizeRowColumns(rowWrapper, true)
        }

        this.buildGridModeCurrentRowInfo()
        this.fb.sh.removeColumnInsertButtons(rowWrapper)
      }
    })

    //When mouse moves away a certain distance, cancel grid mode
    $(document).mousemove(e => {
      if (
        this.fb.gh.gridMode &&
        this.getDistanceBetweenPoints(this.fb.gh.gridModeStartX, this.fb.gh.gridModeStartY, e.pageX, e.pageY) >
          config.opts.cancelGridModeDistance
      ) {
        this.toggleGridModeActive(false)
      }
    })

    $(document).on('checkRowCleanup', (event, data) => {
      this.fb.sh.checkRowCleanup()

      const rowWrapper = $(`#${data.rowWrapperID}`)
      if (rowWrapper.length) {
        this.fb.gh.autoSizeRowColumns(rowWrapper, true)
      }

      this.fb.sh.checkSetupBlankStage()
    })
  }

  getDistanceBetweenPoints(x1, y1, x2, y2) {
    const y = x2 - x1
    const x = y2 - y1

    return Math.floor(Math.sqrt(x * x + y * y))
  }

  private moveFieldUp(rowWrapper) {
    const previousRowSibling = rowWrapper.prevAll().not(this.fb.tmpRowPlaceholderClassSelector).first()
    if (previousRowSibling.length) {
      $(this.fb.gh.gridModeTargetField.parent().parent()).swapWith(previousRowSibling)
    } else {
      return
    }
    this.fb.h.toggleHighlight(this.fb.gh.gridModeTargetField)
  }

  private moveFieldDown(rowWrapper) {
    const nextRowSibling = rowWrapper.nextAll().not(this.fb.invisibleRowPlaceholderClassSelector).first()
    if (nextRowSibling.length) {
      $(this.fb.gh.gridModeTargetField.parent().parent()).swapWith(nextRowSibling)
    } else {
      return
    }
    this.fb.h.toggleHighlight(this.fb.gh.gridModeTargetField)
  }

  private moveFieldLeft() {
    const colSibling = this.fb.gh.gridModeTargetField.parent().prev()
    if (colSibling.length) {
      this.fb.gh.gridModeTargetField.parent().after(colSibling)
    }
    this.fb.h.toggleHighlight(this.fb.gh.gridModeTargetField)
  }

  private moveFieldRight() {
    const colSibling = this.fb.gh.gridModeTargetField.parent().next()
    if (colSibling.length) {
      this.fb.gh.gridModeTargetField.parent().before(colSibling)
    }
    this.fb.h.toggleHighlight(this.fb.gh.gridModeTargetField)
  }
}
