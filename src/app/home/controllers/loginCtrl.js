'use strict';

angular.module('modHome').
/**
 * @ngdoc controller
 * @name modHome.controller:loginCtrl
 * @requires $scope
 * @description
 * User inputs their account number
 */
    controller('loginCtrl', ['$scope', function ($scope) {
        $scope.form = {};

        /**
         * @ngdoc method
         * @name modHome.controller:loginCtrl#submitAccount
         * @methodOf modHome.controller:loginCtrl
         * @description
         * Submit the account submission form
         */
        $scope.submitAccount = function () {
            console.log('hit');
        }
    }]);
