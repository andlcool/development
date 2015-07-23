/**
 * Created by Slevin on 23/7/2015.
 */
angular.module('loc8rApp', ['ngRoute']);

function config ($routeProvider) {
    $routeProvider
        .when('/', {
        })
        .otherwise({redirectTo: '/'});
}

angular
    .module('loc8rApp')
    .config(['$routeProvider', config]);