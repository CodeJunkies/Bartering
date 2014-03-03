'use strict';

angular.module('barterApp')
  .controller('ListingCtrl', function($scope, $http, ListingService) {

    $scope.listing = new ListingService();

    var listings = ListingService.query(function () {
      $scope.listings = listings.results;
    });

    $scope.newListing = function() {
      $scope.listing = new ListingService();
      $scope.editing = false;
    }

    $scope.activeListing = function(listing) {
      $scope.listing = listing;
      $scope.editing = true;
    }

    $scope.save = function(listing) {
      if ($scope.listing._id) {
        ListingService.update({_id: $scope.listing._id}, $scope.listing);
      } else {
        $scope.listing.$save().then(function(response) {
          $scope.listings.push(response)
        });
      }
      $scope.editing = false;
      $scope.listing = new ListingService();
    }

    $scope.delete = function(listing) {
      ListingService.delete(listing)
      _.remove($scope.listings, listing)
    }

  });