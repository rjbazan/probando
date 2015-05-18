/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="./controllers.ts" />
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
                controllerAs: "playList"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    myApp.Routes = Routes;
})(myApp || (myApp = {}));
