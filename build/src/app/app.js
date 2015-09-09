angular.module( 'ReossGui', [
  'rzModule',
  'templates-app',
  'templates-common',
  'ReossGui.home',
  'ReossGui.jog',
  'ReossGui.restart',
  'ReossGui.about',
  'ReossGui.wizard',
  'ReossGui.settings',
  'ReossGui.extruder',
  'ReossGui.connection',
  'ReossGui.status',
  'ui.router',
  'angularMoment'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/connection' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ReossGui' ;
    }
  });
})

;

