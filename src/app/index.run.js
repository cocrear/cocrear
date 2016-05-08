(function() {
  'use strict';

  angular
    .module('cocrear')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
