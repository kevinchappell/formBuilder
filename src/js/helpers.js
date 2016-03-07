var formBuilderHelpers = function(opts, formBuilder) {
  'use strict';

  var _helpers = {
    doCancel: false
  };

  formBuilder.formData = '';

  /**
   * Convert an attrs object into a string
   *
   * @param  {object} attrs object of attributes for markup
   * @return {string}
   */
  _helpers.attrString = function(attrs) {
    let attributes = [];

    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        attr = _helpers.safeAttr(attr, attrs[attr]);
        attributes.push(attr.name + attr.value);
      }
    }
    return attributes.join(' ');
  };

  /**
   * Convert camelCase into lowercase-hyphen
   *
   * @param  {string} str
   * @return {string}
   */
  _helpers.hyphenCase = (str) => {
    return str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });
  };

  _helpers.safeAttr = function(name, value) {
    let safeAttr = {
      className: 'class'
    };

    name = safeAttr[name] || _helpers.hyphenCase(name);
    value = window.JSON.stringify(value);
    value = value ? `=${value}` : '';

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
   * @param  {object} event
   * @param  {object} ui
   */
  _helpers.startMoving = function(event, ui) {
    event = event;
    ui.item.addClass('moving');
    _helpers.startIndex = $('li', this).index(ui.item);
  };

  /**
   * Callback for when a drag ends
   *
   * @param  {object} event
   * @param  {object} ui
   */
  _helpers.stopMoving = function(event, ui) {
    event = event;
    ui.item.removeClass('moving');
    if (_helpers.doCancel) {
      $(ui.sender).sortable('cancel');
      $(this).sortable('cancel');
    } else {
      _helpers.save();
    }
  };

  /**
   * Make strings safe to be used as classes
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
   * @param  {object} tt jQuery option with nexted tooltip
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

  // saves the field data to our canvas (elem)
  _helpers.save = function() {
    var $form = $(document.getElementById(opts.formID));
    formBuilder.formData = $form.toXML();
    $form.children('li').each(function() {
      _helpers.updatePreview($(this));
    });
    $form.trigger('change');
  };

  // updatePreview will generate the preview for radio and checkbox groups
  _helpers.updatePreview = function(field) {
    var fieldClass = field.attr('class');

    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType,
      $prevHolder = $('.prev-holder', field);


    let subtype = $('.fld-subtype', field).val();
    fieldClass = fieldClass.replace('-field form-field', '');

    if (subtype) {
      fieldType = subtype;
    } else {
      fieldType = fieldClass;
    }

    var preview,
      previewData = {
        type: fieldType,
        label: $('.fld-label', field).val()
      };

    let maxlength = $('.fld-maxlength', field);
    if (maxlength) {
      previewData.maxlength = maxlength.val();
    }

    let placeholder = $('.fld-placeholder', field).val();
    if (placeholder) {
      previewData.placeholder = placeholder;
    }

    let style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldClass === 'checkbox') {
      previewData.toggle = $('.checkbox-toggle', field).is(':checked');
    }

    if (fieldClass.match(/(select|checkbox-group|radio-group)/)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function() {
        let option = {};
        option.selected = $('.select-option', $(this)).is(':checked');
        option.value = $('.option-value', $(this)).val();
        option.label = $('.option-label', $(this)).val();

        previewData.values.push(option);
      });
    }

    previewData.className = _helpers.className(previewData.type, previewData.className, previewData.style);

    field.data('fieldData', previewData);
    preview = _helpers.fieldPreview(previewData);

    $prevHolder.html(preview);

    $('input[toggle]', $prevHolder).kcToggle();

  };


  /**
   * Generate preview markup
   * @param  {object} attrs
   * @return {string}       preview markup for field
   */
  _helpers.fieldPreview = function(attrs) {
    var i,
      preview = '',
      epoch = new Date().getTime();
    let toggle = attrs.toggle ? 'toggle' : '';

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
        let options,
          multiple = attrs.multiple ? 'multiple' : '';
        attrs.values.reverse();
        for (i = attrs.values.length - 1; i >= 0; i--) {
          let selected = attrs.values[i].selected ? 'selected' : '';
          options += `<option value="${attrs.values[i].value}" ${selected}>${attrs.values[i].label}</option>`;
        }
        preview = `<${attrs.type} class="form-control" ${multiple}>${options}</${attrs.type}>`;
        break;
      case 'checkbox-group':
      case 'radio-group':
        let type = attrs.type.replace('-group', '');
        attrs.values.reverse();
        for (i = attrs.values.length - 1; i >= 0; i--) {
          let checked = attrs.values[i].selected ? 'checked' : '';
          preview += `<div><input type="${type}" id="${type}-${epoch}-${i}" value="${attrs.values[i].value}" ${checked}/><label for="${type}-${epoch}-${i}">${attrs.values[i].label}</label></div>`;
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
        preview = `<input type="${attrs.type}" class="form-control"> ${opts.messages.selectColor}`;
        break;
      case 'hidden':
      case 'checkbox':
        preview = `<input type="${attrs.type}" ${toggle} >`;
        break;
      case 'autocomplete':
        preview = `<input class="ui-autocomplete-input form-control" autocomplete="on">`;
        break;
      default:
        preview = `<${attrs.type}></${attrs.type}>`;
    }

    return preview;
  };

  // update preview to label
  _helpers.updateMultipleSelect = function() {
    $(document.getElementById(opts.formID)).on('change', 'input[name="multiple"]', function() {
      var options = $(this).parents('.fields:eq(0)').find('.sortable-options input.select-option');
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
   * @param  {object} field [description]
   * @return {void}
   */
  _helpers.disabledTT = function(field) {
    var title = field.attr('data-tooltip');
    if (title) {
      field.removeAttr('title').data('tip_text', title);
      var tt = $('<p/>', {
        'class': 'frmb-tt'
      }).html(title);
      field.append(tt);
      tt.css({
        top: -tt.outerHeight(),
        left: -15
      });
      field.mouseleave(function() {
        $(this).attr('data-tooltip', field.data('tip_text'));
        $('.frmb-tt').remove();
      });
    }
  };

  _helpers.className = function(type, className = false, style = false) {
    let classes = [];
    let types = {
      button: 'btn',
      submit: 'btn'
    };

    let primaryType = types[type];

    if (className) {
      classes.push(className);
    }

    if (primaryType) {
      classes.push(primaryType);
      if (style) {
        classes.push(primaryType + '-' + style);
      }
    } else if ('checkbox' !== type) {
      classes.push('form-control');
    }

    return classes.join(' ');
  };

  /**
   * Generate markup wrapper where needed
   * @param  {string} tag
   * @param  {object} attrs
   * @param  {string} content we wrap this
   * @return {string}
   */
  _helpers.markup = function(tag, attrs = {}, content = '') {
    attrs = _helpers.attrString(attrs);
    content = Array.isArray(content) ? content.join('') : content;
    let inlineElems = ['input', 'hr', 'br'],
      template = inlineElems.indexOf(tag) === -1 ? `<${tag} ${attrs}>${content}</${tag}>` : `<${tag} ${attrs}/>`;
    return template;
  };

  return _helpers;
};
