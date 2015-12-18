import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
           user: this.store.findAll('user'),
           team: this.store.findAll('team')
    });
  },
  actions: {
    addSH(name) {
      var teamname = name;
      this.store.createRecord('team', {
        name:teamname,
      }).save();
    }
  }
});
