var app = angular.module("angularApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvier
        .when("/", {
            templateUrl: "app/views/home.html",
            controller: "mainController"
    })
        .when("/universidad/:id?", {
        templateUrl: "app/views/universidad.html",
        controller: "uniController"
    })
        .otherwise({
            templateUrl: "app/views/error.html"
    });
});


app.controller("mainController", function($scope, apiPrueba){
    $scope.donde = "Home";
});

app.controller("uniController", function($scope, $routeParams){
    $scope.donde = $routeParams.id;
});

app.factory("apiPrueba", function{
    return{
        getHola: function(){
            return "HOLA";
        }
    }
});
