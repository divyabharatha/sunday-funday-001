angular.module('sundayone', [
  'ui.router',
  'ngFx',
  'sundayone.home'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'home/home.html'
      });
  $stateProvider
      .state('home.sidebar', {
        url: '/sidebar',
        template: '<h1> erro!!! </h1>'
      });
  
  $urlRouterProvider.otherwise('/home/sidebar');
});