(function (angular) {

  function AuthService($http, session, $state){

    /**
    * Check whether the user is logged in
    * @returns boolean
    */
    this.isLoggedIn = function isLoggedIn(){
    	
      return session.getUser() !== null;
    };

    /**
    * Log in
    *
    * @param credentials
    * @returns {*|Promise}
    */
    this.logIn = function(credentials){
      return $http
        .post('/users/login', credentials)
        .then(function(response){
          var data = response.data;
          session.setUser(data.user);
          session.setAccessToken("trala");
          $state.go('main.categories');
          
        });
    };

    /**
    * Log out
    *
    * @returns {*|Promise}
    */
    this.logOut = function(){
      return $http
        .get('/users/logout')
        .then(function(response){

          // Destroy session in the browser
          session.destroy();      
        });

    };
    
    
    this.registrate = function(user){
        return $http
          .post('/users/registration', user)
          .then(function(response){
            var data = response.data;
            
            //odmah logovanje poslije registracije
            
            session.setUser(data.user);
            session.setAccessToken("trala");
            
            
          });
      };
    
    

  }

  // Inject dependencies
  AuthService.$inject = ['$http', 'session', '$state'];

  // Export
  angular
    .module('tester')
    .service('auth', AuthService);

})(angular);