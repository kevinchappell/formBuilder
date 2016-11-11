const dom = {};

dom.optionFields = [
'select',
'checkbox-group',
'radio-group',
'autocomplete'
];
dom.optionFieldsRegEx = new RegExp(`(${dom.optionFields.join('|')})`);

/**
   * Util to remove contents of DOM Object
   * @param  {Object} element
   * @return {Object}         element with its children removed
   */
dom.empty = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

/**
   * Hide or show an Array or HTMLCollection of elements
   * @param  {Array} elems
   * @param  {String} term  match textContent to this term
   * @return {Array}        filtered elements
   */
dom.filter = (elems, term, show = true) => {
  let filteredElems = [];
  let toggle = ['none', 'block'];

  if (show) {
    toggle = toggle.reverse();
  }

  for (let i = elems.length - 1; i >= 0; i--) {
    let txt = elems[i].textContent.toLowerCase();
    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0];
      filteredElems.push(elems[i]);
    } else {
      elems[i].style.display = toggle[1];
    }
  }

  return filteredElems;
};

export default dom;
