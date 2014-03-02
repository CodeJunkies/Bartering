'use strict';

angular.module('barterApp')
  .controller('ChatCtrl', function($scope, ChatService) {
    
    var chats = ChatService.query(function() {
      $scope.chats = chats.results;
    });

  });