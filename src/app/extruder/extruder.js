angular.module('ReossGui.extruder', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'OctoPrint'
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

.controller('ExtruderCtl', ["$scope", "$timeout", 'OctoPrint', function ExtruderCtl($scope, $timeout, OctoPrint) {


    $scope.currentExtruder = {
        kind: "fuse",
        attributes: {
            filament: "1.75",
            diameter: "0.35"
        }
    };


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
           $scope.wizard.step = 'select_home_head';
           $scope.currentExtruder.kind = "fuse";
            OctoPrint.goHome( function(){
               console.log("Home head done");
               // console.log(axis);        
               $scope.wizard.step = 'select_fuse';
            });

        } else {
            // load wet presets
            $scope.currentExtruder.kind = "wet";
            $scope.wizard.step = 'select_home_head';
            OctoPrint.goHome( function(){
               console.log("Home head done");
               // console.log(axis);        
               $scope.wizard.step = 'select_wet';
            });

        }

        // $scope.wizard.step = 'select_' + t;
        $scope.wizard.extruder = t;
    };

    $scope.startWizard = function(ev) {
        $scope.wizard = defaultWizard();
        $scope.wizard.step = 'select_extruder_type';
    };


    $scope.fuseExtruderInstalled = function(){
        $scope.wizard.step = 'select_success';
    };


    $scope.wetExtruderInstalled = function(){
        OctoPrint.goHomeWet( function(){
            console.log("Home head done");

            $scope.wizard.step = "select_set_zero";

        });

    };

    $scope.wetExtruderSetZero = function(){
        OctoPrint.resetZero( function(){
            console.log("Zero head done");
            $scope.wizard.step = "select_success";

        });

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
