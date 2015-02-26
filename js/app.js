var app = angular.module('leApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/',{
      templateUrl: '/filepath',
      controller: 'ControllerName'
  });
  
});