'use strict';

module.exports = function(req, res, next) {


  Auth.findOne({email:req.body.email}).exec(function findOneCB(err, found){
    if(req.headers.referer == 'http://localhost:4200/register' || req.headers.referer == 'http://localhost:4200/login'){
      req.body.type="local";
    }
    if(found != null){
      next();
    } else{
      if(req.headers.referer == 'http://localhost:4200/register'){
        next();
      } else{
        return res.forbidden({error:'User not found'});
      }
    }
  });
};
