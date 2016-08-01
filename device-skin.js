(function() {
    'use strict';

    angular.module('deviceskin', [])
        .directive('deviceSkin', ['$window', function($window) {
            return {
                restrict: 'E',
                templateUrl: 'device-skin.html',
                scope: {
                    bgImage: "=",
                    width: "="
                },
                link: function(scope, element, attrs) {

                }
            };

        }]);
})();
