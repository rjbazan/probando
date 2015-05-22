module interfaces{
  export interface IPlaylistService{
    getPlayList: ()=> Array<ITrack>;
    //getUser: ()=> Array<IUser>;
  }
  export interface ITrack {
    title:string;
    artist:string;
    rating:number;
  }
  export interface IRouteParams extends ng.route.IRouteParamsService{
    id: string;
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
  export interface RouteParams {
      id: string;
  }
  export interface Scope{
      id: string;
  }
  /*export interface IUser{
    _id: string;
    picture:string;
    age: number;
   
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: number;
  }*/

}