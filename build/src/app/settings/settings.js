angular.module( 'ReossGui.settings', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'settings', {
    url: '/settings',
    views: {
      "main": {
        controller: 'SettingsCtrl',
        templateUrl: 'settings/settings.tpl.html'
      }
    },
    data:{ pageTitle: 'Current Settings' }
  });
})

.controller( 'SettingsCtrl', function SettingsCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];


  $scope.settings = {};
  $scope.settings.extruder_size=0.5;
  

  $scope.settings.presets = [{
    'name' : '10mm', 'value' : 10
  }];
})

;
