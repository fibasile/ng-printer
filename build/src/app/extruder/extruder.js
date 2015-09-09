angular.module('ReossGui.extruder', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('extruder', {
        url: '/extruder',
        views: {
            "main": {
                controller: 'ExtruderCtl',
                templateUrl: 'extruder/extruder.tpl.html'
            }
        },
        data: {
            pageTitle: 'Change Extruder'
        }
    });
})

.controller('ExtruderCtl', ["$scope", "$timeout", function ExtruderCtl($scope, $timeout) {


    $scope.currentExtruder = {
        kind: "fuse",
        attributes: {
            filament: "1.75",
            diameter: "0.35"
        }
    };


    var defaultWizard = function() {
        return {
            step: null

        };

    };


    $scope.wizard = defaultWizard();
    $scope.preset = "10mm";
    $scope.scale = 0.001;
    $scope.extruder_position = 0;

    $scope.stepOne = function() {
        $scope.wizard.step = 'select_extruder_type';
        // $scope.$apply();
    };

    $scope.selectType = function(t) {
        if (t == 'fuse') {
            // load fuse presets
        } else {
            // load wet presets
        }

        $scope.wizard.step = 'select_' + t;
        $scope.wizard.extruder = t;
    };

    $scope.startWizard = function(ev) {
        $scope.wizard = defaultWizard();
        $scope.wizard.step = 'select_home_head';
        $timeout($scope.stepOne, 1000);
    };

    $scope.startToolChange = function() {
        $scope.wizard.step = "select_set_zero";
        // alert("Using preset: " + $scope.preset);
    };
    $scope.saveZero = function() {

        $scope.wizard.step = 'select_success';

    };

    $scope.updatePosition = function(delta) {
        $scope.send_cmd();
        $scope.extruder_position += delta;
        $scope.send_cmd = true;
        $timeout(function() {
            $scope.send_cmd = false;
        }, 1000);

    };


}])

;
