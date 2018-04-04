'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('profileCtrl', ['$scope', 'profileService', '$location', function($scope, profileService, $location) {
        $scope.profile = profileService;
        $scope.form = JSON.parse(JSON.stringify(profileService));
        $scope.updateProfile = function(form) {
            if (form.$valid) {
                profileService.updateProfile($scope.form);
                $location.path('/profile')
            }
        }
    }]);
