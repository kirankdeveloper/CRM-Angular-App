'use strict';

describe('Controller: profileCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var profileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    profileCtrl = $controller('profileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
