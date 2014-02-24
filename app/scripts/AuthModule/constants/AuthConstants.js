'use strict';

angular.module('AuthModule')
  .constant('PARSE_COM_CONFIG', {
    BASE_PARSE_API_URL: 'https://api.parse.com',
    APPLICATION_ID_HEADER_NAME: 'X-Parse-Application-Id',
    APPLICATION_ID_VALUE: 'yCqv3UTcDTe6a3l00WaRT1Xt9FL7Wb7eaXRirbsV',
    REST_API_KEY_HEADER_NAME: 'X-Parse-REST-API-Key',
    REST_API_KEY_VALUE: 'lTdx32u6TIttb6wUZWhdOwF13WH912NfkXVZw7Ym',
    SESSION_TOKEN_HEADER_NAME: 'X-Parse-Session-Token'
  })
  .constant('AUTH_URLS', {
    SIGN_UP_URL: 'https://api.parse.com/1/users',
    LOGIN_URL: 'https://api.parse.com/1/login',
    VALIDATE_TOKEN_URL: 'https://api.parse.com/1/users/me'
  });