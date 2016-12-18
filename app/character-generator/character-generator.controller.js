'use strict';
(function () {
  function CharacterGeneratorCtrl($scope, CharacterService, $http) {
    var vm = this;

    function init() {
      $http.get('./translations/en.json')
        .then(function(res){
          console.log(res);
        });
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
    }]);
})();



