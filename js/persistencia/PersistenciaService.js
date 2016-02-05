angular.module('persistencia.services')
    /**
     * Simula la interacción con una base de datos usando localStorage.
     */
    .service('PersistenciaService',
        function() {
            /**
             * Guarda el `objeto` asociado a la `llave`.
             * Convierte el objeto en string antes de guardarlo.
             *
             * @param llave
             * @param objeto
             */
            var almacenar = function(llave, objeto) {
                localStorage.setItem(llave, angular.toJson(objeto));
            };

            /**
             * Obtiene el objeto guardado en localStorage para la llave `llave`.
             * Lo parsea hacia un objeto antes de hacerlo.
             *
             * @param llave
             * @returns {{}}
             */
            var desalmacenar = function(llave) {
                return angular.fromJson(localStorage.getItem(llave));
            };

            /**
             * Elimina la entrada asociada a una llave.
             *
             * @param llave
             */
            var eliminar = function(llave) {
                localStorage.removeItem(llave);
            };

            return {
                almacenar: almacenar,
                desalmacenar: desalmacenar,
                eliminar: eliminar
            }
        }
    );
