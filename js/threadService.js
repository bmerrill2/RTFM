var app = angular.module('rtfmApp');

app.service('threadService', function(fb) {
  
  this.getThreads = function(){
    
    return new Firebase(fb.url + '/threads')
    
  };
  
  this.getThread = function(threadId){
    
    return new Firebase(fb.url + '/threads/' + threadId)
    
  };
  
  console.log(new Firebase(fb.url + '/threads/' + '-K2Y5u2JrDOvBHej-ohx'))
  
  this.getComments = function(threadId){
    return new Firebase(fb.url + '/threads/' + threadId + '/comments');
  }
  
})