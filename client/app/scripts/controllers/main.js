'use strict';

clientApp.controller('MainCtrl', ["$scope", "events", function($scope, events) {
  events.requestNextEvent().then(function(next_event) {
    $scope.nextEvent = next_event;
  });
}]);
