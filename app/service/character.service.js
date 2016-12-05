'use strict';
(function(){
  function CharacterService () {

    return {

      initCharacter: function() {
        this.character = {
          abilities: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
          }
        };
      }

    }
  }

  angular.module('myApp').factory('CharacterService', [CharacterService]);
})();
