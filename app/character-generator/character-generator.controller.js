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
      return vm.character;
    }, function (newValue, oldValue) {
      // console.log(CharacterService.character);
    }, true);

    vm.onClickModifiers = function () {
      // console.log($scope);
      // CharacterService.calculateModifiers();
      // $scope.myVar = ++$scope.myVar;
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



