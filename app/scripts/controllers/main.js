'use strict';

angular.module('barterApp')
  .controller('MainCtrl', function ($scope, $resource, ListingService) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Use getListings function of ListingService to get the promise and when it's resolved update the listings
    ListingService.getListings().then(function(data) {
//      $scope.listings = data.results;
    });

    var Listing = $resource('https://api.parse.com/1/classes/Listing/:listingId', {listingId: '@id'});

  	var listings = Listing.query(function() {
  		$scope.listings = listings;
  	})

  });
