import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  actions:{
    authenticateGoogle(){
      this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    authenticateFacebook(){
      this.get('session').authenticate('authenticator:torii', 'facebook-oauth2').then(function () {
        alert("logged in");
      });
      return;
    }
  }
});
