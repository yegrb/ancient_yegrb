'use strict';

describe('Service: events', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var events, rootScope;

  beforeEach(inject(function(_events_, $rootScope) {
    events = _events_;
    rootScope = $rootScope;
  }));

  describe('requestNextEvent', function() {
    it('returns a promise that is resolved with the value of the next event', function () {
      var next_event;
      
      events.requestNextEvent().then(function(e) {
        next_event = e;
      });

      rootScope.$digest();

      expect(next_event).toBeDefined();
    });
  });
});
