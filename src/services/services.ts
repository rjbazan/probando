/// <reference path="../models/interfaces.ts" />
/// <reference path="../../typings/tsd.d.ts" />



module services{
  export class spotifyService {
     
      
    static $inject =["$http"];
    constructor(private $http:ng.IHttpService){
      
   }
   
   getAlbum(id:string):ng.IPromise<interfaces.IAlbum>{
       return this.$http.get('https://api.spotify.com/v1/albums/'+id).
       then((response: ng.IHttpPromiseCallbackArg<interfaces.IAlbum>):interfaces.IAlbum => {
           return response.data;
       });
   }
  
   getArtist(id:string):ng.IPromise<interfaces.IArtist>{
       return this.$http.get('https://api.spotify.com/v1/artists/'+id).
       then((response: ng.IHttpPromiseCallbackArg<interfaces.IArtist>):interfaces.IArtist => {
           return response.data;
       });
   }
   
   getArtistAlbums(id:string):ng.IPromise<interfaces.IArtist>{
       return this.$http.get('https://api.spotify.com/v1/artists/'+id+'/albums').
       then((response: ng.IHttpPromiseCallbackArg<interfaces.IArtist>):interfaces.IArtist => {
           return response.data;
       });
   }   
   
   getRelatedAlbums(id:string):ng.IPromise<interfaces.IArtist>{
       return this.$http.get('https://api.spotify.com/v1/artists/'+id+'/related-artists').
       then((response: ng.IHttpPromiseCallbackArg<interfaces.IArtist>):interfaces.IArtist => {
           return response.data;
       });
   }
   
   getAlbumTracks(id:string):ng.IPromise<interfaces.IAlbum>{
       return this.$http.get('https://api.spotify.com/v1/albums/'+id+'/tracks').
       then((response: ng.IHttpPromiseCallbackArg<interfaces.IAlbum>):interfaces.IAlbum => {
           return response.data;
       });
   }
   
   getAll(input:string):ng.IPromise<interfaces.IArtist[]>{
       return this.$http.get('https://api.spotify.com/v1/search?q='+input+'&type=artist').
       then((response: ng.IHttpPromiseCallbackArg<any>) => {
           return response.data.artists.items;
       });
   }               
/*    getPlayList(): Array<interfaces.ITrack> {
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
    }*/
    

   
       
  }
  angular.module("myApp").service("services.spotifyService", spotifyService);
 
}