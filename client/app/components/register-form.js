import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  //authCheck: Ember.inject.service('auth-check'),


  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';
        var _this = this;
      this.get('session').authenticate(authenticator, credentials).then(function(){
        _this.get('router').transitionTo('/dashboard');
      });



    }

  }
});
