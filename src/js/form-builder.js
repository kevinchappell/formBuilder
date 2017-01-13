import d from './dom';
require('./kc-toggle.js');
require('./polyfills.js');
// const extend = require('deep-extend');

(function($) {
  const FormBuilder = async function(options, element) {
    const formBuilder = this;
    const utils = require('./utils.js');
    const m = utils.markup;
    formBuilder.events = require('./events.js');
    formBuilder.utils = utils;
    formBuilder.mi18n = require('mi18n').default;

    let defaults = {
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
      notify: {
        error: message => console.error(message),
        success: message => console.log(message),
        warning: message => console.warn(message)
      },
      onSave: utils.noop,
      onClearAll: utils.noop,
      actionButtons: [{
        id: 'clear',
        className: 'clear-all btn btn-danger',
        events: {
          click: e => _helpers.confirmRemoveAll(e)
        }
      }, {
        label: 'viewJSON',
        id: 'data',
        className: 'btn btn-default',
        events: {
          click: () => _helpers.showData()
        }
      }, {
        id: 'save',
        type: 'button',
        className: 'btn btn-primary save-template',
        events: {
          click: () => opts.onSave(_helpers.save())
        }
      }],
      sortableControls: false,
      stickyControls: {
        enable: true,
        offset: {
          top: 5,
          bottom: 'auto',
          right: 'auto'
        }
      },
      disabledActionButtons: [],
      showActionButtons: true,
      typeUserAttrs: {},
      typeUserEvents: {},
      prefix: 'form-builder-'
    };


    defaults.i18n = {
      langs: [
        'en-US'
      ],
      preloaded: {
        'en-US': {
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
          inline: 'Inline',
          inlineDesc: 'Display {type} inline',
          label: 'Label',
          labelEmpty: 'Field Label cannot be empty',
          limitRole: 'Limit access to one or more of the following roles:',
          mandatory: 'Mandatory',
          maxlength: 'Max Length',
          minOptionMessage: 'This field requires a minimum of 2 options',
          multipleFiles: 'Multiple Files',
          name: 'Name',
          no: 'No',
          noFieldsToClear: 'There are no fields to clear',
          number: 'Number',
          off: 'Off',
          on: 'On',
          option: 'Option',
          options: 'Options',
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
          'size.xs': 'Extra Small',
          'size.sm': 'Small',
          'size.m': 'Default',
          'size.lg': 'Large',
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
        }
      }
    };

    let frmbID = 'frmb-' + $('ul[id^=frmb-]').length++;
    formBuilder.formID = frmbID;
    // let {i18n, ...opts} = $.extend({}, defaults, options, true);
    let {i18n, ...opts} = $.extend({}, defaults, options, true);

    i18n = await formBuilder.mi18n.init(i18n);
    const mi18n = formBuilder.mi18n;

    let _helpers = require('./helpers.js')(opts, formBuilder);

    const subtypes = _helpers.processSubtypes(opts.subtypes);

    let $sortableFields = $('<ul/>').attr('id', frmbID).addClass('frmb');

    formBuilder.layout = _helpers.editorLayout(opts.controlPosition);
    formBuilder.stage = $sortableFields[0];

    let lastID = frmbID + '-fld-1';
    let boxID = frmbID + '-control-box';

    // create array of field objects to cycle through
    let frmbFields = [{
      label: i18n['autocomplete'],
      attrs: {
        type: 'autocomplete',
        className: 'autocomplete',
        name: 'autocomplete'
      }
    }, {
      label: i18n['button'],
      attrs: {
        type: 'button',
        className: 'button-input',
        name: 'button'
      }
    }, {
      label: i18n['checkbox'],
      attrs: {
        type: 'checkbox',
        className: 'checkbox',
        name: 'checkbox'
      }
    }, {
      label: i18n['checkboxGroup'],
      attrs: {
        type: 'checkbox-group',
        className: 'checkbox-group',
        name: 'checkbox-group'
      }
    }, {
      label: i18n['dateField'],
      attrs: {
        type: 'date',
        className: 'calendar',
        name: 'date-input'
      }
    }, {
      label: i18n['fileUpload'],
      attrs: {
        type: 'file',
        className: 'file-input',
        name: 'file-input'
      }
    }, {
      label: i18n['header'],
      attrs: {
        type: 'header',
        className: 'header'
      }
    }, {
      label: i18n['hidden'],
      attrs: {
        type: 'hidden',
        className: 'hidden-input',
        name: 'hidden-input'
      }
    }, {
      label: i18n['number'],
      attrs: {
        type: 'number',
        className: 'number',
        name: 'number'
      }
    }, {
      label: i18n['paragraph'],
      attrs: {
        type: 'paragraph',
        className: 'paragraph'
      }
    }, {
      label: i18n['radioGroup'],
      attrs: {
        type: 'radio-group',
        className: 'radio-group',
        name: 'radio-group'
      }
    }, {
      label: i18n['select'],
      attrs: {
        type: 'select',
        className: 'select',
        name: 'select'
      }
    }, {
      label: i18n['text'],
      attrs: {
        type: 'text',
        className: 'text-input',
        name: 'text-input'
      }
    }, {
      label: i18n['textArea'],
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
    let cbUl = utils.markup('ul', null, {id: boxID, className: 'frmb-control'});
    formBuilder.controls = cbUl;

    if (opts.sortableControls) {
      cbUl.classList.add('sort-enabled');
    }

    let $cbUL = $(cbUl);

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
        let $set = $('<li/>', {'class': 'input-set-control', type: set.name});
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
      cancel: 'input, select, .disabled-field, .form-group, .btn',
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

    let processControl = (control) => {
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

    let $formWrap = $('<div/>', {
      id: frmbID + '-form-wrap',
      'class': 'form-wrap form-builder' + _helpers.mobileClass()
    });

    formBuilder.editor = $formWrap[0];

    let $stageWrap = $('<div/>', {
      id: frmbID + '-stage-wrap',
      'class': 'stage-wrap ' + formBuilder.layout.stage
    });

    let cbWrap = $('<div/>', {
      id: frmbID + '-cb-wrap',
      'class': 'cb-wrap ' + formBuilder.layout.controls
    }).append($cbUL[0]);

    if (opts.showActionButtons) {
      const buttons = opts.actionButtons.map(_helpers.processActionButtons);
      const formActions = m('div', buttons, {
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

    let saveAndUpdate = _helpers.debounce(evt => {
      if (evt) {
        if (evt.type === 'keyup' && evt.target.name === 'className') {
          return false;
        }

        let $field = $(evt.target).closest('.form-field');
        _helpers.updatePreview($field);
        _helpers.save();
      }
    });

    // Save field on change
    $sortableFields.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

    $('li', $cbUL).click(function(evt) {
      let $control = $(evt.target).closest('.ui-sortable-handle');
      _helpers.stopIndex = undefined;
      processControl($control);
      _helpers.save();
    });

    // Add append and prepend options if necessary
    let nonEditableFields = () => {
      let cancelArray = [];
      const disabledField = type =>
      utils.markup('li', opts[type], {
        className: `disabled-field form-${type}`
      });

      if (opts.prepend && !$('.disabled-field.form-prepend', $sortableFields).length) {
        cancelArray.push(true);
        $sortableFields.prepend(disabledField('prepend'));
      }

      if (opts.append && !$('.disabled-field.form-.append', $sortableFields).length) {
        cancelArray.push(true);
        $sortableFields.append(disabledField('append'));
      }

      if (cancelArray.some(elem => elem === true)) {
        $stageWrap.removeClass('empty');
      }

      _helpers.disabledTT.init();
    };

    let prepFieldVars = function($field, isNew = false) {
      let field = {};
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

          for (let i = attrs.length - 1; i >= 0; i--) {
            field[attrs[i].name] = attrs[i].value;
          }
        }
      } else {
        field = Object.assign({}, $field);
      }

      field.name = isNew ? nameAttr(field) : ( field.name || nameAttr(field) );

      if (isNew && utils.inArray(field.type,
        ['text',
         'number',
         'file',
         'select',
         'textarea',
         'autocomplete'])) {
        field.className = 'form-control'; // backwards compatibility
      } else {
        field.className = field.class || field.className;
      }

      let match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
      if (match) {
        field.style = match[1];
      }

      utils.escapeAttrs(field);

      appendNewField(field, isNew);
      if (isNew) {
        document.dispatchEvent(formBuilder.events.fieldAdded);
      }
      $stageWrap.removeClass('empty');
    };

    // Parse saved XML template data
    let loadFields = function() {
      _helpers.getData();
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
        $stageWrap.addClass('empty')
        .attr('data-content', i18n.getStarted);
      }
      _helpers.save();

      nonEditableFields();
    };

    let nameAttr = function(field) {
      let epoch = new Date().getTime();
      return field.type + '-' + epoch;
    };

    /**
     * Add data for field with options [select, checkbox-group, radio-group]
     *
     * @todo   refactor this nasty ~crap~ code, its actually painful to look at
     * @param  {Object} values
     * @return {String} field options markup
     */
    let fieldOptions = function(values) {
      let optionActions = [
          utils.markup('a', i18n.addOption, {className: 'add add-opt'})
        ];
      let fieldOptions = [
        `<label class="false-label">${i18n.selectOptions}</label>`
      ];
      const isMultiple = values.multiple || (values.type === 'checkbox-group');

      if (!values.values || !values.values.length) {
        values.values = [1, 2, 3].map(function(index) {
          let label = `${i18n.option} ${index}`;
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
    let advFields = function(values) {
      let advFields = [];
      let key;
      let valueField = !utils.inArray(values.type, ['header', 'paragraph', 'file'].concat(d.optionFields));
      let roles = values.role !== undefined ? values.role.split(',') : [];

      advFields.push(requiredField(values));

      if (values.type === 'checkbox') {
        advFields.push(boolAttribute('toggle', values, {first: i18n.toggle}));
      }

      // Inline options
      if (utils.inArray(values.type, ['checkbox-group', 'radio-group'])) {
        let labels = {
          first: i18n.inline,
          second: mi18n.get('inlineDesc', values.type.replace('-group', ''))
        };

        advFields.push(boolAttribute('inline', values, labels));
      }

      advFields.push(textAttribute('label', values));

      values.size = values.size || 'm';
      values.style = values.style || 'default';

      // Help Text / Description Field
      if (!utils.inArray(values.type, ['header', 'paragraph', 'button'])) {
        advFields.push(textAttribute('description', values));
      }

      if (subtypes[values.type]) {
        let optionData = subtypes[values.type];
        advFields.push(selectAttribute('subtype', values, optionData));
      }

      if (values.type === 'button') {
        advFields.push(btnStyles(values.style));
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
        let labels = {
          first: i18n.multipleFiles,
          second: i18n.allowMultipleFiles
        };
        advFields.push(boolAttribute('multiple', values, labels));
      }

      let rolesDisplay = values.role !== undefined ? 'style="display:block"' : '';
      let availableRoles = [
        `<div class="available-roles" ${rolesDisplay}>`
      ];
      for (key in opts.roles) {
        if (opts.roles.hasOwnProperty(key)) {
          let checked = utils.inArray(key, roles) ? 'checked' : '';
          let roleId = `fld-${lastID}-roles-${key}`;
          availableRoles.push(`<input type="checkbox" name="roles[]" value="${key}" id="${roleId}" ${checked} class="roles-field" /> <label for="${roleId}">${opts.roles[key]}</label><br/>`);
        }
      }

      availableRoles.push('</div>');

      let accessLabels = {first: i18n.roles, second: i18n.limitRole, content: availableRoles.join('')};

      advFields.push(boolAttribute('access', values, accessLabels));

      if (values.type.match(/(checkbox-group|radio-group)/)) {
        advFields.push(boolAttribute('other', values, {first: i18n.enableOther, second: i18n.enableOtherMsg}));
      }

      if (values.type === 'select') {
        advFields.push(boolAttribute('multiple', values, {first: ' ', second: i18n.selectionsMessage}));
      }

      if (values.type.match(d.optionFieldsRegEx)) {
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
      let advField = [];

      for (let attribute in typeUserAttr) {
        if (typeUserAttr.hasOwnProperty(attribute)) {
          let orig = i18n[attribute];
          let origValue = typeUserAttr[attribute].value;
          typeUserAttr[attribute].value = values[attribute] || typeUserAttr[attribute].value || '';

          if (typeUserAttr[attribute].label) {
            i18n[attribute] = typeUserAttr[attribute].label;
          }

          if (typeUserAttr[attribute].options) {
            advField.push(selectUserAttrs(attribute, typeUserAttr[attribute]));
          } else {
            advField.push(inputUserAttrs(attribute, typeUserAttr[attribute]));
          }

          i18n[attribute] = orig;
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
      let textAttrs = {
          id: name + '-' + lastID,
          title: attrs.description || attrs.label || name.toUpperCase(),
          name: name,
          type: attrs.type || 'text',
          className: [`fld-${name}`]
        };
      let label = `<label for="${textAttrs.id}">${i18n[name]}</label>`;

      if (!utils.inArray(textAttrs.type, ['checkbox', 'checkbox-group', 'radio-group'])) {
        textAttrs.className.push('form-control');
      }

      textAttrs = Object.assign({}, attrs, textAttrs);
      let textInput = `<input ${utils.attrString(textAttrs)}>`;
      let inputWrap = `<div class="input-wrap">${textInput}</div>`;
      return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`;
    }

    /**
     * Select input for multiple choice user attributes
     * @todo  replace with selectAttr
     * @param  {String} name
     * @param  {Object} options
     * @return {String}         select markup
     */
    function selectUserAttrs(name, options) {
      let optis = Object.keys(options.options).map(val => {
        let attrs = {value: val};
        if (val === options.value) {
          attrs.selected = null;
        }
        return `<option ${utils.attrString(attrs)}>${options.options[val]}</option>`;
      });
      let selectAttrs = {
        id: name + '-' + lastID,
        title: options.description || options.label || name.toUpperCase(),
        name: name,
        className: `fld-${name} form-control`
      };
      let label = `<label for="${selectAttrs.id}">${i18n[name]}</label>`;

      Object.keys(options).filter(prop => {
        return !utils.inArray(prop, ['value', 'options', 'label']);
      }).forEach(function(attr) {
        selectAttrs[attr] = options[attr];
      });

      let select = `<select ${utils.attrString(selectAttrs)}>${optis.join('')}</select>`;
      let inputWrap = `<div class="input-wrap">${select}</div>`;
      return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`;
    }

    let boolAttribute = function(name, values, labels) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][name]) {
        return;
      }

      let label = (txt) => {
        return `<label for="${name}-${lastID}">${txt}</label>`;
      };
      let checked = (values[name] !== undefined ? 'checked' : '');
      let input = `<input type="checkbox" class="fld-${name}" name="${name}" value="true" ${checked} id="${name}-${lastID}"/> `;
      let left = [];
      let right = [
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

    let btnStyles = function(style) {
        let styles = i18n['styles.btn'];
        let styleField = '';

      if (styles) {
        let styleLabel = `<label>${i18n.style}</label>`;
        styleField += `<input value="${style}" name="style" type="hidden" class="btn-style">`;
        styleField += '<div class="btn-group" role="group">';

        Object.keys(styles).forEach(element => {
          let classList = ['btn-xs', 'btn', `btn-${element}`];
          if (style === element) {
            classList.push('selected');
          }

          styleField += `<button value="${element}" type="button" class="${classList.join(' ')}">${i18n.styles.btn[element]}</button>`;
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
     * @return {String} markup for number attribute
     */
    let numberAttribute = function(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      let attrVal = values[attribute];
      let attrLabel = i18n[attribute] || attribute;
      let placeholder = i18n.placeholders[attribute];
      let inputConfig = {
        type: 'number',
        value: attrVal,
        name: attribute,
        min: '0',
        placeholder: placeholder,
        className: `fld-${attribute} form-control`,
        id: `${attribute}-${lastID}`
      };
      let numberAttribute = `<input ${utils.attrString(utils.trimObj(inputConfig))}>`;
      let inputWrap = `<div class="input-wrap">${numberAttribute}</div>`;

      return `<div class="form-group ${attribute}-wrap"><label for="${inputConfig.id}">${attrLabel}</label> ${inputWrap}</div>`;
    };

    /**
     * selectAttribute
     * @param  {String} attribute  attribute name
     * @param  {Object} values     aka attrs
     * @param  {Array} optionData  select field option data
     * @return {String}            select input makrup
     */
    let selectAttribute = function(attribute, values, optionData) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }
      let selectOptions = optionData.map((option, i) => {
        let optionAttrs = Object.assign({
          label: `${i18n.option} ${i}`,
          value: undefined
        }, option);
        if (option.value === values[attribute]) {
          optionAttrs.selected = true;
        }
        return `<option ${utils.attrString(utils.trimObj(optionAttrs))}>${optionAttrs.label}</option>`;
      });
      let selectAttrs = {
          id: attribute + '-' + lastID,
          name: attribute,
          className: `fld-${attribute} form-control`
        };
      let label = `<label for="${selectAttrs.id}">${i18n[attribute] || utils.capitalize(attribute)}</label>`;
      let select = `<select ${utils.attrString(selectAttrs)}>${selectOptions.join('')}</select>`;
      let inputWrap = `<div class="input-wrap">${select}</div>`;

      return `<div class="form-group ${selectAttrs.name}-wrap">${label}${inputWrap}</div>`;
    };

    /**
     * Generate some text inputs for field attributes, **will be replaced**
     * @param  {String} attribute
     * @param  {Object} values
     * @return {String}
     */
    let textAttribute = function(attribute, values) {
      if (opts.typeUserAttrs[values.type] && opts.typeUserAttrs[values.type][attribute]) {
        return;
      }

      let placeholderFields = [
        'text',
        'textarea',
        'select',
        'autocomplete'
      ];

      let noName = [
        'header',
        'paragraph'
      ];

      let textArea = ['paragraph'];

      let attrVal = values[attribute] || '';
      let attrLabel = i18n[attribute];
      if (attribute === 'label' && utils.inArray(values.type, textArea)) {
        attrLabel = i18n.content;
      }

      if (subtypes.header) {
        noName = noName.concat(subtypes.header);
      }

      let placeholders = i18n.placeholders;
      let placeholder = placeholders[attribute] || '';
      let attributefield = '';
      let noMakeAttr = [];

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

        let visibility = 'block';
        if (attribute === 'value') {
          visibility = values.subtype && values.subtype === 'quill' && 'none';
        }

        attributefield = `<div class="form-group ${attribute}-wrap" style="display: ${visibility}">${attributeLabel} ${inputWrap}</div>`;
      }

      return attributefield;
    };

    let requiredField = function(values) {
      let noRequire = [
          'header',
          'paragraph',
          'button'
        ];
      let noMake = [];
      let requireField = '';

      if (utils.inArray(values.type, noRequire)) {
        noMake.push(true);
      }
      if (!noMake.some(elem => elem === true)) {
        requireField = boolAttribute('required', values, {first: i18n.required});
      }

      return requireField;
    };

    // Append the new field to the editor
    let appendNewField = function(values, isNew = true) {
      let type = values.type || 'text';
      let label = values.label || i18n[type] || i18n.label;
      let delBtn = m('a', i18n.remove, {
          id: 'del_' + lastID,
          className: 'del-button btn delete-confirm',
          title: i18n.removeMessage
        });
      let toggleBtn = m('a', null, {
        id: lastID + '-edit',
        className: 'toggle-form btn icon-pencil',
        title: i18n.hide
      });
      let copyBtn = m('a', i18n.copyButton, {
        id: lastID + '-copy',
        className: 'copy-button btn icon-copy',
        title: i18n.copyButtonTooltip
      });

      let liContents = m(
        'div', [toggleBtn, copyBtn, delBtn], {className: 'field-actions'}
      ).outerHTML;

      // Field preview Label
      liContents += `<label class="field-label">${label}</label>`;

      if (values.description) {
        let attrs = {
          className: 'tooltip-element',
          tooltip: values.description
        };
        liContents += `<span ${utils.attrString(attrs)}>?</span>`;
      }

      let requiredDisplay = values.required ? 'style="display:inline"' : '';
      liContents += `<span class="required-asterisk" ${requiredDisplay}> *</span>`;

      liContents += m('div', '', {className: 'prev-holder'}).outerHTML;
      liContents += `<div id="${lastID}-holder" class="frm-holder">`;
      liContents += '<div class="form-elements">';

      liContents += advFields(values);
      liContents += m('a', i18n.close, {className: 'close-field'}).outerHTML;

      liContents += '</div>';
      liContents += '</div>';

      let field = m('li', liContents, {
          'class': type + '-field form-field',
          'type': type,
          id: lastID
        });
      let $li = $(field);

      $li.data('fieldData', {attrs: values});

      if (typeof _helpers.stopIndex !== 'undefined') {
        $('> li', $sortableFields).eq(_helpers.stopIndex).before($li);
      } else {
        $sortableFields.append($li);
      }

      $('.sortable-options', $li)
      .sortable({update: () => _helpers.updatePreview($li)});

      _helpers.updatePreview($li);

      if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
        opts.typeUserEvents[type].onadd(field);
      }

      if (opts.editOnAdd && isNew) {
        _helpers.closeAllEdit();
        _helpers.toggleEdit(lastID, false);
      }

      lastID = _helpers.incrementId(lastID);
    };

    // Select field html, since there may be multiple
    let selectFieldOptions = function(name, optionData, multipleSelect) {
      let optionInputType = {
          selected: (multipleSelect ? 'checkbox' : 'radio')
        };
      let optionDataOrder = [
        'value',
        'label',
        'selected'
      ];
      let optionInputs = [];
      let optionTemplate = {selected: false, label: '', value: ''};

      optionData = Object.assign(optionTemplate, optionData);

      for (let i = optionDataOrder.length - 1; i >= 0; i--) {
        let prop = optionDataOrder[i];
        if (optionData.hasOwnProperty(prop)) {
          let attrs = {
            type: optionInputType[prop] || 'text',
            'class': 'option-' + prop,
            value: optionData[prop],
            name: name + '-option'
          };

          if (i18n.placeholders[prop]) {
            attrs.placeholder = i18n.placeholders[prop];
          }

          if (prop === 'selected' && optionData.selected === true) {
            attrs.checked = optionData.selected;
          }

          optionInputs.push(utils.markup('input', null, attrs));
        }
      }

      let removeAttrs = {
        className: 'remove btn',
        title: i18n.removeMessage
      };
      optionInputs.push(utils.markup('a', i18n.remove, removeAttrs));

      let field = utils.markup('li', optionInputs);

      return field.outerHTML;
    };

    let cloneItem = function cloneItem(currentItem) {
      let currentId = currentItem.attr('id');
      let type = currentItem.attr('type');
      let ts = new Date().getTime();
      let cloneName = type + '-' + ts;
      let $clone = currentItem.clone();

      $clone.find('[id]').each(function() {
       this.id = this.id.replace(currentId, lastID);
      });

      $clone.find('[for]').each(function() {
       this.setAttribute('for', this.getAttribute('for').replace(currentId, lastID));
      });

      $clone.each(function() {
        $('e:not(.form-elements)').each(function() {
          let newName = this.getAttribute('name');
          newName = newName.substring(0, (newName.lastIndexOf('-') + 1));
          newName = newName + ts.toString();
          this.setAttribute('name', newName);
        });
      });

      $clone.find('.form-elements').find(':input').each(function() {
        if (this.getAttribute('name') === 'name') {
          let newVal = this.getAttribute('value');
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
      let $field = $(this).parents('.form-field:eq(0)');
      e.preventDefault();
      let optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
      if (optionsCount <= 2) {
        opts.notify.error('Error: ' + i18n.minOptionMessage);
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
      let $input = $(this);
      if (e.handled !== true) {
        if ($input.attr('type') === 'checkbox') {
          $input.trigger('click');
        } else {
          $input.focus();
          let fieldVal = $input.val();
          $input.val(fieldVal);
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
        let targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
        _helpers.toggleEdit(targetID);
        e.handled = true;
      } else {
        return false;
      }
    });

    $sortableFields.on('change', '[name="subtype"]', (e) => {
      const $field = $(e.target).closest('li.form-field');
      const $valWrap = $('.value-wrap', $field);
      $valWrap.toggle(e.target.value !== 'quill');
    });

    $sortableFields.on('change', '.prev-holder input, .prev-holder select', e => {
      let prevOptions;
      if (e.target.classList.contains('other-option')) {
        return;
      }
      let field = $(e.target).closest('li.form-field')[0];
      if (utils.inArray(field.type, ['select', 'checkbox-group', 'radio-group'])) {
        let options = field.getElementsByClassName('option-value');
        if (field.type === 'select') {
          utils.forEach(options, i => {
            let selectedOption = options[i].parentElement.childNodes[0];
            selectedOption.checked = e.target.value === options[i].value;
          });
        } else {
          prevOptions = document.getElementsByName(e.target.name);
          utils.forEach(prevOptions, i => {
            let selectedOption = options[i].parentElement.childNodes[0];
            selectedOption.checked = prevOptions[i].checked;
          });
        }
      } else {
        document.getElementById('value-' + field.id).value = e.target.value;
      }

      _helpers.save();
    });

    // update preview to label
    $sortableFields.on('keyup change', '[name="label"]', function(e) {
      $('.field-label', $(e.target).closest('li')).text($(e.target).val());
    });

    // remove error styling when users tries to correct mistake
    $sortableFields.delegate('input.error', 'keyup', function(e) {
      $(e.target).removeClass('error');
    });

    // update preview for description
    $sortableFields.on('keyup', 'input[name="description"]', function(e) {
      let $field = $(e.target).parents('.form-field:eq(0)');
      let closestToolTip = $('.tooltip-element', $field);
      let ttVal = $(e.target).val();
      if (ttVal !== '') {
        if (!closestToolTip.length) {
          let tt = `<span class="tooltip-element" tooltip="${ttVal}">?</span>`;
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
        e.target.type = newType;
      });
    });

    // format name attribute
    $sortableFields.on('blur', 'input.fld-name', function(e) {
      e.target.value = _helpers.safename(e.target.value);
      if (e.target.value === '') {
        $(e.target)
        .addClass('field-error')
        .attr('placeholder', i18n.cannotBeEmpty);
      } else {
        $(e.target).removeClass('field-error');
      }
    });

    $sortableFields.on('blur', 'input.fld-maxlength', e => {
      e.target.value = _helpers.forceNumber(e.target.value);
    });

    // Copy field
    $sortableFields.on('click touchstart', '.icon-copy', function(e) {
      e.preventDefault();
      let currentItem = $(e.target).parent().parent('li');
      let $clone = cloneItem(currentItem);
      $clone.insertAfter(currentItem);
      _helpers.updatePreview($clone);
      _helpers.save();
    });

    // Delete field
    $sortableFields.on('click touchstart', '.delete-confirm', function(e) {
      e.preventDefault();

      const buttonPosition = e.target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const coords = {
          pageX: buttonPosition.left + (buttonPosition.width / 2),
          pageY: (buttonPosition.top - bodyRect.top) - 12
        };

      let deleteID = $(e.target).parents('.form-field:eq(0)').attr('id');
      const $field = $(document.getElementById(deleteID));

      document.addEventListener('modalClosed', function() {
        $field.removeClass('deleting');
      }, false);

      // Check if user is sure they want to remove the field
      if (opts.fieldRemoveWarn) {
        let warnH3 = utils.markup('h3', i18n.warning);
        let warnMessage = utils.markup('p', i18n.fieldRemoveWarning);
        _helpers.confirm([warnH3, warnMessage], () =>
          _helpers.removeField(deleteID), coords);
        $field.addClass('deleting');
      } else {
        _helpers.removeField(deleteID);
      }
    });

    // Update button style selection
    $sortableFields.on('click', '.style-wrap button', e => {
      const $button = $(e.target);
      let styleVal = $button.val();
      let $btnStyle = $button.parent().prev('.btn-style');
      $btnStyle.val(styleVal);
      $button.siblings('.btn').removeClass('selected');
      $button.addClass('selected');
      _helpers.updatePreview($btnStyle.closest('.form-field'));
      _helpers.save();
    });

    // Attach a callback to toggle required asterisk
    $sortableFields.on('click', '.fld-required', e => {
      $(e.target).closest('.form-field').find('.required-asterisk').toggle();
    });

    // Attach a callback to toggle roles visibility
    $sortableFields.on('click', 'input.fld-access', function(e) {
      let roles = $(e.target).closest('.form-field').find('.available-roles');
      let enableRolesCB = $(e.target);
      roles.slideToggle(250, function() {
        if (!enableRolesCB.is(':checked')) {
          $('input[type="checkbox"]', roles).removeAttr('checked');
        }
      });
    });

    // Attach a callback to add new options
    $sortableFields.on('click', '.add-opt', function(e) {
      e.preventDefault();
      let $optionWrap = $(e.target).closest('.field-options');
      let $multiple = $('[name="multiple"]', $optionWrap);
      let $firstOption = $('.option-selected:eq(0)', $optionWrap);
      let isMultiple = false;

      if ($multiple.length) {
        isMultiple = $multiple.prop('checked');
      } else {
        isMultiple = ($firstOption.attr('type') === 'checkbox');
      }

      let name = $firstOption.attr('name');

      $('.sortable-options', $optionWrap).append(selectFieldOptions(name, false, isMultiple));
    });

    $sortableFields.on('mouseover mouseout', '.remove, .del-button', e =>
      $(e.target).closest('li').toggleClass('delete'));

    loadFields();

    $sortableFields.css('min-height', $cbUL.height());

    // If option set, controls will remain in view in editor
    if (opts.stickyControls.enable) {
      _helpers.stickyControls($sortableFields);
    }

    document.dispatchEvent(formBuilder.events.loaded);

    // Make actions accessible
    formBuilder.actions = {
      clearFields: _helpers.removeAllfields,
      showData: _helpers.showData,
      save: _helpers.save,
      addField: (field, index) => {
        _helpers.stopIndex = formBuilder.stage.children.length ? index : undefined;
        prepFieldVars(field);
        document.dispatchEvent(formBuilder.events.fieldAdded);
      },
      removeField: _helpers.removeField,
      getData: (type = 'js') => {
        const stage = formBuilder.stage;
        const h = _helpers;
        const data = {
          js: () => h.prepData(stage),
          xml: () => h.xmlSave(stage),
          json: () => window.JSON.stringify(h.prepData(stage), null, '\t')
        };

        return data[type]();
      },
      setData: formData => {
        _helpers.removeAllfields(false);
        loadFields();
      }
    };

    formBuilder.i18n = {
      setLang: async locale => {
        let newLang = await formBuilder.mi18n.setCurrent.call(formBuilder.mi18n, locale);
      }
    };

    return formBuilder;
  };

  $.fn.formBuilder = function(options) {
    if (!options) {
      options = {};
    }
    let elems = this;
    return elems.each((i) => {
      let formBuilder = new FormBuilder(options, elems[i]);
      $(elems[i]).data('formBuilder', formBuilder);

      return formBuilder;
    });
  };
})(jQuery);
