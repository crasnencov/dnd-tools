'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controllerAs: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);