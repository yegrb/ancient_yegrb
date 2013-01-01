'use strict';

clientApp.directive('eventDate', function() {
  return {
    template: "<div class='date'><span class='weekday'>{{ time | date:'EEEE' }}</span> <span class='day'>{{ time | date:'dd' }}</span> <span class='month'>{{ time | date:'MMM' }}</span></div>",
    scope: {
      time: "="
    },
    transclude: true,
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
    }
  };
});
