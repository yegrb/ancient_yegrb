'use strict';

clientApp.factory('config', [ 'env', function(env) {
  // Service logic
  var config;

  config = {};

  // We're running in development
  config['development'] = {
    api_url: 'http://localhost:3000/api'
  };

  // Public API here
  return config[env];
} ] );
