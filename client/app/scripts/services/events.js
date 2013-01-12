'use strict';

clientApp.factory('events', [ "$q", "$http", "config", function($q, $http, config) {

  var events_url = config.api_url + "/events";

  // Public API here
  return {
    nextEvent: function() {

      return $http.get(events_url + '/next_event').then(function(response) {
        return response.data;
      });
    }
  };
}]);
