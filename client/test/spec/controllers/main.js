'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MainCtrl,
    scope,
    rootScope,
    mockEvents;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($rootScope, $controller, $q) {
    var deferred;

    rootScope = $rootScope;
    scope = $rootScope.$new();

    deferred = $q.defer();

    mockEvents = {
      requestNextEvent: function() {
        var self = this;

        deferred.promise.then(function() {
          self.resolved = true;
        });

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
    spyOn(mockEvents, 'requestNextEvent').andCallThrough();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      events: mockEvents
    });
  }));

  it('should request the next event', function() {
    expect(mockEvents.requestNextEvent).toHaveBeenCalled();
  });

  it('should attach the nextEvent to the scope', function() {
    // GOT IT!!
    //
    // The $q service comes from the $QProvider. This provider creates a new
    // $q service using the qFactory(nextTick, exceptionHandler) signature.
    // The default nextTick function is what registered work to happen. By
    // default it registers work using $rootScope.$evalAsync which isn't called
    // until after the next digest happens.
    //
    // Therefore to make this test pass I just needed to digest the $rootScope
    // and voila. Magic! :)
    rootScope.$digest();

    expect(scope.nextEvent).toBeDefined();
  });
});
