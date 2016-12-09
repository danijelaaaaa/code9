 (function() {
	 "use strict";
 	angular
 		.module('tester.category')
 		.controller('CategoryController', CategoryController);

 	CategoryController.$inject = ['CategoryService', '$scope'];
 	function CategoryController(CategoryService, $scope) {
 		var catc = this;
 		
 		var promise_categories = CategoryService.getCategories();
 		promise_categories.then(function (data){
 			$scope.categories = data ;
 			console.log($scope.categories);
 		});

 	}
 })();
