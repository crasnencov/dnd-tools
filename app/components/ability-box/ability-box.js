'use strict';
(function () {
  angular.module('myApp').component('abilityBox', {
    bindings: {
      abilityName: '=',
      ability: '=',
      modifier: '='
    },
    templateUrl: 'components/ability-box/ability-box.html',
    controller: AbilityBoxController
  });

  function AbilityBoxController ($scope, CharacterService, constants) {
    var ctrl = $scope.$ctrl;

    $scope.$watch(function () {
      return ctrl.ability;
    }, function (newValue, oldValue) {
      if(newValue === ""){
        return;
      }
      var onlyNumbers = /^\d+$/;
      if(!onlyNumbers.test(newValue)){
        return ctrl.ability = oldValue;
      }
      if (newValue < constants.MIN_ABILITY){
        ctrl.ability = constants.MIN_ABILITY;
      }
      if (newValue > constants.MAX_ABILITY){
        ctrl.ability = constants.MAX_ABILITY;
      }

      var newModifier = CharacterService.calculateModifier(newValue);

      if (newModifier < constants.MIN_ABILITY){
        ctrl.modifier = constants.MIN_ABILITY;
      }else {
        ctrl.modifier = newModifier;
      }

    }, true);

  }

})();