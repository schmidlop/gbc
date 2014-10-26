'use strict';

/* Controllers */

angular.module('myApp.controllers', ["google-maps".ns()])
    .config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyCiApUVr7O3mPQekpnsP7xrDmYgai-lTG4',
            v         : '3.16',
            libraries : 'geometry,visualization'
        });
    }])
    .controller("MyCtrl1", ['$scope', 'GoogleMapApi'.ns(), function ($scope, GoogleMapApi) {
        GoogleMapApi.then(function(maps) {

        });
    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }]);
