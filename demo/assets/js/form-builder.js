/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */
// function fbEvents(){
var events = {};

events.loaded = new Event('loaded');
events.viewData = new Event('viewData');
events.userDeclined = new Event('userDeclined');
events.modalClosed = new Event('modalClosed');
events.modalOpened = new Event('modalOpened');
events.formSaved = new Event('formSaved');
events.fieldAdded = new Event('fieldAdded');
events.fieldRemoved = new Event('fieldRemoved');

//   return events;
// }

module.exports = events;

},{}],2:[function(require,module,exports){
'use strict';

require('./kc-toggle.js');
require('./polyfills.js');

(function ($) {
  var FormBuilder = function FormBuilder(options, element) {
    var _this = this;

    var formBuilder = this;

    var defaults = {
      controlPosition: 'right',
      controlOrder: ['autocomplete', 'button', 'checkbox', 'checkbox-group', 'date', 'file', 'header', 'hidden', 'paragraph', 'number', 'radio-group', 'select', 'text', 'textarea'],
      dataType: 'xml',
      // Array of fields to disable
      disableFields: [],
      editOnAdd: false,
      // Uneditable fields or other content you would like to appear
      // before and after regular fields:
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
      inputSets: [],
      fieldRemoveWarn: false,
      roles: {
        1: 'Administrator'
      },
      messages: {
        addOption: 'Add Option +',
        allFieldsRemoved: 'All fields were removed.',
        allowSelect: 'Allow Select',
        allowMultipleFiles: 'Allow users to upload multiple files',
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
        copyButton: '&#43;',
        copyButtonTooltip: 'Copy',
        dateField: 'Date Field',
        description: 'Help Text',
        descriptionField: 'Description',
        devMode: 'Developer Mode',
        editNames: 'Edit Names',
        editorTitle: 'Form Elements',
        editXML: 'Edit XML',
        enableOther: 'Enable &quot;Other&quot;',
        enableOtherMsg: 'Let users to enter an unlisted option',
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
        multipleFiles: 'Multiple Files',
        name: 'Name',
        no: 'No',
        number: 'Number',
        off: 'Off',
        on: 'On',
        option: 'Option',
        optional: 'optional',
        optionLabelPlaceholder: 'Label',
        optionValuePlaceholder: 'Value',
        optionEmpty: 'Option value required',
        other: 'Other',
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
        removeOption: 'Remove Option',
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
        text: 'Text Field',
        textArea: 'Text Area',
        toggle: 'Toggle',
        warning: 'Warning!',
        value: 'Value',
        viewJSON: '{  }',
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
      stickyControls: false,
      showActionButtons: true,
      typeUserAttrs: {},
      typeUserEvents: {},
      prefix: 'form-builder-'
    };

    var utils = require('./utils.js');

    defaults.messages.subtypes = function () {
      var subtypeDefault = function subtypeDefault(subtype) {
        return {
          label: subtype,
          value: subtype
        };
      };

      return {
        text: ['text', 'password', 'email', 'color', 'tel'].map(subtypeDefault),
        header: ['h1', 'h2', 'h3'].map(subtypeDefault),
        button: ['button', 'submit', 'reset'].map(subtypeDefault),
        paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'].map(subtypeDefault)
      };
    }();

    var opts = Object.assign({}, defaults, options);
    var frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

    if (options.messages) {
      opts.messages = Object.assign({}, defaults.messages, options.messages);
    }

    opts.formID = frmbID;

    formBuilder.element = element;

    var $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');
    var _helpers = require('./helpers.js')(opts, formBuilder);

    formBuilder.layout = _helpers.editorLayout(opts.controlPosition);

    var lastID = frmbID + '-fld-1';
    var boxID = frmbID + '-control-box';

    // create array of field objects to cycle through
    var frmbFields = [{
      label: opts.messages.autocomplete,
      attrs: {
        type: 'autocomplete',
        className: 'autocomplete',
        name: 'autocomplete'
      }
    }, {
      label: opts.messages.button,
      attrs: {
        type: 'button',
        className: 'button-input',
        name: 'button'
      }
    }, {
      label: opts.messages.checkbox,
      attrs: {
        type: 'checkbox',
        className: 'checkbox',
        name: 'checkbox'
      }
    }, {
      label: opts.messages.checkboxGroup,
      attrs: {
        type: 'checkbox-group',
        className: 'checkbox-group',
        name: 'checkbox-group'
      }
    }, {
      label: opts.messages.dateField,
      attrs: {
        type: 'date',
        className: 'calendar',
        name: 'date-input'
      }
    }, {
      label: opts.messages.fileUpload,
      attrs: {
        type: 'file',
        className: 'file-input',
        name: 'file-input'
      }
    }, {
      label: opts.messages.header,
      attrs: {
        type: 'header',
        className: 'header'
      }
    }, {
      label: opts.messages.hidden,
      attrs: {
        type: 'hidden',
        className: 'hidden-input',
        name: 'hidden-input'
      }
    }, {
      label: opts.messages.number,
      attrs: {
        type: 'number',
        className: 'number',
        name: 'number'
      }
    }, {
      label: opts.messages.paragraph,
      attrs: {
        type: 'paragraph',
        className: 'paragraph'
      }
    }, {
      label: opts.messages.radioGroup,
      attrs: {
        type: 'radio-group',
        className: 'radio-group',
        name: 'radio-group'
      }
    }, {
      label: opts.messages.select,
      attrs: {
        type: 'select',
        className: 'select',
        name: 'select'
      }
    }, {
      label: opts.messages.text,
      attrs: {
        type: 'text',
        className: 'text-input',
        name: 'text-input'
      }
    }, {
      label: opts.messages.textArea,
      attrs: {
        type: 'textarea',
        className: 'text-area',
        name: 'textarea'
      }
    }];

    frmbFields = _helpers.orderFields(frmbFields);

    if (opts.disableFields) {
      // remove disabledFields
      frmbFields = frmbFields.filter(function (field) {
        return !utils.inArray(field.attrs.type, opts.disableFields);
      });
    }

    // Create draggable fields for formBuilder
    var cbUl = utils.markup('ul', null, { id: boxID, className: 'frmb-control' });

    if (opts.sortableControls) {
      cbUl.classList.add('sort-enabled');
    }

    var $cbUL = $(cbUl);

    // Loop through
    utils.forEach(frmbFields, function (i) {
      var $field = $('<li/>', {
        'class': 'icon-' + frmbFields[i].attrs.className,
        'type': frmbFields[i].type,
        'name': frmbFields[i].className,
        'label': frmbFields[i].label
      });

      $field.data('newFieldData', frmbFields[i]);

      var typeLabel = utils.markup('span', frmbFields[i].label);
      $field.html(typeLabel).appendTo($cbUL);
    });

    if (opts.inputSets.length) {
      $('<li/>', { 'class': 'fb-separator' }).html('<hr>').appendTo($cbUL);
      opts.inputSets.forEach(function (set) {
        set.name = set.name || _helpers.makeClassName(set.label);
        var $set = $('<li/>', { 'class': 'input-set-control', type: set.name });
        $set.html(set.label).appendTo($cbUL);
      });
    }

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
      cancel: '.fb-separator',
      cursor: 'move',
      scroll: false,
      placeholder: 'ui-state-highlight',
      start: _helpers.startMoving,
      stop: _helpers.stopMoving,
      revert: 150,
      beforeStop: _helpers.beforeStop,
      distance: 3,
      update: function update(event, ui) {
        if (_helpers.doCancel) {
          return false;
        }
        if (ui.item.parent()[0] === $sortableFields[0]) {
          processControl(ui.item);
          _helpers.doCancel = true;
        } else {
          _helpers.setFieldOrder($cbUL);
          _helpers.doCancel = !opts.sortableControls;
        }
      }
    });

    var processControl = function processControl(control) {
      if (control[0].classList.contains('input-set-control')) {
        var inputSet = opts.inputSets.filter(function (set) {
          return set.name === control[0].type;
        })[0];
        if (inputSet.showHeader) {
          var header = {
            type: 'header',
            subtype: 'h2',
            id: inputSet.name,
            label: inputSet.label
          };
          prepFieldVars(header, true);
        }
        inputSet.fields.forEach(function (field) {
          prepFieldVars(field, true);
        });
      } else {
        prepFieldVars(control, true);
      }
    };

    var $formWrap = $('<div/>', {
      id: frmbID + '-form-wrap',
      'class': 'form-wrap form-builder' + _helpers.mobileClass()
    });

    var $stageWrap = $('<div/>', {
      id: frmbID + '-stage-wrap',
      'class': 'stage-wrap ' + formBuilder.layout.stage
    });

    var cbWrap = $('<div/>', {
      id: frmbID + '-cb-wrap',
      'class': 'cb-wrap ' + formBuilder.layout.controls
    }).append($cbUL[0]);

    if (opts.showActionButtons) {
      // Build our headers and action links
      var viewDataText = void 0;
      if (opts.dataType === 'xml') {
        viewDataText = opts.messages.viewXML;
      } else {
        viewDataText = opts.messages.viewJSON;
      }
      var viewData = utils.markup('button', viewDataText, {
        id: frmbID + '-view-data',
        type: 'button',
        className: 'view-data btn btn-default'
      });
      var clearAll = utils.markup('button', opts.messages.clearAll, {
        id: frmbID + '-clear-all',
        type: 'button',
        className: 'clear-all btn btn-default'
      });
      var saveAll = utils.markup('button', opts.messages.save, {
        className: 'btn btn-primary ' + opts.prefix + 'save',
        id: frmbID + '-save',
        type: 'button'
      });
      var formActions = utils.markup('div', [clearAll, viewData, saveAll], {
        className: 'form-actions btn-group'
      });

      cbWrap.append(formActions);
    }

    $stageWrap.append($sortableFields, cbWrap);
    $stageWrap.before($formWrap);
    $formWrap.append($stageWrap, cbWrap);
    $(element).append($formWrap);

    var saveAndUpdate = _helpers.debounce(function (evt) {
      if (evt) {
        if (evt.type === 'keyup' && evt.target.name === 'className') {
          return false;
        }

        var $field = $(evt.target).closest('.form-field');
        _helpers.updatePreview($field);
        _helpers.save();
      }
    });

    // Save field on change
    $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

    $('li', $cbUL).click(function (evt) {
      var $control = $(evt.target).closest('.ui-sortable-handle');
      _helpers.stopIndex = undefined;
      processControl($control);
      _helpers.save();
    });

    // Add append and prepend options if necessary
    var nonEditableFields = function nonEditableFields() {
      var cancelArray = [];

      if (opts.prepend && !$('.disabled.prepend', $sortableFields).length) {
        var prependedField = utils.markup('li', opts.prepend, { className: 'disabled prepend' });
        cancelArray.push(true);
        $sortableFields.prepend(prependedField);
      }

      if (opts.append && !$('.disabled.append', $sortableFields).length) {
        var appendedField = utils.markup('li', opts.append, { className: 'disabled append' });
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
      var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
        field = Object.assign({}, $field);
      }

      field.name = isNew ? nameAttr(field) : field.name || nameAttr(field);

      if (isNew && utils.inArray(field.type, ['text', 'number', 'file', 'select', 'textarea'])) {
        field.className = 'form-control'; // backwards compatibility
      } else {
        field.className = field.class || field.className; // backwards compatibility
      }

      var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
      if (match) {
        field.style = match[1];
      }

      utils.escapeAttrs(field);

      appendNewField(field);
      if (isNew) {
        document.dispatchEvent(formBuilder.events.fieldAdded);
      }
      $stageWrap.removeClass('empty');
    };

    // Parse saved XML template data
    var loadFields = function loadFields() {
      var formData = formBuilder.formData;
      if (formData && formData.length) {
        for (var i = 0; i < formData.length; i++) {
          prepFieldVars(formData[i]);
        }
        $stageWrap.removeClass('empty');
      } else if (opts.defaultFields && opts.defaultFields.length) {
        // Load default fields if none are set
        opts.defaultFields.forEach(function (field) {
          return prepFieldVars(field);
        });
        $stageWrap.removeClass('empty');
      } else if (!opts.prepend && !opts.append) {
        $stageWrap.addClass('empty').attr('data-content', opts.messages.getStarted);
      }
      _helpers.save();

      var $fields = $('li.form-field:not(.disabled)', $sortableFields);

      $fields.each(function (i) {
        return _helpers.updatePreview($($fields[i]));
      });

      nonEditableFields();
    };

    // callback to track disabled tooltips
    $sortableFields.on('mousemove', 'li.disabled', function (e) {
      $('.frmb-tt', _this).css({
        left: e.offsetX - 16,
        top: e.offsetY - 34
      });
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseenter', 'li.disabled', function (e) {
      return _helpers.disabledTT.add($(_this));
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseleave', 'li.disabled', function (e) {
      return _helpers.disabledTT.remove($(_this));
    });

    var nameAttr = function nameAttr(field) {
      var epoch = new Date().getTime();
      return field.type + '-' + epoch;
    };

    /**
     * Add data for field with options [select, checkbox-group, radio-group]
     *
     * @todo   refactor this nasty ~crap~ code, its actually painful to look at
     * @param  {Object} values
     * @return {String} field options markup
     */
    var fieldOptions = function fieldOptions(values) {
      var optionActions = [utils.markup('a', opts.messages.addOption, { className: 'add add-opt' })];
      var fieldOptions = ['<label class="false-label">' + opts.messages.selectOptions + '</label>'];
      var isMultiple = values.multiple || values.type === 'checkbox-group';

      if (!values.values || !values.values.length) {
        values.values = [1, 2, 3].map(function (index) {
          var label = opts.messages.option + ' ' + index;
          var option = {
            selected: false,
            label: label,
            value: utils.hyphenCase(label)
          };
          return option;
        });
        values.values[0].selected = true;
      } else {
        // ensure option data is has all required keys
        values.values.forEach(function (option) {
          return Object.assign({}, { selected: false }, option);
        });
      }

      fieldOptions.push('<div class="sortable-options-wrap">');

      fieldOptions.push('<ol class="sortable-options">');
      utils.forEach(values.values, function (i) {
        fieldOptions.push(selectFieldOptions(values.name, values.values[i], isMultiple));
      });
      fieldOptions.push('</ol>');
      fieldOptions.push(utils.markup('div', optionActions, { className: 'option-actions' }).outerHTML);
      fieldOptions.push('</div>');

      return utils.markup('div', fieldOptions.join(''), { className: 'form-group field-options' }).outerHTML;
    };

    /**
     * Build the editable properties for the field
     * @param  {object} values configuration object for advanced fields
     * @return {String}        markup for advanced fields
     */
    var advFields = function advFields(values) {
      var advFields = [];
      var key = void 0;
      var optionFields = ['select', 'checkbox-group', 'radio-group'];
      var isOptionField = function () {
        return optionFields.indexOf(values.type) !== -1;
      }();
      var valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(optionFields));
      var roles = values.role !== undefined ? values.role.split(',') : [];

      advFields.push(requiredField(values));

      if (values.type === 'checkbox') {
        advFields.push(boolAttribute('toggle', values, { first: opts.messages.toggle }));
      }

      advFields.push(textAttribute('label', values));

      values.size = values.size || 'm';
      values.style = values.style || 'default';

      // Help Text / Description Field
      if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
        advFields.push(textAttribute('description', values));
      }

      if (opts.messages.subtypes[values.type]) {
        var optionData = opts.messages.subtypes[values.type];
        advFields.push(selectAttribute('subtype', values, optionData));
      }

      if (values.type === 'button') {
        advFields.push(btnStyles(values.style, values.type));
      }

      if (values.type === 'number') {
        advFields.push(numberAttribute('min', values));
        advFields.push(numberAttribute('max', values));
        advFields.push(numberAttribute('step', values));
      }

      // Placeholder
      advFields.push(textAttribute('placeholder', values));

      // TextArea Rows Attribute
      if (values.type === 'textarea') {
        advFields.push(numberAttribute('rows', values));
      }

      // Class
      advFields.push(textAttribute('className', values));

      advFields.push(textAttribute('name', values));

      if (valueField) {
        advFields.push(textAttribute('value', values));
      }

      if (values.type === 'file') {
        var labels = {
          first: opts.messages.multipleFiles,
          second: opts.messages.allowMultipleFiles
        };
        advFields.push(boolAttribute('multiple', values, labels));
      }

      var rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
      var availableRoles = ['<div class="available-roles" ' + rolesDisplay + '>'];
      for (key in opts.roles) {
        if (opts.roles.hasOwnProperty(key)) {
          var checked = utils.inArray(key, roles) ? 'checked' : '';
          var roleId = 'fld-' + lastID + '-roles-' + key;
          availableRoles.push('<input type="checkbox" name="roles[]" value="' + key + '" id="' + roleId + '" ' + checked + ' class="roles-field" /> <label for="' + roleId + '">' + opts.roles[key] + '</label><br/>');
        }
      }

      availableRoles.push('</div>');

      var accessLabels = { first: opts.messages.roles, second: opts.messages.limitRole, content: availableRoles.join('') };

      advFields.push(boolAttribute('access', values, accessLabels));

      if (values.type === 'checkbox-group' || values.type === 'radio-group') {
        advFields.push(boolAttribute('other', values, { first: opts.messages.enableOther, second: opts.messages.enableOtherMsg }));
      }

      if (values.type === 'select') {
        advFields.push(boolAttribute('multiple', values, { first: ' ', second: opts.messages.selectionsMessage }));
      }

      if (isOptionField) {
        advFields.push(fieldOptions(values));
      }

      if (utils.inArray(values.type, ['text', 'textarea'])) {
        advFields.push(numberAttribute('maxlength', values));
      }

      // Append custom attributes as defined in typeUserAttrs option
      if (opts.typeUserAttrs[values.type]) {
        advFields.push(processTypeUserAttrs(opts.typeUserAttrs[values.type], values));
      }

      return advFields.join('');
    };

    /**
     * Processes typeUserAttrs
     * @param  {Object} typeUserAttr option
     * @param  {Object} values       field attributes
     * @return {String}              markup for custom user attributes
     */
    function processTypeUserAttrs(typeUserAttr, values) {
      var advField = [];

      for (var attribute in typeUserAttr) {
        if (typeUserAttr.hasOwnProperty(attribute)) {
          var orig = opts.messages[attribute];
          var origValue = typeUserAttr[attribute].value;
          typeUserAttr[attribute].value = values[attribute] || typeUserAttr[attribute].value || '';

          if (typeUserAttr[attribute].label) {
            opts.messages[attribute] = typeUserAttr[attribute].label;
          }

          if (typeUserAttr[attribute].options) {
            advField.push(selectUserAttrs(attribute, typeUserAttr[attribute]));
          } else {
            advField.push(inputUserAttrs(attribute, typeUserAttr[attribute]));
          }

          opts.messages[attribute] = orig;
          typeUserAttr[attribute].value = origValue;
        }
      }

      return advField.join('');
    }

    /**
     * Text input value for attribute
     * @param  {String} name
     * @param  {Object} attrs also known as values
     * @return {String}       input markup
     */
    function inputUserAttrs(name, attrs) {
      var textAttrs = {
        id: name + '-' + lastID,
        title: attrs.description || attrs.label || name.toUpperCase(),
        name: name,
        type: attrs.type || 'text',
        className: ['fld-' + name]
      };
      var label = '<label for="' + textAttrs.id + '">' + opts.messages[name] + '</label>';

      if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
        textAttrs.className.push('form-control');
      }

      textAttrs = Object.assign({}, attrs, textAttrs);
      var textInput = '<input ' + utils.attrString(textAttrs) + '>';
      var inputWrap = '<div class="input-wrap">' + textInput + '</div>';
      return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
    }

    /**
     * Select input for multiple choice user attributes
     * @todo  replace with selectAttr
     * @param  {String} name
     * @param  {Object} options
     * @return {String}         select markup
     */
    function selectUserAttrs(name, options) {
      var optis = Object.keys(options.options).map(function (val) {
        var attrs = { value: val };
        if (val === options.value) {
          attrs.selected = null;
        }
        return '<option ' + utils.attrString(attrs) + '>' + options.options[val] + '</option>';
      });
      var selectAttrs = {
        id: name + '-' + lastID,
        title: options.description || options.label || name.toUpperCase(),
        name: name,
        className: 'fld-' + name + ' form-control'
      };
      var label = '<label for="' + selectAttrs.id + '">' + opts.messages[name] + '</label>';

      Object.keys(options).filter(function (prop) {
        return !utils.inArray(prop, ['value', 'options', 'label']);
      }).forEach(function (attr) {
        selectAttrs[attr] = options[attr];
      });

      var select = '<select ' + utils.attrString(selectAttrs) + '>' + optis.join('') + '</select>';
      var inputWrap = '<div class="input-wrap">' + select + '</div>';
      return '<div class="form-group ' + name + '-wrap">' + label + inputWrap + '</div>';
    }

    var boolAttribute = function boolAttribute(name, values, labels) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
        return;
      }

      var label = function label(txt) {
        return '<label for="' + name + '-' + lastID + '">' + txt + '</label>';
      };
      var checked = values[name] !== undefined ? 'checked' : '';
      var input = '<input type="checkbox" class="fld-' + name + '" name="' + name + '" value="true" ' + checked + ' id="' + name + '-' + lastID + '"/> ';
      var left = [];
      var right = [input];

      if (labels.first) {
        left.unshift(label(labels.first));
      }

      if (labels.second) {
        right.push(label(labels.second));
      }

      if (labels.content) {
        right.push(labels.content);
      }

      right.unshift('<div class="input-wrap">');
      right.push('</div>');

      return '<div class="form-group ' + name + '-wrap">' + left.concat(right).join('') + '</div>';
    };

    var btnStyles = function btnStyles(style, type) {
      var tags = {
        button: 'btn'
      };
      var styles = opts.messages.styles[tags[type]];
      var styleField = '';

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
     * Add a number attribute to a field.
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String} markup for number attribute
     */
    var numberAttribute = function numberAttribute(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      var attrVal = values[attribute];
      var attrLabel = opts.messages[attribute] || attribute;
      var placeholder = opts.messages.placeholders[attribute];
      var inputConfig = {
        type: 'number',
        value: attrVal,
        name: attribute,
        min: '0',
        placeholder: placeholder,
        className: 'fld-' + attribute + ' form-control',
        id: attribute + '-' + lastID
      };
      var numberAttribute = '<input ' + utils.attrString(utils.trimObj(inputConfig)) + '>';
      var inputWrap = '<div class="input-wrap">' + numberAttribute + '</div>';

      return '<div class="form-group ' + attribute + '-wrap"><label for="' + inputConfig.id + '">' + attrLabel + '</label> ' + inputWrap + '</div>';
    };

    /**
     * selectAttribute
     * @param  {String} attribute  attribute name
     * @param  {Object} values     aka attrs
     * @param  {Array} optionData  select field option data
     * @return {String}            select input makrup
     */
    var selectAttribute = function selectAttribute(attribute, values, optionData) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }
      var selectOptions = optionData.map(function (option, i) {
        var optionAttrs = Object.assign({
          label: opts.messages.option + ' ' + i,
          value: undefined
        }, option);
        if (option.value === values[attribute]) {
          optionAttrs.selected = true;
        }
        return '<option ' + utils.attrString(utils.trimObj(optionAttrs)) + '>' + optionAttrs.label + '</option>';
      });
      var selectAttrs = {
        id: attribute + '-' + lastID,
        name: attribute,
        className: 'fld-' + attribute + ' form-control'
      };
      var label = '<label for="' + selectAttrs.id + '">' + (opts.messages[attribute] || utils.capitalize(attribute)) + '</label>';
      var select = '<select ' + utils.attrString(selectAttrs) + '>' + selectOptions.join('') + '</select>';
      var inputWrap = '<div class="input-wrap">' + select + '</div>';

      return '<div class="form-group ' + selectAttrs.name + '-wrap">' + label + inputWrap + '</div>';
    };

    /**
     * Generate some text inputs for field attributes, **will be replaced**
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String}
     */
    var textAttribute = function textAttribute(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      var placeholderFields = ['text', 'textarea', 'select'];

      var noName = ['header'];

      var textArea = ['paragraph'];

      var attrVal = values[attribute] || '';
      var attrLabel = opts.messages[attribute];
      if (attribute === 'label' && utils.inArray(values.type, textArea)) {
        attrLabel = opts.messages.content;
      }

      noName = noName.concat(opts.messages.subtypes.header, textArea);

      var placeholders = opts.messages.placeholders;
      var placeholder = placeholders[attribute] || '';
      var attributefield = '';
      var noMakeAttr = [];

      // Field has placeholder attribute
      if (attribute === 'placeholder' && !utils.inArray(values.type, placeholderFields)) {
        noMakeAttr.push(true);
      }

      // Field has name attribute
      if (attribute === 'name' && utils.inArray(values.type, noName)) {
        noMakeAttr.push(true);
      }

      if (!noMakeAttr.some(function (elem) {
        return elem === true;
      })) {
        var inputConfig = {
          name: attribute,
          placeholder: placeholder,
          className: 'fld-' + attribute + ' form-control',
          id: attribute + '-' + lastID
        };
        var attributeLabel = '<label for="' + inputConfig.id + '">' + attrLabel + '</label>';

        if (attribute === 'label' && utils.inArray(values.type, textArea) || attribute === 'value' && values.type === 'textarea') {
          attributefield += '<textarea ' + utils.attrString(inputConfig) + '>' + attrVal + '</textarea>';
        } else {
          inputConfig.value = attrVal;
          inputConfig.type = 'text';
          attributefield += '<input ' + utils.attrString(inputConfig) + '>';
        }

        var inputWrap = '<div class="input-wrap">' + attributefield + '</div>';

        attributefield = '<div class="form-group ' + attribute + '-wrap">' + attributeLabel + ' ' + inputWrap + '</div>';
      }

      return attributefield;
    };

    var requiredField = function requiredField(values) {
      var noRequire = ['header', 'paragraph', 'button'];
      var noMake = [];
      var requireField = '';

      if (utils.inArray(values.type, noRequire)) {
        noMake.push(true);
      }
      if (!noMake.some(function (elem) {
        return elem === true;
      })) {
        requireField = boolAttribute('required', values, { first: opts.messages.required });
      }

      return requireField;
    };

    // Append the new field to the editor
    var appendNewField = function appendNewField(values) {
      var type = values.type || 'text';
      var label = values.label || opts.messages[type] || opts.messages.label;
      var delBtn = utils.markup('a', opts.messages.remove, {
        id: 'del_' + lastID,
        className: 'del-button btn delete-confirm',
        title: opts.messages.removeMessage
      });
      var toggleBtn = utils.markup('a', null, {
        id: lastID + '-edit',
        className: 'toggle-form btn icon-pencil',
        title: opts.messages.hide
      });
      var copyBtn = utils.markup('a', opts.messages.copyButton, {
        id: lastID + '-copy',
        className: 'copy-button btn icon-copy',
        title: opts.messages.copyButtonTooltip
      });

      var liContents = utils.markup('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

      // Field preview Label
      liContents += '<label class="field-label">' + label + '</label>';

      if (values.description) {
        liContents += '<span class="tooltip-element" tooltip="' + values.description + '">?</span>';
      }

      var requiredDisplay = values.required ? 'style="display:inline"' : '';
      liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

      liContents += utils.markup('div', '', { className: 'prev-holder' }).outerHTML;
      liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
      liContents += '<div class="form-elements">';

      liContents += advFields(values);
      liContents += utils.markup('a', opts.messages.close, { className: 'close-field' }).outerHTML;

      liContents += '</div>';
      liContents += '</div>';

      var field = utils.markup('li', liContents, {
        'class': type + '-field form-field',
        'type': type,
        id: lastID
      });
      var $li = $(field);

      $li.data('fieldData', { attrs: values });
      if (typeof _helpers.stopIndex !== 'undefined') {
        $('> li', $sortableFields).eq(_helpers.stopIndex).before($li);
      } else {
        $sortableFields.append($li);
      }

      $('.sortable-options', $li).sortable({ update: function update() {
          return _helpers.updatePreview($li);
        } });

      _helpers.updatePreview($li);

      if (opts.editOnAdd) {
        _helpers.closeAllEdit($sortableFields);
        _helpers.toggleEdit(lastID);
      }

      if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
        opts.typeUserEvents[type].onadd(field);
      }

      lastID = _helpers.incrementId(lastID);
    };

    // Select field html, since there may be multiple
    var selectFieldOptions = function selectFieldOptions(name, optionData, multipleSelect) {
      var optionInputType = {
        selected: multipleSelect ? 'checkbox' : 'radio'
      };
      var optionDataOrder = ['value', 'label', 'selected'];
      var optionInputs = [];
      var optionTemplate = { selected: false, label: '', value: '' };

      optionData = Object.assign(optionTemplate, optionData);

      for (var i = optionDataOrder.length - 1; i >= 0; i--) {
        var prop = optionDataOrder[i];
        if (optionData.hasOwnProperty(prop)) {
          var attrs = {
            type: optionInputType[prop] || 'text',
            'class': 'option-' + prop,
            value: optionData[prop],
            name: name + '-option'
          };

          if (opts.messages.placeholders[prop]) {
            attrs.placeholder = opts.messages.placeholders[prop];
          }

          if (prop === 'selected' && optionData.selected === true) {
            attrs.checked = optionData.selected;
          }

          optionInputs.push(utils.markup('input', null, attrs));
        }
      }

      var removeAttrs = {
        className: 'remove btn',
        title: opts.messages.removeMessage
      };
      optionInputs.push(utils.markup('a', opts.messages.remove, removeAttrs));

      var field = utils.markup('li', optionInputs);

      return field.outerHTML;
    };

    var cloneItem = function cloneItem(currentItem) {
      var currentId = currentItem.attr('id');
      var type = currentItem.attr('type');
      var ts = new Date().getTime();
      var cloneName = type + '-' + ts;
      var $clone = currentItem.clone();

      $clone.find('[id]').each(function () {
        this.id = this.id.replace(currentId, lastID);
      });

      $clone.find('[for]').each(function () {
        this.setAttribute('for', this.getAttribute('for').replace(currentId, lastID));
      });

      $clone.each(function () {
        $('e:not(.form-elements)').each(function () {
          var newName = this.getAttribute('name');
          newName = newName.substring(0, newName.lastIndexOf('-') + 1);
          newName = newName + ts.toString();
          this.setAttribute('name', newName);
        });
      });

      $clone.find('.form-elements').find(':input').each(function () {
        if (this.getAttribute('name') === 'name') {
          var newVal = this.getAttribute('value');
          newVal = newVal.substring(0, newVal.lastIndexOf('-') + 1);
          newVal = newVal + ts.toString();
          this.setAttribute('value', newVal);
        }
      });

      $clone.attr('id', lastID);
      $clone.attr('name', cloneName);
      $clone.addClass('cloned');
      $('.sortable-options', $clone).sortable();

      if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
        opts.typeUserEvents[type].onclone($clone[0]);
      }

      lastID = _helpers.incrementId(lastID);
      return $clone;
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
          _helpers.updatePreview($field);
          _helpers.save();
        });
      }
    });

    // touch focus
    $sortableFields.on('touchstart', 'input', function (e) {
      var $input = $(this);
      if (e.handled !== true) {
        if ($input.attr('type') === 'checkbox') {
          $input.trigger('click');
        } else {
          $input.focus();
          var fieldVal = $input.val();
          $input.val(fieldVal);
        }
      } else {
        return false;
      }
    });

    // toggle fields
    $sortableFields.on('click touchstart', '.toggle-form, .close-field', function (e) {
      e.stopPropagation();
      e.preventDefault();
      if (e.handled !== true) {
        var targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
        _helpers.toggleEdit(targetID);
        e.handled = true;
      } else {
        return false;
      }
    });

    $sortableFields.on('change', '.prev-holder input, .prev-holder select', function (e) {
      if (e.target.classList.contains('other-option')) {
        return;
      }
      var field = $(e.target).closest('li.form-field')[0];
      if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
        field.querySelector('[class="option-value"][value="' + e.target.value + '"]').parentElement.childNodes[0].checked = true;
      } else {
        document.getElementById('value-' + field.id).value = e.target.value;
      }

      _helpers.save();
    });

    // update preview to label
    $sortableFields.on('keyup change', '[name="label"]', function (e) {
      $('.field-label', $(e.target).closest('li')).text($(e.target).val());
    });

    // remove error styling when users tries to correct mistake
    $sortableFields.delegate('input.error', 'keyup', function (e) {
      $(e.target).removeClass('error');
    });

    // update preview for description
    $sortableFields.on('keyup', 'input[name="description"]', function (e) {
      var $field = $(e.target).parents('.form-field:eq(0)');
      var closestToolTip = $('.tooltip-element', $field);
      var ttVal = $(e.target).val();
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

    $sortableFields.on('change', '.fld-multiple', function (e) {
      var newType = e.target.checked ? 'checkbox' : 'radio';

      $(e.target).parents('.form-elements:eq(0)').find('.sortable-options input.option-selected').each(function () {
        e.target.type = newType;
      });
    });

    // format name attribute
    $sortableFields.on('blur', 'input.fld-name', function (e) {
      e.target.value = _helpers.safename(e.target.value);
      if (e.target.value === '') {
        $(e.target).addClass('field-error').attr('placeholder', opts.messages.cannotBeEmpty);
      } else {
        $(e.target).removeClass('field-error');
      }
    });

    $sortableFields.on('blur', 'input.fld-maxlength', function (e) {
      e.target.value = _helpers.forceNumber(e.target.value);
    });

    // Copy field
    $sortableFields.on('click touchstart', '.icon-copy', function (e) {
      e.preventDefault();
      var currentItem = $(e.target).parent().parent('li');
      var $clone = cloneItem(currentItem);
      $clone.insertAfter(currentItem);
      _helpers.updatePreview($clone);
      _helpers.save();
    });

    // Delete field
    $sortableFields.on('click touchstart', '.delete-confirm', function (e) {
      e.preventDefault();

      var buttonPosition = e.target.getBoundingClientRect();
      var bodyRect = document.body.getBoundingClientRect();
      var coords = {
        pageX: buttonPosition.left + buttonPosition.width / 2,
        pageY: buttonPosition.top - bodyRect.top - 12
      };

      var deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
      var $field = $(document.getElementById(deleteID));

      document.addEventListener('modalClosed', function () {
        $field.removeClass('deleting');
      }, false);

      // Check if user is sure they want to remove the field
      if (opts.fieldRemoveWarn) {
        var warnH3 = utils.markup('h3', opts.messages.warning);
        var warnMessage = utils.markup('p', opts.messages.fieldRemoveWarning);
        _helpers.confirm([warnH3, warnMessage], function () {
          return _helpers.removeField(deleteID);
        }, coords);
        $field.addClass('deleting');
      } else {
        _helpers.removeField(deleteID);
      }
    });

    // Update button style selection
    $sortableFields.on('click', '.style-wrap button', function (e) {
      var $button = $(e.target);
      var styleVal = $button.val();
      var $btnStyle = $button.parent().prev('.btn-style');
      $btnStyle.val(styleVal);
      $button.siblings('.btn').removeClass('active');
      $button.addClass('active');
      _helpers.updatePreview($btnStyle.closest('.form-field'));
      _helpers.save();
    });

    // Attach a callback to toggle required asterisk
    $sortableFields.on('click', '.fld-required', function (e) {
      $(e.target).closest('.form-field').find('.required-asterisk').toggle();
    });

    // Attach a callback to toggle roles visibility
    $sortableFields.on('click', 'input.fld-access', function (e) {
      var roles = $(e.target).closest('.form-field').find('.available-roles');
      var enableRolesCB = $(e.target);
      roles.slideToggle(250, function () {
        if (!enableRolesCB.is(':checked')) {
          $('input[type="checkbox"]', roles).removeAttr('checked');
        }
      });
    });

    // Attach a callback to add new options
    $sortableFields.on('click', '.add-opt', function (e) {
      e.preventDefault();
      var $optionWrap = $(e.target).closest('.field-options');
      var $multiple = $('[name="multiple"]', $optionWrap);
      var $firstOption = $('.option-selected:eq(0)', $optionWrap);
      var isMultiple = false;

      if ($multiple.length) {
        isMultiple = $multiple.prop('checked');
      } else {
        isMultiple = $firstOption.attr('type') === 'checkbox';
      }

      var name = $firstOption.attr('name');

      $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
    });

    $sortableFields.on('mouseover mouseout', '.remove, .del-button', function (e) {
      return $(e.target).closest('.form-field').toggleClass('delete');
    });

    if (opts.showActionButtons) {
      // View XML
      var xmlButton = $(document.getElementById(frmbID + '-view-data'));
      xmlButton.click(function (e) {
        e.preventDefault();
        _helpers.showData();
      });

      // Clear all fields in form editor
      var clearButton = $(document.getElementById(frmbID + '-clear-all'));
      clearButton.click(function (e) {
        var fields = $('li.form-field');
        var buttonPosition = e.target.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        var coords = {
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
          _helpers.dialog('There are no fields to clear', coords);
        }
      });

      // Save Idea Template
      $(document.getElementById(frmbID + '-save')).click(function (e) {
        e.preventDefault();
        _helpers.save();
      });
    }

    _helpers.getData();
    loadFields();

    $sortableFields.css('min-height', $cbUL.height());

    // If option set, controls will remain in view in editor
    if (opts.stickyControls) {
      _helpers.stickyControls($sortableFields, cbUl);
    }

    document.dispatchEvent(formBuilder.events.loaded);

    // Make actions accessible
    formBuilder.actions = {
      clearFields: _helpers.removeAllfields,
      showData: _helpers.showData,
      save: _helpers.save,
      addField: function addField(field, index) {
        _helpers.stopIndex = $sortableFields[0].children.length ? index : undefined;
        prepFieldVars(field);
        document.dispatchEvent(formBuilder.events.fieldAdded);
      },
      removeField: _helpers.removeField,
      setData: function setData(formData) {
        _helpers.removeAllfields();
        _helpers.getData(formData);
        loadFields();
      }
    };

    return formBuilder;
  };

  $.fn.formBuilder = function (options) {
    if (!options) {
      options = {};
    }
    var elems = this;
    return elems.each(function (i) {
      var formBuilder = new FormBuilder(options, elems[i]);
      $(elems[i]).data('formBuilder', formBuilder);

      return formBuilder;
    });
  };
})(jQuery);

},{"./helpers.js":3,"./kc-toggle.js":4,"./polyfills.js":5,"./utils.js":6}],3:[function(require,module,exports){
'use strict';

function helpers(opts, formBuilder) {
  'use strict';

  var _helpers = {
    doCancel: false
  };

  var utils = require('./utils.js');
  formBuilder.events = require('./events.js');

  /**
   * Convert converts messy `cl#ssNames` into valid `class-names`
   *
   * @param  {string} str
   * @return {string}
   */
  _helpers.makeClassName = function (str) {
    str = str.replace(/[^\w\s\-]/gi, '');
    return utils.hyphenCase(str);
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
    var types = {
      type: $field.attr('type')
    },
        subtype = $('.fld-subtype', $field).val();

    if (subtype !== types.type) {
      types.subtype = subtype;
    }

    return types;
  };

  /**
   * Get option data for a field
   * @param  {Object} field jQuery field object
   * @return {Array}        Array of option values
   */
  _helpers.fieldOptionData = function (field) {
    var options = [];

    $('.sortable-options li', field).each(function () {
      var $option = $(this),
          selected = $('.option-selected', $option).is(':checked'),
          attrs = {
        label: $('.option-label', $option).val(),
        value: $('.option-value', $option).val()
      };

      if (selected) {
        attrs.selected = selected;
      }

      options.push(attrs);
    });

    return options;
  };

  /**
   * XML save
   *
   * @param  {Object} form sortableFields node
   */
  _helpers.xmlSave = function (form) {

    var formData = _helpers.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    utils.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;

      // Handle options
      if (field.type.match(/(select|checkbox-group|radio-group)/)) {
        var optionData = field.values,
            options = [];

        for (var i = 0; i < optionData.length; i++) {
          var option = utils.markup('option', optionData[i].label, optionData[i]).outerHTML;
          options.push('\n\t\t\t' + option);
        }
        options.push('\n\t\t');

        fieldContent = options.join('');
        delete field.values;
      }

      var xmlField = utils.markup('field', fieldContent, field);
      xml.push('\n\t\t' + xmlField.outerHTML);
    });

    xml.push('\n\t</fields>\n</form-template>');

    return xml.join('');
  };

  _helpers.prepData = function (form) {
    var formData = [];

    if (form.childNodes.length !== 0) {
      // build data object
      utils.forEach(form.childNodes, function (index, field) {
        var $field = $(field);

        if (!$field.hasClass('disabled')) {
          var match;
          var multipleField;

          (function () {
            var fieldData = _helpers.getTypes($field),
                roleVals = $('.roles-field:checked', field).map(function () {
              return this.value;
            }).get();

            $('[class*="fld-"]', field).each(function () {
              var name = utils.camelCase(this.name);
              fieldData[name] = this.type === 'checkbox' ? this.checked : this.value;
            });

            if (roleVals.length) {
              fieldData.role = roleVals.join(',');
            }

            fieldData.className = fieldData.className || fieldData.class; // backwards compatibility

            match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);

            if (match) {
              fieldData.style = match[1];
            }

            fieldData = utils.trimObj(fieldData);
            fieldData = utils.escapeAttrs(fieldData);

            multipleField = fieldData.type.match(/(select|checkbox-group|radio-group)/);


            if (multipleField) {
              fieldData.values = _helpers.fieldOptionData($field);
            }

            formData.push(fieldData);
          })();
        }
      });
    }

    return formData;
  };

  _helpers.jsonSave = function (form) {
    return window.JSON.stringify(_helpers.prepData(form), null, '\t');
  };

  _helpers.getData = function (formData) {

    var data = formData || opts.formData;

    if (!data) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return utils.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    formBuilder.formData = setData[opts.dataType](data) || [];

    return formBuilder.formData;
  };

  /**
   * Saves and returns formData
   * @return {XML|JSON}
   */
  _helpers.save = function () {
    var form = document.getElementById(opts.formID);

    var doSave = {
      xml: _helpers.xmlSave,
      json: _helpers.jsonSave
    };

    // save action for current `dataType`
    formBuilder.formData = doSave[opts.dataType](form);

    //trigger formSaved event
    document.dispatchEvent(formBuilder.events.formSaved);
    return formBuilder.formData;
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

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field jQuery wrapped dom object @todo, remove jQuery dependency
   */
  _helpers.updatePreview = function (field) {
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type'),
        $prevHolder = $('.prev-holder', field),
        previewData = {
      type: fieldType
    },
        preview;

    $('[class*="fld-"]', field).each(function () {
      var name = utils.camelCase(this.name);
      previewData[name] = this.type === 'checkbox' ? this.checked : this.value;
    });

    var style = $('.btn-style', field).val();
    if (style) {
      previewData.style = style;
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

    previewData = utils.trimObj(previewData);

    previewData.className = _helpers.classNames(field, previewData);
    $('.fld-className', field).val(previewData.className);

    field.data('fieldData', previewData);
    preview = utils.fieldRender(previewData, opts, true);

    $prevHolder.html(preview);

    $('input[toggle]', $prevHolder).kcToggle();
  };

  _helpers.debounce = function (func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
        var tt = utils.markup('p', title, { className: _helpers.disabledTT.className });
        field.append(tt);
      }
    },
    remove: function remove(field) {
      $('.frmb-tt', field).remove();
    }
  };

  _helpers.classNames = function (field, previewData) {
    var i = void 0,
        type = previewData.type,
        style = previewData.style;
    var className = field[0].querySelector('.fld-className').value;
    var classes = className.split(' ');
    var types = {
      button: 'btn',
      submit: 'btn'
    };

    var primaryType = types[type];

    if (primaryType) {
      if (style) {
        for (i = 0; i < classes.length; i++) {
          var re = new RegExp('(?:^|\s)' + primaryType + '-(.*?)(?:\s|$)+', 'g');
          var match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    }

    // reverse the array to put custom classes at end, remove any duplicates, convert to string, remove whitespace
    return utils.unique(classes).join(' ').trim();
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
    var overlay = utils.markup('div', null, {
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
    var coords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var overlay = _helpers.showOverlay();
    var yes = utils.markup('button', opts.messages.yes, { className: 'yes btn btn-success btn-sm' }),
        no = utils.markup('button', opts.messages.no, { className: 'no btn btn-danger btn-sm' });

    no.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();
      _helpers.closeConfirm(overlay);
    };

    var btnWrap = utils.markup('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = utils.markup('div', [message, btnWrap], { className: className });
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
    var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _helpers.showOverlay();

    className = 'form-builder-dialog ' + className;

    var miniModal = utils.markup('div', content, { className: className });
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

    document.dispatchEvent(formBuilder.events.modalOpened);

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

    if (!fields.length) {
      return false;
    }

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
      form.parentElement.dataset.content = opts.messages.getStarted;
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
    }, 400);
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
      var controlOrder = opts.controlOrder.concat(frmbFields.map(function (field) {
        return field.attrs.type;
      }));
      fieldOrder = utils.unique(controlOrder);
    } else {
      fieldOrder = window.JSON.parse(fieldOrder);
      fieldOrder = Object.keys(fieldOrder).map(function (i) {
        return fieldOrder[i];
      });
    }

    var newOrderFields = [];

    fieldOrder.forEach(function (fieldType) {
      var field = frmbFields.filter(function (field) {
        return field.attrs.type === fieldType;
      })[0];
      newOrderFields.push(field);
    });

    return newOrderFields.filter(Boolean);
  };

  /**
   * Close fields being editing
   * @param  {Object} stage
   */
  _helpers.closeAllEdit = function (stage) {
    var fields = $('> li.editing', stage),
        toggleBtns = $('.toggle-form', stage),
        editModes = $('.frm-holder', fields);

    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    editModes.hide();
    $('.prev-holder', fields).show();
  };

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

  /**
   * Controls follow scroll to the bottom of the editor
   * @param  {Object} $sortableFields
   * @param  {Object} cbUL
   */
  _helpers.stickyControls = function ($sortableFields, cbUL) {

    var $cbWrap = $(cbUL).parent(),
        $stageWrap = $sortableFields.parent(),
        cbWidth = $cbWrap.width(),
        cbPosition = cbUL.getBoundingClientRect();

    $(window).scroll(function () {

      var scrollTop = $(this).scrollTop();

      if (scrollTop > $stageWrap.offset().top) {

        var cbStyle = {
          position: 'fixed',
          width: cbWidth,
          top: 0,
          bottom: 'auto',
          right: 'auto',
          left: cbPosition.left
        };

        var cbOffset = $cbWrap.offset(),
            stageOffset = $stageWrap.offset(),
            cbBottom = cbOffset.top + $cbWrap.height(),
            stageBottom = stageOffset.top + $stageWrap.height();

        if (cbBottom > stageBottom && cbOffset.top !== stageOffset.top) {
          $cbWrap.css({
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            right: 0,
            left: 'auto'
          });
        }

        if (cbBottom < stageBottom || cbBottom === stageBottom && cbOffset.top > scrollTop) {
          $cbWrap.css(cbStyle);
        }
      } else {
        cbUL.parentElement.removeAttribute('style');
      }
    });
  };

  /**
   * Open a dialog with the form's data
   */
  _helpers.showData = function () {
    var data = utils.escapeHtml(formBuilder.formData),
        code = utils.markup('code', data, { className: 'formData-' + opts.dataType }),
        pre = utils.markup('pre', code);

    _helpers.dialog(pre, null, 'data-dialog');
  };

  /**
   * Remove a field from the stage
   * @param  {String}  fieldID ID of the field to be removed
   * @return {Boolean} fieldRemoved returns true if field is removed
   */
  _helpers.removeField = function (fieldID) {
    var fieldRemoved = false,
        form = document.getElementById(opts.formID),
        fields = form.getElementsByClassName('form-field');

    if (!fields.length) {
      console.warn('No fields to remove');
      return false;
    }

    if (!fieldID) {
      var availableIds = [].slice.call(fields).map(function (field) {
        return field.id;
      });
      console.warn('fieldID required to use `removeField` action.');
      console.warn('Available IDs: ' + availableIds.join(', '));
    }

    var field = document.getElementById(fieldID),
        $field = $(field);
    if (!field) {
      console.warn('Field not found');
      return false;
    }

    $field.slideUp(250, function () {
      $field.removeClass('deleting');
      $field.remove();
      fieldRemoved = true;
      _helpers.save();
      if (!form.childNodes.length) {
        var stageWrap = form.parentElement;
        stageWrap.classList.add('empty');
        stageWrap.dataset.content = opts.messages.getStarted;
      }
    });

    document.dispatchEvent(formBuilder.events.fieldRemoved);
    return fieldRemoved;
  };

  return _helpers;
}

