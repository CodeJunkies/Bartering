/*global $*/
'use strict';

angular.module('AuthModule')
    .factory('AuthService', function($q, $http, AuthTokenManager, AUTH_URLS) {
      //TODO: Make the UserModule keep track of specific user data for this app
      var currentUser;

      function signup(user) {
        var deferred = $q.defer();

        $http.post(AUTH_URLS.SIGN_UP_URL, user)
          .success(function(data) {
            deferred.resolve(data);
          }).error(function(data) {
            deferred.reject(data);
          });
      }

      function login(user, pw) {
        var deferred = $q.defer();

        var userData = {username: user, password: pw };

        $http({
          'method': 'GET',
          'url': AUTH_URLS.LOGIN_URL + '?' + $.param(userData),
          'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
        })
          .success(function(user) {
            updateAuthToken(user.sessionToken);
            updateCurrentUser(user);
            deferred.resolve(user);
          }).error(function(badUserData) {
            deferred.reject(badUserData);
          });
      }

      function logout() {
        console.log('logout');
        AuthTokenManager.wipeAutenticationToken();
        currentUser = {};
      }

      function isLoggedIn() {

      }

      function updateAuthToken(token) {
        AuthTokenManager.saveAuthenicationToken(token);
      }

      function updateCurrentUser(user) {
        currentUser = {
          userObjectId: user.objectId,
          username: user.username,
          phone: user.phone,
          email: user.email
        };
      }

      return {
        signup: signup,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
      };
    });