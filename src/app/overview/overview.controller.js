(function() {
  'use strict';

  angular
    .module('cocrear')
    .controller('OverviewController', OverviewController);

  /** @ngInject */
  function OverviewController($timeout, feature, metacoin) {
    var vm = this;
    vm.amount = 200;
    vm.features = [];
    vm.balance;

    activate();

    function activate() {
      fillFeatures();
      fillBalance();
    }


    function fillFeatures() {
      vm.features = feature.getFeatures();
    }

    function fillBalance() {
      vm.balance = metacoin.getBalance();
    }

  }
})();
