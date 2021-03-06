import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  imgFile:null,
  actions:{
    fileLoaded(file) {
      this.imgFile=file;
      console.log(file);
    },
    displayImage(){
      //console.log(this.get('session'));
      console.log(this.imgFile);
      let files = {};
      files[0]=this.imgFile;
      var uploadUrl = 'http://localhost:1337/api/v1/users/uploadImage';
      var header = this.get('session.session.authenticated.access_token');
      var uploader = EmberUploader.Uploader.create({
        url: uploadUrl,
        //Needed to add authorization header to picture upload
        ajaxSettings:function(url, params, method) {
          var self = this;
          return {
            url: url,
            headers:{"authorization":"Bearer "+header},
            type: method || 'POST',
            contentType: false,
            processData: false,
            xhr: function() {
              var xhr = Ember.$.ajaxSettings.xhr();
              xhr.upload.onprogress = function(e) {
                self.didProgress(e);
              };
              self.one('isAborting', function() { xhr.abort(); });
              return xhr;
            },
            data: params
          };
        }
      });
      if (!Ember.isEmpty(files)) {
        uploader.upload(files[0],{id:this.get('session.currentUser.id'),type:"profile"});
      }
    },
  }

});
