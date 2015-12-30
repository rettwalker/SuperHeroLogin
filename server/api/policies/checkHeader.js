'use strict';

module.exports = function(req, res, next) {
  console.log(req.headers);
  console.log(req.headers.referer);
  console.log(req.body);
  next();
};
