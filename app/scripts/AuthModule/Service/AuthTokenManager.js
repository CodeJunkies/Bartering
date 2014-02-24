'use strict';

angular.module('AuthModule')
  .factory('AuthTokenManager', function($window) {

    function saveAuthenicationToken(token) {
      if(angular.isDefined(token) && angular.isString(token)) {
        $window.localStorage.authToken = token;
      }
    }

    function loadAuthenitcationToken() {
      return $window.localStorage.authToken;
    }

    function doesAuthenticationTokenExist() {
      if($window.localStorage.authToken) {
        return true;
      }
      return false;
    }

    function wipeAutenticationToken() {
      $window.localStorage.authToken = '';
    }

    return {
      saveAuthenicationToken: saveAuthenicationToken,
      loadAuthenitcationToken: loadAuthenitcationToken,
      doesAuthenticationTokenExist: doesAuthenticationTokenExist,
      wipeAutenticationToken: wipeAutenticationToken
    };
  });