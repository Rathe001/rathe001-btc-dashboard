'use strict';

angular.module('app.controllers', [])
	.controller('ctrl', ['$scope', '$http', '$filter', '$timeout', function($scope, $http, $filter, $timeout) {

		// Public variables
		$scope.app = {};
		$scope.app.load_time = 0;
		$scope.app.refresh = 0;
		$scope.load_time_old = 0;
		$scope.load_time_new = 0;
		$scope.params = {};
		$scope.params.refresh_time = 10000;
		$scope.snapshot_new = {};
		$scope.snapshot_new.buy = 0;
		$scope.snapshot_new.sell = 0;
		$scope.snapshot_old = {};
		$scope.snapshot_old.buy = 0;
		$scope.snapshot_old.sell = 0;
		$scope.show = {};
		$scope.show.orders = false;
		$scope.data = {};
		$scope.stats = {};
		$scope.initial_investment = -48.25;
		$scope.initial_btc = 0;

		$scope.pageInit = function () {

			// Load the data initially
			getSnapshot();
			getTransactions();

			// Starts the data loading loop
			$scope.timerID = setInterval(function(){
				$scope.$apply(function() {
					getSnapshot();
					getTransactions();
				});
			}, $scope.params.refresh_time);
		}

		function getSnapshot () {
			var load_time_start = Date.now();
			var load_time_new = 0;
			var old_snapshot = $scope.snapshot_new;

			$http.get('./bin/get_snapshot.php')
				.success(function (data,status,headers,config) {

					// Update the new snapshot
					setSnapshotData(data);

					// Update the old snapshot
					setOldSnapshotData(old_snapshot);

					load_time_new = Date.now();
					$scope.app.load_time = load_time_new - load_time_start + $scope.params.refresh_time;
					$scope.app.refresh++;
				})
				.error(function (data,status,headers,config) {
					temp_data = {};
					console.log('Snapshot error');
				});
		}

		function setSnapshotData (data) {
			if ($scope.snapshot_new.sell != data.sell.amount) {
				$scope.snapshot_old.sell = $scope.snapshot_new.sell;
			}
			if ($scope.snapshot_new.buy != data.buy.amount) {
				$scope.snapshot_old.buy = $scope.snapshot_new.buy;
			}
			$scope.snapshot_new.buy = data.buy.amount;
			$scope.snapshot_new.sell = data.sell.amount;
			console.log($scope.snapshot_new.sell, $scope.snapshot_old.sell);
		}

		function setOldSnapshotData (data) {

		}

		function getTransactions () {
			$http.get('./bin/get_transactions.php')
				.success(function (data,status,headers,config) {
					$scope.data = data;
					$scope.data.final_balance = ((data.final_balance/100000000) - $scope.initial_btc).toFixed(8);
					// Subtract off the first transfer
					$scope.total_investment = $scope.initial_investment;
				})
				.error(function (data,status,headers,config) {
					console.log('Transactions error');
				});
		}

		function numKeys(obj) {
			var count = 0;
			for(var prop in obj) {
				count++;
			}
			return count;
		}
		$scope.calcProfit = function (buy, sell) {
			return (buy-sell).toFixed(2);
		}

		$scope.calcLastProfit = function (btc, price) {
			return (parseFloat($scope.snapshot_new.sell * btc) - price).toFixed(2);
		}
		$scope.stats.getValue = function () {
			var btc = $scope.data.final_balance ;

			return parseFloat(btc*$scope.snapshot_new.sell);
		}
		$scope.stats.getProfit = function () {
			var value = $scope.stats.getValue();
			var invest = $scope.total_investment;

			return parseFloat(value-invest);
		}
		$scope.stats.getPercentage = function () {
			var value = $scope.stats.getValue();
			var invest = $scope.total_investment;

			if (invest < 1) {
				invest = value;
			}

			return parseFloat((value/invest)*100).toFixed(3);
		}
	}]);