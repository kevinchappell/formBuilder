import 'babel-regenerator-runtime';
import '../sass/form-builder.scss';
import Dom from './dom';
import {remove} from './dom';
import {
  Data
} from './data';
import mi18n from 'mi18n';
import utils from './utils';
import events from './events';
import layout from './layout';
import Helpers from './helpers';
import {defaultOptions, defaultI18n, config, styles} from './config';
import control from './control';
import './control/index';
import controlCustom from './control/custom';

let instanceTime = new Date().getTime();

const FormBuilder = function(opts, element) {
  const formBuilder = this;
  const i18n = mi18n.current;
  const formID = 'frmb-' + instanceTime++;
  const data = new Data(formID);
  const d = new Dom(formID);

  // prepare a new layout object with appropriate templates
  if (!opts.layout) {
    opts.layout = layout;
  }
  const layoutEngine = new opts.layout(opts.layoutTemplates, true);

  // ability for controls to have their own configuration / options
  // of the format control identifier (type, or type.subtype): {options}
  control.controlConfig = opts.controlConfig || {};

  const h = new Helpers(formID, layoutEngine);
  const m = utils.markup;

  const originalOpts = opts;

  // load in any custom specified controls, or preloaded plugin controls
  control.loadCustom(opts.controls);

  // register any passed custom templates & fields
  if (Object.keys(opts.fields).length) {
    controlCustom.register(opts.templates, opts.fields);
  }

  opts = h.processOptions(opts);
  const subtypes = config.subtypes = h.processSubtypes(opts.subtypes);
  h.editorUI(formID);

  let $stage = $(d.stage);

  data.layout = h.editorLayout(opts.controlPosition);
  data.formID = formID;
  data.lastID = `${data.formID}-fld-1`;

  // retrieve a full list of loaded controls
  let controls = control.getRegistered();
  let customFields = controlCustom.getRegistered();
  if (customFields) {
    $.merge(controls, customFields);
  }


  // if we support rearranging control order, add classes to support this
  if (opts.sortableControls) {
    d.controls.classList.add('sort-enabled');
  }

  // DOM element to hold the list of controls
  let $cbUL = $(d.controls);

  // add each control to the interface
  let controlList = [];
  const allControls = {};

  for (let i = 0; i < controls.length; i++) {
    let type = controls[i];
    // first check if this is a custom control
    let custom = controlCustom.lookup(type);
    let controlClass;
    if (custom) {
      controlClass = custom.class;
    } else {
      custom = {};

      // determine the class, icon & label for this control
      controlClass = control.getClass(type);
      if (!controlClass || !controlClass.active(type)) {
        continue;
      }
    }
    let icon = custom.icon || controlClass.icon(type);
    let label = custom.label || controlClass.label(type);
    let iconClassName = !icon ? custom.iconClassName || `icon-${type.replace(/-[\d]{4}$/, '')}` : '';

    // if the class has specified a custom icon, inject it into the label
    if (icon) {
      label = `<span class="control-icon">${icon}</span>${label}`;
    }

    // build & insert the new list item to represent this control
    let newFieldControl = m('li',
      m('span', label),
      {className: `${iconClassName} input-control input-control-${i}`}
    );
    newFieldControl.dataset.type = type;
    controlList.push(type);
    allControls[type] = newFieldControl;
  }

  if (opts.inputSets.length) {
    opts.inputSets.forEach((set, i) => {
      set.name = set.name || utils.makeClassName(set.label);
      let inputSet = m('li', set.label, {
        className: `input-set-control input-set-${i}`
      });
      inputSet.dataset.type = set.name;
      controlList.push(set.name);
      allControls[set.name] = inputSet;
    });
  }

  // append controls to list
  h.orderFields(controlList).forEach(control => {
    if (allControls[control]) {
      d.controls.appendChild(allControls[control]);
    }
  });

  // Sortable fields
  $stage.sortable({
    cursor: 'move',
    opacity: 0.9,
    revert: 150,
    beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
    start: (evt, ui) => h.startMoving.call(h, evt, ui),
    stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
    cancel: [
      'input',
      'select',
      'textarea',
      '.disabled-field',
      '.form-elements',
      '.btn',
      'button'
    ].join(', '),
    placeholder: 'frmb-placeholder',
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
    start: (evt, ui) => h.startMoving.call(h, evt, ui),
    stop: (evt, ui) => h.stopMoving.call(h, evt, ui),
    revert: 150,
    beforeStop: (evt, ui) => h.beforeStop.call(h, evt, ui),
    distance: 3,
    update: function(event, ui) {
      if (h.doCancel) {
        return false;
      }

      if (ui.item.parent()[0] === d.stage) {
        h.doCancel = true;
        processControl(ui.item);
      } else {
        h.setFieldOrder($cbUL);
        h.doCancel = !opts.sortableControls;
      }
    }
  });

  let processControl = control => {
    if (control[0].classList.contains('input-set-control')) {
      let inputSets = [];
      let inputSet = opts.inputSets.find(set => (set.name === control[0].dataset.type));
      if (inputSet && inputSet.showHeader) {
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
        if (h.stopIndex || h.stopIndex === 0) {
          h.stopIndex++;
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
        return h.processActionButtons(btnData);
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
      h.updatePreview($field);
      h.save.call(h);
    }
  });

  let previewSelectors = [
    '.form-elements input',
    '.form-elements select',
    '.form-elements textarea'
  ].join(', ');

  // Save field on change
  $stage.on('change blur keyup', previewSelectors, saveAndUpdate);

  $('li', d.controls).click(evt => {
    let $control = $(evt.target).closest('li');
    h.stopIndex = undefined;
    processControl($control);
    h.save.call(h);
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

    h.disabledTT(d.stage);
    return cancelArray.some(elem => elem === true);
  };

  // builds the standard formbuilder datastructure for a feild definition
  let prepFieldVars = function($field, isNew = false) {
    let field = {};
    if ($field instanceof jQuery) {
      // get the default type etc & label for this field
      field.type = $field[0].dataset.type;
      if (field.type) {
        // check for a custom type
        let custom = controlCustom.lookup(field.type);
        if (custom) {
          field = Object.assign({}, custom);
        } else {
          let controlClass = control.getClass(field.type);
          field.label = controlClass.label(field.type);
        }

        // @todo: any other attrs ever set in aFields? value or selected?
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
    }

    let match = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(field.className);
    if (match) {
      field.style = match[1];
    }

    appendNewField(field, isNew);

    if (isNew) {
      document.dispatchEvent(events.fieldAdded);
    }

    stageWrap.classList.remove('empty');
  };

  // Parse saved XML template data
  let loadFields = function(formData) {
    formData = h.getData(formData);
    if (formData && formData.length) {
      for (let i = 0; i < formData.length; i++) {
        let fieldData = utils.trimObj(formData[i]);
        prepFieldVars(fieldData);
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

    if (nonEditableFields()) {
      stageWrap.classList.remove('empty');
    }
    h.save();
  };

  /**
   * Add data for field with options [select, checkbox-group, radio-group]
   *
   * @todo   refactor this nasty ~crap~ code, its actually painful to look at
   * @param  {Object} fieldData
   * @return {String} field options markup
   */
  let fieldOptions = function(fieldData) {
    let {type, values, name} = fieldData;
    let optionActions = [
        utils.markup('a', i18n.addOption, {className: 'add add-opt'})
      ];
    let fieldOptions = [
      `<label class="false-label">${i18n.selectOptions}</label>`
    ];
    const isMultiple = fieldData.multiple || (type === 'checkbox-group');
    const optionDataTemplate = label => {
      let optionData = {
          label,
          value: utils.hyphenCase(label)
      };

      if (type !== 'autocomplete') {
        optionData.selected = false;
      }

      return optionData;
    };

    if (!values || !values.length) {
      let defaultOptCount = [1, 2, 3];
      if (utils.inArray(type, ['checkbox-group', 'checkbox'])) {
        defaultOptCount = [1];
      }
      values = defaultOptCount.map(function(index) {
        let label = `${i18n.option} ${index}`;
        return optionDataTemplate(label);
      });

    let firstOption = values[0];
      if (firstOption.hasOwnProperty('selected')) {
        firstOption.selected = true;
      }
    } else {
      // ensure option data is has all required keys
      values.forEach(option => Object.assign({}, {selected: false}, option));
    }

    fieldOptions.push('<div class="sortable-options-wrap">');
      fieldOptions.push('<ol class="sortable-options">');
      utils.forEach(values, i => {
        fieldOptions.push(selectFieldOptions(name, values[i], isMultiple));
      });
      fieldOptions.push('</ol>');
      fieldOptions.push(utils.markup('div', optionActions, {
        className: 'option-actions'}).outerHTML);
    fieldOptions.push('</div>');

    return utils.markup('div', fieldOptions.join(''), {
      className: 'form-group field-options'}).outerHTML;
  };

  const defaultFieldAttrs = type => {
    const defaultAttrs = [
      'required',
      'label',
      'description',
      'placeholder',
      'className',
      'name',
      'access',
      'value'
    ];
    let noValFields = [
      'header',
      'paragraph',
      'file',
      'autocomplete'
    ].concat(d.optionFields);

    let valueField = !utils.inArray(type, noValFields);

    const typeAttrsMap = {
      autocomplete: defaultAttrs.concat([
        'options',
      ]),
      button: [
        'label',
        'subtype',
        'style',
        'className',
        'name',
        'value',
        'access',
      ],
      checkbox: [
        'required',
        'label',
        'description',
        'toggle',
        'inline',
        'className',
        'name',
        'access',
        'other',
        'options',
      ],
      text: defaultAttrs.concat([
        'subtype',
        'maxlength',
      ]),
      date: defaultAttrs,
      file: defaultAttrs.concat([
        'subtype',
        'multiple'
      ]),
      header: [
        'label',
        'subtype',
        'className',
        'access',
      ],
      hidden: [
        'name',
        'value',
        'access',
      ],
      paragraph: [
        'label',
        'subtype',
        'className',
        'access',
      ],
      number: defaultAttrs.concat([
        'min',
        'max',
        'step',
      ]),
      select: defaultAttrs.concat([
        'multiple',
        'options',
      ]),
      textarea: defaultAttrs.concat([
        'subtype',
        'maxlength',
        'rows',
      ]),

    };

    typeAttrsMap['checkbox-group'] = typeAttrsMap.checkbox;
    typeAttrsMap['radio-group'] = typeAttrsMap.checkbox;

    let typeAttrs = typeAttrsMap[type];

    if (type === 'radio-group') {
      utils.remove('toggle', typeAttrs);
    }

    // Help Text / Description Field
    if (utils.inArray(type, ['header', 'paragraph', 'button'])) {
      utils.remove('description', typeAttrs);
    }

    if (!valueField) {
      utils.remove('value', typeAttrs);
    }

    return typeAttrs || defaultAttrs;
  };

  /**
   * Build the editable properties for the field
   * @param  {object} values configuration object for advanced fields
   * @return {String}        markup for advanced fields
   */
  let advFields = values => {
    let {type} = values;
    let advFields = [];
    let fieldAttrs = defaultFieldAttrs(type);
    const advFieldMap = {
      required: () => requiredField(values),
      toggle: () => boolAttribute('toggle', values, {first: i18n.toggle}),
      inline: () => {
        let labels = {
          first: i18n.inline,
          second: mi18n.get('inlineDesc', type.replace('-group', ''))
        };

        return boolAttribute('inline', values, labels);
      },
      label: () => textAttribute('label', values),
      description: () => textAttribute('description', values),
      subtype: () => selectAttribute('subtype', values, subtypes[type]),
      style: () => btnStyles(values.style),
      placeholder: () => textAttribute('placeholder', values),
      rows: () => numberAttribute('rows', values),
      className: () => textAttribute('className', values),
      name: () => textAttribute('name', values),
      value: () => textAttribute('value', values),
      maxlength: () => numberAttribute('maxlength', values),
      access: () => {
        let rolesDisplay = values.role ? 'style="display:block"' : '';
        let availableRoles = [
          `<div class="available-roles" ${rolesDisplay}>`
        ];
        for (key in opts.roles) {
          if (opts.roles.hasOwnProperty(key)) {
            let roleId = `fld-${data.lastID}-roles-${key}`;
            let cbAttrs = {
              type: 'checkbox',
              name: 'roles[]',
              value: key,
              id: roleId,
              className: 'roles-field'
            };
            if (utils.inArray(key, roles)) {
              cbAttrs.checked = 'checked';
            }

            availableRoles.push(`<label for="${roleId}">`);
            availableRoles.push(h.input(cbAttrs).outerHTML);
            availableRoles.push(` ${opts.roles[key]}</label>`);
          }
        }
        availableRoles.push('</div>');
        let accessLabels = {
          first: i18n.roles,
          second: i18n.limitRole,
          content: availableRoles.join('')
        };

        return boolAttribute('access', values, accessLabels);
      },
      other: () => boolAttribute('other', values, {
        first: i18n.enableOther,
        second: i18n.enableOtherMsg
      }),
      options: () => fieldOptions(values)
    };
    let key;
    let roles = values.role !== undefined ? values.role.split(',') : [];
    let numAttrs = ['min', 'max', 'step'];

    if (type === 'number') {
      numAttrs.forEach(numAttr => {
        advFieldMap[numAttr] = () => numberAttribute(numAttr, values);
      });
    }

    if (type === 'file') {
      advFieldMap['multiple'] = () => {
        let labels = {
          first: i18n.multipleFiles,
          second: i18n.allowMultipleFiles
        };
        return boolAttribute('multiple', values, labels);
      };
    }

    if (type === 'select') {
      advFieldMap['multiple'] = () => {
        return boolAttribute('multiple', values, {
          first: ' ',
          second: i18n.selectionsMessage
        });
      };
    }

    Object.keys(fieldAttrs).forEach(index => {
      let attr = fieldAttrs[index];
      let useDefaultAttr = [true];

      if (opts.typeUserDisabledAttrs[type]) {
        let typeDisabledAttrs = opts.typeUserDisabledAttrs[type];
        useDefaultAttr.push(!utils.inArray(attr, typeDisabledAttrs));
      }

      if (opts.typeUserAttrs[type]) {
        let userAttrs = Object.keys(opts.typeUserAttrs[type]);
        useDefaultAttr.push(!utils.inArray(attr, userAttrs));
      }

      if (utils.inArray(attr, opts.disabledAttrs)) {
        useDefaultAttr.push(false);
      }

      if (useDefaultAttr.every(use => use === true)) {
        advFields.push(advFieldMap[attr]());
      }
    });

    // Append custom attributes as defined in typeUserAttrs option
    if (opts.typeUserAttrs[type]) {
      let customAttr = processTypeUserAttrs(opts.typeUserAttrs[type], values);
      advFields.push(customAttr);
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
        let tUA = typeUserAttr[attribute];
        let origValue = tUA.value;
        tUA.value = values[attribute] || tUA.value || '';

        if (tUA.label) {
          i18n[attribute] = tUA.label;
        }

        if (tUA.options) {
          advField.push(selectUserAttrs(attribute, tUA));
        } else {
          advField.push(inputUserAttrs(attribute, tUA));
        }

        i18n[attribute] = orig;
        tUA.value = origValue;
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

    let optionInputs = [
      'checkbox',
      'checkbox-group',
      'radio-group'
    ];
    if (!utils.inArray(textAttrs.type, optionInputs)) {
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
   * @param  {Object} fieldData
   * @return {String}         select markup
   */
  function selectUserAttrs(name, fieldData) {
    let optis = Object.keys(fieldData.options).map(val => {
      let attrs = {value: val};
      if (val === fieldData.value) {
        attrs.selected = null;
      }
      return m('option', fieldData.options[val], attrs).outerHTML;
    });
    let selectAttrs = {
      id: name + '-' + data.lastID,
      title: fieldData.description || fieldData.label || name.toUpperCase(),
      name: name,
      className: `fld-${name} form-control`
    };
    let label = `<label for="${selectAttrs.id}">${i18n[name]}</label>`;

    Object.keys(fieldData).filter(prop => {
      return !utils.inArray(prop, ['value', 'options', 'label']);
    }).forEach(function(attr) {
      selectAttrs[attr] = fieldData[attr];
    });

    let select = m('select', optis, selectAttrs).outerHTML;
    let inputWrap = `<div class="input-wrap">${select}</div>`;
    return `<div class="form-group ${name}-wrap">${label}${inputWrap}</div>`;
  }

  const boolAttribute = (name, values, labels) => {
    let label = txt => m('label', txt, {
      for: `${name}-${data.lastID}`
    }).outerHTML;
    let cbAttrs = {
      type: 'checkbox',
      className: `fld-${name}`,
      name,
      id: `${name}-${data.lastID}`
    };
    if (values[name]) {
      cbAttrs.checked = true;
    }
    let left = [];
    let right = [
      m('input', null, cbAttrs).outerHTML
    ];

    if (labels.first) {
      left.push(label(labels.first));
    }

    if (labels.second) {
      right.push(' ', label(labels.second));
    }
    if (labels.content) {
      right.push(labels.content);
    }

    right = m('div', right, {className: 'input-wrap'}).outerHTML;

    return m('div', left.concat(right), {
      className: `form-group ${name}-wrap`
    }).outerHTML;
  };

  const btnStyles = style => {
    let styleField = '';

    // corrects issue where 'undefined' was saved to formData
    if (style === 'undefined') {
      style = 'default';
    }

    let styleLabel = `<label>${i18n.style}</label>`;
    styleField += h.input({
      value: style || 'default',
      type: 'hidden',
      className: 'btn-style'
    }).outerHTML;
    styleField += '<div class="btn-group" role="group">';

    styles.btn.forEach(btnStyle => {
      let classList = ['btn-xs', 'btn', `btn-${btnStyle}`];
      if (style === btnStyle) {
        classList.push('selected');
      }
      let btn = m('button', mi18n.get(`styles.btn.${btnStyle}`), {
        value: btnStyle,
        type: 'button',
        className: classList.join(' ')
      }).outerHTML;

      styleField += btn;
    });

    styleField += '</div>';

    styleField = m('div', [styleLabel, styleField], {
      className: 'form-group style-wrap'
    });

    return styleField.outerHTML;
  };

  /**
   * Add a number attribute to a field.
   * @param  {String} attribute
   * @param  {Object} values
   * @return {String} markup for number attribute
   */
  const numberAttribute = (attribute, values) => {
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
    let numberAttribute = h.input(utils.trimObj(inputConfig)).outerHTML;
    let inputWrap = `<div class="input-wrap">${numberAttribute}</div>`;
    let inputLabel = `<label for="${inputConfig.id}">${attrLabel}</label>`;

    return m('div', [inputLabel, inputWrap], {
      className: `form-group ${attribute}-wrap`
    }).outerHTML;
  };

  /**
   * selectAttribute
   * @param  {String} attribute  attribute name
   * @param  {Object} values     aka attrs
   * @param  {Array} optionData  select field option data
   * @return {String}            select input makrup
   */
  const selectAttribute = (attribute, values, optionData) => {
    let selectOptions = optionData.map((option, i) => {
      let optionAttrs = Object.assign({
        label: `${i18n.option} ${i}`,
        value: undefined
      }, option);
      if (option.value === values[attribute]) {
        optionAttrs.selected = true;
      }
      optionAttrs = utils.trimObj(optionAttrs);
      return m('option', optionAttrs.label, optionAttrs);
    });
    let selectAttrs = {
        id: attribute + '-' + data.lastID,
        name: attribute,
        className: `fld-${attribute} form-control`
      };
    let labelText = i18n[attribute] || utils.capitalize(attribute);
    let label = m('label', labelText, {for: selectAttrs.id});
    let select = m('select', selectOptions, selectAttrs);
    let inputWrap = m('div', select, {className: 'input-wrap'});
    let attrWrap = m('div', [label, inputWrap], {
      className: `form-group ${selectAttrs.name}-wrap`
    });

    return attrWrap.outerHTML;
  };

  /**
   * Generate some text inputs for field attributes, **will be replaced**
   * @param  {String} attribute
   * @param  {Object} values
   * @return {String}
   */
  const textAttribute = (attribute, values) => {
    let textArea = ['paragraph'];

    let attrVal = values[attribute] || '';
    let attrLabel = i18n[attribute];

    if (attribute === 'label') {
      if (utils.inArray(values.type, textArea)) {
        attrLabel = i18n.content;
      } else {
        attrVal = utils.parsedHtml(values[attribute]);
      }
    }

    let placeholder = i18n[`placeholder.${attribute}`] || '';
    let attributefield = '';
    let noMakeAttr = [];

    if (!noMakeAttr.some(elem => elem === true)) {
      let inputConfig = {
        name: attribute,
        placeholder: placeholder,
        className: `fld-${attribute} form-control`,
        id: `${attribute}-${data.lastID}`
      };
      let attributeLabel = m('label', attrLabel, {
        for: inputConfig.id
      }).outerHTML;

      if (attribute === 'label') {
        inputConfig.contenteditable = true;
        attributefield += m('div', attrVal, inputConfig).outerHTML;
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

      attributefield = m('div', [attributeLabel, inputWrap], {
        className: `form-group ${attribute}-wrap`,
        style: `display: ${visibility}`
      });
    }

    return attributefield.outerHTML;
  };

  const requiredField = fieldData => {
    let {type} = fieldData;
    let noRequire = [
        'header',
        'paragraph',
        'button'
      ];
    let noMake = [];
    let requireField = '';

    if (utils.inArray(type, noRequire)) {
      noMake.push(true);
    }
    if (!noMake.some(elem => elem === true)) {
      requireField = boolAttribute('required', fieldData, {
        first: i18n.required
      });
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

    liContents += m('label', utils.parsedHtml(label), {
      className: 'field-label'
    }).outerHTML;
    let requiredDisplay = values.required ? 'display:inline' : '';
    liContents += m('span', ' *', {
      className: 'required-asterisk',
      style: requiredDisplay
    }).outerHTML;

    // add the help icon
    let descAttrs = {
      className: 'tooltip-element',
      tooltip: values.description,
      style: values.description ? 'display:inline-block' : 'display:none'
    };
    liContents += `<span ${utils.attrString(descAttrs)}>?</span>`;

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

    if (typeof h.stopIndex !== 'undefined') {
      $('> li', d.stage).eq(h.stopIndex).before($li);
    } else {
      $stage.append($li);
    }

    $('.sortable-options', $li)
    .sortable({update: () => h.updatePreview($li)});

    // generate the control, insert it into the list item & add it to the stage
    h.updatePreview($li);

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onadd) {
      opts.typeUserEvents[type].onadd(field);
    }

    if (opts.editOnAdd && isNew) {
      h.closeAllEdit();
      h.toggleEdit(data.lastID, false);
      // field.scrollIntoView();
    }

    data.lastID = h.incrementId(data.lastID);
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

    $('.fld-name', $clone).val(cloneName);
    $clone.find('[id]').each((i, elem) => {
     elem.id = elem.id.replace(currentId, data.lastID);
    });
    $clone.find('[for]').each((index, elem) => {
      let curId = elem.getAttribute('for');
      let newForId = curId.replace(currentId, data.lastID);
      elem.setAttribute('for', newForId);
    });

    $clone.attr('id', data.lastID);
    $clone.attr('name', cloneName);
    $clone.addClass('cloned');
    $('.sortable-options', $clone).sortable();

    if (opts.typeUserEvents[type] && opts.typeUserEvents[type].onclone) {
      opts.typeUserEvents[type].onclone($clone[0]);
    }

    data.lastID = h.incrementId(data.lastID);
    return $clone;
  };

  // ---------------------- UTILITIES ---------------------- //

  // delete options
  $stage.on('click touchstart', '.remove', e => {
    let $field = $(e.target).parents('.form-field:eq(0)');
    let field = $field[0];
    let type = field.getAttribute('type');
    let $option = $(e.target.parentElement);
    e.preventDefault();
    let options = field.querySelector('.sortable-options');
    let optionsCount = options.childNodes.length;
    if (optionsCount <= 2 && !type.includes('checkbox')) {
      opts.notify.error('Error: ' + i18n.minOptionMessage);
    } else {
      $option.slideUp('250', () => {
        $option.remove();
        h.updatePreview($field);
        h.save.call(h);
      });
    }
  });

  // touch focus
  $stage.on('touchstart', 'input', e => {
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
      h.toggleEdit(targetID);
      e.handled = true;
    } else {
      return false;
    }
  });
  $stage.on('dblclick', 'li.form-field, .field-label', (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.handled !== true) {
      let targetID = e.target.tagName == 'li' ? $(e.target).attr('id') : $(e.target).closest('li.form-field').attr('id');
      h.toggleEdit(targetID);
      e.handled = true;
    }
  });

  $stage.on('change', '[name="subtype"]', (e) => {
    const $field = $(e.target).closest('li.form-field');
    const $valWrap = $('.value-wrap', $field);
    $valWrap.toggle(e.target.value !== 'quill');
  });

let stageOnChangeSelectors = [
    '.prev-holder input',
    '.prev-holder select',
    '.prev-holder textarea'
  ];
  $stage.on('change', stageOnChangeSelectors.join(', '), e => {
    let prevOptions;
    if (e.target.classList.contains('other-option')) {
      return;
    }
    let field = utils.closest(e.target, '.form-field');
    let optionTypes = ['select', 'checkbox-group', 'radio-group'];
    if (utils.inArray(field.type, optionTypes)) {
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

    h.save.call(h);
  });

  // update preview to label
  utils.addEventListeners(d.stage, 'keyup change', e => {
    if (!e.target.classList.contains('fld-label')) return;
    let value = e.target.value || e.target.innerHTML;
    let label = utils.closest(e.target, '.form-field')
    .querySelector('.field-label');
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
    h.updatePreview($clone);
    h.save.call(h);
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
      h.confirm([warnH3, warnMessage], () =>
        h.removeField(deleteID), coords);
      $field.addClass('deleting');
    } else {
      h.removeField(deleteID);
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
    h.updatePreview($btnStyle.closest('.form-field'));
    h.save.call(h);
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

    $('.sortable-options', $optionWrap)
    .append(selectFieldOptions(name, false, isMultiple));
  });

  $stage.on('mouseover mouseout', '.remove, .del-button', e =>
    $(e.target).closest('li').toggleClass('delete'));

  loadFields();

  $stage.css('min-height', $cbUL.height());

  // If option set, controls will remain in view in editor
  if (opts.stickyControls.enable) {
    h.stickyControls($stage);
  }

  if (opts.disableInjectedStyle) {
    const styleTags = document.getElementsByClassName('formBuilder-injected-style');
    utils.forEach(styleTags, i => remove(styleTags[i]));
  }

  document.dispatchEvent(events.loaded);

  // Make actions accessible
  formBuilder.actions = {
    clearFields: animate => h.removeAllFields(d.stage, animate),
    showData: h.showData.bind(h),
    save: h.save.bind(h),
    addField: (field, index) => {
      h.stopIndex = data.formData.length ? index : undefined;
      prepFieldVars(field);
      document.dispatchEvent(events.fieldAdded);
    },
    removeField: h.removeField.bind(h),
    getData: h.getFormData.bind(h),
    setData: formData => {
      h.stopIndex = undefined;
      h.removeAllFields(d.stage, false);
      loadFields(formData);
      h.save.call(h);
    },
    setLang: async locale => {
      await mi18n.setCurrent.call(mi18n, locale);
      d.empty(element);
      let formBuilder = new FormBuilder(originalOpts, element);
      $(element).data('formBuilder', formBuilder);
    }
  };

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
      get formData() {
        return instance.actions.getData('json');
      },
      promise: new Promise(function(resolve, reject) {
        mi18n.init(i18nOpts).then(() => {
          elems.each(i => {
            let formBuilder = new FormBuilder(opts, elems[i]);
            $(elems[i]).data('formBuilder', formBuilder);
            instance.actions = formBuilder.actions;
          });
          delete instance.promise;
          resolve(instance);
        }).catch(console.error);
      })
    };

    return instance;
  };
})( jQuery );
