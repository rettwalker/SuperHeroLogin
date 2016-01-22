import Ember from 'ember';
import EmberUploader from 'ember-uploader';


export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  imgFile:null,



  actions:{
    addNewHero(){
      //console.log(this.get('session.currentUser.id'));
      let user = this.store.peekRecord('user',this.get('session.currentUser.id'));
      user.set('name',this.name);
      user.set('firstName',this.firstName);
      user.set('lastName',this.lastName);
      user.set('descrip',this.descrip);
      user.save();
      this.transitionToRoute('/superheros/'+user.id );
    },
    addTeam(id){
      let team = this.store.peekRecord('team',id);
      let user = this.store.peekRecord('user',this.get('session.currentUser.id'));
      user.get('Teams').pushObject(team);
      user.save();
      alert("New Team Added");

    },
    removeTeam(id){
      let team = this.store.peekRecord('team',id);
      let user = this.store.peekRecord('user',this.get('session.currentUser.id'));
      user.get('Teams').removeObject(team);
      user.save();
      alert("Team Removed");
    },
    fileLoaded(file) {
      this.imgFile=file;

      console.log(file);
    },
    displayImage(){
      console.log(this.imgFile);
      let files = {};
      files[0]=this.imgFile;
      var uploadUrl = 'http://localhost:1337/api/v1/users/uploadImage';

      var uploader = EmberUploader.Uploader.create({
        url: uploadUrl
      });
      if (!Ember.isEmpty(files)) {
        uploader.upload(files[0]);
      }


    }

  },
});
