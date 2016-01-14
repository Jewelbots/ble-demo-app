'use strict';
angular
	.module('bleBlaster.controllers')
	.controller('DemoCtrl', [
		'$cordovaBluetoothle',
		'$ionicPlatform',
		'$logService',
    '$scope',
    '$state',
    'DeviceService',
		function(
    $cordovaBluetoothle,
    $ionicPlatform,
    $logService,
    $scope,
    $state,
    DeviceService) {

      $scope.devices = {
        detected: [ ],
        selected: [ ]
      };

      $scope.scanForDevices = function() {
        $ionicPlatform.ready().then(function () {
          DeviceService.getAvailableDevices()
            .then(update)
            .then(stopRefresh);
        });
      };

      $scope.selectDevice = function(device) {
        if (DeviceService.isSelected(device)) {
          return DeviceService.deselectDevice(device);
        }
        DeviceService.selectDevice(device);
      };

      $scope.numDetected = function() {
        return DeviceService.numDetected;
      };

      $scope.numSelected = function() {
        return DeviceService.numDetected;
      };

     	$scope.getDeviceColor = function(device) {
				return DeviceService.isSelected(device) ? 'item-calm' : 'item-light';
			};

      $scope.display = function(device) {
        return device.name || 'unnamed device' + ' ' + device.address;
      };

      function update() {
        $scope.devices.detected = DeviceService.devices.detected;
        $scope.devices.selected = DeviceService.devices.selected;
      }

      var stopRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
      };
  	}
	])
;
