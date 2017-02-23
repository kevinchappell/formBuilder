/*global fbUtils, formBuilderHelpersFn*/
(function($) {
  'use strict';

  var FormBuilder = function(options, element) {
    var formBuilder = this;

    var defaults = {
      controlPosition: 'right',
      controlOrder: [
        'autocomplete',
        'button',
        'checkbox',
        'checkbox-group',
        'date',
        'file',
        'header',
        'hidden',
        'paragraph',
        'number',
        'radio-group',
        'select',
        'text',
        'textarea'
      ],
      dataType: 'xml',
      // Array of fields to disable
      disableFields: [],
      editOnAdd: false,
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
        error: function(message) {
          return console.error(message);
        },
        success: function(message) {
          return console.log(message);
        },
        warning: function(message) {
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

    var utils = fbUtils;

    defaults.messages.subtypes = (() => {
      const subtypeDefault = (subtype) => {
        return {
          label: subtype,
          value: subtype
        };
      };

      return {
          text: ['text', 'password', 'email', 'color', 'tel'].map(subtypeDefault),
          header: ['h1', 'h2', 'h3'].map(subtypeDefault),
          button: ['button', 'submit', 'reset'].map(subtypeDefault),
          paragraph: ['p','address','blockquote','canvas','output'].map(subtypeDefault)
        };
    })();

    var opts = Object.assign({}, defaults, options),
      frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;

    if (options.messages) {
      opts.messages = Object.assign({}, defaults.messages, options.messages);
    }

    opts.formID = frmbID;

    formBuilder.element = element;

    var $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');
    var _helpers = formBuilderHelpersFn(opts, formBuilder);

    formBuilder.layout = _helpers.editorLayout(opts.controlPosition);

    var lastID = frmbID + '-fld-1',
      boxID = frmbID + '-control-box';

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
      frmbFields = frmbFields.filter(function(field) {
        return !utils.inArray(field.attrs.type, opts.disableFields);
      });
    }

    // Create draggable fields for formBuilder
    var cbUl = utils.markup('ul', null, {id: boxID, className: 'frmb-control'});

    if (opts.sortableControls) {
      cbUl.classList.add('sort-enabled');
    }

    var $cbUL = $(cbUl);

    // Loop through
    utils.forEach(frmbFields, (i) => {
      let $field = $('<li/>', {
        'class': 'icon-' + frmbFields[i].attrs.className,
        'type': frmbFields[i].type,
        'name': frmbFields[i].className,
        'label': frmbFields[i].label
      });

      $field.data('newFieldData', frmbFields[i]);

      let typeLabel = utils.markup('span', frmbFields[i].label);
      $field.html(typeLabel).appendTo($cbUL);
    });

    if (opts.inputSets.length) {
      $('<li/>', {'class': 'fb-separator'}).html('<hr>').appendTo($cbUL);
      opts.inputSets.forEach((set) => {
        set.name = set.name || _helpers.makeClassName(set.label);
        let $set =  $('<li/>', {'class': 'input-set-control', type: set.name});
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
      update: function(event, ui) {
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

    var processControl = (control) => {
      if (control[0].classList.contains('input-set-control')) {
        let inputSet = opts.inputSets.filter((set) => {
          return set.name === control[0].type;
        })[0];
        if (inputSet.showHeader) {
          let header = {
              type: 'header',
              subtype: 'h2',
              id: inputSet.name,
              label: inputSet.label
            };
          prepFieldVars(header, true);
        }
        inputSet.fields.forEach((field) => {
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
      let viewDataText = opts.dataType === 'xml' ? opts.messages.viewXML : opts.messages.viewJSON,
        viewData = utils.markup('button', viewDataText, {
          id: frmbID + '-view-data',
          type: 'button',
          className: 'view-data btn btn-default'
        }),
        clearAll = utils.markup('button', opts.messages.clearAll, {
          id: frmbID + '-clear-all',
          type: 'button',
          className: 'clear-all btn btn-default'
        }),
        saveAll = utils.markup('button', opts.messages.save, {
          className: `btn btn-primary ${opts.prefix}save`,
          id: frmbID + '-save',
          type: 'button'
        }),
        formActions = utils.markup('div', [clearAll, viewData, saveAll], {
          className: 'form-actions btn-group'
        });

      cbWrap.append(formActions);
    }

    $stageWrap.append($sortableFields, cbWrap);
    $stageWrap.before($formWrap);
    $formWrap.append($stageWrap, cbWrap);
    $(element).append($formWrap);

    var saveAndUpdate = _helpers.debounce(function(evt) {
      if (evt) {
        if (evt.type === 'keyup' && this.name === 'className') {
          return false;
        }
      }

      let $field = $(this).parents('.form-field:eq(0)');
      _helpers.updatePreview($field);
      _helpers.save();
    });

    // Save field on change
    $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

    $('li', $cbUL).click(function() {
      _helpers.stopIndex = undefined;
      processControl($(this));
      _helpers.save();
    });

    // Add append and prepend options if necessary
    var nonEditableFields = function() {
      let cancelArray = [];

      if (opts.prepend && !$('.disabled.prepend', $sortableFields).length) {
        let prependedField = utils.markup('li', opts.prepend, {className: 'disabled prepend'});
        cancelArray.push(true);
        $sortableFields.prepend(prependedField);
      }

      if (opts.append && !$('.disabled.append', $sortableFields).length) {
        let appendedField = utils.markup('li', opts.append, {className: 'disabled append'});
        cancelArray.push(true);
        $sortableFields.append(appendedField);
      }

      if (cancelArray.some(elem => elem === true)) {
        $stageWrap.removeClass('empty');
      }
    };

    var prepFieldVars = function($field, isNew = false) {
      var field = {};
      if ($field instanceof jQuery) {
        let fieldData = $field.data('newFieldData');
        if (fieldData) {
          field = fieldData.attrs;
          field.label = fieldData.label;
        } else {
          let attrs = $field[0].attributes;
          if (!isNew) {
            field.values = $field.children().map((index, elem) => {
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

      field.name = isNew ? nameAttr(field) : ( field.name || nameAttr(field) );

      if (isNew && utils.inArray(field.type, [
        'text',
        'number',
        'file',
        'date',
        'select',
        'textarea'])) {
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
    var loadFields = function() {
      let formData = formBuilder.formData;
      if (formData && formData.length) {
        for (let i = 0; i < formData.length; i++) {
          prepFieldVars(formData[i]);
        }
        $stageWrap.removeClass('empty');
      } else if (opts.defaultFields && opts.defaultFields.length) {
        // Load default fields if none are set
        opts.defaultFields.forEach(field => prepFieldVars(field));
        $stageWrap.removeClass('empty');
      } else if (!opts.prepend && !opts.append) {
        $stageWrap.addClass('empty').attr('data-content', opts.messages.getStarted);
      }
      _helpers.save();

      $('li.form-field:not(.disabled)', $sortableFields).each(function() {
        _helpers.updatePreview($(this));
      });

      nonEditableFields();
    };

    // callback to track disabled tooltips
    $sortableFields.on('mousemove', 'li.disabled', function(e) {
      $('.frmb-tt', this).css({
        left: e.offsetX - 16,
        top: e.offsetY - 34
      });
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseenter', 'li.disabled', function() {
      _helpers.disabledTT.add($(this));
    });

    // callback to call disabled tooltips
    $sortableFields.on('mouseleave', 'li.disabled', function() {
      _helpers.disabledTT.remove($(this));
    });

    var nameAttr = function(field) {
      var epoch = new Date().getTime();
      return field.type + '-' + epoch;
    };

    /**
     * Add data for field with options [select, checkbox-group, radio-group]
     *
     * @todo   refactor this nasty ~crap~ code, its actually painful to look at
     * @param  {object} values
     */
    var fieldOptions = function(values) {
      let optionActions = [
          utils.markup('a', opts.messages.addOption, {className: 'add add-opt'})
        ],
        fieldOptions = [`<label class="false-label">${opts.messages.selectOptions}</label>`],
        isMultiple = values.multiple || (values.type === 'checkbox-group');

      if (!values.values || !values.values.length) {
        values.values = [1, 2, 3].map(function(index) {
          let label = `${opts.messages.option} ${index}`;
          let option = {
            selected: false,
            label: label,
            value: utils.hyphenCase(label)
          };
          return option;
        });
        values.values[0].selected = true;
      } else {
        // ensure option data is has all required keys
        values.values.forEach(option => Object.assign({}, {selected: false}, option));
      }

      fieldOptions.push('<div class="sortable-options-wrap">');

      fieldOptions.push('<ol class="sortable-options">');
      utils.forEach(values.values, (i) => {
        fieldOptions.push(selectFieldOptions(values.name, values.values[i], isMultiple));
      });
      fieldOptions.push('</ol>');
      fieldOptions.push(utils.markup('div', optionActions, {className: 'option-actions'}).outerHTML);
      fieldOptions.push('</div>');

      return utils.markup('div', fieldOptions.join(''), {className: 'form-group field-options'}).outerHTML;
    };

    /**
     * Build the editable properties for the field
     * @param  {object} values configuration object for advanced fields
     * @return {String}        markup for advanced fields
     */
    var advFields = function(values) {
      var advFields = [],
        key,
        optionFields = [
          'select',
          'checkbox-group',
          'radio-group'
        ],
        isOptionField = (function() {
          return (optionFields.indexOf(values.type) !== -1);
        })(),
        valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(optionFields)),
        roles = values.role !== undefined ? values.role.split(',') : [];

      advFields.push(requiredField(values));

      if (values.type === 'checkbox') {
        advFields.push(boolAttribute('toggle', values, {first: opts.messages.toggle}));
      }

      advFields.push(textAttribute('label', values));

      values.size = values.size || 'm';
      values.style = values.style || 'default';

      //Help Text / Description Field
      if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
        advFields.push(textAttribute('description', values));
      }

      if (opts.messages.subtypes[values.type]) {
        let optionData = opts.messages.subtypes[values.type];
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

      //TextArea Rows Attribute
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
        let labels = {
          first: opts.messages.multipleFiles,
          second: opts.messages.allowMultipleFiles
        };
        advFields.push(boolAttribute('multiple', values, labels));
      }

      let rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
      let availableRoles = [
        `<div class="available-roles" ${rolesDisplay}>`
      ];
      for (key in opts.roles) {
        if (opts.roles.hasOwnProperty(key)) {
          let checked = utils.inArray(key, roles) ? 'checked' : '',
          roleId = `fld-${lastID}-roles-${key}`;
          availableRoles.push(`<input type="checkbox" name="roles[]" value="${key}" id="${roleId}" ${checked} class="roles-field" /> <label for="${roleId}">${opts.roles[key]}</label><br/>`);
        }
      }

      availableRoles.push('</div>');

      let accessLabels = {first: opts.messages.roles, second: opts.messages.limitRole, content: availableRoles.join('')};

      advFields.push(boolAttribute('access', values, accessLabels));

      if (values.type === 'checkbox-group' || values.type === 'radio-group') {
        advFields.push(boolAttribute('other', values, {first: opts.messages.enableOther, second: opts.messages.enableOtherMsg}));
      }

      if (values.type === 'select') {
        advFields.push(boolAttribute('multiple', values, {first: ' ', second: opts.messages.selectionsMessage}));
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

    function processTypeUserAttrs(typeUserAttr, values) {
      let advField = [];

      for (let attribute in typeUserAttr) {
        if (typeUserAttr.hasOwnProperty(attribute)) {
          let orig = opts.messages[attribute];
          let origValue = typeUserAttr[attribute].value;
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

    function inputUserAttrs(name, attrs) {
      let textAttrs = {
          id: name + '-' + lastID,
          title: attrs.description || attrs.label || name.toUpperCase(),
          name: name,
          type: attrs.type || 'text',
          className: [`fld-${name}`]
        },
        label = `<label for="${textAttrs.id}">${opts.messages[name]}</label>`;

      if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
        textAttrs.className.push('form-control');
      }

      textAttrs = Object.assign({}, attrs, textAttrs);
      let textInput = `<input ${utils.attrString(textAttrs)}>`,
      inputWrap = `<div class="input-wrap">${textInput}</div>`;
      return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`;
    }

    function selectUserAttrs(name, options) {
      let optis = Object.keys(options.options).map(val => {
        let attrs = {value: val};
        if (val === options.value) { attrs.selected = null; }
        return `<option ${utils.attrString(attrs)}>${options.options[val]}</option>`;
      }),
        selectAttrs = {
          id: name + '-' + lastID,
          title: options.description || options.label || name.toUpperCase(),
          name: name,
          className: `fld-${name} form-control`
        },
        label = `<label for="${selectAttrs.id}">${opts.messages[name]}</label>`;

      Object.keys(options).filter(prop => {
        return !utils.inArray(prop, ['value', 'options', 'label']);
      }).forEach(function(attr) {
        selectAttrs[attr] = options[attr];
      });

      let select = `<select ${utils.attrString(selectAttrs)}>${optis.join('')}</select>`,
        inputWrap = `<div class="input-wrap">${select}</div>`;
      return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`;
    }

    var boolAttribute = function(name, values, labels) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
        return;
      }

      let label = (txt) => {
        return `<label for="${name}-${lastID}">${txt}</label>`;
      },
      checked = (values[name] !== undefined ? 'checked' : ''),
      input = `<input type="checkbox" class="fld-${name}" name="${name}" value="true" ${checked} id="${name}-${lastID}"/> `,
      left = [],
      right = [
        input
      ];

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

      return `<div class="form-group ${name}-wrap">${left.concat(right).join('')}</div>`;
    };

    var btnStyles = function(style, type) {
      let tags = {
          button: 'btn'
        },
        styles = opts.messages.styles[tags[type]],
        styleField = '';

      if (styles) {
        let styleLabel = `<label>${opts.messages.style}</label>`;
        styleField += `<input value="${style}" name="style" type="hidden" class="btn-style">`;
        styleField += '<div class="btn-group" role="group">';

        Object.keys(opts.messages.styles[tags[type]]).forEach(function(element) {
          let active = style === element ? 'active' : '';
          styleField += `<button value="${element}" type="${type}" class="${active} btn-xs ${tags[type]} ${tags[type]}-${element}">${opts.messages.styles[tags[type]][element]}</button>`;
        });

        styleField += '</div>';

        styleField = `<div class="form-group style-wrap">${styleLabel} ${styleField}</div>`;
      }

      return styleField;
    };

    /**
     * Add a number attribute to a field.
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String}
     */
    var numberAttribute = function(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      let attrVal = values[attribute],
        attrLabel = opts.messages[attribute] || attribute,
        placeholder = opts.messages.placeholders[attribute],
        inputConfig = {
          type: 'number',
          value: attrVal,
          name: attribute,
          min: '0',
          placeholder: placeholder,
          className: `fld-${attribute} form-control`,
          id: `${attribute}-${lastID}`
        },
        numberAttribute = `<input ${utils.attrString(utils.trimObj(inputConfig))}>`,
        inputWrap = `<div class="input-wrap">${numberAttribute}</div>`;

      return `<div class="form-group ${attribute}-wrap"><label for="${inputConfig.id}">${attrLabel}</label> ${inputWrap}</div>`;
    };

    var selectAttribute = function(attribute, values, optionData) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }
      let selectOptions = optionData.map((option, i) => {
        let optionAttrs = Object.assign({
          label: `${opts.messages.option} ${i}`,
          value: undefined
        }, option);
        if (option.value === values[attribute]) {
          optionAttrs.selected = true;
        }
        return `<option ${utils.attrString(utils.trimObj(optionAttrs))}>${optionAttrs.label}</option>`;
      }),
        selectAttrs = {
          id: attribute + '-' + lastID,
          name: attribute,
          className: `fld-${attribute} form-control`
        },
        label = `<label for="${selectAttrs.id}">${opts.messages[attribute] || utils.capitalize(attribute)}</label>`;

      let select = `<select ${utils.attrString(selectAttrs)}>${selectOptions.join('')}</select>`,
        inputWrap = `<div class="input-wrap">${select}</div>`;

      return `<div class="form-group ${selectAttrs.name}-wrap">${label}${inputWrap}</div>`;
    };

    /**
     * Generate some text inputs for field attributes, **will be replaced**
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String}
     */
    var textAttribute = function(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      var placeholderFields = [
        'text',
        'textarea',
        'select'
      ];

      var noName = [
        'header'
      ];

      var textArea = ['paragraph'];

      var attrVal = values[attribute] || '',
        attrLabel = opts.messages[attribute];
      if (attribute === 'label' && utils.inArray(values.type, textArea)) {
        attrLabel = opts.messages.content;
      }

      noName = noName.concat(opts.messages.subtypes.header, textArea);

      let placeholders = opts.messages.placeholders,
        placeholder = placeholders[attribute] || '',
        attributefield = '',
        noMakeAttr = [];

      // Field has placeholder attribute
      if (attribute === 'placeholder' && !utils.inArray(values.type, placeholderFields)) {
        noMakeAttr.push(true);
      }

      // Field has name attribute
      if (attribute === 'name' && utils.inArray(values.type, noName)) {
        noMakeAttr.push(true);
      }

      if (!noMakeAttr.some(elem => elem === true)) {
        let inputConfig = {
          name: attribute,
          placeholder: placeholder,
          className: `fld-${attribute} form-control`,
          id: `${attribute}-${lastID}`
        };
        let attributeLabel = `<label for="${inputConfig.id}">${attrLabel}</label>`;

        if (attribute === 'label' && utils.inArray(values.type, textArea) || (attribute === 'value' && values.type === 'textarea')) {
          attributefield += `<textarea ${utils.attrString(inputConfig)}>${attrVal}</textarea>`;
        } else {
          inputConfig.value = attrVal;
          inputConfig.type = 'text';
          attributefield += `<input ${utils.attrString(inputConfig)}>`;
        }

        let inputWrap = `<div class="input-wrap">${attributefield}</div>`;

        attributefield = `<div class="form-group ${attribute}-wrap">${attributeLabel} ${inputWrap}</div>`;
      }

      return attributefield;
    };

    var requiredField = function(values) {
      var noRequire = [
          'header',
          'paragraph',
          'button'
        ],
        noMake = [],
        requireField = '';

      if (utils.inArray(values.type, noRequire)) {
        noMake.push(true);
      }
      if (!noMake.some(elem => elem === true)) {
        requireField = boolAttribute('required', values, {first: opts.messages.required});
      }

      return requireField;
    };

    // Append the new field to the editor
    var appendNewField = function(values) {
      let type = values.type || 'text',
        label = values.label || opts.messages[type] || opts.messages.label,
        delBtn = utils.markup('a', opts.messages.remove, {
          id: 'del_' + lastID,
          className: 'del-button btn delete-confirm',
          title: opts.messages.removeMessage
        }),
        toggleBtn = utils.markup('a', null, {
          id: lastID + '-edit',
          className: 'toggle-form btn icon-pencil',
          title: opts.messages.hide
        }),
        copyBtn = utils.markup('a', opts.messages.copyButton, {
          id: lastID + '-copy',
          className: 'copy-button btn icon-copy',
          title: opts.messages.copyButtonTooltip
        });

      var liContents = utils.markup(
        'div', [toggleBtn, copyBtn, delBtn], {className: 'field-actions'}
      ).outerHTML;

      // Field preview Label
      liContents += `<label class="field-label">${label}</label>`;

      if (values.description) {
        liContents += `<span class="tooltip-element" tooltip="${values.description}">?</span>`;
      }

      let requiredDisplay = values.required ? 'style="display:inline"' : '';
      liContents += `<span class="required-asterisk" ${requiredDisplay}> *</span>`;

      liContents += utils.markup('div', '', {className: 'prev-holder'}).outerHTML;
      liContents += '<div id="' + lastID + '-holder" class="frm-holder">';
      liContents += '<div class="form-elements">';

      liContents += advFields(values);
      liContents += utils.markup('a', opts.messages.close, {className: 'close-field'}).outerHTML;

      liContents += '</div>';
      liContents += '</div>';

      let field = utils.markup('li', liContents, {
          'class': type + '-field form-field',
          'type': type,
          id: lastID
        }),
        $li = $(field);

      $li.data('fieldData', {attrs: values});
      if (typeof _helpers.stopIndex !== 'undefined') {
        $('> li', $sortableFields).eq(_helpers.stopIndex).before($li);
      } else {
        $sortableFields.append($li);
      }

      $('.sortable-options', $li).sortable({update: () => {_helpers.updatePreview($li);}}); // make dynamically added option fields sortable if they exist.

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
    var selectFieldOptions = function(name, optionData, multipleSelect) {
      let optionInputType = {
          selected: (multipleSelect ? 'checkbox' : 'radio')
        },
        optionDataOrder = [
          'value',
          'label',
          'selected'
        ],
        optionInputs = [];

      optionData = Object.assign({selected: false,label: '',value: ''}, optionData);

      for (var i = optionDataOrder.length - 1; i >= 0; i--) {
        let prop = optionDataOrder[i];
        if (optionData.hasOwnProperty(prop)) {
          let attrs = {
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

      let removeAttrs = {
        className: 'remove btn',
        title: opts.messages.removeMessage
      };
      optionInputs.push(utils.markup('a', opts.messages.remove, removeAttrs));

      let field = utils.markup('li', optionInputs);

      return field.outerHTML;
    };

    var cloneItem = function cloneItem(currentItem) {
      let currentId = currentItem.attr('id'),
        type = currentItem.attr('type'),
        ts = new Date().getTime(),
        cloneName = type + '-' + ts;

      var $clone = currentItem.clone();

      $clone.find('[id]').each(function() { this.id = this.id.replace(currentId, lastID); });

      $clone.find('[for]').each(function() { this.setAttribute('for', this.getAttribute('for').replace(currentId, lastID)); });

      $clone.each(function() {
        $('e:not(.form-elements)').each(function() {
          var newName = this.getAttribute('name');
          newName = newName.substring(0, (newName.lastIndexOf('-') + 1));
          newName = newName + ts.toString();
          this.setAttribute('name', newName);
        });

      });

      $clone.find('.form-elements').find(':input').each(function() {
        if (this.getAttribute('name') === 'name') {
          var newVal = this.getAttribute('value');
          newVal = newVal.substring(0, (newVal.lastIndexOf('-') + 1));
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
    $sortableFields.on('click touchstart', '.remove', function(e) {
      var $field = $(this).parents('.form-field:eq(0)');
      e.preventDefault();
      var optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
      if (optionsCount <= 2) {
        opts.notify.error('Error: ' + opts.messages.minOptionMessage);
      } else {
        $(this).parent('li').slideUp('250', function() {
          $(this).remove();
          _helpers.updatePreview($field);
          _helpers.save();
        });
      }
    });

    // touch focus
    $sortableFields.on('touchstart', 'input', function(e) {
      if (e.handled !== true) {
        if ($(this).attr('type') === 'checkbox') {
          $(this).trigger('click');
        } else {
          $(this).focus();
          let fieldVal = $(this).val();
          $(this).val(fieldVal);
        }
      } else {
        return false;
      }
    });

    // toggle fields
    $sortableFields.on('click touchstart', '.toggle-form, .close-field', function(e) {
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

    $sortableFields.on('change', '.prev-holder input, .prev-holder select', e => {
      if (e.target.classList.contains('other-option')) {
        return;
      }
      let field = $(e.target).closest('li.form-field')[0];
      if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
        field.querySelector('[class="option-value"][value="' + e.target.value + '"]').parentElement.childNodes[0].checked = true;
      } else {
        document.getElementById('value-' + field.id).value = e.target.value;
      }

      _helpers.save();
    });

    // update preview to label
    $sortableFields.on('keyup change', '[name="label"]', function() {
      $('.field-label', $(this).closest('li')).text($(this).val());
    });

    // remove error styling when users tries to correct mistake
    $sortableFields.delegate('input.error', 'keyup', function() {
      $(this).removeClass('error');
    });

    // update preview for description
    $sortableFields.on('keyup', 'input[name="description"]', function() {
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

    $sortableFields.on('change', '.fld-multiple', e => {
      let newType = e.target.checked ? 'checkbox' : 'radio';

      $(e.target)
      .parents('.form-elements:eq(0)')
      .find('.sortable-options input.option-selected')
      .each(function() {
        this.type = newType;
      });

    });

    // format name attribute
    $sortableFields.on('blur', 'input.fld-name', function() {
      this.value = _helpers.safename(this.value);
      if (this.value === '') {
        $(this).addClass('field-error').attr('placeholder', opts.messages.cannotBeEmpty);
      } else {
        $(this).removeClass('field-error');
      }
    });

    $sortableFields.on('blur', 'input.fld-maxlength', function() {
      this.value = _helpers.forceNumber(this.value);
    });

    // Copy field
    $sortableFields.on('click touchstart', '.icon-copy', function(e) {
      e.preventDefault();
      var currentItem = $(this).parent().parent('li');
      var $clone = cloneItem(currentItem);
      $clone.insertAfter(currentItem);
      _helpers.updatePreview($clone);
      _helpers.save();
    });

    // Delete field
    $sortableFields.on('click touchstart', '.delete-confirm', function(e) {
      e.preventDefault();

      let buttonPosition = this.getBoundingClientRect(),
        bodyRect = document.body.getBoundingClientRect(),
        coords = {
          pageX: buttonPosition.left + (buttonPosition.width / 2),
          pageY: (buttonPosition.top - bodyRect.top) - 12
        };

      var deleteID = $(this).parents('.form-field:eq(0)').attr('id'),
        $field = $(document.getElementById(deleteID));

      document.addEventListener('modalClosed', function() {
        $field.removeClass('deleting');
      }, false);

      // Check if user is sure they want to remove the field
      if (opts.fieldRemoveWarn) {
        let warnH3 = utils.markup('h3', opts.messages.warning),
          warnMessage = utils.markup('p', opts.messages.fieldRemoveWarning);
        _helpers.confirm([warnH3, warnMessage], () => _helpers.removeField(deleteID), coords);
        $field.addClass('deleting');
      } else {
        _helpers.removeField(deleteID);
      }
    });

    // Update button style selection
    $sortableFields.on('click', '.style-wrap button', function() {
      let styleVal = $(this).val(),
        $parent = $(this).parent(),
        $btnStyle = $parent.prev('.btn-style');
      $btnStyle.val(styleVal);
      $(this).siblings('.btn').removeClass('active');
      $(this).addClass('active');
      saveAndUpdate.call($parent);
    });

    // Attach a callback to toggle required asterisk
    $sortableFields.on('click', 'input.fld-required', function() {
      var requiredAsterisk = $(this).parents('li.form-field').find('.required-asterisk');
      requiredAsterisk.toggle();
    });

    // Attach a callback to toggle roles visibility
    $sortableFields.on('click', 'input.fld-access', function() {
      var roles = $(this).parents('li.form-field').find('div.available-roles'),
        enableRolesCB = $(this);
      roles.slideToggle(250, function() {
        if (!enableRolesCB.is(':checked')) {
          $('input[type="checkbox"]', roles).removeAttr('checked');
        }
      });
    });

    // Attach a callback to add new options
    $sortableFields.on('click', '.add-opt', function(e) {
      e.preventDefault();
      var $optionWrap = $(this).parents('.field-options:eq(0)'),
        $multiple = $('[name="multiple"]', $optionWrap),
        $firstOption = $('.option-selected:eq(0)', $optionWrap),
        isMultiple = false;

      if ($multiple.length) {
        isMultiple = $multiple.prop('checked');
      } else {
        isMultiple = ($firstOption.attr('type') === 'checkbox');
      }

      let name = $firstOption.attr('name');

      $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
    });

    $sortableFields.on('mouseover mouseout', '.remove, .del-button', function() {
      $(this).parents('li:eq(0)').toggleClass('delete');
    });

    if (opts.showActionButtons) {
      // View XML
      var xmlButton = $(document.getElementById(frmbID + '-view-data'));
      xmlButton.click(function(e) {
        e.preventDefault();
        _helpers.showData();
      });

      // Clear all fields in form editor
      var clearButton = $(document.getElementById(frmbID + '-clear-all'));
      clearButton.click(function() {
        let fields = $('li.form-field');
        let buttonPosition = this.getBoundingClientRect(),
          bodyRect = document.body.getBoundingClientRect(),
          coords = {
            pageX: buttonPosition.left + (buttonPosition.width / 2),
            pageY: (buttonPosition.top - bodyRect.top) - 12
          };

        if (fields.length) {
          _helpers.confirm(opts.messages.clearAllMessage, function() {
            _helpers.removeAllfields();
            opts.notify.success(opts.messages.allFieldsRemoved);
            _helpers.save();
          }, coords);
        } else {
          _helpers.dialog('There are no fields to clear', {pageX: coords.pageX, pageY: coords.pageY});
        }
      });

      // Save Idea Template
      $(document.getElementById(frmbID + '-save')).click(function(e) {
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
      addField: (field, index) => {
        _helpers.stopIndex = $sortableFields[0].children.length ? index : undefined;
        prepFieldVars(field);
        document.dispatchEvent(formBuilder.events.fieldAdded);
      },
      removeField: _helpers.removeField,
      setData: formData => {
        _helpers.removeAllfields();
        _helpers.getData(formData);
        loadFields();
      }
    };

    return formBuilder;
  };

  $.fn.formBuilder = function(options) {
    options = options || {};
    return this.each(function() {
      var formBuilder = new FormBuilder(options, this);
      $(this).data('formBuilder', formBuilder);

      return formBuilder;
    });
  };

})(jQuery);
