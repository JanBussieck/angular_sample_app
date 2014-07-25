'use strict';

/**
 * @ngdoc function
 * @name hammingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hammingApp
 */
angular.module('hammingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Just in time',
      'Kindergarten'
    ];
  });
