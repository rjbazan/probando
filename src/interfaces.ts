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