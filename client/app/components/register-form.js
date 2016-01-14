import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),


  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';
        var _this = this;
      this.get('session').authenticate(authenticator, credentials).then(function(){
        _this.transitionToRoute('/profile');
      });
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
