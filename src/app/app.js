'use strict';

/**
 * @ngdoc overview
 * @name app
 * @requires home
 * @requires common
 * @description
 * Pulls all modules together to form the SegmintOne application.
 */
angular.module('app', ['modHome', 'modCommon'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            // Campaign wizard routing
            .when('/', {
                templateUrl: '/html/campaigns/details.phtml',
                controller: 'ctrHome'
            });
        $locationProvider.html5Mode(true).hashPrefix('!');
        $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }]);

// Declare placeholders so all included files just extend them.
angular.module('modHome', []);
angular.module('modCommon', []);