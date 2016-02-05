angular.module('todo', [
    'ngRoute',
    'persistencia',
    'todo.controllers'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/indice', {
            templateUrl: 'html/indice.html',
            controller: 'IndiceController'
        })
        .when('/detalle/:id', {
            templateUrl: 'html/detalle.html',
            controller: 'DetalleController'
        })
        .otherwise({redirectTo: '/indice'});
}])
;

angular.module('todo.controllers', []);
