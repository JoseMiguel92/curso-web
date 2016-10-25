var app = angular.module("App",[]);

app.controller("mainController", function($scope, $http){
            $scope.mensaje = "hola";

            $scope.persona = {
               "Nombre":"Jose"
               };

   $scope.enviar = function(){
       $http.post("http://ejemploapicurso.azurewebsites.net/api/users", $scope.usuario).success
   }
    $http.get("http://ejemploapicurso.azurewebsites.net/api/users").success(function(data){
        $scope.usuarios = data;
    })
    .error(function(data){
    });
});
