/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  uploadImage: function(req,res){
    req.file('file').upload({
      dirname: sails.config.appPath+'/assets/images/'+req.body.type+'/'+req.body.id
    },function (err, uploadedFiles) {
      if (err) return res.negotiate(err);
      var filename = uploadedFiles[0].fd.split('/').reverse()[0];
      console.log(filename);
      User.update(req.body.id,{photo:'/images/'+req.body.type+'/'+req.body.id+'/'+filename}).exec(function(err,updated){
        if(err) return res.negotiate(err);
        console.log(updated);
        return res.json({
          message: uploadedFiles.length + ' file(s) uploaded successfully!'
        });
      })

    });
  },
  /* e.g.
    action: function(req, res){

    }
  */
});
