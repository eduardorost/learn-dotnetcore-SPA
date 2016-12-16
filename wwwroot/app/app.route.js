(function () {
  'use strict';
  angular.module('agiplan').config(ConfigureRoutes);

  function ConfigureRoutes($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    var home = {
      templateUrl: '/app/components/home/home.html',
      controller: 'homeController',
      controllerAs: 'homeController'
    };

    $routeProvider
      .when('/', home)
      .otherwise('/');
  }
})();
