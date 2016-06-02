function formBuilderHelpersFn(opts, formBuilder) {
  'use strict';

  var _helpers = {
    doCancel: false
  };

  formBuilder.events = formBuilderEventsFn();

  /**
   * Convert an attrs object into a string
   *
   * @param  {Object} attrs object of attributes for markup
   * @return {string}
   */
  _helpers.attrString = function(attrs) {
    var attributes = [];
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attr = _helpers.safeAttr(attr, attrs[attr]);
        attributes.push(attr.name + attr.value);
      }
    }
    var attrString = attributes.join(' ');
    return attrString;
  };

  /**
   * Convert camelCase into lowercase-hyphen
   *
   * @param  {string} str
   * @return {string}
   */
  _helpers.hyphenCase = (str) => {
    str = str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });

    return str.replace(/\s/g, '-').replace(/^-+/g, '');
  };

  /**
   * Convert converts messy `cl#ssNames` into valid `class-names`
   *
   * @param  {string} str
   * @return {string}
   */
  _helpers.makeClassName = (str) => {
    str = str.replace(/[^\w\s\-]/gi, '');
    return _helpers.hyphenCase(str);
  };

  _helpers.safeAttrName = function(name) {
    let safeAttr = {
      className: 'class'
    };

    return safeAttr[name] || _helpers.hyphenCase(name);
  };

  _helpers.safeAttr = function(name, value) {
    name = _helpers.safeAttrName(name);

    let valString = window.JSON.stringify(HTML_ENTITIES.encode(value));

    value = value ? `=${valString}` : '';
    return {
      name,
      value
    };
  };

  /**
   * Add a mobile class
   *
   * @return {string}
   */
  _helpers.mobileClass = function() {
    var mobileClass = '';
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        mobileClass = ' fb-mobile';
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return mobileClass;
  };

  /**
   * Callback for when a drag begins
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.startMoving = function(event, ui) {
    event = event;
    ui.item.show().addClass('moving');
    _helpers.startIndex = $('li', this).index(ui.item);
  };

  /**
   * Callback for when a drag ends
   *
   * @param  {Object} event
   * @param  {Object} ui
   */
  _helpers.stopMoving = function(event, ui) {
    event = event;
    ui.item.removeClass('moving');
    if (_helpers.doCancel) {
      $(ui.sender).sortable('cancel');
      $(this).sortable('cancel');
    }
    _helpers.save();
    _helpers.doCancel = false;
  };

  /**
   * jQuery UI sortable beforeStop callback used for both lists.
   * Logic for canceling the sort or drop.
   */
  _helpers.beforeStop = function(event, ui) {
    event = event;

    var form = document.getElementById(opts.formID),
      lastIndex = form.children.length - 1,
      cancelArray = [];
    _helpers.stopIndex = ui.placeholder.index() - 1;

    if (!opts.sortableControls && ui.item.parent().hasClass('frmb-control')) {
      cancelArray.push(true);
    }

    if (opts.prepend) {
      cancelArray.push(_helpers.stopIndex === 0);
    }

    if (opts.append) {
      cancelArray.push((_helpers.stopIndex + 1) === lastIndex);
    }

    _helpers.doCancel = cancelArray.some(elem => elem === true);
  };

  /**
   * Make strings safe to be used as classes
   *
   * @param  {string} str string to be converted
   * @return {string}     converter string
   */
  _helpers.safename = function(str) {
    return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
  };

  /**
   * Strips non-numbers from a number only input
   *
   * @param  {string} str string with possible number
   * @return {string}     string without numbers
   */
  _helpers.forceNumber = function(str) {
    return str.replace(/[^0-9]/g, '');
  };

  /**
   * hide and show mouse tracking tooltips, only used for disabled
   * fields in the editor.
   *
   * @todo   remove or refactor to make better use
   * @param  {Object} tt jQuery option with nexted tooltip
   * @return {void}
   */
  _helpers.initTooltip = function(tt) {
    var tooltip = tt.find('.tooltip');
    tt.mouseenter(function() {
      if (tooltip.outerWidth() > 200) {
        tooltip.addClass('max-width');
      }
      tooltip.css('left', tt.width() + 14);
      tooltip.stop(true, true).fadeIn('fast');
    }).mouseleave(function() {
      tt.find('.tooltip').stop(true, true).fadeOut('fast');
    });
    tooltip.hide();
  };

  /**
   * Attempts to get element type and subtype
   *
   * @param  {Object} $field
   * @return {Object}
   */
  _helpers.getTypes = function($field) {
    return {
      type: $field.attr('type'),
      subtype: $('.fld-subtype', $field).val()
    };
  };

  // Remove null or undefined values
  _helpers.trimAttrs = function(attrs) {
    let xmlRemove = [
      null,
      undefined,
      '',
      false
    ];
    for (var i in attrs) {
      if (_helpers.inArray(attrs[i], xmlRemove)) {
        delete attrs[i];
      }
    }
    return attrs;
  };

  // Remove null or undefined values
  _helpers.escapeAttrs = function(attrs) {
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attrs[attr] = HTML_ENTITIES.encode(attrs[attr]);
      }
    }

    return attrs;
  };

  /**
   * XML save
   *
   * @param  {Object} form sortableFields node
   */
  _helpers.xmlSave = function(form) {
    let formDataNew = $(form).toXML(_helpers);
    if (window.JSON.stringify(formDataNew) === window.JSON.stringify(formBuilder.formData)) {
      return false;
    }
    formBuilder.formData = formDataNew;
  };

  _helpers.jsonSave = function() {
    opts.notify.warning('json data not available yet');
  };

  /**
   * Saves and returns formData
   * @return {XML|JSON}
   */
  _helpers.save = function() {
    var element = _helpers.getElement(),
      form = document.getElementById(opts.formID),
      formData;

    let doSave = {
      xml: _helpers.xmlSave,
      json: _helpers.jsonSave
    };

    // save action for current `dataType`
    formData = doSave[opts.dataType](form);

    if (element) {
      element.value = formBuilder.formData;
      if (window.jQuery) {
        $(element).trigger('change');
      } else {
        element.onchange();
      }
    }

    //trigger formSaved event
    document.dispatchEvent(formBuilder.events.formSaved);
    return formData;
  };

  /**
   * Attempts to find an element,
   * useful if formBuilder was called without Query
   * @return {Object}
   */
  _helpers.getElement = () => {
    let element = false;
    if (formBuilder.element) {
      element = formBuilder.element;

      if (!element.id) {
        _helpers.makeId(element);
      }

      if (!element.onchange) {
        element.onchange = function() {
          opts.notify.success(opts.messages.formUpdated);
        };
      }
    }

    return element;
  };

  /**
   * increments the field ids with support for multiple editors
   * @param  {String} id field ID
   * @return {String}    incremented field ID
   */
  _helpers.incrementId = function(id) {
    var split = id.lastIndexOf('-'),
      newFieldNumber = parseInt(id.substring(split + 1)) + 1,
      baseString = id.substring(0, split);

    return `${baseString}-${newFieldNumber}`;
  };

  _helpers.makeId = function(element = false) {
    let epoch = new Date().getTime();

    return `${element.tagName}-${epoch}`;
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field jQuery wrapped dom object @todo, remove jQuery dependency
   */
  _helpers.updatePreview = function(field) {
    var fieldData = field.data('fieldData') || {};
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type'),
      $prevHolder = $('.prev-holder', field),
      previewData = {
        label: $('.fld-label', field).val(),
        type: fieldType
      },
      preview;

    let subtype = $('.fld-subtype', field).val();
    if (subtype) {
      previewData.subtype = subtype;
    }

    let maxlength = $('.fld-maxlength', field).val();
    if (maxlength) {
      previewData.maxlength = maxlength;
    }

    previewData.className = $('.fld-className', field).val() || fieldData.className || '';

    let placeholder = $('.fld-placeholder', field).val();
    if (placeholder) {
      previewData.placeholder = placeholder;
    }

    let style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType === 'checkbox') {
      previewData.toggle = $('.checkbox-toggle', field).is(':checked');
    }

    if (fieldType.match(/(select|checkbox-group|radio-group)/)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function() {
        let option = {};
        option.selected = $('.option-selected', this).is(':checked');
        option.value = $('.option-value', this).val();
        option.label = $('.option-label', this).val();
        previewData.values.push(option);
      });
    }

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    field.data('fieldData', previewData);
    preview = _helpers.fieldPreview(previewData);

    $prevHolder.html(preview);

    $('input[toggle]', $prevHolder).kcToggle();
  };

  /**
   * Generate preview markup
   *
   * @todo   make this smarter and use tags
   * @param  {Object} attrs
   * @return {String}       preview markup for field
   */
  _helpers.fieldPreview = function(attrs) {
    var i,
      preview = '',
      epoch = new Date().getTime();
    attrs = jQuery.extend({}, attrs)
    attrs.type = attrs.subtype || attrs.type;
    let toggle = attrs.toggle ? 'toggle' : '';
    // attrs = _helpers.escapeAttrs(attrs);
    let attrsString = _helpers.attrString(attrs);

    switch (attrs.type) {
      case 'textarea':
      case 'rich-text':
        preview = `<textarea ${attrsString}></textarea>`;
        break;
      case 'button':
      case 'submit':
        preview = `<button ${attrsString}>${attrs.label}</button>`;
        break;
      case 'select':
        let options = '',
          multiple = attrs.multiple ? 'multiple' : '';
        attrs.values.reverse();
        if (attrs.placeholder) {
          options += `<option disabled selected>${attrs.placeholder}</option>`;
        }
        for (i = attrs.values.length - 1; i >= 0; i--) {
          let selected = (attrs.values[i].selected && !attrs.placeholder) ? 'selected' : '';
          options += `<option value="${attrs.values[i].value}" ${selected}>${attrs.values[i].label}</option>`;
        }
        preview = `<${attrs.type} class="${attrs.className}" ${multiple}>${options}</${attrs.type}>`;
        break;
      case 'checkbox-group':
      case 'radio-group':
        let type = attrs.type.replace('-group', ''),
          optionName = type + '-' + epoch;
        attrs.values.reverse();
        for (i = attrs.values.length - 1; i >= 0; i--) {
          let checked = attrs.values[i].selected ? 'checked' : '';
          let optionId = `${type}-${epoch}-${i}`;
          preview += `<div><input type="${type}" class="${attrs.className}" name="${optionName}" id="${optionId}" value="${attrs.values[i].value}" ${checked}/><label for="${optionId}">${attrs.values[i].label}</label></div>`;
        }
        break;
      case 'text':
      case 'password':
      case 'email':
      case 'date':
      case 'file':
        preview = `<input ${attrsString}>`;
        break;
      case 'color':
        preview = `<input type="${attrs.type}" class="${attrs.className}"> ${opts.messages.selectColor}`;
        break;
      case 'hidden':
      case 'checkbox':
        preview = `<input type="${attrs.type}" ${toggle} >`;
        break;
      case 'autocomplete':
        preview = `<input class="ui-autocomplete-input ${attrs.className}" autocomplete="on">`;
        break;
      default:
        attrsString = _helpers.attrString(attrs);
        preview = `<${attrs.type} ${attrsString}>${attrs.label}</${attrs.type}>`;
    }

    return preview;
  };

  // update preview to label
  _helpers.updateMultipleSelect = function() {
    $(document.getElementById(opts.formID)).on('change', 'input[name="multiple"]', function() {
      var options = $(this).parents('.field-options:eq(0)').find('.sortable-options input.option-selected');
      if (this.checked) {
        options.each(function() {
          $(this).prop('type', 'checkbox');
        });
      } else {
        options.each(function() {
          $(this).removeAttr('checked').prop('type', 'radio');
        });
      }
    });
  };

  _helpers.debounce = function(func, wait = 250, immediate = false) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  _helpers.htmlEncode = function(value) {
    return $('<div/>').text(value).html();
  };

  _helpers.htmlDecode = function(value) {
    return $('<div/>').html(value).text();
  };

  _helpers.validateForm = function() {
    var $form = $(document.getElementById(opts.formID));

    var errors = [];
    // check for empty field labels
    $('input[name="label"], input[type="text"].option', $form).each(function() {
      if ($(this).val() === '') {
        var field = $(this).parents('li.form-field'),
          fieldAttr = $(this);
        errors.push({
          field: field,
          error: opts.messages.labelEmpty,
          attribute: fieldAttr
        });
      }
    });

    // @todo add error = { noVal: opts.messages.labelEmpty }
    if (errors.length) {
      alert('Error: ' + errors[0].error);
      $('html, body').animate({
        scrollTop: errors[0].field.offset().top
      }, 1000, function() {
        var targetID = $('.toggle-form', errors[0].field).attr('id');
        $('.toggle-form', errors[0].field).addClass('open').parent().next('.prev-holder').slideUp(250);
        $('#' + targetID + '-fld').slideDown(250, function() {
          errors[0].attribute.addClass('error');
        });
      });
    }
  };

  /**
   * Display a custom tooltip for disabled fields.
   *
   * @param  {Object} field
   */
  _helpers.disabledTT = {
    className: 'frmb-tt',
    add: function(field) {
      let title = opts.messages.fieldNonEditable;

      if (title) {
        var tt = _helpers.markup('p', title, { className: _helpers.disabledTT.className });
        field.append(tt);
      }
    },
    remove: function(field) {
      $('.frmb-tt', field).remove();
    }
  };

  _helpers.classNames = function(field, previewData) {
    let noFormControl = [
        'checkbox',
        'checkbox-group',
        'radio-group'
      ],
      blockElements = ['header', 'paragraph', 'button'],
      i;

    for (i = blockElements.length - 1; i >= 0; i--) {
      blockElements = blockElements.concat(opts.messages.subtypes[blockElements[i]]);
    }

    noFormControl = noFormControl.concat(blockElements);

    let type = previewData.type;
    let style = previewData.style;
    let className = field[0].querySelector('.fld-className').value;
    let classes = [].concat(className.split(' ')).reverse();
    let types = {
      button: 'btn',
      submit: 'btn'
    };

    let primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = classes.length - 1; i >= 0; i--) {
          let re = new RegExp('(?:^|\s)' + primaryType + '-(.*?)(?:\s|$)+', 'g');
          let match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    } else if (!_helpers.inArray(type, noFormControl)) {
      classes.push('form-control');
    }

    // reverse the array to put custom classes at end, remove any duplicates, convert to string, remove whitespace
    return _helpers.unique(classes.reverse()).join(' ').trim();
  };

  _helpers.markup = function(tag, content = '', attrs = {}) {
    let contentType,
      field = document.createElement(tag),
      getContentType = function(content) {
        return Array.isArray(content) ? 'array' : typeof content;
      },
      appendContent = {
        string: function(content) {
          field.innerHTML = content;
        },
        object: function(content) {
          return field.appendChild(content);
        },
        array: function(content) {
          for (var i = 0; i < content.length; i++) {
            contentType = getContentType(content[i]);
            appendContent[contentType](content[i]);
          }
        }
      };

    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        if (attrs[attr]) {
          let name = _helpers.safeAttrName(attr);
          field.setAttribute(name, attrs[attr]);
        }
      }
    }

    contentType = getContentType(content);

    if (content) {
      appendContent[contentType].call(this, content);
    }

    return field;
  };

  /**
   * Closes and open dialog
   *
   * @param  {Object} overlay Existing overlay if there is one
   * @param  {Object} dialog  Existing dialog
   * @return {Event}          Triggers modalClosed event
   */
  _helpers.closeConfirm = function(overlay, dialog) {
    overlay = overlay || document.getElementsByClassName('form-builder-overlay')[0];
    dialog = dialog || document.getElementsByClassName('form-builder-dialog')[0];
    overlay.classList.remove('visible');
    dialog.remove();
    overlay.remove();
    document.dispatchEvent(formBuilder.events.modalClosed);
  };

  /**
   * Returns the layout data based on controlPosition option
   * @param  {String} controlPosition 'left' or 'right'
   * @return {Object}
   */
  _helpers.editorLayout = function(controlPosition) {
    let layoutMap = {
      left: {
        stage: 'pull-right',
        controls: 'pull-left'
      },
      right: {
        stage: 'pull-left',
        controls: 'pull-right'
      }
    };

    return layoutMap[controlPosition] ? layoutMap[controlPosition] : '';
  };

  /**
   * Adds overlay to the page. Used for modals.
   * @return {Object}
   */
  _helpers.showOverlay = function() {
    var overlay = _helpers.markup('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');

    overlay.onclick = function() {
      _helpers.closeConfirm(overlay);
    };

    return overlay;
  };

  /**
   * Custom confirmation dialog
   *
   * @param  {Object}  message   Content to be displayed in the dialog
   * @param  {Func}  yesAction callback to fire if they confirm
   * @param  {Boolean} coords    location to put the dialog
   * @param  {String}  className Custom class to be added to the dialog
   * @return {Object}            Reference to the modal
   */
  _helpers.confirm = function(message, yesAction, coords = false, className = '') {
    var overlay = _helpers.showOverlay();
    var yes = _helpers.markup('button', opts.messages.yes, { className: 'yes btn btn-success btn-sm' }),
      no = _helpers.markup('button', opts.messages.no, { className: 'no btn btn-danger btn-sm' });

    no.onclick = function() {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function() {
      yesAction();
      _helpers.closeConfirm(overlay);
    };

    var btnWrap = _helpers.markup('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = _helpers.markup('div', [message, btnWrap], { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    yes.focus();
    return miniModal;
  };

  /**
   * Popup dialog the does not require confirmation.
   * @param  {String|DOM|Array}  content
   * @param  {Boolean} coords    false if no coords are provided. Without coordinates
   *                             the popup will appear center screen.
   * @param  {String}  className classname to be added to the dialog
   * @return {Object}            dom
   */
  _helpers.dialog = function(content, coords = false, className = '') {
    _helpers.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = _helpers.markup('div', content, { className: className });
    if (!coords) {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = coords.pageX + 'px';
    miniModal.style.top = coords.pageY + 'px';

    document.body.appendChild(miniModal);

    if (className.indexOf('data-dialog') !== -1) {
      document.dispatchEvent(formBuilder.events.viewData);
    }
    return miniModal;
  };

  /**
   * Removes all fields from the form
   */
  _helpers.removeAllfields = function() {
    var form = document.getElementById(opts.formID);
    var fields = form.querySelectorAll('li.form-field');
    var $fields = $(fields);
    var markEmptyArray = [];

    if (opts.prepend) {
      markEmptyArray.push(true);
    }

    if (opts.append) {
      markEmptyArray.push(true);
    }

    if (!markEmptyArray.some(elem => elem === true)) {
      form.parentElement.classList.add('empty');
    }

    form.classList.add('removing');

    var outerHeight = 0;
    $fields.each(function() {
      outerHeight += $(this).outerHeight() + 3;
    });

    fields[0].style.marginTop = (-outerHeight) + 'px';

    setTimeout(function() {
      $fields.remove();
      document.getElementById(opts.formID).classList.remove('removing');
      _helpers.save();
    }, 500);

  };

  /**
   * If user re-orders the elements their order should be saved.
   *
   * @param {Object} $cbUL our list of elements
   */
  _helpers.setFieldOrder = function($cbUL) {
    if (!opts.sortableControls) {
      return false;
    }
    var fieldOrder = {};
    $cbUL.children().each(function(index, element) {
      fieldOrder[index] = $(element).data('attrs').type;
    });
    if (window.sessionStorage) {
      window.sessionStorage.setItem('fieldOrder', window.JSON.stringify(fieldOrder));
    }
  };

  /**
   * Reorder the controls if the user has previously ordered them.
   *
   * @param  {Array} frmbFields
   * @return {Array}
   */
  _helpers.orderFields = function(frmbFields) {
    var fieldOrder = false;

    if (window.sessionStorage) {
      if (opts.sortableControls) {
        fieldOrder = window.sessionStorage.getItem('fieldOrder');
      } else {
        window.sessionStorage.removeItem('fieldOrder');
      }
    }

    if (!fieldOrder) {
      fieldOrder = _helpers.unique(opts.controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = Object.keys(fieldOrder).map(function(i) {
        return fieldOrder[i];
      });
    }

    var newOrderFields = [];

    for (var i = fieldOrder.length - 1; i >= 0; i--) {
      var field = frmbFields.filter(function(field) {
        return field.attrs.type === fieldOrder[i];
      })[0];
      newOrderFields.push(field);
    }

    return newOrderFields.filter(Boolean);
  };

  // forEach that can be used on nodeList
  _helpers.forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // cleaner syntax for testing indexOf element
  _helpers.inArray = function(needle, haystack) {
    return haystack.indexOf(needle) !== -1;
  };

  /**
   * Remove duplicates from an array of elements
   * @param  {array} arrArg array with possible duplicates
   * @return {array}        array with only unique values
   */
  _helpers.unique = function(array) {
    return array.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  };

  return _helpers;
}
