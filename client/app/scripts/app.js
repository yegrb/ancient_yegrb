'use strict';

var clientApp = angular.module('clientApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

if (window.location.hostname === "localhost") {
  clientApp.value('env', 'development');
} else {
  clientApp.value('env', 'production');
}
