'use strict';

angular.module('barterApp')
  .factory('ChatService', function($http) {
    var ChatService = {

      getChats: function() {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.get(CHAT_URL).then(function (response) {

          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      
        // Return the promise to the controller
        return promise;
      },
      
      getChat: function(id) {

        var promise = $http.get(CHAT_URL + '/' + id).then(function (response) {
          return response.data;
        });
      
        return promise;
      },
      
      saveChat: function(userAId, userBId, messages) {

        var ChatObject = {'userAId': userAId, 'userBId': userBId, 'messages': messages};

        var promise = $http.post(CHAT_URL, ChatObject).then(function (response) {
          return response.data;
        });
      
        return promise;
      }
      
    };

    return ChatService;
  });
