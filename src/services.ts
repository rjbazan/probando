/// <reference path="./interfaces.ts" />
/// <reference path="../typings/tsd.d.ts" />



module services{
  export class PlaylistService {
     
      
    static $inject =["$http"];
    constructor(private $http:ng.IHttpService){
      
    }
    getPlayList(): Array<interfaces.ITrack> {
       return [
            { title: "Numb", artist: "Linkin Park", rating: 5 },
            { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
            { title: "Yellow", artist: "coldplay", rating: 4.5 },
            { title: "Skyfall", artist: "Adele", rating: 4.5 }
        ]
    }

    getAll():ng.IPromise<interfaces.IUser>{
        return this.$http.get('http://www.json-generator.com/api/json/get/cdzsccBOiG?indent=2')
            .then((response: ng.IHttpPromiseCallbackArg<interfaces.IUser>):interfaces.IUser => {
                return response.data;
            });               
    }


   
       
  }
  angular.module("myApp").service("services.PlaylistService", PlaylistService);
 
}