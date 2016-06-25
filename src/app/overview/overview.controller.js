(function() {
  'use strict';

  angular
    .module('cocrear')
    .controller('OverviewController', OverviewController);

  /** @ngInject */
  function OverviewController($timeout, feature, backend) {
    var vm = this;
    vm.amount = 200;
    vm.features = [];
    vm.greeting;

    activate();

    function activate() {
      fillGreating();
    }


    function fillGreating() {
      vm.greeting = backend.getGreeting();
    }

  }
})();
