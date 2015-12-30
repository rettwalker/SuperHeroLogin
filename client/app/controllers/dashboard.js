import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions:{
    addNewHero(){
      var _this = this;
      this.store.findRecord('user',this.get('session.currentUser.id')).then(function(user){
        user.set('name',_this.name);
        user.set('firstName',_this.firstName);
        user.set('lastName',_this.lastName);
        user.save();
      });
    }
  },
});
