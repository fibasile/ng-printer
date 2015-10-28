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
.controller('WetCtrl', ['$scope', 'OctoPrint', 'pump', '$interval', function WetCtrl($scope, OctoPrint, pump, $interval) {


    $scope.flow = pump.settings.flow;
    $scope.size = pump.settings.size;
    $scope.capacity = pump.settings.capacity;
    $scope.direction = 0;
    $scope.microsteps =  0;
    $scope.status = pump.settings.status;
    $scope.overrideScale = 1;


    $scope.values = [
  /*      {vol: 0.1, diam: 5, steps: 0.283},
        {vol: 0.1, diam: 10, steps: 0.070},
        {vol: 0.3, diam: 5, steps: 0.849},
        {vol: 0.3, diam: 10, steps: 0.212},
        {vol: 0.5, diam: 5, steps: 1.415},
        {vol: 0.5, diam: 10, steps: 0.353},
        {vol: 1, diam: 10, steps: 0.707},
        {vol: 1, diam: 5, steps: 2.830}
        */
        { label: 'SOCOREX 20 mL', diam: '20', 'vol': 0.1, 'steps' : 0.018},
        // { label: 'SOCOREX 20 mL', diam: '20', 'vol': 0.5, 'steps' : 0.092},
        // { label: 'SOCOREX 20 mL', diam: '20', 'vol': 1, 'steps' : 0.184},
        { label: 'SOCOREX 10 mL', diam: '10', 'vol': 0.1, 'steps' : 0.032},
        // { label: 'SOCOREX 10 mL', diam: '10', 'vol': 0.5, 'steps' : 0.161},
        // { label: 'SOCOREX 10 mL', diam: '10', 'vol': 1, 'steps' : 0.322},
        { label: 'Hamilton #1005 5 mL', diam: '5', 'vol': 0.1, 'steps' : 0.067},
        // { label: 'Hamilton #1005 5 mL', diam: '5', 'vol': 0.5, 'steps' : 0.339},
        // { label: 'Hamilton #1005 5 mL', diam: '5', 'vol': 1, 'steps' : 0.679},
        { label: 'Terumo 12 mL', diam: '12', 'vol': 0.1, 'steps' : 0.027},
        // { label: 'Terumo 12 mL', diam: '12', 'vol': 0.5, 'steps' : 0.138},
        // { label: 'Terumo 12 mL', diam: '12', 'vol': 1, 'steps' : 0.276},
        { label: 'Terumo 6 mL', diam: '6', 'vol': 0.1, 'steps' : 0.041}
        // { label: 'Terumo 6 mL', diam: '6', 'vol': 0.5, 'steps' : 0.209},
        // { label: 'Terumo 6 mL', diam: '6', 'vol': 1, 'steps' : 0.418}
    ];


    $scope.setOverrideScale= function(scale){
        $scope.overrideScale = scale;
    };

    $scope.setFlow = function(f){    
        $scope.flow += parseFloat(f) * $scope.overrideScale;
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
        for (var i=0;i<$scope.values.length;i++){
            var o = $scope.values[i];
            if (/*o.vol == $scope.capacity && */ o.diam == $scope.size ) {
                console.log('found microsteps');
                $scope.microsteps = parseFloat(o.steps) * 10 * $scope.capacity * ($scope.flow / 100);
                $scope.microsteps = $scope.microsteps.toFixed(3);
                break;
            }
        }

        pump.settings.capacity = $scope.capacity;
        pump.settings.size = $scope.size;
        pump.settings.flow = $scope.flow;
        pump.settings.microsteps = $scope.microsteps;



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

        pump.status( function(status){
            if (status == null){
                console.log("Cannot read status");
                return;
            }
            if (typeof(status.status) !== undefined) {
                $scope.status = status.status;
                pump.settings.status = status.status;
            }
            console.log("status " + status);
        });

    };

    $scope.updateFlow();

    $interval(function(){
        $scope.updateStatus();
    },1000);


}]);
