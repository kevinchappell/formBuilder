// toXML is a jQuery plugin that turns our form editor into XML
// @todo this is a total mess that has to be refactored
(function($) {
  'use strict';
  $.fn.toXML = function(_helpers) {

    var serialStr = '';

    var fieldOptions = function($field) {
      let options = [];
      $('.sortable-options li', $field).each(function() {
        let $option = $(this),
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
    this.each(function() {
      let sortableFields = this;
      if (sortableFields.childNodes.length >= 1) {
        serialStr += '<form-template>\n\t<fields>';
        // build new xml
        _helpers.forEach(sortableFields.childNodes, function(index, field) {
          index = index;
          var $field = $(field);
          var fieldData = $field.data('fieldData');

          if (!($field.hasClass('disabled'))) {
            var roleVals = $('.roles-field:checked', field).map(function() {
              return this.value;
            }).get();
            var enableOther = $('[name="enable-other"]:checked', field).length;

            let types = _helpers.getTypes($field);
            var xmlAttrs = {
              className: fieldData.className,
              description: $('input.fld-description', $field).val(),
              label: $('.fld-label', $field).val(),
              maxlength: $('input.fld-maxlength', $field).val(),
              multiple: $('input[name="multiple"]', $field).is(':checked'),
              name: $('input.fld-name', $field).val(),
              placeholder: $('input.fld-placeholder', $field).val(),
              required: $('input.fld-required', $field).is(':checked'),
              toggle: $('.toggle', $field).is(':checked'),
              type: types.type,
              subtype: types.subtype,
              min: $('input.fld-min', $field).val(),
              max: $('input.fld-max', $field).val(),
              value: $('input.fld-value', $field).val()
            };
            if (roleVals.length) {
              xmlAttrs.role = roleVals.join(',');
            }
            if (enableOther) {
              xmlAttrs.other = 'true';
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
