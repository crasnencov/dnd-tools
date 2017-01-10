'use strict';
(function () {
  function CharacterService() {

    return {
      initCharacter: function () {
        this.character = {
          abilities: {
            strength: 40,
            dexterity: 14,
            constitution: 16,
            intelligence: 18,
            wisdom: 12,
            charisma: 9
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
        return this.character
      },
      calculateModifier: function (ability) {
        return Math.floor((ability - 10) / 2);
      }
    }

  }


  angular.module('myApp').factory('CharacterService', [CharacterService]);
})();

