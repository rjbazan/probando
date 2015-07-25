module interfaces{
  export interface IPlaylistService{
    getPlayList: ()=> Array<ITrack>;
    //getUser: ()=> Array<IUser>;
  }
  export interface ITrack {
    album:Array<IAlbum>;
    artists:Array<IArtist>;
    available_markets:Array<string>;
    disc_number:number;
    duration_ms:number;
    explicit:boolean;
    href:string;
    id:string;
    is_playable:boolean;
    name:string;
    popularity:number;
    rating:number;
    preview_url:string;
    track_number:number;
    type:string;
    uri:string;
  }
  
  export interface IAlbum {
    album_type:string;
    artists: Array<IArtist>;
    available_markets: Array<string>;
    genres: Array<string>;
    href:string;
    id:string;
    images: Array<IImage>;
    name:string;
    popularity:number;
    release_date:string;
    release_date_precision:string;
    tracks: Array<ITrack>;
    type:string;
    url:string;
  }
  export interface IImage {
    height:number;
    url:string;
    width:string;
  }
  
  export interface IArtist {
    href:string;
    id:string;
    name:string;
    type:string;
    uri:string;
    followers: Array<IFollower>;
    genres:Array<string>;
    images:Array<IImage>;
    popularity:number;
  }
  
  export interface IFollower{
    href:string;
    total:number;
  }
  
  export interface IPagingObject{
    href:string;
    items:Array<IItems>;
    limit:number;
    next:string;
    offset:number;
    previous:string;
    total:number;
  }
  
  export interface IItems{
    num:number;
  }
  
  export interface IRouteParams extends ng.route.IRouteService{
  }
  
  export interface IUser {
    _id: string;
    picture: string;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: number;
  }
  
  export interface IUserSpotify{
    display_name:string;
    followers:Array<IFollower>;
    href:string;
    id:string;
    images:Array<IImage>;
    type:string;
    uri:string;
  }
  
  export interface RouteParams extends ng.route.IRouteParamsService {
      id: string;
  }
  

}