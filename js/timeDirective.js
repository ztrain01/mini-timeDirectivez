var app = angular.module('leApp');

app.directive('theTime', function() {
  return {
    restrict: 'E',
    template: 'The current time is {{time | date: "MM/dd?yyy \'at\' h:mma}}',
    link: function(scope, element, attrs){
      scope.time = currentTime.toString();
    }
  }


});