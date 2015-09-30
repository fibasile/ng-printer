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
    $scope.size = 5;
    $scope.capacity = 1;
    $scope.direction = 0;
    $scope.microsteps =  0;


    var values = [
        {vol: 0.1, diam: 5, steps: 0.283},
        {vol: 0.1, diam: 10, steps: 0.070},
        {vol: 0.3, diam: 5, steps: 0.849},
        {vol: 0.3, diam: 10, steps: 0.212},
        {vol: 0.5, diam: 5, steps: 1.415},
        {vol: 0.5, diam: 10, steps: 0.353},
        {vol: 1, diam: 10, steps: 0.707},
        {vol: 1, diam: 5, steps: 2.830}
    ];

    $scope.setFlow = function(f){    
        $scope.flow += parseFloat(f);
        $scope.flow = $scope.flow.toFixed(3);
        $scope.flow = Math.max(0,$scope.flow);
        $scope.updateFlow();
    };

    $scope.setSize = function(f){
        $scope.size += parseFloat(f);
        $scope.size = Math.max(0,$scope.size);
        $scope.updateFlow();
    };

    $scope.setCapacity = function(f){
        $scope.capacity = parseFloat($scope.capacity);
        $scope.capacity += parseFloat(f);
        $scope.capacity = $scope.capacity.toFixed(3);
        $scope.capacity = Math.max(0,$scope.capacity);
        $scope.updateFlow();
    };


    $scope.setDirection = function(f){
        $scope.direction = f;
    };


    $scope.updateFlow = function(){
        $scope.capacity = parseFloat($scope.capacity);
        $scope.size = parseFloat($scope.size);
        $scope.flow = parseFloat($scope.flow);

        // compute steps 
        for (var i=0;i<values.length;i++){
            var o = values[i];
            if (o.vol == $scope.capacity && o.diam == $scope.size ) {
                console.log('found microsteps');
                $scope.microsteps = parseFloat(o.steps) * $scope.flow / 100;
                $scope.microsteps = $scope.microsteps.toFixed(3);
                break;
            }
        }

    };

    $scope.startExtruding = function(direction){
        // compute steps from microsteps
        // var steps = //$scope.microsteps / 128;
        var steps = $scope.microsteps;
        pump.run( direction, steps, function(){
            // alert("Yeah");
        });
    };


    $scope.stopExtruding = function(){
        pump.stop(function(){

            // alert("Stoppa");
        });
    };

    $scope.updateStatus = function(){

    };

    $scope.updateFlow();


}]);