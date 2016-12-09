'use strict';
(function () {
  function CharacterGeneratorCtrl($scope, CharacterService) {
    var vm = this;

    function init() {
      vm.character = CharacterService.initCharacter();
    }

    init();

    $scope.$watch(function () {
      return vm.character;
    }, function (newValue, oldValue) {
      CharacterService.character = vm.character;
    }, true);
  }

  angular.module('myApp.CharacterGenerator', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/character-generator', {
        templateUrl: 'character-generator/character-generator.html',
        controllerAs: 'vm'
      });
    }])

    .controller('CharacterGeneratorCtrl',
    ['$scope', 'CharacterService', CharacterGeneratorCtrl]
  );

})();



