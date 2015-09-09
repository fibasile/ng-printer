angular.module('OctoPrint', [])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
/*
.config(function config( $stateProvider ) {
  $stateProvider.state( 'connection', {
    url: '/connection',
    views: {
      "main": {
        controller: 'ConnectionCtrl',
        templateUrl: 'connection/connection.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})*/

/**
 * And of course we define a controller for our route.
 */
/*
.controller( 'ConnectionCtrl', function ConnectionController( $scope ) {





})
*/

.factory('OctoPrint', ['$http', function($http) {
    var Connection = {};

    Connection.API_KEY = "A6FB4A725BCE42FD8D4A141937D3A04E";
    Connection.API_ENDPOINT = "http://localhost:5000";


    var buildHTTPRequest = function(resource) {
        var req = {
            method: resource.method,
            url: resource.url,
            headers: {
                'Content-Type': resource.content_type,
                'X-Api-Key': Connection.API_KEY,
                'Access-Control-Allow-Origin': '*'
            },
            data: resource.data
        };

        return req;
    };

    var getRequest = function(res, cb) {

        var req = buildHTTPRequest(res);
        $http(req).then(function(response) {
            cb(response.data);

        }, function() {

            cb(null);
        });


    };



    Connection.getVersion = function(cb) {
        getRequest({
            url: Connection.API_ENDPOINT + "/api/version",
            method: "GET"
        }, cb);
    };

    Connection.getConnectionSettings = function(cb) {
        getRequest({
            url: Connection.API_ENDPOINT + "/api/connection",
            method: "GET"
        }, cb);
    };

    Connection.connect = function(opts, cb) {
        var data = {
            "command": "connect",
            "port": opts.port,
            "baudrate": Number(opts.baudrate),
            "printerProfile": opts.printerProfile,
            "save": true
        };
        console.log("Posting");
        console.log(data);
        getRequest({
            url: Connection.API_ENDPOINT + "/api/connection",
            method: "POST",
            content_type: 'application/json',
            data: data
        }, cb);
    };

    Connection.disconnect = function(cb) {
        var data = {
            "command": "disconnect"
        };
        getRequest({
            url: Connection.API_ENDPOINT + "/api/connection",
            method: "POST",
            content_type: 'application/json',
            data: data
        }, cb);
    };

    Connection.getMachineState = function(cb) {

        getRequest({
            url: Connection.API_ENDPOINT + "/api/printer?exclude=temperature,sd",
            method: "GET"
        }, cb);

    };

    Connection.getCurrentJob = function(cb) {

        getRequest({
            url: Connection.API_ENDPOINT + "/api/job",
            method: "GET"
        }, cb);


    };

    Connection.listFiles = function(cb) {

        getRequest({
            url: Connection.API_ENDPOINT + "/api/files",
            method: "GET"
        }, cb);



    };


    Connection.printFile = function(fileInfo, cb) {

        var data = {
            "command": "select",
            "print": true
        };
        var fileName = fileInfo.refs.resource;
        getRequest({
            url: fileName,
            method: "POST",
            content_type: 'application/json',
            data: data
        }, cb);


    };

    Connection.jogHead = function(args, cb) {
    
        var delta = args;
        var k = args.scale;
    
        var data = {
            "command": "jog",
            x: 0,
            y: 0,
            z: 0
        };


        if (delta.x) {
            data.x = parseFloat(delta.x) * k;
        }
        if (delta.y) {
            data.y = parseFloat(delta.y) * k;
        }
        if (delta.z) {
            data.z = parseFloat(delta.z) * k;
        }


        getRequest({
            url: Connection.API_ENDPOINT + '/api/printer/printhead',
            method: "POST",
            content_type: 'application/json',
            data: data
        }, cb);

    };


    Connection.homeHead = function(axis,cb){
    
       getRequest({
            url: Connection.API_ENDPOINT + '/api/printer/printhead',
            method: "POST",
            content_type: 'application/json',
            data: {
             "command" : "home",
             "axes": axis
       }}, cb);
    };



    Connection.printOperation = function(op, cb){

        // op is start, restart, pause, cancel
        if (op != 'start' &&
            op != 'stop' &&
            op != 'restart' &&
            op != 'pause' &&
            op != 'cancel'){

            return cb(null);
        }


        getRequest({
            url: Connection.API_ENDPOINT + '/api/job',
            method: "POST",
            content_type: 'application/json',
            data: {
             "command" : op
       }}, cb);


    };



    Connection.extrude = function(flow, cb){



    };


    Connection.retract = function(flow, cb){



    };


    Connection.getTemp = function(cb){
        getRequest({
            url: Connection.API_ENDPOINT + "/api/printer/tool?history=true&limit=1",
            method: "GET"
        }, cb);
    };

    return Connection;

}])


;
