'use strict';

/**
 * @ngdoc service
 * @name angularApp.Profile
 * @description
 * # Profile
 * Service in the angularApp.
 */
angular.module('angularApp')
    .service('profileService', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.phone = "";
        this.updateProfile = function(data) {
            this.fname = data.fname;
            this.lname = data.lname;
            this.email = data.email;
            this.phone = data.phone;
        }
    });
