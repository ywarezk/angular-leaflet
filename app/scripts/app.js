'use strict';

angular
  .module('angularLeafletApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
