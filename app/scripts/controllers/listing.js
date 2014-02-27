'use strict'

angular.module('barterApp')
  .controller('ListingCtrl', function($scope, ListingService) {

    var listings = ListingService.query(function () {
      $scope.listings = listings.results;
    });

  });