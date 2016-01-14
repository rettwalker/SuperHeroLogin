import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),


  actions:{
    addNewHero(){
      console.log(this.get('session.currentUser.id'));
      let user = this.store.peekRecord('user',this.get('session.currentUser.id'));
      user.set('name',this.name);
      user.set('firstName',this.firstName);
      user.set('lastName',this.lastName);
      user.set('descrip',this.descrip);
      user.save();
      this.transitionToRoute('/'+user.id );
    },
    addTeam(id){
      //let user = this.store.peekRecord('user',this.get('session.currentUser.id'));
      let team = this.store.peekRecord('team',id);
      team.get('members').pushObject(this.get('session.currentUser'));
      team.save();
      alert("New Team Added");

    },
    removeTeam(id){
      //let user = this.store.peekRecord('user',this.get('session.currentUser.id'));
      let team = this.store.peekRecord('team',id);
      team.get('members').removeObject(this.get('session.currentUser'));
      team.save();
      alert("Team Removed");


    }
  },
});
