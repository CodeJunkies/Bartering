'use strict';

angular.module('barterApp')
  .factory('ListingService', function($resource, LISTING_URL) {
    return $resource(
      LISTING_URL + '/:Id', //
      {Id: "@objectId"},
      {"update": {method: "PUT"}, "query": {method: "GET"}}
    );
  });