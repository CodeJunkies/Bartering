'use strict';

angular.module('barterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('HeaderCtrl', function ($scope) {})
  .controller('FooterCtrl', function ($scope) {});
