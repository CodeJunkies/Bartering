'use strict';

angular.module('barterApp')
  .factory('ChatService', [$resource, function($resource) {
    return $resource('https://api.parse.com/1/classes/Chat/:id', null, null);
  }]);
