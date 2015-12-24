import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addNewHero(){
      this.store.createRecord('user',{
        name:this.name,
        firstName:this.firstName,
        lastName:this.lastName
      }).save();
      this.transitionToRoute('superheros');
    }
  },
});
