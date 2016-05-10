(function() {
  'use strict';

  angular
    .module('cocrear')
    .controller('OverviewController', OverviewController);

  /** @ngInject */
  function OverviewController() {
    var vm = this;
    vm.amount = 200;

        activate();

    function activate() {
    }


  }
})();
