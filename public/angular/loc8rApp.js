/**
 * Created by Slevin on 9/7/2015.
 */
angular.module('loc8rApp', []);

var locationListCtrl = function ($scope) {
    $scope.data = {
    locations: [{
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '0.296456',
        _id: '5370a35f2536f6785f8dfb6a'
    },{
        name: 'Costy',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 5,
        facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
        distance: '0.7865456',
        _id: '5370a35f2536f6785f8dfb6b'
    },{
        name: 'Rainbow',
        address: '123 A Street, B, RG6 1PS',
        rating: 4,
        facilities: ['Alcoholic drinks', 'Alcoholic', 'drinks'],
        distance: '0.9865456',
        _id: '5370a35f2536f6785f8dfb6c'
    }]};
};

var _isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function () {
    return function (distance){
        var numDistance, unit;
        if (distance && _isNumeric(distance)) {
            if (distance > 1) {
                numDistance = parseFloat(distance).toFixed(1);
                unit = 'km';
            } else {
                numDistance = parseInt(distance * 1000, 10);
                unit = 'm';
            }
            return numDistance + unit;
        } else {
            return "?";
        }
    };
};



angular
    .module('loc8rApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance);