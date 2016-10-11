function formBuilderEventsFn() {
  'use strict';

  var events = {};

  events.loaded = new Event('loaded');
  events.viewData = new Event('viewData');
  events.userDeclined = new Event('userDeclined');
  events.modalClosed = new Event('modalClosed');
  events.modalOpened = new Event('modalOpened');
  events.formSaved = new Event('formSaved');
  events.fieldAdded = new Event('fieldAdded');
  events.fieldRemoved = new Event('fieldRemoved');

  return events;
}
