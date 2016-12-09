'use strict';
(function () {
  function CharacterService() {

    return {
      initCharacter: function () {
        return this.character = {
          abilities: {
            strength: 20,
            dexterity: 14,
            constitution: 43,
            intelligence: 56,
            wisdom: 12,
            charisma: 43
          },
          modifiers: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
          }
        };
      },
      calculateModifier: function(ability) {
        return Math.floor((ability- 10) / 2);
      }
    }

  }


  angular.module('myApp').factory('CharacterService', [CharacterService]);
})();

