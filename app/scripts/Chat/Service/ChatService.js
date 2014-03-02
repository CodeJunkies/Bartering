'use strict';

angular.module('barterApp')
  .factory('ChatService', function($resource, CHAT_URL) {
    return $resource(
      CHAT_URL + '/:Id', 
      {Id: "@objectId"}, 
      {"update": {method: "PUT"}, "query": {method: "GET", isArray: false}}
    );
  });
