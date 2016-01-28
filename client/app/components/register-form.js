import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),


  actions: {
    registerUser(){
      var _this = this;
      var information = this.getProperties('identification','password','name','firstName','lastName','descrip');
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';
      Ember.$.ajax({
        url: 'http://localhost:1337/api/v1/auths/register',
        data: information,
        dataType: 'json',
        success: function(response) {
          if(response.message==='200'){
            _this.get('session').authenticate(authenticator, credentials).catch((reason) => {
              console.log(reason.error);
            });
          }else if (response.message==='400'){
            console.log('an unknown error has occured, please try again');
          }
        },
        error: function(response){
          console.log(response);
      }});
    },
    authenticateGoogle(){
      var _this = this;
      this.get('session').authenticate('authenticator:google-auth', 'google-oauth2').then(function () {
        _this.transitionToRoute('/profile');
      });
    },
    authenticateFacebook(){
      var _this = this;
      this.get('session').authenticate('authenticator:facebook-auth', 'facebook-oauth2').then(function () {
        _this.transitionToRoute('/profile');
      });
    }
  }
});
