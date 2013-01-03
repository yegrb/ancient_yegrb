## What I've learned writing this app

* If you see "{{ }}" values in a test, you need to call $scope.$digest()
* Promises use $rootScope.$asyncEval() for then() which is only evaled after $digest()
* To ensure your injection survives minification replace func($scope, service, blah) with ["$scope", "service", "blah", function(a, b, c) {} ]
