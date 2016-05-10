(function() {
  'use strict';

  angular
      .module('cocrear')
      .service('feature', feature);

  /** @ngInject */
  function feature() {
    var data = [
      {
        'title': 'Post Idea',
        'url': 'https://angularjs.org/',
        'description': 'Post and share your awesome idea',
        'logo': 'angular.png'
      },
      {
        'title': 'Grow Idea',
        'url': 'http://browsersync.io/',
        'description': 'Grow your Idea',
        'logo': 'browsersync.png'
      },
      {
        'title': 'Raise Money',
        'url': 'http://gulpjs.com/',
        'description': 'Raise money for your idea',
        'logo': 'gulp.png'
      }
    ];

    this.getFeatures = getFeatures;

    function getFeatures() {
      return data;
    }
  }

})();
