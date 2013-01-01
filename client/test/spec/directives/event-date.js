'use strict';

describe('Directive: eventDate', function() {
  beforeEach(module('clientApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<event-date></event-date>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the eventDate directive');
  }));
});
