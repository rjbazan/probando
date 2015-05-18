/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.ts" />
/// <reference path="./services.ts" />
var controllers;
(function (controllers) {
    var mainController = (function () {
        function mainController(playListService, $scope) {
            var vm = this;
            this.playListService = playListService.getPlayList();
            playListService.getAll().then(function (data) {
                vm.artista = data.albums;
            });
            /* this.playListService=playListService.getPlayList();
             this.playListService = playListService.getAll().then(function(data){
                 this.results = data;
               })*/
        }
        mainController.$inject = ["services.PlaylistService", "$scope"];
        return mainController;
    })();
    controllers.mainController = mainController;
    angular.module("myApp").controller("controllers.mainController", mainController);
})(controllers || (controllers = {}));
