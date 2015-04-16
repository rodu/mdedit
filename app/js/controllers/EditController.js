(function (angular) {
  'use strict';

  function EditController($scope, data) {
    $scope.pageTitle = data.pageTitle;
    $scope.message = data.message;
    $scope.isSendVisible = false;

    $scope.checkMessage = function () {
      if ($scope.message.length > 10) {
        $scope.isSendVisible = true;
      }
    };

    $scope.clearMessage = function () {
      $scope.message = '';
    };

    $scope.onSubmit = function () {};
  }

  angular
    .module('myApp.controllers')
    .controller('EditController', ['$scope', 'data', EditController]);

}(angular));