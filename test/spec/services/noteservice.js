'use strict';

describe('Service: noteService', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var noteService;
  beforeEach(inject(function (_noteService_) {
    noteService = _noteService_;
  }));

  it('should add new note', function () {
    var oldLength = noteService.notes.length;
    noteService.addNewNote('sub',1,'owner');
    var newlength = noteService.notes.length;
    expect(newlength).toBe(oldLength+1);
  });

});
