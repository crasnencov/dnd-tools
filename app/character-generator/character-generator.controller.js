'use strict';
(function () {
  function CharacterGeneratorCtrl($scope, CharacterService) {
    var vm = this;

    function init() {
      CharacterService.initCharacter();
      // CharacterService.calculateModifiers();
      vm.character = CharacterService.character;
    }

    init();

    $scope.$watch(function () {
      return vm.character.abilities;
    }, function (newValue, oldValue) {
      console.log('new value ' + newValue);
      vm.character.modifiers.strength = Math.floor((newValue - 10) / 2);
      console.log(arguments);
      console.log('calculate modifiers ' + vm.character.modifiers.s);
    }, true);

    vm.onClickModifiers = function () {
      console.log($scope);
      CharacterService.calculateModifiers();
      $scope.myVar = ++$scope.myVar;
    };
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



