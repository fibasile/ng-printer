angular.module('ReossGui.3dview', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

.controller('3DViewCtrl', ["$scope", "$timeout", function($scope, $timeout) {


        $scope.$on("loadSTL", function(evt, param) {

            $scope.loadSTL(param);

        });

        $scope.loadSTL = function(stlFile) {



        };


    }])
    .directive('stlViewer', function() {
        var link = function(scope, element, attrs, controllers) {
            var canvas = element.find('canvas');

            var viewer = new JSC3D.Viewer(canvas[0]);
            viewer.setParameter('SceneUrl', 'assets/lib/jsc3d/demos/bank/Western_Bank.obj');
            viewer.setParameter('InitRotationX', 0);
            viewer.setParameter('InitRotationY', 0);
            viewer.setParameter('InitRotationZ', 0);
            viewer.setParameter('ModelColor', '#0000ff');
            viewer.setParameter('BackgroundColor1', '#ffffff');
            viewer.setParameter('BackgroundColor2', '#ffffff');
            viewer.setParameter('RenderMode', 'wireframe');
            viewer.setParameter('MipMapping', 'off');
            viewer.setParameter('Renderer', 'webgl');
            viewer.setParameter('Definition', 'standard');
            
            viewer.init();
            viewer.update();
        };

        return {
            link: link,
            restrict: 'E',
            templateUrl: '3dview/stlviewer.tpl.html'
        };
    })

;
