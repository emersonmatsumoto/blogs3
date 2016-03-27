angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })
        .when('/editor', {
            templateUrl: 'templates/editor.html',
            controller: 'EditorController',
            controllerAs: 'vm'
        });
}
