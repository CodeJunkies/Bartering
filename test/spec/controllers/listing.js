'use strict';

describe('Controller: ListingCtrl', function () {

  // load the controller's module
  beforeEach(module('barterApp'));

  var ListingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListingCtrl = $controller('ListingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of listings to the scope', function () {
    expect(scope.listings).not.toBe(null);
  });
});
