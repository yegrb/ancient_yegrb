'use strict';

clientApp.factory('env', [ '$location', function($location) {
  // Service logic
  var config, env;

  config = {
    'development': {
      env: 'development',
      api_url: 'http://localhost:3000/api'
    }
  };

  // Set the environment based on the host service the client
  //
  // I know it's a hack but can't think of a way to inject this during
  // the build yet.
  if ($location.host() === "localhost") {
    env = "development";
  } else {
    env = "production";
  }

  // Public API here
  return config[env];
} ] );
