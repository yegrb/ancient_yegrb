'use strict';

describe('Service: events', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate services
  var events, rootScope, $httpBackend;

  beforeEach(module(function($provide) {
    $provide.value('env', 'development');
  }));

  beforeEach(inject(function(_events_, $rootScope, _$httpBackend_) {
    events = _events_;
    rootScope = $rootScope;
    $httpBackend = _$httpBackend_;
  }));

  var sampleEvent = {
        name: "Meetup",
        description: "Join us for the first meetup of the New Year. There's Ruby, talks and pizza with the great local community. We're looking for speakers. Some talk ideas are integrating AngularJS with Rails, RubyFlux, and the new Reel server.",
        startsOn: new Date(2013, 0, 15, 18, 30),
        venueAddress: "CSC 2-49, Computing Science Centre, University of Alberta",
        venueUrl: "https://maps.google.com/maps/place?q=Computing+Science+Centre,+Edmonton,+AB,+Canada&hl=en&ftid=0x53a0218a9ccbcfa5:0xaae88fa1314cc64e",
        rsvpUrl: "https://plus.google.com/events/c70iqo41fgbna5a4ap3hpb1vahg"
      };

  describe('nextEvent', function() {
    it('resolves with the value of the next event', function () {
      $httpBackend.expect('GET', 'http://localhost:3000/api/events/next_event').respond(200, JSON.stringify(sampleEvent));

      var next_event;
      
      events.nextEvent().then(function(e) {
        next_event = e;
      });

      $httpBackend.flush();

      expect(next_event.name).toEqual(sampleEvent.name);
    });
  });
});
