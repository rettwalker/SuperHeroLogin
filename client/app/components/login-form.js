import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),


  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason) => {
        console.log(reason.error);
        if (reason.error === 'User not found') {
          alert('User Not Found');
          this.get('router').transitionTo('register');
        }
      });
    },
    sayHello: function() {
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // the user is logged in and has authenticated your
          // app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed
          // request, and the time the access token
          // and signed request each expire
          //var uid = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;
          console.log(accessToken);
        } else if (response.status === 'not_authorized') {
            console.log(response.status);
            // the user is logged in to Facebook,
            // but has not authenticated your app
          } else {
              console.log("not logged in");
              // the user isn't logged in to Facebook.
            }
          });
      },
    logoutFacebook: function(){
      FB.logout(function(response) {
        
      });
    }

  }
});
