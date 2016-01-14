import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params){
    return Ember.RSVP.hash({
      user:this.store.findRecord('user',params.id),
      teams: this.store.findAll('team')
    });
  },
});
