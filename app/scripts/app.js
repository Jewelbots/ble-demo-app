/* global bluetoothle, ionic */
'use strict';
angular.module('lodash', [])
  .factory('_', function() {
    return window._;
  });

angular.module('ngCordova', ['ngCordova.plugins']);
angular.module('ngCordovaBluetoothle');
angular.module('bleBlaster.controllers', [
  'ngCordovaBluetoothle'
  ]);
angular.module('bleBlaster.services', ['jewelbots.utils', 'ionic']);
angular.module('bleBlaster.directives', []);
angular.module('bleBlaster',
 [
  'ionic',
  'lodash',
   'ngCordova',
  'bleBlaster.services',
  'bleBlaster.controllers',
  'jewelbots.utils',
  'bleBlaster.directives'
  ])
.run(
 ['$cordovaSplashscreen',
  '$ionicPlatform',
  '$logService',
  '$timeout',
  function (
  $cordovaSplashscreen,
  $ionicPlatform,
  $logService,
  $timeout
  ) {
  $ionicPlatform.ready().then(function() {
    if (typeof bluetoothle === 'undefined') {
      $logService.Log('message', 'No bluetoothle');
    }
    else {
      $logService.Log('message','bluetoothle is: ' + JSON.stringify(bluetoothle));
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if (typeof navigator !== 'undefined' && typeof navigator.splashscreen !== 'undefined') //improvement; either mock or do this check in ng-cordova
    $timeout(function() {
        $cordovaSplashscreen.hide();
    }, 5000);
  });
}])

.config (
[ '$stateProvider',
  '$urlRouterProvider',
   function (
   $stateProvider,
   $urlRouterProvider) {
     $stateProvider
    .state('settings', {
      url: '/settings',
      controller: 'SettingsCtrl',
      templateUrl: 'templates/settings/settings.html'
    })
      .state('demo', {
        url: '/demo',
        abstract: true,
        templateUrl: 'templates/demo/tabs.html'
      })
      .state('demo.select', {
        url: '/select',
        views: {
          'demo-select': {
            templateUrl: 'templates/demo/select.html',
            controller: 'DemoCtrl'
          }
        }
      })
      .state('demo.control', {
        url: '/control',
        views: {
          'demo-control': {
            templateUrl: 'templates/demo/control.html',
            controller: 'ControlCtrl'
          }
        }
      })
      .state('demo.weather', {
        url: '/weather',
        views: {
          'demo-weather': {
            templateUrl: 'templates/demo/weather.html',
            controller: 'DemoCtrl'
          }
        }
      });
      $urlRouterProvider.otherwise('/demo/select');
}]);





