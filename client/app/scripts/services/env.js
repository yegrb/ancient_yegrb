'use strict';

clientApp.factory('env', function() {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    env: 'development',
    api_url: 'http://localhost:3000/api'
  };
});
