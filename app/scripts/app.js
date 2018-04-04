'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngMessages',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newNote', {
        templateUrl: 'views/newNote.html',
        controller: 'MainCtrl'
      })      
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      })
      .when('/profileEdit', {
        templateUrl: 'views/profileEdit.html',
        controller: 'profileCtrl'
      })      
      .otherwise({
        redirectTo: '/main'
      });
  })
  .run(['$rootScope', '$location', function($rootScope, $location){
     var path = function() { return $location.path();};
     $rootScope.$watch(path, function(newVal, oldVal){
       $rootScope.activetab = newVal;
     });
  }]);
