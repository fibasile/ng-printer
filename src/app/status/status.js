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
angular.module('ReossGui.status', [
    'ui.router',
    'plusOne',
    'OctoPrint'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider.state('status', {
        url: '/status',
        views: {
            "main": {
                controller: 'StatusCtrl',
                templateUrl: 'status/status.tpl.html'
            }
        },
        data: {
            pageTitle: 'Status'
        }
    });
})

/**
 * And of course we define a controller for our route.
 */
.controller('StatusCtrl', ['$scope', 'OctoPrint', '$interval', 'moment', function StatusCtrl($scope, OctoPrint, $interval, moment) {


    $scope.version = 'n/a';

    $scope.status = 'n/a';
    $scope.flags = {};
    $scope.job = {};
    $scope.progress = {};
    $scope.tempData = {

        "actual": 0,
        "target": 0,
        "offset": 0
    };

    OctoPrint.getVersion(function(data) {
        $scope.server_version = data.server;
        $scope.api_version = data.api;
    });

    var reloadPrinterState = function() {

        OctoPrint.getMachineState(function(data) {

            $scope.status = data.state.text;
            $scope.flags = data.state.flags;

            //if ($scope.flags.printing){

            //}
            if ($scope.status == 'Operational') {
              $scope.status = 'Idle';
            }
            $scope.isPrinting = ($scope.status == 'Printing');
            $scope.isPaused = ($scope.status == 'Paused');
        });

    };


    $scope.progress_slider = 0;
    var reloadJobState = function() {

        OctoPrint.getCurrentJob(function(data) {

            if (data) {
                $scope.job = data.job;
                $scope.progress = data.progress;
               // console.log(data.job);
                if ($scope.progress) {
                    $scope.progress.percent = parseFloat($scope.progress.completion).toFixed(2);
                    $scope.progress_slider = Math.round($scope.progress.completion);
                }
            }
        });

    };

    var reloadTemp = function() {
        OctoPrint.getTemp(function(data) {

            if (data) {
                $scope.tempData = data.tool0;
            }

        });
    };


    $scope.formatSeconds = function(sec) {
        function leftPad(number, targetLength) {
            var output = number + '';
            while (output.length < targetLength) {
                output = '0' + output;
            }
            return output;
        }

        if (!sec) {
            sec = 0;
        }
        var d = moment.duration(sec, 'seconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;

        return leftPad(hours,2) + ":" + leftPad(mins,2);

    };

    $scope.cancelPrint = function() {

        OctoPrint.printOperation("cancel", function() {

            $scope.isPrinting = false;

        });
    };


    $scope.pausePrint = function() {

        OctoPrint.printOperation("pause", function() {

            $scope.isPrinting = false;
            $scope.isPaused = true;

        });
    };
    $scope.restartPrint = function() {

        OctoPrint.printOperation("restart", function() {

            $scope.isPrinting = true;
            $scope.isPaused = false;

        });
    };



    var pollModels = function(){
        reloadPrinterState();
        reloadJobState();
        reloadTemp();
    };

    pollModels();
    $interval(function() {
        pollModels();

    }, 2000);


}])

;
