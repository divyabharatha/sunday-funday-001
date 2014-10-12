angular.module('sundayone.home', [])

.controller('HomeController', function ($scope, $window, $location, $state) {
  $scope.user = "justin";

  $state.transitionTo('home.subviews');

});