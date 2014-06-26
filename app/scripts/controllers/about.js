'use strict';

/**
 * @ngdoc function
 * @name test4App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test4App
 */
angular.module('test4App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
