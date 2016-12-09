(function() {
	"use strict";
	angular
		.module('tester.category')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.category', {
				url: '/category',
				views: {
					'content@': {
						templateUrl: 'app/components/category/categories.html',
						controller: 'CategoryController',
						controllerAs: 'catc'
					}
				}
			});
	}
})();