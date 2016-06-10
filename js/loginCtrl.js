var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $firebaseAuth, authService, $state){
   var ref = new Firebase("http://virgo.firebaseio.com/messages");
  
  $scope.authObj = $firebaseAuth(ref);
  $scope.user = $scope.authObj.$getAuth();
  
  $scope.login = function() {
    $scope.authObj.$authWithOAuthRedirect("google");
  };
  
  $scope.authObj.$onAuth(function(authObj) {
    $scope.user = authObj;
    if (authObj){
      $state.go('threads')
    }else{
      $state.go('login')
    }
  });
  
  $scope.logout = function() {
    $scope.authObj.$unauth();
  };
  
  $scope.userData = authService.setUserData($scope.authObj)
    
  }

);
