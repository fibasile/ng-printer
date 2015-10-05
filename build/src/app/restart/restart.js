/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ReossGui.restart', [
  'ui.router',
  'plusOne',
  'power'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'restart', {
    url: '/restart',
    views: {
      "main": {
        controller: 'RestartCtrl',
        templateUrl: 'restart/restart.tpl.html'
      }
    },
    data:{ pageTitle: 'Restart' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'RestartCtrl', ["$scope","$window" , 'power', function RestartCtrl( $scope,$window, power ) {


    $scope.showConfirm = false;
    $scope.action = null;

    $scope.actionRestart = function(){
      $scope.action = "restart";
      $scope.showConfirm = true;
    };


    $scope.actionShutdown = function(){
      $scope.action = "shutdown";
      $scope.showConfirm = true;
    };

    $scope.confirm = function(){
      power.action($scope.action, function(){


      });
    };

    $scope.cancel = function(){
      $scope.showConfirm = false;
      $scope.action = null;
    };

}]);

