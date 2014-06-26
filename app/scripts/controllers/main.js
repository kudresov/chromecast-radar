'use strict';

/**
 * @ngdoc function
 * @name test4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test4App
 */
angular.module('test4App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
