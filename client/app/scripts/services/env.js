'use strict';

clientApp.factory('config', [ 'env', function(env) {
  // Service logic
  var config;

  config = {};

  config['development'] = {
    api_url: 'http://localhost:3000/api'
  };

  config['production'] = {
    api_url: 'http://api.yegrb.com/api'
  };

  // Public API here
  return config[env];
} ] );
