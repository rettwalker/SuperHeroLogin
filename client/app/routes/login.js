import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  torii: Ember.inject.service(),
  actions:{
    authenticateGoogle(){
      this.get('session').authenticate('authenticator:google-auth', 'google-oauth2');
    },
    authenticateFacebook(){
      this.get('session').authenticate('authenticator:facebook-auth', 'facebook-oauth2').then(function () {
        alert("logged in");
      });
      return;
    }  
  }
});
