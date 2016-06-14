/*
formBuilder - http://kevinchappell.github.io/formBuilder/
Version: 1.9.32
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
'use strict';

/**
 * PHP htmlentities recreation in JavaScript
 * minor changes to match styleguide and remove unneeded functionality
 * @see https://github.com/kvz/phpjs
 */
var HTML_ENTITIES = function () {
  'use strict';

  var htmlEntities = {};

  htmlEntities.getHtmlTranslationTable = function (table, quoteStyle) {

    var entities = {},
        hashMap = {},
        decimal;
    var constMappingTable = {},
        constMappingQuoteStyle = {};
    var useTable = {},
        useQuoteStyle = {};

    // Translate arguments
    constMappingTable[0] = 'HTML_SPECIALCHARS';
    constMappingTable[1] = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quoteStyle) ? constMappingQuoteStyle[quoteStyle] : quoteStyle ? quoteStyle.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
      throw new Error('Table: ' + useTable + ' not supported');
      // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
      entities['160'] = '&nbsp;';
      entities['161'] = '&iexcl;';
      entities['162'] = '&cent;';
      entities['163'] = '&pound;';
      entities['164'] = '&curren;';
      entities['165'] = '&yen;';
      entities['166'] = '&brvbar;';
      entities['167'] = '&sect;';
      entities['168'] = '&uml;';
      entities['169'] = '&copy;';
      entities['170'] = '&ordf;';
      entities['171'] = '&laquo;';
      entities['172'] = '&not;';
      entities['173'] = '&shy;';
      entities['174'] = '&reg;';
      entities['175'] = '&macr;';
      entities['176'] = '&deg;';
      entities['177'] = '&plusmn;';
      entities['178'] = '&sup2;';
      entities['179'] = '&sup3;';
      entities['180'] = '&acute;';
      entities['181'] = '&micro;';
      entities['182'] = '&para;';
      entities['183'] = '&middot;';
      entities['184'] = '&cedil;';
      entities['185'] = '&sup1;';
      entities['186'] = '&ordm;';
      entities['187'] = '&raquo;';
      entities['188'] = '&frac14;';
      entities['189'] = '&frac12;';
      entities['190'] = '&frac34;';
      entities['191'] = '&iquest;';
      entities['192'] = '&Agrave;';
      entities['193'] = '&Aacute;';
      entities['194'] = '&Acirc;';
      entities['195'] = '&Atilde;';
      entities['196'] = '&Auml;';
      entities['197'] = '&Aring;';
      entities['198'] = '&AElig;';
      entities['199'] = '&Ccedil;';
      entities['200'] = '&Egrave;';
      entities['201'] = '&Eacute;';
      entities['202'] = '&Ecirc;';
      entities['203'] = '&Euml;';
      entities['204'] = '&Igrave;';
      entities['205'] = '&Iacute;';
      entities['206'] = '&Icirc;';
      entities['207'] = '&Iuml;';
      entities['208'] = '&ETH;';
      entities['209'] = '&Ntilde;';
      entities['210'] = '&Ograve;';
      entities['211'] = '&Oacute;';
      entities['212'] = '&Ocirc;';
      entities['213'] = '&Otilde;';
      entities['214'] = '&Ouml;';
      entities['215'] = '&times;';
      entities['216'] = '&Oslash;';
      entities['217'] = '&Ugrave;';
      entities['218'] = '&Uacute;';
      entities['219'] = '&Ucirc;';
      entities['220'] = '&Uuml;';
      entities['221'] = '&Yacute;';
      entities['222'] = '&THORN;';
      entities['223'] = '&szlig;';
      entities['224'] = '&agrave;';
      entities['225'] = '&aacute;';
      entities['226'] = '&acirc;';
      entities['227'] = '&atilde;';
      entities['228'] = '&auml;';
      entities['229'] = '&aring;';
      entities['230'] = '&aelig;';
      entities['231'] = '&ccedil;';
      entities['232'] = '&egrave;';
      entities['233'] = '&eacute;';
      entities['234'] = '&ecirc;';
      entities['235'] = '&euml;';
      entities['236'] = '&igrave;';
      entities['237'] = '&iacute;';
      entities['238'] = '&icirc;';
      entities['239'] = '&iuml;';
      entities['240'] = '&eth;';
      entities['241'] = '&ntilde;';
      entities['242'] = '&ograve;';
      entities['243'] = '&oacute;';
      entities['244'] = '&ocirc;';
      entities['245'] = '&otilde;';
      entities['246'] = '&ouml;';
      entities['247'] = '&divide;';
      entities['248'] = '&oslash;';
      entities['249'] = '&ugrave;';
      entities['250'] = '&uacute;';
      entities['251'] = '&ucirc;';
      entities['252'] = '&uuml;';
      entities['253'] = '&yacute;';
      entities['254'] = '&thorn;';
      entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
      entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
      entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';

    // ascii decimals to real symbols
    for (decimal in entities) {
      if (entities.hasOwnProperty(decimal)) {
        hashMap[String.fromCharCode(decimal)] = entities[decimal];
      }
    }

    return hashMap;
  };

  htmlEntities.encode = function (string, quoteStyle) {
    var hashMap = this.getHtmlTranslationTable('HTML_ENTITIES', quoteStyle);

    string = string === null ? '' : string + '';

    if (!hashMap) {
      return false;
    }

    if (quoteStyle && quoteStyle === 'ENT_QUOTES') {
      hashMap['\''] = '&#039;';
    }

    var regex = new RegExp('&(?:#\\d+|#x[\\da-f]+|[a-zA-Z][\\da-z]*);|[' + Object.keys(hashMap).join('')
    // replace regexp special chars
    .replace(/([()[\]{}\-.*+?^$|\/\\])/g, '\\$1') + ']', 'g');

    return string.replace(regex, function (ent) {
      var encoded = void 0;
      if (ent.length > 1) {
        encoded = ent;
      }
      encoded = hashMap[ent];
      return encoded;
    });
  };

  return htmlEntities;
}(HTML_ENTITIES || {});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
  _helpers.attrString = function (attrs) {
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
  _helpers.hyphenCase = function (str) {
    str = str.replace(/([A-Z])/g, function ($1) {
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
  _helpers.makeClassName = function (str) {
    str = str.replace(/[^\w\s\-]/gi, '');
    return _helpers.hyphenCase(str);
  };

  _helpers.safeAttrName = function (name) {
    var safeAttr = {
      className: 'class'
    };

    return safeAttr[name] || _helpers.hyphenCase(name);
  };

  _helpers.safeAttr = function (name, value) {
    name = _helpers.safeAttrName(name);

    var valString = window.JSON.stringify(HTML_ENTITIES.encode(value));

    value = value ? '=' + valString : '';
    return {
      name: name,
      value: value
    };
  };

  /**
   * Add a mobile class
   *
   * @return {string}
   */
  _helpers.mobileClass = function () {
    var mobileClass = '';
    (function (a) {
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
  _helpers.startMoving = function (event, ui) {
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
  _helpers.stopMoving = function (event, ui) {
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
  _helpers.beforeStop = function (event, ui) {
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
      cancelArray.push(_helpers.stopIndex + 1 === lastIndex);
    }

    _helpers.doCancel = cancelArray.some(function (elem) {
      return elem === true;
    });
  };

  /**
   * Make strings safe to be used as classes
   *
   * @param  {string} str string to be converted
   * @return {string}     converter string
   */
  _helpers.safename = function (str) {
    return str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
  };

  /**
   * Strips non-numbers from a number only input
   *
   * @param  {string} str string with possible number
   * @return {string}     string without numbers
   */
  _helpers.forceNumber = function (str) {
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
  _helpers.initTooltip = function (tt) {
    var tooltip = tt.find('.tooltip');
    tt.mouseenter(function () {
      if (tooltip.outerWidth() > 200) {
        tooltip.addClass('max-width');
      }
      tooltip.css('left', tt.width() + 14);
      tooltip.stop(true, true).fadeIn('fast');
    }).mouseleave(function () {
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
  _helpers.getTypes = function ($field) {
    return {
      type: $field.attr('type'),
      subtype: $('.fld-subtype', $field).val()
    };
  };

  // Remove null or undefined values
  _helpers.trimAttrs = function (attrs) {
    var xmlRemove = [null, undefined, '', false];
    for (var i in attrs) {
      if (_helpers.inArray(attrs[i], xmlRemove)) {
        delete attrs[i];
      }
    }
    return attrs;
  };

  // Remove null or undefined values
  _helpers.escapeAttrs = function (attrs) {
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
  _helpers.xmlSave = function (form) {
    var formDataNew = $(form).toXML(_helpers);
    if (window.JSON.stringify(formDataNew) === window.JSON.stringify(formBuilder.formData)) {
      return false;
    }
    formBuilder.formData = formDataNew;
  };

  _helpers.jsonSave = function () {
    opts.notify.warning('json data not available yet');
  };

  /**
   * Saves and returns formData
   * @return {XML|JSON}
   */
  _helpers.save = function () {
    var element = _helpers.getElement(),
        form = document.getElementById(opts.formID),
        formData;

    var doSave = {
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
  _helpers.getElement = function () {
    var element = false;
    if (formBuilder.element) {
      element = formBuilder.element;

      if (!element.id) {
        _helpers.makeId(element);
      }

      if (!element.onchange) {
        element.onchange = function () {
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
  _helpers.incrementId = function (id) {
    var split = id.lastIndexOf('-'),
        newFieldNumber = parseInt(id.substring(split + 1)) + 1,
        baseString = id.substring(0, split);

    return baseString + '-' + newFieldNumber;
  };

  _helpers.makeId = function () {
    var element = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    var epoch = new Date().getTime();

    return element.tagName + '-' + epoch;
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field jQuery wrapped dom object @todo, remove jQuery dependency
   */
  _helpers.updatePreview = function (field) {
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

    var subtype = $('.fld-subtype', field).val();
    if (subtype) {
      previewData.subtype = subtype;
    }

    var maxlength = $('.fld-maxlength', field).val();
    if (maxlength) {
      previewData.maxlength = maxlength;
    }

    previewData.className = $('.fld-className', field).val() || fieldData.className || '';

    var placeholder = $('.fld-placeholder', field).val();
    if (placeholder) {
      previewData.placeholder = placeholder;
    }

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
    }

    if (fieldType === 'checkbox') {
      previewData.toggle = $('.checkbox-toggle', field).is(':checked');
    }

    if (fieldType.match(/(select|checkbox-group|radio-group)/)) {
      previewData.values = [];
      previewData.multiple = $('[name="multiple"]', field).is(':checked');

      $('.sortable-options li', field).each(function () {
        var option = {};
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
  _helpers.fieldPreview = function (attrs) {
    var i,
        preview = '',
        epoch = new Date().getTime();
    attrs = jQuery.extend({}, attrs);
    attrs.type = attrs.subtype || attrs.type;
    var toggle = attrs.toggle ? 'toggle' : '';
    // attrs = _helpers.escapeAttrs(attrs);
    var attrsString = _helpers.attrString(attrs);

    switch (attrs.type) {
      case 'textarea':
      case 'rich-text':
        preview = '<textarea ' + attrsString + '></textarea>';
        break;
      case 'button':
      case 'submit':
        preview = '<button ' + attrsString + '>' + attrs.label + '</button>';
        break;
      case 'select':
        var options = '',
            multiple = attrs.multiple ? 'multiple' : '';
        attrs.values.reverse();
        if (attrs.placeholder) {
          options += '<option disabled selected>' + attrs.placeholder + '</option>';
        }
        for (i = attrs.values.length - 1; i >= 0; i--) {
          var selected = attrs.values[i].selected && !attrs.placeholder ? 'selected' : '';
          options += '<option value="' + attrs.values[i].value + '" ' + selected + '>' + attrs.values[i].label + '</option>';
        }
        preview = '<' + attrs.type + ' class="' + attrs.className + '" ' + multiple + '>' + options + '</' + attrs.type + '>';
        break;
      case 'checkbox-group':
      case 'radio-group':
        var type = attrs.type.replace('-group', ''),
            optionName = type + '-' + epoch;
        attrs.values.reverse();
        for (i = attrs.values.length - 1; i >= 0; i--) {
          var checked = attrs.values[i].selected ? 'checked' : '';
          var optionId = type + '-' + epoch + '-' + i;
          preview += '<div><input type="' + type + '" class="' + attrs.className + '" name="' + optionName + '" id="' + optionId + '" value="' + attrs.values[i].value + '" ' + checked + '/><label for="' + optionId + '">' + attrs.values[i].label + '</label></div>';
        }
        break;
      case 'text':
      case 'password':
      case 'email':
      case 'date':
      case 'file':
        preview = '<input ' + attrsString + '>';
        break;
      case 'color':
        preview = '<input type="' + attrs.type + '" class="' + attrs.className + '"> ' + opts.messages.selectColor;
        break;
      case 'hidden':
      case 'checkbox':
        preview = '<input type="' + attrs.type + '" ' + toggle + ' >';
        break;
      case 'autocomplete':
        preview = '<input class="ui-autocomplete-input ' + attrs.className + '" autocomplete="on">';
        break;
      default:
        attrsString = _helpers.attrString(attrs);
        preview = '<' + attrs.type + ' ' + attrsString + '>' + attrs.label + '</' + attrs.type + '>';
    }

    return preview;
  };

  // update preview to label
  _helpers.updateMultipleSelect = function () {
    $(document.getElementById(opts.formID)).on('change', 'input[name="multiple"]', function () {
      var options = $(this).parents('.field-options:eq(0)').find('.sortable-options input.option-selected');
      if (this.checked) {
        options.each(function () {
          $(this).prop('type', 'checkbox');
        });
      } else {
        options.each(function () {
          $(this).removeAttr('checked').prop('type', 'radio');
        });
      }
    });
  };

  _helpers.debounce = function (func) {
    var wait = arguments.length <= 1 || arguments[1] === undefined ? 250 : arguments[1];
    var immediate = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var timeout;
    return function () {
      var context = this,
          args = arguments;
      var later = function later() {
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

  _helpers.htmlEncode = function (value) {
    return $('<div/>').text(value).html();
  };

  _helpers.htmlDecode = function (value) {
    return $('<div/>').html(value).text();
  };

  _helpers.validateForm = function () {
    var $form = $(document.getElementById(opts.formID));

    var errors = [];
    // check for empty field labels
    $('input[name="label"], input[type="text"].option', $form).each(function () {
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
      }, 1000, function () {
        var targetID = $('.toggle-form', errors[0].field).attr('id');
        $('.toggle-form', errors[0].field).addClass('open').parent().next('.prev-holder').slideUp(250);
        $('#' + targetID + '-fld').slideDown(250, function () {
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
    add: function add(field) {
      var title = opts.messages.fieldNonEditable;

      if (title) {
        var tt = _helpers.markup('p', title, { className: _helpers.disabledTT.className });
        field.append(tt);
      }
    },
    remove: function remove(field) {
      $('.frmb-tt', field).remove();
    }
  };

  _helpers.classNames = function (field, previewData) {
    var noFormControl = ['checkbox', 'checkbox-group', 'radio-group'],
        blockElements = ['header', 'paragraph', 'button'],
        i = void 0;

    for (i = blockElements.length - 1; i >= 0; i--) {
      blockElements = blockElements.concat(opts.messages.subtypes[blockElements[i]]);
    }

    noFormControl = noFormControl.concat(blockElements);

    var type = previewData.type;
    var style = previewData.style;
    var className = field[0].querySelector('.fld-className').value;
    var classes = [].concat(className.split(' ')).reverse();
    var types = {
      button: 'btn',
      submit: 'btn'
    };

    var primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = classes.length - 1; i >= 0; i--) {
          var re = new RegExp('(?:^|\s)' + primaryType + '-(.*?)(?:\s|$)+', 'g');
          var match = classes[i].match(re);
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

  _helpers.markup = function (tag) {
    var content = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var attrs = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var contentType = void 0,
        field = document.createElement(tag),
        getContentType = function getContentType(content) {
      return Array.isArray(content) ? 'array' : typeof content === 'undefined' ? 'undefined' : _typeof(content);
    },
        appendContent = {
      string: function string(content) {
        field.innerHTML = content;
      },
      object: function object(content) {
        return field.appendChild(content);
      },
      array: function array(content) {
        for (var i = 0; i < content.length; i++) {
          contentType = getContentType(content[i]);
          appendContent[contentType](content[i]);
        }
      }
    };

    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        if (attrs[attr]) {
          var name = _helpers.safeAttrName(attr);
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
  _helpers.closeConfirm = function (overlay, dialog) {
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
  _helpers.editorLayout = function (controlPosition) {
    var layoutMap = {
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
  _helpers.showOverlay = function () {
    var overlay = _helpers.markup('div', null, {
      className: 'form-builder-overlay'
    });
    document.body.appendChild(overlay);
    overlay.classList.add('visible');

    overlay.onclick = function () {
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
  _helpers.confirm = function (message, yesAction) {
    var coords = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var className = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

    var overlay = _helpers.showOverlay();
    var yes = _helpers.markup('button', opts.messages.yes, { className: 'yes btn btn-success btn-sm' }),
        no = _helpers.markup('button', opts.messages.no, { className: 'no btn btn-danger btn-sm' });

    no.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function () {
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
  _helpers.dialog = function (content) {
    var coords = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var className = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

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
  _helpers.removeAllfields = function () {
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

    if (!markEmptyArray.some(function (elem) {
      return elem === true;
    })) {
      form.parentElement.classList.add('empty');
    }

    form.classList.add('removing');

    var outerHeight = 0;
    $fields.each(function () {
      outerHeight += $(this).outerHeight() + 3;
    });

    fields[0].style.marginTop = -outerHeight + 'px';

    setTimeout(function () {
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
  _helpers.setFieldOrder = function ($cbUL) {
    if (!opts.sortableControls) {
      return false;
    }
    var fieldOrder = {};
    $cbUL.children().each(function (index, element) {
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
  _helpers.orderFields = function (frmbFields) {
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
      fieldOrder = Object.keys(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    var newOrderFields = [];

    for (var i = fieldOrder.length - 1; i >= 0; i--) {
      var field = frmbFields.filter(function (field) {
        return field.attrs.type === fieldOrder[i];
      })[0];
      newOrderFields.push(field);
    }

    return newOrderFields.filter(Boolean);
  };

  // forEach that can be used on nodeList
  _helpers.forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // cleaner syntax for testing indexOf element
  _helpers.inArray = function (needle, haystack) {
    return haystack.indexOf(needle) !== -1;
  };

  /**
   * Remove duplicates from an array of elements
   * @param  {array} arrArg array with possible duplicates
   * @return {array}        array with only unique values
   */
  _helpers.unique = function (array) {
    return array.filter(function (elem, pos, arr) {
      return arr.indexOf(elem) === pos;
    });
  };

  return _helpers;
}
'use strict';

function formBuilderEventsFn() {
  'use strict';

  var events = {};

  events.loaded = new Event('loaded');
  events.viewData = new Event('viewData');
  events.userDeclined = new Event('userDeclined');
  events.modalClosed = new Event('modalClosed');
  events.formSaved = new Event('formSaved');

  return events;
}
'use strict';

(function ($) {
  'use strict';

  var Toggle = function Toggle(element, options) {

    var defaults = {
      theme: 'fresh',
      labels: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options),
        $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = '<div class="kct-on">' + opts.labels.on + '</div>',
        kctOff = '<div class="kct-off">' + opts.labels.off + '</div>',
        kctHandle = '<div class="kct-handle"></div>',
        kctInner = '<div class="kct-inner">' + kctOn + kctHandle + kctOff + '</div>';

    $kcToggle.append(kctInner);

    $kcToggle.click(function () {
      element.attr('checked', !element.attr('checked'));
      $(this).toggleClass('on');
    });
  };

  $.fn.kcToggle = function (options) {
    var toggle = this;
    return toggle.each(function () {
      var element = $(this);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
})(jQuery);
'use strict';

(function ($) {
  var FormBuilder = function FormBuilder(options, element) {
    var formBuilder = this;

    var defaults = {
      controlPosition: 'right',
      controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'radio-group', 'select', 'text', 'textarea'],
      dataType: 'xml',
      /**
       * Field types to be disabled
       * ['text','select','textarea','radio-group','hidden','file','date','checkbox-group','checkbox','button','autocomplete']
       */
      disableFields: ['autocomplete', 'hidden'],
      // Uneditable fields or other content you would like to appear before and after regular fields:
      append: false,
      prepend: false,
      // array of objects with fields values
      // ex:
      // defaultFields: [{
      //   label: 'First Name',
      //   name: 'first-name',
      //   required: 'true',
      //   description: 'Your first name',
      //   type: 'text'
      // }, {
      //   label: 'Phone',
      //   name: 'phone',
      //   description: 'How can we reach you?',
      //   type: 'text'
      // }],
      defaultFields: [],
      fieldRemoveWarn: false,
      roles: {
        1: 'Administrator'
      },
      messages: {
        addOption: 'Add Option',
        allFieldsRemoved: 'All fields were removed.',
        allowSelect: 'Allow Select',
        autocomplete: 'Autocomplete',
        button: 'Button',
        cannotBeEmpty: 'This field cannot be empty',
        checkboxGroup: 'Checkbox Group',
        checkbox: 'Checkbox',
        checkboxes: 'Checkboxes',
        className: 'Class',
        clearAllMessage: 'Are you sure you want to clear all fields?',
        clearAll: 'Clear',
        close: 'Close',
        content: 'Content',
        copy: 'Copy To Clipboard',
        dateField: 'Date Field',
        description: 'Help Text',
        descriptionField: 'Description',
        devMode: 'Developer Mode',
        editNames: 'Edit Names',
        editorTitle: 'Form Elements',
        editXML: 'Edit XML',
        fieldDeleteWarning: false,
        fieldVars: 'Field Variables',
        fieldNonEditable: 'This field cannot be edited.',
        fieldRemoveWarning: 'Are you sure you want to remove this field?',
        fileUpload: 'File Upload',
        formUpdated: 'Form Updated',
        getStarted: 'Drag a field from the right to this area',
        header: 'Header',
        hide: 'Edit',
        hidden: 'Hidden Input',
        label: 'Label',
        labelEmpty: 'Field Label cannot be empty',
        limitRole: 'Limit access to one or more of the following roles:',
        mandatory: 'Mandatory',
        maxlength: 'Max Length',
        minOptionMessage: 'This field requires a minimum of 2 options',
        name: 'Name',
        no: 'No',
        off: 'Off',
        on: 'On',
        option: 'Option',
        optional: 'optional',
        optionLabelPlaceholder: 'Label',
        optionValuePlaceholder: 'Value',
        optionEmpty: 'Option value required',
        paragraph: 'Paragraph',
        placeholder: 'Placeholder',
        placeholders: {
          value: 'Value',
          label: 'Label',
          text: '',
          textarea: '',
          email: 'Enter you email',
          placeholder: '',
          className: 'space separated classes',
          password: 'Enter your password'
        },
        preview: 'Preview',
        radioGroup: 'Radio Group',
        radio: 'Radio',
        removeMessage: 'Remove Element',
        remove: '&#215;',
        required: 'Required',
        richText: 'Rich Text Editor',
        roles: 'Access',
        save: 'Save',
        selectOptions: 'Options',
        select: 'Select',
        selectColor: 'Select Color',
        selectionsMessage: 'Allow Multiple Selections',
        size: 'Size',
        sizes: {
          xs: 'Extra Small',
          sm: 'Small',
          m: 'Default',
          lg: 'Large'
        },
        style: 'Style',
        styles: {
          btn: {
            'default': 'Default',
            danger: 'Danger',
            info: 'Info',
            primary: 'Primary',
            success: 'Success',
            warning: 'Warning'
          }
        },
        subtype: 'Type',
        subtypes: {
          text: ['text', 'password', 'email', 'color'],
          button: ['button', 'submit'],
          header: ['h1', 'h2', 'h3'],
          paragraph: ['p', 'address', 'blockquote', 'canvas', 'output']
        },
        text: 'Text Field',
        textArea: 'Text Area',
        toggle: 'Toggle',
        warning: 'Warning!',
        viewXML: '&lt;/&gt;',
        yes: 'Yes'
      },
      notify: {
        error: function error(message) {
          return console.error(message);
        },
        success: function success(message) {
          return console.log(message);
        },
        warning: function warning(message) {
          return console.warn(message);
        }
      },
      sortableControls: false,
      prefix: 'form-builder-'
    };

    // @todo function to set parent types for subtypes
    defaults.messages.subtypes.password = defaults.messages.subtypes.text;
    defaults.messages.subtypes.email = defaults.messages.subtypes.text;
    defaults.messages.subtypes.color = defaults.messages.subtypes.text;
    defaults.messages.subtypes.submit = defaults.messages.subtypes.button;

    var opts = $.extend(true, defaults, options),
        elem = $(element),
        frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

    opts.formID = frmbID;

    formBuilder.element = element;

    var $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');
    var _helpers = formBuilderHelpersFn(opts, formBuilder);

    formBuilder.layout = _helpers.editorLayout(opts.controlPosition);

    var lastID = frmbID + '-fld-1',
        boxID = frmbID + '-control-box';

    // create array of field objects to cycle through
    var frmbFields = [{
      label: opts.messages.textArea,
      attrs: {
        type: 'textarea',
        className: 'text-area',
        name: 'textarea'
      }
    }, {
      label: opts.messages.text,
      attrs: {
        type: 'text',
        className: 'text-input',
        name: 'text-input'
      }
    }, {
      label: opts.messages.select,
      attrs: {
        type: 'select',
        className: 'select',
        name: 'select'
      }
    }, {
      label: opts.messages.radioGroup,
      attrs: {
        type: 'radio-group',
        className: 'radio-group',
        name: 'radio-group'
      }
    }, {
      label: opts.messages.paragraph,
      attrs: {
        type: 'paragraph',
        className: 'paragraph'
      }
    }, {
      label: opts.messages.hidden,
      attrs: {
        type: 'hidden',
        className: 'hidden-input',
        name: 'hidden-input'
      }
    }, {
      label: opts.messages.header,
      attrs: {
        type: 'header',
        className: 'header'
      }
    }, {
      label: opts.messages.fileUpload,
      attrs: {
        type: 'file',
        className: 'file-input',
        name: 'file-input'
      }
    }, {
      label: opts.messages.dateField,
      attrs: {
        type: 'date',
        className: 'calendar',
        name: 'date-input'
      }
    }, {
      label: opts.messages.checkboxGroup,
      attrs: {
        type: 'checkbox-group',
        className: 'checkbox-group',
        name: 'checkbox-group'
      }
    }, {
      label: opts.messages.checkbox,
      attrs: {
        type: 'checkbox',
        className: 'checkbox',
        name: 'checkbox'
      }
    }, {
      label: opts.messages.button,
      attrs: {
        type: 'button',
        className: 'button-input',
        name: 'button'
      }
    }, {
      label: opts.messages.autocomplete,
      attrs: {
        type: 'autocomplete',
        className: 'autocomplete',
        name: 'autocomplete'
      }
    }];

    frmbFields = _helpers.orderFields(frmbFields);

    if (opts.disableFields) {
      // remove disabledFields
      frmbFields = frmbFields.filter(function (field) {
        return !_helpers.inArray(field.attrs.type, opts.disableFields);
      });
    }

    // Create draggable fields for formBuilder

    var cbUl = _helpers.markup('ul', null, { id: boxID, className: 'frmb-control' });

    if (opts.sortableControls) {
      cbUl.classList.add('sort-enabled');
    }

    var $cbUL = $(cbUl);

    // Loop through
    for (var i = frmbFields.length - 1; i >= 0; i--) {

      var $field = $('<li/>', {
        'class': 'icon-' + frmbFields[i].attrs.className,
        'type': frmbFields[i].type,
        'name': frmbFields[i].className,
        'label': frmbFields[i].label
      });

      $field.data('newFieldData', frmbFields[i]);

      var typeLabel = _helpers.markup('span', frmbFields[i].label);
      $field.html(typeLabel).appendTo($cbUL);
    }

    var viewDataText = opts.dataType === 'xml' ? opts.messages.viewXML : opts.messages.viewJSON;

    // Build our headers and action links
    var viewData = _helpers.markup('button', viewDataText, {
      id: frmbID + '-view-data',
      type: 'button',
      className: 'view-data btn btn-default'
    }),
        clearAll = _helpers.markup('button', opts.messages.clearAll, {
      id: frmbID + '-clear-all',
      type: 'button',
      className: 'clear-all btn btn-default'
    }),
        saveAll = _helpers.markup('button', opts.messages.save, {
      className: 'btn btn-primary ' + opts.prefix + 'save',
      id: frmbID + '-save',
      type: 'button'
    }),
        formActions = _helpers.markup('div', [clearAll, viewData, saveAll], {
      className: 'form-actions btn-group'
    }).outerHTML;

    // Sortable fields
    $sortableFields.sortable({
      cursor: 'move',
      opacity: 0.9,
      revert: 150,
      beforeStop: _helpers.beforeStop,
      start: _helpers.startMoving,
      stop: _helpers.stopMoving,
      cancel: 'input, select, .disabled, .form-group, .btn',
      placeholder: 'frmb-placeholder'
    });

    // ControlBox with different fields
    $cbUL.sortable({
      helper: 'clone',
      opacity: 0.9,
      connectWith: $sortableFields,
      cursor: 'move',
      placeholder: 'ui-state-highlight',
      start: _helpers.startMoving,
      stop: _helpers.stopMoving,
      revert: 150,
      beforeStop: _helpers.beforeStop,
      update: function update(event, ui) {
        if (_helpers.doCancel) {
          return false;
        }
        event = event;
        if (ui.item.parent()[0] === $sortableFields[0]) {
          prepFieldVars(ui.item, true);
          _helpers.doCancel = true;
        } else {
          _helpers.setFieldOrder($cbUL);
          _helpers.doCancel = !opts.sortableControls;
        }
      }
    });

    var $stageWrap = $('<div/>', {
      id: frmbID + '-stage-wrap',
      'class': 'stage-wrap ' + formBuilder.layout.stage
    });

    var $formWrap = $('<div/>', {
      id: frmbID + '-form-wrap',
      'class': 'form-wrap form-builder' + _helpers.mobileClass()
    });

    elem.before($stageWrap).appendTo($stageWrap);

    var cbWrap = $('<div/>', {
      id: frmbID + '-cb-wrap',
      'class': 'cb-wrap ' + formBuilder.layout.controls
    }).append($cbUL[0], formActions);

    $stageWrap.append($sortableFields, cbWrap);
    $stageWrap.before($formWrap);
    $formWrap.append($stageWrap, cbWrap);

    var saveAndUpdate = _helpers.debounce(function (evt) {
      if (evt) {
        if (evt.type === 'keyup' && this.name === 'className') {
          return false;
        }
      }

      var $field = $(this).parents('.form-field:eq(0)');
      _helpers.updatePreview($field);
      _helpers.save();
    });

    // Save field on change
    $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

    // Add append and prepend options if necessary
    var nonEditableFields = function nonEditableFields() {
      var cancelArray = [];

      if (opts.prepend && !$('.disabled.prepend', $sortableFields).length) {
        var prependedField = _helpers.markup('li', opts.prepend, { className: 'disabled prepend' });
        cancelArray.push(true);
        $sortableFields.prepend(prependedField);
      }

      if (opts.append && !$('.disabled.append', $sortableFields).length) {
        var appendedField = _helpers.markup('li', opts.append, { className: 'disabled append' });
        cancelArray.push(true);
        $sortableFields.append(appendedField);
      }

      if (cancelArray.some(function (elem) {
        return elem === true;
      })) {
        $stageWrap.removeClass('empty');
      }
    };

    var prepFieldVars = function prepFieldVars($field) {
      var isNew = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var field = {};

      if ($field instanceof jQuery) {
        var fieldData = $field.data('newFieldData');
        if (fieldData) {
          field = fieldData.attrs;
          field.label = fieldData.label;
        } else {
          var attrs = $field[0].attributes;
          if (!isNew) {
            field.values = $field.children().map(function (index, elem) {
              return {
                label: $(elem).text(),
                value: $(elem).attr('value'),
                selected: Boolean($(elem).attr('selected'))
              };
            });
          }
          for (var i = attrs.length - 1; i >= 0; i--) {
            field[attrs[i].name] = attrs[i].value;
          }
        }
      } else {
        field = $field;
      }

      field.label = _helpers.htmlEncode(field.label);
      field.name = isNew ? nameAttr(field) : field.name;
      field.role = field.role;
      field.className = field.className || field.class;
      field.required = field.required === 'true' || field.required === true;
      field.maxlength = field.maxlength;
      field.toggle = field.toggle;
      field.multiple = field.type.match(/(checkbox-group)/);
      field.description = field.description !== undefined ? _helpers.htmlEncode(field.description) : '';

      var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
      if (match) {
        field.style = match[1];
      }

      appendNewField(field);
      $stageWrap.removeClass('empty');
    };

    // Parse saved XML template data
    var getXML = function getXML() {
      var xml = '';
      if (formBuilder.formData) {
        xml = formBuilder.formData;
      } else if (elem.val() !== '') {
        xml = $.parseXML(formBuilder.element.value.trim());
      } else {
        xml = false;
      }

      var fields = $(xml).find('field');
      if (fields.length > 0) {
        formBuilder.formData = xml;
        fields.each(function () {
          prepFieldVars($(this));
        });
      } else if (!xml) {
        // Load default fields if none are set
        if (opts.defaultFields && opts.defaultFields.length) {
          opts.defaultFields.reverse();
          for (var i = opts.defaultFields.length - 1; i >= 0; i--) {
            prepFieldVars(opts.defaultFields[i]);
          }
          $stageWrap.removeClass('empty');
          _helpers.save();
        } else if (!opts.prepend && !opts.append) {
          $stageWrap.addClass('empty').attr('data-content', opts.messages.getStarted);
        }
      }

      $('li.form-field:not(.disabled)', $sortableFields).each(function () {
        _helpers.updatePreview($(this));
      });

      nonEditableFields();
    };

    var loadData = function loadData() {

      var doLoadData = {
        xml: getXML,
        json: function json() {
          console.log('coming soon');
        }
      };

      doLoadData[opts.dataType]();
    };

    // callback to track disabled tooltips
    $sortableFields.on('mousemove', 'li.disabled', function (e) {
      $('.frmb-tt', this).css({
        left: e.offsetX - 16,
        top: e.offsetY - 34
      });
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseenter', 'li.disabled', function () {
      _helpers.disabledTT.add($(this));
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseleave', 'li.disabled', function () {
      _helpers.disabledTT.remove($(this));
    });

    var nameAttr = function nameAttr(field) {
      var epoch = new Date().getTime();
      return field.type + '-' + epoch;
    };

    // multi-line textarea
    var appendTextarea = function appendTextarea(values) {
      appendFieldLi(opts.messages.textArea, advFields(values), values);
    };

    var appendInput = function appendInput(values) {
      var type = values.type || 'text';
      appendFieldLi(opts.messages[type], advFields(values), values);
    };

    /**
     * Add data for field with options [select, checkbox-group, radio-group]
     *
     * @todo   refactor this nasty crap, its actually painful to look at
     * @param  {object} values
     */
    var appendSelectList = function appendSelectList(values) {
      if (!values.values || !values.values.length) {
        values.values = [{
          selected: true
        }, {
          selected: false
        }];

        values.values = values.values.map(function (elem, index) {
          elem.label = opts.messages.option + ' ' + (index + 1);
          elem.value = _helpers.hyphenCase(elem.label);
          return elem;
        });
      }

      var field = '';

      field += advFields(values);
      field += '<div class="form-group field-options">';
      field += '<label class="false-label">' + opts.messages.selectOptions + '</label>';
      field += '<div class="sortable-options-wrap">';
      if (values.type === 'select') {
        field += '<div class="allow-multi">';
        field += '<input type="checkbox" id="multiple_' + lastID + '" name="multiple"' + (values.multiple ? 'checked="checked"' : '') + '>';
        field += '<label class="multiple" for="multiple_' + lastID + '">' + opts.messages.selectionsMessage + '</label>';
        field += '</div>';
      }
      field += '<ol class="sortable-options">';
      for (i = 0; i < values.values.length; i++) {
        field += selectFieldOptions(values.name, values.values[i], values.values[i].selected, values.multiple);
      }
      field += '</ol>';
      var addOption = _helpers.markup('a', opts.messages.addOption, { className: 'add add-opt' });
      field += _helpers.markup('div', addOption, { className: 'option-actions' }).outerHTML;
      field += '</div>';
      field += '</div>';
      appendFieldLi(opts.messages.select, field, values);

      $('.sortable-options').sortable(); // making the dynamically added option fields sortable.
    };

    var appendNewField = function appendNewField(values) {

      // TODO: refactor to move functions into this object
      var appendFieldType = {
        'select': appendSelectList,
        'rich-text': appendTextarea,
        'textarea': appendTextarea,
        'radio-group': appendSelectList,
        'checkbox-group': appendSelectList
      };

      values = values || '';

      if (appendFieldType[values.type]) {
        appendFieldType[values.type](values);
      } else {
        appendInput(values);
      }
    };

    /**
     * Build the editable properties for the field
     * @param  {object} values configuration object for advanced fields
     * @return {String}        markup for advanced fields
     */
    var advFields = function advFields(values) {
      var advFields = [],
          key,
          roles = values.role !== undefined ? values.role.split(',') : [];

      // var fieldLabelLabel = _helpers.markup('label', opts.messages.label);
      // var fieldLabelInput = _helpers.markup('input', null, {
      //   type: 'text',
      //   name: 'label',
      //   value: values.label,
      //   className: 'fld-label form-control'
      // });
      // var fieldLabel = _helpers.markup('div', [fieldLabelLabel, fieldLabelInput], {
      //   className: 'form-group label-wrap'
      // });
      advFields.push(textAttribute('label', values));

      // advFields.push(fieldLabel.outerHTML);

      values.size = values.size || 'm';
      values.style = values.style || 'default';

      advFields.push(fieldDescription(values));

      advFields.push(subTypeField(values));

      advFields.push(btnStyles(values.style, values.type));

      // Placeholder
      advFields.push(textAttribute('placeholder', values));
      // Class
      advFields.push(textAttribute('className', values));

      advFields.push(textAttribute('name', values));

      advFields.push('<div class="form-group access-wrap"><label>' + opts.messages.roles + '</label>');

      advFields.push('<input type="checkbox" name="enable_roles" value="" ' + (values.role !== undefined ? 'checked' : '') + ' id="enable_roles-' + lastID + '"/> <label for="enable_roles-' + lastID + '" class="roles-label">' + opts.messages.limitRole + '</label>');
      advFields.push('<div class="available-roles" ' + (values.role !== undefined ? 'style="display:block"' : '') + '>');

      for (key in opts.roles) {
        if ($.inArray(key, ['date', '4']) === -1) {
          advFields.push('<input type="checkbox" name="roles[]" value="' + key + '" id="fld-' + lastID + '-roles-' + key + '" ' + ($.inArray(key, roles) !== -1 ? 'checked' : '') + ' class="roles-field" /><label for="fld-' + lastID + '-roles-' + key + '">' + opts.roles[key] + '</label><br/>');
        }
      }
      advFields.push('</div></div>');

      advFields.push(textAttribute('maxlength', values));

      return advFields.join('');
    };

    /**
     * Description meta for field
     *
     * @param  {Object} values field values
     * @return {String}        markup for attribute, @todo change to actual Node
     */
    var fieldDescription = function fieldDescription(values) {
      var noDescFields = ['header', 'paragraph', 'button'],
          noMakeAttr = [],
          descriptionField = '';

      noDescFields = noDescFields.concat(opts.messages.subtypes.header, opts.messages.subtypes.paragraph);

      if (noDescFields.indexOf(values.type) === -1) {
        noMakeAttr.push(true);
      }

      if (noMakeAttr.some(function (elem) {
        return elem === true;
      })) {
        var fieldDescLabel = _helpers.markup('label', opts.messages.description, { 'for': 'description-' + lastID }),
            fieldDescInput = _helpers.markup('input', null, {
          type: 'text',
          className: 'fld-description form-control',
          name: 'description',
          id: 'description-' + lastID,
          value: values.description
        }),
            fieldDesc = _helpers.markup('div', [fieldDescLabel, fieldDescInput], {
          'class': 'form-group description-wrap'
        });
        descriptionField = fieldDesc.outerHTML;
      }

      return descriptionField;
    };

    /**
     * Changes a fields type
     *
     * @param  {Object} values
     * @return {String}      markup for type <select> input
     */
    var subTypeField = function subTypeField(values) {
      var subTypes = opts.messages.subtypes,
          type = values.type,
          subtype = values.subtype || '',
          subTypeField = '',
          selected = void 0;

      if (subTypes[type]) {
        var subTypeLabel = '<label>' + opts.messages.subtype + '</label>';
        subTypeField += '<select name="subtype" class="fld-subtype form-control" id="subtype-' + lastID + '">';
        subTypes[type].forEach(function (element) {
          selected = subtype === element ? 'selected' : '';
          subTypeField += '<option value="' + element + '" ' + selected + '>' + element + '</option>';
        });
        subTypeField += '</select>';
        subTypeField = '<div class="form-group subtype-wrap">' + subTypeLabel + ' ' + subTypeField + '</div>';
      }

      return subTypeField;
    };

    var btnStyles = function btnStyles(style, type) {
      var tags = {
        button: 'btn'
      },
          styles = opts.messages.styles[tags[type]],
          styleField = '';

      if (styles) {
        var styleLabel = '<label>' + opts.messages.style + '</label>';
        styleField += '<input value="' + style + '" name="style" type="hidden" class="btn-style">';
        styleField += '<div class="btn-group" role="group">';

        Object.keys(opts.messages.styles[tags[type]]).forEach(function (element) {
          var active = style === element ? 'active' : '';
          styleField += '<button value="' + element + '" type="' + type + '" class="' + active + ' btn-xs ' + tags[type] + ' ' + tags[type] + '-' + element + '">' + opts.messages.styles[tags[type]][element] + '</button>';
        });

        styleField += '</div>';

        styleField = '<div class="form-group style-wrap">' + styleLabel + ' ' + styleField + '</div>';
      }

      return styleField;
    };

    /**
     * Generate some text inputs for field attributes, **will be replaced**
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String}
     */
    var textAttribute = function textAttribute(attribute, values) {
      var placeholderFields = ['text', 'textarea', 'select'];
      var noName = ['header'];

      var textArea = ['paragraph'];

      var noMaxlength = ['checkbox', 'select', 'checkbox-group', 'date', 'autocomplete', 'radio-group', 'hidden', 'button', 'header'];

      var attrVal = attribute === 'label' ? values.label : values[attribute] || '';
      var attrLabel = opts.messages[attribute];
      if (attribute === 'label' && _helpers.inArray(values.type, textArea)) {
        attrLabel = opts.messages.content;
      }

      noName = noName.concat(opts.messages.subtypes.header, textArea);
      noMaxlength = noMaxlength.concat(textArea);

      var placeholders = opts.messages.placeholders,
          placeholder = placeholders[attribute] || '',
          attributefield = '',
          noMakeAttr = [];

      // Field has placeholder attribute
      if (attribute === 'placeholder' && !_helpers.inArray(values.type, placeholderFields)) {
        noMakeAttr.push(true);
      }

      // Field has name attribute
      if (attribute === 'name' && _helpers.inArray(values.type, noName)) {
        noMakeAttr.push(true);
      }

      // Field has maxlength attribute
      if (attribute === 'maxlength' && _helpers.inArray(values.type, noMaxlength)) {
        noMakeAttr.push(true);
      }

      if (!noMakeAttr.some(function (elem) {
        return elem === true;
      })) {
        var attributeLabel = '<label>' + attrLabel + '</label>';

        if (attribute === 'label' && _helpers.inArray(values.type, textArea)) {
          attributefield += '<textarea name="' + attribute + '" placeholder="' + placeholder + '" class="fld-' + attribute + ' form-control" id="' + attribute + '-' + lastID + '">' + attrVal + '</textarea>';
        } else {
          attributefield += '<input type="text" value="' + attrVal + '" name="' + attribute + '" placeholder="' + placeholder + '" class="fld-' + attribute + ' form-control" id="' + attribute + '-' + lastID + '">';
        }

        attributefield = '<div class="form-group ' + attribute + '-wrap">' + attributeLabel + ' ' + attributefield + '</div>';
      }

      return attributefield;
    };

    var requiredField = function requiredField(values) {
      var noRequire = ['header', 'paragraph', 'button'],
          noMake = [],
          requireField = '';

      if (_helpers.inArray(values.type, noRequire)) {
        noMake.push(true);
      }

      if (!noMake.some(function (elem) {
        return elem === true;
      })) {

        requireField += '<div class="form-group">';
        requireField += '<label>&nbsp;</label>';
        var _requiredField = _helpers.markup('input', null, {
          className: 'required',
          type: 'checkbox',
          name: 'required-' + lastID,
          id: 'required-' + lastID,
          value: 1
        });

        _requiredField.defaultChecked = values.required;

        requireField += _requiredField.outerHTML;
        requireField += _helpers.markup('label', opts.messages.required, {
          className: 'required-label',
          'for': 'required-' + lastID
        }).outerHTML;
        requireField += '</div>';
      }
      return requireField;
    };

    // Append the new field to the editor
    var appendFieldLi = function appendFieldLi(title, field, values) {
      var labelVal = $(field).find('input[name="label"]').val(),
          label = labelVal ? labelVal : title;

      var delBtn = _helpers.markup('a', opts.messages.remove, {
        id: 'del_' + lastID,
        className: 'del-button btn delete-confirm',
        title: opts.messages.removeMessage
      }),
          toggleBtn = _helpers.markup('a', null, {
        id: lastID + '-edit',
        className: 'toggle-form btn icon-pencil',
        title: opts.messages.hide
      }),
          required = values.required,
          toggle = values.toggle || undefined,
          tooltip = values.description !== '' ? '<span class="tooltip-element" tooltip="' + values.description + '">?</span>' : '';

      var liContents = _helpers.markup('div', [toggleBtn, delBtn], { className: 'field-actions' }).outerHTML;

      liContents += '<label class="field-label">' + label + '</label>' + tooltip + '<span class="required-asterisk" ' + (required ? 'style="display:inline"' : '') + '> *</span>';
      liContents += _helpers.markup('div', '', { className: 'prev-holder' }).outerHTML;
      liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
      liContents += '<div class="form-elements">';

      liContents += requiredField(values);

      if (values.type === 'checkbox') {
        liContents += '<div class="form-group">';
        liContents += '<label>&nbsp;</label>';
        liContents += '<input class="checkbox-toggle" type="checkbox" value="1" name="toggle-' + lastID + '" id="toggle-' + lastID + '"' + (toggle === 'true' ? ' checked' : '') + ' /><label class="toggle-label" for="toggle-' + lastID + '">' + opts.messages.toggle + '</label>';
        liContents += '</div>';
      }
      liContents += field;
      liContents += _helpers.markup('a', opts.messages.close, { className: 'close-field' }).outerHTML;

      liContents += '</div>';
      liContents += '</div>';

      var li = _helpers.markup('li', liContents, {
        'class': values.type + '-field form-field',
        'type': values.type,
        id: lastID
      }),
          $li = $(li);

      $li.data('fieldData', { attrs: values });

      if (typeof _helpers.stopIndex !== 'undefined') {
        $('> li', $sortableFields).eq(_helpers.stopIndex).after($li);
      } else {
        $sortableFields.append($li);
      }

      _helpers.updatePreview($li);

      $(document.getElementById('frm-' + lastID + '-item')).hide().slideDown(250);

      lastID = _helpers.incrementId(lastID);
    };

    // Select field html, since there may be multiple
    var selectFieldOptions = function selectFieldOptions(name, values, selected, multipleSelect) {
      var optionInputType = {
        selected: multipleSelect ? 'checkbox' : 'radio'
      };

      var defaultOptionData = {
        selected: selected,
        label: '',
        value: ''
      };

      var optionData = Object.assign(defaultOptionData, values),
          optionInputs = [];

      for (var prop in optionData) {
        if (optionData.hasOwnProperty(prop)) {
          var attrs = {
            type: optionInputType[prop] || 'text',
            'class': 'option-' + prop,
            placeholder: opts.messages.placeholders[prop],
            value: optionData[prop],
            name: name
          };
          var option = _helpers.markup('input', null, attrs);
          if (prop === 'selected') {
            option.checked = optionData.selected;
          }
          optionInputs.push(option);
        }
      }

      var removeAttrs = {
        className: 'remove btn',
        title: opts.messages.removeMessage
      };
      optionInputs.push(_helpers.markup('a', opts.messages.remove, removeAttrs));

      var field = _helpers.markup('li', optionInputs);

      return field.outerHTML;
    };

    // ---------------------- UTILITIES ---------------------- //

    // delete options
    $sortableFields.on('click touchstart', '.remove', function (e) {
      var $field = $(this).parents('.form-field:eq(0)');
      e.preventDefault();
      var optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
      if (optionsCount <= 2) {
        opts.notify.error('Error: ' + opts.messages.minOptionMessage);
      } else {
        $(this).parent('li').slideUp('250', function () {
          $(this).remove();
        });
      }
      saveAndUpdate.call($field);
    });

    // touch focus
    $sortableFields.on('touchstart', 'input', function (e) {
      if (e.handled !== true) {
        if ($(this).attr('type') === 'checkbox') {
          $(this).trigger('click');
        } else {
          $(this).focus();
          var fieldVal = $(this).val();
          $(this).val(fieldVal);
        }
      } else {
        return false;
      }
    });

    // toggle fields
    $sortableFields.on('click touchstart', '.toggle-form', function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (e.handled !== true) {
        var targetID = $(this).parents('.form-field:eq(0)').attr('id');
        _helpers.toggleEdit(targetID);
        e.handled = true;
      } else {
        return false;
      }
    });

    /**
     * Toggles the edit mode for the given field
     * @param  {String} fieldId
     */
    _helpers.toggleEdit = function (fieldId) {
      var field = document.getElementById(fieldId),
          toggleBtn = $('.toggle-form', field),
          editMode = $('.frm-holder', field);
      field.classList.toggle('editing');
      toggleBtn.toggleClass('open');
      $('.prev-holder', field).slideToggle(250);
      editMode.slideToggle(250);
    };

    // update preview to label
    $sortableFields.on('keyup change', '[name="label"]', function () {
      $('.field-label', $(this).closest('li')).text($(this).val());
    });

    // remove error styling when users tries to correct mistake
    $sortableFields.delegate('input.error', 'keyup', function () {
      $(this).removeClass('error');
    });

    // update preview for description
    $sortableFields.on('keyup', 'input[name="description"]', function () {
      var $field = $(this).parents('.form-field:eq(0)');
      var closestToolTip = $('.tooltip-element', $field);
      var ttVal = $(this).val();
      if (ttVal !== '') {
        if (!closestToolTip.length) {
          var tt = '<span class="tooltip-element" tooltip="' + ttVal + '">?</span>';
          $('.field-label', $field).after(tt);
        } else {
          closestToolTip.attr('tooltip', ttVal).css('display', 'inline-block');
        }
      } else {
        if (closestToolTip.length) {
          closestToolTip.css('display', 'none');
        }
      }
    });

    _helpers.updateMultipleSelect();

    // format name attribute
    $sortableFields.delegate('input[name="name"]', 'blur', function () {
      $(this).val(_helpers.safename($(this).val()));
      if ($(this).val() === '') {
        $(this).addClass('field_error').attr('placeholder', opts.messages.cannotBeEmpty);
      } else {
        $(this).removeClass('field_error');
      }
    });

    $sortableFields.delegate('input.fld-maxlength', 'blur', function () {
      $(this).val(_helpers.forceNumber($(this).val()));
    });

    // Delete field
    $sortableFields.on('click touchstart', '.delete-confirm', function (e) {
      e.preventDefault();

      var buttonPosition = this.getBoundingClientRect(),
          bodyRect = document.body.getBoundingClientRect(),
          coords = {
        pageX: buttonPosition.left + buttonPosition.width / 2,
        pageY: buttonPosition.top - bodyRect.top - 12
      };

      var deleteID = $(this).parents('.form-field:eq(0)').attr('id'),
          $field = $(document.getElementById(deleteID));

      var removeField = function removeField() {
        $field.slideUp(250, function () {
          $field.removeClass('deleting');
          $field.remove();
          _helpers.save();
          if (!$sortableFields[0].childNodes.length) {
            $stageWrap.addClass('empty').attr('data-content', opts.messages.getStarted);
          }
        });
      };

      document.addEventListener('modalClosed', function () {
        $field.removeClass('deleting');
      }, false);

      // Check if user is sure they want to remove the field
      if (opts.fieldRemoveWarn) {
        var warnH3 = _helpers.markup('h3', opts.messages.warning),
            warnMessage = _helpers.markup('p', opts.messages.fieldRemoveWarning);
        _helpers.confirm([warnH3, warnMessage], removeField, coords);
        $field.addClass('deleting');
      } else {
        removeField($field);
      }
    });

    // Update button style selection
    $sortableFields.on('click', '.style-wrap button', function () {
      var styleVal = $(this).val(),
          $parent = $(this).parent(),
          $btnStyle = $parent.prev('.btn-style');
      $btnStyle.val(styleVal);
      $(this).siblings('.btn').removeClass('active');
      $(this).addClass('active');
      saveAndUpdate.call($parent);
    });

    // Attach a callback to toggle required asterisk
    $sortableFields.on('click', 'input.required', function () {
      var requiredAsterisk = $(this).parents('li.form-field').find('.required-asterisk');
      requiredAsterisk.toggle();
    });

    // Attach a callback to toggle roles visibility
    $sortableFields.on('click', 'input[name="enable_roles"]', function () {
      var roles = $(this).siblings('div.available-roles'),
          enableRolesCB = $(this);
      roles.slideToggle(250, function () {
        if (!enableRolesCB.is(':checked')) {
          $('input[type="checkbox"]', roles).removeAttr('checked');
        }
      });
    });

    // Attach a callback to add new options
    $sortableFields.on('click', '.add-opt', function (e) {
      e.preventDefault();
      var $optionWrap = $(this).parents('.field-options:eq(0)'),
          $multiple = $('[name="multiple"]', $optionWrap),
          $firstOption = $('.option-selected:eq(0)', $optionWrap),
          isMultiple = false;

      if ($multiple.length) {
        isMultiple = $multiple.prop('checked');
      } else {
        isMultiple = $firstOption.attr('type') === 'checkbox';
      }

      var name = $firstOption.attr('name');

      $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, false, isMultiple));
      _helpers.updateMultipleSelect();
    });

    // Attach a callback to close link
    $sortableFields.on('click touchstart', '.close-field', function () {
      var fieldId = $(this).parents('li.form-field:eq(0)').attr('id');
      _helpers.toggleEdit(fieldId);
    });

    $sortableFields.on('mouseover mouseout', '.remove, .del-button', function () {
      $(this).parents('li:eq(0)').toggleClass('delete');
    });

    // View XML
    var xmlButton = $(document.getElementById(frmbID + '-view-data'));
    xmlButton.click(function (e) {
      e.preventDefault();
      var xml = _helpers.htmlEncode(elem.val()),
          code = _helpers.markup('code', xml, { className: 'xml' }),
          pre = _helpers.markup('pre', code);
      _helpers.dialog(pre, null, 'data-dialog');
    });

    // Clear all fields in form editor
    var clearButton = $(document.getElementById(frmbID + '-clear-all'));
    clearButton.click(function () {
      var fields = $('li.form-field');
      var buttonPosition = this.getBoundingClientRect(),
          bodyRect = document.body.getBoundingClientRect(),
          coords = {
        pageX: buttonPosition.left + buttonPosition.width / 2,
        pageY: buttonPosition.top - bodyRect.top - 12
      };

      if (fields.length) {
        _helpers.confirm(opts.messages.clearAllMessage, function () {
          _helpers.removeAllfields();
          opts.notify.success(opts.messages.allFieldsRemoved);
          _helpers.save();
        }, coords);
      } else {
        _helpers.dialog('There are no fields to clear', { pageX: coords.pageX, pageY: coords.pageY });
      }
    });

    // Save Idea Template
    $(document.getElementById(frmbID + '-save')).click(function (e) {
      e.preventDefault();
      _helpers.save();
      _helpers.validateForm(e);
    });

    elem.parent().find('p[id*="ideaTemplate"]').remove();
    elem.wrap('<div class="template-textarea-wrap"/>');

    loadData();

    $sortableFields.css('min-height', $cbUL.height());

    document.dispatchEvent(formBuilder.events.loaded);

    return formBuilder;
  };

  $.fn.formBuilder = function (options) {
    return this.each(function () {
      var element = this,
          formBuilder;
      if ($(element).data('formBuilder')) {
        var existingFormBuilder = $(element).parents('.form-builder:eq(0)');
        existingFormBuilder.before(element);
        existingFormBuilder.remove();
        formBuilder = new FormBuilder(options, element);
        $(element).data('formBuilder', formBuilder);
      } else {
        formBuilder = new FormBuilder(options, element);
        $(element).data('formBuilder', formBuilder);
      }
    });
  };
})(jQuery);
'use strict';

// toXML is a jQuery plugin that turns our form editor into XML
// @todo this is a total mess that has to be refactored
(function ($) {
  'use strict';

  $.fn.toXML = function (_helpers) {

    var serialStr = '';

    var fieldOptions = function fieldOptions($field) {
      var options = [];
      $('.sortable-options li', $field).each(function () {
        var $option = $(this),
            attrs = {
          value: $('.option-value', $option).val(),
          selected: $('.option-selected', $option).is(':checked')
        },
            option = _helpers.markup('option', $('.option-label', $option).val(), attrs).outerHTML;
        options.push('\n\t\t\t' + option);
      });
      return options.join('') + '\n\t\t';
    };

    // Begin the core plugin
    this.each(function () {
      var sortableFields = this;
      if (sortableFields.childNodes.length >= 1) {
        serialStr += '<form-template>\n\t<fields>';
        // build new xml
        _helpers.forEach(sortableFields.childNodes, function (index, field) {
          index = index;
          var $field = $(field);
          var fieldData = $field.data('fieldData');

          if (!$field.hasClass('disabled')) {
            var roleVals = $('.roles-field:checked', field).map(function () {
              return this.value;
            }).get();

            var types = _helpers.getTypes($field);
            var xmlAttrs = {
              className: fieldData.className,
              description: $('input.fld-description', $field).val(),
              label: $('.fld-label', $field).val(),
              maxlength: $('input.fld-maxlength', $field).val(),
              multiple: $('input[name="multiple"]', $field).is(':checked'),
              name: $('input.fld-name', $field).val(),
              placeholder: $('input.fld-placeholder', $field).val(),
              required: $('input.required', $field).is(':checked'),
              toggle: $('.checkbox-toggle', $field).is(':checked'),
              type: types.type,
              subtype: types.subtype
            };
            if (roleVals.length) {
              xmlAttrs.role = roleVals.join(',');
            }
            xmlAttrs = _helpers.trimAttrs(xmlAttrs);
            xmlAttrs = _helpers.escapeAttrs(xmlAttrs);
            var multipleField = xmlAttrs.type.match(/(select|checkbox-group|radio-group)/);

            var fieldContent = '',
                xmlField;
            if (multipleField) {
              fieldContent = fieldOptions($field);
            }

            xmlField = _helpers.markup('field', fieldContent, xmlAttrs);
            serialStr += '\n\t\t' + xmlField.outerHTML;
          }
        });
        serialStr += '\n\t</fields>\n</form-template>';
      } // if "$(this).children().length >= 1"
    });

    return serialStr;
  };
})(jQuery);
'use strict';

// Polyfill for Object.assign

if (typeof Object.assign !== 'function') {
  (function () {
    Object.assign = function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

// Element.remove() polyfill
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

// Event polyfill
if (typeof Event !== 'function') {
  (function () {
    window.Event = function (evt) {
      var event = document.createEvent('Event');
      event.initEvent(evt, true, true);
      return event;
    };
  })();
}