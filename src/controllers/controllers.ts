/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../models/interfaces.ts" />
/// <reference path="../services/services.ts" />


module controllers {
    
    export interface IScope extends ng.IScope {
        id:string;
    }
    
    export interface IRouteParams extends ng.route.IRouteParamsService {

    }
    
    export class mainController {
        
        persona:string;
        artist:interfaces.IArtist;
        artists:interfaces.IArtist[];
        artistName:string;
        
        static $inject = ["services.spotifyService", "$scope"];

        constructor(
            private spotifyService: services.spotifyService,
            private $scope:IScope
            ) {
            //spotifyService.getArtist("1vCWHaC5f2uS3yhpwWbIA6").then(
            //    (artist)=>this.artist=artist);   
            spotifyService.getAll("pink").then(
                (data) => {this.artists = data});
            /* this.playListService=playListService.getPlayList();
             this.playListService = playListService.getAll().then(function(data){
                 this.results = data;
               })*/

        }
    }

    export class detailsController {
        
        artist: interfaces.IArtist;
        static $inject = ["services.spotifyService", "$scope", "$routeParams"];
        constructor(
            private spotifyService: services.spotifyService,
            private $routeParams: IRouteParams,
            private $scope:IScope
            ) {
            
            spotifyService.getArtist($scope.id).then(
                (data): void => { this.artist = data});
        }
        
    }
    angular.module("myApp").controller("controllers.mainController", mainController);
        angular.module("myApp").controller("controllers.detailsController", detailsController);
}

 
