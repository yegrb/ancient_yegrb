'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach the nextEvent to the scope', function() {
    expect(scope.nextEvent).toBeDefined();
  });
});