module.exports = helpers;

},{"./events.js":1,"./utils.js":6}],4:[function(require,module,exports){
'use strict';

var kcToggle = function kcToggle() {
  var Toggle = function Toggle(element, options) {
    var defaults = {
      theme: 'fresh',
      messages: {
        off: 'Off',
        on: 'On'
      }
    };

    var opts = $.extend(defaults, options);
    var $kcToggle = $('<div class="kc-toggle"/>').insertAfter(element).append(element);

    $kcToggle.toggleClass('on', element.is(':checked'));

    var kctOn = '<div class="kct-on">' + opts.messages.on + '</div>';
    var kctOff = '<div class="kct-off">' + opts.messages.off + '</div>';
    var kctHandle = '<div class="kct-handle"></div>';
    var kctInner = '<div class="kct-inner">' + kctOn + kctHandle + kctOff + '</div>';

    $kcToggle.append(kctInner);

    $kcToggle.click(function (evt) {
      element.attr('checked', !element.attr('checked'));
      $kcToggle.toggleClass('on');
    });
  };

  $.fn.kcToggle = function (options) {
    var toggle = this;
    return toggle.each(function (i) {
      var element = $(toggle[i]);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(element, options);
      element.data('kcToggle', kcToggle);
    });
  };
};

module.exports = kcToggle();

},{}],5:[function(require,module,exports){
'use strict';

/**
 * Polyfills for older browsers and added functionality
 * @return {void}
 */
function polyfills() {
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

  // Object.assign polyfill
  if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
      'use strict';

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
}

module.exports = polyfills();

},{}],6:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (fbUtils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && fbUtils.validAttr(attr)) {
      attr = fbUtils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

fbUtils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || fbUtils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
fbUtils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {String}
 */
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  contentType = getContentType(content);

  if (content) {
    appendContent[contentType].call(this, content);
  }

  return field;
};

