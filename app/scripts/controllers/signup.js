'use strict';

angular.module('barterApp')
  .controller('SignupCtrl', function ($scope, AuthService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submit = function(user) {
    	console.log(user);
    	AuthService.signup(user);
    }
  });
