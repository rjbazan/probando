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
        function detailsController(plaListService, $routeParams) {
            var vm = this;
            console.log($routeParams.id);
            console.log(this.id = this.getId($routeParams.id));
            vm.index = parseInt(this.getId($routeParams.id));
            console.log(vm.index);
            plaListService.getAll().then(function (data) {
                vm.persona = data[vm.index];
            });
        }
        detailsController.prototype.getId = function (input) {
            return (input || "Not present");
        };
        detailsController.$inject = ["services.PlaylistService", "$scope", "$routeParams"];
        return detailsController;
    })();
    controllers.detailsController = detailsController;
    angular.module("myApp").controller("controllers.mainController", mainController);
    angular.module("myApp").controller("controllers.detailsController", detailsController);
})(controllers || (controllers = {}));
