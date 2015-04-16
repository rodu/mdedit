(function (angular){
 'use strict';

 function PreviewController($scope, data){
    $scope.pageTitle = data.pageTitle;

 }

angular
    .module('myApp.controllers')
    .controller('PreviewController', ['$scope', 'data', PreviewController]);

}(angular));