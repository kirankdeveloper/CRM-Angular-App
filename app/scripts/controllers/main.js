'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('MainCtrl', ['$scope', 'noteService' , '$location', function($scope, noteService, $location) {
    	if(noteService.notes.length==0){
	        noteService.loadNotes().then(function(data) {
				$scope.notes = noteService.notes;
				alert("Notes Loaded");
	        }, function(msg, code) {
	            alert("Unable to load Notes");
	        })    		
    	}
    	else{
    		$scope.notes = noteService.notes;
    	}

        $scope.addNewNote = function(form){
        	if(form.$valid){
        		noteService.addNewNote($scope.form.subject,$scope.form.duration,$scope.form.owner)
  
	            $location.path('/main');
        	}
        }
    }]);
