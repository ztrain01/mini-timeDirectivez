var app = angular.module('leApp');

app.directive('theTime', function() {
  return {
    restrict: 'E',
    template: '<div> The current time is {{time | date: }} </div>',
    link: function(scope, element, attrs){
      var currentTime = Date.now();
      scope.time = currentTime.toString();
    }
  }


});