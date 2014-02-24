'use strict';

angular.module('AuthModule', [])
    .config(function($provide, $httpProvider) {
      $provide.factory('AuthenticationInterceptor', function ($q, $window, AuthTokenManager, PARSE_COM_CONFIG) {
        return {
          // On request success
          request: function (config) {

          //TODO: Restrict this to only urls that contain 'https://api.parse.com'
          // if(config.url.startsWith(PARSE_COM_CONFIG.BASE_PARSE_API_URL)) {
            config.headers[PARSE_COM_CONFIG.APPLICATION_ID_HEADER_NAME] = PARSE_COM_CONFIG.APPLICATION_ID_VALUE;
            config.headers[PARSE_COM_CONFIG.REST_API_KEY_HEADER_NAME] = PARSE_COM_CONFIG.REST_API_KEY_VALUE;

            // Check if we have an authentication token stored locally and include as a header
            if(AuthTokenManager.doesAuthenticationTokenExist()) {
              config.headers[PARSE_COM_CONFIG.SESSION_TOKEN_HEADER_NAME] = AuthTokenManager.loadAuthenitcationToken();
            }

            // Return the config or wrap it in a promise if blank.
            return config || $q.when(config);
          },

          // On response success
          response: function (response) {
            if(response.status === 401) {
              console.log('NOT AUTH! Will use $location service to redirect us to login page ???');
            }
            // Return the response or promise.
            return response || $q.when(response);
          }
        };
      });

      // Add the interceptor to the $httpProvider.
      $httpProvider.interceptors.push('AuthenticationInterceptor');
    });
