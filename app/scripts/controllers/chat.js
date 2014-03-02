'use strict';

angular.module('barterApp')
  .controller('ChatCtrl', function($scope, ChatService) {
    
  	var createChat = function(newChat) {
  	  newChat.$save();
  	  $scope.chats.push(newChat);
  	}

  	var updateChat = function(chat) {
  	  chat.$update();
  	}

    var chats = ChatService.query(function() {
      $scope.chats = chats.results;
    });

  });