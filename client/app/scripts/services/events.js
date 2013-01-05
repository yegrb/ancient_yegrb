'use strict';

clientApp.factory('events', [ "$q", function($q) {

  // Public API here
  return {
    nextEvent: function() {
      var deferred,

      deferred = $q.defer();

      deferred.resolve({
        name: "Meetup",
        description: "Join us for the first meetup of the New Year. There's Ruby, talks and pizza with the great local community. We're looking for speakers. Some talk ideas are integrating AngularJS with Rails, RubyFlux, and the new Reel server.",
        startsOn: new Date(2013, 0, 15, 18, 30),
        venueAddress: "CSC 2-49, Computing Science Centre, University of Alberta",
        venueUrl: "https://maps.google.com/maps/place?q=Computing+Science+Centre,+Edmonton,+AB,+Canada&hl=en&ftid=0x53a0218a9ccbcfa5:0xaae88fa1314cc64e",
        rsvpUrl: "https://plus.google.com/events/c70iqo41fgbna5a4ap3hpb1vahg"
      });

      return deferred.promise;
    }
  };
}]);
