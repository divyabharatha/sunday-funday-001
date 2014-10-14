angular.module('sundayone.home', [])

.controller('HomeController', function ($scope, $window, $location, $state) {
  $scope.user = "justin";

  $scope.todo = {};

  $scope.todos = [];

  $scope.addTodos = function() {
    $scope.todos.push( $scope.todo );
    $scope.todo = {};
  };

  $state.transitionTo('home.subviews');

});