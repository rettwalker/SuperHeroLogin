/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({
  register: function(req, res){
    var attr = req.params.all();
    var criteria = {
      scopeKey:attr.email
    };
    var attributes = {
      email:attr.email,
      password:attr.password
    }
    var information = {
      email:attr.identification,
      password:attr.password,
      name:attr.name,
      firstName:attr.firstName,
      lastName:attr.lastName,
      descrip:attr.descrip
    };
    //After getting info check to see if a user already exists
    waterlock.engine.findAuth(criteria, function(err, oldUser){
      if(oldUser){
        return res.badRequest("User already exists");
      } else{
        //if no user exists then use Waterlock to create a new auth and in callback
        //update the user with the registered info
        waterlock.engine.findOrCreateAuth(criteria, attributes, function(err, user){
          User.update(user.id,information).exec(function(err,upDatedUser){
            if(upDatedUser)
              res.ok({message:'200'});
            else {
              res.ok({message:'400'});
            }
          });
        });
      }
    });

  }

  /* e.g.
    action: function(req, res){

    }
  */

});
