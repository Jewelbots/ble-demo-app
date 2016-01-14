'use strict';
angular.module('bleBlaster.controllers')
  .controller('SettingsCtrl', ['$logService','$scope', function($logService, $scope){
   $scope.model = {
    messages: []
   };
   $scope.deleteLog = function () {
    $logService.Clear();
    $scope.model.messages = $logService.Get('all');
   };
   $scope.startUp = function () {
    $scope.model.messages = $logService.Get('all');
   };
   $scope.startUp();
  }]);
