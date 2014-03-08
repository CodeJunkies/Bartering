'use strict';

angular.module('barterApp')
  .controller('LoginCtrl', function ($scope, AuthService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function(user) {
      AuthService.login(user.username, user.password);
      console.log(window.localStorage.authToken);
    }
  });
