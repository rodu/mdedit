(function (angular) {
  'use strict';

  function config($routeProvider) {

    $routeProvider.when('/edit', {
      templateUrl: 'views/edit.html',
      controller: 'EditController',
      resolve: {
        data: function () {
          return {
            pageTitle: 'Edit',
            message: 'Default message.'
          };
        }
      }
    });

    $routeProvider.when('/preview', {
      templateUrl: 'views/preview.html',
      controller: 'PreviewController',
      resolve: {
        data: function () {
          return {
            pageTitle: 'Preview',
            message: 'This is the message!'
          };
        }
      }
    });

    $routeProvider.otherwise({
      redirectTo: '/edit'
    });
  }

  // Declaration of the main modules
  angular.module('myApp.filters', []);
  angular.module('myApp.services', []);
  angular.module('myApp.directives', []);
  angular.module('myApp.controllers', []);

  // Declaration of myApp module and it's dependencies
  angular
    .module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ])
    .config(['$routeProvider', config]);

}(angular));