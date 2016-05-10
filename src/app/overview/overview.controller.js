(function() {
  'use strict';

  angular
    .module('cocrear')
    .controller('OverviewController', OverviewController);

  /** @ngInject */
  function OverviewController($timeout, feature) {
    var vm = this;
    vm.amount = 200;
    vm.features = [];

    activate();

    function activate() {
      fillFeatures();
    }


    function fillFeatures() {
      vm.features = feature.getFeatures();
    }

  }
})();
