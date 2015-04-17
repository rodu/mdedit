(function (angular) {
  'use strict';

  function EditController($scope, data) {
    $scope.pageTitle = data.pageTitle;
    $scope.content = data.content;
    $scope.isSendVisible = false;

    /**
     * Transpiles the text content to markdown for preview.
     */
    $scope.transpile = function () {
      if ($scope.content.length > 10) {
        $scope.isSendVisible = true;
      }
    };

    /**
     * Clears the entire text.
     */
    $scope.clear = function () {
      $scope.content = '';
    };

    $scope.onSubmit = function () {};
  }

  angular
    .module('myApp.controllers')
    .controller('EditController', ['$scope', 'data', EditController]);

}(angular));