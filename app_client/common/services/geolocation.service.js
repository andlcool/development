/**
 * Created by Slevin on 14/8/2015.
 */
(function () {
    angular
        .module('loc8rApp')
        .service('geolocation', geolocation);

    function geolocation () {
        var getPosition = function (cbSuccess, cbError, cbNoGeo) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
            }
            else {
                cbNoGeo();
            }
        };
        return {
            getPosition : getPosition
        };
    }
})();