(function() {
	"use strict";
	angular
 		.module('tester')
 		.factory('QuestionService', QuestionService);


 	QuestionService.$inject = ['$http', '$q'];
 	function QuestionService($http, $q){
 		var questionService = {

 			getQuestions: function(){
				var deferred = $q.defer();

				$http({
					url: "http://localhost:8080/questions", 
					method: "GET"
				}).success(function (data) {
					
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri učitavanju pitanja");
				});

				return deferred.promise;
			},
			
			addQuestion: function(question){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/questions", 
					method: "POST",				
					data : question, 
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dodavanju pitanja");
				});
				
				return deferred.promise;
				
			},
			
			getQuestion: function(questionId){
				var deferred = $q.defer();
				
				$http({
					url: "http://localhost:8080/questions/id/"+questionId, 
					method: "GET",				
					headers: {
	                    'Content-Type': 'application/json'
	         		}
				}).success(function (data) {
					deferred.resolve(data);
				}).error(function () {
					alert("Došlo je do greške pri dobavljanju pitanja");
				});
				
				return deferred.promise;
				
			}
			
		

		};

 		return questionService;
 	}
 	
 	
 	
 	
})();