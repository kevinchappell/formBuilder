const events = require('./../src/js/events.js')

describe('Can generate events', () => {
  test('fieldAddedEvent', () => expect(events.default.fieldAdded).toBeInstanceOf(Event));
})
