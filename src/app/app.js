'use strict';

/**
 * @ngdoc overview
 * @name app
 * @requires home
 * @requires common
 * @description
 * Pulls all modules together to form the SegmintOne application.
 */
angular.module('app', ['modHome'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/home.html',
                controller: 'homeCtrl'
            });
        $locationProvider.html5Mode(true).hashPrefix('!');
        $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }]);

/**
 * @ngdoc overview
 * @name modHome
 * @author Josh Tummel
 * @description
 * Anything related to the home page.
 */
angular.module('modHome', ['modCommon']);

/**
 * @ngdoc overview
 * @name modCommon
 * @author Josh Tummel
 * @description
 * Anything that can be used in multiple modules.
 */
angular.module('modCommon', ['ngRoute']);