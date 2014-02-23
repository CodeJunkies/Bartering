'use strict';

angular.module('barterApp')
  .factory('ListingService', function($http) {
  	var ListingService = {
		getListings: function() {

	      var config = {
	        headers: {
	          'X-Parse-Application-Id': 'yCqv3UTcDTe6a3l00WaRT1Xt9FL7Wb7eaXRirbsV',
	          'X-Parse-REST-API-Key': 'lTdx32u6TIttb6wUZWhdOwF13WH912NfkXVZw7Ym',
	        }
	      };

	      // $http returns a promise, which has a then function, which also returns a promise
		  var promise = $http.get('https://api.parse.com/1/classes/Listing', config).then(function (response) {

	    	// The then function here is an opportunity to modify the response
	    	console.log(response);

	    	// The return value gets picked up by the then in the controller.
	    	return response.data;
	  	  });
	  	  console.log(promise);
	  	  // Return the promise to the controller
	  	  return promise;
		}
  	};
  	return ListingService;
  });
/*  .factory('ListingService', function($q, $http) {

    function getListings() {
      var deferred = $q.defer();

      var config = {
        headers: {
          'X-Parse-Application-Id': 'yCqv3UTcDTe6a3l00WaRT1Xt9FL7Wb7eaXRirbsV',
          'X-Parse-REST-API-Key': 'lTdx32u6TIttb6wUZWhdOwF13WH912NfkXVZw7Ym',
        }
      };

      $http.get('https://api.parse.com/1/classes/Listing', config)
        .success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

      return deferred.promise;
    }

    return {
      getListings: getListings
    }
  });*/