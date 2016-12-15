(function() { 
angular
    .module('app')
    .service('auth', AuthService);

//Inject dependencies
AuthService.$inject = ['$http', 'session', '$state'];


function AuthService($http, session){

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
          $state.go("main.categories");
          
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
}
})();