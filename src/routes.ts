/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="./controllers/controllers.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />


module myApp {
  export class Routes{
    static $inject = ["$routeProvider"];
    static configureRoutes($routeProvider: ng.route.IRouteProvider){
    $routeProvider.when("/home",
      {
        controller: "controllers.mainController",
        templateUrl: "/app/views/playlist.html",
        controllerAs: "artistController"
      })
      $routeProvider.when("/home/:id",
      {
        controller:"controllers.detailsController",
        templateUrl:"/app/views/details.html",
        controllerAs:"details"
      })
      $routeProvider.otherwise({redirectTo: "/home"})
    }
  }

}