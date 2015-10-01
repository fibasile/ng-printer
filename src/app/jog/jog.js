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
angular.module( 'ReossGui.jog', [
  'ui.router',
  'plusOne',
  'OctoPrint'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'jog', {
    url: '/jog',
    views: {
      "main": {
        controller: 'JogCtrl',
        templateUrl: 'jog/jog.tpl.html'
      }
    },
    data:{ pageTitle: 'Jog' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'JogCtrl', ["$scope","$window" ,"OctoPrint", function JogCtrl( $scope,$window, OctoPrint) {


    $scope.jogScale = 1;

    $scope.setJogScale = function(newScale) {
       $scope.jogScale = newScale;
    };


    $scope.jog=function(direction){
    
        var params = direction;
        params.scale = $scope.jogScale;
        OctoPrint.jogHead(params, function(){

        console.log("Jog head done");
        console.log(params);        
        
        });
    
    
    };
    
    $scope.home=function(){
    
      var axis = ['x','y'];
        OctoPrint.homeHead(axis, function(){
           console.log("Home head done");
           console.log(axis);        
        });
    };
    
    
    $scope.home_z=function(){

        var axis = ["x","y"];
        OctoPrint.homeHead(axis, function(){
           console.log("Home head done");
           console.log(axis);        
        });
 
    };    

    $scope.feed_rate = 100;
    
    $scope.extrude_flow = 100;

    $scope.extruderFlowChange = function(){


    };


    $scope.setTemperature = function(temp){
      OctoPrint.setTemperature(temp, function(){


      });
    };


    $scope.extrude = function(){
      OctoPrint.extrude($scope.extrude_flow, function(){


      });
    };



    $scope.retract = function(){
      OctoPrint.retract($scope.extrude_flow, function(){


      });
    };


}])

;

