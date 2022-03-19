/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */

/**
 * Wrapper to deal with ie11
 * @param {String} eventName
 * @return {Event} event
 */
function createNewEvent(eventName) {
  let event
  if (typeof Event === 'function') {
    event = new Event(eventName)
  } else {
    event = document.createEvent('Event')
    event.initEvent(eventName, true, true)
  }

  return event
}

const events = {
  loaded: createNewEvent('loaded'),
  viewData: createNewEvent('viewData'),
  userDeclined: createNewEvent('userDeclined'),
  modalClosed: createNewEvent('modalClosed'),
  modalOpened: createNewEvent('modalOpened'),
  formSaved: createNewEvent('formSaved'),
  fieldAdded: createNewEvent('fieldAdded'),
  fieldRemoved: createNewEvent('fieldRemoved'),
  fieldRendered: createNewEvent('fieldRendered'),
  fieldEditOpened: createNewEvent('fieldEditOpened'),
  fieldEditClosed: createNewEvent('fieldEditClosed'),
}

export default events
