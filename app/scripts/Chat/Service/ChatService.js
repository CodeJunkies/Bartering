'use strict';

angular.module('barterApp')
  .factory('ChatService', function($resource) {
    return $resource(
      'https://api.parse.com/1/classes/Chat/:Id', 
      {Id: "@objectId"}, 
      {"update": {method: "PUT"}, "query": {method: "GET", isArray: false}}
    );
  });
