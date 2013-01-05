'use strict';

clientApp.controller('MainCtrl', ["$scope", "events", function($scope, events) {
  events.nextEvent().then(function(next_event) {
    $scope.nextEvent = next_event;
  });
}]);
