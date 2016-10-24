/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */
// function fbEvents(){
  const events = {};

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
