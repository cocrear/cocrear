(function() {
  'use strict';

  angular
    .module('cocrear')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })

      .state('overview', {
        url: '/',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewController',
        controllerAs: 'overview'
      })

     .state('home', {
        url: '/test',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
