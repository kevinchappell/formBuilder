/*
formBuilder - git@github.com:kevinchappell/formBuilder.git
Version: 1.5.2
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
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
// render the formBuilder XML into html
'use strict';

(function ($) {
  'use strict';
  $.fn.formRender = function (options) {
    var $template = $(this),
        defaults = {
      destroyTemplate: true, // @todo
      container: false
    },
        _helpers = {};

    var opts = $.extend(defaults, options);

    /**
     * Generate markup wrapper where needed
     * @param  {string} type
     * @param  {object} attrs
     * @param  {string} content we wrap this
     * @return {string}
     */
    _helpers.markup = function (type) {
      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var content = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

      attrs = _helpers.attrString(attrs);
      content = Array.isArray(content) ? content.join('') : content;
      var inlineElems = ['input'],
          template = inlineElems.indexOf(type) === -1 ? '<' + type + ' ' + attrs + '>' + content + '</' + type + '>' : '<' + type + ' ' + attrs + '/>';
      return template;
    };

    /**
     * Generate preview markup
     * @param  {object} field
     * @return {string}       preview markup for field
     */
    _helpers.fieldRender = function (field) {
      var fieldMarkup = '',
          optionsMarkup = '';
      var fieldAttrs = _helpers.parseAttrs(field.attributes),
          fieldDesc = fieldAttrs.description,
          // @todo
      fieldOptions = $('option', field);
      fieldAttrs.id = fieldAttrs.name;
      if (fieldAttrs.type !== 'checkbox') {
        fieldAttrs['class'] = 'form-control';
      }

      var fieldLabel = '<label for="' + fieldAttrs.id + '">' + fieldAttrs.label + '</label>';

      delete fieldAttrs.label;
      delete fieldAttrs.description;

      var fieldAttrsString = _helpers.attrString(fieldAttrs);

      switch (fieldAttrs.type) {
        case 'textarea':
        case 'rich-text':
          delete fieldAttrs.type;
          delete fieldAttrs.value;
          fieldMarkup = fieldLabel + '<textarea ' + fieldAttrsString + '></textarea>';
          break;
        case 'select':
          fieldAttrs.type = fieldAttrs.type.replace('-group', '');

          if (fieldOptions.length) {
            fieldOptions.each(function (index, el) {
              var optionAttrs = _helpers.parseAttrs(el.attributes),
                  optionAttrsString = _helpers.attrString(optionAttrs);

              optionsMarkup += '<option ' + optionAttrsString + '>' + el.innerHTML + '</option>';
            });
          }
          fieldMarkup = fieldLabel + '<select ' + fieldAttrsString + '>' + optionsMarkup + '</select>';
          break;
        case 'checkbox-group':
        case 'radio-group':
          fieldAttrs.type = fieldAttrs.type.replace('-group', '');
          delete fieldAttrs['class'];

          if (fieldOptions.length) {
            (function () {
              var optionName = fieldAttrs.name + '[]';
              fieldOptions.each(function (index, el) {
                var optionAttrs = $.extend(fieldAttrs, _helpers.parseAttrs(el.attributes));
                optionAttrs.name = optionName;
                optionAttrs.id = fieldAttrs.id + '-' + index;
                var optionAttrsString = _helpers.attrString(optionAttrs);

                optionsMarkup += '<input ' + optionAttrsString + ' /> <label for="' + optionAttrs.id + '">' + el.innerHTML + '</label><br>';
              });
            })();
          }
          fieldMarkup = fieldLabel + '<div class="' + fieldAttrs.type + '-group">' + optionsMarkup + '</div>';
          break;
        case 'text':
        case 'password':
        case 'email':
        case 'date':
        case 'autocomplete':
          fieldMarkup = fieldLabel + ' <input ' + fieldAttrsString + '>';
          break;
        case 'checkbox':
          fieldMarkup = '<input ' + fieldAttrsString + '> ' + fieldLabel;

          if (fieldAttrs.toggle) {
            setTimeout(function () {
              $(document.getElementById(fieldAttrs.id)).kcToggle();
            }, 100);
          }
          break;
        default:
          fieldMarkup = '<' + fieldAttrs.type + '></' + fieldAttrs.type + '>';
      }

      return '<div class="form-group">' + fieldMarkup + '</div>';
    };

    _helpers.attrString = function (attrs) {
      var attributes = [];
      for (var attr in attrs) {
        if (attrs.hasOwnProperty(attr)) {
          attributes.push(attr + '="' + attrs[attr] + '"');
        }
      }
      return attributes.join(' ');
    };

    _helpers.parseAttrs = function (attrNodes) {
      var fieldAttrs = {};
      for (var attr in attrNodes) {
        if (attrNodes.hasOwnProperty(attr)) {
          fieldAttrs[attrNodes[attr]['nodeName']] = attrNodes[attr]['nodeValue'];
        }
      }
      return fieldAttrs;
    };

    // Begin the core plugin
    this.each(function () {
      var rendered = [];

      var formData = $.parseXML($template.val()),
          fields = $('field', formData),
          settings = $('settings', formData); // @todo

      if (!formData) {
        alert('No formData. Add some fields and try again');
        return false;
      }

      // generate field markup if we have fields
      if (fields.length) {
        fields.each(function (index, field) {
          index = index;
          rendered.push(_helpers.fieldRender(field));
        });
      }

      var output = rendered.join('');

      if (opts.container && opts.container.length) {
        opts.container.html(output);
      } else {
        $template.replaceWith(output);
      }
    });
  };
})(jQuery);