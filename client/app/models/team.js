import DS from 'ember-data';

export default DS.Model.extend({
  session: Ember.inject.service('session'),
  name:DS.attr(),
  members:DS.hasMany('user',{async:true}),

  userIsMember: Ember.computed.map('members',function(member,index){
    if(member.id === this.get('session.currentUser.id')){
      return true;
    }else{
      return false;
    }
  }),

});
