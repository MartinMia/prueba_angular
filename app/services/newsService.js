(function(){
	"use strict";
	var app= angular.module("newsApp")
	.factory(
		"newsService",
		function($http){
			var service= {
				getAll: function(){
					return $http.get("https://newsapi.org/v2/top-headlines?apiKey=b367ffdf6d0e4216bc03422535986750&country=ar");	
				}
			}
			return service;
		})
	
}());