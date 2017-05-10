import control from '../control';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controlSelect extends control {

  /**
   * definition
   * @return {[type]} [description]
   */
  static get definition() {
    return {
      inactive: ['checkbox']
    };
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    let options = [];
    let {values, placeholder, type, inline, other, toggle, ...data} = this.config;
    let optionType = type.replace('-group', '');
    let isSelect = type === 'select';
    if (data.multiple || type === 'checkbox-group') {
      data.name = data.name + '[]';
    }
    delete data.title;

    if (values) {
      // if a placeholder is specified, add it to the top of the option list
      if (placeholder && isSelect) {
        options.push(this.markup('option', placeholder, {
          disabled: null,
          selected: null
        }));
      }

      // process the rest of the options
      for (let i = 0; i < values.length; i++) {
        let {label = '', ...optionAttrs} = values[i];

        optionAttrs.id = `${data.id}-${i}`;
        optionAttrs.name = `${data.id}-${i}`;
        if (!optionAttrs.selected || placeholder) {
          delete optionAttrs.selected;
        }

        if (isSelect) {
          let o = this.markup('option', document.createTextNode(label), optionAttrs);
          options.push(o);
        } else {
          let wrapperClass = optionType;
          if (inline) {
            wrapperClass += '-inline';
          }
          optionAttrs.type = optionType;
          if (optionAttrs.selected) {
            optionAttrs.checked = 'checked';
            delete optionAttrs.selected;
          }
          let input = this.markup('input', null, Object.assign({}, data, optionAttrs));
          let labelAttrs = {for: optionAttrs.id};
          let labelContent = [input, label];
          if (toggle) {
            let kcToggle = this.markup('span');
            labelContent = [input, kcToggle, label];
            labelAttrs.className = 'kc-toggle';
          }

          let inputLabel = this.markup('label', labelContent, labelAttrs);
          let wrapper = this.markup('div', inputLabel, {className: wrapperClass});
          options.push(wrapper);
        }
      }

      // if configured to display an 'other' option, prepare the elements
      if (!isSelect && other) {
        let otherOptionAttrs = {
          id: `${data.id}-other`,
          className: `${data.className} other-option`,
          events: {
            click: () => this.otherOptionCB(otherOptionAttrs.id)
          }
        };
        // let label = mi18n.current.other;
        let wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }

        let optionAttrs = Object.assign({}, data, otherOptionAttrs);
        optionAttrs.type = optionType;

        let otherValAttrs = {
          type: 'text',
          name: data.name,
          id: `${otherOptionAttrs.id}-value`,
          className: 'other-val'
        };
        let otherInputs = [
          this.markup('input', null, optionAttrs),
          document.createTextNode('Other'),
          this.markup('input', null, otherValAttrs)
        ];
        let inputLabel = this.markup('label', otherInputs, {for: optionAttrs.id});
        let wrapper = this.markup('div', inputLabel, {className: wrapperClass});
        options.push(wrapper);
      }
    }

    // build & return the DOM elements
    if (type == 'select') {
      return this.markup(optionType, options, data);
    } else {
      return this.markup('div', options, {className: type});
    }
  }

  /**
   * Callback for 'other' option.
   * Toggles the hidden text area for "other" option.
   * @param  {String} otherId id of the "other" option input
   */
  otherOptionCB(otherId) {
    const otherInput = document.getElementById(otherId);
    const otherInputValue = document.getElementById(`${otherId}-value`);

    if (otherInput.checked) {
      otherInputValue.style.display = 'inline-block';
    } else {
      otherInputValue.style.display = 'none';
    }
  }
}

// register this control for the following types & text subtypes
control.register(['select', 'checkbox-group', 'radio-group', 'checkbox'], controlSelect);
