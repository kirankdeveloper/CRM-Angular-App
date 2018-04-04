'use strict';

/**
 * @ngdoc service
 * @name angularApp.noteService
 * @description
 * # noteService
 * Service in the angularApp.
 */
angular.module('angularApp')
    .service('noteService', ['$q', '$http', function($q, $http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.notes = [];
        this.loadNotes = function() {
            var self = this;
            var deferred = $q.defer();
            $http.get('/data/data.json')
                .success(function(data) {
                    self.notes = data;
                    deferred.resolve(data);
                }).error(function(msg, code) {
                    deferred.reject(msg);
                });
            return deferred.promise;

        }
        this.addNewNote = function(sub, dur, owner) {
            this.notes.push({
                'subject': sub,
                'duration': dur,
                'name': owner
            })
        }

    }]);
