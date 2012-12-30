'use strict';

describe('Service: events', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var events;
  beforeEach(inject(function(_events_) {
    events = _events_;
  }));

  describe('requestNextEvent', function() {
    it('returns a promise that is resolved with the value of the next event', function () {
      expect(events.requestNextEvent()).toBeDefined();
    });
  });


});
