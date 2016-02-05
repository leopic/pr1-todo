angular.module('todo.controllers')
    .controller('IndiceController', [
        '$scope',
        'PersistenciaService',
        function ($scope, PersistenciaService) {
            var llave = 'todos';

            $scope.init = function () {
                $scope.lista = PersistenciaService.desalmacenar(llave) || [];
                inicializarPendiente();
                $scope.ultimoId = 0;
            };

            /**
             * Sincroniza la lista de pendientes en la persistencia cuando cambia.
             */
            $scope.$watch('lista', function(nuevoValor, viejoValor) {
                PersistenciaService.almacenar(llave, nuevoValor);
            }, true);

            /**
             * Inicializa un pendiente vacío.
             * Devuelve el formulario a su estado inicial.
             */
            var inicializarPendiente = function() {
                $scope.pendiente = {};
                if ($scope.pendienteForm) {
                    $scope.pendienteForm.$setPristine();
                    $scope.pendienteForm.$setUntouched();
                }
            };

            /**
             * Agregar el pendiente actual a lista de pendientes.
             */
            $scope.agregarPendiente = function() {
                if ($scope.pendienteForm.$valid) {
                    ++$scope.ultimoId;
                    $scope.pendiente.id = $scope.ultimoId;
                    $scope.lista.push($scope.pendiente);
                    inicializarPendiente();
                }
            };

            /**
             * Remueve una tarea de la lista de tareas.
             * @param indice
             */
            $scope.removerPendiente = function(indice) {
                $scope.lista.splice(indice, 1);
            };

            $scope.init();
        }])
;