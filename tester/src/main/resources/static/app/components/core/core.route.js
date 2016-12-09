(function() {
	"use strict";
	angular
		.module('tester.core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/category');

		$stateProvider
		.state('main', {
			abstract: true,
			views: {
				'header': {
					templateUrl: 'app/components/core/header.html'	
				},
				'menu': {
					templateUrl: 'app/components/core/menu.html'	
				},
				'footer': {
					templateUrl: 'app/components/core/footer.html'	
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