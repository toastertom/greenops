angular.module('green-ops', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: "views/home.html",
      controller:'homeCtrl'
      })
    .state('services', {
      url:'/services',
      templateUrl: "views/services.html",
      controller:'servicesCtrl'
      })
    .state('about', {
      url:'/about',
      templateUrl: "views/aboutUs.html"

      })
    .state('contact', {
      url:'/contact',
      templateUrl: "views/contactUs.html"

      })



    $urlRouterProvider
      .otherwise('/');

});
