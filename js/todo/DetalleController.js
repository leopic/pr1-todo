angular.module('todo.controllers')
    .controller('DetalleController', [
        '$scope',
        '$routeParams',
        'PersistenciaService',
        function ($scope, $routeParams, PersistenciaService) {
            var llave = 'todos';

            $scope.init = function () {
                console.log($routeParams.id);
                $scope.lista = PersistenciaService.desalmacenar(llave) || [];
            };

            $scope.init();
        }])
;