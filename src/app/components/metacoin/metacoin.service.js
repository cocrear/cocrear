(function() {
  'use strict';

  angular
      .module('cocrear')
      .service('metacoin', metacoin);


      /** @ngInject */
  function metacoin() {
    var balance = 100;

    this.getBalance = getBalance;

    function getBalance() {
      return balance;
    }

  }

})();