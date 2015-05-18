/// <reference path="./interfaces.ts" />
/// <reference path="../typings/tsd.d.ts" />
var services;
(function (services) {
    var PlaylistService = (function () {
        function PlaylistService($http) {
            this.$http = $http;
        }
        PlaylistService.prototype.getPlayList = function () {
            return [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
        };
        PlaylistService.prototype.getAll = function () {
            return this.$http.get('https://api.spotify.com/v1/search?q=' + 'metallica' + '&type=album,artist').then(function (response) {
                return response.data;
            });
        };
        PlaylistService.$inject = ["$http"];
        return PlaylistService;
    })();
    services.PlaylistService = PlaylistService;
    angular.module("myApp").service("services.PlaylistService", PlaylistService);
})(services || (services = {}));
