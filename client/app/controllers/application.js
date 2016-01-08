import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      Ember.$.ajax({
        url: 'http://127.0.0.1:1337/api/v1/auths/logout',
        method: 'GET'
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
  }
});
