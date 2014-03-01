'use strict';

describe('Controller: ChatCtrl', function () {

  // load the controller's module
  beforeEach(module('barterApp'));

  var ChatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatCtrl = $controller('ChatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of chats to the scope', function () {
    expect(scope.chats).not.toBe(null);
  });
});
