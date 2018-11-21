(function()
{
	"use-strict";
	var app= angular.module ("newsApp", ["ui.router"]);

	app.config(function($stateProvider){
		$stateProvider
			.state(
				"home",{
					url:"/",
					templateUrl:"app/views/home.html",
					
				})
			.state(
				"newsIndex",{
					url:"/news",
					templateUrl:"app/views/news/index.html",
					controller: "newsController as vm"
				})
			/*.state(
				"categories",{
					url:"/categories",
					templateUrl:"app/views/categories.html",
					controller: "newsController as vm"
				})*/
	});

}());
//:esto es un ifi, 
