/**
 * Created by Slevin on 20/8/2015.
 */
(function () {
    angular
        .module('loc8rApp')
        .directive('navigation', navigation);
    function navigation () {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.template.html'
        };
    }
})();