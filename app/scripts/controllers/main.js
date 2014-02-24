'use strict';

angular.module('barterApp')
  .controller('MainCtrl', function ($scope, ListingService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Use getListings function of ListingService to get the promise and when it's resolved update the listings
    ListingService.getListings().then(function(data) {
      $scope.listings = data.results;
    });

  })
  .controller('HeaderCtrl', function () {})
  .controller('FooterCtrl', function () {});
