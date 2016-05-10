(function() {
  'use strict';

  angular
    .module('cocrear')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewController',
        controllerAs: 'overview'
      })

     .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
