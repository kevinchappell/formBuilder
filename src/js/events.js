var formBuilderEvents = function(opts, _helpers) {
  'use strict';

  var events = {};

  events.beforeFieldAdd = new CustomEvent(
    'beforeFieldAdd', {
      detail: {
        stopIndex: _helpers.stopIndex
      },
      bubbles: true,
      cancelable: true
    }
  );

  events.loaded = new Event('loaded');

  return events;
};