/**
 * Convert html element attributes to key/value object
 * @param  {Object} DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

/**
 * Convert field options to optionData
 * @param  {Object} DOM element
 * @return {Array}      optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option'),
      optionData = {},
      data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = fbUtils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }
  }

  return data;
};

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml'),
      formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = fbUtils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} arrArg array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

/**
 * Generate preview markup
 * @param  {Object}  fieldData
 * @param  {Object}  opts
 * @param  {Boolean} preview
 * @return {String}  preview markup for field
 */
fbUtils.fieldRender = function (fieldData, opts) {
  var preview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var fieldMarkup = '';
  var fieldLabel = '';
  var optionsMarkup = '';
  var fieldLabelText = fieldData.label || '';
  var fieldDesc = fieldData.description || '';
  var fieldRequired = '';
  var fieldOptions = fieldData.values;

  fieldData.name = preview ? fieldData.name + '-preview' : fieldData.name;
  fieldData.id = fieldData.name;
  if (fieldData.multiple) {
    fieldData.name = fieldData.name + '[]';
  }

  fieldData.type = fieldData.subtype || fieldData.type;

  if (fieldData.required) {
    fieldData.required = null;
    fieldData['aria-required'] = 'true';
    fieldRequired = '<span class="required">*</span>';
  }

  if (fieldData.type !== 'hidden') {
    if (fieldDesc) {
      fieldDesc = '<span class="tooltip-element" tooltip="' + fieldDesc + '">?</span>';
    }
    fieldLabel = '<label for="' + fieldData.id + '" class="fb-' + fieldData.type + '-label">' + fieldLabelText + ' ' + fieldRequired + ' ' + fieldDesc + '</label>';
  }

  var fieldLabelVal = fieldData.label;

  delete fieldData.label;
  delete fieldData.description;

  var fieldDataString = fbUtils.attrString(fieldData);

  switch (fieldData.type) {
    case 'textarea':
    case 'rich-text':
      delete fieldData.type;
      var fieldVal = fieldData.value || '';
      fieldMarkup = fieldLabel + '<textarea ' + fieldDataString + '>' + fieldVal + '</textarea>';
      break;
    case 'select':
      var optionAttrsString = void 0;
      fieldData.type = fieldData.type.replace('-group', '');

      if (fieldOptions) {
        if (fieldData.placeholder) {
          optionsMarkup += '<option disabled selected>' + fieldData.placeholder + '</option>';
        }

        for (var i = 0; i < fieldOptions.length; i++) {
          if (!fieldOptions[i].selected || fieldData.placeholder) {
            delete fieldOptions[i].selected;
          }
          if (!fieldOptions[i].label) {
            fieldOptions[i].label = '';
          }
          optionAttrsString = fbUtils.attrString(fieldOptions[i]);
          optionsMarkup += '<option ' + optionAttrsString + '>' + fieldOptions[i].label + '</option>';
        }
      }

      fieldMarkup = fieldLabel + '<select ' + fieldDataString + '>' + optionsMarkup + '</select>';
      break;
    case 'checkbox-group':
    case 'radio-group':
      var optionAttrs = void 0;
      fieldData.type = fieldData.type.replace('-group', '');

      if (fieldData.type === 'checkbox') {
        fieldData.name = fieldData.name + '[]';
      }

      if (fieldOptions) {
        var _optionAttrsString = void 0;

        for (var _i = 0; _i < fieldOptions.length; _i++) {
          optionAttrs = Object.assign({ value: '', label: '' }, fieldData, fieldOptions[_i]);

          if (optionAttrs.selected) {
            delete optionAttrs.selected;
            optionAttrs.checked = null;
          }

          optionAttrs.id = fieldData.id + '-' + _i;
          _optionAttrsString = fbUtils.attrString(optionAttrs);
          optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + optionAttrs.id + '">' + optionAttrs.label + '</label><br>';
        }

        if (fieldData.other) {
          var otherOptionAttrs = {
            id: fieldData.id + '-' + 'other',
            className: fieldData.className + ' other-option',
            onclick: 'fbUtils.otherOptionCB(\'' + fieldData.id + '-other\')'
          };

          _optionAttrsString = fbUtils.attrString(Object.assign({}, fieldData, otherOptionAttrs));

          optionsMarkup += '<input ' + _optionAttrsString + ' /> <label for="' + otherOptionAttrs.id + '">' + opts.messages.other + '</label> <input type="text" name="' + fieldData.name + '" id="' + otherOptionAttrs.id + '-value" style="display:none;" />';
        }
      }
      fieldMarkup = fieldLabel + '<div class="' + fieldData.type + '-group">' + optionsMarkup + '</div>';
      break;
    case 'text':
    case 'password':
    case 'email':
    case 'number':
    case 'file':
    case 'hidden':
    case 'date':
    case 'tel':
    case 'autocomplete':
      fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '>';
      break;
    case 'color':
      fieldMarkup = fieldLabel + ' <input ' + fieldDataString + '> ' + opts.messages.selectColor;
      break;
    case 'button':
    case 'submit':
      fieldMarkup = '<button ' + fieldDataString + '>' + fieldLabelVal + '</button>';
      break;
    case 'checkbox':
      fieldMarkup = '<input ' + fieldDataString + '> ' + fieldLabel;

      if (fieldData.toggle) {
        setTimeout(function () {
          $(document.getElementById(fieldData.id)).kcToggle();
        }, 100);
      }
      break;
    default:
      fieldMarkup = '<' + fieldData.type + ' ' + fieldDataString + '>' + fieldLabelVal + '</' + fieldData.type + '>';
  }

  if (fieldData.type !== 'hidden') {
    var className = fieldData.id ? 'fb-' + fieldData.type + ' form-group field-' + fieldData.id : '';
    fieldMarkup = fbUtils.markup('div', fieldMarkup, {
      className: className
    });
  } else {
    fieldMarkup = fbUtils.markup('input', null, fieldData);
  }

  return fieldMarkup;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
fbUtils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInput.style.display = 'none';
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInput.style.display = 'inline-block';
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};
//   return fbUtils;
// }

