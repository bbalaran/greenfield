angular.module('greenfield', [
    'greenfield.services',
    'greenfield.main',
    'greenfield.search',
    'greenfield.userEvents',
    'ngRoute',
    'ngMessages'//form validation in search.html
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'mainController'  
      })
      .when('/search', {
        templateUrl: "app/search/search.html",
        controller: "searchController"
      })
      .when('/userEvents',{ //maybe not this name, it's ugly
        templateUrl: "app/userEvents/userEvents.html",
        controller: "userEventsController"
      })
      // .when('/login', {
      //   templateUrl: "app/login/login.html",
      //   controller: "loginController"
      // }
      .otherwise('/search');
  });
