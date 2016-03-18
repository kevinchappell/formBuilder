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
          optionValue = 'value="' + $('.option-value', $option).val() + '"',
          optionLabel = $('.option-label', $option).val(),
          selected = $('.option-selected', $option).is(':checked') ? ' selected="true"' : '';
        options.push('\n\t\t\t<option' + selected + ' ' + optionValue + '>' + optionLabel + '</option>');
      });
      return options.join('');
    };

    // Begin the core plugin
    this.each(function() {
      let sortableFields = this;
      if (sortableFields.childNodes.length >= 1) {
        serialStr += '<form-template>\n\t<fields>';

        // build new xml
        sortableFields.childNodes.forEach(function(field) {
          var $field = $(field);
          var fieldData = $field.data('fieldData');

          if (!($field.hasClass('disabled'))) {
            var roleVals = field.querySelectorAll('.roles-field:checked').map(function(n) {
              return n.value;
            }).join(',');

            let types = _helpers.getTypes($field);
            var xmlAttrs = {
              className: fieldData.className,
              description: $('input.fld-description', $field).val(),
              label: $('.fld-label', $field).val(),
              maxlength: $('input.fld-maxlength', $field).val(),
              multiple: $('input[name="multiple"]', $field).is(':checked'),
              name: $('input.fld-name', $field).val(),
              placeholder: $('input.fld-placeholder', $field).val(),
              required: $('input.required', $field).is(':checked'),
              role: roleVals,
              toggle: $('.checkbox-toggle', $field).is(':checked'),
              type: _helpers.getTypes($field)
            };
            xmlAttrs = Object.assign(xmlAttrs, types);
            xmlAttrs = _helpers.trimAttrs(xmlAttrs);
            var multipleField = xmlAttrs.type.match(/(select|checkbox-group|radio-group)/),
              attrsString = _helpers.attrString(xmlAttrs),
              fSlash = (!multipleField ? '/' : '');
            serialStr += '\n\t\t<field ' + attrsString + fSlash + '>';

            if (multipleField) {
              serialStr += fieldOptions($field);
              serialStr += '\n\t\t</field>';
            }
          }
        });
        serialStr += '\n\t</fields>\n</form-template>';
      } // if "$(this).children().length >= 1"

    });

    return serialStr;
  };
})(jQuery);
