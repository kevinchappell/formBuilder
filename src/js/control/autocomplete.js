import control from '../control';
import {filter} from '../dom';
/**
 * Autocomplete class
 * Output an autocomplete form element
 */
export default class controlAutocomplete extends control {

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    let {values, type, ...data} = this.config;
    const keyboardNav = (e) => {
      const list = e.target.nextSibling.nextSibling;
      const hiddenField = e.target.nextSibling;
      let activeOption = this.getActiveOption(list);
      const keyCodeMapVals = [
        // up
        [38, () => {
          const previous = this.getPreviousOption(activeOption);
          if (previous) {
              this.selectOption(list, previous);
          }
        }],
        // down
        [40, () => {
          const next = this.getNextOption(activeOption);
          if (next) {
              this.selectOption(list, next);
          }
        }],
        // enter
        [13, () => {
          if (activeOption) {
              e.target.value = activeOption.innerHTML;
              hiddenField.value = activeOption.getAttribute('value');
            if (list.style.display === 'none') {
              this.showList(list, activeOption);
            } else {
              this.hideList(list);
            }
          }
          e.preventDefault();
        }],
        // escape
        [27, () => {
          this.hideList(list);
        }]
      ];
      let keyCodeMap = new Map(keyCodeMapVals);

      let direction = keyCodeMap.get(e.keyCode);
      if(!direction) {
        direction = () => false;
      }

      return direction();
    };
    const fauxEvents = {
      focus: evt => {
        const list = evt.target.nextSibling.nextSibling;
        const filteredOptions = filter(list.querySelectorAll('li'), evt.target.value);
        evt.target.addEventListener('keydown', keyboardNav);
        if ( evt.target.value.length > 0 ) {
            const selectedOption = filteredOptions.length > 0 ? filteredOptions[filteredOptions.length-1] : null;
            this.showList(list, selectedOption);
        }
      },
      blur: evt => {
        evt.target.removeEventListener('keydown', keyboardNav);
        setTimeout(() => {
          evt.target.nextSibling.nextSibling.style.display = 'none';
        }, 200);
      },
      input: (evt) => {
        const list = evt.target.nextSibling.nextSibling;
        const hiddenField = evt.target.nextSibling;
        hiddenField.value = evt.target.value;
        const filteredOptions = filter(list.querySelectorAll('li'), evt.target.value);
        if (filteredOptions.length == 0) {
          this.hideList(list);
        } else {
         let activeOption = this.getActiveOption(list);
         if (!activeOption) {
            activeOption = filteredOptions[filteredOptions.length - 1];
         }
         this.showList(list, activeOption);
        }
      }
    };
    let fauxAttrs = Object.assign({}, data,
      {
        id: `${data.id}-input`,
        autocomplete: 'off',
        events: fauxEvents
      });
    let hiddenAttrs = Object.assign({}, data, {type: 'hidden'});
    delete fauxAttrs.name;
    const field = [
      this.markup('input', null, fauxAttrs),
      this.markup('input', null, hiddenAttrs)
    ];

    const options = values.map(optionData => {
      let label = optionData.label;
      let config = {
        events: {
          click: evt => {
            const list = evt.target.parentElement;
            const field = list.previousSibling.previousSibling;
            field.value = optionData.label;
            field.nextSibling.value = optionData.value;
            this.hideList(list);
          }
        },
        value: optionData.value
      };
      return this.markup('li', label, config);
    });

    field.push(this.markup('ul', options,
      {id: `${data.id}-list`, className: `fb-${type}-list`}));
    return field;
  }


  /**
   * Hides autocomplete list and deselects all the options
   * @param {Object} list - list of autocomplete options
   */
  hideList(list) {
    this.selectOption(list, null);
    list.style.display = 'none';
  }

  /**
   * Shows autocomplete list. Automatically selects 'selectedOption'
   * @param {Object} list - list of autocomplete options
   * @param {Object} selectedOption - option to be selected
  */
  showList(list, selectedOption) {
    this.selectOption(list, selectedOption);
    list.style.display = 'block';
    list.style.width = list.parentElement.offsetWidth + 'px';
  }

  /**
   * Returns first option from autocomplete list with 'active-option' class
   * @param {Object} list - list of autocomplete options
   * @return {Object} first list option with 'active-option' class
  */
  getActiveOption(list) {
    const activeOption = list.getElementsByClassName('active-option')[0];
    if (activeOption && activeOption.style.display !== 'none') {
      return activeOption;
    }
    return null;
  }

  /**
   * Previous next option to the current option
   * @param {Object} current - currently selected option
   * @return {Object} previous option to the current option or null if previous doesn't exist
  */
  getPreviousOption(current) {
    let previous = current;
    do {
      previous = previous ? previous.previousSibling : null;
    } while (previous != null && previous.style.display === 'none');
    return previous;
  }

  /**
   * Returns next option to the current option
   * @param {Object} current - currently selected option
   * @return {Object} next option to the current option or null if next doesn't exist
  */
  getNextOption(current) {
    let next = current;
    do {
      next = next ? next.nextSibling: null;
    } while (next != null && next.style.display === 'none');
    return next;
  }

  /**
   * Selects option in autocomplete list. Removes class 'active-option' from all options
   * and then adds that class to 'selected' option. If 'selected' is null then no option is selected
   * @param {Object} list - list of autocomplete options
   * @param {Object} selectedOption - option - 'li' element - to be selected in autocomplete list
   */
  selectOption(list, selectedOption) {
    const options = list.querySelectorAll('li');
    options.forEach((option)=>{
      option.classList.remove('active-option');
    });
    if (selectedOption) {
      selectedOption.classList.add('active-option');
    }
  }

  /**
   * When the element is rendered into the DOM, execute the following code to initialise it
   * @param {Object} evt - event
   */
  onRender(evt) {
  }
}

// register tinymce as a richtext control
control.register('autocomplete', controlAutocomplete);
