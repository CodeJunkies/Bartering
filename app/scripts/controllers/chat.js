'use strict'

angular.module('barterApp')
  .controller('ChatsCtrl', ['$scope', 'ChatService', function($scope, ChatService) {

// The code below doesn't work
    var chats = ChatService.get(function() {
    	$scope.chats = chats;
    });

// However this works fine
//    var chat = Chat.get({chatId: '5L0VDL3Qew'}, function() {
//    	$scope.chats = [chat];
//    });
  }]);