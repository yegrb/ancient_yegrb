'use strict';

describe('Directive: eventDate', function() {
  beforeEach(module('clientApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<event-date time="time"></event-date>');

    $rootScope.time = new Date(2013, 0, 1, 18, 30);

    element = $compile(element)($rootScope);

    $rootScope.$digest();

    expect(element.html()).toBe('<div class="date"><span class="weekday ng-binding">Tuesday</span> <span class="day ng-binding">01</span> <span class="month ng-binding">Jan</span></div>');
  }));
});
