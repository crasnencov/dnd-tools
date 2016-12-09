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

  function AbilityBoxController ($scope) {
    var ctrl = $scope.$ctrl;

    console.log(ctrl);

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
      if (newValue < 0){
        ctrl.ability = 0;
      }
      if (newValue > 20){
        ctrl.ability = 20;
      }

      var newModifier = Math.floor((newValue- 10) / 2);

      if (newModifier < 0){
        ctrl.modifier = 0;
      }else {
        ctrl.modifier = newModifier;
      }

    }, true);

  }

})();