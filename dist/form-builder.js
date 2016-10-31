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
      dataType: 'json',
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
        rows: 'Rows',
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

    formBuilder.formID = frmbID;

    var $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');
    var _helpers = require('./helpers.js')(opts, formBuilder);

    formBuilder.layout = _helpers.editorLayout(opts.controlPosition);
    formBuilder.stage = $sortableFields[0];

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
    formBuilder.controls = cbUl;

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

    formBuilder.editor = $formWrap[0];

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

    if (element.type !== 'textarea') {
      $(element).append($formWrap);
    } else {
      $(element).replaceWith($formWrap);
    }

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
      var m = utils.markup;
      var type = values.type || 'text';
      var label = values.label || opts.messages[type] || opts.messages.label;
      var delBtn = m('a', opts.messages.remove, {
        id: 'del_' + lastID,
        className: 'del-button btn delete-confirm',
        title: opts.messages.removeMessage
      });
      var toggleBtn = m('a', null, {
        id: lastID + '-edit',
        className: 'toggle-form btn icon-pencil',
        title: opts.messages.hide
      });
      var copyBtn = m('a', opts.messages.copyButton, {
        id: lastID + '-copy',
        className: 'copy-button btn icon-copy',
        title: opts.messages.copyButtonTooltip
      });

      var liContents = m('div', [toggleBtn, copyBtn, delBtn], { className: 'field-actions' }).outerHTML;

      // Field preview Label
      liContents += '<label class="field-label">' + label + '</label>';

      if (values.description) {
        var attrs = {
          className: 'tooltip-element',
          tooltip: values.description
        };
        liContents += '<span ' + utils.attrsString(attrs) + '>?</span>';
      }

      var requiredDisplay = values.required ? 'style="display:inline"' : '';
      liContents += '<span class="required-asterisk" ' + requiredDisplay + '> *</span>';

      liContents += m('div', '', { className: 'prev-holder' }).outerHTML;
      liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
      liContents += '<div class="form-elements">';

      liContents += advFields(values);
      liContents += m('a', opts.messages.close, { className: 'close-field' }).outerHTML;

      liContents += '</div>';
      liContents += '</div>';

      var field = m('li', liContents, {
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

      if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
        opts.typeUserEvents[type].onadd(field);
      }

      if (opts.editOnAdd) {
        _helpers.closeAllEdit();
        _helpers.toggleEdit(lastID, false);
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
      _helpers.stickyControls($sortableFields);
    }

    document.dispatchEvent(formBuilder.events.loaded);

    // Make actions accessible
    formBuilder.actions = {
      clearFields: _helpers.removeAllfields,
      showData: _helpers.showData,
      save: _helpers.save,
      addField: function addField(field, index) {
        _helpers.stopIndex = formBuilder.stage.children.length ? index : undefined;
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

/**
 * Helper functions specific to formBuilder.
 * Called form formBuilder
 * @param  {Object}   opts
 * @param  {Instance} formBuilder
 * @return {Object} helper functions
 */
function helpers(opts, formBuilder) {
  var _helpers = {
    doCancel: false
  };

  var utils = require('./utils.js');
  formBuilder.events = require('./events.js');

  /**
   * Convert converts messy `cl#ssNames` into valid `class-names`
   *
   * @param  {String} str
   * @return {String} hyphenated string
   */
  _helpers.makeClassName = function (str) {
    str = str.replace(/[^\w\s\-]/gi, '');
    return utils.hyphenCase(str);
  };

  /**
   * Add a mobile class
   * @todo find css only solution
   * @return {String} Mobile class added to formBuilder
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
   * @param  {Object} event
   * @param  {Object} ui
   * @return {void}
   */
  _helpers.beforeStop = function (event, ui) {
    var form = document.getElementById(formBuilder.formID);
    var lastIndex = form.children.length - 1;
    var cancelArray = [];
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
   * @param  {String} str string to be converted
   * @return {String}     converter string
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
   * @return {Object} {type: 'fieldType', subtype: 'fieldSubType'}
   */
  _helpers.getTypes = function ($field) {
    var types = {
      type: $field.attr('type')
    };
    var subtype = $('.fld-subtype', $field).val();

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
      var $option = $(this);
      var selected = $('.option-selected', $option).is(':checked');
      var attrs = {
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
   * @return {String} xml in string
   */
  _helpers.xmlSave = function (form) {
    var m = utils.markup;
    var formData = _helpers.prepData(form);
    var xml = ['<form-template>\n\t<fields>'];

    utils.forEach(formData, function (fieldIndex, field) {
      var fieldContent = null;

      // Handle options
      if (field.type.match(/(select|checkbox-group|radio-group)/)) {
        var optionData = field.values;
        var options = [];

        for (var i = 0; i < optionData.length; i++) {
          var option = m('option', optionData[i].label, optionData[i]).outerHTML;
          options.push('\n\t\t\t' + option);
        }
        options.push('\n\t\t');

        fieldContent = options.join('');
        delete field.values;
      }

      var xmlField = m('field', fieldContent, field);
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
          (function () {
            var fieldData = _helpers.getTypes($field);
            var roleVals = $('.roles-field:checked', field).map(function () {
              return this.value;
            }).get();

            $('[class*="fld-"]', field).each(function () {
              var attr = this;
              var name = utils.camelCase(attr.name);
              fieldData[name] = attr.type === 'checkbox' ? attr.checked : attr.value;
            });

            if (roleVals.length) {
              fieldData.role = roleVals.join(',');
            }

            fieldData.className = fieldData.className || fieldData.class;

            var match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(fieldData.className);
            if (match) {
              fieldData.style = match[1];
            }

            fieldData = utils.trimObj(fieldData);
            fieldData = utils.escapeAttrs(fieldData);

            var multipleField = fieldData.type.match(/(select|checkbox-group|radio-group)/);

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
   * @return {XML|JSON} formData
   */
  _helpers.save = function () {
    var form = document.getElementById(formBuilder.formID);

    var doSave = {
      xml: _helpers.xmlSave,
      json: _helpers.jsonSave
    };

    // save action for current `dataType`
    formBuilder.formData = doSave[opts.dataType](form);

    // trigger formSaved event
    document.dispatchEvent(formBuilder.events.formSaved);
    return formBuilder.formData;
  };

  /**
   * increments the field ids with support for multiple editors
   * @param  {String} id field ID
   * @return {String}    incremented field ID
   */
  _helpers.incrementId = function (id) {
    var split = id.lastIndexOf('-');
    var newFieldNumber = parseInt(id.substring(split + 1)) + 1;
    var baseString = id.substring(0, split);

    return baseString + '-' + newFieldNumber;
  };

  /**
   * Collect field attribute values and call fieldPreview to generate preview
   * @param  {Object} field DOM element
   */
  _helpers.updatePreview = function (field) {
    var fieldClass = field.attr('class');
    if (fieldClass.indexOf('ui-sortable-handle') !== -1) {
      return;
    }

    var fieldType = $(field).attr('type');
    var $prevHolder = $('.prev-holder', field);
    var previewData = {
      type: fieldType
    };
    var preview = void 0;

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

    var timeout = void 0;
    return function () {
      var context = this;
      var args = arguments;
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
    var i = void 0;
    var type = previewData.type;
    var style = previewData.style;
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
          var re = new RegExp('(?:^|s)' + primaryType + '-(.*?)(?:s|$)+', 'g');
          var match = classes[i].match(re);
          if (match) {
            classes.splice(i, 1);
          }
        }
        classes.push(primaryType + '-' + style);
      }
      classes.push(primaryType);
    }

    // reverse the array to put custom classes at end,
    // remove any duplicates, convert to string, remove whitespace
    return utils.unique(classes).join(' ').trim();
  };

  /**
   * Closes and open dialog
   *
   * @param  {Object} overlay Existing overlay if there is one
   * @param  {Object} dialog  Existing dialog
   */
  _helpers.closeConfirm = function (overlay, dialog) {
    if (!overlay) {
      overlay = document.getElementsByClassName('form-builder-overlay')[0];
    }
    if (!dialog) {
      dialog = document.getElementsByClassName('form-builder-dialog')[0];
    }
    overlay.classList.remove('visible');
    dialog.remove();
    overlay.remove();
    document.dispatchEvent(formBuilder.events.modalClosed);
  };

  /**
   * Returns the layout data based on controlPosition option
   * @param  {String} controlPosition 'left' or 'right'
   * @return {Object} layout object
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
   * @return {Object} DOM Object
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

    var m = utils.markup;
    var overlay = _helpers.showOverlay();
    var yes = m('button', opts.messages.yes, {
      className: 'yes btn btn-success btn-sm'
    });
    var no = m('button', opts.messages.no, {
      className: 'no btn btn-danger btn-sm'
    });

    no.onclick = function () {
      _helpers.closeConfirm(overlay);
    };

    yes.onclick = function () {
      yesAction();
      _helpers.closeConfirm(overlay);
    };

    var btnWrap = m('div', [no, yes], { className: 'button-wrap' });

    className = 'form-builder-dialog ' + className;

    var miniModal = m('div', [message, btnWrap], { className: className });
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
    var form = document.getElementById(formBuilder.formID);
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
    $fields.each(function (i) {
      outerHeight += $($fields[i]).outerHeight() + 3;
    });

    fields[0].style.marginTop = -outerHeight + 'px';

    setTimeout(function () {
      $fields.remove();
      document.getElementById(formBuilder.formID).classList.remove('removing');
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
   * @return {Array} ordered fields
   */
  _helpers.orderFields = function (frmbFields) {
    var fieldOrder = false;
    var newOrderFields = [];

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
  _helpers.closeAllEdit = function () {
    var fields = $('> li.editing', formBuilder.stage);
    var toggleBtns = $('.toggle-form', formBuilder.stage);
    var editPanels = $('.frm-holder', fields);

    toggleBtns.removeClass('open');
    fields.removeClass('editing');
    $('.prev-holder', fields).show();
    editPanels.hide();
  };

  /**
   * Toggles the edit mode for the given field
   * @param  {String} fieldId
   * @param  {Boolean} animate
   */
  _helpers.toggleEdit = function (fieldId) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var field = document.getElementById(fieldId);
    var toggleBtn = $('.toggle-form', field);
    var editPanel = $('.frm-holder', field);
    field.classList.toggle('editing');
    toggleBtn.toggleClass('open');
    if (animate) {
      $('.prev-holder', field).slideToggle(250);
      editPanel.slideToggle(250);
    } else {
      $('.prev-holder', field).toggle();
      editPanel.toggle();
    }
  };

  /**
   * Controls follow scroll to the bottom of the editor
   */
  _helpers.stickyControls = function () {
    var $cbWrap = $(formBuilder.controls).parent();
    var $stageWrap = $(formBuilder.stage).parent();
    var cbWidth = $cbWrap.width();
    var cbPosition = formBuilder.controls.getBoundingClientRect();

    $(window).scroll(function (evt) {
      var scrollTop = $(evt.target).scrollTop();

      if (scrollTop > $stageWrap.offset().top) {
        var cbStyle = {
          position: 'fixed',
          width: cbWidth,
          top: '5px',
          bottom: 'auto',
          right: 'auto',
          left: cbPosition.left
        };

        var cbOffset = $cbWrap.offset();
        var stageOffset = $stageWrap.offset();
        var cbBottom = cbOffset.top + $cbWrap.height();
        var stageBottom = stageOffset.top + $stageWrap.height();

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
        formBuilder.controls.parentElement.removeAttribute('style');
      }
    });
  };

  /**
   * Open a dialog with the form's data
   */
  _helpers.showData = function () {
    var m = utils.markup;
    var data = utils.escapeHtml(formBuilder.formData);
    var code = m('code', data, { className: 'formData-' + opts.dataType });

    _helpers.dialog(m('pre', code), null, 'data-dialog');
  };

  /**
   * Remove a field from the stage
   * @param  {String}  fieldID ID of the field to be removed
   * @return {Boolean} fieldRemoved returns true if field is removed
   */
  _helpers.removeField = function (fieldID) {
    var fieldRemoved = false;
    var form = document.getElementById(formBuilder.formID);
    var fields = form.getElementsByClassName('form-field');

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

    var field = document.getElementById(fieldID);
    var $field = $(document.getElementById(fieldID));
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

  jQuery.fn.kcToggle = function (options) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXZlbnRzLmpzIiwic3JjL2pzL2Zvcm0tYnVpbGRlci5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2tjLXRvZ2dsZS5qcyIsInNyYy9qcy9wb2x5ZmlsbHMuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBSUE7QUFDRSxJQUFNLFNBQVMsRUFBZjs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsSUFBSSxLQUFKLENBQVUsUUFBVixDQUFoQjtBQUNBLE9BQU8sUUFBUCxHQUFrQixJQUFJLEtBQUosQ0FBVSxVQUFWLENBQWxCO0FBQ0EsT0FBTyxZQUFQLEdBQXNCLElBQUksS0FBSixDQUFVLGNBQVYsQ0FBdEI7QUFDQSxPQUFPLFdBQVAsR0FBcUIsSUFBSSxLQUFKLENBQVUsYUFBVixDQUFyQjtBQUNBLE9BQU8sV0FBUCxHQUFxQixJQUFJLEtBQUosQ0FBVSxhQUFWLENBQXJCO0FBQ0EsT0FBTyxTQUFQLEdBQW1CLElBQUksS0FBSixDQUFVLFdBQVYsQ0FBbkI7QUFDQSxPQUFPLFVBQVAsR0FBb0IsSUFBSSxLQUFKLENBQVUsWUFBVixDQUFwQjtBQUNBLE9BQU8sWUFBUCxHQUFzQixJQUFJLEtBQUosQ0FBVSxjQUFWLENBQXRCOztBQUVGO0FBQ0E7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7OztBQ25CQSxRQUFRLGdCQUFSO0FBQ0EsUUFBUSxnQkFBUjs7QUFFQSxDQUFDLFVBQVMsQ0FBVCxFQUFZO0FBQ1gsTUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFBMkI7QUFBQTs7QUFDN0MsUUFBSSxjQUFjLElBQWxCOztBQUVBLFFBQUksV0FBVztBQUNiLHVCQUFpQixPQURKO0FBRWIsb0JBQWMsQ0FDWixjQURZLEVBRVosUUFGWSxFQUdaLFVBSFksRUFJWixnQkFKWSxF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T0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogRm9ybSBCdWlsZGVyIGV2ZW50c1xuICogQHJldHVybiB7T2JqZWN0fSB2YXJpb3VzIGV2ZW50cyB0byBiZSB0cmlnZ2VyXG4gKi9cbi8vIGZ1bmN0aW9uIGZiRXZlbnRzKCl7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gIGV2ZW50cy5sb2FkZWQgPSBuZXcgRXZlbnQoJ2xvYWRlZCcpO1xuICBldmVudHMudmlld0RhdGEgPSBuZXcgRXZlbnQoJ3ZpZXdEYXRhJyk7XG4gIGV2ZW50cy51c2VyRGVjbGluZWQgPSBuZXcgRXZlbnQoJ3VzZXJEZWNsaW5lZCcpO1xuICBldmVudHMubW9kYWxDbG9zZWQgPSBuZXcgRXZlbnQoJ21vZGFsQ2xvc2VkJyk7XG4gIGV2ZW50cy5tb2RhbE9wZW5lZCA9IG5ldyBFdmVudCgnbW9kYWxPcGVuZWQnKTtcbiAgZXZlbnRzLmZvcm1TYXZlZCA9IG5ldyBFdmVudCgnZm9ybVNhdmVkJyk7XG4gIGV2ZW50cy5maWVsZEFkZGVkID0gbmV3IEV2ZW50KCdmaWVsZEFkZGVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbW92ZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkUmVtb3ZlZCcpO1xuXG4vLyAgIHJldHVybiBldmVudHM7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRzO1xuIiwicmVxdWlyZSgnLi9rYy10b2dnbGUuanMnKTtcbnJlcXVpcmUoJy4vcG9seWZpbGxzLmpzJyk7XG5cbihmdW5jdGlvbigkKSB7XG4gIGNvbnN0IEZvcm1CdWlsZGVyID0gZnVuY3Rpb24ob3B0aW9ucywgZWxlbWVudCkge1xuICAgIGxldCBmb3JtQnVpbGRlciA9IHRoaXM7XG5cbiAgICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgICBjb250cm9sUG9zaXRpb246ICdyaWdodCcsXG4gICAgICBjb250cm9sT3JkZXI6IFtcbiAgICAgICAgJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgICdidXR0b24nLFxuICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdoaWRkZW4nLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ251bWJlcicsXG4gICAgICAgICdyYWRpby1ncm91cCcsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYSdcbiAgICAgIF0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgLy8gQXJyYXkgb2YgZmllbGRzIHRvIGRpc2FibGVcbiAgICAgIGRpc2FibGVGaWVsZHM6IFtdLFxuICAgICAgZWRpdE9uQWRkOiBmYWxzZSxcbiAgICAgIC8vIFVuZWRpdGFibGUgZmllbGRzIG9yIG90aGVyIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gYXBwZWFyXG4gICAgICAvLyBiZWZvcmUgYW5kIGFmdGVyIHJlZ3VsYXIgZmllbGRzOlxuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIHByZXBlbmQ6IGZhbHNlLFxuICAgICAgLy8gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGZpZWxkcyB2YWx1ZXNcbiAgICAgIC8vIGV4OlxuICAgICAgLy8gZGVmYXVsdEZpZWxkczogW3tcbiAgICAgIC8vICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgIC8vICAgbmFtZTogJ2ZpcnN0LW5hbWUnLFxuICAgICAgLy8gICByZXF1aXJlZDogJ3RydWUnLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ1lvdXIgZmlyc3QgbmFtZScsXG4gICAgICAvLyAgIHR5cGU6ICd0ZXh0J1xuICAgICAgLy8gfSwge1xuICAgICAgLy8gICBsYWJlbDogJ1Bob25lJyxcbiAgICAgIC8vICAgbmFtZTogJ3Bob25lJyxcbiAgICAgIC8vICAgZGVzY3JpcHRpb246ICdIb3cgY2FuIHdlIHJlYWNoIHlvdT8nLFxuICAgICAgLy8gICB0eXBlOiAndGV4dCdcbiAgICAgIC8vIH1dLFxuICAgICAgZGVmYXVsdEZpZWxkczogW10sXG4gICAgICBpbnB1dFNldHM6IFtdLFxuICAgICAgZmllbGRSZW1vdmVXYXJuOiBmYWxzZSxcbiAgICAgIHJvbGVzOiB7XG4gICAgICAgIDE6ICdBZG1pbmlzdHJhdG9yJ1xuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGFkZE9wdGlvbjogJ0FkZCBPcHRpb24gKycsXG4gICAgICAgIGFsbEZpZWxkc1JlbW92ZWQ6ICdBbGwgZmllbGRzIHdlcmUgcmVtb3ZlZC4nLFxuICAgICAgICBhbGxvd011bHRpcGxlRmlsZXM6ICdBbGxvdyB1c2VycyB0byB1cGxvYWQgbXVsdGlwbGUgZmlsZXMnLFxuICAgICAgICBhdXRvY29tcGxldGU6ICdBdXRvY29tcGxldGUnLFxuICAgICAgICBidXR0b246ICdCdXR0b24nLFxuICAgICAgICBjYW5ub3RCZUVtcHR5OiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknLFxuICAgICAgICBjaGVja2JveEdyb3VwOiAnQ2hlY2tib3ggR3JvdXAnLFxuICAgICAgICBjaGVja2JveDogJ0NoZWNrYm94JyxcbiAgICAgICAgY2hlY2tib3hlczogJ0NoZWNrYm94ZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdDbGFzcycsXG4gICAgICAgIGNsZWFyQWxsTWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbGVhciBhbGwgZmllbGRzPycsXG4gICAgICAgIGNsZWFyQWxsOiAnQ2xlYXInLFxuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgY29udGVudDogJ0NvbnRlbnQnLFxuICAgICAgICBjb3B5OiAnQ29weSBUbyBDbGlwYm9hcmQnLFxuICAgICAgICBjb3B5QnV0dG9uOiAnJiM0MzsnLFxuICAgICAgICBjb3B5QnV0dG9uVG9vbHRpcDogJ0NvcHknLFxuICAgICAgICBkYXRlRmllbGQ6ICdEYXRlIEZpZWxkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdIZWxwIFRleHQnLFxuICAgICAgICBkZXNjcmlwdGlvbkZpZWxkOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXZNb2RlOiAnRGV2ZWxvcGVyIE1vZGUnLFxuICAgICAgICBlZGl0TmFtZXM6ICdFZGl0IE5hbWVzJyxcbiAgICAgICAgZWRpdG9yVGl0bGU6ICdGb3JtIEVsZW1lbnRzJyxcbiAgICAgICAgZWRpdFhNTDogJ0VkaXQgWE1MJyxcbiAgICAgICAgZW5hYmxlT3RoZXI6ICdFbmFibGUgJnF1b3Q7T3RoZXImcXVvdDsnLFxuICAgICAgICBlbmFibGVPdGhlck1zZzogJ0xldCB1c2VycyB0byBlbnRlciBhbiB1bmxpc3RlZCBvcHRpb24nLFxuICAgICAgICBmaWVsZERlbGV0ZVdhcm5pbmc6IGZhbHNlLFxuICAgICAgICBmaWVsZFZhcnM6ICdGaWVsZCBWYXJpYWJsZXMnLFxuICAgICAgICBmaWVsZE5vbkVkaXRhYmxlOiAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZWRpdGVkLicsXG4gICAgICAgIGZpZWxkUmVtb3ZlV2FybmluZzogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBmaWVsZD8nLFxuICAgICAgICBmaWxlVXBsb2FkOiAnRmlsZSBVcGxvYWQnLFxuICAgICAgICBmb3JtVXBkYXRlZDogJ0Zvcm0gVXBkYXRlZCcsXG4gICAgICAgIGdldFN0YXJ0ZWQ6ICdEcmFnIGEgZmllbGQgZnJvbSB0aGUgcmlnaHQgdG8gdGhpcyBhcmVhJyxcbiAgICAgICAgaGVhZGVyOiAnSGVhZGVyJyxcbiAgICAgICAgaGlkZTogJ0VkaXQnLFxuICAgICAgICBoaWRkZW46ICdIaWRkZW4gSW5wdXQnLFxuICAgICAgICBsYWJlbDogJ0xhYmVsJyxcbiAgICAgICAgbGFiZWxFbXB0eTogJ0ZpZWxkIExhYmVsIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgICAgIGxpbWl0Um9sZTogJ0xpbWl0IGFjY2VzcyB0byBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIHJvbGVzOicsXG4gICAgICAgIG1hbmRhdG9yeTogJ01hbmRhdG9yeScsXG4gICAgICAgIG1heGxlbmd0aDogJ01heCBMZW5ndGgnLFxuICAgICAgICBtaW5PcHRpb25NZXNzYWdlOiAnVGhpcyBmaWVsZCByZXF1aXJlcyBhIG1pbmltdW0gb2YgMiBvcHRpb25zJyxcbiAgICAgICAgbXVsdGlwbGVGaWxlczogJ011bHRpcGxlIEZpbGVzJyxcbiAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICBubzogJ05vJyxcbiAgICAgICAgbnVtYmVyOiAnTnVtYmVyJyxcbiAgICAgICAgb2ZmOiAnT2ZmJyxcbiAgICAgICAgb246ICdPbicsXG4gICAgICAgIG9wdGlvbjogJ09wdGlvbicsXG4gICAgICAgIG9wdGlvbmFsOiAnb3B0aW9uYWwnLFxuICAgICAgICBvcHRpb25MYWJlbFBsYWNlaG9sZGVyOiAnTGFiZWwnLFxuICAgICAgICBvcHRpb25WYWx1ZVBsYWNlaG9sZGVyOiAnVmFsdWUnLFxuICAgICAgICBvcHRpb25FbXB0eTogJ09wdGlvbiB2YWx1ZSByZXF1aXJlZCcsXG4gICAgICAgIG90aGVyOiAnT3RoZXInLFxuICAgICAgICBwYXJhZ3JhcGg6ICdQYXJhZ3JhcGgnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgICAgICAgcGxhY2Vob2xkZXJzOiB7XG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgdGV4dGFyZWE6ICcnLFxuICAgICAgICAgIGVtYWlsOiAnRW50ZXIgeW91IGVtYWlsJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnc3BhY2Ugc2VwYXJhdGVkIGNsYXNzZXMnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnRW50ZXIgeW91ciBwYXNzd29yZCdcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlldzogJ1ByZXZpZXcnLFxuICAgICAgICByYWRpb0dyb3VwOiAnUmFkaW8gR3JvdXAnLFxuICAgICAgICByYWRpbzogJ1JhZGlvJyxcbiAgICAgICAgcmVtb3ZlTWVzc2FnZTogJ1JlbW92ZSBFbGVtZW50JyxcbiAgICAgICAgcmVtb3ZlT3B0aW9uOiAnUmVtb3ZlIE9wdGlvbicsXG4gICAgICAgIHJlbW92ZTogJyYjMjE1OycsXG4gICAgICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxuICAgICAgICByaWNoVGV4dDogJ1JpY2ggVGV4dCBFZGl0b3InLFxuICAgICAgICByb2xlczogJ0FjY2VzcycsXG4gICAgICAgIHJvd3M6ICdSb3dzJyxcbiAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICBzZWxlY3RPcHRpb25zOiAnT3B0aW9ucycsXG4gICAgICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJyxcbiAgICAgICAgc2VsZWN0aW9uc01lc3NhZ2U6ICdBbGxvdyBNdWx0aXBsZSBTZWxlY3Rpb25zJyxcbiAgICAgICAgc2l6ZTogJ1NpemUnLFxuICAgICAgICBzaXplczoge1xuICAgICAgICAgIHhzOiAnRXh0cmEgU21hbGwnLFxuICAgICAgICAgIHNtOiAnU21hbGwnLFxuICAgICAgICAgIG06ICdEZWZhdWx0JyxcbiAgICAgICAgICBsZzogJ0xhcmdlJ1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogJ1N0eWxlJyxcbiAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgYnRuOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6ICdEZWZhdWx0JyxcbiAgICAgICAgICAgIGRhbmdlcjogJ0RhbmdlcicsXG4gICAgICAgICAgICBpbmZvOiAnSW5mbycsXG4gICAgICAgICAgICBwcmltYXJ5OiAnUHJpbWFyeScsXG4gICAgICAgICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICB3YXJuaW5nOiAnV2FybmluZydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnR5cGU6ICdUeXBlJyxcbiAgICAgICAgdGV4dDogJ1RleHQgRmllbGQnLFxuICAgICAgICB0ZXh0QXJlYTogJ1RleHQgQXJlYScsXG4gICAgICAgIHRvZ2dsZTogJ1RvZ2dsZScsXG4gICAgICAgIHdhcm5pbmc6ICdXYXJuaW5nIScsXG4gICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICB2aWV3SlNPTjogJ3sgIH0nLFxuICAgICAgICB2aWV3WE1MOiAnJmx0Oy8mZ3Q7JyxcbiAgICAgICAgeWVzOiAnWWVzJ1xuICAgICAgfSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNvcnRhYmxlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgc3RpY2t5Q29udHJvbHM6IGZhbHNlLFxuICAgICAgc2hvd0FjdGlvbkJ1dHRvbnM6IHRydWUsXG4gICAgICB0eXBlVXNlckF0dHJzOiB7fSxcbiAgICAgIHR5cGVVc2VyRXZlbnRzOiB7fSxcbiAgICAgIHByZWZpeDogJ2Zvcm0tYnVpbGRlci0nXG4gICAgfTtcblxuICAgIGNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuXG4gICAgZGVmYXVsdHMubWVzc2FnZXMuc3VidHlwZXMgPSAoKCkgPT4ge1xuICAgICAgY29uc3Qgc3VidHlwZURlZmF1bHQgPSAoc3VidHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiBzdWJ0eXBlLFxuICAgICAgICAgIHZhbHVlOiBzdWJ0eXBlXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IFsndGV4dCcsICdwYXNzd29yZCcsICdlbWFpbCcsICdjb2xvcicsICd0ZWwnXVxuICAgICAgICAgIC5tYXAoc3VidHlwZURlZmF1bHQpLFxuICAgICAgICAgIGhlYWRlcjogWydoMScsICdoMicsICdoMyddXG4gICAgICAgICAgLm1hcChzdWJ0eXBlRGVmYXVsdCksXG4gICAgICAgICAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXVxuICAgICAgICAgIC5tYXAoc3VidHlwZURlZmF1bHQpLFxuICAgICAgICAgIHBhcmFncmFwaDogWydwJywgJ2FkZHJlc3MnLCAnYmxvY2txdW90ZScsICdjYW52YXMnLCAnb3V0cHV0J11cbiAgICAgICAgICAubWFwKHN1YnR5cGVEZWZhdWx0KVxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICBsZXQgZnJtYklEID0gJ2ZybWItJyArICQoJ3VsW2lkXj1mcm1iLV0nKS5sZW5ndGgrKztcblxuICAgIGlmIChvcHRpb25zLm1lc3NhZ2VzKSB7XG4gICAgICBvcHRzLm1lc3NhZ2VzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMubWVzc2FnZXMsIG9wdGlvbnMubWVzc2FnZXMpO1xuICAgIH1cblxuICAgIGZvcm1CdWlsZGVyLmZvcm1JRCA9IGZybWJJRDtcblxuICAgIGxldCAkc29ydGFibGVGaWVsZHMgPSAkKCc8dWwvPicpLmF0dHIoJ2lkJywgZnJtYklEKS5hZGRDbGFzcygnZnJtYicpO1xuICAgIGxldCBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycy5qcycpKG9wdHMsIGZvcm1CdWlsZGVyKTtcblxuICAgIGZvcm1CdWlsZGVyLmxheW91dCA9IF9oZWxwZXJzLmVkaXRvckxheW91dChvcHRzLmNvbnRyb2xQb3NpdGlvbik7XG4gICAgZm9ybUJ1aWxkZXIuc3RhZ2UgPSAkc29ydGFibGVGaWVsZHNbMF07XG5cbiAgICBsZXQgbGFzdElEID0gZnJtYklEICsgJy1mbGQtMSc7XG4gICAgbGV0IGJveElEID0gZnJtYklEICsgJy1jb250cm9sLWJveCc7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2YgZmllbGQgb2JqZWN0cyB0byBjeWNsZSB0aHJvdWdoXG4gICAgbGV0IGZybWJGaWVsZHMgPSBbe1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuYXV0b2NvbXBsZXRlLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2F1dG9jb21wbGV0ZScsXG4gICAgICAgIG5hbWU6ICdhdXRvY29tcGxldGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuYnV0dG9uLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbi1pbnB1dCcsXG4gICAgICAgIG5hbWU6ICdidXR0b24nXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuY2hlY2tib3gsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICBjbGFzc05hbWU6ICdjaGVja2JveCcsXG4gICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5jaGVja2JveEdyb3VwLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICBuYW1lOiAnY2hlY2tib3gtZ3JvdXAnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMuZGF0ZUZpZWxkLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdjYWxlbmRhcicsXG4gICAgICAgIG5hbWU6ICdkYXRlLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmZpbGVVcGxvYWQsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZpbGUtaW5wdXQnLFxuICAgICAgICBuYW1lOiAnZmlsZS1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy5oZWFkZXIsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAnaGVhZGVyJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGVhZGVyJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLmhpZGRlbixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBjbGFzc05hbWU6ICdoaWRkZW4taW5wdXQnLFxuICAgICAgICBuYW1lOiAnaGlkZGVuLWlucHV0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLm51bWJlcixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBuYW1lOiAnbnVtYmVyJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnBhcmFncmFwaCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICBjbGFzc05hbWU6ICdwYXJhZ3JhcGgnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbGFiZWw6IG9wdHMubWVzc2FnZXMucmFkaW9Hcm91cCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdyYWRpby1ncm91cCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgbmFtZTogJ3JhZGlvLWdyb3VwJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnNlbGVjdCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QnLFxuICAgICAgICBuYW1lOiAnc2VsZWN0J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBvcHRzLm1lc3NhZ2VzLnRleHQsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3RleHQtaW5wdXQnLFxuICAgICAgICBuYW1lOiAndGV4dC1pbnB1dCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBsYWJlbDogb3B0cy5tZXNzYWdlcy50ZXh0QXJlYSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgIGNsYXNzTmFtZTogJ3RleHQtYXJlYScsXG4gICAgICAgIG5hbWU6ICd0ZXh0YXJlYSdcbiAgICAgIH1cbiAgICB9XTtcblxuICAgIGZybWJGaWVsZHMgPSBfaGVscGVycy5vcmRlckZpZWxkcyhmcm1iRmllbGRzKTtcblxuICAgIGlmIChvcHRzLmRpc2FibGVGaWVsZHMpIHtcbiAgICAgIC8vIHJlbW92ZSBkaXNhYmxlZEZpZWxkc1xuICAgICAgZnJtYkZpZWxkcyA9IGZybWJGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuaW5BcnJheShmaWVsZC5hdHRycy50eXBlLCBvcHRzLmRpc2FibGVGaWVsZHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGRyYWdnYWJsZSBmaWVsZHMgZm9yIGZvcm1CdWlsZGVyXG4gICAgbGV0IGNiVWwgPSB1dGlscy5tYXJrdXAoJ3VsJywgbnVsbCwge2lkOiBib3hJRCwgY2xhc3NOYW1lOiAnZnJtYi1jb250cm9sJ30pO1xuICAgIGZvcm1CdWlsZGVyLmNvbnRyb2xzID0gY2JVbDtcblxuICAgIGlmIChvcHRzLnNvcnRhYmxlQ29udHJvbHMpIHtcbiAgICAgIGNiVWwuY2xhc3NMaXN0LmFkZCgnc29ydC1lbmFibGVkJyk7XG4gICAgfVxuXG4gICAgbGV0ICRjYlVMID0gJChjYlVsKTtcblxuICAgIC8vIExvb3AgdGhyb3VnaFxuICAgIHV0aWxzLmZvckVhY2goZnJtYkZpZWxkcywgKGkpID0+IHtcbiAgICAgIGxldCAkZmllbGQgPSAkKCc8bGkvPicsIHtcbiAgICAgICAgJ2NsYXNzJzogJ2ljb24tJyArIGZybWJGaWVsZHNbaV0uYXR0cnMuY2xhc3NOYW1lLFxuICAgICAgICAndHlwZSc6IGZybWJGaWVsZHNbaV0udHlwZSxcbiAgICAgICAgJ25hbWUnOiBmcm1iRmllbGRzW2ldLmNsYXNzTmFtZSxcbiAgICAgICAgJ2xhYmVsJzogZnJtYkZpZWxkc1tpXS5sYWJlbFxuICAgICAgfSk7XG5cbiAgICAgICRmaWVsZC5kYXRhKCduZXdGaWVsZERhdGEnLCBmcm1iRmllbGRzW2ldKTtcblxuICAgICAgbGV0IHR5cGVMYWJlbCA9IHV0aWxzLm1hcmt1cCgnc3BhbicsIGZybWJGaWVsZHNbaV0ubGFiZWwpO1xuICAgICAgJGZpZWxkLmh0bWwodHlwZUxhYmVsKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgfSk7XG5cbiAgICBpZiAob3B0cy5pbnB1dFNldHMubGVuZ3RoKSB7XG4gICAgICAkKCc8bGkvPicsIHsnY2xhc3MnOiAnZmItc2VwYXJhdG9yJ30pLmh0bWwoJzxocj4nKS5hcHBlbmRUbygkY2JVTCk7XG4gICAgICBvcHRzLmlucHV0U2V0cy5mb3JFYWNoKChzZXQpID0+IHtcbiAgICAgICAgc2V0Lm5hbWUgPSBzZXQubmFtZSB8fCBfaGVscGVycy5tYWtlQ2xhc3NOYW1lKHNldC5sYWJlbCk7XG4gICAgICAgIGxldCAkc2V0ID0gJCgnPGxpLz4nLCB7J2NsYXNzJzogJ2lucHV0LXNldC1jb250cm9sJywgdHlwZTogc2V0Lm5hbWV9KTtcbiAgICAgICAgJHNldC5odG1sKHNldC5sYWJlbCkuYXBwZW5kVG8oJGNiVUwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU29ydGFibGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLnNvcnRhYmxlKHtcbiAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgb3BhY2l0eTogMC45LFxuICAgICAgcmV2ZXJ0OiAxNTAsXG4gICAgICBiZWZvcmVTdG9wOiBfaGVscGVycy5iZWZvcmVTdG9wLFxuICAgICAgc3RhcnQ6IF9oZWxwZXJzLnN0YXJ0TW92aW5nLFxuICAgICAgc3RvcDogX2hlbHBlcnMuc3RvcE1vdmluZyxcbiAgICAgIGNhbmNlbDogJ2lucHV0LCBzZWxlY3QsIC5kaXNhYmxlZCwgLmZvcm0tZ3JvdXAsIC5idG4nLFxuICAgICAgcGxhY2Vob2xkZXI6ICdmcm1iLXBsYWNlaG9sZGVyJ1xuICAgIH0pO1xuXG4gICAgLy8gQ29udHJvbEJveCB3aXRoIGRpZmZlcmVudCBmaWVsZHNcbiAgICAkY2JVTC5zb3J0YWJsZSh7XG4gICAgICBoZWxwZXI6ICdjbG9uZScsXG4gICAgICBvcGFjaXR5OiAwLjksXG4gICAgICBjb25uZWN0V2l0aDogJHNvcnRhYmxlRmllbGRzLFxuICAgICAgY2FuY2VsOiAnLmZiLXNlcGFyYXRvcicsXG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICBwbGFjZWhvbGRlcjogJ3VpLXN0YXRlLWhpZ2hsaWdodCcsXG4gICAgICBzdGFydDogX2hlbHBlcnMuc3RhcnRNb3ZpbmcsXG4gICAgICBzdG9wOiBfaGVscGVycy5zdG9wTW92aW5nLFxuICAgICAgcmV2ZXJ0OiAxNTAsXG4gICAgICBiZWZvcmVTdG9wOiBfaGVscGVycy5iZWZvcmVTdG9wLFxuICAgICAgZGlzdGFuY2U6IDMsXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBpZiAoX2hlbHBlcnMuZG9DYW5jZWwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLml0ZW0ucGFyZW50KClbMF0gPT09ICRzb3J0YWJsZUZpZWxkc1swXSkge1xuICAgICAgICAgIHByb2Nlc3NDb250cm9sKHVpLml0ZW0pO1xuICAgICAgICAgIF9oZWxwZXJzLmRvQ2FuY2VsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaGVscGVycy5zZXRGaWVsZE9yZGVyKCRjYlVMKTtcbiAgICAgICAgICBfaGVscGVycy5kb0NhbmNlbCA9ICFvcHRzLnNvcnRhYmxlQ29udHJvbHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBwcm9jZXNzQ29udHJvbCA9IChjb250cm9sKSA9PiB7XG4gICAgICBpZiAoY29udHJvbFswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LXNldC1jb250cm9sJykpIHtcbiAgICAgICAgbGV0IGlucHV0U2V0ID0gb3B0cy5pbnB1dFNldHMuZmlsdGVyKChzZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gc2V0Lm5hbWUgPT09IGNvbnRyb2xbMF0udHlwZTtcbiAgICAgICAgfSlbMF07XG4gICAgICAgIGlmIChpbnB1dFNldC5zaG93SGVhZGVyKSB7XG4gICAgICAgICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2hlYWRlcicsXG4gICAgICAgICAgICAgIHN1YnR5cGU6ICdoMicsXG4gICAgICAgICAgICAgIGlkOiBpbnB1dFNldC5uYW1lLFxuICAgICAgICAgICAgICBsYWJlbDogaW5wdXRTZXQubGFiZWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgcHJlcEZpZWxkVmFycyhoZWFkZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0U2V0LmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoZmllbGQsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXBGaWVsZFZhcnMoY29udHJvbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCAkZm9ybVdyYXAgPSAkKCc8ZGl2Lz4nLCB7XG4gICAgICBpZDogZnJtYklEICsgJy1mb3JtLXdyYXAnLFxuICAgICAgJ2NsYXNzJzogJ2Zvcm0td3JhcCBmb3JtLWJ1aWxkZXInICsgX2hlbHBlcnMubW9iaWxlQ2xhc3MoKVxuICAgIH0pO1xuXG4gICAgZm9ybUJ1aWxkZXIuZWRpdG9yID0gJGZvcm1XcmFwWzBdO1xuXG4gICAgbGV0ICRzdGFnZVdyYXAgPSAkKCc8ZGl2Lz4nLCB7XG4gICAgICBpZDogZnJtYklEICsgJy1zdGFnZS13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdzdGFnZS13cmFwICcgKyBmb3JtQnVpbGRlci5sYXlvdXQuc3RhZ2VcbiAgICB9KTtcblxuICAgIGxldCBjYldyYXAgPSAkKCc8ZGl2Lz4nLCB7XG4gICAgICBpZDogZnJtYklEICsgJy1jYi13cmFwJyxcbiAgICAgICdjbGFzcyc6ICdjYi13cmFwICcgKyBmb3JtQnVpbGRlci5sYXlvdXQuY29udHJvbHNcbiAgICB9KS5hcHBlbmQoJGNiVUxbMF0pO1xuXG4gICAgaWYgKG9wdHMuc2hvd0FjdGlvbkJ1dHRvbnMpIHtcbiAgICAgIC8vIEJ1aWxkIG91ciBoZWFkZXJzIGFuZCBhY3Rpb24gbGlua3NcbiAgICAgIGxldCB2aWV3RGF0YVRleHQ7XG4gICAgICBpZihvcHRzLmRhdGFUeXBlID09PSAneG1sJykge1xuICAgICAgICB2aWV3RGF0YVRleHQgPSBvcHRzLm1lc3NhZ2VzLnZpZXdYTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3RGF0YVRleHQgPSBvcHRzLm1lc3NhZ2VzLnZpZXdKU09OO1xuICAgICAgfVxuICAgICAgY29uc3Qgdmlld0RhdGEgPSB1dGlscy5tYXJrdXAoJ2J1dHRvbicsIHZpZXdEYXRhVGV4dCwge1xuICAgICAgICBpZDogZnJtYklEICsgJy12aWV3LWRhdGEnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndmlldy1kYXRhIGJ0biBidG4tZGVmYXVsdCdcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2xlYXJBbGwgPSB1dGlscy5tYXJrdXAoJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMuY2xlYXJBbGwsIHtcbiAgICAgICAgaWQ6IGZybWJJRCArICctY2xlYXItYWxsJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NsZWFyLWFsbCBidG4gYnRuLWRlZmF1bHQnXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNhdmVBbGwgPSB1dGlscy5tYXJrdXAoJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMuc2F2ZSwge1xuICAgICAgICBjbGFzc05hbWU6IGBidG4gYnRuLXByaW1hcnkgJHtvcHRzLnByZWZpeH1zYXZlYCxcbiAgICAgICAgaWQ6IGZybWJJRCArICctc2F2ZScsXG4gICAgICAgIHR5cGU6ICdidXR0b24nXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGZvcm1BY3Rpb25zID0gdXRpbHMubWFya3VwKCdkaXYnLCBbY2xlYXJBbGwsIHZpZXdEYXRhLCBzYXZlQWxsXSwge1xuICAgICAgICBjbGFzc05hbWU6ICdmb3JtLWFjdGlvbnMgYnRuLWdyb3VwJ1xuICAgICAgfSk7XG5cbiAgICAgIGNiV3JhcC5hcHBlbmQoZm9ybUFjdGlvbnMpO1xuICAgIH1cblxuICAgICRzdGFnZVdyYXAuYXBwZW5kKCRzb3J0YWJsZUZpZWxkcywgY2JXcmFwKTtcbiAgICAkc3RhZ2VXcmFwLmJlZm9yZSgkZm9ybVdyYXApO1xuICAgICRmb3JtV3JhcC5hcHBlbmQoJHN0YWdlV3JhcCwgY2JXcmFwKTtcblxuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICQoZWxlbWVudCkuYXBwZW5kKCRmb3JtV3JhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoZWxlbWVudCkucmVwbGFjZVdpdGgoJGZvcm1XcmFwKTtcbiAgICB9XG5cbiAgICBsZXQgc2F2ZUFuZFVwZGF0ZSA9IF9oZWxwZXJzLmRlYm91bmNlKGV2dCA9PiB7XG4gICAgICBpZiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldnQudGFyZ2V0Lm5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0ICRmaWVsZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgICAgX2hlbHBlcnMudXBkYXRlUHJldmlldygkZmllbGQpO1xuICAgICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIGZpZWxkIG9uIGNoYW5nZVxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlIGJsdXIga2V5dXAnLCAnLmZvcm0tZWxlbWVudHMgaW5wdXQsIC5mb3JtLWVsZW1lbnRzIHNlbGVjdCwgLmZvcm0tZWxlbWVudHMgdGV4dGFyZWEnLCBzYXZlQW5kVXBkYXRlKTtcblxuICAgICQoJ2xpJywgJGNiVUwpLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0ICRjb250cm9sID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcudWktc29ydGFibGUtaGFuZGxlJyk7XG4gICAgICBfaGVscGVycy5zdG9wSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICBwcm9jZXNzQ29udHJvbCgkY29udHJvbCk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYXBwZW5kIGFuZCBwcmVwZW5kIG9wdGlvbnMgaWYgbmVjZXNzYXJ5XG4gICAgbGV0IG5vbkVkaXRhYmxlRmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2FuY2VsQXJyYXkgPSBbXTtcblxuICAgICAgaWYgKG9wdHMucHJlcGVuZCAmJiAhJCgnLmRpc2FibGVkLnByZXBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBsZXQgcHJlcGVuZGVkRmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0cy5wcmVwZW5kLCB7Y2xhc3NOYW1lOiAnZGlzYWJsZWQgcHJlcGVuZCd9KTtcbiAgICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLnByZXBlbmQocHJlcGVuZGVkRmllbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5hcHBlbmQgJiYgISQoJy5kaXNhYmxlZC5hcHBlbmQnLCAkc29ydGFibGVGaWVsZHMpLmxlbmd0aCkge1xuICAgICAgICBsZXQgYXBwZW5kZWRGaWVsZCA9IHV0aWxzLm1hcmt1cCgnbGknLCBvcHRzLmFwcGVuZCwge2NsYXNzTmFtZTogJ2Rpc2FibGVkIGFwcGVuZCd9KTtcbiAgICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgJHNvcnRhYmxlRmllbGRzLmFwcGVuZChhcHBlbmRlZEZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKSkge1xuICAgICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgcHJlcEZpZWxkVmFycyA9IGZ1bmN0aW9uKCRmaWVsZCwgaXNOZXcgPSBmYWxzZSkge1xuICAgICAgbGV0IGZpZWxkID0ge307XG4gICAgICBpZiAoJGZpZWxkIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgIGxldCBmaWVsZERhdGEgPSAkZmllbGQuZGF0YSgnbmV3RmllbGREYXRhJyk7XG4gICAgICAgIGlmIChmaWVsZERhdGEpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkRGF0YS5hdHRycztcbiAgICAgICAgICBmaWVsZC5sYWJlbCA9IGZpZWxkRGF0YS5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgYXR0cnMgPSAkZmllbGRbMF0uYXR0cmlidXRlcztcbiAgICAgICAgICBpZiAoIWlzTmV3KSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZXMgPSAkZmllbGQuY2hpbGRyZW4oKS5tYXAoKGluZGV4LCBlbGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICQoZWxlbSkudGV4dCgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAkKGVsZW0pLmF0dHIoJ3ZhbHVlJyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IEJvb2xlYW4oJChlbGVtKS5hdHRyKCdzZWxlY3RlZCcpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBmaWVsZFthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGQgPSBPYmplY3QuYXNzaWduKHt9LCAkZmllbGQpO1xuICAgICAgfVxuXG4gICAgICBmaWVsZC5uYW1lID0gaXNOZXcgPyBuYW1lQXR0cihmaWVsZCkgOiAoIGZpZWxkLm5hbWUgfHwgbmFtZUF0dHIoZmllbGQpICk7XG5cbiAgICAgIGlmIChpc05ldyAmJiB1dGlscy5pbkFycmF5KGZpZWxkLnR5cGUsIFsndGV4dCcsICdudW1iZXInLCAnZmlsZScsICdzZWxlY3QnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgZmllbGQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7IC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzcyB8fCBmaWVsZC5jbGFzc05hbWU7IC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaCA9IC8oPzpefFxccylidG4tKC4qPykoPzpcXHN8JCkvZy5leGVjKGZpZWxkLmNsYXNzTmFtZSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZmllbGQuc3R5bGUgPSBtYXRjaFsxXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZXNjYXBlQXR0cnMoZmllbGQpO1xuXG4gICAgICBhcHBlbmROZXdGaWVsZChmaWVsZCk7XG4gICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZmllbGRBZGRlZCk7XG4gICAgICB9XG4gICAgICAkc3RhZ2VXcmFwLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZSBzYXZlZCBYTUwgdGVtcGxhdGUgZGF0YVxuICAgIGxldCBsb2FkRmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBmb3JtQnVpbGRlci5mb3JtRGF0YTtcbiAgICAgIGlmIChmb3JtRGF0YSAmJiBmb3JtRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHByZXBGaWVsZFZhcnMoZm9ybURhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgICRzdGFnZVdyYXAucmVtb3ZlQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9IGVsc2UgaWYgKG9wdHMuZGVmYXVsdEZpZWxkcyAmJiBvcHRzLmRlZmF1bHRGaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIExvYWQgZGVmYXVsdCBmaWVsZHMgaWYgbm9uZSBhcmUgc2V0XG4gICAgICAgIG9wdHMuZGVmYXVsdEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHByZXBGaWVsZFZhcnMoZmllbGQpKTtcbiAgICAgICAgJHN0YWdlV3JhcC5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdHMucHJlcGVuZCAmJiAhb3B0cy5hcHBlbmQpIHtcbiAgICAgICAgJHN0YWdlV3JhcC5hZGRDbGFzcygnZW1wdHknKVxuICAgICAgICAuYXR0cignZGF0YS1jb250ZW50Jywgb3B0cy5tZXNzYWdlcy5nZXRTdGFydGVkKTtcbiAgICAgIH1cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcblxuICAgICAgbGV0ICRmaWVsZHMgPSAkKCdsaS5mb3JtLWZpZWxkOm5vdCguZGlzYWJsZWQpJywgJHNvcnRhYmxlRmllbGRzKTtcblxuICAgICAgJGZpZWxkcy5lYWNoKGkgPT4gX2hlbHBlcnMudXBkYXRlUHJldmlldygkKCRmaWVsZHNbaV0pKSk7XG5cbiAgICAgIG5vbkVkaXRhYmxlRmllbGRzKCk7XG4gICAgfTtcblxuICAgIC8vIGNhbGxiYWNrIHRvIHRyYWNrIGRpc2FibGVkIHRvb2x0aXBzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdtb3VzZW1vdmUnLCAnbGkuZGlzYWJsZWQnLCBlID0+IHtcbiAgICAgICQoJy5mcm1iLXR0JywgdGhpcykuY3NzKHtcbiAgICAgICAgbGVmdDogZS5vZmZzZXRYIC0gMTYsXG4gICAgICAgIHRvcDogZS5vZmZzZXRZIC0gMzRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY2FsbGJhY2sgdG8gY2FsbCBkaXNhYmxlZCB0b29sdGlwc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignbW91c2VlbnRlcicsICdsaS5kaXNhYmxlZCcsIGUgPT5cbiAgICAgIF9oZWxwZXJzLmRpc2FibGVkVFQuYWRkKCQodGhpcykpKTtcblxuICAgIC8vIGNhbGxiYWNrIHRvIGNhbGwgZGlzYWJsZWQgdG9vbHRpcHNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlbGVhdmUnLCAnbGkuZGlzYWJsZWQnLCBlID0+XG4gICAgICBfaGVscGVycy5kaXNhYmxlZFRULnJlbW92ZSgkKHRoaXMpKSk7XG5cbiAgICBsZXQgbmFtZUF0dHIgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgbGV0IGVwb2NoID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gZmllbGQudHlwZSArICctJyArIGVwb2NoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZGF0YSBmb3IgZmllbGQgd2l0aCBvcHRpb25zIFtzZWxlY3QsIGNoZWNrYm94LWdyb3VwLCByYWRpby1ncm91cF1cbiAgICAgKlxuICAgICAqIEB0b2RvICAgcmVmYWN0b3IgdGhpcyBuYXN0eSB+Y3JhcH4gY29kZSwgaXRzIGFjdHVhbGx5IHBhaW5mdWwgdG8gbG9vayBhdFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBmaWVsZCBvcHRpb25zIG1hcmt1cFxuICAgICAqL1xuICAgIGxldCBmaWVsZE9wdGlvbnMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBvcHRpb25BY3Rpb25zID0gW1xuICAgICAgICAgIHV0aWxzLm1hcmt1cCgnYScsIG9wdHMubWVzc2FnZXMuYWRkT3B0aW9uLCB7Y2xhc3NOYW1lOiAnYWRkIGFkZC1vcHQnfSlcbiAgICAgICAgXTtcbiAgICAgIGxldCBmaWVsZE9wdGlvbnMgPSBbXG4gICAgICAgIGA8bGFiZWwgY2xhc3M9XCJmYWxzZS1sYWJlbFwiPiR7b3B0cy5tZXNzYWdlcy5zZWxlY3RPcHRpb25zfTwvbGFiZWw+YFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGlzTXVsdGlwbGUgPSB2YWx1ZXMubXVsdGlwbGUgfHwgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gtZ3JvdXAnKTtcblxuICAgICAgaWYgKCF2YWx1ZXMudmFsdWVzIHx8ICF2YWx1ZXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZXMudmFsdWVzID0gWzEsIDIsIDNdLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCBsYWJlbCA9IGAke29wdHMubWVzc2FnZXMub3B0aW9ufSAke2luZGV4fWA7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiB1dGlscy5oeXBoZW5DYXNlKGxhYmVsKVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhbHVlcy52YWx1ZXNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZW5zdXJlIG9wdGlvbiBkYXRhIGlzIGhhcyBhbGwgcmVxdWlyZWQga2V5c1xuICAgICAgICB2YWx1ZXMudmFsdWVzLmZvckVhY2gob3B0aW9uID0+IE9iamVjdC5hc3NpZ24oe30sIHtzZWxlY3RlZDogZmFsc2V9LCBvcHRpb24pKTtcbiAgICAgIH1cblxuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzxkaXYgY2xhc3M9XCJzb3J0YWJsZS1vcHRpb25zLXdyYXBcIj4nKTtcblxuICAgICAgZmllbGRPcHRpb25zLnB1c2goJzxvbCBjbGFzcz1cInNvcnRhYmxlLW9wdGlvbnNcIj4nKTtcbiAgICAgIHV0aWxzLmZvckVhY2godmFsdWVzLnZhbHVlcywgKGkpID0+IHtcbiAgICAgICAgZmllbGRPcHRpb25zLnB1c2goc2VsZWN0RmllbGRPcHRpb25zKHZhbHVlcy5uYW1lLCB2YWx1ZXMudmFsdWVzW2ldLCBpc011bHRpcGxlKSk7XG4gICAgICB9KTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L29sPicpO1xuICAgICAgZmllbGRPcHRpb25zLnB1c2godXRpbHMubWFya3VwKCdkaXYnLCBvcHRpb25BY3Rpb25zLCB7Y2xhc3NOYW1lOiAnb3B0aW9uLWFjdGlvbnMnfSkub3V0ZXJIVE1MKTtcbiAgICAgIGZpZWxkT3B0aW9ucy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgcmV0dXJuIHV0aWxzLm1hcmt1cCgnZGl2JywgZmllbGRPcHRpb25zLmpvaW4oJycpLCB7Y2xhc3NOYW1lOiAnZm9ybS1ncm91cCBmaWVsZC1vcHRpb25zJ30pLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGhlIGVkaXRhYmxlIHByb3BlcnRpZXMgZm9yIHRoZSBmaWVsZFxuICAgICAqIEBwYXJhbSAge29iamVjdH0gdmFsdWVzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhZHZhbmNlZCBmaWVsZHNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICBtYXJrdXAgZm9yIGFkdmFuY2VkIGZpZWxkc1xuICAgICAqL1xuICAgIGxldCBhZHZGaWVsZHMgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBhZHZGaWVsZHMgPSBbXTtcbiAgICAgIGxldCBrZXk7XG4gICAgICBsZXQgb3B0aW9uRmllbGRzID0gW1xuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ2NoZWNrYm94LWdyb3VwJyxcbiAgICAgICAgJ3JhZGlvLWdyb3VwJ1xuICAgICAgXTtcbiAgICAgIGxldCBpc09wdGlvbkZpZWxkID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKG9wdGlvbkZpZWxkcy5pbmRleE9mKHZhbHVlcy50eXBlKSAhPT0gLTEpO1xuICAgICAgfSkoKTtcbiAgICAgIGxldCB2YWx1ZUZpZWxkID0gIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIFsnaGVhZGVyJywgJ3BhcmFncmFwaCcsICdmaWxlJ10uY29uY2F0KG9wdGlvbkZpZWxkcykpO1xuICAgICAgbGV0IHJvbGVzID0gdmFsdWVzLnJvbGUgIT09IHVuZGVmaW5lZCA/IHZhbHVlcy5yb2xlLnNwbGl0KCcsJykgOiBbXTtcblxuICAgICAgYWR2RmllbGRzLnB1c2gocmVxdWlyZWRGaWVsZCh2YWx1ZXMpKTtcblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ3RvZ2dsZScsIHZhbHVlcywge2ZpcnN0OiBvcHRzLm1lc3NhZ2VzLnRvZ2dsZX0pKTtcbiAgICAgIH1cblxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgnbGFiZWwnLCB2YWx1ZXMpKTtcblxuICAgICAgdmFsdWVzLnNpemUgPSB2YWx1ZXMuc2l6ZSB8fCAnbSc7XG4gICAgICB2YWx1ZXMuc3R5bGUgPSB2YWx1ZXMuc3R5bGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgICAvLyBIZWxwIFRleHQgLyBEZXNjcmlwdGlvbiBGaWVsZFxuICAgICAgaWYgKCF1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ2hlYWRlcicsICdwYXJhZ3JhcGgnLCAnYnV0dG9uJ10pKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLm1lc3NhZ2VzLnN1YnR5cGVzW3ZhbHVlcy50eXBlXSkge1xuICAgICAgICBsZXQgb3B0aW9uRGF0YSA9IG9wdHMubWVzc2FnZXMuc3VidHlwZXNbdmFsdWVzLnR5cGVdO1xuICAgICAgICBhZHZGaWVsZHMucHVzaChzZWxlY3RBdHRyaWJ1dGUoJ3N1YnR5cGUnLCB2YWx1ZXMsIG9wdGlvbkRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlcy50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChidG5TdHlsZXModmFsdWVzLnN0eWxlLCB2YWx1ZXMudHlwZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWluJywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnbWF4JywgdmFsdWVzKSk7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKG51bWJlckF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICAvLyBQbGFjZWhvbGRlclxuICAgICAgYWR2RmllbGRzLnB1c2godGV4dEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB2YWx1ZXMpKTtcblxuICAgICAgLy8gVGV4dEFyZWEgUm93cyBBdHRyaWJ1dGVcbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChudW1iZXJBdHRyaWJ1dGUoJ3Jvd3MnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xhc3NcbiAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ2NsYXNzTmFtZScsIHZhbHVlcykpO1xuXG4gICAgICBhZHZGaWVsZHMucHVzaCh0ZXh0QXR0cmlidXRlKCduYW1lJywgdmFsdWVzKSk7XG5cbiAgICAgIGlmICh2YWx1ZUZpZWxkKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHRleHRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZXMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGxldCBsYWJlbHMgPSB7XG4gICAgICAgICAgZmlyc3Q6IG9wdHMubWVzc2FnZXMubXVsdGlwbGVGaWxlcyxcbiAgICAgICAgICBzZWNvbmQ6IG9wdHMubWVzc2FnZXMuYWxsb3dNdWx0aXBsZUZpbGVzXG4gICAgICAgIH07XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCBsYWJlbHMpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJvbGVzRGlzcGxheSA9IHZhbHVlcy5yb2xlICE9PSB1bmRlZmluZWQgPyAnc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCInIDogJyc7XG4gICAgICBsZXQgYXZhaWxhYmxlUm9sZXMgPSBbXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYXZhaWxhYmxlLXJvbGVzXCIgJHtyb2xlc0Rpc3BsYXl9PmBcbiAgICAgIF07XG4gICAgICBmb3IgKGtleSBpbiBvcHRzLnJvbGVzKSB7XG4gICAgICAgIGlmIChvcHRzLnJvbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgY2hlY2tlZCA9IHV0aWxzLmluQXJyYXkoa2V5LCByb2xlcykgPyAnY2hlY2tlZCcgOiAnJztcbiAgICAgICAgICBsZXQgcm9sZUlkID0gYGZsZC0ke2xhc3RJRH0tcm9sZXMtJHtrZXl9YDtcbiAgICAgICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJvbGVzW11cIiB2YWx1ZT1cIiR7a2V5fVwiIGlkPVwiJHtyb2xlSWR9XCIgJHtjaGVja2VkfSBjbGFzcz1cInJvbGVzLWZpZWxkXCIgLz4gPGxhYmVsIGZvcj1cIiR7cm9sZUlkfVwiPiR7b3B0cy5yb2xlc1trZXldfTwvbGFiZWw+PGJyLz5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhdmFpbGFibGVSb2xlcy5wdXNoKCc8L2Rpdj4nKTtcblxuICAgICAgbGV0IGFjY2Vzc0xhYmVscyA9IHtmaXJzdDogb3B0cy5tZXNzYWdlcy5yb2xlcywgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmxpbWl0Um9sZSwgY29udGVudDogYXZhaWxhYmxlUm9sZXMuam9pbignJyl9O1xuXG4gICAgICBhZHZGaWVsZHMucHVzaChib29sQXR0cmlidXRlKCdhY2Nlc3MnLCB2YWx1ZXMsIGFjY2Vzc0xhYmVscykpO1xuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcgfHwgdmFsdWVzLnR5cGUgPT09ICdyYWRpby1ncm91cCcpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2goYm9vbEF0dHJpYnV0ZSgnb3RoZXInLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy5lbmFibGVPdGhlciwgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLmVuYWJsZU90aGVyTXNnfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWVzLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKGJvb2xBdHRyaWJ1dGUoJ211bHRpcGxlJywgdmFsdWVzLCB7Zmlyc3Q6ICcgJywgc2Vjb25kOiBvcHRzLm1lc3NhZ2VzLnNlbGVjdGlvbnNNZXNzYWdlfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPcHRpb25GaWVsZCkge1xuICAgICAgICBhZHZGaWVsZHMucHVzaChmaWVsZE9wdGlvbnModmFsdWVzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCBbJ3RleHQnLCAndGV4dGFyZWEnXSkpIHtcbiAgICAgICAgYWR2RmllbGRzLnB1c2gobnVtYmVyQXR0cmlidXRlKCdtYXhsZW5ndGgnLCB2YWx1ZXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIGN1c3RvbSBhdHRyaWJ1dGVzIGFzIGRlZmluZWQgaW4gdHlwZVVzZXJBdHRycyBvcHRpb25cbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdKSB7XG4gICAgICAgIGFkdkZpZWxkcy5wdXNoKHByb2Nlc3NUeXBlVXNlckF0dHJzKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0sIHZhbHVlcykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWR2RmllbGRzLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdHlwZVVzZXJBdHRyc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gdHlwZVVzZXJBdHRyIG9wdGlvblxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICAgIGZpZWxkIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICBtYXJrdXAgZm9yIGN1c3RvbSB1c2VyIGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzVHlwZVVzZXJBdHRycyh0eXBlVXNlckF0dHIsIHZhbHVlcykge1xuICAgICAgbGV0IGFkdkZpZWxkID0gW107XG5cbiAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiB0eXBlVXNlckF0dHIpIHtcbiAgICAgICAgaWYgKHR5cGVVc2VyQXR0ci5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgbGV0IG9yaWcgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV07XG4gICAgICAgICAgbGV0IG9yaWdWYWx1ZSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlO1xuICAgICAgICAgIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLnZhbHVlID0gdmFsdWVzW2F0dHJpYnV0ZV0gfHwgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgfHwgJyc7XG5cbiAgICAgICAgICBpZiAodHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0ubGFiZWwpIHtcbiAgICAgICAgICAgIG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSA9IHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdLmxhYmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlVXNlckF0dHJbYXR0cmlidXRlXS5vcHRpb25zKSB7XG4gICAgICAgICAgICBhZHZGaWVsZC5wdXNoKHNlbGVjdFVzZXJBdHRycyhhdHRyaWJ1dGUsIHR5cGVVc2VyQXR0clthdHRyaWJ1dGVdKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkdkZpZWxkLnB1c2goaW5wdXRVc2VyQXR0cnMoYXR0cmlidXRlLCB0eXBlVXNlckF0dHJbYXR0cmlidXRlXSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdHMubWVzc2FnZXNbYXR0cmlidXRlXSA9IG9yaWc7XG4gICAgICAgICAgdHlwZVVzZXJBdHRyW2F0dHJpYnV0ZV0udmFsdWUgPSBvcmlnVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFkdkZpZWxkLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHQgaW5wdXQgdmFsdWUgZm9yIGF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnMgYWxzbyBrbm93biBhcyB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgIGlucHV0IG1hcmt1cFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlucHV0VXNlckF0dHJzKG5hbWUsIGF0dHJzKSB7XG4gICAgICBsZXQgdGV4dEF0dHJzID0ge1xuICAgICAgICAgIGlkOiBuYW1lICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIHRpdGxlOiBhdHRycy5kZXNjcmlwdGlvbiB8fCBhdHRycy5sYWJlbCB8fCBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBhdHRycy50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICBjbGFzc05hbWU6IFtgZmxkLSR7bmFtZX1gXVxuICAgICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3RleHRBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbbmFtZV19PC9sYWJlbD5gO1xuXG4gICAgICBpZiAoIXV0aWxzLmluQXJyYXkodGV4dEF0dHJzLnR5cGUsIFsnY2hlY2tib3gnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgdGV4dEF0dHJzLmNsYXNzTmFtZS5wdXNoKCdmb3JtLWNvbnRyb2wnKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHRleHRBdHRycyk7XG4gICAgICBsZXQgdGV4dElucHV0ID0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcodGV4dEF0dHJzKX0+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3RleHRJbnB1dH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGlucHV0IGZvciBtdWx0aXBsZSBjaG9pY2UgdXNlciBhdHRyaWJ1dGVzXG4gICAgICogQHRvZG8gIHJlcGxhY2Ugd2l0aCBzZWxlY3RBdHRyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgIHNlbGVjdCBtYXJrdXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RVc2VyQXR0cnMobmFtZSwgb3B0aW9ucykge1xuICAgICAgbGV0IG9wdGlzID0gT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5tYXAodmFsID0+IHtcbiAgICAgICAgbGV0IGF0dHJzID0ge3ZhbHVlOiB2YWx9O1xuICAgICAgICBpZiAodmFsID09PSBvcHRpb25zLnZhbHVlKSB7XG4gICAgICAgICAgYXR0cnMuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcoYXR0cnMpfT4ke29wdGlvbnMub3B0aW9uc1t2YWxdfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgaWQ6IG5hbWUgKyAnLScgKyBsYXN0SUQsXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLmRlc2NyaXB0aW9uIHx8IG9wdGlvbnMubGFiZWwgfHwgbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHtuYW1lfSBmb3JtLWNvbnRyb2xgXG4gICAgICB9O1xuICAgICAgbGV0IGxhYmVsID0gYDxsYWJlbCBmb3I9XCIke3NlbGVjdEF0dHJzLmlkfVwiPiR7b3B0cy5tZXNzYWdlc1tuYW1lXX08L2xhYmVsPmA7XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihwcm9wID0+IHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5pbkFycmF5KHByb3AsIFsndmFsdWUnLCAnb3B0aW9ucycsICdsYWJlbCddKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBzZWxlY3RBdHRyc1thdHRyXSA9IG9wdGlvbnNbYXR0cl07XG4gICAgICB9KTtcblxuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7b3B0aXMuam9pbignJyl9PC9zZWxlY3Q+YDtcbiAgICAgIGxldCBpbnB1dFdyYXAgPSBgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4ke3NlbGVjdH08L2Rpdj5gO1xuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke25hbWV9LXdyYXBcIj4ke2xhYmVsfSR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgbGV0IGJvb2xBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZXMsIGxhYmVscykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVtuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbCA9ICh0eHQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGFiZWwgZm9yPVwiJHtuYW1lfS0ke2xhc3RJRH1cIj4ke3R4dH08L2xhYmVsPmA7XG4gICAgICB9O1xuICAgICAgbGV0IGNoZWNrZWQgPSAodmFsdWVzW25hbWVdICE9PSB1bmRlZmluZWQgPyAnY2hlY2tlZCcgOiAnJyk7XG4gICAgICBsZXQgaW5wdXQgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZmxkLSR7bmFtZX1cIiBuYW1lPVwiJHtuYW1lfVwiIHZhbHVlPVwidHJ1ZVwiICR7Y2hlY2tlZH0gaWQ9XCIke25hbWV9LSR7bGFzdElEfVwiLz4gYDtcbiAgICAgIGxldCBsZWZ0ID0gW107XG4gICAgICBsZXQgcmlnaHQgPSBbXG4gICAgICAgIGlucHV0XG4gICAgICBdO1xuXG4gICAgICBpZiAobGFiZWxzLmZpcnN0KSB7XG4gICAgICAgIGxlZnQudW5zaGlmdChsYWJlbChsYWJlbHMuZmlyc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhYmVscy5zZWNvbmQpIHtcbiAgICAgICAgcmlnaHQucHVzaChsYWJlbChsYWJlbHMuc2Vjb25kKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYWJlbHMuY29udGVudCkge1xuICAgICAgICByaWdodC5wdXNoKGxhYmVscy5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgcmlnaHQudW5zaGlmdCgnPGRpdiBjbGFzcz1cImlucHV0LXdyYXBcIj4nKTtcbiAgICAgIHJpZ2h0LnB1c2goJzwvZGl2PicpO1xuXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICR7bmFtZX0td3JhcFwiPiR7bGVmdC5jb25jYXQocmlnaHQpLmpvaW4oJycpfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIGxldCBidG5TdHlsZXMgPSBmdW5jdGlvbihzdHlsZSwgdHlwZSkge1xuICAgICAgbGV0IHRhZ3MgPSB7XG4gICAgICAgICAgYnV0dG9uOiAnYnRuJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgc3R5bGVzID0gb3B0cy5tZXNzYWdlcy5zdHlsZXNbdGFnc1t0eXBlXV07XG4gICAgICAgIGxldCBzdHlsZUZpZWxkID0gJyc7XG5cbiAgICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlTGFiZWwgPSBgPGxhYmVsPiR7b3B0cy5tZXNzYWdlcy5zdHlsZX08L2xhYmVsPmA7XG4gICAgICAgIHN0eWxlRmllbGQgKz0gYDxpbnB1dCB2YWx1ZT1cIiR7c3R5bGV9XCIgbmFtZT1cInN0eWxlXCIgdHlwZT1cImhpZGRlblwiIGNsYXNzPVwiYnRuLXN0eWxlXCI+YDtcbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiPic7XG5cbiAgICAgICAgT2JqZWN0LmtleXMob3B0cy5tZXNzYWdlcy5zdHlsZXNbdGFnc1t0eXBlXV0pLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgIGxldCBhY3RpdmUgPSBzdHlsZSA9PT0gZWxlbWVudCA/ICdhY3RpdmUnIDogJyc7XG4gICAgICAgICAgc3R5bGVGaWVsZCArPSBgPGJ1dHRvbiB2YWx1ZT1cIiR7ZWxlbWVudH1cIiB0eXBlPVwiJHt0eXBlfVwiIGNsYXNzPVwiJHthY3RpdmV9IGJ0bi14cyAke3RhZ3NbdHlwZV19ICR7dGFnc1t0eXBlXX0tJHtlbGVtZW50fVwiPiR7b3B0cy5tZXNzYWdlcy5zdHlsZXNbdGFnc1t0eXBlXV1bZWxlbWVudF19PC9idXR0b24+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3R5bGVGaWVsZCArPSAnPC9kaXY+JztcblxuICAgICAgICBzdHlsZUZpZWxkID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHN0eWxlLXdyYXBcIj4ke3N0eWxlTGFiZWx9ICR7c3R5bGVGaWVsZH08L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGVGaWVsZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbnVtYmVyIGF0dHJpYnV0ZSB0byBhIGZpZWxkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IG1hcmt1cCBmb3IgbnVtYmVyIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXTtcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV0gfHwgYXR0cmlidXRlO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbYXR0cmlidXRlXTtcbiAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIHZhbHVlOiBhdHRyVmFsLFxuICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgIG1pbjogJzAnLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgaWQ6IGAke2F0dHJpYnV0ZX0tJHtsYXN0SUR9YFxuICAgICAgfTtcbiAgICAgIGxldCBudW1iZXJBdHRyaWJ1dGUgPSBgPGlucHV0ICR7dXRpbHMuYXR0clN0cmluZyh1dGlscy50cmltT2JqKGlucHV0Q29uZmlnKSl9PmA7XG4gICAgICBsZXQgaW5wdXRXcmFwID0gYDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwXCI+JHtudW1iZXJBdHRyaWJ1dGV9PC9kaXY+YDtcblxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPjxsYWJlbCBmb3I9XCIke2lucHV0Q29uZmlnLmlkfVwiPiR7YXR0ckxhYmVsfTwvbGFiZWw+ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNlbGVjdEF0dHJpYnV0ZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlICBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdmFsdWVzICAgICBha2EgYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gb3B0aW9uRGF0YSAgc2VsZWN0IGZpZWxkIG9wdGlvbiBkYXRhXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgIHNlbGVjdCBpbnB1dCBtYWtydXBcbiAgICAgKi9cbiAgICBsZXQgc2VsZWN0QXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZXMsIG9wdGlvbkRhdGEpIHtcbiAgICAgIGlmIChvcHRzLnR5cGVVc2VyQXR0cnNbdmFsdWVzLnR5cGVdICYmIG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV1bYXR0cmlidXRlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IG9wdGlvbkRhdGEubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbkF0dHJzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgbGFiZWw6IGAke29wdHMubWVzc2FnZXMub3B0aW9ufSAke2l9YCxcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgIH0sIG9wdGlvbik7XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHZhbHVlc1thdHRyaWJ1dGVdKSB7XG4gICAgICAgICAgb3B0aW9uQXR0cnMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPG9wdGlvbiAke3V0aWxzLmF0dHJTdHJpbmcodXRpbHMudHJpbU9iaihvcHRpb25BdHRycykpfT4ke29wdGlvbkF0dHJzLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWxlY3RBdHRycyA9IHtcbiAgICAgICAgICBpZDogYXR0cmlidXRlICsgJy0nICsgbGFzdElELFxuICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGBmbGQtJHthdHRyaWJ1dGV9IGZvcm0tY29udHJvbGBcbiAgICAgICAgfTtcbiAgICAgIGxldCBsYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtzZWxlY3RBdHRycy5pZH1cIj4ke29wdHMubWVzc2FnZXNbYXR0cmlidXRlXSB8fCB1dGlscy5jYXBpdGFsaXplKGF0dHJpYnV0ZSl9PC9sYWJlbD5gO1xuICAgICAgbGV0IHNlbGVjdCA9IGA8c2VsZWN0ICR7dXRpbHMuYXR0clN0cmluZyhzZWxlY3RBdHRycyl9PiR7c2VsZWN0T3B0aW9ucy5qb2luKCcnKX08L3NlbGVjdD5gO1xuICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7c2VsZWN0fTwvZGl2PmA7XG5cbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgJHtzZWxlY3RBdHRycy5uYW1lfS13cmFwXCI+JHtsYWJlbH0ke2lucHV0V3JhcH08L2Rpdj5gO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBzb21lIHRleHQgaW5wdXRzIGZvciBmaWVsZCBhdHRyaWJ1dGVzLCAqKndpbGwgYmUgcmVwbGFjZWQqKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gYXR0cmlidXRlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgbGV0IHRleHRBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlcykge1xuICAgICAgaWYgKG9wdHMudHlwZVVzZXJBdHRyc1t2YWx1ZXMudHlwZV0gJiYgb3B0cy50eXBlVXNlckF0dHJzW3ZhbHVlcy50eXBlXVthdHRyaWJ1dGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHBsYWNlaG9sZGVyRmllbGRzID0gW1xuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICdzZWxlY3QnXG4gICAgICBdO1xuXG4gICAgICBsZXQgbm9OYW1lID0gW1xuICAgICAgICAnaGVhZGVyJ1xuICAgICAgXTtcblxuICAgICAgbGV0IHRleHRBcmVhID0gWydwYXJhZ3JhcGgnXTtcblxuICAgICAgbGV0IGF0dHJWYWwgPSB2YWx1ZXNbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIGxldCBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzW2F0dHJpYnV0ZV07XG4gICAgICBpZiAoYXR0cmlidXRlID09PSAnbGFiZWwnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHRleHRBcmVhKSkge1xuICAgICAgICBhdHRyTGFiZWwgPSBvcHRzLm1lc3NhZ2VzLmNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIG5vTmFtZSA9IG5vTmFtZS5jb25jYXQob3B0cy5tZXNzYWdlcy5zdWJ0eXBlcy5oZWFkZXIsIHRleHRBcmVhKTtcblxuICAgICAgbGV0IHBsYWNlaG9sZGVycyA9IG9wdHMubWVzc2FnZXMucGxhY2Vob2xkZXJzO1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW2F0dHJpYnV0ZV0gfHwgJyc7XG4gICAgICBsZXQgYXR0cmlidXRlZmllbGQgPSAnJztcbiAgICAgIGxldCBub01ha2VBdHRyID0gW107XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBwbGFjZWhvbGRlciBhdHRyaWJ1dGVcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdwbGFjZWhvbGRlcicgJiYgIXV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIHBsYWNlaG9sZGVyRmllbGRzKSkge1xuICAgICAgICBub01ha2VBdHRyLnB1c2godHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpZWxkIGhhcyBuYW1lIGF0dHJpYnV0ZVxuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ25hbWUnICYmIHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vTmFtZSkpIHtcbiAgICAgICAgbm9NYWtlQXR0ci5wdXNoKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vTWFrZUF0dHIuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICAgIGxldCBpbnB1dENvbmZpZyA9IHtcbiAgICAgICAgICBuYW1lOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGZsZC0ke2F0dHJpYnV0ZX0gZm9ybS1jb250cm9sYCxcbiAgICAgICAgICBpZDogYCR7YXR0cmlidXRlfS0ke2xhc3RJRH1gXG4gICAgICAgIH07XG4gICAgICAgIGxldCBhdHRyaWJ1dGVMYWJlbCA9IGA8bGFiZWwgZm9yPVwiJHtpbnB1dENvbmZpZy5pZH1cIj4ke2F0dHJMYWJlbH08L2xhYmVsPmA7XG5cbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xhYmVsJyAmJiB1dGlscy5pbkFycmF5KHZhbHVlcy50eXBlLCB0ZXh0QXJlYSkgfHwgKGF0dHJpYnV0ZSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZXMudHlwZSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVmaWVsZCArPSBgPHRleHRhcmVhICR7dXRpbHMuYXR0clN0cmluZyhpbnB1dENvbmZpZyl9PiR7YXR0clZhbH08L3RleHRhcmVhPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXRDb25maWcudmFsdWUgPSBhdHRyVmFsO1xuICAgICAgICAgIGlucHV0Q29uZmlnLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgYXR0cmlidXRlZmllbGQgKz0gYDxpbnB1dCAke3V0aWxzLmF0dHJTdHJpbmcoaW5wdXRDb25maWcpfT5gO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlucHV0V3JhcCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPiR7YXR0cmlidXRlZmllbGR9PC9kaXY+YDtcblxuICAgICAgICBhdHRyaWJ1dGVmaWVsZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAke2F0dHJpYnV0ZX0td3JhcFwiPiR7YXR0cmlidXRlTGFiZWx9ICR7aW5wdXRXcmFwfTwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVmaWVsZDtcbiAgICB9O1xuXG4gICAgbGV0IHJlcXVpcmVkRmllbGQgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIGxldCBub1JlcXVpcmUgPSBbXG4gICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICAgJ2J1dHRvbidcbiAgICAgICAgXTtcbiAgICAgIGxldCBub01ha2UgPSBbXTtcbiAgICAgIGxldCByZXF1aXJlRmllbGQgPSAnJztcblxuICAgICAgaWYgKHV0aWxzLmluQXJyYXkodmFsdWVzLnR5cGUsIG5vUmVxdWlyZSkpIHtcbiAgICAgICAgbm9NYWtlLnB1c2godHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vTWFrZS5zb21lKGVsZW0gPT4gZWxlbSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVxdWlyZUZpZWxkID0gYm9vbEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZXMsIHtmaXJzdDogb3B0cy5tZXNzYWdlcy5yZXF1aXJlZH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWlyZUZpZWxkO1xuICAgIH07XG5cbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBmaWVsZCB0byB0aGUgZWRpdG9yXG4gICAgbGV0IGFwcGVuZE5ld0ZpZWxkID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICBjb25zdCBtID0gdXRpbHMubWFya3VwO1xuICAgICAgbGV0IHR5cGUgPSB2YWx1ZXMudHlwZSB8fCAndGV4dCc7XG4gICAgICBsZXQgbGFiZWwgPSB2YWx1ZXMubGFiZWwgfHwgb3B0cy5tZXNzYWdlc1t0eXBlXSB8fCBvcHRzLm1lc3NhZ2VzLmxhYmVsO1xuICAgICAgbGV0IGRlbEJ0biA9IG0oJ2EnLCBvcHRzLm1lc3NhZ2VzLnJlbW92ZSwge1xuICAgICAgICAgIGlkOiAnZGVsXycgKyBsYXN0SUQsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnZGVsLWJ1dHRvbiBidG4gZGVsZXRlLWNvbmZpcm0nLFxuICAgICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICBsZXQgdG9nZ2xlQnRuID0gbSgnYScsIG51bGwsIHtcbiAgICAgICAgaWQ6IGxhc3RJRCArICctZWRpdCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ3RvZ2dsZS1mb3JtIGJ0biBpY29uLXBlbmNpbCcsXG4gICAgICAgIHRpdGxlOiBvcHRzLm1lc3NhZ2VzLmhpZGVcbiAgICAgIH0pO1xuICAgICAgbGV0IGNvcHlCdG4gPSBtKCdhJywgb3B0cy5tZXNzYWdlcy5jb3B5QnV0dG9uLCB7XG4gICAgICAgIGlkOiBsYXN0SUQgKyAnLWNvcHknLFxuICAgICAgICBjbGFzc05hbWU6ICdjb3B5LWJ1dHRvbiBidG4gaWNvbi1jb3B5JyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMuY29weUJ1dHRvblRvb2x0aXBcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGlDb250ZW50cyA9IG0oXG4gICAgICAgICdkaXYnLCBbdG9nZ2xlQnRuLCBjb3B5QnRuLCBkZWxCdG5dLCB7Y2xhc3NOYW1lOiAnZmllbGQtYWN0aW9ucyd9XG4gICAgICApLm91dGVySFRNTDtcblxuICAgICAgLy8gRmllbGQgcHJldmlldyBMYWJlbFxuICAgICAgbGlDb250ZW50cyArPSBgPGxhYmVsIGNsYXNzPVwiZmllbGQtbGFiZWxcIj4ke2xhYmVsfTwvbGFiZWw+YDtcblxuICAgICAgaWYgKHZhbHVlcy5kZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndG9vbHRpcC1lbGVtZW50JyxcbiAgICAgICAgICB0b29sdGlwOiB2YWx1ZXMuZGVzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICAgICAgbGlDb250ZW50cyArPSBgPHNwYW4gJHt1dGlscy5hdHRyc1N0cmluZyhhdHRycyl9Pj88L3NwYW4+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlcXVpcmVkRGlzcGxheSA9IHZhbHVlcy5yZXF1aXJlZCA/ICdzdHlsZT1cImRpc3BsYXk6aW5saW5lXCInIDogJyc7XG4gICAgICBsaUNvbnRlbnRzICs9IGA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCIgJHtyZXF1aXJlZERpc3BsYXl9PiAqPC9zcGFuPmA7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gbSgnZGl2JywgJycsIHtjbGFzc05hbWU6ICdwcmV2LWhvbGRlcid9KS5vdXRlckhUTUw7XG4gICAgICBsaUNvbnRlbnRzICs9IGA8ZGl2IGlkPVwiJHtsYXN0SUR9LWhvbGRlclwiIGNsYXNzPVwiZnJtLWhvbGRlclwiPmA7XG4gICAgICBsaUNvbnRlbnRzICs9ICc8ZGl2IGNsYXNzPVwiZm9ybS1lbGVtZW50c1wiPic7XG5cbiAgICAgIGxpQ29udGVudHMgKz0gYWR2RmllbGRzKHZhbHVlcyk7XG4gICAgICBsaUNvbnRlbnRzICs9IG0oJ2EnLCBvcHRzLm1lc3NhZ2VzLmNsb3NlLCB7Y2xhc3NOYW1lOiAnY2xvc2UtZmllbGQnfSkub3V0ZXJIVE1MO1xuXG4gICAgICBsaUNvbnRlbnRzICs9ICc8L2Rpdj4nO1xuICAgICAgbGlDb250ZW50cyArPSAnPC9kaXY+JztcblxuICAgICAgbGV0IGZpZWxkID0gbSgnbGknLCBsaUNvbnRlbnRzLCB7XG4gICAgICAgICAgJ2NsYXNzJzogdHlwZSArICctZmllbGQgZm9ybS1maWVsZCcsXG4gICAgICAgICAgJ3R5cGUnOiB0eXBlLFxuICAgICAgICAgIGlkOiBsYXN0SURcbiAgICAgICAgfSk7XG4gICAgICBsZXQgJGxpID0gJChmaWVsZCk7XG5cbiAgICAgICRsaS5kYXRhKCdmaWVsZERhdGEnLCB7YXR0cnM6IHZhbHVlc30pO1xuXG4gICAgICBpZiAodHlwZW9mIF9oZWxwZXJzLnN0b3BJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJCgnPiBsaScsICRzb3J0YWJsZUZpZWxkcykuZXEoX2hlbHBlcnMuc3RvcEluZGV4KS5iZWZvcmUoJGxpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzb3J0YWJsZUZpZWxkcy5hcHBlbmQoJGxpKTtcbiAgICAgIH1cblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMnLCAkbGkpXG4gICAgICAuc29ydGFibGUoe3VwZGF0ZTogKCkgPT4gX2hlbHBlcnMudXBkYXRlUHJldmlldygkbGkpfSk7XG5cbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGxpKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmFkZCkge1xuICAgICAgICBvcHRzLnR5cGVVc2VyRXZlbnRzW3R5cGVdLm9uYWRkKGZpZWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuZWRpdE9uQWRkKSB7XG4gICAgICAgIF9oZWxwZXJzLmNsb3NlQWxsRWRpdCgpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KGxhc3RJRCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgIH07XG5cbiAgICAvLyBTZWxlY3QgZmllbGQgaHRtbCwgc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlXG4gICAgbGV0IHNlbGVjdEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbkRhdGEsIG11bHRpcGxlU2VsZWN0KSB7XG4gICAgICBsZXQgb3B0aW9uSW5wdXRUeXBlID0ge1xuICAgICAgICAgIHNlbGVjdGVkOiAobXVsdGlwbGVTZWxlY3QgPyAnY2hlY2tib3gnIDogJ3JhZGlvJylcbiAgICAgICAgfTtcbiAgICAgIGxldCBvcHRpb25EYXRhT3JkZXIgPSBbXG4gICAgICAgICd2YWx1ZScsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdzZWxlY3RlZCdcbiAgICAgIF07XG4gICAgICBsZXQgb3B0aW9uSW5wdXRzID0gW107XG4gICAgICBsZXQgb3B0aW9uVGVtcGxhdGUgPSB7c2VsZWN0ZWQ6IGZhbHNlLCBsYWJlbDogJycsIHZhbHVlOiAnJ307XG5cbiAgICAgIG9wdGlvbkRhdGEgPSBPYmplY3QuYXNzaWduKG9wdGlvblRlbXBsYXRlLCBvcHRpb25EYXRhKTtcblxuICAgICAgZm9yIChsZXQgaSA9IG9wdGlvbkRhdGFPcmRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgcHJvcCA9IG9wdGlvbkRhdGFPcmRlcltpXTtcbiAgICAgICAgaWYgKG9wdGlvbkRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAgICAgICB0eXBlOiBvcHRpb25JbnB1dFR5cGVbcHJvcF0gfHwgJ3RleHQnLFxuICAgICAgICAgICAgJ2NsYXNzJzogJ29wdGlvbi0nICsgcHJvcCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb25EYXRhW3Byb3BdLFxuICAgICAgICAgICAgbmFtZTogbmFtZSArICctb3B0aW9uJ1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAob3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbcHJvcF0pIHtcbiAgICAgICAgICAgIGF0dHJzLnBsYWNlaG9sZGVyID0gb3B0cy5tZXNzYWdlcy5wbGFjZWhvbGRlcnNbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3AgPT09ICdzZWxlY3RlZCcgJiYgb3B0aW9uRGF0YS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0cnMuY2hlY2tlZCA9IG9wdGlvbkRhdGEuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0aW9uSW5wdXRzLnB1c2godXRpbHMubWFya3VwKCdpbnB1dCcsIG51bGwsIGF0dHJzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHJlbW92ZUF0dHJzID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdyZW1vdmUgYnRuJyxcbiAgICAgICAgdGl0bGU6IG9wdHMubWVzc2FnZXMucmVtb3ZlTWVzc2FnZVxuICAgICAgfTtcbiAgICAgIG9wdGlvbklucHV0cy5wdXNoKHV0aWxzLm1hcmt1cCgnYScsIG9wdHMubWVzc2FnZXMucmVtb3ZlLCByZW1vdmVBdHRycykpO1xuXG4gICAgICBsZXQgZmllbGQgPSB1dGlscy5tYXJrdXAoJ2xpJywgb3B0aW9uSW5wdXRzKTtcblxuICAgICAgcmV0dXJuIGZpZWxkLm91dGVySFRNTDtcbiAgICB9O1xuXG4gICAgbGV0IGNsb25lSXRlbSA9IGZ1bmN0aW9uIGNsb25lSXRlbShjdXJyZW50SXRlbSkge1xuICAgICAgbGV0IGN1cnJlbnRJZCA9IGN1cnJlbnRJdGVtLmF0dHIoJ2lkJyk7XG4gICAgICBsZXQgdHlwZSA9IGN1cnJlbnRJdGVtLmF0dHIoJ3R5cGUnKTtcbiAgICAgIGxldCB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGNsb25lTmFtZSA9IHR5cGUgKyAnLScgKyB0cztcbiAgICAgIGxldCAkY2xvbmUgPSBjdXJyZW50SXRlbS5jbG9uZSgpO1xuXG4gICAgICAkY2xvbmUuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7IHRoaXMuaWQgPSB0aGlzLmlkLnJlcGxhY2UoY3VycmVudElkLCBsYXN0SUQpOyB9KTtcblxuICAgICAgJGNsb25lLmZpbmQoJ1tmb3JdJykuZWFjaChmdW5jdGlvbigpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3InKS5yZXBsYWNlKGN1cnJlbnRJZCwgbGFzdElEKSk7IH0pO1xuXG4gICAgICAkY2xvbmUuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnZTpub3QoLmZvcm0tZWxlbWVudHMpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgbmV3TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUuc3Vic3RyaW5nKDAsIChuZXdOYW1lLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0cy50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgbmV3TmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgICRjbG9uZS5maW5kKCcuZm9ybS1lbGVtZW50cycpLmZpbmQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnbmFtZScpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAobmV3VmFsLmxhc3RJbmRleE9mKCctJykgKyAxKSk7XG4gICAgICAgICAgbmV3VmFsID0gbmV3VmFsICsgdHMudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb25lLmF0dHIoJ2lkJywgbGFzdElEKTtcbiAgICAgICRjbG9uZS5hdHRyKCduYW1lJywgY2xvbmVOYW1lKTtcbiAgICAgICRjbG9uZS5hZGRDbGFzcygnY2xvbmVkJyk7XG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRjbG9uZSkuc29ydGFibGUoKTtcblxuICAgICAgaWYgKG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0gJiYgb3B0cy50eXBlVXNlckV2ZW50c1t0eXBlXS5vbmNsb25lKSB7XG4gICAgICAgIG9wdHMudHlwZVVzZXJFdmVudHNbdHlwZV0ub25jbG9uZSgkY2xvbmVbMF0pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SUQgPSBfaGVscGVycy5pbmNyZW1lbnRJZChsYXN0SUQpO1xuICAgICAgcmV0dXJuICRjbG9uZTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVVElMSVRJRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gICAgLy8gZGVsZXRlIG9wdGlvbnNcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLnBhcmVudHMoJy5mb3JtLWZpZWxkOmVxKDApJyk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb3B0aW9uc0NvdW50ID0gJCh0aGlzKS5wYXJlbnRzKCcuc29ydGFibGUtb3B0aW9uczplcSgwKScpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICAgIGlmIChvcHRpb25zQ291bnQgPD0gMikge1xuICAgICAgICBvcHRzLm5vdGlmeS5lcnJvcignRXJyb3I6ICcgKyBvcHRzLm1lc3NhZ2VzLm1pbk9wdGlvbk1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuc2xpZGVVcCgnMjUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRmaWVsZCk7XG4gICAgICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRvdWNoIGZvY3VzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCd0b3VjaHN0YXJ0JywgJ2lucHV0JywgZnVuY3Rpb24oZSkge1xuICAgICAgbGV0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICBpZiAoZS5oYW5kbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgbGV0IGZpZWxkVmFsID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICRpbnB1dC52YWwoZmllbGRWYWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgZmllbGRzXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy50b2dnbGUtZm9ybSwgLmNsb3NlLWZpZWxkJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLmhhbmRsZWQgIT09IHRydWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgICBfaGVscGVycy50b2dnbGVFZGl0KHRhcmdldElEKTtcbiAgICAgICAgZS5oYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2hhbmdlJywgJy5wcmV2LWhvbGRlciBpbnB1dCwgLnByZXYtaG9sZGVyIHNlbGVjdCcsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3RoZXItb3B0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGZpZWxkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkuZm9ybS1maWVsZCcpWzBdO1xuICAgICAgaWYgKHV0aWxzLmluQXJyYXkoZmllbGQudHlwZSwgWydzZWxlY3QnLCAnY2hlY2tib3gtZ3JvdXAnLCAncmFkaW8tZ3JvdXAnXSkpIHtcbiAgICAgICAgZmllbGQucXVlcnlTZWxlY3RvcignW2NsYXNzPVwib3B0aW9uLXZhbHVlXCJdW3ZhbHVlPVwiJyArIGUudGFyZ2V0LnZhbHVlICsgJ1wiXScpLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1swXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZS0nICsgZmllbGQuaWQpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZSBwcmV2aWV3IHRvIGxhYmVsXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdrZXl1cCBjaGFuZ2UnLCAnW25hbWU9XCJsYWJlbFwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICQoJy5maWVsZC1sYWJlbCcsICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJykpLnRleHQoJChlLnRhcmdldCkudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGVycm9yIHN0eWxpbmcgd2hlbiB1c2VycyB0cmllcyB0byBjb3JyZWN0IG1pc3Rha2VcbiAgICAkc29ydGFibGVGaWVsZHMuZGVsZWdhdGUoJ2lucHV0LmVycm9yJywgJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgcHJldmlldyBmb3IgZGVzY3JpcHRpb25cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2tleXVwJywgJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCAkZmllbGQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZm9ybS1maWVsZDplcSgwKScpO1xuICAgICAgbGV0IGNsb3Nlc3RUb29sVGlwID0gJCgnLnRvb2x0aXAtZWxlbWVudCcsICRmaWVsZCk7XG4gICAgICBsZXQgdHRWYWwgPSAkKGUudGFyZ2V0KS52YWwoKTtcbiAgICAgIGlmICh0dFZhbCAhPT0gJycpIHtcbiAgICAgICAgaWYgKCFjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdHQgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHt0dFZhbH1cIj4/PC9zcGFuPmA7XG4gICAgICAgICAgJCgnLmZpZWxkLWxhYmVsJywgJGZpZWxkKS5hZnRlcih0dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2VzdFRvb2xUaXAuYXR0cigndG9vbHRpcCcsIHR0VmFsKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjbG9zZXN0VG9vbFRpcC5sZW5ndGgpIHtcbiAgICAgICAgICBjbG9zZXN0VG9vbFRpcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NoYW5nZScsICcuZmxkLW11bHRpcGxlJywgZSA9PiB7XG4gICAgICBsZXQgbmV3VHlwZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcblxuICAgICAgJChlLnRhcmdldClcbiAgICAgIC5wYXJlbnRzKCcuZm9ybS1lbGVtZW50czplcSgwKScpXG4gICAgICAuZmluZCgnLnNvcnRhYmxlLW9wdGlvbnMgaW5wdXQub3B0aW9uLXNlbGVjdGVkJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBlLnRhcmdldC50eXBlID0gbmV3VHlwZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9ybWF0IG5hbWUgYXR0cmlidXRlXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdibHVyJywgJ2lucHV0LmZsZC1uYW1lJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5zYWZlbmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICQoZS50YXJnZXQpXG4gICAgICAgIC5hZGRDbGFzcygnZmllbGQtZXJyb3InKVxuICAgICAgICAuYXR0cigncGxhY2Vob2xkZXInLCBvcHRzLm1lc3NhZ2VzLmNhbm5vdEJlRW1wdHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2ZpZWxkLWVycm9yJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2JsdXInLCAnaW5wdXQuZmxkLW1heGxlbmd0aCcsIGUgPT4ge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBfaGVscGVycy5mb3JjZU51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb3B5IGZpZWxkXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5pY29uLWNvcHknLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoJ2xpJyk7XG4gICAgICBsZXQgJGNsb25lID0gY2xvbmVJdGVtKGN1cnJlbnRJdGVtKTtcbiAgICAgICRjbG9uZS5pbnNlcnRBZnRlcihjdXJyZW50SXRlbSk7XG4gICAgICBfaGVscGVycy51cGRhdGVQcmV2aWV3KCRjbG9uZSk7XG4gICAgICBfaGVscGVycy5zYXZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGUgZmllbGRcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmRlbGV0ZS1jb25maXJtJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBidXR0b25Qb3NpdGlvbiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICAgIHBhZ2VYOiBidXR0b25Qb3NpdGlvbi5sZWZ0ICsgKGJ1dHRvblBvc2l0aW9uLndpZHRoIC8gMiksXG4gICAgICAgICAgcGFnZVk6IChidXR0b25Qb3NpdGlvbi50b3AgLSBib2R5UmVjdC50b3ApIC0gMTJcbiAgICAgICAgfTtcblxuICAgICAgbGV0IGRlbGV0ZUlEID0gJChlLnRhcmdldCkucGFyZW50cygnLmZvcm0tZmllbGQ6ZXEoMCknKS5hdHRyKCdpZCcpO1xuICAgICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWxldGVJRCkpO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbENsb3NlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkZmllbGQucmVtb3ZlQ2xhc3MoJ2RlbGV0aW5nJyk7XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgc3VyZSB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWVsZFxuICAgICAgaWYgKG9wdHMuZmllbGRSZW1vdmVXYXJuKSB7XG4gICAgICAgIGxldCB3YXJuSDMgPSB1dGlscy5tYXJrdXAoJ2gzJywgb3B0cy5tZXNzYWdlcy53YXJuaW5nKTtcbiAgICAgICAgbGV0IHdhcm5NZXNzYWdlID0gdXRpbHMubWFya3VwKCdwJywgb3B0cy5tZXNzYWdlcy5maWVsZFJlbW92ZVdhcm5pbmcpO1xuICAgICAgICBfaGVscGVycy5jb25maXJtKFt3YXJuSDMsIHdhcm5NZXNzYWdlXSwgKCkgPT5cbiAgICAgICAgICBfaGVscGVycy5yZW1vdmVGaWVsZChkZWxldGVJRCksIGNvb3Jkcyk7XG4gICAgICAgICRmaWVsZC5hZGRDbGFzcygnZGVsZXRpbmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9oZWxwZXJzLnJlbW92ZUZpZWxkKGRlbGV0ZUlEKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBidXR0b24gc3R5bGUgc2VsZWN0aW9uXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuc3R5bGUtd3JhcCBidXR0b24nLCBlID0+IHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSAkKGUudGFyZ2V0KTtcbiAgICAgIGxldCBzdHlsZVZhbCA9ICRidXR0b24udmFsKCk7XG4gICAgICBsZXQgJGJ0blN0eWxlID0gJGJ1dHRvbi5wYXJlbnQoKS5wcmV2KCcuYnRuLXN0eWxlJyk7XG4gICAgICAkYnRuU3R5bGUudmFsKHN0eWxlVmFsKTtcbiAgICAgICRidXR0b24uc2libGluZ3MoJy5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkYnV0dG9uLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIF9oZWxwZXJzLnVwZGF0ZVByZXZpZXcoJGJ0blN0eWxlLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykpO1xuICAgICAgX2hlbHBlcnMuc2F2ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJlcXVpcmVkIGFzdGVyaXNrXG4gICAgJHNvcnRhYmxlRmllbGRzLm9uKCdjbGljaycsICcuZmxkLXJlcXVpcmVkJywgZSA9PiB7XG4gICAgICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5yZXF1aXJlZC1hc3RlcmlzaycpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgdG8gdG9nZ2xlIHJvbGVzIHZpc2liaWxpdHlcbiAgICAkc29ydGFibGVGaWVsZHMub24oJ2NsaWNrJywgJ2lucHV0LmZsZC1hY2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgcm9sZXMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpLmZpbmQoJy5hdmFpbGFibGUtcm9sZXMnKTtcbiAgICAgIGxldCBlbmFibGVSb2xlc0NCID0gJChlLnRhcmdldCk7XG4gICAgICByb2xlcy5zbGlkZVRvZ2dsZSgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWVuYWJsZVJvbGVzQ0IuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCByb2xlcykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhIGNhbGxiYWNrIHRvIGFkZCBuZXcgb3B0aW9uc1xuICAgICRzb3J0YWJsZUZpZWxkcy5vbignY2xpY2snLCAnLmFkZC1vcHQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgJG9wdGlvbldyYXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZmllbGQtb3B0aW9ucycpO1xuICAgICAgbGV0ICRtdWx0aXBsZSA9ICQoJ1tuYW1lPVwibXVsdGlwbGVcIl0nLCAkb3B0aW9uV3JhcCk7XG4gICAgICBsZXQgJGZpcnN0T3B0aW9uID0gJCgnLm9wdGlvbi1zZWxlY3RlZDplcSgwKScsICRvcHRpb25XcmFwKTtcbiAgICAgIGxldCBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgICAgIGlmICgkbXVsdGlwbGUubGVuZ3RoKSB7XG4gICAgICAgIGlzTXVsdGlwbGUgPSAkbXVsdGlwbGUucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNdWx0aXBsZSA9ICgkZmlyc3RPcHRpb24uYXR0cigndHlwZScpID09PSAnY2hlY2tib3gnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5hbWUgPSAkZmlyc3RPcHRpb24uYXR0cignbmFtZScpO1xuXG4gICAgICAkKCcuc29ydGFibGUtb3B0aW9ucycsICRvcHRpb25XcmFwKS5hcHBlbmQoc2VsZWN0RmllbGRPcHRpb25zKG5hbWUsIGZhbHNlLCBpc011bHRpcGxlKSk7XG4gICAgfSk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMub24oJ21vdXNlb3ZlciBtb3VzZW91dCcsICcucmVtb3ZlLCAuZGVsLWJ1dHRvbicsIGUgPT5cbiAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJykudG9nZ2xlQ2xhc3MoJ2RlbGV0ZScpKTtcblxuICAgIGlmIChvcHRzLnNob3dBY3Rpb25CdXR0b25zKSB7XG4gICAgICAvLyBWaWV3IFhNTFxuICAgICAgbGV0IHhtbEJ1dHRvbiA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJtYklEICsgJy12aWV3LWRhdGEnKSk7XG4gICAgICB4bWxCdXR0b24uY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9oZWxwZXJzLnNob3dEYXRhKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2xlYXIgYWxsIGZpZWxkcyBpbiBmb3JtIGVkaXRvclxuICAgICAgbGV0IGNsZWFyQnV0dG9uID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmcm1iSUQgKyAnLWNsZWFyLWFsbCcpKTtcbiAgICAgIGNsZWFyQnV0dG9uLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGZpZWxkcyA9ICQoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICAgICAgbGV0IGJ1dHRvblBvc2l0aW9uID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBjb29yZHMgPSB7XG4gICAgICAgICAgcGFnZVg6IGJ1dHRvblBvc2l0aW9uLmxlZnQgKyAoYnV0dG9uUG9zaXRpb24ud2lkdGggLyAyKSxcbiAgICAgICAgICBwYWdlWTogKGJ1dHRvblBvc2l0aW9uLnRvcCAtIGJvZHlSZWN0LnRvcCkgLSAxMlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgX2hlbHBlcnMuY29uZmlybShvcHRzLm1lc3NhZ2VzLmNsZWFyQWxsTWVzc2FnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfaGVscGVycy5yZW1vdmVBbGxmaWVsZHMoKTtcbiAgICAgICAgICAgIG9wdHMubm90aWZ5LnN1Y2Nlc3Mob3B0cy5tZXNzYWdlcy5hbGxGaWVsZHNSZW1vdmVkKTtcbiAgICAgICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgICAgICB9LCBjb29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9oZWxwZXJzLmRpYWxvZygnVGhlcmUgYXJlIG5vIGZpZWxkcyB0byBjbGVhcicsIGNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTYXZlIElkZWEgVGVtcGxhdGVcbiAgICAgICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJtYklEICsgJy1zYXZlJykpLmNsaWNrKGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oZWxwZXJzLmdldERhdGEoKTtcbiAgICBsb2FkRmllbGRzKCk7XG5cbiAgICAkc29ydGFibGVGaWVsZHMuY3NzKCdtaW4taGVpZ2h0JywgJGNiVUwuaGVpZ2h0KCkpO1xuXG4gICAgLy8gSWYgb3B0aW9uIHNldCwgY29udHJvbHMgd2lsbCByZW1haW4gaW4gdmlldyBpbiBlZGl0b3JcbiAgICBpZiAob3B0cy5zdGlja3lDb250cm9scykge1xuICAgICAgX2hlbHBlcnMuc3RpY2t5Q29udHJvbHMoJHNvcnRhYmxlRmllbGRzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5sb2FkZWQpO1xuXG4gICAgLy8gTWFrZSBhY3Rpb25zIGFjY2Vzc2libGVcbiAgICBmb3JtQnVpbGRlci5hY3Rpb25zID0ge1xuICAgICAgY2xlYXJGaWVsZHM6IF9oZWxwZXJzLnJlbW92ZUFsbGZpZWxkcyxcbiAgICAgIHNob3dEYXRhOiBfaGVscGVycy5zaG93RGF0YSxcbiAgICAgIHNhdmU6IF9oZWxwZXJzLnNhdmUsXG4gICAgICBhZGRGaWVsZDogKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBfaGVscGVycy5zdG9wSW5kZXggPSBmb3JtQnVpbGRlci5zdGFnZS5jaGlsZHJlbi5sZW5ndGggPyBpbmRleCA6IHVuZGVmaW5lZDtcbiAgICAgICAgcHJlcEZpZWxkVmFycyhmaWVsZCk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkQWRkZWQpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUZpZWxkOiBfaGVscGVycy5yZW1vdmVGaWVsZCxcbiAgICAgIHNldERhdGE6IGZvcm1EYXRhID0+IHtcbiAgICAgICAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzKCk7XG4gICAgICAgIF9oZWxwZXJzLmdldERhdGEoZm9ybURhdGEpO1xuICAgICAgICBsb2FkRmllbGRzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmb3JtQnVpbGRlcjtcbiAgfTtcblxuICAkLmZuLmZvcm1CdWlsZGVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBsZXQgZWxlbXMgPSB0aGlzO1xuICAgIHJldHVybiBlbGVtcy5lYWNoKChpKSA9PiB7XG4gICAgICBsZXQgZm9ybUJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIob3B0aW9ucywgZWxlbXNbaV0pO1xuICAgICAgJChlbGVtc1tpXSkuZGF0YSgnZm9ybUJ1aWxkZXInLCBmb3JtQnVpbGRlcik7XG5cbiAgICAgIHJldHVybiBmb3JtQnVpbGRlcjtcbiAgICB9KTtcbiAgfTtcbn0pKGpRdWVyeSk7XG4iLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbnMgc3BlY2lmaWMgdG8gZm9ybUJ1aWxkZXIuXG4gKiBDYWxsZWQgZm9ybSBmb3JtQnVpbGRlclxuICogQHBhcmFtICB7T2JqZWN0fSAgIG9wdHNcbiAqIEBwYXJhbSAge0luc3RhbmNlfSBmb3JtQnVpbGRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWxwZXIgZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIGhlbHBlcnMob3B0cywgZm9ybUJ1aWxkZXIpIHtcbiAgbGV0IF9oZWxwZXJzID0ge1xuICAgIGRvQ2FuY2VsOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuICBmb3JtQnVpbGRlci5ldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cy5qcycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGNvbnZlcnRzIG1lc3N5IGBjbCNzc05hbWVzYCBpbnRvIHZhbGlkIGBjbGFzcy1uYW1lc2BcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBoeXBoZW5hdGVkIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMubWFrZUNsYXNzTmFtZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgcmV0dXJuIHV0aWxzLmh5cGhlbkNhc2Uoc3RyKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgbW9iaWxlIGNsYXNzXG4gICAqIEB0b2RvIGZpbmQgY3NzIG9ubHkgc29sdXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSBNb2JpbGUgY2xhc3MgYWRkZWQgdG8gZm9ybUJ1aWxkZXJcbiAgICovXG4gIF9oZWxwZXJzLm1vYmlsZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG1vYmlsZUNsYXNzID0gJyc7XG4gICAgKGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xuICAgICAgICBtb2JpbGVDbGFzcyA9ICcgZmItbW9iaWxlJztcbiAgICAgIH1cbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICByZXR1cm4gbW9iaWxlQ2xhc3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIGEgZHJhZyBiZWdpbnNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBfaGVscGVycy5zdGFydE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIHVpLml0ZW0uc2hvdygpLmFkZENsYXNzKCdtb3ZpbmcnKTtcbiAgICBfaGVscGVycy5zdGFydEluZGV4ID0gJCgnbGknLCB0aGlzKS5pbmRleCh1aS5pdGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBkcmFnIGVuZHNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHVpXG4gICAqL1xuICBfaGVscGVycy5zdG9wTW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgdWkuaXRlbS5yZW1vdmVDbGFzcygnbW92aW5nJyk7XG4gICAgaWYgKF9oZWxwZXJzLmRvQ2FuY2VsKSB7XG4gICAgICAkKHVpLnNlbmRlcikuc29ydGFibGUoJ2NhbmNlbCcpO1xuICAgICAgJCh0aGlzKS5zb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgfVxuICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICBfaGVscGVycy5kb0NhbmNlbCA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBqUXVlcnkgVUkgc29ydGFibGUgYmVmb3JlU3RvcCBjYWxsYmFjayB1c2VkIGZvciBib3RoIGxpc3RzLlxuICAgKiBMb2dpYyBmb3IgY2FuY2VsaW5nIHRoZSBzb3J0IG9yIGRyb3AuXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSB1aVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2hlbHBlcnMuYmVmb3JlU3RvcCA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBsYXN0SW5kZXggPSBmb3JtLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgbGV0IGNhbmNlbEFycmF5ID0gW107XG4gICAgX2hlbHBlcnMuc3RvcEluZGV4ID0gdWkucGxhY2Vob2xkZXIuaW5kZXgoKSAtIDE7XG5cbiAgICBpZiAoIW9wdHMuc29ydGFibGVDb250cm9scyAmJiB1aS5pdGVtLnBhcmVudCgpLmhhc0NsYXNzKCdmcm1iLWNvbnRyb2wnKSkge1xuICAgICAgY2FuY2VsQXJyYXkucHVzaCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5wcmVwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKF9oZWxwZXJzLnN0b3BJbmRleCA9PT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBjYW5jZWxBcnJheS5wdXNoKChfaGVscGVycy5zdG9wSW5kZXggKyAxKSA9PT0gbGFzdEluZGV4KTtcbiAgICB9XG5cbiAgICBfaGVscGVycy5kb0NhbmNlbCA9IGNhbmNlbEFycmF5LnNvbWUoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSBzdHJpbmdzIHNhZmUgdG8gYmUgdXNlZCBhcyBjbGFzc2VzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgY29udmVydGVyIHN0cmluZ1xuICAgKi9cbiAgX2hlbHBlcnMuc2FmZW5hbWUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoL1teYS16QS1aMC05XFwtXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RyaXBzIG5vbi1udW1iZXJzIGZyb20gYSBudW1iZXIgb25seSBpbnB1dFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciBzdHJpbmcgd2l0aCBwb3NzaWJsZSBudW1iZXJcbiAgICogQHJldHVybiB7c3RyaW5nfSAgICAgc3RyaW5nIHdpdGhvdXQgbnVtYmVyc1xuICAgKi9cbiAgX2hlbHBlcnMuZm9yY2VOdW1iZXIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGhpZGUgYW5kIHNob3cgbW91c2UgdHJhY2tpbmcgdG9vbHRpcHMsIG9ubHkgdXNlZCBmb3IgZGlzYWJsZWRcbiAgICogZmllbGRzIGluIHRoZSBlZGl0b3IuXG4gICAqXG4gICAqIEB0b2RvICAgcmVtb3ZlIG9yIHJlZmFjdG9yIHRvIG1ha2UgYmV0dGVyIHVzZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHR0IGpRdWVyeSBvcHRpb24gd2l0aCBuZXh0ZWQgdG9vbHRpcFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2hlbHBlcnMuaW5pdFRvb2x0aXAgPSBmdW5jdGlvbih0dCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0dC5maW5kKCcudG9vbHRpcCcpO1xuICAgIHR0Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodG9vbHRpcC5vdXRlcldpZHRoKCkgPiAyMDApIHtcbiAgICAgICAgdG9vbHRpcC5hZGRDbGFzcygnbWF4LXdpZHRoJyk7XG4gICAgICB9XG4gICAgICB0b29sdGlwLmNzcygnbGVmdCcsIHR0LndpZHRoKCkgKyAxNCk7XG4gICAgICB0b29sdGlwLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgfSkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgIHR0LmZpbmQoJy50b29sdGlwJykuc3RvcCh0cnVlLCB0cnVlKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgfSk7XG4gICAgdG9vbHRpcC5oaWRlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGdldCBlbGVtZW50IHR5cGUgYW5kIHN1YnR5cGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAkZmllbGRcbiAgICogQHJldHVybiB7T2JqZWN0fSB7dHlwZTogJ2ZpZWxkVHlwZScsIHN1YnR5cGU6ICdmaWVsZFN1YlR5cGUnfVxuICAgKi9cbiAgX2hlbHBlcnMuZ2V0VHlwZXMgPSBmdW5jdGlvbigkZmllbGQpIHtcbiAgICBsZXQgdHlwZXMgPSB7XG4gICAgICAgIHR5cGU6ICRmaWVsZC5hdHRyKCd0eXBlJylcbiAgICAgIH07XG4gICAgbGV0IHN1YnR5cGUgPSAkKCcuZmxkLXN1YnR5cGUnLCAkZmllbGQpLnZhbCgpO1xuXG4gICAgaWYgKHN1YnR5cGUgIT09IHR5cGVzLnR5cGUpIHtcbiAgICAgIHR5cGVzLnN1YnR5cGUgPSBzdWJ0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0IG9wdGlvbiBkYXRhIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgalF1ZXJ5IGZpZWxkIG9iamVjdFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIEFycmF5IG9mIG9wdGlvbiB2YWx1ZXNcbiAgICovXG4gIF9oZWxwZXJzLmZpZWxkT3B0aW9uRGF0YSA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcblxuICAgICQoJy5zb3J0YWJsZS1vcHRpb25zIGxpJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgJG9wdGlvbiA9ICQodGhpcyk7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9ICQoJy5vcHRpb24tc2VsZWN0ZWQnLCAkb3B0aW9uKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgIGxldCBhdHRycyA9IHtcbiAgICAgICAgICBsYWJlbDogJCgnLm9wdGlvbi1sYWJlbCcsICRvcHRpb24pLnZhbCgpLFxuICAgICAgICAgIHZhbHVlOiAkKCcub3B0aW9uLXZhbHVlJywgJG9wdGlvbikudmFsKClcbiAgICAgICAgfTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGF0dHJzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMucHVzaChhdHRycyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfTtcblxuICAvKipcbiAgICogWE1MIHNhdmVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmb3JtIHNvcnRhYmxlRmllbGRzIG5vZGVcbiAgICogQHJldHVybiB7U3RyaW5nfSB4bWwgaW4gc3RyaW5nXG4gICAqL1xuICBfaGVscGVycy54bWxTYXZlID0gZnVuY3Rpb24oZm9ybSkge1xuICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgbGV0IGZvcm1EYXRhID0gX2hlbHBlcnMucHJlcERhdGEoZm9ybSk7XG4gICAgbGV0IHhtbCA9IFsnPGZvcm0tdGVtcGxhdGU+XFxuXFx0PGZpZWxkcz4nXTtcblxuICAgIHV0aWxzLmZvckVhY2goZm9ybURhdGEsIGZ1bmN0aW9uKGZpZWxkSW5kZXgsIGZpZWxkKSB7XG4gICAgICBsZXQgZmllbGRDb250ZW50ID0gbnVsbDtcblxuICAgICAgLy8gSGFuZGxlIG9wdGlvbnNcbiAgICAgIGlmIChmaWVsZC50eXBlLm1hdGNoKC8oc2VsZWN0fGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pKSB7XG4gICAgICAgIGxldCBvcHRpb25EYXRhID0gZmllbGQudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBvcHRpb24gPSBtKCdvcHRpb24nLCBvcHRpb25EYXRhW2ldLmxhYmVsLCBvcHRpb25EYXRhW2ldKS5vdXRlckhUTUw7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKCdcXG5cXHRcXHRcXHQnICsgb3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnB1c2goJ1xcblxcdFxcdCcpO1xuXG4gICAgICAgIGZpZWxkQ29udGVudCA9IG9wdGlvbnMuam9pbignJyk7XG4gICAgICAgIGRlbGV0ZSBmaWVsZC52YWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGxldCB4bWxGaWVsZCA9IG0oJ2ZpZWxkJywgZmllbGRDb250ZW50LCBmaWVsZCk7XG4gICAgICB4bWwucHVzaCgnXFxuXFx0XFx0JyArIHhtbEZpZWxkLm91dGVySFRNTCk7XG4gICAgfSk7XG5cbiAgICB4bWwucHVzaCgnXFxuXFx0PC9maWVsZHM+XFxuPC9mb3JtLXRlbXBsYXRlPicpO1xuXG4gICAgcmV0dXJuIHhtbC5qb2luKCcnKTtcbiAgfTtcblxuICBfaGVscGVycy5wcmVwRGF0YSA9IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmIChmb3JtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBidWlsZCBkYXRhIG9iamVjdFxuICAgICAgdXRpbHMuZm9yRWFjaChmb3JtLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGluZGV4LCBmaWVsZCkge1xuICAgICAgICBsZXQgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgaWYgKCEoJGZpZWxkLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICAgIGxldCBmaWVsZERhdGEgPSBfaGVscGVycy5nZXRUeXBlcygkZmllbGQpO1xuICAgICAgICAgIGxldCByb2xlVmFscyA9ICQoJy5yb2xlcy1maWVsZDpjaGVja2VkJywgZmllbGQpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KS5nZXQoKTtcblxuICAgICAgICAgICQoJ1tjbGFzcyo9XCJmbGQtXCJdJywgZmllbGQpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcztcbiAgICAgICAgICAgIGxldCBuYW1lID0gdXRpbHMuY2FtZWxDYXNlKGF0dHIubmFtZSk7XG4gICAgICAgICAgICBmaWVsZERhdGFbbmFtZV0gPSBhdHRyLnR5cGUgPT09ICdjaGVja2JveCcgPyBhdHRyLmNoZWNrZWQgOiBhdHRyLnZhbHVlO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHJvbGVWYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnJvbGUgPSByb2xlVmFscy5qb2luKCcsJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGREYXRhLmNsYXNzTmFtZSA9IGZpZWxkRGF0YS5jbGFzc05hbWUgfHwgZmllbGREYXRhLmNsYXNzO1xuXG4gICAgICAgICAgbGV0IG1hdGNoID0gLyg/Ol58XFxzKWJ0bi0oLio/KSg/Olxcc3wkKS9nLmV4ZWMoZmllbGREYXRhLmNsYXNzTmFtZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBmaWVsZERhdGEuc3R5bGUgPSBtYXRjaFsxXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZERhdGEgPSB1dGlscy50cmltT2JqKGZpZWxkRGF0YSk7XG4gICAgICAgICAgZmllbGREYXRhID0gdXRpbHMuZXNjYXBlQXR0cnMoZmllbGREYXRhKTtcblxuICAgICAgICAgIGxldCBtdWx0aXBsZUZpZWxkID0gZmllbGREYXRhXG4gICAgICAgICAgLnR5cGUubWF0Y2goLyhzZWxlY3R8Y2hlY2tib3gtZ3JvdXB8cmFkaW8tZ3JvdXApLyk7XG5cbiAgICAgICAgICBpZiAobXVsdGlwbGVGaWVsZCkge1xuICAgICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IF9oZWxwZXJzLmZpZWxkT3B0aW9uRGF0YSgkZmllbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvcm1EYXRhLnB1c2goZmllbGREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIF9oZWxwZXJzLmpzb25TYXZlID0gZm9ybSA9PlxuICAgIHdpbmRvdy5KU09OLnN0cmluZ2lmeShfaGVscGVycy5wcmVwRGF0YShmb3JtKSwgbnVsbCwgJ1xcdCcpO1xuXG4gIF9oZWxwZXJzLmdldERhdGEgPSBmb3JtRGF0YSA9PiB7XG4gICAgbGV0IGRhdGEgPSBmb3JtRGF0YSB8fCBvcHRzLmZvcm1EYXRhO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHNldERhdGEgPSB7XG4gICAgICB4bWw6IGZvcm1EYXRhID0+IHV0aWxzLnBhcnNlWE1MKGZvcm1EYXRhKSxcbiAgICAgIGpzb246IGZvcm1EYXRhID0+IHdpbmRvdy5KU09OLnBhcnNlKGZvcm1EYXRhKVxuICAgIH07XG5cbiAgICBmb3JtQnVpbGRlci5mb3JtRGF0YSA9IHNldERhdGFbb3B0cy5kYXRhVHlwZV0oZGF0YSkgfHwgW107XG5cbiAgICByZXR1cm4gZm9ybUJ1aWxkZXIuZm9ybURhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhdmVzIGFuZCByZXR1cm5zIGZvcm1EYXRhXG4gICAqIEByZXR1cm4ge1hNTHxKU09OfSBmb3JtRGF0YVxuICAgKi9cbiAgX2hlbHBlcnMuc2F2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuXG4gICAgbGV0IGRvU2F2ZSA9IHtcbiAgICAgIHhtbDogX2hlbHBlcnMueG1sU2F2ZSxcbiAgICAgIGpzb246IF9oZWxwZXJzLmpzb25TYXZlXG4gICAgfTtcblxuICAgIC8vIHNhdmUgYWN0aW9uIGZvciBjdXJyZW50IGBkYXRhVHlwZWBcbiAgICBmb3JtQnVpbGRlci5mb3JtRGF0YSA9IGRvU2F2ZVtvcHRzLmRhdGFUeXBlXShmb3JtKTtcblxuICAgIC8vIHRyaWdnZXIgZm9ybVNhdmVkIGV2ZW50XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmb3JtQnVpbGRlci5ldmVudHMuZm9ybVNhdmVkKTtcbiAgICByZXR1cm4gZm9ybUJ1aWxkZXIuZm9ybURhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIGluY3JlbWVudHMgdGhlIGZpZWxkIGlkcyB3aXRoIHN1cHBvcnQgZm9yIG11bHRpcGxlIGVkaXRvcnNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBmaWVsZCBJRFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgIGluY3JlbWVudGVkIGZpZWxkIElEXG4gICAqL1xuICBfaGVscGVycy5pbmNyZW1lbnRJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgbGV0IHNwbGl0ID0gaWQubGFzdEluZGV4T2YoJy0nKTtcbiAgICBsZXQgbmV3RmllbGROdW1iZXIgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoc3BsaXQgKyAxKSkgKyAxO1xuICAgIGxldCBiYXNlU3RyaW5nID0gaWQuc3Vic3RyaW5nKDAsIHNwbGl0KTtcblxuICAgIHJldHVybiBgJHtiYXNlU3RyaW5nfS0ke25ld0ZpZWxkTnVtYmVyfWA7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbGxlY3QgZmllbGQgYXR0cmlidXRlIHZhbHVlcyBhbmQgY2FsbCBmaWVsZFByZXZpZXcgdG8gZ2VuZXJhdGUgcHJldmlld1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkIERPTSBlbGVtZW50XG4gICAqL1xuICBfaGVscGVycy51cGRhdGVQcmV2aWV3ID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZENsYXNzID0gZmllbGQuYXR0cignY2xhc3MnKTtcbiAgICBpZiAoZmllbGRDbGFzcy5pbmRleE9mKCd1aS1zb3J0YWJsZS1oYW5kbGUnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmllbGRUeXBlID0gJChmaWVsZCkuYXR0cigndHlwZScpO1xuICAgIGxldCAkcHJldkhvbGRlciA9ICQoJy5wcmV2LWhvbGRlcicsIGZpZWxkKTtcbiAgICBsZXQgcHJldmlld0RhdGEgPSB7XG4gICAgICB0eXBlOiBmaWVsZFR5cGVcbiAgICB9O1xuICAgIGxldCBwcmV2aWV3O1xuXG4gICAgJCgnW2NsYXNzKj1cImZsZC1cIl0nLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCBuYW1lID0gdXRpbHMuY2FtZWxDYXNlKHRoaXMubmFtZSk7XG4gICAgICBwcmV2aWV3RGF0YVtuYW1lXSA9IHRoaXMudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRoaXMuY2hlY2tlZCA6IHRoaXMudmFsdWU7XG4gICAgfSk7XG5cbiAgICBsZXQgc3R5bGUgPSAkKCcuYnRuLXN0eWxlJywgZmllbGQpLnZhbCgpO1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgcHJldmlld0RhdGEuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGRUeXBlLm1hdGNoKC8oc2VsZWN0fGNoZWNrYm94LWdyb3VwfHJhZGlvLWdyb3VwKS8pKSB7XG4gICAgICBwcmV2aWV3RGF0YS52YWx1ZXMgPSBbXTtcbiAgICAgIHByZXZpZXdEYXRhLm11bHRpcGxlID0gJCgnW25hbWU9XCJtdWx0aXBsZVwiXScsIGZpZWxkKS5pcygnOmNoZWNrZWQnKTtcblxuICAgICAgJCgnLnNvcnRhYmxlLW9wdGlvbnMgbGknLCBmaWVsZCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSAkKCcub3B0aW9uLXNlbGVjdGVkJywgdGhpcykuaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICQoJy5vcHRpb24tdmFsdWUnLCB0aGlzKS52YWwoKTtcbiAgICAgICAgb3B0aW9uLmxhYmVsID0gJCgnLm9wdGlvbi1sYWJlbCcsIHRoaXMpLnZhbCgpO1xuICAgICAgICBwcmV2aWV3RGF0YS52YWx1ZXMucHVzaChvcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJldmlld0RhdGEgPSB1dGlscy50cmltT2JqKHByZXZpZXdEYXRhKTtcblxuICAgIHByZXZpZXdEYXRhLmNsYXNzTmFtZSA9IF9oZWxwZXJzLmNsYXNzTmFtZXMoZmllbGQsIHByZXZpZXdEYXRhKTtcbiAgICAkKCcuZmxkLWNsYXNzTmFtZScsIGZpZWxkKS52YWwocHJldmlld0RhdGEuY2xhc3NOYW1lKTtcblxuICAgIGZpZWxkLmRhdGEoJ2ZpZWxkRGF0YScsIHByZXZpZXdEYXRhKTtcbiAgICBwcmV2aWV3ID0gdXRpbHMuZmllbGRSZW5kZXIocHJldmlld0RhdGEsIG9wdHMsIHRydWUpO1xuXG4gICAgJHByZXZIb2xkZXIuaHRtbChwcmV2aWV3KTtcblxuICAgICQoJ2lucHV0W3RvZ2dsZV0nLCAkcHJldkhvbGRlcikua2NUb2dnbGUoKTtcbiAgfTtcblxuICBfaGVscGVycy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQgPSAyNTAsIGltbWVkaWF0ZSA9IGZhbHNlKSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY3VzdG9tIHRvb2x0aXAgZm9yIGRpc2FibGVkIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBmaWVsZFxuICAgKi9cbiAgX2hlbHBlcnMuZGlzYWJsZWRUVCA9IHtcbiAgICBjbGFzc05hbWU6ICdmcm1iLXR0JyxcbiAgICBhZGQ6IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICBsZXQgdGl0bGUgPSBvcHRzLm1lc3NhZ2VzLmZpZWxkTm9uRWRpdGFibGU7XG5cbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBsZXQgdHQgPSB1dGlscy5tYXJrdXAoJ3AnLCB0aXRsZSwge2NsYXNzTmFtZTogX2hlbHBlcnMuZGlzYWJsZWRUVC5jbGFzc05hbWV9KTtcbiAgICAgICAgZmllbGQuYXBwZW5kKHR0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICQoJy5mcm1iLXR0JywgZmllbGQpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfaGVscGVycy5jbGFzc05hbWVzID0gZnVuY3Rpb24oZmllbGQsIHByZXZpZXdEYXRhKSB7XG4gICAgbGV0IGk7XG4gICAgbGV0IHR5cGUgPSBwcmV2aWV3RGF0YS50eXBlO1xuICAgIGxldCBzdHlsZSA9IHByZXZpZXdEYXRhLnN0eWxlO1xuICAgIGxldCBjbGFzc05hbWUgPSBmaWVsZFswXS5xdWVyeVNlbGVjdG9yKCcuZmxkLWNsYXNzTmFtZScpLnZhbHVlO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgbGV0IHR5cGVzID0ge1xuICAgICAgYnV0dG9uOiAnYnRuJyxcbiAgICAgIHN1Ym1pdDogJ2J0bidcbiAgICB9O1xuXG4gICAgbGV0IHByaW1hcnlUeXBlID0gdHlwZXNbdHlwZV07XG5cbiAgICBpZiAocHJpbWFyeVR5cGUpIHtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYCg/Ol58XFxzKSR7cHJpbWFyeVR5cGV9LSguKj8pKD86XFxzfCQpK2AsICdnJyk7XG4gICAgICAgICAgbGV0IG1hdGNoID0gY2xhc3Nlc1tpXS5tYXRjaChyZSk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlICsgJy0nICsgc3R5bGUpO1xuICAgICAgfVxuICAgICAgY2xhc3Nlcy5wdXNoKHByaW1hcnlUeXBlKTtcbiAgICB9XG5cbiAgICAvLyByZXZlcnNlIHRoZSBhcnJheSB0byBwdXQgY3VzdG9tIGNsYXNzZXMgYXQgZW5kLFxuICAgIC8vIHJlbW92ZSBhbnkgZHVwbGljYXRlcywgY29udmVydCB0byBzdHJpbmcsIHJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcmV0dXJuIHV0aWxzLnVuaXF1ZShjbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW5kIG9wZW4gZGlhbG9nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3ZlcmxheSBFeGlzdGluZyBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRpYWxvZyAgRXhpc3RpbmcgZGlhbG9nXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUNvbmZpcm0gPSBmdW5jdGlvbihvdmVybGF5LCBkaWFsb2cpIHtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWJ1aWxkZXItb3ZlcmxheScpWzBdO1xuICAgIH1cbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1idWlsZGVyLWRpYWxvZycpWzBdO1xuICAgIH1cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGZvcm1CdWlsZGVyLmV2ZW50cy5tb2RhbENsb3NlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxheW91dCBkYXRhIGJhc2VkIG9uIGNvbnRyb2xQb3NpdGlvbiBvcHRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb250cm9sUG9zaXRpb24gJ2xlZnQnIG9yICdyaWdodCdcbiAgICogQHJldHVybiB7T2JqZWN0fSBsYXlvdXQgb2JqZWN0XG4gICAqL1xuICBfaGVscGVycy5lZGl0b3JMYXlvdXQgPSBmdW5jdGlvbihjb250cm9sUG9zaXRpb24pIHtcbiAgICBsZXQgbGF5b3V0TWFwID0ge1xuICAgICAgbGVmdDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtcmlnaHQnLFxuICAgICAgICBjb250cm9sczogJ3B1bGwtbGVmdCdcbiAgICAgIH0sXG4gICAgICByaWdodDoge1xuICAgICAgICBzdGFnZTogJ3B1bGwtbGVmdCcsXG4gICAgICAgIGNvbnRyb2xzOiAncHVsbC1yaWdodCdcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGxheW91dE1hcFtjb250cm9sUG9zaXRpb25dID8gbGF5b3V0TWFwW2NvbnRyb2xQb3NpdGlvbl0gOiAnJztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBvdmVybGF5IHRvIHRoZSBwYWdlLiBVc2VkIGZvciBtb2RhbHMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gRE9NIE9iamVjdFxuICAgKi9cbiAgX2hlbHBlcnMuc2hvd092ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgb3ZlcmxheSA9IHV0aWxzLm1hcmt1cCgnZGl2JywgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiAnZm9ybS1idWlsZGVyLW92ZXJsYXknXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIG92ZXJsYXkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgX2hlbHBlcnMuY2xvc2VDb25maXJtKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfTtcblxuICAvKipcbiAgICogQ3VzdG9tIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbWVzc2FnZSAgIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7RnVuY30gIHllc0FjdGlvbiBjYWxsYmFjayB0byBmaXJlIGlmIHRoZXkgY29uZmlybVxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgbG9jYXRpb24gdG8gcHV0IHRoZSBkaWFsb2dcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgY2xhc3NOYW1lIEN1c3RvbSBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgZGlhbG9nXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICBSZWZlcmVuY2UgdG8gdGhlIG1vZGFsXG4gICAqL1xuICBfaGVscGVycy5jb25maXJtID0gKG1lc3NhZ2UsIHllc0FjdGlvbiwgY29vcmRzID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgY29uc3QgbSA9IHV0aWxzLm1hcmt1cDtcbiAgICBsZXQgb3ZlcmxheSA9IF9oZWxwZXJzLnNob3dPdmVybGF5KCk7XG4gICAgbGV0IHllcyA9IG0oJ2J1dHRvbicsIG9wdHMubWVzc2FnZXMueWVzLCB7XG4gICAgICBjbGFzc05hbWU6ICd5ZXMgYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSdcbiAgICB9KTtcbiAgICBsZXQgbm8gPSBtKCdidXR0b24nLCBvcHRzLm1lc3NhZ2VzLm5vLCB7XG4gICAgICBjbGFzc05hbWU6ICdubyBidG4gYnRuLWRhbmdlciBidG4tc20nXG4gICAgfSk7XG5cbiAgICBuby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBfaGVscGVycy5jbG9zZUNvbmZpcm0ob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIHllcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB5ZXNBY3Rpb24oKTtcbiAgICAgIF9oZWxwZXJzLmNsb3NlQ29uZmlybShvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgbGV0IGJ0bldyYXAgPSBtKCdkaXYnLCBbbm8sIHllc10sIHtjbGFzc05hbWU6ICdidXR0b24td3JhcCd9KTtcblxuICAgIGNsYXNzTmFtZSA9ICdmb3JtLWJ1aWxkZXItZGlhbG9nICcgKyBjbGFzc05hbWU7XG5cbiAgICBsZXQgbWluaU1vZGFsID0gbSgnZGl2JywgW21lc3NhZ2UsIGJ0bldyYXBdLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9KTtcbiAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgY29vcmRzID0ge1xuICAgICAgICBwYWdlWDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSAvIDIsXG4gICAgICAgIHBhZ2VZOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgLyAyXG4gICAgICB9O1xuICAgICAgbWluaU1vZGFsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWluaU1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcbiAgICB9XG5cbiAgICBtaW5pTW9kYWwuc3R5bGUubGVmdCA9IGNvb3Jkcy5wYWdlWCArICdweCc7XG4gICAgbWluaU1vZGFsLnN0eWxlLnRvcCA9IGNvb3Jkcy5wYWdlWSArICdweCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1pbmlNb2RhbCk7XG5cbiAgICB5ZXMuZm9jdXMoKTtcbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQb3B1cCBkaWFsb2cgdGhlIGRvZXMgbm90IHJlcXVpcmUgY29uZmlybWF0aW9uLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8RE9NfEFycmF5fSAgY29udGVudFxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBjb29yZHMgICAgZmFsc2UgaWYgbm8gY29vcmRzIGFyZSBwcm92aWRlZC4gV2l0aG91dCBjb29yZGluYXRlc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGNlbnRlciBzY3JlZW4uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIGNsYXNzTmFtZSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGRpYWxvZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgZG9tXG4gICAqL1xuICBfaGVscGVycy5kaWFsb2cgPSBmdW5jdGlvbihjb250ZW50LCBjb29yZHMgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycpIHtcbiAgICBfaGVscGVycy5zaG93T3ZlcmxheSgpO1xuXG4gICAgY2xhc3NOYW1lID0gJ2Zvcm0tYnVpbGRlci1kaWFsb2cgJyArIGNsYXNzTmFtZTtcblxuICAgIGxldCBtaW5pTW9kYWwgPSB1dGlscy5tYXJrdXAoJ2RpdicsIGNvbnRlbnQsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0pO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHBhZ2VYOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIC8gMixcbiAgICAgICAgcGFnZVk6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSAvIDJcbiAgICAgIH07XG4gICAgICBtaW5pTW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pTW9kYWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xuICAgIH1cblxuICAgIG1pbmlNb2RhbC5zdHlsZS5sZWZ0ID0gY29vcmRzLnBhZ2VYICsgJ3B4JztcbiAgICBtaW5pTW9kYWwuc3R5bGUudG9wID0gY29vcmRzLnBhZ2VZICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWluaU1vZGFsKTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLm1vZGFsT3BlbmVkKTtcblxuICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignZGF0YS1kaWFsb2cnKSAhPT0gLTEpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLnZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluaU1vZGFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBmaWVsZHMgZnJvbSB0aGUgZm9ybVxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlQWxsZmllbGRzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtQnVpbGRlci5mb3JtSUQpO1xuICAgIGxldCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmZvcm0tZmllbGQnKTtcbiAgICBsZXQgJGZpZWxkcyA9ICQoZmllbGRzKTtcbiAgICBsZXQgbWFya0VtcHR5QXJyYXkgPSBbXTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnByZXBlbmQpIHtcbiAgICAgIG1hcmtFbXB0eUFycmF5LnB1c2godHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuYXBwZW5kKSB7XG4gICAgICBtYXJrRW1wdHlBcnJheS5wdXNoKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghbWFya0VtcHR5QXJyYXkuc29tZShlbGVtID0+IGVsZW0gPT09IHRydWUpKSB7XG4gICAgICBmb3JtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgPSBvcHRzLm1lc3NhZ2VzLmdldFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdyZW1vdmluZycpO1xuXG4gICAgbGV0IG91dGVySGVpZ2h0ID0gMDtcbiAgICAkZmllbGRzLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgb3V0ZXJIZWlnaHQgKz0gJCgkZmllbGRzW2ldKS5vdXRlckhlaWdodCgpICsgMztcbiAgICB9KTtcblxuICAgIGZpZWxkc1swXS5zdHlsZS5tYXJnaW5Ub3AgPSAoLW91dGVySGVpZ2h0KSArICdweCc7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkcy5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1CdWlsZGVyLmZvcm1JRCkuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB1c2VyIHJlLW9yZGVycyB0aGUgZWxlbWVudHMgdGhlaXIgb3JkZXIgc2hvdWxkIGJlIHNhdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGNiVUwgb3VyIGxpc3Qgb2YgZWxlbWVudHNcbiAgICovXG4gIF9oZWxwZXJzLnNldEZpZWxkT3JkZXIgPSBmdW5jdGlvbigkY2JVTCkge1xuICAgIGlmICghb3B0cy5zb3J0YWJsZUNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmaWVsZE9yZGVyID0ge307XG4gICAgJGNiVUwuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBmaWVsZE9yZGVyW2luZGV4XSA9ICQoZWxlbWVudCkuZGF0YSgnYXR0cnMnKS50eXBlO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaWVsZE9yZGVyJywgd2luZG93LkpTT04uc3RyaW5naWZ5KGZpZWxkT3JkZXIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdGhlIGNvbnRyb2xzIGlmIHRoZSB1c2VyIGhhcyBwcmV2aW91c2x5IG9yZGVyZWQgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGZybWJGaWVsZHNcbiAgICogQHJldHVybiB7QXJyYXl9IG9yZGVyZWQgZmllbGRzXG4gICAqL1xuICBfaGVscGVycy5vcmRlckZpZWxkcyA9IGZ1bmN0aW9uKGZybWJGaWVsZHMpIHtcbiAgICBsZXQgZmllbGRPcmRlciA9IGZhbHNlO1xuICAgIGxldCBuZXdPcmRlckZpZWxkcyA9IFtdO1xuXG4gICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgaWYgKG9wdHMuc29ydGFibGVDb250cm9scykge1xuICAgICAgICBmaWVsZE9yZGVyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZpZWxkT3JkZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWVsZE9yZGVyJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZE9yZGVyKSB7XG4gICAgICBsZXQgY29udHJvbE9yZGVyID0gb3B0cy5jb250cm9sT3JkZXIuY29uY2F0KGZybWJGaWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgIGZpZWxkLmF0dHJzLnR5cGUpKTtcbiAgICAgIGZpZWxkT3JkZXIgPSB1dGlscy51bmlxdWUoY29udHJvbE9yZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRPcmRlciA9IHdpbmRvdy5KU09OLnBhcnNlKGZpZWxkT3JkZXIpO1xuICAgICAgZmllbGRPcmRlciA9IE9iamVjdC5rZXlzKGZpZWxkT3JkZXIpLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZE9yZGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmaWVsZE9yZGVyLmZvckVhY2goKGZpZWxkVHlwZSkgPT4ge1xuICAgICAgbGV0IGZpZWxkID0gZnJtYkZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmF0dHJzLnR5cGUgPT09IGZpZWxkVHlwZTtcbiAgICAgIH0pWzBdO1xuICAgICAgbmV3T3JkZXJGaWVsZHMucHVzaChmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T3JkZXJGaWVsZHMuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSBmaWVsZHMgYmVpbmcgZWRpdGluZ1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0YWdlXG4gICAqL1xuICBfaGVscGVycy5jbG9zZUFsbEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gJCgnPiBsaS5lZGl0aW5nJywgZm9ybUJ1aWxkZXIuc3RhZ2UpO1xuICAgIGNvbnN0IHRvZ2dsZUJ0bnMgPSAkKCcudG9nZ2xlLWZvcm0nLCBmb3JtQnVpbGRlci5zdGFnZSk7XG4gICAgY29uc3QgZWRpdFBhbmVscyA9ICQoJy5mcm0taG9sZGVyJywgZmllbGRzKTtcblxuICAgIHRvZ2dsZUJ0bnMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICBmaWVsZHMucmVtb3ZlQ2xhc3MoJ2VkaXRpbmcnKTtcbiAgICAkKCcucHJldi1ob2xkZXInLCBmaWVsZHMpLnNob3coKTtcbiAgICBlZGl0UGFuZWxzLmhpZGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWRpdCBtb2RlIGZvciB0aGUgZ2l2ZW4gZmllbGRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBmaWVsZElkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IGFuaW1hdGVcbiAgICovXG4gIF9oZWxwZXJzLnRvZ2dsZUVkaXQgPSBmdW5jdGlvbihmaWVsZElkLCBhbmltYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gJCgnLnRvZ2dsZS1mb3JtJywgZmllbGQpO1xuICAgIGNvbnN0IGVkaXRQYW5lbCA9ICQoJy5mcm0taG9sZGVyJywgZmllbGQpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcbiAgICB0b2dnbGVCdG4udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnNsaWRlVG9nZ2xlKDI1MCk7XG4gICAgICBlZGl0UGFuZWwuc2xpZGVUb2dnbGUoMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLnByZXYtaG9sZGVyJywgZmllbGQpLnRvZ2dsZSgpO1xuICAgICAgZWRpdFBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udHJvbHMgZm9sbG93IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBlZGl0b3JcbiAgICovXG4gIF9oZWxwZXJzLnN0aWNreUNvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0ICRjYldyYXAgPSAkKGZvcm1CdWlsZGVyLmNvbnRyb2xzKS5wYXJlbnQoKTtcbiAgICBjb25zdCAkc3RhZ2VXcmFwID0gJChmb3JtQnVpbGRlci5zdGFnZSkucGFyZW50KCk7XG4gICAgY29uc3QgY2JXaWR0aCA9ICRjYldyYXAud2lkdGgoKTtcbiAgICBjb25zdCBjYlBvc2l0aW9uID0gZm9ybUJ1aWxkZXIuY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQoZXZ0LnRhcmdldCkuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPiAkc3RhZ2VXcmFwLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBsZXQgY2JTdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB3aWR0aDogY2JXaWR0aCxcbiAgICAgICAgICB0b3A6ICc1cHgnLFxuICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgbGVmdDogY2JQb3NpdGlvbi5sZWZ0XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNiT2Zmc2V0ID0gJGNiV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IHN0YWdlT2Zmc2V0ID0gJHN0YWdlV3JhcC5vZmZzZXQoKTtcbiAgICAgICAgbGV0IGNiQm90dG9tID0gY2JPZmZzZXQudG9wICsgJGNiV3JhcC5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHN0YWdlQm90dG9tID0gc3RhZ2VPZmZzZXQudG9wICsgJHN0YWdlV3JhcC5oZWlnaHQoKTtcblxuICAgICAgICBpZiAoY2JCb3R0b20gPiBzdGFnZUJvdHRvbSAmJiAoY2JPZmZzZXQudG9wICE9PSBzdGFnZU9mZnNldC50b3ApKSB7XG4gICAgICAgICAgJGNiV3JhcC5jc3Moe1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgbGVmdDogJ2F1dG8nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2JCb3R0b20gPCBzdGFnZUJvdHRvbSB8fCAoY2JCb3R0b20gPT09IHN0YWdlQm90dG9tICYmIGNiT2Zmc2V0LnRvcCA+IHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAkY2JXcmFwLmNzcyhjYlN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybUJ1aWxkZXIuY29udHJvbHMucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBkaWFsb2cgd2l0aCB0aGUgZm9ybSdzIGRhdGFcbiAgICovXG4gIF9oZWxwZXJzLnNob3dEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IG0gPSB1dGlscy5tYXJrdXA7XG4gICAgY29uc3QgZGF0YSA9IHV0aWxzLmVzY2FwZUh0bWwoZm9ybUJ1aWxkZXIuZm9ybURhdGEpO1xuICAgIGNvbnN0IGNvZGUgPSBtKCdjb2RlJywgZGF0YSwge2NsYXNzTmFtZTogYGZvcm1EYXRhLSR7b3B0cy5kYXRhVHlwZX1gfSk7XG5cbiAgICBfaGVscGVycy5kaWFsb2cobSgncHJlJywgY29kZSksIG51bGwsICdkYXRhLWRpYWxvZycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBmaWVsZCBmcm9tIHRoZSBzdGFnZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBmaWVsZElEIElEIG9mIHRoZSBmaWVsZCB0byBiZSByZW1vdmVkXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IGZpZWxkUmVtb3ZlZCByZXR1cm5zIHRydWUgaWYgZmllbGQgaXMgcmVtb3ZlZFxuICAgKi9cbiAgX2hlbHBlcnMucmVtb3ZlRmllbGQgPSAoZmllbGRJRCkgPT4ge1xuICAgIGxldCBmaWVsZFJlbW92ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUJ1aWxkZXIuZm9ybUlEKTtcbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0tZmllbGQnKTtcblxuICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBmaWVsZHMgdG8gcmVtb3ZlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZElEKSB7XG4gICAgICBsZXQgYXZhaWxhYmxlSWRzID0gW10uc2xpY2UuY2FsbChmaWVsZHMpLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmlkO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZpZWxkSUQgcmVxdWlyZWQgdG8gdXNlIGByZW1vdmVGaWVsZGAgYWN0aW9uLicpO1xuICAgICAgY29uc29sZS53YXJuKCdBdmFpbGFibGUgSURzOiAnICsgYXZhaWxhYmxlSWRzLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJRCk7XG4gICAgY29uc3QgJGZpZWxkID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElEKSk7XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgY29uc29sZS53YXJuKCdGaWVsZCBub3QgZm91bmQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAkZmllbGQuc2xpZGVVcCgyNTAsIGZ1bmN0aW9uKCkge1xuICAgICAgJGZpZWxkLnJlbW92ZUNsYXNzKCdkZWxldGluZycpO1xuICAgICAgJGZpZWxkLnJlbW92ZSgpO1xuICAgICAgZmllbGRSZW1vdmVkID0gdHJ1ZTtcbiAgICAgIF9oZWxwZXJzLnNhdmUoKTtcbiAgICAgIGlmICghZm9ybS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgc3RhZ2VXcmFwID0gZm9ybS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBzdGFnZVdyYXAuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgc3RhZ2VXcmFwLmRhdGFzZXQuY29udGVudCA9IG9wdHMubWVzc2FnZXMuZ2V0U3RhcnRlZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZm9ybUJ1aWxkZXIuZXZlbnRzLmZpZWxkUmVtb3ZlZCk7XG4gICAgcmV0dXJuIGZpZWxkUmVtb3ZlZDtcbiAgfTtcblxuICByZXR1cm4gX2hlbHBlcnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcbiIsImNvbnN0IGtjVG9nZ2xlID0gKCkgPT4ge1xuICBjb25zdCBUb2dnbGUgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICB0aGVtZTogJ2ZyZXNoJyxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG9mZjogJ09mZicsXG4gICAgICAgIG9uOiAnT24nXG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBvcHRzID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIGxldCAka2NUb2dnbGUgPSAkKCc8ZGl2IGNsYXNzPVwia2MtdG9nZ2xlXCIvPicpXG4gICAgICAgIC5pbnNlcnRBZnRlcihlbGVtZW50KVxuICAgICAgICAuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgJGtjVG9nZ2xlLnRvZ2dsZUNsYXNzKCdvbicsIGVsZW1lbnQuaXMoJzpjaGVja2VkJykpO1xuXG4gICAgbGV0IGtjdE9uID0gYDxkaXYgY2xhc3M9XCJrY3Qtb25cIj4ke29wdHMubWVzc2FnZXMub259PC9kaXY+YDtcbiAgICBsZXQga2N0T2ZmID0gYDxkaXYgY2xhc3M9XCJrY3Qtb2ZmXCI+JHtvcHRzLm1lc3NhZ2VzLm9mZn08L2Rpdj5gO1xuICAgIGxldCBrY3RIYW5kbGUgPSAnPGRpdiBjbGFzcz1cImtjdC1oYW5kbGVcIj48L2Rpdj4nO1xuICAgIGxldCBrY3RJbm5lciA9IGA8ZGl2IGNsYXNzPVwia2N0LWlubmVyXCI+JHtrY3RPbn0ke2tjdEhhbmRsZX0ke2tjdE9mZn08L2Rpdj5gO1xuXG4gICAgJGtjVG9nZ2xlLmFwcGVuZChrY3RJbm5lcik7XG5cbiAgICAka2NUb2dnbGUuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBlbGVtZW50LmF0dHIoJ2NoZWNrZWQnLCAhZWxlbWVudC5hdHRyKCdjaGVja2VkJykpO1xuICAgICAgJGtjVG9nZ2xlLnRvZ2dsZUNsYXNzKCdvbicpO1xuICAgIH0pO1xuICB9O1xuXG4gIGpRdWVyeS5mbi5rY1RvZ2dsZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCB0b2dnbGUgPSB0aGlzO1xuICAgIHJldHVybiB0b2dnbGUuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICBsZXQgZWxlbWVudCA9ICQodG9nZ2xlW2ldKTtcbiAgICAgIGlmIChlbGVtZW50LmRhdGEoJ2tjVG9nZ2xlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGtjVG9nZ2xlID0gbmV3IFRvZ2dsZShlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIGVsZW1lbnQuZGF0YSgna2NUb2dnbGUnLCBrY1RvZ2dsZSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtjVG9nZ2xlKCk7XG4iLCIvKipcbiAqIFBvbHlmaWxscyBmb3Igb2xkZXIgYnJvd3NlcnMgYW5kIGFkZGVkIGZ1bmN0aW9uYWxpdHlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHBvbHlmaWxscygpIHtcbiAgLy8gRWxlbWVudC5yZW1vdmUoKSBwb2x5ZmlsbFxuICBpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBFdmVudCBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIEV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LkV2ZW50ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoZXZ0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgLy8gT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxscygpO1xuIiwiLyoqXG4gKiBDcm9zcyBmaWxlIHV0aWxpdGllcyBmb3Igd29ya2luZyB3aXRoIGFycmF5cyxcbiAqIHNvcnRpbmcgYW5kIG90aGVyIGZ1biBzdHVmZlxuICogQHJldHVybiB7T2JqZWN0fSBmYlV0aWxzXG4gKi9cbi8vIGZ1bmN0aW9uIHV0aWxzKCkge1xuICBjb25zdCBmYlV0aWxzID0ge307XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIGZiVXRpbHMuaW5BcnJheSA9IGZ1bmN0aW9uKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIE9iamVjdCB0cmltbWVkIG9mIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgeG1sUmVtb3ZlID0gW1xuICAgICAgbnVsbCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgICcnLFxuICAgICAgZmFsc2UsXG4gICAgICAnZmFsc2UnXG4gICAgXTtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoZmJVdGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmYlV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBsZXQgaW52YWxpZCA9IFtcbiAgICAgICd2YWx1ZXMnLFxuICAgICAgJ2VuYWJsZU90aGVyJyxcbiAgICAgICdvdGhlcicsXG4gICAgICAnbGFiZWwnLFxuICAgICAgLy8gJ3N0eWxlJyxcbiAgICAgICdzdWJ0eXBlJ1xuICAgIF07XG4gICAgcmV0dXJuICFmYlV0aWxzLmluQXJyYXkoYXR0ciwgaW52YWxpZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBvYmplY3Qgb2YgYXR0cmlidXRlcyBmb3IgbWFya3VwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiBmYlV0aWxzLnZhbGlkQXR0cihhdHRyKSkge1xuICAgICAgICBhdHRyID0gZmJVdGlscy5zYWZlQXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyLm5hbWUgKyBhdHRyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgYXR0cmlidXRlIHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUobmFtZSk7XG4gICAgbGV0IHZhbFN0cmluZztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIGZiVXRpbHMuc2FmZUF0dHJOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBzYWZlQXR0ciA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgZmJVdGlscy5oeXBoZW5DYXNlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuY2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24obSwgdykge1xuICAgICAgcmV0dXJuIHcudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgbWFya3VwIHdyYXBwZXIgd2hlcmUgbmVlZGVkXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgIHRhZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl8T2JqZWN0fSBjb250ZW50IHdlIHdyYXAgdGhpc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICBhdHRyc1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmYlV0aWxzLm1hcmt1cCA9IGZ1bmN0aW9uKHRhZywgY29udGVudCA9ICcnLCBhdHRycyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlLFxuICAgICAgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICBnZXRDb250ZW50VHlwZSA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY29udGVudCkgPyAnYXJyYXknIDogdHlwZW9mIGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgYXBwZW5kQ29udGVudCA9IHtcbiAgICAgICAgc3RyaW5nOiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgZmllbGQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0OiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBhcnJheTogZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGVudFR5cGUgPSBnZXRDb250ZW50VHlwZShjb250ZW50W2ldKTtcbiAgICAgICAgICAgIGFwcGVuZENvbnRlbnRbY29udGVudFR5cGVdKGNvbnRlbnRbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBsZXQgbmFtZSA9IGZiVXRpbHMuc2FmZUF0dHJOYW1lKGF0dHIpO1xuICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRlbnRUeXBlID0gZ2V0Q29udGVudFR5cGUoY29udGVudCk7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgaHRtbCBlbGVtZW50IGF0dHJpYnV0ZXMgdG8ga2V5L3ZhbHVlIG9iamVjdFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gZXg6IHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZUF0dHJzID0gZnVuY3Rpb24oZWxlbSkge1xuICAgIGxldCBhdHRycyA9IGVsZW0uYXR0cmlidXRlcztcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIGZiVXRpbHMuZm9yRWFjaChhdHRycywgYXR0ciA9PiB7XG4gICAgICBsZXQgYXR0clZhbCA9IGF0dHJzW2F0dHJdLnZhbHVlO1xuICAgICAgaWYgKGF0dHJWYWwubWF0Y2goL2ZhbHNlfHRydWUvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IChhdHRyVmFsID09PSAndHJ1ZScpO1xuICAgICAgfSBlbHNlIGlmIChhdHRyVmFsLm1hdGNoKC91bmRlZmluZWQvZykpIHtcbiAgICAgICAgYXR0clZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJWYWwpIHtcbiAgICAgICAgZGF0YVthdHRyc1thdHRyXS5uYW1lXSA9IGF0dHJWYWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydCBmaWVsZCBvcHRpb25zIHRvIG9wdGlvbkRhdGFcbiAgICogQHBhcmFtICB7T2JqZWN0fSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICBvcHRpb25EYXRhIGFycmF5XG4gICAqL1xuICBmYlV0aWxzLnBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0aW9uJyksXG4gICAgICBvcHRpb25EYXRhID0ge30sXG4gICAgICBkYXRhID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb25EYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKG9wdGlvbnNbaV0pO1xuICAgICAgICBvcHRpb25EYXRhLmxhYmVsID0gb3B0aW9uc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgZGF0YS5wdXNoKG9wdGlvbkRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBYTUwgZm9ybURhdGFcbiAgICogQHBhcmFtICB7U3RyaW5nfSB4bWxTdHJpbmdcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgZm9ybURhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VYTUwgPSBmdW5jdGlvbih4bWxTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgIGxldCB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgJ3RleHQveG1sJyksXG4gICAgICBmb3JtRGF0YSA9IFtdO1xuXG4gICAgaWYgKHhtbCkge1xuICAgICAgbGV0IGZpZWxkcyA9IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmllbGQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWVsZERhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMoZmllbGRzW2ldKTtcblxuICAgICAgICBpZiAoZmllbGRzW2ldLmNoaWxkcmVuICYmIGZpZWxkc1tpXS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBmaWVsZERhdGEudmFsdWVzID0gZmJVdGlscy5wYXJzZU9wdGlvbnMoZmllbGRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1EYXRhLnB1c2goZmllbGREYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBtYXJrdXAgc28gaXQgY2FuIGJlIGRpc3BsYXllZCByYXRoZXIgdGhhbiByZW5kZXJlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgbWFya3VwXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBlc2NhcGVkIGh0bWxcbiAgICovXG4gIGZiVXRpbHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhbiBhdHRyaWJ1dGVcbiAgZmJVdGlscy5lc2NhcGVBdHRyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgbGV0IG1hdGNoID0ge1xuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYWcgPSB0YWcgPT4gbWF0Y2hbdGFnXSB8fCB0YWc7XG5cbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSA/IHN0ci5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2VUYWcpIDogc3RyO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhdHRyaWJ1dGVzXG4gIGZiVXRpbHMuZXNjYXBlQXR0cnMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBhdHRyc1thdHRyXSA9IGZiVXRpbHMuZXNjYXBlQXR0cihhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8vIGZvckVhY2ggdGhhdCBjYW4gYmUgdXNlZCBvbiBub2RlTGlzdFxuICBmYlV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pOyAvLyBwYXNzZXMgYmFjayBzdHVmZiB3ZSBuZWVkXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJBcmcgYXJyYXkgd2l0aCBwb3NzaWJsZSBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgYXJyYXkgd2l0aCBvbmx5IHVuaXF1ZSB2YWx1ZXNcbiAgICovXG4gIGZiVXRpbHMudW5pcXVlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChlbGVtLCBwb3MsIGFycikgPT4ge1xuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsZW0pID09PSBwb3M7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHByZXZpZXcgbWFya3VwXG4gICAqIEBwYXJhbSAge09iamVjdH0gIGZpZWxkRGF0YVxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvcHRzXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IHByZXZpZXdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgcHJldmlldyBtYXJrdXAgZm9yIGZpZWxkXG4gICAqL1xuICBmYlV0aWxzLmZpZWxkUmVuZGVyID0gZnVuY3Rpb24oZmllbGREYXRhLCBvcHRzLCBwcmV2aWV3ID0gZmFsc2UpIHtcbiAgICAgIGxldCBmaWVsZE1hcmt1cCA9ICcnO1xuICAgICAgbGV0IGZpZWxkTGFiZWwgPSAnJztcbiAgICAgIGxldCBvcHRpb25zTWFya3VwID0gJyc7XG4gICAgICBsZXQgZmllbGRMYWJlbFRleHQgPSBmaWVsZERhdGEubGFiZWwgfHwgJyc7XG4gICAgICBsZXQgZmllbGREZXNjID0gZmllbGREYXRhLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgICAgbGV0IGZpZWxkUmVxdWlyZWQgPSAnJztcbiAgICAgIGxldCBmaWVsZE9wdGlvbnMgPSBmaWVsZERhdGEudmFsdWVzO1xuXG4gICAgICBmaWVsZERhdGEubmFtZSA9IHByZXZpZXcgPyBmaWVsZERhdGEubmFtZSArICctcHJldmlldycgOiBmaWVsZERhdGEubmFtZTtcbiAgICAgIGZpZWxkRGF0YS5pZCA9IGZpZWxkRGF0YS5uYW1lO1xuICAgICAgaWYgKGZpZWxkRGF0YS5tdWx0aXBsZSkge1xuICAgICAgICBmaWVsZERhdGEubmFtZSA9IGZpZWxkRGF0YS5uYW1lICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEuc3VidHlwZSB8fCBmaWVsZERhdGEudHlwZTtcblxuICAgICAgaWYgKGZpZWxkRGF0YS5yZXF1aXJlZCkge1xuICAgICAgICBmaWVsZERhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgICBmaWVsZERhdGFbJ2FyaWEtcmVxdWlyZWQnXSA9ICd0cnVlJztcbiAgICAgICAgZmllbGRSZXF1aXJlZCA9ICc8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj4nO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGREYXRhLnR5cGUgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIGlmIChmaWVsZERlc2MpIHtcbiAgICAgICAgICBmaWVsZERlc2MgPSBgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWVsZW1lbnRcIiB0b29sdGlwPVwiJHtmaWVsZERlc2N9XCI+Pzwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkTGFiZWwgPSBgPGxhYmVsIGZvcj1cIiR7ZmllbGREYXRhLmlkfVwiIGNsYXNzPVwiZmItJHtmaWVsZERhdGEudHlwZX0tbGFiZWxcIj4ke2ZpZWxkTGFiZWxUZXh0fSAke2ZpZWxkUmVxdWlyZWR9ICR7ZmllbGREZXNjfTwvbGFiZWw+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpZWxkTGFiZWxWYWwgPSBmaWVsZERhdGEubGFiZWw7XG5cbiAgICAgIGRlbGV0ZSBmaWVsZERhdGEubGFiZWw7XG4gICAgICBkZWxldGUgZmllbGREYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgICBsZXQgZmllbGREYXRhU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKGZpZWxkRGF0YSk7XG5cbiAgICAgIHN3aXRjaCAoZmllbGREYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjYXNlICdyaWNoLXRleHQnOlxuICAgICAgICAgIGRlbGV0ZSBmaWVsZERhdGEudHlwZTtcbiAgICAgICAgICBsZXQgZmllbGRWYWwgPSBmaWVsZERhdGEudmFsdWUgfHwgJyc7XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfTx0ZXh0YXJlYSAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZFZhbH08L3RleHRhcmVhPmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgbGV0IG9wdGlvbkF0dHJzU3RyaW5nO1xuICAgICAgICAgIGZpZWxkRGF0YS50eXBlID0gZmllbGREYXRhLnR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuXG4gICAgICAgICAgaWYgKGZpZWxkT3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKGZpZWxkRGF0YS5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPiR7ZmllbGREYXRhLnBsYWNlaG9sZGVyfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmICghZmllbGRPcHRpb25zW2ldLnNlbGVjdGVkIHx8IGZpZWxkRGF0YS5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZE9wdGlvbnNbaV0uc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFmaWVsZE9wdGlvbnNbaV0ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBmaWVsZE9wdGlvbnNbaV0ubGFiZWwgPSAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcHRpb25BdHRyc1N0cmluZyA9IGZiVXRpbHMuYXR0clN0cmluZyhmaWVsZE9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgICBvcHRpb25zTWFya3VwICs9IGA8b3B0aW9uICR7b3B0aW9uQXR0cnNTdHJpbmd9PiR7ZmllbGRPcHRpb25zW2ldLmxhYmVsfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfTxzZWxlY3QgJHtmaWVsZERhdGFTdHJpbmd9PiR7b3B0aW9uc01hcmt1cH08L3NlbGVjdD5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGVja2JveC1ncm91cCc6XG4gICAgICAgIGNhc2UgJ3JhZGlvLWdyb3VwJzpcbiAgICAgICAgICBsZXQgb3B0aW9uQXR0cnM7XG4gICAgICAgICAgZmllbGREYXRhLnR5cGUgPSBmaWVsZERhdGEudHlwZS5yZXBsYWNlKCctZ3JvdXAnLCAnJyk7XG5cbiAgICAgICAgICBpZiAoZmllbGREYXRhLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGZpZWxkRGF0YS5uYW1lID0gZmllbGREYXRhLm5hbWUgKyAnW10nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaWVsZE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25BdHRyc1N0cmluZztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHt2YWx1ZTogJycsIGxhYmVsOiAnJ30sIGZpZWxkRGF0YSwgZmllbGRPcHRpb25zW2ldKTtcblxuICAgICAgICAgICAgICBpZiAob3B0aW9uQXR0cnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgb3B0aW9uQXR0cnMuY2hlY2tlZCA9IG51bGw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvcHRpb25BdHRycy5pZCA9IGZpZWxkRGF0YS5pZCArICctJyArIGk7XG4gICAgICAgICAgICAgIG9wdGlvbkF0dHJzU3RyaW5nID0gZmJVdGlscy5hdHRyU3RyaW5nKG9wdGlvbkF0dHJzKTtcbiAgICAgICAgICAgICAgb3B0aW9uc01hcmt1cCArPSBgPGlucHV0ICR7b3B0aW9uQXR0cnNTdHJpbmd9IC8+IDxsYWJlbCBmb3I9XCIke29wdGlvbkF0dHJzLmlkfVwiPiR7b3B0aW9uQXR0cnMubGFiZWx9PC9sYWJlbD48YnI+YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpZWxkRGF0YS5vdGhlcikge1xuICAgICAgICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmllbGREYXRhLmlkICsgJy0nICsgJ290aGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGZpZWxkRGF0YS5jbGFzc05hbWUgKyAnIG90aGVyLW9wdGlvbicsXG4gICAgICAgICAgICAgICAgb25jbGljazogYGZiVXRpbHMub3RoZXJPcHRpb25DQignJHtmaWVsZERhdGEuaWR9LW90aGVyJylgXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgb3B0aW9uQXR0cnNTdHJpbmcgPSBmYlV0aWxzLmF0dHJTdHJpbmcoT2JqZWN0LmFzc2lnbih7fSwgZmllbGREYXRhLCBvdGhlck9wdGlvbkF0dHJzKSk7XG5cbiAgICAgICAgICAgICAgb3B0aW9uc01hcmt1cCArPSBgPGlucHV0ICR7b3B0aW9uQXR0cnNTdHJpbmd9IC8+IDxsYWJlbCBmb3I9XCIke290aGVyT3B0aW9uQXR0cnMuaWR9XCI+JHtvcHRzLm1lc3NhZ2VzLm90aGVyfTwvbGFiZWw+IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCIke2ZpZWxkRGF0YS5uYW1lfVwiIGlkPVwiJHtvdGhlck9wdGlvbkF0dHJzLmlkfS12YWx1ZVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIC8+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgJHtmaWVsZExhYmVsfTxkaXYgY2xhc3M9XCIke2ZpZWxkRGF0YS50eXBlfS1ncm91cFwiPiR7b3B0aW9uc01hcmt1cH08L2Rpdj5gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY2FzZSAndGVsJzpcbiAgICAgICAgY2FzZSAnYXV0b2NvbXBsZXRlJzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGAke2ZpZWxkTGFiZWx9IDxpbnB1dCAke2ZpZWxkRGF0YVN0cmluZ30+YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgIGZpZWxkTWFya3VwID0gYCR7ZmllbGRMYWJlbH0gPGlucHV0ICR7ZmllbGREYXRhU3RyaW5nfT4gJHtvcHRzLm1lc3NhZ2VzLnNlbGVjdENvbG9yfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICAgICAgZmllbGRNYXJrdXAgPSBgPGJ1dHRvbiAke2ZpZWxkRGF0YVN0cmluZ30+JHtmaWVsZExhYmVsVmFsfTwvYnV0dG9uPmA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8aW5wdXQgJHtmaWVsZERhdGFTdHJpbmd9PiAke2ZpZWxkTGFiZWx9YDtcblxuICAgICAgICAgIGlmIChmaWVsZERhdGEudG9nZ2xlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkRGF0YS5pZCkpLmtjVG9nZ2xlKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmaWVsZE1hcmt1cCA9IGA8JHtmaWVsZERhdGEudHlwZX0gJHtmaWVsZERhdGFTdHJpbmd9PiR7ZmllbGRMYWJlbFZhbH08LyR7ZmllbGREYXRhLnR5cGV9PmA7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZERhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGZpZWxkRGF0YS5pZCA/IGBmYi0ke2ZpZWxkRGF0YS50eXBlfSBmb3JtLWdyb3VwIGZpZWxkLSR7ZmllbGREYXRhLmlkfWAgOiAnJztcbiAgICAgICAgZmllbGRNYXJrdXAgPSBmYlV0aWxzLm1hcmt1cCgnZGl2JywgZmllbGRNYXJrdXAsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkTWFya3VwID0gZmJVdGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgZmllbGREYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkTWFya3VwO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciBvdGhlciBvcHRpb24uXG4gICAqIFRvZ2dsZXMgdGhlIGhpZGRlbiB0ZXh0IGFyZWEgZm9yIFwib3RoZXJcIiBvcHRpb24uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gb3RoZXJJZCBpZCBvZiB0aGUgXCJvdGhlclwiIG9wdGlvbiBpbnB1dFxuICAgKi9cbiAgZmJVdGlscy5vdGhlck9wdGlvbkNCID0gKG90aGVySWQpID0+IHtcbiAgICBjb25zdCBvdGhlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3RoZXJJZCk7XG4gICAgY29uc3Qgb3RoZXJJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b3RoZXJJZH0tdmFsdWVgKTtcblxuICAgIGlmIChvdGhlcklucHV0LmNoZWNrZWQpIHtcbiAgICAgIG90aGVySW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG90aGVySW5wdXRWYWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG90aGVySW5wdXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciB1bmNhcGl0YWxpemVkIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHN0ciBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICovXG4gIGZiVXRpbHMuY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcYlxcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgfTtcbi8vICAgcmV0dXJuIGZiVXRpbHM7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZmJVdGlscztcbiJdfQ==
