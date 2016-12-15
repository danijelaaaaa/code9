 (function() {
	 "use strict";
 	angular
 		.module('tester')
 		.controller('UserController', UserController);

 	UserController.$inject = ['$scope', 'auth', '$state'];
 	function UserController($scope, auth, $state) {
 		
 		$scope.logIn = function(user){
 			auth.logIn(user);
 			if(!auth.isLoggedIn()){
 	 			alert("Your username or password is invalid, try again :)");
 	 		}else{
 	 			$state.go('main.categories');
 	 		}
 		};
 		
 		$scope.goToRegistration = function(user){
 			$state.go('main.registration');
 		}
 		
 		$scope.registration = function(user){
 			auth.registrate(user);
 			
 			$state.go("main.categories");
 		}
 			
 		
 		
 	}
 })();
