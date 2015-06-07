'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/authenticate', {
      templateUrl: 'partials/authenticate',
      controller: 'AuthCtrl'
    }).
    when('/todo', {
      templateUrl: 'partials/todo',
      controller: 'listCtrl'
    }).  
    when('/listTodo', {
      templateUrl: 'partials/listTodo',
      controller: 'listTodoCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
