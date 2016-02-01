import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service('store'),
  Controller:Ember.inject.service('Controller'),
  actions:{
    addNewHero(){
      //console.log(this.get('session.currentUser.id'));
      let user = this.get('store').peekRecord('user',this.get('session.currentUser.id'));
      user.set('name',this.name);
      user.set('firstName',this.firstName);
      user.set('lastName',this.lastName);
      user.set('descrip',this.descrip);
      user.save();
      alert("User information has been save!");
    },
  }
});
