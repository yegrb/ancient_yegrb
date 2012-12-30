'use strict';

clientApp.factory('events', function($q) {

  // Public API here
  return {
    requestNextEvent: function() {
      var deferred,

      deferred = $q.defer();

      deferred.resolve({
        name: "Meetup",
        description: "Join us this month for talks on integrating AngularJS with Rails, RubyFlux, and the new Reel server.",
        startsOn: new Date(2012, 12, 29, 18, 30),
        venueAddress: "1234 Not Real Street",
        venueUrl: "http://ualberta.net",
        rsvpUrl: "http://plus.com"
      });

      return deferred.promise;
    }
  };
});
