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
      })
      .state('home.subviews', {
        views: {
          'erro': {
            template: '<h1> erro!!! </h1>'
          },
          'cookies': {
            template: '<h2> cookies!!! </h2>'
          }
        }
      });

  
  $urlRouterProvider.otherwise('/home');
});