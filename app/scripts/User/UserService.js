'use strict';

angular.module('barterApp')
  .factory('UserService', function($q, $http) {

    function createUser(data) {
      var deferred = $q.defer();

      var config = {
        headers: {
          'X-Parse-Application-Id': '',
          'X-Parse-REST-API-Key': '',
          'Content-Type: application/json': '',
          'Accept': 'application/json;odata=verbose'
        }
      };

      $http.post('url', config)
        .success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });
    }

    return {
      createUser: createUser
    }
  });