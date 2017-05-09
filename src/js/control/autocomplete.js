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
      let activeOption = list.getElementsByClassName('active-option')[0];
      const keyCodeMapVals = [
        // up
        [38, () => {
          if (activeOption) {
            if (activeOption.previousSibling) {
              activeOption.classList.remove('active-option');
              activeOption = activeOption.previousSibling;
              activeOption.classList.add('active-option');
            }
          }
        }],
        // down
        [40, () => {
          if (activeOption) {
            if (activeOption.nextSibling) {
              activeOption.classList.remove('active-option');
              activeOption = activeOption.nextSibling;
              activeOption.classList.add('active-option');
            }
          } else {
            activeOption = list.firstChild;
            activeOption.classList.add('active-option');
          }
        }],
        [13, () => {
          if (activeOption) {
            e.target.value = activeOption.innerHTML;
            if (list.style.display === 'none') {
              list.style.display = 'block';
            } else {
              list.style.display = 'none';
            }
          }
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
        let list = evt.target.nextSibling.nextSibling;
        evt.target.addEventListener('keydown', keyboardNav);
        list.style.display = 'block';
        list.style.width = list.parentElement.offsetWidth + 'px';
      },
      blur: evt => {
        evt.target.removeEventListener('keydown', keyboardNav);
        setTimeout(() => {
          evt.target.nextSibling.nextSibling.style.display = 'none';
        }, 200);
      },
      input: (evt) => {
        const list = evt.target.nextSibling.nextSibling;
        filter(list.querySelectorAll('li'), evt.target.value);
        if (!evt.target.value) {
          list.style.display = 'none';
        } else {
          list.style.display = 'block';
        }
      }
    };
    let fauxAttrs = Object.assign({}, data,
      {
        id: `${data.id}-input`,
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
            field.previousSibling.value = optionData.value;
            list.style.display = 'none';
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
   * When the element is rendered into the DOM, execute the following code to initialise it
   * @param {Object} evt - event
   */
  onRender(evt) {
  }
}

// register tinymce as a richtext control
control.register('autocomplete', controlAutocomplete);
