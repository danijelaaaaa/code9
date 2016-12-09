(function() {
	"use strict";
	angular
 		.module('tester')
 		.factory('CategoryService', CategoryService);


 	CategoryService.$inject = ['$http', '$q'];
 	function CategoryService($http, $q){
 		var categoryService = {

 			getCategories: function(){
				var deferred = $q.defer();

				$http({
					url: "http://localhost:8080/categories", 
					method: "GET"
				}).success(function (data) {
					
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri učitavanju kategorija");
				});

				return deferred.promise;
			},


		};

 		return categoryService;
 	}
})();