'use strict';
(function () {
  function DiceService() {

    return {
      diceCount: function (diceNumber) {
        return Math.floor(Math.random() * diceNumber) + 1;
      },
      generateAbility: function (twenty) {
        var diceArray = [];
        for (var i = 4; i > 0; i--) {
          var result = this.diceCount(twenty);
          diceArray.push(result);
        }
        var minValueArray = (Math.min.apply(null, diceArray));
        var index = diceArray.indexOf(minValueArray);
        if (index > -1) {
          diceArray.splice(index, 1);
        }

        var sumArray = diceArray.reduce(function (sum, current) {
          return sum + current;
        }, 0);
        return sumArray;
      }
    }

  }

  angular.module('myApp').factory('DiceService', [DiceService]);
})();