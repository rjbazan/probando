/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="./controllers/controllers.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var myApp;
(function (myApp) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "controllers.mainController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "artistController"
            });
            $routeProvider.when("/home/:id", {
                controller: "controllers.detailsController",
                templateUrl: "/app/views/details.html",
                controllerAs: "details"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    myApp.Routes = Routes;
})(myApp || (myApp = {}));
