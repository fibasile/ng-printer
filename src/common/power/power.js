angular.module('power', [])

.service('power', ['$http', function($http) {


    var buildHTTPRequest = function(resource) {
        var req = {
            method: resource.method,
            url: resource.url,
            headers: {
                'Content-Type': resource.content_type,
                'Access-Control-Allow-Origin': '*'
            },
            data: resource.data,
            responseType: 'json'
        };

        return req;
    };

    var getRequest = function(res, cb) {

        var req = buildHTTPRequest(res);
        $http(req).then(function(response) {
            console.log(response.data);
            cb(response.data);

        }, function() {

            cb(null);
        });


    };


    var Connection = {};
    Connection.API_ENDPOINT = "";//"http://localhost:8080";

    Connection.action = function(action, cb) {
        var data = {
            "cmd": "action",
            "param": action
        };
        getRequest({
            url: Connection.API_ENDPOINT + "/pump/power",
            method: "POST",
            // content_type: 'application/json',
            data: data
        }, cb);
    };




    return Connection;


}]);
