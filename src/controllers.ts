/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.ts" />
/// <reference path="./services.ts" />


module controllers {
    export class mainController {
        playListService;
        personas: string;
        static $inject = ["services.PlaylistService", "$scope"];

        constructor(playListService: services.PlaylistService, $scope) {
            var vm = this;
            this.playListService = playListService.getPlayList();

            playListService.getAll().then((data: any): void => {
                vm.personas = data;
            })
            /* this.playListService=playListService.getPlayList();
             this.playListService = playListService.getAll().then(function(data){
                 this.results = data;
               })*/

        }
    }

    export class detailsController {
        index: any;
        persona: interfaces.IUser;
        id: any;
        static $inject = ["services.PlaylistService", "$scope", "$routeParams"];
        constructor(plaListService: services.PlaylistService, routeParams: ng.route.IRouteParamsService, $scope:interfaces.Scope) {

            var vm = this;
            vm.index = $scope.id;


            plaListService.getAll().then((data: interfaces.IUser): void => {
                vm.persona = data[$scope.id];

            })
        }
        
    }
    angular.module("myApp").controller("controllers.mainController", mainController);
        angular.module("myApp").controller("controllers.detailsController", detailsController);
}

 
