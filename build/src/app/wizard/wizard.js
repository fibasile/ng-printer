// wizard.js
angular.module('ReossGui.wizard', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'ReossGui.3dview'
])

.config(function config($stateProvider) {
    $stateProvider.state('wizard', {
        url: '/wizard',
        views: {
            "main": {
                controller: 'WizardCtrl',
                templateUrl: 'wizard/wizard.tpl.html'
            }
        },
        data: {
            pageTitle: 'Print Wizard'
        }
    });
    $stateProvider.state('wizard_preview', {
        url: '/wizard1',
        views: {
            "main": {
                controller: "WizardPreviewCtrl",
                templateUrl: "wizard/wizard.page1.tpl.html"
            }
            //,
            // "slot": {
            //     controller: '3DViewCtrl',
            //     templateUrl: '3dview/3dview.tpl.html'
            // }
        },
        data: {
            pageTitle: 'Print Wizard'
        }
    });
    $stateProvider.state('wizard_slice', {
        url: '/wizard2',
        views: {
            "main": {
                controller: 'WizardCtrl',
                templateUrl: 'wizard/wizard.page2.tpl.html'
            }
        },
        data: {
            pageTitle: 'Print Wizard'
        }
    });

})



.directive("ngFileSelect", function() {

    return {
        link: function($scope, el) {

            el.bind("change", function(e) {
                $scope.file = (e.srcElement || e.target).files[0];
                console.log("getting file");
                $scope.getFile();
            });

        }

    };

})

.factory("fileReader", ["$q", "$log", function($q, $log) {


        var onLoad = function(reader, deferred, scope) {
            return function() {
                scope.$apply(function() {
                    deferred.resolve(reader.result);
                });
            };
        };

        var onError = function(reader, deferred, scope) {
            return function() {
                scope.$apply(function() {
                    deferred.reject(reader.result);
                });
            };
        };

        var onProgress = function(reader, scope) {
            return function(event) {
                scope.$broadcast("fileProgress", {
                    total: event.total,
                    loaded: event.loaded
                });
            };
        };

        var getReader = function(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };

        var readAsDataURL = function(file, scope) {
            var deferred = $q.defer();

            var reader = getReader(deferred, scope);
            reader.readAsDataURL(file);

            return deferred.promise;
        };

        return {
            readAsDataUrl: readAsDataURL
        };

    }])
    .controller('WizardCtrl', ['$scope', 'fileReader', '$state', 'OctoPrint', '$filter', function WizardCtrl($scope, fileReader, $state, OctoPrint, $filter) {
        // This is simple a demo for UI Boostrap.

        var orig_files = [];
        $scope.files = [];
        $scope.selectedFile = null;
        $scope.order = null;
        $scope.filter = "";



        $scope.gcodeAnalysis = function() {

            if ($scope.selectedFile) {
                if (typeof(selectFile.gcodeAnalysis) !== undefined) {

                    return selectFile.gcodeAnalysis;

                }

            }
        };

        var refresh = function() {
            OctoPrint.listFiles(function(data) {
                if (data) {

                    $scope.files = data.files;
                    $scope.orig_files = data.files;
                }
            });
        };

        $scope.refresh = refresh;


        $scope.selectFile = function(file) {

            console.log("Selected ");
            console.log(file);

            $scope.selectedFile = file;
        };

        $scope.sort = function(order) {

            $scope.order = order;

        };

        $scope.filterFiles = function(f) {
            $scope.filter = f;
            if (f == 'gcode') {
                $scope.files = $scope.orig_files.filter(function(el){
                    return el.name.search(".gco")!=-1;
                });
            } 
            if (f == 'wet') {
                $scope.files = $scope.orig_files.filter(function(el){
                    return el.name.search("wet")!=-1 || el.name.search("WET") != -1;
                });
            }
            if (f == 'fuse') {
                $scope.files = $scope.orig_files.filter(function(el){
                    return el.name.search("wet")==-1 && el.name.search("WET") == -1;
                });
            }
            if (f === '') {
                $scope.files = $scope.orig_files;
            }
         
        };


        $scope.roundFilament = function(v) {
            if (!v) {
                return "";
            }
            return parseFloat(v / 1000).toFixed(2) + " mt";
        };

        $scope.roundTime = function(v) {
            if (!v) {
                return "";
            }
            return parseFloat(v / 60).toFixed(0) + " min";
        };


        $scope.startPrinting = function() {
            if ($scope.selectedFile) {
                OctoPrint.printFile($scope.selectedFile, function() {

                    console.log("File print started");
                    $state.go('status');

                });
            }
        };


        refresh();

    }])


.controller('WizardPreviewCtrl', ['$scope', function WizardPreviewCtrl($scope, $3dview) {
    // This is simple a demo for UI Boostrap.

    $scope.$on("fileReady", function(event, stlFile) {
        $scope.broadcast("loadSTL", stlFile);
    });

}])

;
