'use strict';

angular.module('barterApp')
  .factory('ListingService', function(BARTER_APP_CONFIG, PARSE_COM_CONFIG, $http) {
    var ListingService = {

      getListings: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(BARTER_APP_CONFIG.LISTING_URL, {
          headers: { 
            'X-Parse-Application-Id': PARSE_COM_CONFIG.APPLICATION_ID_VALUE, 
            'X-Parse-REST-API-Key': PARSE_COM_CONFIG.REST_API_KEY_VALUE
          }
        }).then(function (response) {

          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      
        // Return the promise to the controller
        return promise;
      },
      
      getListing: function(id) {

        var promise = $http.get(BARTER_APP_CONFIG.LISTING_URL + '/' + id, {
          headers: { 
            'X-Parse-Application-Id': PARSE_COM_CONFIG.APPLICATION_ID_VALUE, 
            'X-Parse-REST-API-Key': PARSE_COM_CONFIG.REST_API_KEY_VALUE
          }
        }).then(function (response) {
          return response.data;
        });
      
        return promise;
      },
      
      saveListing: function(userId, title, description) {

        var listingObject = {'userId': userId, 'title': title, 'description': description};

        var promise = $http.post(BARTER_APP_CONFIG.LISTING_URL, listingObject, {
          headers: { 
            'X-Parse-Application-Id': PARSE_COM_CONFIG.APPLICATION_ID_VALUE, 
            'X-Parse-REST-API-Key': PARSE_COM_CONFIG.REST_API_KEY_VALUE,
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      
        return promise;
      }
      
    };

    return ListingService;
  });
