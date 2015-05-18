/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="./routes.ts" />

((): void=> {
var app = angular.module("myApp", ["ngRoute"]);
app.config(myApp.Routes.configureRoutes);
})() 