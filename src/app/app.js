'use strict';

/**
 * @ngdoc overview
 * @name app
 * @author Josh Tummel
 * @requires modHome
 * @requires modCommon
 * @description
 * Pulls all modules together to form the BTC Dashboard application.
 */
angular.module('app', ['modHome'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/views/login.html',
                controller: 'loginCtrl'
            }).
            when('/dashboard', {
                templateUrl: '/views/dashboard.html',
                controller: 'loginCtrl'
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
 * @requires ngRoute
 * @description
 * Anything that can be used in multiple modules.
 */
angular.module('modCommon', ['ngRoute']);