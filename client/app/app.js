angular.module('sundayone', [
  'ui.router',
  'ngFx',
  'sundayone.home'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('index', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'home/home.html'
      });
  
  $urlRouterProvider.otherwise('/');
});