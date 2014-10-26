'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('myApp.directives', []).
    directive('owlCarousel', function(version) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs, controller) {
                element.owlCarousel({items:1,dots:false,loop:true, autoPlay:true, nav:false, navText:['next','prev']});
            }
        }
    });
