(function (angular) {

	  function assignServicesToRootScope($rootScope, auth, session, $state){
	    $rootScope.auth = auth;
	    $rootScope.session = session;
	    
	   

	  }

	  // Inject dependencies
	  assignServicesToRootScope.$inject = ['$rootScope', 'auth', 'session', '$state'];

	  // Export
	  angular
	    .module('tester', ['tester.core', 'tester.category', 'tester.question', 'tester.test', 'ui.router'])
	    .run(assignServicesToRootScope);

	})(angular);