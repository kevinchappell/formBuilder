// render the formBuilder XML into html
(function($) {
  'use strict';
  $.fn.formRender = function(options) {
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
    _helpers.markup = function(type, attrs = {}, content = '') {
      attrs = _helpers.attrString(attrs);
      content = Array.isArray(content) ? content.join('') : content;
      let inlineElems = ['input'],
        template = inlineElems.indexOf(type) === -1 ? `<${type} ${attrs}>${content}</${type}>` : `<${type} ${attrs}/>`;
      return template;
    };

    /**
     * Generate preview markup
     * @param  {object} field
     * @return {string}       preview markup for field
     * @todo
     */
    _helpers.fieldRender = function(field) {
      var fieldMarkup = '',
        fieldLabel = '',
        optionsMarkup = '';
      var fieldAttrs = _helpers.parseAttrs(field.attributes),
        fieldDesc = fieldAttrs.description || '',
        fieldRequired = '',
        fieldOptions = $('option', field);
      fieldAttrs.id = fieldAttrs.name;
      if (fieldAttrs.type !== 'checkbox') {
        fieldAttrs.class = 'form-control';
      }

      if (fieldAttrs.required === 'false') {
        delete fieldAttrs.required;
      } else {
        fieldAttrs.required = null;
        fieldAttrs['aria-required'] = 'true';
        fieldRequired = `<span class="required">*</span>`;
      }

      if (fieldAttrs.type !== 'hidden') {
        if (fieldDesc) {
          fieldDesc = `<span class="tooltip-element" tooltip="${fieldDesc}">?</span>`;
        }
        fieldLabel = `<label for="${fieldAttrs.id}">${fieldAttrs.label} ${fieldRequired} ${fieldDesc}</label>`;
      }

      delete fieldAttrs.label;
      delete fieldAttrs.description;

      var fieldAttrsString = _helpers.attrString(fieldAttrs);

      switch (fieldAttrs.type) {
        case 'textarea':
        case 'rich-text':
          delete fieldAttrs.type;
          delete fieldAttrs.value;
          fieldMarkup = `${fieldLabel}<textarea ${fieldAttrsString}></textarea>`;
          break;
        case 'select':
          fieldAttrs.type = fieldAttrs.type.replace('-group', '');

          if (fieldOptions.length) {
            fieldOptions.each(function(index, el) {
              let optionAttrs = _helpers.parseAttrs(el.attributes),
                optionAttrsString = _helpers.attrString(optionAttrs),
                optionText = el.innerHTML || el.innerContent || el.innerText || el.childNodes[0].nodeValue || el.value;

              optionsMarkup += `<option ${optionAttrsString}>${optionText}</option>`;
            });
          }
          fieldMarkup = `${fieldLabel}<select ${fieldAttrsString}>${optionsMarkup}</select>`;
          break;
        case 'checkbox-group':
        case 'radio-group':
          fieldAttrs.type = fieldAttrs.type.replace('-group', '');
          delete fieldAttrs.class;

          if (fieldOptions.length) {
            let optionName = fieldAttrs.name + '[]';
            fieldOptions.each(function(index, el) {
              let optionAttrs = $.extend(fieldAttrs, _helpers.parseAttrs(el.attributes));
              optionAttrs.name = optionName;
              optionAttrs.id = fieldAttrs.id + '-' + index;
              let optionAttrsString = _helpers.attrString(optionAttrs),
                optionText = el.innerHTML || el.innerContent || el.innerText || el.childNodes[0].nodeValue || el.value;

              optionsMarkup += `<input ${optionAttrsString} /> <label for="${optionAttrs.id}">${optionText}</label><br>`;
            });
          }
          fieldMarkup = `${fieldLabel}<div class="${fieldAttrs.type}-group">${optionsMarkup}</div>`;
          break;
        case 'text':
        case 'password':
        case 'email':
        case 'hidden':
        case 'date':
        case 'autocomplete':
          fieldMarkup = `${fieldLabel} <input ${fieldAttrsString}>`;
          break;
        case 'checkbox':
          fieldMarkup = `<input ${fieldAttrsString}> ${fieldLabel}`;

          if (fieldAttrs.toggle) {
            setTimeout(function() {
              $(document.getElementById(fieldAttrs.id)).kcToggle();
            }, 100);
          }
          break;
        default:
          fieldMarkup = `<${fieldAttrs.type}></${fieldAttrs.type}>`;
      }

      if (fieldAttrs.type !== 'hidden') {
        fieldMarkup = _helpers.markup('div', {
          class: 'form-group field-' + fieldAttrs.id
        }, fieldMarkup);
      }

      return fieldMarkup;
    };

    _helpers.attrString = function(attrs) {
      var attributes = [];
      for (var attr in attrs) {
        if (attrs.hasOwnProperty(attr)) {
          let attrVal = attrs[attr] ? '="' + attrs[attr] + '"' : '';
          attributes.push(attr + attrVal);
        }
      }
      return attributes.join(' ');
    };

    _helpers.parseAttrs = function(attrNodes) {
      var fieldAttrs = {};
      for (var attr in attrNodes) {
        if (attrNodes.hasOwnProperty(attr)) {
          fieldAttrs[attrNodes[attr]['nodeName']] = attrNodes[attr]['nodeValue'];
        }
      }
      return fieldAttrs;
    };

    // Begin the core plugin
    this.each(function() {
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
        fields.each(function(index, field) {
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
