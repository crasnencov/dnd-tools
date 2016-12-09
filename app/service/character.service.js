'use strict';
(function () {
  function CharacterService() {

    return {
      initCharacter: function () {
        this.character = {
          abilities: {
            strength: 25,
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
      calculateModifiers: function () {
        var _this = this;
        angular.forEach(this.character.abilities, function (value, key) {
          _this.character.modifiers[key] = Math.floor((value - 10) / 2);
          console.log(key + ': ' + value);
        });
        console.log(this.character.modifiers); //angular.foreach
      }

    }

  }


  angular.module('myApp').factory('CharacterService', [CharacterService]);
})();

