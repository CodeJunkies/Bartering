'use strict';

angular.module('barterApp')
  .factory('ListingService', function($http) {
    var ListingService = {

      getListings: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(LISTING_URL).then(function (response) {

          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      
        // Return the promise to the controller
        return promise;
      }
      
      getListing: function(id) {

        var promise = $http.get(LISTING_URL + '/' + id).then(function (response) {
          return response.data;
        });
      
        return promise;
      }
      
      saveListing: function(userId, title, description) {

        var listingObject = {'userId': userId, 'title': title, 'description': description};

        var promise = $http.post(LISTING_URL, listingObject).then(function (response) {
          return response.data;
        });
      
        return promise;
      }
      
    };

    return ListingService;
  });
