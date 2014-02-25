'use strict';

angular.module('barterApp')
  .factory('ListingService', function($http) {
    var ListingService = {
      getListings: function() {

        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get('https://api.parse.com/1/classes/Listing').then(function (response) {

          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      
        // Return the promise to the controller
        return promise;
      }
    };

    return ListingService;
  });
