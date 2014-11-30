angular.module("myApp.maps", [])

    .config(['GoogleMapApiProvider', function (GoogleMapApi) {
        GoogleMapApi.configure({
            key       : 'AIzaSyCQFZNNy478L6XS7mvsEZO9ELuhB1ik6aE',
            v         : '3.16',
            libraries : 'weather,geometry,visualization'
        });
    }])
    .controller("ExampleController", ['$scope', 'GoogleMapApi'.ns()
        , function ($scope, GoogleMapApi) {
            GoogleMapApi.then(function (maps) {
            });
        }]);


//
//(function() {
//    'use strict';
//
//    angular
//        .module('myApp.maps')
//        .controller('Maps', Maps);
//
//    /* @ngInject  */
//    function Maps($scope, uiGmapGoogleMapApi) {
//        /* jshint validthis:true */
//        var vm = this;
//        ///////////////////////////
//        uiGmapGoogleMapApi.then(function(maps) {
//
//        });
//    }
//
//    Maps.$inject = ['$scope','uiGmapGoogleMapApi'];
//})();
//
