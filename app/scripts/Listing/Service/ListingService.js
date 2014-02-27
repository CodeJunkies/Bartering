'use strict';

angular.module('barterApp')
  .factory('ListingService', function($resource, BARTER_APP_CONFIG) {
    return $resource(
      'https://api.parse.com/1/classes/Listing/:Id', //BARTER_APP_CONFIG.LISTING_URL + 
      {Id: "@objectId"},
      {"update": {method: "PUT"}, "query": {method: "GET"}}
    );
  });