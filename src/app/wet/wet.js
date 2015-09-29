angular.module('ReossGui.wet', [
    'ui.router',
    'OctoPrint',
    'pump'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider.state('wet', {
        url: '/wet',
        views: {
            "main": {
                controller: 'WetCtrl',
                templateUrl: 'wet/wet.tpl.html'
            }
        },
        data: {
            pageTitle: 'Wet'
        }
    });
})

/**
 * And of course we define a controller for our route.
 */
.controller('WetCtrl', ['$scope', 'OctoPrint', 'pump', function WetCtrl($scope, OctoPrint, pump) {


    $scope.flow = 100;
    $scope.size = 100;
    $scope.capacity = 100;
    $scope.direction = 0;
    $scope.microsteps =  0;

    $scope.setFlow = function(f){
        $scope.flow += f;
    };

    $scope.setSize = function(f){
        $scope.size += f;
    };

    $scope.setCapacity = function(f){
        $scope.capacity +=f;

    };

    $scope.setDirection = function(f){
        $scope.direction = f;
    };


    $scope.updateFlow = function(){
        // compute steps 
    };

    $scope.startExtruding = function(){
        // compute steps from microsteps
        var steps = $scope.microsteps / 128;
        var direction = 0;
        pump.run( direction, steps, function(){

            alert("Yeah");
        });
    };


    $scope.stopExtruding = function(){
        pump.stop(function(){

            alert("Stoppa");
        });
    };



}]);