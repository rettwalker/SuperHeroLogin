import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  session: Ember.inject.service('session'),
  name:DS.attr(),
  members:DS.hasMany('user',{async:true}),
  memberOf:null,
  userIsMember:Ember.computed.map('members',function(member,index){
    if(member.id === this.get('session.currentUser.id')){
      this.set('memberOf',true);
      return true;

    }else{
      this.set('memberOf',false);
      return false;
    }
  }),
  setMembership:Ember.computed('memberOf',{
    set(key,value){
      this.set('memberOf',value);
      return value;
    }

  })
});
