var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.conn = $.connection.pruebaHub;   
    $scope.conn.client.hello = function () {
        alert("dddd");
    };
    $scope.probar = function () {
        $.connection.hub.start().done(function () {
            $scope.conn.server.hello();
        });
    }
});