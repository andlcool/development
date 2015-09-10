/**
 * Created by Slevin on 20/8/2015.
 */
(function () {
    angular
        .module('loc8rApp')
        .filter('addHtmlLineBreaks', addHtmlLineBreaks);
    function addHtmlLineBreaks () {
        return function (text) {
            var output = text.replace(/\n/g, '<br/>');
            return output;
        };
    }
})();