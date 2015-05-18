/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.ts" />
/// <reference path="./services.ts" />


module controllers{
  export class mainController{
    playListService;
    artista: string;
    static $inject=["services.PlaylistService","$scope"];
    
    constructor(playListService:services.PlaylistService,$scope){
        var vm = this;
        this.playListService = playListService.getPlayList();
     
      playListService.getAll().then((data:any):void => {
          vm.artista = data;
        })
     /* this.playListService=playListService.getPlayList();
      this.playListService = playListService.getAll().then(function(data){
          this.results = data;
        })*/

    }
  }
   angular.module("myApp").controller("controllers.mainController", mainController);

  }

 
