import Ember from 'ember';

export default Ember.Controller.extend({
  model(){
    this.store.findRecord('user',this.get('session.currentUser.id'));
  },
});
