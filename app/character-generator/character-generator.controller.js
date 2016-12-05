'use strict';
(function(){
  function CharacterGeneratorCtrl ($scope, CharacterService) {
    var vm = this;

    function init(){
      CharacterService.initCharacter();
      vm.character = CharacterService.character;
    }



    console.log(CharacterService.character);
    console.log($scope);

    init();
  }

  angular.module('myApp.CharacterGenerator', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/character-generator', {
      templateUrl: 'character-generator/character-generator.html',
      controllerAs: 'CharacterGeneratorCtrl'
    });
  }])

  .controller('CharacterGeneratorCtrl',
    ['$scope', 'CharacterService', CharacterGeneratorCtrl]
  );

})();



