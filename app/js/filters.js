(function (angular) {
  'use strict';

  function interpolateFilter(version){
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }

  angular
    .module('myApp.filters')
    .filter('interpolate', ['version', interpolateFilter]);

}(angular));
