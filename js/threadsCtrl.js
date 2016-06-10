var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function ($scope, threadsRef, $firebaseArray, userData) {

  $scope.threads = $firebaseArray(threadsRef);

  $scope.threads.$loaded().then(function (threads) {
    console.log(threads);
  });

  $scope.createThread = function (username, threadTitle) {
    $scope.threads.$add ({
      username: username,
      title: threadTitle
    });
    
  };
  
  console.log(userData);
  
})