'use strict';

angular.module('barterApp')
  .controller('MainCtrl', function ($scope, ListingService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    ListingService.getListings().then(function(data) {
      $scope.listings = data.results;
      console.log($scope.listings);
    });
//    console.log($scope.listings);
  })
  .controller('HeaderCtrl', function ($scope) {})
  .controller('FooterCtrl', function ($scope) {});
