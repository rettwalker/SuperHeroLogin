/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
 var fs = require('fs')
   , path = require('path');
module.exports.bootstrap = function(cb) {
  var postsSource = path.join(process.cwd(), '/assets/images/profile')
    , postsDest = path.join(process.cwd(), '.tmp/public/images/profile');

  fs.symlink(postsSource, postsDest, function(err) {
    cb(err);
  });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
