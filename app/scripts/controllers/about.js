'use strict';

/**
 * @ngdoc function
 * @name hammingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hammingApp
 */
angular.module('hammingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
