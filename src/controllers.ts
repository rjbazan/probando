/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.ts" />
/// <reference path="./services.ts" />


module controllers{
  export class mainController{
    playListService;
    personas: string;
    static $inject=["services.PlaylistService","$scope"];
    
    constructor(playListService:services.PlaylistService,$scope){
        var vm = this;
        this.playListService = playListService.getPlayList();
     
      playListService.getAll().then((data:any):void => {
          vm.personas = data;
        })
     /* this.playListService=playListService.getPlayList();
      this.playListService = playListService.getAll().then(function(data){
          this.results = data;
        })*/

    }
  }

  export class detailsController{
    index: number;
    persona: string;
    static $inject = ["services.PlaylistService", "$scope", "$routeParams"];
    constructor(plaListService:services.PlaylistService, $routeParams:interfaces.IRouteParams){
    
    var vm = this;
    console.log($routeParams.id);
    console.log(this.id = this.getId($routeParams.id));
    vm.index=parseInt(this.getId($routeParams.id));
    console.log(vm.index);
      plaListService.getAll().then((data:interfaces.IUser):void => {
          vm.persona = data;
      
    }
    id: string;
    getId(input: string):string{
        return (input || "Not present");
    }
  }
   angular.module("myApp").controller("controllers.mainController", mainController);
   angular.module("myApp").controller("controllers.detailsController", detailsController);
  }

 
