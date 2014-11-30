'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('owlCarousel', function() {
        return {
            restrict: 'C',
            link: function (scope, element, attrs, controller) {
                element.owlCarousel({items:1,dots:false,loop:true, autoPlay:true, nav:false, navText:['next','prev']});
            }
        }
    });