module.exports = fbUtils;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBSUE7QUFDRSxJQUFNLFNBQVMsRUFBZjs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsSUFBSSxLQUFKLENBQVUsUUFBVixDQUFoQjtBQUNBLE9BQU8sUUFBUCxHQUFrQixJQUFJLEtBQUosQ0FBVSxVQUFWLENBQWxCO0FBQ0EsT0FBTyxZQUFQLEdBQXNCLElBQUksS0FBSixDQUFVLGNBQVYsQ0FBdEI7QUFDQSxPQUFPLFdBQVAsR0FBcUIsSUFBSSxLQUFKLENBQVUsYUFBVixDQUFyQjtBQUNBLE9BQU8sV0FBUCxHQUFxQixJQUFJLEtBQUosQ0FBVSxhQUFWLENBQXJCO0FBQ0EsT0FBTyxTQUFQLEdBQW1CLElBQUksS0FBSixDQUFVLFdBQVYsQ0FBbkI7QUFDQSxPQUFPLFVBQVAsR0FBb0IsSUFBSSxLQUFKLENBQVUsWUFBVixDQUFwQjtBQUNBLE9BQU8sWUFBUCxHQUFzQixJQUFJLEtBQUosQ0FBVSxjQUFWLENBQXRCOztBQUVGO0FBQ0E7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7OztBQ25CQSxRQUFRLGdCQUFSO0FBQ0EsUUFBUSxnQkFBUjs7QUFFQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1gsTUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFBMkI7QUFBQTs7QUFDN0MsUUFBSSxjQUFjLElBQWxCOztBQUVBLFFBQUksV0FBVztBQUNiLHVCQUFpQixPQURKO0FBRWIsb0JBQWMsQ0FDWixjQURZLEVBRVosUUFGWSxFQUdaLFVBSFksRUFJWixnQkFKWSxF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QixTQUE5QixDQUFkO0FBQ0Q7O0FBRUQsU0FBTyxXQUFQO0FBQ0QsQ0FuSkg7O0FBcUpBOzs7OztBQUtBLFFBQVEsYUFBUixHQUF3QixVQUFDLE9BQUQsRUFBYTtBQUNuQyxNQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQW5CO0FBQ0EsTUFBTSxrQkFBa0IsU0FBUyxjQUFULENBQTJCLE9BQTNCLFlBQXhCOztBQUVBLE1BQUksV0FBVyxPQUFmLEVBQXdCO0FBQ3RCLGVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixNQUEzQjtBQUNBLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxjQUFoQztBQUNELEdBSEQsTUFHTztBQUNMLGVBQVcsS0FBWCxDQUFpQixPQUFqQixHQUEyQixjQUEzQjtBQUNBLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxNQUFoQztBQUNEO0FBQ0YsQ0FYRDs7QUFhQTs7Ozs7QUFLQSxRQUFRLFVBQVIsR0FBcUIsVUFBQyxHQUFELEVBQVM7QUFDNUIsU0FBTyxJQUFJLE9BQUosQ0FBWSxPQUFaLEVBQXFCLFVBQVMsQ0FBVCxFQUFZO0FBQ3BDLFdBQU8sRUFBRSxXQUFGLEVBQVA7QUFDRCxHQUZJLENBQVA7QUFHRCxDQUpEO0FBS0Y7QUFDQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZhcmlvdXMgZXZlbnRzIHRvIGJlIHRyaWdnZXJcbiAqL1xuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcbiAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XG4gIGV2ZW50cy52aWV3RGF0YSA9IG5ldyBFdmVudCgndmlld0RhdGEnKTtcbiAgZXZlbnRzLnVzZXJEZWNsaW5lZCA9IG5ldyBFdmVudCgndXNlckRlY2xpbmVkJyk7XG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcbiAgZXZlbnRzLm1vZGFsT3BlbmVkID0gbmV3IEV2ZW50KCdtb2RhbE9wZW5lZCcpO1xuICBldmVudHMuZm9ybVNhdmVkID0gbmV3IEV2ZW50KCdmb3JtU2F2ZWQnKTtcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVtb3ZlZCA9IG5ldyBFdmVudCgnZmllbGRSZW1vdmVkJyk7XG5cbi8vICAgcmV0dXJuIGV2ZW50cztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudHM7XG4iLCJyZXF1aXJlKCcuL2tjLXRvZ2dsZS5qcycpO1xucmVxdWlyZSgnLi9wb2x5ZmlsbHMuanMnKTtcblxuKGZ1bmN0aW9uKCQpIHtcbiAgY29uc3QgRm9ybUJ1aWxkZXIgPSBmdW5jdGlvbihvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgbGV0IGZvcm1CdWlsZGVyID0gdGhpcztcblxuICAgIGxldCBkZWZhdWx0cyA9IHtcbiAgICAgIGNvbnRyb2xQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGNvbnRyb2xPcmRlcjogW1xuICAgICAgICAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgICdwYXJhZ3JhcGgnLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJ1xuICAgICAgXSxcbiAgICAgIGRhdGFUeXBlOiAneG1sJyxcbiAgICAgIC8vIEFycmF5IG9mIGZpZWxkcyB0byBkaXNhYmxlXG4gICAgICBkaXNhYmxlRmllbGRzOiBbXSxcbiAgICAgIGVkaXRPbkFkZDogZmFsc2UsXG4gICAgICAvLyBVbmVkaXRhYmxlIGZpZWxkcyBvciBvdGhlciBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGVhclxuICAgICAgLy8gYmVmb3JlIGFuZCBhZnRlciByZWd1bGFyIGZpZWxkczpcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBwcmVwZW5kOiBmYWxzZSxcbiAgICAgIC8vIGFycmF5IG9mIG9iamVjdHMgd2l0aCBmaWVsZHMgdmFsdWVzXG4gICAgICAvLyBleDpcbiAgICAgIC8vIGRlZmF1bHRGaWVsZHM6IFt7XG4gICAgICAvLyAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gICAgICAvLyAgIG5hbWU6ICdmaXJzdC1uYW1lJyxcbiAgICAgIC8vICAgcmVxdWlyZWQ6ICd0cnVlJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdZb3VyIGZpcnN0IG5hbWUnLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH0sIHtcbiAgICAgIC8vICAgbGFiZWw6ICdQaG9uZScsXG4gICAgICAvLyAgIG5hbWU6ICdwaG9uZScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnSG93IGNhbiB3ZSByZWFjaCB5b3U/JyxcbiAgICAgIC8vICAgdHlwZTogJ3RleHQnXG4gICAgICAvLyB9XSxcbiAgICAgIGRlZmF1bHRGaWVsZHM6IFtdLFxuICAgICAgaW5wdXRTZXRzOiBbXSxcbiAgICAgIGZpZWxkUmVtb3ZlV2FybjogZmFsc2UsXG4gICAgICByb2xlczoge1xuICAgICAgICAxOiAnQWRtaW5pc3RyYXRvcidcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBhZGRPcHRpb246ICdBZGQgT3B0aW9uICsnLFxuICAgICAgICBhbGxGaWVsZHNSZW1vdmVkOiAnQWxsIGZpZWxkcyB3ZXJlIHJlbW92ZWQuJyxcbiAgICAgICAgYWxsb3dTZWxlY3Q6ICdBbGxvdyBTZWxlY3QnLFxuICAgICAgICBhbGxvd011bHRpcGxlRmlsZXM6ICdBbGxvdyB1c2VycyB0byB1cGxvYWQgbXVsdGlwbGUgZmlsZXMnLFxuICAgICAgICBhdXRvY29tcGxldGU6ICdBdXRvY29tcGxldGUnLFxuICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICBjYW5ub3RCZUVtcHR5OiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICBjaGVja2JveEdyb3VwOiAnQ2hlY2tib3ggR3JvdXAnLFxuICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgY2hlY2tib3hlczogJ0NoZWNrYm94ZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdDbGFzcycsXG4gICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgIGNsZWFyQWxsOiAnQ2xlYXInLFxuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICBjb3B5OiAnQ29weSBUbyBDbGlwYm9hcmQnLFxuICAgICAgICBjb3B5QnV0dG9uOiAnJiM0MzsnLFxuICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICBkYXRlRmllbGQ6ICdEYXRlIEZpZWxkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdIZWxwIFRleHQnLFxuICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXZNb2RlOiAnRGV2ZWxvcGVyIE1vZGUnLFxuICAgICAgICBlZGl0TmFtZXM6ICdFZGl0IE5hbWVzJyxcbiAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgZWRpdFhNTDogJ0VkaXQgWE1MJyxcbiAgICAgICAgZW5hYmxlT3RoZXI6ICdFbmFibGUgJnF1b3Q7T3RoZXImcXVvdDsnLFxuICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICBmaWVsZERlbGV0ZVdhcm5pbmc6IGZhbHNlLFxuICAgICAgICBmaWVsZFZhcnM6ICdGaWVsZCBWYXJpYWJsZXMnLFxuICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgIGZpZWxkUmVtb3ZlV2FybmluZzogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBmaWVsZD8nLFxuICAgICAgICBmaWxlVXBsb2FkOiAnRmlsZSBVcGxvYWQnLFxuICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgIGdldFN0YXJ0ZWQ6ICdEcmFnIGEgZmllbGQgZnJvbSB0aGUgcmlnaHQgdG8gdGhpcyBhcmVhJyxcbiAgICAgICAgaGVhZGVyOiAnSGVhZGVyJyxcbiAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICBoaWRkZW46ICdIaWRkZW4gSW5wdXQnLFxuICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgbGFiZWxFbXB0eTogJ0ZpZWxkIExhYmVsIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgIGxpbWl0Um9sZTogJ0xpbWl0IGFjY2VzcyB0byBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIHJvbGVzOicsXG4gICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgIG1heGxlbmd0aDogJ01heCBMZW5ndGgnLFxuICAgICAgICBtaW5PcHRpb25NZXNzYWdlOiAnVGhpcyBmaWVsZCByZXF1aXJlcyBhIG1pbmltdW0gb2YgMiBvcHRpb25zJyxcbiAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICBubzogJ05vJyxcbiAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbicsXG4gICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICBvcHRpb25MYWJlbFBsYWNlaG9sZGVyOiAnTGFiZWwnLFxuICAgICAgICBvcHRpb25WYWx1ZVBsYWNlaG9sZGVyOiAnVmFsdWUnLFxuICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgIG90aGVyOiAnT3RoZXInLFxuICAgICAgICBwYXJhZ3JhcGg6ICdQYXJhZ3JhcGgnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgcGxhY2Vob2xkZXJzOiB7XG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgdGV4dGFyZWE6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3BhY2Ugc2VwYXJhdGVkIGNsYXNzZXMnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICByYWRpbzogJ1JhZGlvJyxcbiAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgIHJlbW92ZTogJyYjMjE1OycsXG4gICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICByb2xlczogJ0FjY2VzcycsXG4gICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgc2VsZWN0T3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgICBzZWxlY3Q6ICdTZWxlY3QnLFxuICAgICAgICBzZWxlY3RDb2xvcjogJ1NlbGVjdCBDb2xvcicsXG4gICAgICAgIHNlbGVjdGlvbnNNZXNzYWdlOiAnQWxsb3cgTXVsdGlwbGUgU2VsZWN0aW9ucycsXG4gICAgICAgIHNpemU6ICdTaXplJyxcbiAgICAgICAgc2l6ZXM6IHtcbiAgICAgICAgICB4czogJ0V4dHJhIFNtYWxsJyxcbiAgICAgICAgICBzbTogJ1NtYWxsJyxcbiAgICAgICAgICBtOiAnRGVmYXVsdCcsXG4gICAgICAgICAgbGc6ICdMYXJnZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6ICdTdHlsZScsXG4gICAgICAgIHN0eWxlczoge1xuICAgICAgICAgIGJ0bjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICBkYW5nZXI6ICdEYW5nZXInLFxuICAgICAgICAgICAgaW5mbzogJ0luZm8nLFxuICAgICAgICAgICAgcHJpbWFyeTogJ1ByaW1hcnknLFxuICAgICAgICAgICAgc3VjY2VzczogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgd2FybmluZzogJ1dhcm5pbmcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWJ0eXBlOiAnVHlwZScsXG4gICAgICAgIHRleHQ6ICdUZXh0IEZpZWxkJyxcbiAgICAgICAgdGV4dEFyZWE6ICdUZXh0IEFyZWEnLFxuICAgICAgICB0b2dnbGU6ICdUb2dnbGUnLFxuICAgICAgICB3YXJuaW5nOiAnV2FybmluZyEnLFxuICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICAgICAgdmlld0pTT046ICd7ICB9JyxcbiAgICAgICAgdmlld1hNTDogJyZsdDsvJmd0OycsXG4gICAgICAgIHllczogJ1llcydcbiAgICAgIH0sXG4gICAgICBub3RpZnk6IHtcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FybmluZzogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzb3J0YWJsZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHN0aWNreUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgIHNob3dBY3Rpb25CdXR0b25zOiB0cnVlLFxuICAgICAgdHlwZVVzZXJBdHRyczoge30sXG4gICAgICB0eXBlVXNlckV2ZW50czoge30sXG4gICAgICBwcmVmaXg6ICdmb3JtLWJ1aWxkZXItJ1xuICAgIH07XG5cbiAgICBjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcblxuICAgIGRlZmF1bHRzLm1lc3NhZ2VzLnN1YnR5cGVzID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IHN1YnR5cGVEZWZhdWx0ID0gKHN1YnR5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYWJlbDogc3VidHlwZSxcbiAgICAgICAgICB2YWx1ZTogc3VidHlwZVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiBbJ3RleHQnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAnY29sb3InLCAndGVsJ11cbiAgICAgICAgICAubWFwKHN1YnR5cGVEZWZhdWx0KSxcbiAgICAgICAgICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXVxuICAgICAgICAgIC5tYXAoc3VidHlwZURlZmF1bHQpLFxuICAgICAgICAgIGJ1dHRvbjogWydidXR0b24nLCAnc3VibWl0JywgJ3Jlc2V0J11cbiAgICAgICAgICAubWFwKHN1YnR5cGVEZWZhdWx0KSxcbiAgICAgICAgICBwYXJhZ3JhcGg6IFsncCcsICdhZGRyZXNzJywgJ2Jsb2NrcXVvdGUnLCAnY2FudmFzJywgJ291dHB1dCddXG4gICAgICAgICAgLm1hcChzdWJ0eXBlRGVmYXVsdClcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgbGV0IGZybWJJRCA9ICdmcm1iLScgKyAkKCd1bFtpZF49ZnJtYi1dJykubGVuZ3RoKys7XG5cbiAgICBpZiAob3B0aW9ucy5tZXNzYWdlcykge1xuICAgICAgb3B0cy5tZXNzYWdlcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLm1lc3NhZ2VzLCBvcHRpb25zLm1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBvcHRzLmZvcm1JRCA9IGZybWJJRDtcblxuICAgIGZvcm1CdWlsZGVyLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgbGV0ICRzb3J0YWJsZUZpZWxkcyA9ICQoJzx1bC8+JykuYXR0cignaWQnLCBmcm1iSUQpLmFkZENsYXNzKCdmcm1iJyk7XG4gICAgbGV0IF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzLmpzJykob3B0cywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgZm9ybUJ1aWxkZXIubGF5b3V0ID0gX2hlbHBlcnMuZWRpdG9yTGF5b3V0KG9wdHMuY29udHJvbFBvc2l0aW9uKTtcblxuICAgIGxldCBsYXN0SUQgPSBmcm1iSUQgKyAnLWZsZC0xJztcbiAgICBsZXQgYm94SUQgPSBmcm1iSUQgKyAnLWNvbnRyb2wtYm94JztcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBmaWVsZCBvYmplY3RzIHRvIGN5Y2xlIHRocm91Z2hcbiAgICBsZXQgZnJtYkZpZWxkcyA9IFt7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5hdXRvY29tcGxldGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgbmFtZTogJ2F1dG9jb21wbGV0ZSdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5idXR0b24sXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uLWlucHV0JyxcbiAgICAgICAgbmFtZTogJ2J1dHRvbidcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5jaGVja2JveCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmNoZWNrYm94R3JvdXAsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICBjbGFzc05hbWU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgICAgIG5hbWU6ICdjaGVja2JveC1ncm91cCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5kYXRlRmllbGQsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhbGVuZGFyJyxcbiAgICAgICAgbmFtZTogJ2RhdGUtaW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuZmlsZVVwbG9hZCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnZmlsZS1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdmaWxlLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmhlYWRlcixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICBjbGFzc05hbWU6ICdoZWFkZXInXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuaGlkZGVuLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2hpZGRlbi1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdoaWRkZW4taW5wdXQnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMubnVtYmVyLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIG5hbWU6ICdudW1iZXInXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMucGFyYWdyYXBoLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFncmFwaCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5yYWRpb0dyb3VwLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgY2xhc3NOYW1lOiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBuYW1lOiAncmFkaW8tZ3JvdXAnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuc2VsZWN0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdCcsXG4gICAgICAgIG5hbWU6ICdzZWxlY3QnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMudGV4dCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICd0ZXh0LWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnRleHRBcmVhLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGV4dC1hcmVhJyxcbiAgICAgICAgbmFtZTogJ3RleHRhcmVhJ1xuICAgICAgfVxuICAgIH1dO1xuXG4gICAgZnJtYkZpZWxkcyA9IF9oZWxwZXJzLm9yZGVyRmllbGRzKGZybWJGaWVsZHMpO1xuXG4gICAgaWYgKG9wdHMuZGlzYWJsZUZpZWxkcykge1xuICAgICAgLy8gcmVtb3ZlIGRpc2FibGVkRmllbGRzXG4gICAgICBmcm1iRmllbGRzID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KGZpZWxkLmF0dHJzLnR5cGUsIG9wdHMuZGlzYWJsZUZpZWxkcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZHJhZ2dhYmxlIGZpZWxkcyBmb3IgZm9ybUJ1aWxkZXJcbiAgICBsZXQgY2JVbCA9IHV0aWxzLm1hcmt1cCgndWwnLCBudWxsLCB7aWQ6IGJveElELCBjbGFzc05hbWU6ICdmcm1iLWNvbnRyb2wnfSk7XG5cbiAgICBpZiAob3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICBjYlVsLmNsYXNzTGlzdC5hZGQoJ3NvcnQtZW5hYmxlZCcpO1xuICAgIH1cblxuICAgIGxldCAkY2JVTCA9ICQoY2JVbCk7XG5cbiAgICAvLyBMb29wIHRocm91Z2hcbiAgICB1dGlscy5mb3JFYWNoKGZybWJGaWVsZHMsIChpKSA9PiB7XG4gICAgICBsZXQgJGZpZWxkID0gJCgnPGxpLz4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdpY29uLScgKyBmcm1iRmllbGRzW2ldLmF0dHJzLmNsYXNzTmFtZSxcbiAgICAgICAgJ3R5cGUnOiBmcm1iRmllbGRzW2ldLnR5cGUsXG4gICAgICAgICduYW1lJzogZnJtYkZpZWxkc1tpXS5jbGFzc05hbWUsXG4gICAgICAgICdsYWJlbCc6IGZybWJGaWVsZHNbaV0ubGFiZWxcbiAgICAgIH0pO1xuXG4gICAgICAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJywgZnJtYkZpZWxkc1tpXSk7XG5cbiAgICAgIGxldCB0eXBlTGFiZWwgPSB1dGlscy5tYXJrdXAoJ3NwYW4nLCBmcm1iRmllbGRzW2ldLmxhYmVsKTtcbiAgICAgICRmaWVsZC5odG1sKHR5cGVMYWJlbCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdHMuaW5wdXRTZXRzLmxlbmd0aCkge1xuICAgICAgJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2ZiLXNlcGFyYXRvcid9KS5odG1sKCc8aHI+JykuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgb3B0cy5pbnB1dFNldHMuZm9yRWFjaCgoc2V0KSA9PiB7XG4gICAgICAgIHNldC5uYW1lID0gc2V0Lm5hbWUgfHwgX2hlbHBlcnMubWFrZUNsYXNzTmFtZShzZXQubGFiZWwpO1xuICAgICAgICBsZXQgJHNldCA9ICQoJzxsaS8+JywgeydjbGFzcyc6ICdpbnB1dC1zZXQtY29udHJvbCcsIHR5cGU6IHNldC5uYW1lfSk7XG4gICAgICAgICRzZXQuaHRtbChzZXQubGFiZWwpLmFwcGVuZFRvKCRjYlVMKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnRhYmxlIGZpZWxkc1xuICAgICRzb3J0YWJsZUZpZWxkcy5zb3J0YWJsZSh7XG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIG9wYWNpdHk6IDAuOSxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIHN0YXJ0OiBfaGVscGVycy5zdGFydE1vdmluZyxcbiAgICAgIHN0b3A6IF9oZWxwZXJzLnN0b3BNb3ZpbmcsXG4gICAgICBjYW5jZWw6ICdpbnB1dCwgc2VsZWN0LCAuZGlzYWJsZWQsIC5mb3JtLWdyb3VwLCAuYnRuJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnZnJtYi1wbGFjZWhvbGRlcidcbiAgICB9KTtcblxuICAgIC8vIENvbnRyb2xCb3ggd2l0aCBkaWZmZXJlbnQgZmllbGRzXG4gICAgJGNiVUwuc29ydGFibGUoe1xuICAgICAgaGVscGVyOiAnY2xvbmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgY29ubmVjdFdpdGg6ICRzb3J0YWJsZUZpZWxkcyxcbiAgICAgIGNhbmNlbDogJy5mYi1zZXBhcmF0b3InLFxuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcGxhY2Vob2xkZXI6ICd1aS1zdGF0ZS1oaWdobGlnaHQnLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIHJldmVydDogMTUwLFxuICAgICAgYmVmb3JlU3RvcDogX2hlbHBlcnMuYmVmb3JlU3RvcCxcbiAgICAgIGRpc3RhbmNlOiAzLFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pdGVtLnBhcmVudCgpWzBdID09PSAkc29ydGFibGVGaWVsZHNbMF0pIHtcbiAgICAgICAgICBwcm9jZXNzQ29udHJvbCh1aS5pdGVtKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2hlbHBlcnMuc2V0RmllbGRPcmRlcigkY2JVTCk7XG4gICAgICAgICAgX2hlbHBlcnMuZG9DYW5jZWwgPSAhb3B0cy5zb3J0YWJsZUNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvY2Vzc0NvbnRyb2wgPSAoY29udHJvbCkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1zZXQtY29udHJvbCcpKSB7XG4gICAgICAgIGxldCBpbnB1dFNldCA9IG9wdHMuaW5wdXRTZXRzLmZpbHRlcigoc2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNldC5uYW1lID09PSBjb250cm9sWzBdLnR5cGU7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICBpZiAoaW5wdXRTZXQuc2hvd0hlYWRlcikge1xuICAgICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdoZWFkZXInLFxuICAgICAgICAgICAgICBzdWJ0eXBlOiAnaDInLFxuICAgICAgICAgICAgICBpZDogaW5wdXRTZXQubmFtZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlucHV0U2V0LmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoaGVhZGVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFNldC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBwcmVwRmllbGRWYXJzKGZpZWxkLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwRmllbGRWYXJzKGNvbnRyb2wsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgJGZvcm1XcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctZm9ybS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdmb3JtLXdyYXAgZm9ybS1idWlsZGVyJyArIF9oZWxwZXJzLm1vYmlsZUNsYXNzKClcbiAgICB9KTtcblxuICAgIGxldCAkc3RhZ2VXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctc3RhZ2Utd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnc3RhZ2Utd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LnN0YWdlXG4gICAgfSk7XG5cbiAgICBsZXQgY2JXcmFwID0gJCgnPGRpdi8+Jywge1xuICAgICAgaWQ6IGZybWJJRCArICctY2Itd3JhcCcsXG4gICAgICAnY2xhc3MnOiAnY2Itd3JhcCAnICsgZm9ybUJ1aWxkZXIubGF5b3V0LmNvbnRyb2xzXG4gICAgfSkuYXBwZW5kKCRjYlVMWzBdKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBCdWlsZCBvdXIgaGVhZGVycyBhbmQgYWN0aW9uIGxpbmtzXG4gICAgICBsZXQgdmlld0RhdGFUZXh0O1xuICAgICAgaWYob3B0cy5kYXRhVHlwZSA9PT0gJ3htbCcpIHtcbiAgICAgICAgdmlld0RhdGFUZXh0ID0gb3B0cy5tZXNzYWdlcy52aWV3WE1MO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld0RhdGFUZXh0ID0gb3B0cy5tZXNzYWdlcy52aWV3SlNPTjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpZXdEYXRhID0gdXRpbHMubWFya3VwKCdidXR0b24nLCB2aWV3RGF0YVRleHQsIHtcbiAgICAgICAgaWQ6IGZybWJJRCArICctdmlldy1kYXRhJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ3ZpZXctZGF0YSBidG4gYnRuLWRlZmF1bHQnXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNsZWFyQWxsID0gdXRpbHMubWFya3VwKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLmNsZWFyQWxsLCB7XG4gICAgICAgIGlkOiBmcm1iSUQgKyAnLWNsZWFyLWFsbCcsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdjbGVhci1hbGwgYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgfSk7XG4gICAgICBjb25zdCBzYXZlQWxsID0gdXRpbHMubWFya3VwKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLnNhdmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYnRuIGJ0bi1wcmltYXJ5ICR7b3B0cy5wcmVmaXh9c2F2ZWAsXG4gICAgICAgIGlkOiBmcm1iSUQgKyAnLXNhdmUnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmb3JtQWN0aW9ucyA9IHV0aWxzLm1hcmt1cCgnZGl2JywgW2NsZWFyQWxsLCB2aWV3RGF0YSwgc2F2ZUFsbF0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1hY3Rpb25zIGJ0bi1ncm91cCdcbiAgICAgIH0pO1xuXG4gICAgICBjYldyYXAuYXBwZW5kKGZvcm1BY3Rpb25zKTtcbiAgICB9XG5cbiAgICAkc3RhZ2VXcmFwLmFwcGVuZCgkc29ydGFibGVGaWVsZHMsIGNiV3JhcCk7XG4gICAgJHN0YWdlV3JhcC5iZWZvcmUoJGZvcm1XcmFwKTtcbiAgICAkZm9ybVdyYXAuYXBwZW5kKCRzdGFnZVdyYXAsIGNiV3JhcCk7XG4gICAgJChlbGVtZW50KS5hcHBlbmQoJGZvcm1XcmFwKTtcblxuICAgIGxldCBzYXZlQW5kVXBkYXRlID0gX2hlbHBlcnMuZGVib3VuY2UoZXZ0ID0+IHtcbiAgICAgIGlmIChldnQpIHtcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5dXAnICYmIGV2dC50YXJnZXQubmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgJGZpZWxkID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xuICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNhdmUgZmllbGQgb24gY2hhbmdlXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjaGFuZ2UgYmx1ciBrZXl1cCcsICcuZm9ybS1lbGVtZW50cyBpbnB1dCwgLmZvcm0tZWxlbWVudHMgc2VsZWN0LCAuZm9ybS1lbGVtZW50cyB0ZXh0YXJlYScsIHNhdmVBbmRVcGRhdGUpO1xuXG4gICAgJCgnbGknLCAkY2JVTCkuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBsZXQgJGNvbnRyb2wgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy51aS1zb3J0YWJsZS1oYW5kbGUnKTtcbiAgICAgIF9oZWxwZXJzLnN0b3BJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgIHByb2Nlc3NDb250cm9sKCRjb250cm9sKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhcHBlbmQgYW5kIHByZXBlbmQgb3B0aW9ucyBpZiBuZWNlc3NhcnlcbiAgICBsZXQgbm9uRWRpdGFibGVGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjYW5jZWxBcnJheSA9IFtdO1xuXG4gICAgICBpZiAob3B0cy5wcmVwZW5kICYmICEkKCcuZGlzYWJsZWQucHJlcGVuZCcsICRzb3J0YWJsZUZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgIGxldCBwcmVwZW5kZWRGaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRzLnByZXBlbmQsIHtjbGFzc05hbWU6ICdkaXNhYmxlZCBwcmVwZW5kJ30pO1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMucHJlcGVuZChwcmVwZW5kZWRGaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmFwcGVuZCAmJiAhJCgnLmRpc2FibGVkLmFwcGVuZCcsICRzb3J0YWJsZUZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgIGxldCBhcHBlbmRlZEZpZWxkID0gdXRpbHMubWFya3VwKCdsaScsIG9wdHMuYXBwZW5kLCB7Y2xhc3NOYW1lOiAnZGlzYWJsZWQgYXBwZW5kJ30pO1xuICAgICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKGFwcGVuZGVkRmllbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBwcmVwRmllbGRWYXJzID0gZnVuY3Rpb24oJGZpZWxkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgICBsZXQgZmllbGQgPSB7fTtcbiAgICAgIGlmICgkZmllbGQgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9ICRmaWVsZC5kYXRhKCduZXdGaWVsZERhdGEnKTtcbiAgICAgICAgaWYgKGZpZWxkRGF0YSkge1xuICAgICAgICAgIGZpZWxkID0gZmllbGREYXRhLmF0dHJzO1xuICAgICAgICAgIGZpZWxkLmxhYmVsID0gZmllbGREYXRhLmxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBhdHRycyA9ICRmaWVsZFswXS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGlmICghaXNOZXcpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlcyA9ICRmaWVsZC5jaGlsZHJlbigpLm1hcCgoaW5kZXgsIGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJChlbGVtKS50ZXh0KCksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICQoZWxlbSkuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogQm9vbGVhbigkKGVsZW0pLmF0dHIoJ3NlbGVjdGVkJykpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZpZWxkW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZCA9IE9iamVjdC5hc3NpZ24oe30sICRmaWVsZCk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLm5hbWUgPSBpc05ldyA/IG5hbWVBdHRyKGZpZWxkKSA6ICggZmllbGQubmFtZSB8fCBuYW1lQXR0cihmaWVsZCkgKTtcblxuICAgICAgaWYgKGlzTmV3ICYmIHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSwgWyd0ZXh0JywgJ251bWJlcicsICdmaWxlJywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJzsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTmFtZSA9IGZpZWxkLmNsYXNzIHx8IGZpZWxkLmNsYXNzTmFtZTsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGQuY2xhc3NOYW1lKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBmaWVsZC5zdHlsZSA9IG1hdGNoWzFdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5lc2NhcGVBdHRycyhmaWVsZCk7XG5cbiAgICAgIGFwcGVuZE5ld0ZpZWxkKGZpZWxkKTtcbiAgICAgIGlmIChpc05ldykge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICAgIH1cbiAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlIHNhdmVkIFhNTCB0ZW1wbGF0ZSBkYXRhXG4gICAgbGV0IGxvYWRGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICAgICAgaWYgKGZvcm1EYXRhICYmIGZvcm1EYXRhLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhmb3JtRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5kZWZhdWx0RmllbGRzICYmIG9wdHMuZGVmYXVsdEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gTG9hZCBkZWZhdWx0IGZpZWxkcyBpZiBub25lIGFyZSBzZXRcbiAgICAgICAgb3B0cy5kZWZhdWx0RmllbGRzLmZvckVhY2goZmllbGQgPT4gcHJlcEZpZWxkVmFycyhmaWVsZCkpO1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfSBlbHNlIGlmICghb3B0cy5wcmVwZW5kICYmICFvcHRzLmFwcGVuZCkge1xuICAgICAgICAkc3RhZ2VXcmFwLmFkZENsYXNzKCdlbXB0eScpXG4gICAgICAgIC5hdHRyKCdkYXRhLWNvbnRlbnQnLCBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQpO1xuICAgICAgfVxuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuXG4gICAgICBsZXQgJGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQ6bm90KC5kaXNhYmxlZCknLCAkc29ydGFibGVGaWVsZHMpO1xuXG4gICAgICAkZmllbGRzLmVhY2goaSA9PiBfaGVscGVycy51cGRhdGVQcmV2aWV3KCQoJGZpZWxkc1tpXSkpKTtcblxuICAgICAgbm9uRWRpdGFibGVGaWVsZHMoKTtcbiAgICB9O1xuXG4gICAgLy8gY2FsbGJhY2sgdG8gdHJhY2sgZGlzYWJsZWQgdG9vbHRpcHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlbW92ZScsICdsaS5kaXNhYmxlZCcsIGUgPT4ge1xuICAgICAgJCgnLmZybWItdHQnLCB0aGlzKS5jc3Moe1xuICAgICAgICBsZWZ0OiBlLm9mZnNldFggLSAxNixcbiAgICAgICAgdG9wOiBlLm9mZnNldFkgLSAzNFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBjYWxsYmFjayB0byBjYWxsIGRpc2FibGVkIHRvb2x0aXBzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZWVudGVyJywgJ2xpLmRpc2FibGVkJywgZSA9PlxuICAgICAgX2hlbHBlcnMuZGlzYWJsZWRUVC5hZGQoJCh0aGlzKSkpO1xuXG4gICAgLy8gY2FsbGJhY2sgdG8gY2FsbCBkaXNhYmxlZCB0b29sdGlwc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2VsZWF2ZScsICdsaS5kaXNhYmxlZCcsIGUgPT5cbiAgICAgIF9oZWxwZXJzLmRpc2FibGVkVFQucmVtb3ZlKCQodGhpcykpKTtcblxuICAgIGxldCBuYW1lQXR0ciA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgZXBvY2ggPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBmaWVsZC50eXBlICsgJy0nICsgZXBvY2g7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBkYXRhIGZvciBmaWVsZCB3aXRoIG9wdGlvbnMgW3NlbGVjdCwgY2hlY2tib3gtZ3JvdXAsIHJhZGlvLWdyb3VwXVxuICAgICAqXG4gICAgICogQHRvZG8gICByZWZhY3RvciB0aGlzIG5hc3R5IH5jcmFwfiBjb2RlLCBpdHMgYWN0dWFsbHkgcGFpbmZ1bCB0byBsb29rIGF0XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZpZWxkIG9wdGlvbnMgbWFya3VwXG4gICAgICovXG4gICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IG9wdGlvbkFjdGlvbnMgPSBbXG4gICAgICAgICAgdXRpbHMubWFya3VwKCdhJywgb3B0cy5tZXNzYWdlcy5hZGRPcHRpb24sIHtjbGFzc05hbWU6ICdhZGQgYWRkLW9wdCd9KVxuICAgICAgICBdO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IFtcbiAgICAgICAgYDxsYWJlbCBjbGFzcz1cImZhbHNlLWxhYmVsXCI+JHtvcHRzLm1lc3NhZ2VzLnNlbGVjdE9wdGlvbnN9PC9sYWJlbD5gXG4gICAgICBdO1xuICAgICAgY29uc3QgaXNNdWx0aXBsZSA9IHZhbHVlcy5tdWx0aXBsZSB8fCAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpO1xuXG4gICAgICBpZiAoIXZhbHVlcy52YWx1ZXMgfHwgIXZhbHVlcy52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlcy52YWx1ZXMgPSBbMSwgMiwgM10ubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IGxhYmVsID0gYCR7b3B0cy5tZXNzYWdlcy5vcHRpb259ICR7aW5kZXh9YDtcbiAgICAgICAgICBsZXQgb3B0aW9uID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IHV0aWxzLmh5cGhlbkNhc2UobGFiZWwpXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsdWVzLnZhbHVlc1swXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbnN1cmUgb3B0aW9uIGRhdGEgaXMgaGFzIGFsbCByZXF1aXJlZCBrZXlzXG4gICAgICAgIHZhbHVlcy52YWx1ZXMuZm9yRWFjaChvcHRpb24gPT4gT2JqZWN0LmFzc2lnbih7fSwge3NlbGVjdGVkOiBmYWxzZX0sIG9wdGlvbikpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPGRpdiBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnMtd3JhcFwiPicpO1xuXG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCgnPG9sIGNsYXNzPVwic29ydGFibGUtb3B0aW9uc1wiPicpO1xuICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZXMudmFsdWVzLCAoaSkgPT4ge1xuICAgICAgICBmaWVsZE9wdGlvbnMucHVzaChzZWxlY3RGaWVsZE9wdGlvbnModmFsdWVzLm5hbWUsIHZhbHVlcy52YWx1ZXNbaV0sIGlzTXVsdGlwbGUpKTtcbiAgICAgIH0pO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzwvb2w+Jyk7XG4gICAgICBmaWVsZE9wdGlvbnMucHVzaCh1dGlscy5tYXJrdXAoJ2RpdicsIG9wdGlvbkFjdGlvbnMsIHtjbGFzc05hbWU6ICdvcHRpb24tYWN0aW9ucyd9KS5vdXRlckhUTUwpO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gdXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE9wdGlvbnMuam9pbignJyksIHtjbGFzc05hbWU6ICdmb3JtLWdyb3VwIGZpZWxkLW9wdGlvbnMnfSkub3V0ZXJIVE1MO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgZWRpdGFibGUgcHJvcGVydGllcyBmb3IgdGhlIGZpZWxkXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSB2YWx1ZXMgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIG1hcmt1cCBmb3IgYWR2YW5jZWQgZmllbGRzXG4gICAgICovXG4gICAgbGV0IGFkdkZpZWxkcyA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkcyA9IFtdO1xuICAgICAgbGV0IGtleTtcbiAgICAgIGxldCBvcHRpb25GaWVsZHMgPSBbXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICAncmFkaW8tZ3JvdXAnXG4gICAgICBdO1xuICAgICAgbGV0IGlzT3B0aW9uRmllbGQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9uRmllbGRzLmluZGV4T2YodmFsdWVzLnR5cGUpICE9PSAtMSk7XG4gICAgICB9KSgpO1xuICAgICAgbGV0IHZhbHVlRmllbGQgPSAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgWydoZWFkZXInLCAncGFyYWdyYXBoJywgJ2ZpbGUnXS5jb25jYXQob3B0aW9uRmllbGRzKSk7XG4gICAgICBsZXQgcm9sZXMgPSB2YWx1ZXMucm9sZSAhPT0gdW5kZWZpbmVkID8gdmFsdWVzLnJvbGUuc3BsaXQoJywnKSA6IFtdO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChyZXF1aXJlZEZpZWxkKHZhbHVlcykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgndG9nZ2xlJywgdmFsdWVzLCB7Zmlyc3Q6IG9wdHMubWVzc2FnZXMudG9nZ2xlfSkpO1xuICAgICAgfVxuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlcykpO1xuXG4gICAgICB2YWx1ZXMuc2l6ZSA9IHZhbHVlcy5zaXplIHx8ICdtJztcbiAgICAgIHZhbHVlcy5zdHlsZSA9IHZhbHVlcy5zdHlsZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAgIC8vIEhlbHAgVGV4dCAvIERlc2NyaXB0aW9uIEZpZWxkXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdidXR0b24nXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnZGVzY3JpcHRpb24nLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMubWVzc2FnZXMuc3VidHlwZXNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gb3B0cy5tZXNzYWdlcy5zdWJ0eXBlc1t2YWx1ZXMudHlwZV07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHNlbGVjdEF0dHJpYnV0ZSgnc3VidHlwZScsIHZhbHVlcywgb3B0aW9uRGF0YSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJ0blN0eWxlcyh2YWx1ZXMuc3R5bGUsIHZhbHVlcy50eXBlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtaW4nLCB2YWx1ZXMpKTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXgnLCB2YWx1ZXMpKTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdzdGVwJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlaG9sZGVyXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlcykpO1xuXG4gICAgICAvLyBUZXh0QXJlYSBSb3dzIEF0dHJpYnV0ZVxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgncm93cycsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGFzc1xuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnY2xhc3NOYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZXMpKTtcblxuICAgICAgaWYgKHZhbHVlRmllbGQpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgbGV0IGxhYmVscyA9IHtcbiAgICAgICAgICBmaXJzdDogb3B0cy5tZXNzYWdlcy5tdWx0aXBsZUZpbGVzLFxuICAgICAgICAgIHNlY29uZDogb3B0cy5tZXNzYWdlcy5hbGxvd011bHRpcGxlRmlsZXNcbiAgICAgICAgfTtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIGxhYmVscykpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcm9sZXNEaXNwbGF5ID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/ICdzdHlsZT1cImRpc3BsYXk6YmxvY2tcIicgOiAnJztcbiAgICAgIGxldCBhdmFpbGFibGVSb2xlcyA9IFtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhdmFpbGFibGUtcm9sZXNcIiAke3JvbGVzRGlzcGxheX0+YFxuICAgICAgXTtcbiAgICAgIGZvciAoa2V5IGluIG9wdHMucm9sZXMpIHtcbiAgICAgICAgaWYgKG9wdHMucm9sZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGxldCBjaGVja2VkID0gdXRpbHMuaW5BcnJheShrZXksIHJvbGVzKSA/ICdjaGVja2VkJyA6ICcnO1xuICAgICAgICAgIGxldCByb2xlSWQgPSBgZmxkLSR7bGFzdElEfS1yb2xlcy0ke2tleX1gO1xuICAgICAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicm9sZXNbXVwiIHZhbHVlPVwiJHtrZXl9XCIgaWQ9XCIke3JvbGVJZH1cIiAke2NoZWNrZWR9IGNsYXNzPVwicm9sZXMtZmllbGRcIiAvPiA8bGFiZWwgZm9yPVwiJHtyb2xlSWR9XCI+JHtvcHRzLnJvbGVzW2tleV19PC9sYWJlbD48YnIvPmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGF2YWlsYWJsZVJvbGVzLnB1c2goJzwvZGl2PicpO1xuXG4gICAgICBsZXQgYWNjZXNzTGFiZWxzID0ge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLnJvbGVzLCBzZWNvbmQ6IG9wdHMubWVzc2FnZXMubGltaXRSb2xlLCBjb250ZW50OiBhdmFpbGFibGVSb2xlcy5qb2luKCcnKX07XG5cbiAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ2FjY2VzcycsIHZhbHVlcywgYWNjZXNzTGFiZWxzKSk7XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2NoZWNrYm94LWdyb3VwJyB8fCB2YWx1ZXMudHlwZSA9PT0gJ3JhZGlvLWdyb3VwJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdvdGhlcicsIHZhbHVlcywge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLmVuYWJsZU90aGVyLCBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuZW5hYmxlT3RoZXJNc2d9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCB2YWx1ZXMsIHtmaXJzdDogJyAnLCBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuc2VsZWN0aW9uc01lc3NhZ2V9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc09wdGlvbkZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGZpZWxkT3B0aW9ucyh2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsndGV4dCcsICd0ZXh0YXJlYSddKSkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgY3VzdG9tIGF0dHJpYnV0ZXMgYXMgZGVmaW5lZCBpbiB0eXBlVXNlckF0dHJzIG9wdGlvblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0pIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gocHJvY2Vzc1R5cGVVc2VyQXR0cnMob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSwgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZHZGaWVsZHMuam9pbignJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0eXBlVXNlckF0dHJzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB0eXBlVXNlckF0dHIgb3B0aW9uXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgICAgZmllbGQgYXR0cmlidXRlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgICAgIG1hcmt1cCBmb3IgY3VzdG9tIHVzZXIgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NUeXBlVXNlckF0dHJzKHR5cGVVc2VyQXR0ciwgdmFsdWVzKSB7XG4gICAgICBsZXQgYWR2RmllbGQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIHR5cGVVc2VyQXR0cikge1xuICAgICAgICBpZiAodHlwZVVzZXJBdHRyLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICBsZXQgb3JpZyA9IG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXTtcbiAgICAgICAgICBsZXQgb3JpZ1ZhbHVlID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWU7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSB8fCAnJztcblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5sYWJlbCkge1xuICAgICAgICAgICAgb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdID0gdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goc2VsZWN0VXNlckF0dHJzKGF0dHJpYnV0ZSwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWR2RmllbGQucHVzaChpbnB1dFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdID0gb3JpZztcbiAgICAgICAgICB0eXBlVXNlckF0dHJbYXR0cmlidXRlXS52YWx1ZSA9IG9yaWdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGQuam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGV4dCBpbnB1dCB2YWx1ZSBmb3IgYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBhbHNvIGtub3duIGFzIHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgaW5wdXQgbWFya3VwXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5wdXRVc2VyQXR0cnMobmFtZSwgYXR0cnMpIHtcbiAgICAgIGxldCB0ZXh0QXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgdGl0bGU6IGF0dHJzLmRlc2NyaXB0aW9uIHx8IGF0dHJzLmxhYmVsIHx8IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IGF0dHJzLnR5cGUgfHwgJ3RleHQnLFxuICAgICAgICAgIGNsYXNzTmFtZTogW2BmbGQtJHtuYW1lfWBdXG4gICAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7dGV4dEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1tuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIGlmICghdXRpbHMuaW5BcnJheSh0ZXh0QXR0cnMudHlwZSwgWydjaGVja2JveCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddKSkge1xuICAgICAgICB0ZXh0QXR0cnMuY2xhc3NOYW1lLnB1c2goJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0QXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgdGV4dEF0dHJzKTtcbiAgICAgIGxldCB0ZXh0SW5wdXQgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh0ZXh0QXR0cnMpfT5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7dGV4dElucHV0fTwvZGl2PmA7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgaW5wdXQgZm9yIG11bHRpcGxlIGNob2ljZSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKiBAdG9kbyAgcmVwbGFjZSB3aXRoIHNlbGVjdEF0dHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgc2VsZWN0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFVzZXJBdHRycyhuYW1lLCBvcHRpb25zKSB7XG4gICAgICBsZXQgb3B0aXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLm1hcCh2YWwgPT4ge1xuICAgICAgICBsZXQgYXR0cnMgPSB7dmFsdWU6IHZhbH07XG4gICAgICAgIGlmICh2YWwgPT09IG9wdGlvbnMudmFsdWUpIHtcbiAgICAgICAgICBhdHRycy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyhhdHRycyl9PiR7b3B0aW9ucy5vcHRpb25zW3ZhbF19PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICBpZDogbmFtZSArICctJyArIGxhc3RJRCxcbiAgICAgICAgdGl0bGU6IG9wdGlvbnMuZGVzY3JpcHRpb24gfHwgb3B0aW9ucy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke25hbWV9IGZvcm0tY29udHJvbGBcbiAgICAgIH07XG4gICAgICBsZXQgbGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7c2VsZWN0QXR0cnMuaWR9XCI+JHtvcHRzLm1lc3NhZ2VzW25hbWVdfTwvbGFiZWw+YDtcblxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKHByb3AgPT4ge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmluQXJyYXkocHJvcCwgWyd2YWx1ZScsICdvcHRpb25zJywgJ2xhYmVsJ10pO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIHNlbGVjdEF0dHJzW2F0dHJdID0gb3B0aW9uc1thdHRyXTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtvcHRpcy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGFiZWx9JHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9XG5cbiAgICBsZXQgYm9vbEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlcywgbGFiZWxzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsID0gKHR4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsYWJlbCBmb3I9XCIke25hbWV9LSR7bGFzdElEfVwiPiR7dHh0fTwvbGFiZWw+YDtcbiAgICAgIH07XG4gICAgICBsZXQgY2hlY2tlZCA9ICh2YWx1ZXNbbmFtZV0gIT09IHVuZGVmaW5lZCA/ICdjaGVja2VkJyA6ICcnKTtcbiAgICAgIGxldCBpbnB1dCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmbGQtJHtuYW1lfVwiIG5hbWU9XCIke25hbWV9XCIgdmFsdWU9XCJ0cnVlXCIgJHtjaGVja2VkfSBpZD1cIiR7bmFtZX0tJHtsYXN0SUR9XCIvPiBgO1xuICAgICAgbGV0IGxlZnQgPSBbXTtcbiAgICAgIGxldCByaWdodCA9IFtcbiAgICAgICAgaW5wdXRcbiAgICAgIF07XG5cbiAgICAgIGlmIChsYWJlbHMuZmlyc3QpIHtcbiAgICAgICAgbGVmdC51bnNoaWZ0KGxhYmVsKGxhYmVscy5maXJzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFiZWxzLnNlY29uZCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVsKGxhYmVscy5zZWNvbmQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5jb250ZW50KSB7XG4gICAgICAgIHJpZ2h0LnB1c2gobGFiZWxzLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICByaWdodC51bnNoaWZ0KCc8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPicpO1xuICAgICAgcmlnaHQucHVzaCgnPC9kaXY+Jyk7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtuYW1lfS13cmFwXCI+JHtsZWZ0LmNvbmNhdChyaWdodCkuam9pbignJyl9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgbGV0IGJ0blN0eWxlcyA9IGZ1bmN0aW9uKHN0eWxlLCB0eXBlKSB7XG4gICAgICBsZXQgdGFncyA9IHtcbiAgICAgICAgICBidXR0b246ICdidG4nXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzdHlsZXMgPSBvcHRzLm1lc3NhZ2VzLnN0eWxlc1t0YWdzW3R5cGVdXTtcbiAgICAgICAgbGV0IHN0eWxlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGVMYWJlbCA9IGA8bGFiZWw+JHtvcHRzLm1lc3NhZ2VzLnN0eWxlfTwvbGFiZWw+YDtcbiAgICAgICAgc3R5bGVGaWVsZCArPSBgPGlucHV0IHZhbHVlPVwiJHtzdHlsZX1cIiBuYW1lPVwic3R5bGVcIiB0eXBlPVwiaGlkZGVuXCIgY2xhc3M9XCJidG4tc3R5bGVcIj5gO1xuICAgICAgICBzdHlsZUZpZWxkICs9ICc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+JztcblxuICAgICAgICBPYmplY3Qua2V5cyhvcHRzLm1lc3NhZ2VzLnN0eWxlc1t0YWdzW3R5cGVdXSkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZSA9IHN0eWxlID09PSBlbGVtZW50ID8gJ2FjdGl2ZScgOiAnJztcbiAgICAgICAgICBzdHlsZUZpZWxkICs9IGA8YnV0dG9uIHZhbHVlPVwiJHtlbGVtZW50fVwiIHR5cGU9XCIke3R5cGV9XCIgY2xhc3M9XCIke2FjdGl2ZX0gYnRuLXhzICR7dGFnc1t0eXBlXX0gJHt0YWdzW3R5cGVdfS0ke2VsZW1lbnR9XCI+JHtvcHRzLm1lc3NhZ2VzLnN0eWxlc1t0YWdzW3R5cGVdXVtlbGVtZW50XX08L2J1dHRvbj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHlsZUZpZWxkICs9ICc8L2Rpdj4nO1xuXG4gICAgICAgIHN0eWxlRmllbGQgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc3R5bGUtd3JhcFwiPiR7c3R5bGVMYWJlbH0gJHtzdHlsZUZpZWxkfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZUZpZWxkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBudW1iZXIgYXR0cmlidXRlIHRvIGEgZmllbGQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ30gbWFya3VwIGZvciBudW1iZXIgYXR0cmlidXRlXG4gICAgICovXG4gICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGF0dHJMYWJlbCA9IG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBvcHRzLm1lc3NhZ2VzLnBsYWNlaG9sZGVyc1thdHRyaWJ1dGVdO1xuICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgdmFsdWU6IGF0dHJWYWwsXG4gICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgbWluOiAnMCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICB9O1xuICAgICAgbGV0IG51bWJlckF0dHJpYnV0ZSA9IGA8aW5wdXQgJHt1dGlscy5hdHRyU3RyaW5nKHV0aWxzLnRyaW1PYmooaW5wdXRDb25maWcpKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke251bWJlckF0dHJpYnV0ZX08L2Rpdj5gO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+PGxhYmVsIGZvcj1cIiR7aW5wdXRDb25maWcuaWR9XCI+JHthdHRyTGFiZWx9PC9sYWJlbD4gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2VsZWN0QXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGUgIGF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXMgICAgIGFrYSBhdHRyc1xuICAgICAqIEBwYXJhbSAge0FycmF5fSBvcHRpb25EYXRhICBzZWxlY3QgZmllbGQgb3B0aW9uIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgc2VsZWN0IGlucHV0IG1ha3J1cFxuICAgICAqL1xuICAgIGxldCBzZWxlY3RBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcywgb3B0aW9uRGF0YSkge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gb3B0aW9uRGF0YS5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBsYWJlbDogYCR7b3B0cy5tZXNzYWdlcy5vcHRpb259ICR7aX1gLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSwgb3B0aW9uKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVzW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgICBvcHRpb25BdHRycy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8b3B0aW9uICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKG9wdGlvbkF0dHJzKSl9PiR7b3B0aW9uQXR0cnMubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgIH0pO1xuICAgICAgbGV0IHNlbGVjdEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBhdHRyaWJ1dGUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgICAgbmFtZTogYXR0cmlidXRlLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYFxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1thdHRyaWJ1dGVdIHx8IHV0aWxzLmNhcGl0YWxpemUoYXR0cmlidXRlKX08L2xhYmVsPmA7XG4gICAgICBsZXQgc2VsZWN0ID0gYDxzZWxlY3QgJHt1dGlscy5hdHRyU3RyaW5nKHNlbGVjdEF0dHJzKX0+JHtzZWxlY3RPcHRpb25zLmpvaW4oJycpfTwvc2VsZWN0PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtzZWxlY3R9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke3NlbGVjdEF0dHJzLm5hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHNvbWUgdGV4dCBpbnB1dHMgZm9yIGZpZWxkIGF0dHJpYnV0ZXMsICoqd2lsbCBiZSByZXBsYWNlZCoqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBsZXQgdGV4dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWVzKSB7XG4gICAgICBpZiAob3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXSAmJiBvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJGaWVsZHMgPSBbXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAgJ3NlbGVjdCdcbiAgICAgIF07XG5cbiAgICAgIGxldCBub05hbWUgPSBbXG4gICAgICAgICdoZWFkZXInXG4gICAgICBdO1xuXG4gICAgICBsZXQgdGV4dEFyZWEgPSBbJ3BhcmFncmFwaCddO1xuXG4gICAgICBsZXQgYXR0clZhbCA9IHZhbHVlc1thdHRyaWJ1dGVdIHx8ICcnO1xuICAgICAgbGV0IGF0dHJMYWJlbCA9IG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXTtcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdsYWJlbCcgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgdGV4dEFyZWEpKSB7XG4gICAgICAgIGF0dHJMYWJlbCA9IG9wdHMubWVzc2FnZXMuY29udGVudDtcbiAgICAgIH1cblxuICAgICAgbm9OYW1lID0gbm9OYW1lLmNvbmNhdChvcHRzLm1lc3NhZ2VzLnN1YnR5cGVzLmhlYWRlciwgdGV4dEFyZWEpO1xuXG4gICAgICBsZXQgcGxhY2Vob2xkZXJzID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnM7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcnNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyaWJ1dGVmaWVsZCA9ICcnO1xuICAgICAgbGV0IG5vTWFrZUF0dHIgPSBbXTtcblxuICAgICAgLy8gRmllbGQgaGFzIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3BsYWNlaG9sZGVyJyAmJiAhdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgcGxhY2Vob2xkZXJGaWVsZHMpKSB7XG4gICAgICAgIG5vTWFrZUF0dHIucHVzaCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmllbGQgaGFzIG5hbWUgYXR0cmlidXRlXG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbmFtZScgJiYgdXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9OYW1lKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbm9NYWtlQXR0ci5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgbGV0IGlucHV0Q29uZmlnID0ge1xuICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBgZmxkLSR7YXR0cmlidXRlfSBmb3JtLWNvbnRyb2xgLFxuICAgICAgICAgIGlkOiBgJHthdHRyaWJ1dGV9LSR7bGFzdElEfWBcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZUxhYmVsID0gYDxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSB8fCAoYXR0cmlidXRlID09PSAndmFsdWUnICYmIHZhbHVlcy50eXBlID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgICAgIGF0dHJpYnV0ZWZpZWxkICs9IGA8dGV4dGFyZWEgJHt1dGlscy5hdHRyU3RyaW5nKGlucHV0Q29uZmlnKX0+JHthdHRyVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dENvbmZpZy52YWx1ZSA9IGF0dHJWYWw7XG4gICAgICAgICAgaW5wdXRDb25maWcudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PmA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHthdHRyaWJ1dGVmaWVsZH08L2Rpdj5gO1xuXG4gICAgICAgIGF0dHJpYnV0ZWZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7YXR0cmlidXRlfS13cmFwXCI+JHthdHRyaWJ1dGVMYWJlbH0gJHtpbnB1dFdyYXB9PC9kaXY+YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZWZpZWxkO1xuICAgIH07XG5cbiAgICBsZXQgcmVxdWlyZWRGaWVsZCA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgbGV0IG5vUmVxdWlyZSA9IFtcbiAgICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgICAnYnV0dG9uJ1xuICAgICAgICBdO1xuICAgICAgbGV0IG5vTWFrZSA9IFtdO1xuICAgICAgbGV0IHJlcXVpcmVGaWVsZCA9ICcnO1xuXG4gICAgICBpZiAodXRpbHMuaW5BcnJheSh2YWx1ZXMudHlwZSwgbm9SZXF1aXJlKSkge1xuICAgICAgICBub01ha2UucHVzaCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghbm9NYWtlLnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICByZXF1aXJlRmllbGQgPSBib29sQXR0cmlidXRlKCdyZXF1aXJlZCcsIHZhbHVlcywge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLnJlcXVpcmVkfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXF1aXJlRmllbGQ7XG4gICAgfTtcblxuICAgIC8vIEFwcGVuZCB0aGUgbmV3IGZpZWxkIHRvIHRoZSBlZGl0b3JcbiAgICBsZXQgYXBwZW5kTmV3RmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCB0eXBlID0gdmFsdWVzLnR5cGUgfHwgJ3RleHQnO1xuICAgICAgbGV0IGxhYmVsID0gdmFsdWVzLmxhYmVsIHx8IG9wdHMubWVzc2FnZXNbdHlwZV0gfHwgb3B0cy5tZXNzYWdlcy5sYWJlbDtcbiAgICAgIGxldCBkZWxCdG4gPSB1dGlscy5tYXJrdXAoJ2EnLCBvcHRzLm1lc3NhZ2VzLnJlbW92ZSwge1xuICAgICAgICAgIGlkOiAnZGVsXycgKyBsYXN0SUQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnZGVsLWJ1dHRvbiBidG4gZGVsZXRlLWNvbmZpcm0nLFxuICAgICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICBsZXQgdG9nZ2xlQnRuID0gdXRpbHMubWFya3VwKCdhJywgbnVsbCwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1lZGl0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAndG9nZ2xlLWZvcm0gYnRuIGljb24tcGVuY2lsJyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMuaGlkZVxuICAgICAgfSk7XG4gICAgICBsZXQgY29weUJ0biA9IHV0aWxzLm1hcmt1cCgnYScsIG9wdHMubWVzc2FnZXMuY29weUJ1dHRvbiwge1xuICAgICAgICBpZDogbGFzdElEICsgJy1jb3B5JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY29weS1idXR0b24gYnRuIGljb24tY29weScsXG4gICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLmNvcHlCdXR0b25Ub29sdGlwXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpQ29udGVudHMgPSB1dGlscy5tYXJrdXAoXG4gICAgICAgICdkaXYnLCBbdG9nZ2xlQnRuLCBjb3B5QnRuLCBkZWxCdG5dLCB7Y2xhc3NOYW1lOiAnZmllbGQtYWN0aW9ucyd9XG4gICAgICApLm91dGVySFRNTDtcblxuICAgICAgLy8gRmllbGQgcHJldmlldyBMYWJlbFxuICAgICAgbGlDb250ZW50cyArPSBgPGxhYmVsIGNsYXNzPVwiZmllbGQtbGFiZWxcIj4ke2xhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgaWYgKHZhbHVlcy5kZXNjcmlwdGlvbikge1xuICAgICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke3ZhbHVlcy5kZXNjcmlwdGlvbn1cIj4/PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXF1aXJlZERpc3BsYXkgPSB2YWx1ZXMucmVxdWlyZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiJyA6ICcnO1xuICAgICAgbGlDb250ZW50cyArPSBgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiICR7cmVxdWlyZWREaXNwbGF5fT4gKjwvc3Bhbj5gO1xuXG4gICAgICBsaUNvbnRlbnRzICs9IHV0aWxzLm1hcmt1cCgnZGl2JywgJycsIHtjbGFzc05hbWU6ICdwcmV2LWhvbGRlcid9KS5vdXRlckhUTUw7XG4gICAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGlkPVwiJyArIGxhc3RJRCArICctaG9sZGVyXCIgY2xhc3M9XCJmcm0taG9sZGVyXCI+JztcbiAgICAgIGxpQ29udGVudHMgKz0gJzxkaXYgY2xhc3M9XCJmb3JtLWVsZW1lbnRzXCI+JztcblxuICAgICAgbGlDb250ZW50cyArPSBhZHZGaWVsZHModmFsdWVzKTtcbiAgICAgIGxpQ29udGVudHMgKz0gdXRpbHMubWFya3VwKCdhJywgb3B0cy5tZXNzYWdlcy5jbG9zZSwge2NsYXNzTmFtZTogJ2Nsb3NlLWZpZWxkJ30pLm91dGVySFRNTDtcblxuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcbiAgICAgIGxpQ29udGVudHMgKz0gJzwvZGl2Pic7XG5cbiAgICAgIGxldCBmaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBsaUNvbnRlbnRzLCB7XG4gICAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXG4gICAgICAgICAgJ3R5cGUnOiB0eXBlLFxuICAgICAgICAgIGlkOiBsYXN0SURcbiAgICAgICAgfSk7XG4gICAgICBsZXQgJGxpID0gJChmaWVsZCk7XG5cbiAgICAgICRsaS5kYXRhKCdmaWVsZERhdGEnLCB7YXR0cnM6IHZhbHVlc30pO1xuICAgICAgaWYgKHR5cGVvZiBfaGVscGVycy5zdG9wSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoJz4gbGknLCAkc29ydGFibGVGaWVsZHMpLmVxKF9oZWxwZXJzLnN0b3BJbmRleCkuYmVmb3JlKCRsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc29ydGFibGVGaWVsZHMuYXBwZW5kKCRsaSk7XG4gICAgICB9XG5cbiAgICAgICQoJy5zb3J0YWJsZS1vcHRpb25zJywgJGxpKVxuICAgICAgLnNvcnRhYmxlKHt1cGRhdGU6ICgpID0+IF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKX0pO1xuXG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRsaSk7XG5cbiAgICAgIGlmIChvcHRzLmVkaXRPbkFkZCkge1xuICAgICAgICBfaGVscGVycy5jbG9zZUFsbEVkaXQoJHNvcnRhYmxlRmllbGRzKTtcbiAgICAgICAgX2hlbHBlcnMudG9nZ2xlRWRpdChsYXN0SUQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXSAmJiBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25hZGQoZmllbGQpO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgIH07XG5cbiAgICAvLyBTZWxlY3QgZmllbGQgaHRtbCwgc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlXG4gICAgbGV0IHNlbGVjdEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbkRhdGEsIG11bHRpcGxlU2VsZWN0KSB7XG4gICAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xuICAgICAgICAgIHNlbGVjdGVkOiAobXVsdGlwbGVTZWxlY3QgPyAnY2hlY2tib3gnIDogJ3JhZGlvJylcbiAgICAgICAgfTtcbiAgICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzZWxlY3RlZCdcbiAgICAgIF07XG4gICAgICBsZXQgb3B0aW9uSW5wdXRzID0gW107XG4gICAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XG5cbiAgICAgIG9wdGlvbkRhdGEgPSBPYmplY3QuYXNzaWduKG9wdGlvblRlbXBsYXRlLCBvcHRpb25EYXRhKTtcblxuICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbkRhdGFPcmRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgcHJvcCA9IG9wdGlvbkRhdGFPcmRlcltpXTtcbiAgICAgICAgaWYgKG9wdGlvbkRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgICB0eXBlOiBvcHRpb25JbnB1dFR5cGVbcHJvcF0gfHwgJ3RleHQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdGlvbi0nICsgcHJvcCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25EYXRhW3Byb3BdLFxuICAgICAgICAgICAgbmFtZTogbmFtZSArICctb3B0aW9uJ1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAob3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbcHJvcF0pIHtcbiAgICAgICAgICAgIGF0dHJzLnBsYWNlaG9sZGVyID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3AgPT09ICdzZWxlY3RlZCcgJiYgb3B0aW9uRGF0YS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0cnMuY2hlY2tlZCA9IG9wdGlvbkRhdGEuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGF0dHJzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHJlbW92ZUF0dHJzID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdyZW1vdmUgYnRuJyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMucmVtb3ZlTWVzc2FnZVxuICAgICAgfTtcbiAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnYScsIG9wdHMubWVzc2FnZXMucmVtb3ZlLCByZW1vdmVBdHRycykpO1xuXG4gICAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcblxuICAgICAgcmV0dXJuIGZpZWxkLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgbGV0IGNsb25lSXRlbSA9IGZ1bmN0aW9uIGNsb25lSXRlbShjdXJyZW50SXRlbSkge1xuICAgICAgbGV0IGN1cnJlbnRJZCA9IGN1cnJlbnRJdGVtLmF0dHIoJ2lkJyk7XG4gICAgICBsZXQgdHlwZSA9IGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKTtcbiAgICAgIGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGNsb25lTmFtZSA9IHR5cGUgKyAnLScgKyB0cztcbiAgICAgIGxldCAkY2xvbmUgPSBjdXJyZW50SXRlbS5jbG9uZSgpO1xuXG4gICAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7IHRoaXMuaWQgPSB0aGlzLmlkLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpOyB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKS5yZXBsYWNlKGN1cnJlbnRJZCwgbGFzdElEKSk7IH0pO1xuXG4gICAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnZTpub3QoLmZvcm0tZWxlbWVudHMpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgbmV3TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmF0dHIoJ2lkJywgbGFzdElEKTtcbiAgICAgICRjbG9uZS5hdHRyKCduYW1lJywgY2xvbmVOYW1lKTtcbiAgICAgICRjbG9uZS5hZGRDbGFzcygnY2xvbmVkJyk7XG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgICAgcmV0dXJuICRjbG9uZTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVVElMSVRJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gICAgLy8gZGVsZXRlIG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xuICAgICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBvcHRzLm1lc3NhZ2VzLm1pbk9wdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvdWNoIGZvY3VzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy50b2dnbGUtZm9ybSwgLmNsb3NlLWZpZWxkJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KHRhcmdldElEKTtcbiAgICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJy5wcmV2LWhvbGRlciBpbnB1dCwgLnByZXYtaG9sZGVyIHNlbGVjdCcsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3RoZXItb3B0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGZpZWxkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuZm9ybS1maWVsZCcpWzBdO1xuICAgICAgaWYgKHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSwgWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgZmllbGQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwib3B0aW9uLXZhbHVlXCJdW3ZhbHVlPVwiJyArIGUudGFyZ2V0LnZhbHVlICsgJ1wiXScpLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IHRvIGxhYmVsXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdrZXl1cCBjaGFuZ2UnLCAnW25hbWU9XCJsYWJlbFwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoJy5maWVsZC1sYWJlbCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykpLnRleHQoJChlLnRhcmdldCkudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgICAkc29ydGFibGVGaWVsZHMuZGVsZWdhdGUoJ2lucHV0LmVycm9yJywgJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XG4gICAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XG4gICAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgICBsZXQgbmV3VHlwZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcblxuICAgICAgJChlLnRhcmdldClcbiAgICAgIC5wYXJlbnRzKCcuZm9ybS1lbGVtZW50czplcSgwKScpXG4gICAgICAuZmluZCgnLnNvcnRhYmxlLW9wdGlvbnMgaW5wdXQub3B0aW9uLXNlbGVjdGVkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBlLnRhcmdldC50eXBlID0gbmV3VHlwZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9ybWF0IG5hbWUgYXR0cmlidXRlXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdibHVyJywgJ2lucHV0LmZsZC1uYW1lJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5zYWZlbmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICQoZS50YXJnZXQpXG4gICAgICAgIC5hZGRDbGFzcygnZmllbGQtZXJyb3InKVxuICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBvcHRzLm1lc3NhZ2VzLmNhbm5vdEJlRW1wdHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW1heGxlbmd0aCcsIGUgPT4ge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5mb3JjZU51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGZpZWxkXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5pY29uLWNvcHknLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XG4gICAgICBsZXQgJGNsb25lID0gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKTtcbiAgICAgICRjbG9uZS5pbnNlcnRBZnRlcihjdXJyZW50SXRlbSk7XG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRjbG9uZSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGUgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmRlbGV0ZS1jb25maXJtJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgfTtcblxuICAgICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVJRCkpO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc3VyZSB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWVsZFxuICAgICAgaWYgKG9wdHMuZmllbGRSZW1vdmVXYXJuKSB7XG4gICAgICAgIGxldCB3YXJuSDMgPSB1dGlscy5tYXJrdXAoJ2gzJywgb3B0cy5tZXNzYWdlcy53YXJuaW5nKTtcbiAgICAgICAgbGV0IHdhcm5NZXNzYWdlID0gdXRpbHMubWFya3VwKCdwJywgb3B0cy5tZXNzYWdlcy5maWVsZFJlbW92ZVdhcm5pbmcpO1xuICAgICAgICBfaGVscGVycy5jb25maXJtKFt3YXJuSDMsIHdhcm5NZXNzYWdlXSwgKCkgPT5cbiAgICAgICAgICBfaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCksIGNvb3Jkcyk7XG4gICAgICAgICRmaWVsZC5hZGRDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBidXR0b24gc3R5bGUgc2VsZWN0aW9uXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuc3R5bGUtd3JhcCBidXR0b24nLCBlID0+IHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcbiAgICAgIGxldCBzdHlsZVZhbCA9ICRidXR0b24udmFsKCk7XG4gICAgICBsZXQgJGJ0blN0eWxlID0gJGJ1dHRvbi5wYXJlbnQoKS5wcmV2KCcuYnRuLXN0eWxlJyk7XG4gICAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcbiAgICAgICRidXR0b24uc2libGluZ3MoJy5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkYnV0dG9uLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJlcXVpcmVkIGFzdGVyaXNrXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5yZXF1aXJlZC1hc3RlcmlzaycpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcbiAgICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFkZCBuZXcgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmFkZC1vcHQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgJG9wdGlvbldyYXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZmllbGQtb3B0aW9ucycpO1xuICAgICAgbGV0ICRtdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgICAgIGlmICgkbXVsdGlwbGUubGVuZ3RoKSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICgkZmlyc3RPcHRpb24uYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRvcHRpb25XcmFwKS5hcHBlbmQoc2VsZWN0RmllbGRPcHRpb25zKG5hbWUsIGZhbHNlLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlb3ZlciBtb3VzZW91dCcsICcucmVtb3ZlLCAuZGVsLWJ1dHRvbicsIGUgPT5cbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykudG9nZ2xlQ2xhc3MoJ2RlbGV0ZScpKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBWaWV3IFhNTFxuICAgICAgbGV0IHhtbEJ1dHRvbiA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJtYklEICsgJy12aWV3LWRhdGEnKSk7XG4gICAgICB4bWxCdXR0b24uY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9oZWxwZXJzLnNob3dEYXRhKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2xlYXIgYWxsIGZpZWxkcyBpbiBmb3JtIGVkaXRvclxuICAgICAgbGV0IGNsZWFyQnV0dG9uID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmcm1iSUQgKyAnLWNsZWFyLWFsbCcpKTtcbiAgICAgIGNsZWFyQnV0dG9uLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICAgICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBjb29yZHMgPSB7XG4gICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgX2hlbHBlcnMuY29uZmlybShvcHRzLm1lc3NhZ2VzLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgICAgICB9LCBjb29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9oZWxwZXJzLmRpYWxvZygnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsIGNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTYXZlIElkZWEgVGVtcGxhdGVcbiAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJtYklEICsgJy1zYXZlJykpLmNsaWNrKGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmdldERhdGEoKTtcbiAgICBsb2FkRmllbGRzKCk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gICAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcbiAgICBpZiAob3B0cy5zdGlja3lDb250cm9scykge1xuICAgICAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHNvcnRhYmxlRmllbGRzLCBjYlVsKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5sb2FkZWQpO1xuXG4gICAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgICAgY2xlYXJGaWVsZHM6IF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyxcbiAgICAgIHNob3dEYXRhOiBfaGVscGVycy5zaG93RGF0YSxcbiAgICAgIHNhdmU6IF9oZWxwZXJzLnNhdmUsXG4gICAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBfaGVscGVycy5zdG9wSW5kZXggPSAkc29ydGFibGVGaWVsZHNbMF0uY2hpbGRyZW4ubGVuZ3RoID8gaW5kZXggOiB1bmRlZmluZWQ7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGQpO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZEFkZGVkKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVGaWVsZDogX2hlbHBlcnMucmVtb3ZlRmllbGQsXG4gICAgICBzZXREYXRhOiBmb3JtRGF0YSA9PiB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcygpO1xuICAgICAgICBfaGVscGVycy5nZXREYXRhKGZvcm1EYXRhKTtcbiAgICAgICAgbG9hZEZpZWxkcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybUJ1aWxkZXI7XG4gIH07XG5cbiAgJC5mbi5mb3JtQnVpbGRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgbGV0IGVsZW1zID0gdGhpcztcbiAgICByZXR1cm4gZWxlbXMuZWFjaCgoaSkgPT4ge1xuICAgICAgbGV0IGZvcm1CdWlsZGVyID0gbmV3IEZvcm1CdWlsZGVyKG9wdGlvbnMsIGVsZW1zW2ldKTtcbiAgICAgICQoZWxlbXNbaV0pLmRhdGEoJ2Zvcm1CdWlsZGVyJywgZm9ybUJ1aWxkZXIpO1xuXG4gICAgICByZXR1cm4gZm9ybUJ1aWxkZXI7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuIiwiZnVuY3Rpb24gaGVscGVycyhvcHRzLCBmb3JtQnVpbGRlcikge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBfaGVscGVycyA9IHtcbiAgICBkb0NhbmNlbDogZmFsc2VcbiAgfTtcblxuICBjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcbiAgZm9ybUJ1aWxkZXIuZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMuanMnKTtcblxuICAvKipcbiAgICogQ29udmVydCBjb252ZXJ0cyBtZXNzeSBgY2wjc3NOYW1lc2AgaW50byB2YWxpZCBgY2xhc3MtbmFtZXNgXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIF9oZWxwZXJzLm1ha2VDbGFzc05hbWUgPSAoc3RyKSA9PiB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1teXFx3XFxzXFwtXS9naSwgJycpO1xuICAgIHJldHVybiB1dGlscy5oeXBoZW5DYXNlKHN0cik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1vYmlsZSBjbGFzc1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBfaGVscGVycy5tb2JpbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtb2JpbGVDbGFzcyA9ICcnO1xuICAgIChmdW5jdGlvbihhKSB7XG4gICAgICBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIHtcbiAgICAgICAgbW9iaWxlQ2xhc3MgPSAnIGZiLW1vYmlsZSc7XG4gICAgICB9XG4gICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG4gICAgcmV0dXJuIG1vYmlsZUNsYXNzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3Igd2hlbiBhIGRyYWcgYmVnaW5zXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgX2hlbHBlcnMuc3RhcnRNb3ZpbmcgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICB1aS5pdGVtLnNob3coKS5hZGRDbGFzcygnbW92aW5nJyk7XG4gICAgX2hlbHBlcnMuc3RhcnRJbmRleCA9ICQoJ2xpJywgdGhpcykuaW5kZXgodWkuaXRlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBlbmRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKi9cbiAgX2hlbHBlcnMuc3RvcE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ21vdmluZycpO1xuICAgIGlmIChfaGVscGVycy5kb0NhbmNlbCkge1xuICAgICAgJCh1aS5zZW5kZXIpLnNvcnRhYmxlKCdjYW5jZWwnKTtcbiAgICAgICQodGhpcykuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgIH1cbiAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgX2hlbHBlcnMuZG9DYW5jZWwgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogalF1ZXJ5IFVJIHNvcnRhYmxlIGJlZm9yZVN0b3AgY2FsbGJhY2sgdXNlZCBmb3IgYm90aCBsaXN0cy5cbiAgICogTG9naWMgZm9yIGNhbmNlbGluZyB0aGUgc29ydCBvciBkcm9wLlxuICAgKi9cbiAgX2hlbHBlcnMuYmVmb3JlU3RvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0cy5mb3JtSUQpLFxuICAgICAgbGFzdEluZGV4ID0gZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAxLFxuICAgICAgY2FuY2VsQXJyYXkgPSBbXTtcbiAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1aS5wbGFjZWhvbGRlci5pbmRleCgpIC0gMTtcblxuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzICYmIHVpLml0ZW0ucGFyZW50KCkuaGFzQ2xhc3MoJ2ZybWItY29udHJvbCcpKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goX2hlbHBlcnMuc3RvcEluZGV4ID09PSAwKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5hcHBlbmQpIHtcbiAgICAgIGNhbmNlbEFycmF5LnB1c2goKF9oZWxwZXJzLnN0b3BJbmRleCArIDEpID09PSBsYXN0SW5kZXgpO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gY2FuY2VsQXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHN0cmluZ3Mgc2FmZSB0byBiZSB1c2VkIGFzIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBzdHIgc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBjb252ZXJ0ZXIgc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy5zYWZlbmFtZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvW15hLXpBLVowLTlcXC1dL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdHJpcHMgbm9uLW51bWJlcnMgZnJvbSBhIG51bWJlciBvbmx5IGlucHV0XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gc3RyIHN0cmluZyB3aXRoIHBvc3NpYmxlIG51bWJlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICBzdHJpbmcgd2l0aG91dCBudW1iZXJzXG4gICAqL1xuICBfaGVscGVycy5mb3JjZU51bWJlciA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgfTtcblxuICAvKipcbiAgICogaGlkZSBhbmQgc2hvdyBtb3VzZSB0cmFja2luZyB0b29sdGlwcywgb25seSB1c2VkIGZvciBkaXNhYmxlZFxuICAgKiBmaWVsZHMgaW4gdGhlIGVkaXRvci5cbiAgICpcbiAgICogQHRvZG8gICByZW1vdmUgb3IgcmVmYWN0b3IgdG8gbWFrZSBiZXR0ZXIgdXNlXG4gICAqIEBwYXJhbSAge09iamVjdH0gdHQgalF1ZXJ5IG9wdGlvbiB3aXRoIG5leHRlZCB0b29sdGlwXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfaGVscGVycy5pbml0VG9vbHRpcCA9IGZ1bmN0aW9uKHR0KSB7XG4gICAgdmFyIHRvb2x0aXAgPSB0dC5maW5kKCcudG9vbHRpcCcpO1xuICAgIHR0Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodG9vbHRpcC5vdXRlcldpZHRoKCkgPiAyMDApIHtcbiAgICAgICAgdG9vbHRpcC5hZGRDbGFzcygnbWF4LXdpZHRoJyk7XG4gICAgICB9XG4gICAgICB0b29sdGlwLmNzcygnbGVmdCcsIHR0LndpZHRoKCkgKyAxNCk7XG4gICAgICB0b29sdGlwLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgfSkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgIHR0LmZpbmQoJy50b29sdGlwJykuc3RvcCh0cnVlLCB0cnVlKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgfSk7XG4gICAgdG9vbHRpcC5oaWRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkZmllbGRcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgX2hlbHBlcnMuZ2V0VHlwZXMgPSBmdW5jdGlvbigkZmllbGQpIHtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICAgIHR5cGU6ICRmaWVsZC5hdHRyKCd0eXBlJylcbiAgICAgIH0sXG4gICAgICBzdWJ0eXBlID0gJCgnLmZsZC1zdWJ0eXBlJywgJGZpZWxkKS52YWwoKTtcblxuICAgIGlmIChzdWJ0eXBlICE9PSB0eXBlcy50eXBlKSB7XG4gICAgICB0eXBlcy5zdWJ0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb24gZGF0YSBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIGpRdWVyeSBmaWVsZCBvYmplY3RcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBBcnJheSBvZiBvcHRpb24gdmFsdWVzXG4gICAqL1xuICBfaGVscGVycy5maWVsZE9wdGlvbkRhdGEgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0ICRvcHRpb24gPSAkKHRoaXMpLFxuICAgICAgICBzZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkb3B0aW9uKS5pcygnOmNoZWNrZWQnKSxcbiAgICAgICAgYXR0cnMgPSB7XG4gICAgICAgICAgbGFiZWw6ICQoJy5vcHRpb24tbGFiZWwnLCAkb3B0aW9uKS52YWwoKSxcbiAgICAgICAgICB2YWx1ZTogJCgnLm9wdGlvbi12YWx1ZScsICRvcHRpb24pLnZhbCgpXG4gICAgICAgIH07XG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBhdHRycy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnB1c2goYXR0cnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFhNTCBzYXZlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZm9ybSBzb3J0YWJsZUZpZWxkcyBub2RlXG4gICAqL1xuICBfaGVscGVycy54bWxTYXZlID0gZnVuY3Rpb24oZm9ybSkge1xuXG4gICAgbGV0IGZvcm1EYXRhID0gX2hlbHBlcnMucHJlcERhdGEoZm9ybSk7XG4gICAgbGV0IHhtbCA9IFsnPGZvcm0tdGVtcGxhdGU+XFxuXFx0PGZpZWxkcz4nXTtcblxuICAgIHV0aWxzLmZvckVhY2goZm9ybURhdGEsIGZ1bmN0aW9uKGZpZWxkSW5kZXgsIGZpZWxkKSB7XG4gICAgICBsZXQgZmllbGRDb250ZW50ID0gbnVsbDtcblxuICAgICAgLy8gSGFuZGxlIG9wdGlvbnNcbiAgICAgIGlmIChmaWVsZC50eXBlLm1hdGNoKC8oc2VsZWN0fGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gZmllbGQudmFsdWVzLFxuICAgICAgICAgIG9wdGlvbnMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbkRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgb3B0aW9uID0gdXRpbHMubWFya3VwKCdvcHRpb24nLCBvcHRpb25EYXRhW2ldLmxhYmVsLCBvcHRpb25EYXRhW2ldKS5vdXRlckhUTUw7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHRcXHQnICsgb3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdCcpO1xuXG4gICAgICAgIGZpZWxkQ29udGVudCA9IG9wdGlvbnMuam9pbignJyk7XG4gICAgICAgIGRlbGV0ZSBmaWVsZC52YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCB4bWxGaWVsZCA9IHV0aWxzLm1hcmt1cCgnZmllbGQnLCBmaWVsZENvbnRlbnQsIGZpZWxkKTtcbiAgICAgIHhtbC5wdXNoKCdcXG5cXHRcXHQnICsgeG1sRmllbGQub3V0ZXJIVE1MKTtcbiAgICB9KTtcblxuICAgIHhtbC5wdXNoKCdcXG5cXHQ8L2ZpZWxkcz5cXG48L2Zvcm0tdGVtcGxhdGU+Jyk7XG5cbiAgICByZXR1cm4geG1sLmpvaW4oJycpO1xuICB9O1xuXG4gIF9oZWxwZXJzLnByZXBEYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIHZhciBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKGZvcm0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIGJ1aWxkIGRhdGEgb2JqZWN0XG4gICAgICB1dGlscy5mb3JFYWNoKGZvcm0uY2hpbGROb2RlcywgZnVuY3Rpb24oaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIHZhciAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICBpZiAoISgkZmllbGQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgbGV0IGZpZWxkRGF0YSA9IF9oZWxwZXJzLmdldFR5cGVzKCRmaWVsZCksXG4gICAgICAgICAgICByb2xlVmFscyA9ICQoJy5yb2xlcy1maWVsZDpjaGVja2VkJywgZmllbGQpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KS5nZXQoKTtcblxuICAgICAgICAgICQoJ1tjbGFzcyo9XCJmbGQtXCJdJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IHV0aWxzLmNhbWVsQ2FzZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgZmllbGREYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChyb2xlVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5yb2xlID0gcm9sZVZhbHMuam9pbignLCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpZWxkRGF0YS5jbGFzc05hbWUgPSBmaWVsZERhdGEuY2xhc3NOYW1lIHx8IGZpZWxkRGF0YS5jbGFzczsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuICAgICAgICAgIHZhciBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkRGF0YS5jbGFzc05hbWUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnN0eWxlID0gbWF0Y2hbMV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGREYXRhID0gdXRpbHMudHJpbU9iaihmaWVsZERhdGEpO1xuICAgICAgICAgIGZpZWxkRGF0YSA9IHV0aWxzLmVzY2FwZUF0dHJzKGZpZWxkRGF0YSk7XG5cbiAgICAgICAgICB2YXIgbXVsdGlwbGVGaWVsZCA9IGZpZWxkRGF0YS50eXBlLm1hdGNoKC8oc2VsZWN0fGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pO1xuXG4gICAgICAgICAgaWYgKG11bHRpcGxlRmllbGQpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBfaGVscGVycy5maWVsZE9wdGlvbkRhdGEoJGZpZWxkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIF9oZWxwZXJzLmpzb25TYXZlID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIHJldHVybiB3aW5kb3cuSlNPTi5zdHJpbmdpZnkoX2hlbHBlcnMucHJlcERhdGEoZm9ybSksIG51bGwsICdcXHQnKTtcbiAgfTtcblxuICBfaGVscGVycy5nZXREYXRhID0gZnVuY3Rpb24oZm9ybURhdGEpIHtcblxuICAgIGxldCBkYXRhID0gZm9ybURhdGEgfHwgb3B0cy5mb3JtRGF0YTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgZm9ybUJ1aWxkZXIuZm9ybURhdGEgPSBzZXREYXRhW29wdHMuZGF0YVR5cGVdKGRhdGEpIHx8IFtdO1xuXG4gICAgcmV0dXJuIGZvcm1CdWlsZGVyLmZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYXZlcyBhbmQgcmV0dXJucyBmb3JtRGF0YVxuICAgKiBAcmV0dXJuIHtYTUx8SlNPTn1cbiAgICovXG4gIF9oZWxwZXJzLnNhdmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZm9ybUlEKTtcblxuICAgIGxldCBkb1NhdmUgPSB7XG4gICAgICB4bWw6IF9oZWxwZXJzLnhtbFNhdmUsXG4gICAgICBqc29uOiBfaGVscGVycy5qc29uU2F2ZVxuICAgIH07XG5cbiAgICAvLyBzYXZlIGFjdGlvbiBmb3IgY3VycmVudCBgZGF0YVR5cGVgXG4gICAgZm9ybUJ1aWxkZXIuZm9ybURhdGEgPSBkb1NhdmVbb3B0cy5kYXRhVHlwZV0oZm9ybSk7XG5cbiAgICAvL3RyaWdnZXIgZm9ybVNhdmVkIGV2ZW50XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZm9ybVNhdmVkKTtcbiAgICByZXR1cm4gZm9ybUJ1aWxkZXIuZm9ybURhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIGluY3JlbWVudHMgdGhlIGZpZWxkIGlkcyB3aXRoIHN1cHBvcnQgZm9yIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBmaWVsZCBJRFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgIGluY3JlbWVudGVkIGZpZWxkIElEXG4gICAqL1xuICBfaGVscGVycy5pbmNyZW1lbnRJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIHNwbGl0ID0gaWQubGFzdEluZGV4T2YoJy0nKSxcbiAgICAgIG5ld0ZpZWxkTnVtYmVyID0gcGFyc2VJbnQoaWQuc3Vic3RyaW5nKHNwbGl0ICsgMSkpICsgMSxcbiAgICAgIGJhc2VTdHJpbmcgPSBpZC5zdWJzdHJpbmcoMCwgc3BsaXQpO1xuXG4gICAgcmV0dXJuIGAke2Jhc2VTdHJpbmd9LSR7bmV3RmllbGROdW1iZXJ9YDtcbiAgfTtcblxuICAvKipcbiAgICogQ29sbGVjdCBmaWVsZCBhdHRyaWJ1dGUgdmFsdWVzIGFuZCBjYWxsIGZpZWxkUHJldmlldyB0byBnZW5lcmF0ZSBwcmV2aWV3XG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgalF1ZXJ5IHdyYXBwZWQgZG9tIG9iamVjdCBAdG9kbywgcmVtb3ZlIGpRdWVyeSBkZXBlbmRlbmN5XG4gICAqL1xuICBfaGVscGVycy51cGRhdGVQcmV2aWV3ID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICB2YXIgZmllbGRDbGFzcyA9IGZpZWxkLmF0dHIoJ2NsYXNzJyk7XG4gICAgaWYgKGZpZWxkQ2xhc3MuaW5kZXhPZigndWktc29ydGFibGUtaGFuZGxlJykgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZpZWxkVHlwZSA9ICQoZmllbGQpLmF0dHIoJ3R5cGUnKSxcbiAgICAgICRwcmV2SG9sZGVyID0gJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLFxuICAgICAgcHJldmlld0RhdGEgPSB7XG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZVxuICAgICAgfSxcbiAgICAgIHByZXZpZXc7XG5cbiAgICAkKCdbY2xhc3MqPVwiZmxkLVwiXScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IG5hbWUgPSB1dGlscy5jYW1lbENhc2UodGhpcy5uYW1lKTtcbiAgICAgIHByZXZpZXdEYXRhW25hbWVdID0gdGhpcy50eXBlID09PSAnY2hlY2tib3gnID8gdGhpcy5jaGVja2VkIDogdGhpcy52YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCBzdHlsZSA9ICQoJy5idG4tc3R5bGUnLCBmaWVsZCkudmFsKCk7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBwcmV2aWV3RGF0YS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIGlmIChmaWVsZFR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLykpIHtcbiAgICAgIHByZXZpZXdEYXRhLnZhbHVlcyA9IFtdO1xuICAgICAgcHJldmlld0RhdGEubXVsdGlwbGUgPSAkKCdbbmFtZT1cIm11bHRpcGxlXCJdJywgZmllbGQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucyBsaScsIGZpZWxkKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCB0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJCgnLm9wdGlvbi12YWx1ZScsIHRoaXMpLnZhbCgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSAkKCcub3B0aW9uLWxhYmVsJywgdGhpcykudmFsKCk7XG4gICAgICAgIHByZXZpZXdEYXRhLnZhbHVlcy5wdXNoKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aWV3RGF0YSA9IHV0aWxzLnRyaW1PYmoocHJldmlld0RhdGEpO1xuXG4gICAgcHJldmlld0RhdGEuY2xhc3NOYW1lID0gX2hlbHBlcnMuY2xhc3NOYW1lcyhmaWVsZCwgcHJldmlld0RhdGEpO1xuICAgICQoJy5mbGQtY2xhc3NOYW1lJywgZmllbGQpLnZhbChwcmV2aWV3RGF0YS5jbGFzc05hbWUpO1xuXG4gICAgZmllbGQuZGF0YSgnZmllbGREYXRhJywgcHJldmlld0RhdGEpO1xuICAgIHByZXZpZXcgPSB1dGlscy5maWVsZFJlbmRlcihwcmV2aWV3RGF0YSwgb3B0cywgdHJ1ZSk7XG5cbiAgICAkcHJldkhvbGRlci5odG1sKHByZXZpZXcpO1xuXG4gICAgJCgnaW5wdXRbdG9nZ2xlXScsICRwcmV2SG9sZGVyKS5rY1RvZ2dsZSgpO1xuICB9O1xuXG4gIF9oZWxwZXJzLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCA9IDI1MCwgaW1tZWRpYXRlID0gZmFsc2UpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgX2hlbHBlcnMuZGlzYWJsZWRUVCA9IHtcbiAgICBjbGFzc05hbWU6ICdmcm1iLXR0JyxcbiAgICBhZGQ6IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICB2YXIgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogX2hlbHBlcnMuZGlzYWJsZWRUVC5jbGFzc05hbWV9KTtcbiAgICAgICAgZmllbGQuYXBwZW5kKHR0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICQoJy5mcm1iLXR0JywgZmllbGQpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfaGVscGVycy5jbGFzc05hbWVzID0gZnVuY3Rpb24oZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGksXG4gICAgICB0eXBlID0gcHJldmlld0RhdGEudHlwZSxcbiAgICAgIHN0eWxlID0gcHJldmlld0RhdGEuc3R5bGU7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkWzBdLnF1ZXJ5U2VsZWN0b3IoJy5mbGQtY2xhc3NOYW1lJykudmFsdWU7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICBidXR0b246ICdidG4nLFxuICAgICAgc3VibWl0OiAnYnRuJ1xuICAgIH07XG5cbiAgICBsZXQgcHJpbWFyeVR5cGUgPSB0eXBlc1t0eXBlXTtcblxuICAgIGlmIChwcmltYXJ5VHlwZSkge1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cCgnKD86XnxcXHMpJyArIHByaW1hcnlUeXBlICsgJy0oLio/KSg/Olxcc3wkKSsnLCAnZycpO1xuICAgICAgICAgIGxldCBtYXRjaCA9IGNsYXNzZXNbaV0ubWF0Y2gocmUpO1xuICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNsYXNzZXMucHVzaChwcmltYXJ5VHlwZSArICctJyArIHN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGNsYXNzZXMucHVzaChwcmltYXJ5VHlwZSk7XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZSB0aGUgYXJyYXkgdG8gcHV0IGN1c3RvbSBjbGFzc2VzIGF0IGVuZCwgcmVtb3ZlIGFueSBkdXBsaWNhdGVzLCBjb252ZXJ0IHRvIHN0cmluZywgcmVtb3ZlIHdoaXRlc3BhY2VcbiAgICByZXR1cm4gdXRpbHMudW5pcXVlKGNsYXNzZXMpLmpvaW4oJyAnKS50cmltKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbmQgb3BlbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvdmVybGF5IEV4aXN0aW5nIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGlhbG9nICBFeGlzdGluZyBkaWFsb2dcbiAgICogQHJldHVybiB7RXZlbnR9ICAgICAgICAgIFRyaWdnZXJzIG1vZGFsQ2xvc2VkIGV2ZW50XG4gICAqL1xuICBfaGVscGVycy5jbG9zZUNvbmZpcm0gPSBmdW5jdGlvbihvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBvdmVybGF5ID0gb3ZlcmxheSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIGRpYWxvZyA9IGRpYWxvZyB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItZGlhbG9nJylbMF07XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgZGlhbG9nLnJlbW92ZSgpO1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMubW9kYWxDbG9zZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgZGF0YSBiYXNlZCBvbiBjb250cm9sUG9zaXRpb24gb3B0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY29udHJvbFBvc2l0aW9uICdsZWZ0JyBvciAncmlnaHQnXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIF9oZWxwZXJzLmVkaXRvckxheW91dCA9IGZ1bmN0aW9uKGNvbnRyb2xQb3NpdGlvbikge1xuICAgIGxldCBsYXlvdXRNYXAgPSB7XG4gICAgICBsZWZ0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1yaWdodCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1sZWZ0J1xuICAgICAgfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIHN0YWdlOiAncHVsbC1sZWZ0JyxcbiAgICAgICAgY29udHJvbHM6ICdwdWxsLXJpZ2h0J1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gPyBsYXlvdXRNYXBbY29udHJvbFBvc2l0aW9uXSA6ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIG92ZXJsYXkgdG8gdGhlIHBhZ2UuIFVzZWQgZm9yIG1vZGFscy5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgX2hlbHBlcnMuc2hvd092ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3ZlcmxheSA9IHV0aWxzLm1hcmt1cCgnZGl2JywgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiAnZm9ybS1idWlsZGVyLW92ZXJsYXknXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIG92ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfTtcblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBfaGVscGVycy5jb25maXJtID0gZnVuY3Rpb24obWVzc2FnZSwgeWVzQWN0aW9uLCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICB2YXIgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgdmFyIHllcyA9IHV0aWxzLm1hcmt1cCgnYnV0dG9uJywgb3B0cy5tZXNzYWdlcy55ZXMsIHtjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSd9KSxcbiAgICAgIG5vID0gdXRpbHMubWFya3VwKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLm5vLCB7Y2xhc3NOYW1lOiAnbm8gYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJ30pO1xuXG4gICAgbm8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICB5ZXMub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgeWVzQWN0aW9uKCk7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHZhciBidG5XcmFwID0gdXRpbHMubWFya3VwKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICB2YXIgbWluaU1vZGFsID0gdXRpbHMubWFya3VwKCdkaXYnLCBbbWVzc2FnZSwgYnRuV3JhcF0sIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIHllcy5mb2N1cygpO1xuICAgIHJldHVybiBtaW5pTW9kYWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBvcHVwIGRpYWxvZyB0aGUgZG9lcyBub3QgcmVxdWlyZSBjb25maXJtYXRpb24uXG4gICAqIEBwYXJhbSAge1N0cmluZ3xET018QXJyYXl9ICBjb250ZW50XG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGNvb3JkcyAgICBmYWxzZSBpZiBubyBjb29yZHMgYXJlIHByb3ZpZGVkLiBXaXRob3V0IGNvb3JkaW5hdGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgY2VudGVyIHNjcmVlbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIGNsYXNzbmFtZSB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBkb21cbiAgICovXG4gIF9oZWxwZXJzLmRpYWxvZyA9IGZ1bmN0aW9uKGNvbnRlbnQsIGNvb3JkcyA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJykge1xuICAgIF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG5cbiAgICBjbGFzc05hbWUgPSAnZm9ybS1idWlsZGVyLWRpYWxvZyAnICsgY2xhc3NOYW1lO1xuXG4gICAgdmFyIG1pbmlNb2RhbCA9IHV0aWxzLm1hcmt1cCgnZGl2JywgY29udGVudCwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSk7XG4gICAgaWYgKCFjb29yZHMpIHtcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgcGFnZVg6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgLyAyLFxuICAgICAgICBwYWdlWTogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIC8gMlxuICAgICAgfTtcbiAgICAgIG1pbmlNb2RhbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlNb2RhbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XG4gICAgfVxuXG4gICAgbWluaU1vZGFsLnN0eWxlLmxlZnQgPSBjb29yZHMucGFnZVggKyAncHgnO1xuICAgIG1pbmlNb2RhbC5zdHlsZS50b3AgPSBjb29yZHMucGFnZVkgKyAncHgnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtaW5pTW9kYWwpO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMubW9kYWxPcGVuZWQpO1xuXG4gICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCdkYXRhLWRpYWxvZycpICE9PSAtMSkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMudmlld0RhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBtaW5pTW9kYWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpZWxkcyBmcm9tIHRoZSBmb3JtXG4gICAqL1xuICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZm9ybUlEKTtcbiAgICB2YXIgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5mb3JtLWZpZWxkJyk7XG4gICAgdmFyICRmaWVsZHMgPSAkKGZpZWxkcyk7XG4gICAgdmFyIG1hcmtFbXB0eUFycmF5ID0gW107XG5cbiAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmFwcGVuZCkge1xuICAgICAgbWFya0VtcHR5QXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW1hcmtFbXB0eUFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb250ZW50ID0gb3B0cy5tZXNzYWdlcy5nZXRTdGFydGVkO1xuICAgIH1cblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncmVtb3ZpbmcnKTtcblxuICAgIHZhciBvdXRlckhlaWdodCA9IDA7XG4gICAgJGZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgb3V0ZXJIZWlnaHQgKz0gJCh0aGlzKS5vdXRlckhlaWdodCgpICsgMztcbiAgICB9KTtcblxuICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSAoLW91dGVySGVpZ2h0KSArICdweCc7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkcy5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdHMuZm9ybUlEKS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmluZycpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0sIDQwMCk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSWYgdXNlciByZS1vcmRlcnMgdGhlIGVsZW1lbnRzIHRoZWlyIG9yZGVyIHNob3VsZCBiZSBzYXZlZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRjYlVMIG91ciBsaXN0IG9mIGVsZW1lbnRzXG4gICAqL1xuICBfaGVscGVycy5zZXRGaWVsZE9yZGVyID0gZnVuY3Rpb24oJGNiVUwpIHtcbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZmllbGRPcmRlciA9IHt9O1xuICAgICRjYlVMLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgZmllbGRPcmRlcltpbmRleF0gPSAkKGVsZW1lbnQpLmRhdGEoJ2F0dHJzJykudHlwZTtcbiAgICB9KTtcbiAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZmllbGRPcmRlcicsIHdpbmRvdy5KU09OLnN0cmluZ2lmeShmaWVsZE9yZGVyKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW9yZGVyIHRoZSBjb250cm9scyBpZiB0aGUgdXNlciBoYXMgcHJldmlvdXNseSBvcmRlcmVkIHRoZW0uXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBmcm1iRmllbGRzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgX2hlbHBlcnMub3JkZXJGaWVsZHMgPSBmdW5jdGlvbihmcm1iRmllbGRzKSB7XG4gICAgdmFyIGZpZWxkT3JkZXIgPSBmYWxzZTtcblxuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZmllbGRPcmRlcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZmllbGRPcmRlcikge1xuICAgICAgbGV0IGNvbnRyb2xPcmRlciA9IG9wdHMuY29udHJvbE9yZGVyLmNvbmNhdChmcm1iRmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZC5hdHRycy50eXBlKSk7XG4gICAgICBmaWVsZE9yZGVyID0gdXRpbHMudW5pcXVlKGNvbnRyb2xPcmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkT3JkZXIgPSB3aW5kb3cuSlNPTi5wYXJzZShmaWVsZE9yZGVyKTtcbiAgICAgIGZpZWxkT3JkZXIgPSBPYmplY3Qua2V5cyhmaWVsZE9yZGVyKS5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gZmllbGRPcmRlcltpXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgZmllbGRPcmRlci5mb3JFYWNoKChmaWVsZFR5cGUpID0+IHtcbiAgICAgIHZhciBmaWVsZCA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZC5hdHRycy50eXBlID09PSBmaWVsZFR5cGU7XG4gICAgICB9KVswXTtcbiAgICAgIG5ld09yZGVyRmllbGRzLnB1c2goZmllbGQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld09yZGVyRmllbGRzLmZpbHRlcihCb29sZWFuKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2UgZmllbGRzIGJlaW5nIGVkaXRpbmdcbiAgICogQHBhcmFtICB7T2JqZWN0fSBzdGFnZVxuICAgKi9cbiAgX2hlbHBlcnMuY2xvc2VBbGxFZGl0ID0gZnVuY3Rpb24oc3RhZ2UpIHtcbiAgICB2YXIgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgc3RhZ2UpLFxuICAgICAgdG9nZ2xlQnRucyA9ICQoJy50b2dnbGUtZm9ybScsIHN0YWdlKSxcbiAgICAgIGVkaXRNb2RlcyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICBlZGl0TW9kZXMuaGlkZSgpO1xuICAgICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkcykuc2hvdygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBlZGl0IG1vZGUgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpZWxkSWRcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgdmFyIGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCksXG4gICAgICB0b2dnbGVCdG4gPSAkKCcudG9nZ2xlLWZvcm0nLCBmaWVsZCksXG4gICAgICBlZGl0TW9kZSA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZCkuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICBlZGl0TW9kZS5zbGlkZVRvZ2dsZSgyNTApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb250cm9scyBmb2xsb3cgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGVkaXRvclxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRzb3J0YWJsZUZpZWxkc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGNiVUxcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gZnVuY3Rpb24oJHNvcnRhYmxlRmllbGRzLCBjYlVMKSB7XG5cbiAgICB2YXIgJGNiV3JhcCA9ICQoY2JVTCkucGFyZW50KCksXG4gICAgICAkc3RhZ2VXcmFwID0gJHNvcnRhYmxlRmllbGRzLnBhcmVudCgpLFxuICAgICAgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKSxcbiAgICAgIGNiUG9zaXRpb24gPSBjYlVMLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuXG4gICAgICAgIGxldCBjYlN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiBjYldpZHRoLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICAgIGxlZnQ6IGNiUG9zaXRpb24ubGVmdFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjYk9mZnNldCA9ICRjYldyYXAub2Zmc2V0KCksXG4gICAgICAgICAgc3RhZ2VPZmZzZXQgPSAkc3RhZ2VXcmFwLm9mZnNldCgpLFxuICAgICAgICAgIGNiQm90dG9tID0gY2JPZmZzZXQudG9wICsgJGNiV3JhcC5oZWlnaHQoKSxcbiAgICAgICAgICBzdGFnZUJvdHRvbSA9IHN0YWdlT2Zmc2V0LnRvcCArICRzdGFnZVdyYXAuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNiQm90dG9tID4gc3RhZ2VCb3R0b20gJiYgKGNiT2Zmc2V0LnRvcCAhPT0gc3RhZ2VPZmZzZXQudG9wKSkge1xuICAgICAgICAgICRjYldyYXAuY3NzKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNiQm90dG9tIDwgc3RhZ2VCb3R0b20gfHwgKGNiQm90dG9tID09PSBzdGFnZUJvdHRvbSAmJiBjYk9mZnNldC50b3AgPiBzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3MoY2JTdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2JVTC5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgZGlhbG9nIHdpdGggdGhlIGZvcm0ncyBkYXRhXG4gICAqL1xuICBfaGVscGVycy5zaG93RGF0YSA9ICgpID0+IHtcbiAgICB2YXIgZGF0YSA9IHV0aWxzLmVzY2FwZUh0bWwoZm9ybUJ1aWxkZXIuZm9ybURhdGEpLFxuICAgICAgY29kZSA9IHV0aWxzLm1hcmt1cCgnY29kZScsIGRhdGEsIHtjbGFzc05hbWU6ICdmb3JtRGF0YS0nICsgb3B0cy5kYXRhVHlwZX0pLFxuICAgICAgcHJlID0gdXRpbHMubWFya3VwKCdwcmUnLCBjb2RlKTtcblxuICAgIF9oZWxwZXJzLmRpYWxvZyhwcmUsIG51bGwsICdkYXRhLWRpYWxvZycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBmaWVsZCBmcm9tIHRoZSBzdGFnZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZElEIElEIG9mIHRoZSBmaWVsZCB0byBiZSByZW1vdmVkXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGZpZWxkUmVtb3ZlZCByZXR1cm5zIHRydWUgaWYgZmllbGQgaXMgcmVtb3ZlZFxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlRmllbGQgPSAoZmllbGRJRCkgPT4ge1xuICAgIGxldCBmaWVsZFJlbW92ZWQgPSBmYWxzZSxcbiAgICAgIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRzLmZvcm1JRCksXG4gICAgICBmaWVsZHMgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tZmllbGQnKTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBmaWVsZHMgdG8gcmVtb3ZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZElEKSB7XG4gICAgICBsZXQgYXZhaWxhYmxlSWRzID0gW10uc2xpY2UuY2FsbChmaWVsZHMpLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmlkO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZpZWxkSUQgcmVxdWlyZWQgdG8gdXNlIGByZW1vdmVGaWVsZGAgYWN0aW9uLicpO1xuICAgICAgY29uc29sZS53YXJuKCdBdmFpbGFibGUgSURzOiAnICsgYXZhaWxhYmxlSWRzLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSUQpLFxuICAgICRmaWVsZCA9ICQoZmllbGQpO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmllbGQgbm90IGZvdW5kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJGZpZWxkLnNsaWRlVXAoMjUwLCBmdW5jdGlvbigpIHtcbiAgICAgICRmaWVsZC5yZW1vdmVDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgICRmaWVsZC5yZW1vdmUoKTtcbiAgICAgIGZpZWxkUmVtb3ZlZCA9IHRydWU7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICBpZiAoIWZvcm0uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN0YWdlV3JhcCA9IGZvcm0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgc3RhZ2VXcmFwLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIHN0YWdlV3JhcC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5maWVsZFJlbW92ZWQpO1xuICAgIHJldHVybiBmaWVsZFJlbW92ZWQ7XG4gIH07XG5cbiAgcmV0dXJuIF9oZWxwZXJzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG4iLCJjb25zdCBrY1RvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgVG9nZ2xlID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdGhlbWU6ICdmcmVzaCcsXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBvZmY6ICdPZmYnLFxuICAgICAgICBvbjogJ09uJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBsZXQgJGtjVG9nZ2xlID0gJCgnPGRpdiBjbGFzcz1cImtjLXRvZ2dsZVwiLz4nKVxuICAgICAgICAuaW5zZXJ0QWZ0ZXIoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZChlbGVtZW50KTtcblxuICAgICRrY1RvZ2dsZS50b2dnbGVDbGFzcygnb24nLCBlbGVtZW50LmlzKCc6Y2hlY2tlZCcpKTtcblxuICAgIGxldCBrY3RPbiA9IGA8ZGl2IGNsYXNzPVwia2N0LW9uXCI+JHtvcHRzLm1lc3NhZ2VzLm9ufTwvZGl2PmA7XG4gICAgbGV0IGtjdE9mZiA9IGA8ZGl2IGNsYXNzPVwia2N0LW9mZlwiPiR7b3B0cy5tZXNzYWdlcy5vZmZ9PC9kaXY+YDtcbiAgICBsZXQga2N0SGFuZGxlID0gJzxkaXYgY2xhc3M9XCJrY3QtaGFuZGxlXCI+PC9kaXY+JztcbiAgICBsZXQga2N0SW5uZXIgPSBgPGRpdiBjbGFzcz1cImtjdC1pbm5lclwiPiR7a2N0T259JHtrY3RIYW5kbGV9JHtrY3RPZmZ9PC9kaXY+YDtcblxuICAgICRrY1RvZ2dsZS5hcHBlbmQoa2N0SW5uZXIpO1xuXG4gICAgJGtjVG9nZ2xlLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgZWxlbWVudC5hdHRyKCdjaGVja2VkJywgIWVsZW1lbnQuYXR0cignY2hlY2tlZCcpKTtcbiAgICAgICRrY1RvZ2dsZS50b2dnbGVDbGFzcygnb24nKTtcbiAgICB9KTtcbiAgfTtcblxuICAkLmZuLmtjVG9nZ2xlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRvZ2dsZS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gJCh0b2dnbGVbaV0pO1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQga2NUb2dnbGUgPSBuZXcgVG9nZ2xlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgZWxlbWVudC5kYXRhKCdrY1RvZ2dsZScsIGtjVG9nZ2xlKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2NUb2dnbGUoKTtcbiIsIi8qKlxuICogUG9seWZpbGxzIGZvciBvbGRlciBicm93c2VycyBhbmQgYWRkZWQgZnVuY3Rpb25hbGl0eVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcG9seWZpbGxzKCkge1xuICAvLyBFbGVtZW50LnJlbW92ZSgpIHBvbHlmaWxsXG4gIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIEV2ZW50IHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRXZlbnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChldnQsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICAvLyBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGxzKCk7XG4iLCIvKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZiVXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IGZiVXRpbHMgPSB7fTtcblxuICAvLyBjbGVhbmVyIHN5bnRheCBmb3IgdGVzdGluZyBpbmRleE9mIGVsZW1lbnRcbiAgZmJVdGlscy5pbkFycmF5ID0gZnVuY3Rpb24obmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgT2JqZWN0IHRyaW1tZWQgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICBmYlV0aWxzLnRyaW1PYmogPSBmdW5jdGlvbihhdHRycykge1xuICAgIGxldCB4bWxSZW1vdmUgPSBbXG4gICAgICBudWxsLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgJycsXG4gICAgICBmYWxzZSxcbiAgICAgICdmYWxzZSdcbiAgICBdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChmYlV0aWxzLmluQXJyYXkoYXR0cnNbYXR0cl0sIHhtbFJlbW92ZSkpIHtcbiAgICAgICAgZGVsZXRlIGF0dHJzW2F0dHJdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGF0dHJzW2F0dHJdKSkge1xuICAgICAgICBpZiAoIWF0dHJzW2F0dHJdLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRycztcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhdHRyaWJ1dGUgaXMgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZiVXRpbHMudmFsaWRBdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICAgIGxldCBpbnZhbGlkID0gW1xuICAgICAgJ3ZhbHVlcycsXG4gICAgICAnZW5hYmxlT3RoZXInLFxuICAgICAgJ290aGVyJyxcbiAgICAgICdsYWJlbCcsXG4gICAgICAvLyAnc3R5bGUnLFxuICAgICAgJ3N1YnR5cGUnXG4gICAgXTtcbiAgICByZXR1cm4gIWZiVXRpbHMuaW5BcnJheShhdHRyLCBpbnZhbGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBhbiBhdHRycyBvYmplY3QgaW50byBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIG9iamVjdCBvZiBhdHRyaWJ1dGVzIGZvciBtYXJrdXBcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5hdHRyU3RyaW5nID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpICYmIGZiVXRpbHMudmFsaWRBdHRyKGF0dHIpKSB7XG4gICAgICAgIGF0dHIgPSBmYlV0aWxzLnNhZmVBdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIubmFtZSArIGF0dHIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0cmlidXRlcy5qb2luKCcgJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXR0cmlidXRlcyB0byBtYXJrdXAgc2FmZSBzdHJpbmdzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMuc2FmZUF0dHIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShuYW1lKTtcbiAgICBsZXQgdmFsU3RyaW5nO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsU3RyaW5nID0gZmJVdGlscy5lc2NhcGVBdHRyKHZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5yZXBsYWNlKCcsJywgJyAnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlID0gdmFsdWUgPyBgPVwiJHt2YWxTdHJpbmd9XCJgIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZmJVdGlscy5zYWZlQXR0ck5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHNhZmVBdHRyID0ge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnXG4gICAgfTtcblxuICAgIHJldHVybiBzYWZlQXR0cltuYW1lXSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UobmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5ncyBpbnRvIGxvd2VyY2FzZS1oeXBoZW5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5oeXBoZW5DYXNlID0gKHN0cikgPT4ge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXlxcd1xcc1xcLV0vZ2ksICcnKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkge1xuICAgICAgcmV0dXJuICctJyArICQxLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL14tKy9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnZlcnQgYSBoeXBoZW5hdGVkIHN0cmluZyB0byBjYW1lbENhc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZmJVdGlscy5jYW1lbENhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihtLCB3KSB7XG4gICAgICByZXR1cm4gdy50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBtYXJrdXAgd3JhcHBlciB3aGVyZSBuZWVkZWRcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgdGFnXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheXxPYmplY3R9IGNvbnRlbnQgd2Ugd3JhcCB0aGlzXG4gICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgIGF0dHJzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMubWFya3VwID0gZnVuY3Rpb24odGFnLCBjb250ZW50ID0gJycsIGF0dHJzID0ge30pIHtcbiAgICBsZXQgY29udGVudFR5cGUsXG4gICAgICBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgIGdldENvbnRlbnRUeXBlID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb250ZW50KSA/ICdhcnJheScgOiB0eXBlb2YgY29udGVudDtcbiAgICAgIH0sXG4gICAgICBhcHBlbmRDb250ZW50ID0ge1xuICAgICAgICBzdHJpbmc6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICBmaWVsZC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICBvYmplY3Q6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFycmF5OiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9IGdldENvbnRlbnRUeXBlKGNvbnRlbnRbaV0pO1xuICAgICAgICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0oY29udGVudFtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGxldCBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUoYXR0cik7XG4gICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudFR5cGUgPSBnZXRDb250ZW50VHlwZShjb250ZW50KTtcblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXS5jYWxsKHRoaXMsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gRE9NIGVsZW1lbnRcbiAgICogQHJldHVybiB7T2JqZWN0fSBleDoge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlQXR0cnMgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgbGV0IGF0dHJzID0gZWxlbS5hdHRyaWJ1dGVzO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZmJVdGlscy5mb3JFYWNoKGF0dHJzLCBhdHRyID0+IHtcbiAgICAgIGxldCBhdHRyVmFsID0gYXR0cnNbYXR0cl0udmFsdWU7XG4gICAgICBpZiAoYXR0clZhbC5tYXRjaCgvZmFsc2V8dHJ1ZS9nKSkge1xuICAgICAgICBhdHRyVmFsID0gKGF0dHJWYWwgPT09ICd0cnVlJyk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJWYWwubWF0Y2goL3VuZGVmaW5lZC9nKSkge1xuICAgICAgICBhdHRyVmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0clZhbCkge1xuICAgICAgICBkYXRhW2F0dHJzW2F0dHJdLm5hbWVdID0gYXR0clZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZpZWxkIG9wdGlvbnMgdG8gb3B0aW9uRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKSxcbiAgICAgIG9wdGlvbkRhdGEgPSB7fSxcbiAgICAgIGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKSxcbiAgICAgIGZvcm1EYXRhID0gW107XG5cbiAgICBpZiAoeG1sKSB7XG4gICAgICBsZXQgZmllbGRzID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmaWVsZCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkRGF0YSA9IGZiVXRpbHMucGFyc2VBdHRycyhmaWVsZHNbaV0pO1xuXG4gICAgICAgIGlmIChmaWVsZHNbaV0uY2hpbGRyZW4gJiYgZmllbGRzW2ldLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkRGF0YS52YWx1ZXMgPSBmYlV0aWxzLnBhcnNlT3B0aW9ucyhmaWVsZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEucHVzaChmaWVsZERhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogRXNjYXBlIG1hcmt1cCBzbyBpdCBjYW4gYmUgZGlzcGxheWVkIHJhdGhlciB0aGFuIHJlbmRlcmVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gaHRtbCBtYXJrdXBcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgIGVzY2FwZWQgaHRtbFxuICAgKi9cbiAgZmJVdGlscy5lc2NhcGVIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LnRleHRDb250ZW50ID0gaHRtbDtcbiAgICByZXR1cm4gZXNjYXBlRWxlbWVudC5pbm5lckhUTUw7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGFuIGF0dHJpYnV0ZVxuICBmYlV0aWxzLmVzY2FwZUF0dHIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBsZXQgbWF0Y2ggPSB7XG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OydcbiAgICB9O1xuXG4gICAgY29uc3QgcmVwbGFjZVRhZyA9IHRhZyA9PiBtYXRjaFt0YWddIHx8IHRhZztcblxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gc3RyLnJlcGxhY2UoL1tcIiY8Pl0vZywgcmVwbGFjZVRhZykgOiBzdHI7XG4gIH07XG5cbiAgLy8gRXNjYXBlIGF0dHJpYnV0ZXNcbiAgZmJVdGlscy5lc2NhcGVBdHRycyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgIGF0dHJzW2F0dHJdID0gZmJVdGlscy5lc2NhcGVBdHRyKGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLy8gZm9yRWFjaCB0aGF0IGNhbiBiZSB1c2VkIG9uIG5vZGVMaXN0XG4gIGZiVXRpbHMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7IC8vIHBhc3NlcyBiYWNrIHN0dWZmIHdlIG5lZWRcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHNcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyckFyZyBhcnJheSB3aXRoIHBvc3NpYmxlIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICBhcnJheSB3aXRoIG9ubHkgdW5pcXVlIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGVsZW0sIHBvcywgYXJyKSA9PiB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YoZWxlbSkgPT09IHBvcztcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgcHJldmlldyBtYXJrdXBcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgZmllbGREYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG9wdHNcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gcHJldmlld1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICBwcmV2aWV3IG1hcmt1cCBmb3IgZmllbGRcbiAgICovXG4gIGZiVXRpbHMuZmllbGRSZW5kZXIgPSBmdW5jdGlvbihmaWVsZERhdGEsIG9wdHMsIHByZXZpZXcgPSBmYWxzZSkge1xuICAgICAgbGV0IGZpZWxkTWFya3VwID0gJyc7XG4gICAgICBsZXQgZmllbGRMYWJlbCA9ICcnO1xuICAgICAgbGV0IG9wdGlvbnNNYXJrdXAgPSAnJztcbiAgICAgIGxldCBmaWVsZExhYmVsVGV4dCA9IGZpZWxkRGF0YS5sYWJlbCB8fCAnJztcbiAgICAgIGxldCBmaWVsZERlc2MgPSBmaWVsZERhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICBsZXQgZmllbGRSZXF1aXJlZCA9ICcnO1xuICAgICAgbGV0IGZpZWxkT3B0aW9ucyA9IGZpZWxkRGF0YS52YWx1ZXM7XG5cbiAgICAgIGZpZWxkRGF0YS5uYW1lID0gcHJldmlldyA/IGZpZWxkRGF0YS5uYW1lICsgJy1wcmV2aWV3JyA6IGZpZWxkRGF0YS5uYW1lO1xuICAgICAgZmllbGREYXRhLmlkID0gZmllbGREYXRhLm5hbWU7XG4gICAgICBpZiAoZmllbGREYXRhLm11bHRpcGxlKSB7XG4gICAgICAgIGZpZWxkRGF0YS5uYW1lID0gZmllbGREYXRhLm5hbWUgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS5zdWJ0eXBlIHx8IGZpZWxkRGF0YS50eXBlO1xuXG4gICAgICBpZiAoZmllbGREYXRhLnJlcXVpcmVkKSB7XG4gICAgICAgIGZpZWxkRGF0YS5yZXF1aXJlZCA9IG51bGw7XG4gICAgICAgIGZpZWxkRGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgICAgICBmaWVsZFJlcXVpcmVkID0gJzxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPic7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKGZpZWxkRGVzYykge1xuICAgICAgICAgIGZpZWxkRGVzYyA9IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtZWxlbWVudFwiIHRvb2x0aXA9XCIke2ZpZWxkRGVzY31cIj4/PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtmaWVsZERhdGEuaWR9XCIgY2xhc3M9XCJmYi0ke2ZpZWxkRGF0YS50eXBlfS1sYWJlbFwiPiR7ZmllbGRMYWJlbFRleHR9ICR7ZmllbGRSZXF1aXJlZH0gJHtmaWVsZERlc2N9PC9sYWJlbD5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmllbGRMYWJlbFZhbCA9IGZpZWxkRGF0YS5sYWJlbDtcblxuICAgICAgZGVsZXRlIGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgIGRlbGV0ZSBmaWVsZERhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBmaWVsZERhdGFTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoZmllbGREYXRhKTtcblxuICAgICAgc3dpdGNoIChmaWVsZERhdGEudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNhc2UgJ3JpY2gtdGV4dCc6XG4gICAgICAgICAgZGVsZXRlIGZpZWxkRGF0YS50eXBlO1xuICAgICAgICAgIGxldCBmaWVsZFZhbCA9IGZpZWxkRGF0YS52YWx1ZSB8fCAnJztcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHRleHRhcmVhICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkVmFsfTwvdGV4dGFyZWE+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICBsZXQgb3B0aW9uQXR0cnNTdHJpbmc7XG4gICAgICAgICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG5cbiAgICAgICAgICBpZiAoZmllbGRPcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+JHtmaWVsZERhdGEucGxhY2Vob2xkZXJ9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKCFmaWVsZE9wdGlvbnNbaV0uc2VsZWN0ZWQgfHwgZmllbGREYXRhLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkT3B0aW9uc1tpXS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWZpZWxkT3B0aW9uc1tpXS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGZpZWxkT3B0aW9uc1tpXS5sYWJlbCA9ICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKGZpZWxkT3B0aW9uc1tpXSk7XG4gICAgICAgICAgICAgIG9wdGlvbnNNYXJrdXAgKz0gYDxvcHRpb24gJHtvcHRpb25BdHRyc1N0cmluZ30+JHtmaWVsZE9wdGlvbnNbaV0ubGFiZWx9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PHNlbGVjdCAke2ZpZWxkRGF0YVN0cmluZ30+JHtvcHRpb25zTWFya3VwfTwvc2VsZWN0PmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94LWdyb3VwJzpcbiAgICAgICAgY2FzZSAncmFkaW8tZ3JvdXAnOlxuICAgICAgICAgIGxldCBvcHRpb25BdHRycztcbiAgICAgICAgICBmaWVsZERhdGEudHlwZSA9IGZpZWxkRGF0YS50eXBlLnJlcGxhY2UoJy1ncm91cCcsICcnKTtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgZmllbGREYXRhLm5hbWUgPSBmaWVsZERhdGEubmFtZSArICdbXSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpZWxkT3B0aW9ucykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbkF0dHJzU3RyaW5nO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBvcHRpb25BdHRycyA9IE9iamVjdC5hc3NpZ24oe3ZhbHVlOiAnJywgbGFiZWw6ICcnfSwgZmllbGREYXRhLCBmaWVsZE9wdGlvbnNbaV0pO1xuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBvcHRpb25BdHRycy5jaGVja2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzLmlkID0gZmllbGREYXRhLmlkICsgJy0nICsgaTtcbiAgICAgICAgICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcob3B0aW9uQXR0cnMpO1xuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3B0aW9uQXR0cnMuaWR9XCI+JHtvcHRpb25BdHRycy5sYWJlbH08L2xhYmVsPjxicj5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLm90aGVyKSB7XG4gICAgICAgICAgICAgIGxldCBvdGhlck9wdGlvbkF0dHJzID0ge1xuICAgICAgICAgICAgICAgIGlkOiBmaWVsZERhdGEuaWQgKyAnLScgKyAnb3RoZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZmllbGREYXRhLmNsYXNzTmFtZSArICcgb3RoZXItb3B0aW9uJyxcbiAgICAgICAgICAgICAgICBvbmNsaWNrOiBgZmJVdGlscy5vdGhlck9wdGlvbkNCKCcke2ZpZWxkRGF0YS5pZH0tb3RoZXInKWBcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhPYmplY3QuYXNzaWduKHt9LCBmaWVsZERhdGEsIG90aGVyT3B0aW9uQXR0cnMpKTtcblxuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8aW5wdXQgJHtvcHRpb25BdHRyc1N0cmluZ30gLz4gPGxhYmVsIGZvcj1cIiR7b3RoZXJPcHRpb25BdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXMub3RoZXJ9PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIiR7ZmllbGREYXRhLm5hbWV9XCIgaWQ9XCIke290aGVyT3B0aW9uQXR0cnMuaWR9LXZhbHVlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9PGRpdiBjbGFzcz1cIiR7ZmllbGREYXRhLnR5cGV9LWdyb3VwXCI+JHtvcHRpb25zTWFya3VwfTwvZGl2PmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICBjYXNlICdhdXRvY29tcGxldGUnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH0gPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfSA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PiAke29wdHMubWVzc2FnZXMuc2VsZWN0Q29sb3J9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgY2FzZSAnc3VibWl0JzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8YnV0dG9uICR7ZmllbGREYXRhU3RyaW5nfT4ke2ZpZWxkTGFiZWxWYWx9PC9idXR0b24+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+ICR7ZmllbGRMYWJlbH1gO1xuXG4gICAgICAgICAgaWYgKGZpZWxkRGF0YS50b2dnbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGREYXRhLmlkKSkua2NUb2dnbGUoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYDwke2ZpZWxkRGF0YS50eXBlfSAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZExhYmVsVmFsfTwvJHtmaWVsZERhdGEudHlwZX0+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkRGF0YS50eXBlICE9PSAnaGlkZGVuJykge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gZmllbGREYXRhLmlkID8gYGZiLSR7ZmllbGREYXRhLnR5cGV9IGZvcm0tZ3JvdXAgZmllbGQtJHtmaWVsZERhdGEuaWR9YCA6ICcnO1xuICAgICAgICBmaWVsZE1hcmt1cCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCBmaWVsZE1hcmt1cCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRNYXJrdXAgPSBmYlV0aWxzLm1hcmt1cCgnaW5wdXQnLCBudWxsLCBmaWVsZERhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRNYXJrdXA7XG4gICAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAgICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gICAqL1xuICBmYlV0aWxzLm90aGVyT3B0aW9uQ0IgPSAob3RoZXJJZCkgPT4ge1xuICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gICAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgICAgb3RoZXJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXJJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICBvdGhlcklucHV0VmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHVuY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gc3RyIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgKi9cbiAgZmJVdGlscy5jYXBpdGFsaXplID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICB9O1xuLy8gICByZXR1cm4gZmJVdGlscztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
