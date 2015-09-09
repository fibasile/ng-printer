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
angular.module('ReossGui.connection', [
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
    $stateProvider.state('connection', {
        url: '/connection',
        views: {
            "main": {
                controller: 'ConnectionCtrl',
                templateUrl: 'connection/connection.tpl.html'
            }
        },
        data: {
            pageTitle: 'Connection'
        }
    });
})

/**
 * And of course we define a controller for our route.
 */
.controller('ConnectionCtrl', ['$scope', 'OctoPrint', '$interval', function ConnectionCtrl($scope, OctoPrint, $interval) {


    var connectionSettings = {};

    $scope.isConnected = false;
    $scope.status = connectionSettings;
    $scope.hasSettings = false;
    $scope.serial_ports = [];
    $scope.profiles = [];
    $scope.baud_rates = [];
    $scope.selected_port = null;
    $scope.selected_baud = null;
    $scope.selected_profile = null;

    var reloadConnection = function() {

        OctoPrint.getConnectionSettings(function(settings) {

           
            connectionSettings = settings;
            
          
            if (settings.current != null) {

                
                $scope.hasSettings = true;
                $scope.isConnected = (settings.current.state == 'Operational');
                $scope.status = settings.current.state;
                $scope.serial_ports = settings.options.ports;
                $scope.profiles = settings.options.printerProfiles;
                $scope.baud_rates = settings.options.baudrates;
                $scope.selected_profile = settings.current.printerProfile;
                
                if (settings.current.port != null ) {
                    $scope.selected_port = settings.current.port;
                    $scope.selected_baud = settings.current.baudrate;
                } else {
                    $scope.selected_port = settings.options.portPreference;
                    $scope.selected_baud = settings.options.baudratePreference;
                
                }
                 
            }

        });
    };

    $scope.connectAction = function() {
        OctoPrint.connect({
            port: $scope.selected_port,
            baudrate: $scope.selected_baud,
            printerProfile: $scope.selected_profile
        }, function(res) {
             reloadConnection();
        });

    };

    $scope.disconnectAction = function() {
        OctoPrint.disconnect(function(res) {
              reloadConnection();
          
        });
    };
    
    $scope.refreshAction = function(){
        reloadConnection();
    };


    $interval(reloadConnection, 5000);
    reloadConnection();
}])

;
