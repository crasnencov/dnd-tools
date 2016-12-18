'use strict';
(function () {
  angular.module('myApp')
    .config(['$translateProvider', function ($translateProvider) {

      $translateProvider.useStaticFilesLoader({
        files: [{
          prefix: './translations/',
          suffix: '.json'
        }]
      });

      $translateProvider.preferredLanguage('ru');
    }]);
})();