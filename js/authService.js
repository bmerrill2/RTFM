var app = angular.module('rtfmApp');

app.service('authService', function () {

  var userData = null;

  this.setUserData = function (data) {
    userData = data
  }

  this.getUserData = function () {
    return userData
  }

})