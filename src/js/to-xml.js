// toXML is a jQuery plugin that turns our form editor into XML
// @todo this is a total mess that has to be refactored
(function($) {
  'use strict';
  $.fn.toXML = function(options) {
    var defaults = {
      prepend: '',
      attributes: ['class']
    };
    var opts = $.extend(defaults, options);

    var serialStr = '',
      _helpers = {};

    _helpers.getType = function($field) {
      let type = $('.fld-subtype', $field).val() || $field.attr('class').replace(' form-field', '');
      return type;
    };

    _helpers.hyphenCase = (str) => {
      return str.replace(/([A-Z])/g, function($1) {
        return '-' + $1.toLowerCase();
      });
    };

    _helpers.attrString = function(attrs) {
      var attributes = [];
      for (var attr in attrs) {
        if (attrs.hasOwnProperty(attr) && attrs[attr]) {
          let attrName = _helpers.hyphenCase(attr),
            attrString = `${attrName}="${attrs[attr]}"`;
          attributes.push(attrString);
        }
      }
      return attributes.join(' ');
    };

    var fieldOptions = function($field) {
      let options = [];
      $('.sortable-options li', $field).each(function() {
        let $option = $(this),
          optionValue = 'value="' + $('.option-value', $option).val() + '"',
          optionLabel = $('.option-label', $option).val(),
          selected = $('.select-option', $option).is(':checked') ? ' selected="true"' : '';
        options.push('\n\t\t\t<option' + selected + ' ' + optionValue + '>' + optionLabel + '</option>');
      });
      return options.join('');
    };

    // Begin the core plugin
    this.each(function() {
      if ($(this).children().length >= 1) {
        serialStr += '<form-template>\n\t<fields>';

        // build new xml
        $(this).children().each(function() {
          var $field = $(this);
          if (!($field.hasClass('moving') || $field.hasClass('disabled'))) {
            for (var att = 0; att < opts.attributes.length; att++) {
              var roleVals = $.map($('input.roles-field:checked', $field), function(n) {
                return n.value;
              }).join(',');
              var xmlAttrs = {
                  required: $('input.required', $field).is(':checked'),
                  multiple: $('input[name="multiple"]', $field).is(':checked'),
                  type: _helpers.getType($field),
                  name: $('input.fld-name', $field).val(),
                  placeholder: $('input.fld-placeholder', $field).val(),
                  label: $('input.fld-label', $field).val(),
                  description: $('input.fld-description', $field).val(),
                  maxlength: $('input.fld-maxlength', $field).val(),
                  role: roleVals,
                  toggle: $('.checkbox-toggle', $field).is(':checked')
                },
                multipleField = xmlAttrs.type.match(/(select|checkbox-group|radio-group)/),
                attrsString = _helpers.attrString(xmlAttrs),
                fSlash = (!multipleField ? '/' : '');

              serialStr += '\n\t\t<field ' + attrsString + fSlash + '>';
              if (multipleField) {
                serialStr += fieldOptions($field);
                serialStr += '\n\t\t</field>';
              }
            }
          }
        });
        serialStr += '\n\t</fields>\n</form-template>';
      } // if "$(this).children().length >= 1"

    });
    return (serialStr);
  };
})(jQuery);
