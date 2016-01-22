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
    console.log("req.body");
    res.ok();
  },
  /* e.g.
    action: function(req, res){

    }
  */
});
