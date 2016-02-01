import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service('store'),

  actions:{
    addTeam(id){
      console.log(id);
      let team = this.get('store').peekRecord('team',id);
      team.set('setMembership',true);
      let user = this.get('store').peekRecord('user',this.get('session.currentUser.id'));
      user.get('Teams').pushObject(team);
      user.save();

      team.save();

      alert("New Team Added");
    },
    removeTeam(id){
      console.log(id);
      let team = this.get('store').peekRecord('team',id);
      team.set('setMembership',false);
      let user = this.get('store').peekRecord('user',this.get('session.currentUser.id'));
      user.get('Teams').removeObject(team);
      user.save();

      team.save();

      alert("Team Removed");
    },
  }
});
