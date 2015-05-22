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
                vm.personas = data;
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
    var detailsController = (function () {
        function detailsController(plaListService, routeParams, $scope) {
            var vm = this;
            vm.index = $scope.id;
            plaListService.getAll().then(function (data) {
                vm.persona = data[$scope.id];
            });
        }
        detailsController.$inject = ["services.PlaylistService", "$scope", "$routeParams"];
        return detailsController;
    })();
    controllers.detailsController = detailsController;
    angular.module("myApp").controller("controllers.mainController", mainController);
    angular.module("myApp").controller("controllers.detailsController", detailsController);
})(controllers || (controllers = {}));
