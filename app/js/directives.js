(function (angular) {
  'use strict';

  function appVersionDirective(version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }

  angular
    .module('myApp.directives')
    .directive('appVersion', ['version', appVersionDirective]);

}(angular));