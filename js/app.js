var app = angular.module('rtfmApp', ['firebase', 'ui.router'])

app.constant('fb', {
  url: 'https://bradrtfm.firebaseio.com/'
});

app.config(function($stateProvider, $urlRouterProvider){
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/templates/login.html',
      controller: 'loginCtrl'
  })
    .state('threads', {
      url: '/threads',
      templateUrl: 'js/templates/threads.html',
      controller: 'threadsCtrl',
      resolve: {
        threadsRef: function (threadService){
          return threadService.getThreads()
        },
        userData: function ($state, authService){
          var userData = authService.getUserData()
          if (!userData) {
            setTimeout(function(){
               $state.go('login')
            })
          } else {
            return userData
          }
        }
      }
  })
    .state('thread', {
      url: '/threads/:threadId',
      templateUrl: 'js/templates/thread.html',
      controller: 'threadCtrl',
      resolve: {
        threadRef: function(threadService, $stateParams){
          return threadService.getThread($stateParams.threadId);
        },
        commentsRef: function(threadService, $stateParams) {
          return threadService.getComments($stateParams.threadId);
        }
      }
  });
  
  $urlRouterProvider.otherwise('/threads')
})

