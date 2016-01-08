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



  }
});
