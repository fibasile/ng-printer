angular.module('pump', [])

.service('pump', ['$http', function($http) {


    var buildHTTPRequest = function(resource) {
        var req = {
            method: resource.method,
            url: resource.url,
            headers: {
                'Content-Type': resource.content_type,
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


    var Connection = {};
	Connection.API_ENDPOINT = "http://reoss.local";

    Connection.run = function(direction, steps, cb) {
        var data = {
            "cmd": "run",
            "param": direction  + " " + steps
        };
        getRequest({
            url: Connection.API_ENDPOINT + "/pump/driver",
            method: "POST",
            content_type: 'application/json',
            data: data
        }, cb);
    };


    Connection.stop = function( cb) {
        var data = {
            "cmd": "stop",
            "param": ""
        };
        getRequest({
            url: Connection.API_ENDPOINT + "/pump/driver",
            method: "POST",
            content_type: 'application/json',
            data: data
        }, cb);
    };

    Connection.status = function( cb) {
        var data = {
            "cmd": "status",
            "param": ""
        };
        getRequest({
            url: Connection.API_ENDPOINT + "/pump/driver",
            method: "POST",
            content_type: 'application/json',
            data: data
                    
        }, cb);
    };




    return Connection;


}]);
