'use strict';
(function () {
  function CharacterGeneratorCtrl($scope, CharacterService) {
    var vm = this;

    function init() {
      if(!vm.character){
        vm.character = CharacterService.initCharacter();
      }
    }

    init();
  }

  angular.module('myApp.CharacterGenerator', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/character-generator', {
        templateUrl: 'character-generator/character-generator.html',
        controller: CharacterGeneratorCtrl,
        controllerAs: 'charGen'
      });
    }])

    .controller('CharacterGeneratorCtrl', ['$scope', 'CharacterService']);
})();



