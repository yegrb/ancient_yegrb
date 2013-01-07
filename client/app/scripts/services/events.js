'use strict';

clientApp.factory('events', [ "$q", "$http", "env", function($q, $http, env) {

  var events_url = env.api_url + "/events";

  // Public API here
  return {
    nextEvent: function() {

      return $http.get(events_url + '/next_event').then(function(response) {
        return response.data;
      });
    }
  };
}]);
