/**
 * Created by Slevin on 14/8/2015.
 */
angular
    .module('loc8rApp')
    .directive('ratingStars', ratingStars);
function ratingStars () {
    return {
        restrict: 'EA',
        scope: {
            thisRating : '=rating'
        },
        templateUrl: '/common/directives/ratingStars/ratingStars.template.html'
    };
}