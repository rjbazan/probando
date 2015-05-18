/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./routes.ts" />
(function () {
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(myApp.Routes.configureRoutes);
})();
