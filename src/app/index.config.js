(function() {
  'use strict';

  angular
    .module('cocrear')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $provide) {
    $provide.constant('web3Provider', 'http://localhost:8545');
    $provide.constant('backendContractAddress', '0x902b3be699512a87d1cd9b9c9f3edd1cc8f7f623');

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
