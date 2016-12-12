(function() {
	"use strict";
	angular
		.module('tester.core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/categories');

		$stateProvider
		.state('main', {
			abstract: true,
			views: {
				'header': {
					templateUrl: 'app/components/core/header.html'	
				}
			}
		})
		.state('main.about', {
			url: '/about',
			views: {
				'content@': {
					templateUrl: 'app/components/core/home.html'
				}
			}
		});
			
	}
})();