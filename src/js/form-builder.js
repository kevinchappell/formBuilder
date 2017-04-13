import Dom from './dom';
import {
  Data,
  availablefields as aFields
} from './data';
// import mi18n from 'mi18n';
import mi18n from '../../../../../../Draggable/mI18N/mi18n/src/mi18n.js';
import utils from './utils';
import events from './events';
import Helpers from './helpers';
import {defaultOptions, defaultI18n, config} from './config';

require('./polyfills.js').default;

let instanceTime = new Date().getTime();

const FormBuilder = function(opts, element) {
  const formBuilder = this;
  const i18n = mi18n.current;
  const formID = 'frmb-' + instanceTime++;
  const data = new Data(formID);
  const d = new Dom(formID);
  const helpers = new Helpers(formID);
  const m = utils.markup;

  const originalOpts = opts;

  opts = helpers.processOptions(opts);

  const subtypes = config.subtypes = helpers.processSubtypes(opts.subtypes);
  helpers.editorUI(formID);

  let $stage = $(d.stage);

  data.layout = helpers.editorLayout(opts.controlPosition);
  data.formID = formID;
  data.lastID = `${data.formID}-fld-1`;

  let frmbFields = helpers.orderFields(opts.fields);

  if (opts.disableFields) {
    // remove disabledFields
    frmbFields = frmbFields.filter(function(field) {
      return !utils.inArray(field.attrs.type, opts.disableFields);
    });
  }

  if (opts.sortableControls) {
    d.controls.classList.add('sort-enabled');
  }

  let $cbUL = $(d.controls);

  // Loop through fmrbFields
  utils.forEach(frmbFields, (i) => {
    let {attrs, ...field} = frmbFields[i];
    let icon = attrs.icon || `icon-${attrs.name || attrs.type}`;
    let newFieldControl = m('li',
      m('span', field.label),
      {className: `${icon} input-control input-control-${i}`}
    );

    aFields[attrs.type] = frmbFields[i];
    newFieldControl.dataset.type = attrs.type;
    d.controls.appendChild(newFieldControl);
  });

  if (opts.inputSets.length) {
    $('<li/>', {'class': 'fb-separator'}).html('<hr>').appendTo($cbUL);
    opts.inputSets.forEach((set, i) => {
      set.name = set.name || helpers.makeClassName(set.label);
      let inputSet = m('li', set.label, {
        className: `input-set-control input-set-${i}`,
        type: set.name
      });
      $(inputSet).appendTo($cbUL);
    });
  }

  // Sortable fields
  $stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: (evt, ui) => helpers.beforeStop.call(helpers, evt, ui),
    start: (evt, ui) => helpers.startMoving.call(helpers, evt, ui),
    stop: (evt, ui) => helpers.stopMoving.call(helpers, evt, ui),
    cancel: 'input, select, .disabled-field, .form-group, .btn',
    placeholder: 'frmb-placeholder'
  });

  // ControlBox with different fields
  $cbUL.sortable({
    helper: 'clone',
    opacity: 0.9,
    connectWith: $stage,
    cancel: '.fb-separator',
    cursor: 'move',
    scroll: false,
    placeholder: 'ui-state-highlight',
    start: (evt, ui) => helpers.startMoving.call(helpers, evt, ui),
    stop: (evt, ui) => helpers.stopMoving.call(helpers, evt, ui),
    revert: 150,
    beforeStop: (evt, ui) => helpers.beforeStop.call(helpers, evt, ui),
    distance: 3,
    update: function(event, ui) {
      if (helpers.doCancel) {
        return false;
      }
      if (ui.item.parent()[0] === $stage[0]) {
        processControl(ui.item);
        helpers.doCancel = true;
      } else {
        helpers.setFieldOrder($cbUL);
        helpers.doCancel = !opts.sortableControls;
      }
    }
  });

  let processControl = control => {
    if (control[0].classList.contains('input-set-control')) {
      let inputSets = [];
      let inputSet = opts.inputSets.filter(set =>
        set.name === control[0].type)[0];
      if (inputSet.showHeader) {
        let header = {
            type: 'header',
            subtype: 'h2',
            id: inputSet.name,
            label: inputSet.label
          };
          inputSets.push(header);
      }
      inputSets.push(...inputSet.fields);
      inputSets.forEach(field => {
        prepFieldVars(field, true);
        if (helpers.stopIndex || helpers.stopIndex === 0) {
          helpers.stopIndex++;
        }
      });
    } else {
      prepFieldVars(control, true);
    }
  };

  d.editorWrap = m('div', null, {
    id: `${data.formID}-form-wrap`,
    className: 'form-wrap form-builder' + utils.mobileClass()
  });

  let $editorWrap = $(d.editorWrap);

  let cbWrap = m('div', d.controls, {
    id: `${data.formID}-cb-wrap`,
    className: 'cb-wrap ' + data.layout.controls
  });

  if (opts.showActionButtons) {
    const buttons = opts.actionButtons.map(btnData => {
      if (btnData.id && opts.disabledActionButtons.indexOf(btnData.id) === -1) {
        return helpers.processActionButtons(btnData);
      }
    });
    const formActions = d.formActions = m('div', buttons, {
      className: 'form-actions btn-group'
    });

    cbWrap.appendChild(formActions);
  }

  let stageWrap = m('div', [d.stage, cbWrap], {
    id: `${data.formID}-stage-wrap`,
    className: 'stage-wrap ' + data.layout.stage
  });

  $editorWrap.append(stageWrap, cbWrap);

  if (element.type !== 'textarea') {
    $(element).append($editorWrap);
  } else {
    $(element).replaceWith($editorWrap);
  }

  let saveAndUpdate = utils.debounce(evt => {
    if (evt) {
      if (evt.type === 'keyup' && evt.target.name === 'className') {
        return false;
      }

      let $field = $(evt.target).closest('.form-field');
      helpers.updatePreview($field);
      helpers.save.call(helpers);
    }
  });

  // Save field on change
  $stage.on('change blur keyup', '.form-elements input, .form-elements select, .form-elements textarea', saveAndUpdate);

  $('li', d.controls).click(evt => {
    let $control = $(evt.target).closest('.input-control');
    helpers.stopIndex = undefined;
    processControl($control);
    helpers.save.call(helpers);
  });

  // Add append and prepend options if necessary
  let nonEditableFields = () => {
    let cancelArray = [];
    const disabledField = type =>
    utils.markup('li', opts[type], {
      className: `disabled-field form-${type}`
    });

    if (opts.prepend && !$('.disabled-field.form-prepend', d.stage).length) {
      cancelArray.push(true);
      $stage.prepend(disabledField('prepend'));
    }

    if (opts.append && !$('.disabled-field.form-.append', d.stage).length) {
      cancelArray.push(true);
      $stage.append(disabledField('append'));
    }

    helpers.disabledTT(d.stage);
    return cancelArray.some(elem => elem === true);
  };

  let prepFieldVars = function($field, isNew = false) {
    let field = {};
    if ($field instanceof jQuery) {
      let fieldData = aFields[$field[0].dataset.type];
      if (fieldData) {
        field = fieldData.attrs;
        field.label = fieldData.label;
      } else { // is dataType XML
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

    if (!field.name) {
      field.name = utils.nameAttr(field);
    }

    if (isNew && utils.inArray(field.type,
      ['text',
       'number',
       'file',
       'date',
       'select',
       'textarea',
       'autocomplete'])) {
      field.className = field.className || 'form-control';
    } else {
      field.className = field.className;
    }

    let match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
    if (match) {
      field.style = match[1];
    }

    utils.escapeAttrs(field);

    appendNewField(field, isNew);

    if (isNew) {
      document.dispatchEvent(events.fieldAdded);
    }

    stageWrap.classList.remove('empty');
  };

  // Parse saved XML template data
  let loadFields = function(formData) {
    formData = helpers.getData(formData);
    if (formData && formData.length) {
      for (let i = 0; i < formData.length; i++) {
        prepFieldVars(formData[i]);
      }
      stageWrap.classList.remove('empty');
    } else if (opts.defaultFields && opts.defaultFields.length) {
      // Load default fields if none are set
      opts.defaultFields.forEach(field => prepFieldVars(field));
      stageWrap.classList.remove('empty');
    } else if (!opts.prepend && !opts.append) {
      stageWrap.classList.add('empty');
      stageWrap.dataset.content = i18n.getStarted;
    }
    helpers.save.call(helpers);

    if (nonEditableFields()) {
      stageWrap.classList.remove('empty');
    }
  };

  /**
   * Add data for field with options [select, checkbox-group, radio-group]
   *
   * @todo   refactor this nasty ~crap~ code, its actually painful to look at
   * @param  {Object} values
   * @return {String} field options markup
   */
  let fieldOptions = function(fieldData) {
    let optionActions = [
        utils.markup('a', i18n.addOption, {className: 'add add-opt'})
      ];
    let fieldOptions = [
      `<label class="false-label">${i18n.selectOptions}</label>`
    ];
    const isMultiple = fieldData.multiple || (fieldData.type === 'checkbox-group');
    const optionDataTemplate = label => {
      let optionData = {
          label,
          value: utils.hyphenCase(label)
      };

      if (fieldData.type !== 'autocomplete') {
        optionData.selected = false;
      }

      return optionData;
    };

    if (!fieldData.values || !fieldData.values.length) {
      let defaultOptCount = utils.inArray(fieldData.type, ['checkbox-group', 'checkbox']) ? [1] : [1, 2, 3];
      fieldData.values = defaultOptCount.map(function(index) {
        let label = `${i18n.option} ${index}`;
        return optionDataTemplate(label);
      });

    let firstOption = fieldData.values[0];
      if (firstOption.hasOwnProperty('selected')) {
        firstOption.selected = true;
      }
    } else {
      // ensure option data is has all required keys
      fieldData.values.forEach(option => Object.assign({}, {selected: false}, option));
    }

    fieldOptions.push('<div class="sortable-options-wrap">');

    fieldOptions.push('<ol class="sortable-options">');
    utils.forEach(fieldData.values, i => {
      fieldOptions.push(selectFieldOptions(fieldData.name, fieldData.values[i], isMultiple));
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

    if (utils.inArray(values.type, ['checkbox', 'checkbox-group'])) {
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
        let roleId = `fld-${data.lastID}-roles-${key}`;
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
        id: name + '-' + data.lastID,
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
      id: name + '-' + data.lastID,
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
      return `<label for="${name}-${data.lastID}">${txt}</label>`;
    };
    let checked = (values[name] !== undefined ? 'checked' : '');
    let input = `<input type="checkbox" class="fld-${name}" name="${name}" value="true" ${checked} id="${name}-${data.lastID}"/> `;
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
      let styles = i18n.styles.btn;
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
    let placeholder = i18n[`placeholder.${attribute}`];
    let inputConfig = {
      type: 'number',
      value: attrVal,
      name: attribute,
      min: '0',
      placeholder: placeholder,
      className: `fld-${attribute} form-control`,
      id: `${attribute}-${data.lastID}`
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
        id: attribute + '-' + data.lastID,
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

    let placeholder = i18n[`placeholder.${attribute}`] || '';
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
        id: `${attribute}-${data.lastID}`
      };
      let attributeLabel = `<label for="${inputConfig.id}">${attrLabel}</label>`;

      if (attribute === 'label') {
        attributefield += `<div contenteditable ${utils.attrString(inputConfig)}>${attrVal}</div>`;
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
        id: 'del_' + data.lastID,
        className: 'del-button btn delete-confirm',
        title: i18n.removeMessage
      });
    let toggleBtn = m('a', null, {
      id: data.lastID + '-edit',
      className: 'toggle-form btn icon-pencil',
      title: i18n.hide
    });
    let copyBtn = m('a', null, {
      id: data.lastID + '-copy',
      className: 'copy-button btn icon-copy',
      title: i18n.copyButtonTooltip
    });

    let liContents = m(
      'div', [toggleBtn, copyBtn, delBtn], {className: 'field-actions'}
    ).outerHTML;

    // Field preview Label
    liContents += `<label class="field-label">${utils.parsedHtml(label)}</label>`;

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
    liContents += `<div id="${data.lastID}-holder" class="frm-holder">`;
    liContents += '<div class="form-elements">';

    liContents += advFields(values);
    liContents += m('a', i18n.close, {className: 'close-field'}).outerHTML;

    liContents += '</div>';
    liContents += '</div>';

    let field = m('li', liContents, {
        'class': type + '-field form-field',
        'type': type,
        id: data.lastID
      });
    let $li = $(field);

    $li.data('fieldData', {attrs: values});

    if (typeof helpers.stopIndex !== 'undefined') {
      $('> li', d.stage).eq(helpers.stopIndex).before($li);
    } else {
      $stage.append($li);
    }

    $('.sortable-options', $li)
    .sortable({update: () => helpers.updatePreview($li)});

    helpers.updatePreview($li);

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field);
    }

    if (opts.editOnAdd && isNew) {
      helpers.closeAllEdit();
      helpers.toggleEdit(data.lastID, false);
    }

    data.lastID = helpers.incrementId(data.lastID);
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
          className: 'option-' + prop,
          value: optionData[prop],
          name: name + '-option'
        };

        attrs.placeholder = i18n[`placeholder.${prop}`] || '';

        if (prop === 'selected' && optionData.selected === true) {
          attrs.checked = optionData.selected;
        }

        optionInputs.push(m('input', null, attrs));
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

    $clone.find('[id]').each((i, elem) => {
     elem.id = elem.id.replace(currentId, data.lastID);
    });

    $clone.find('[for]').each(function() {
     this.setAttribute('for', this.getAttribute('for').replace(currentId, data.lastID));
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

    $clone.attr('id', data.lastID);
    $clone.attr('name', cloneName);
    $clone.addClass('cloned');
    $('.sortable-options', $clone).sortable();

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0]);
    }

    data.lastID = helpers.incrementId(data.lastID);
    return $clone;
  };

  // ---------------------- UTILITIES ---------------------- //

  // delete options
  $stage.on('click touchstart', '.remove', function(e) {
    let $field = $(this).parents('.form-field:eq(0)');
    e.preventDefault();
    let optionsCount = $(this).parents('.sortable-options:eq(0)').children('li').length;
    if (optionsCount <= 2) {
      opts.notify.error('Error: ' + i18n.minOptionMessage);
    } else {
      $(this).parent('li').slideUp('250', function() {
        $(this).remove();
        helpers.updatePreview($field);
        helpers.save.call(helpers);
      });
    }
  });

  // touch focus
  $stage.on('touchstart', 'input', function(e) {
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
  $stage.on('click touchstart', '.toggle-form, .close-field', function(e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.handled !== true) {
      let targetID = $(e.target).parents('.form-field:eq(0)').attr('id');
      helpers.toggleEdit(targetID);
      e.handled = true;
    } else {
      return false;
    }
  });

  $stage.on('change', '[name="subtype"]', (e) => {
    const $field = $(e.target).closest('li.form-field');
    const $valWrap = $('.value-wrap', $field);
    $valWrap.toggle(e.target.value !== 'quill');
  });

  $stage.on('change', '.prev-holder input, .prev-holder select, textarea', e => {
    let prevOptions;
    if (e.target.classList.contains('other-option')) {
      return;
    }
    let field = utils.closest(e.target, '.form-field');
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
      let fieldVal = document.getElementById('value-' + field.id);
      if(fieldVal) {
        fieldVal.value = e.target.value;
      }
    }

    helpers.save.call(helpers);
  });

  // update preview to label
  utils.addEventListeners(d.stage, 'keyup change', e => {
    if (!e.target.classList.contains('fld-label')) return;
    let value = e.target.value || e.target.innerHTML;
    let label = utils.closest(e.target, '.form-field').querySelector('.field-label');
    label.innerHTML = utils.parsedHtml(value);
  });

  // remove error styling when users tries to correct mistake
  $stage.on('keyup', 'input.error', function(e) {
    $(e.target).removeClass('error');
  });

  // update preview for description
  $stage.on('keyup', 'input[name="description"]', function(e) {
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

  /**
   * Toggle multiple select options
   * @param  {Object} e click event
   * @return {String} newType
   */
  $stage.on('change', '.fld-multiple', e => {
    let newType = e.target.checked ? 'checkbox' : 'radio';
    let $options = $('.option-selected', $(e.target).closest('.form-elements'));
    $options.each(i => $options[i].type = newType);
    return newType;
  });

  // format name attribute
  $stage.on('blur', 'input.fld-name', function(e) {
    e.target.value = utils.safename(e.target.value);
    if (e.target.value === '') {
      $(e.target)
      .addClass('field-error')
      .attr('placeholder', i18n.cannotBeEmpty);
    } else {
      $(e.target).removeClass('field-error');
    }
  });

  $stage.on('blur', 'input.fld-maxlength', e => {
    e.target.value = utils.forceNumber(e.target.value);
  });

  // Copy field
  $stage.on('click touchstart', '.icon-copy', function(e) {
    e.preventDefault();
    let currentItem = $(e.target).parent().parent('li');
    let $clone = cloneItem(currentItem);
    $clone.insertAfter(currentItem);
    helpers.updatePreview($clone);
    helpers.save.call(helpers);
  });

  // Delete field
  $stage.on('click touchstart', '.delete-confirm', e => {
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
      helpers.confirm([warnH3, warnMessage], () =>
        helpers.removeField(deleteID), coords);
      $field.addClass('deleting');
    } else {
      helpers.removeField(deleteID);
    }
  });

  // Update button style selection
  $stage.on('click', '.style-wrap button', e => {
    const $button = $(e.target);
    let styleVal = $button.val();
    let $btnStyle = $button.parent().prev('.btn-style');
    $btnStyle.val(styleVal);
    $button.siblings('.btn').removeClass('selected');
    $button.addClass('selected');
    helpers.updatePreview($btnStyle.closest('.form-field'));
    helpers.save.call(helpers);
  });

  // Attach a callback to toggle required asterisk
  $stage.on('click', '.fld-required', e => {
    $(e.target).closest('.form-field').find('.required-asterisk').toggle();
  });

  // Attach a callback to toggle roles visibility
  $stage.on('click', 'input.fld-access', function(e) {
    let roles = $(e.target).closest('.form-field').find('.available-roles');
    let enableRolesCB = $(e.target);
    roles.slideToggle(250, function() {
      if (!enableRolesCB.is(':checked')) {
        $('input[type="checkbox"]', roles).removeAttr('checked');
      }
    });
  });

  // Attach a callback to add new options
  $stage.on('click', '.add-opt', function(e) {
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

  $stage.on('mouseover mouseout', '.remove, .del-button', e =>
    $(e.target).closest('li').toggleClass('delete'));

  loadFields();

  $stage.css('min-height', $cbUL.height());

  // If option set, controls will remain in view in editor
  if (opts.stickyControls.enable) {
    helpers.stickyControls($stage);
  }

  document.dispatchEvent(events.loaded);

  // Make actions accessible
  formBuilder.actions = {
    clearFields: animate => helpers.removeAllFields(d.stage, animate),
    showData: () => helpers.showData.call(helpers),
    save: helpers.save,
    addField: (field, index) => {
      helpers.stopIndex = data.formData.length ? index : undefined;
      prepFieldVars(field);
      document.dispatchEvent(events.fieldAdded);
    },
    removeField: helpers.removeField,
    getData: (type = 'js') => {
      const stage = d.stage;
      const h = helpers;
      const data = {
        js: () => h.prepData(stage),
        xml: () => h.xmlSave(stage),
        json: () => window.JSON.stringify(h.prepData(stage), null, '\t')
      };

      return data[type]();
    },
    setData: formData => {
      helpers.removeAllFields(d.stage, false);
      loadFields(formData);
    },
    setLang: async locale => {
      await mi18n.setCurrent.call(mi18n, locale);
      d.empty(element);
      let formBuilder = new FormBuilder(originalOpts, element);
      $(element).data('formBuilder', formBuilder);
    }
  };

  formBuilder.formData = data.formData;

  return formBuilder;
};


(function( $ ) {
  $.fn.formBuilder = function(options) {
    if (!options) {
      options = {};
    }
    let elems = this;
    let {i18n, ...opts} = $.extend({}, defaultOptions, options, true);
    config.opts = opts;
    let i18nOpts = $.extend({}, defaultI18n, i18n, true);
    let instance = {
      actions: {
        getData: null,
        setData: null,
        save: null,
        showData: null,
        setLang: null,
        addField: null,
        removeField: null,
        clearFields: null
      },
      formData: [],
      promise: new Promise(function(resolve, reject) {
        mi18n.init(i18nOpts).then(() => {
          elems.each(i => {
            let formBuilder = new FormBuilder(opts, elems[i]);
            $(elems[i]).data('formBuilder', formBuilder);
          });
          let fbInstance = $(elems[0]).data('formBuilder');
          instance.actions = fbInstance.actions;
          instance.formData = fbInstance.formData;
          delete instance.promise;
          resolve(instance);
        }).catch(reject);
      })
    };

    return instance;
  };
})( jQuery );
