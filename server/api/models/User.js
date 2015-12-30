/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    name:{
      type:'string',
    },
    Teams:{
      collection:'Team',
      via:'members'
    },
    firstName:{
      type:'string'
    },
    lastName:{
      type:'string'
    },
    photo:{
      type:'string'
    },
    descrip:{
      type:'string'
    },
    includeIn: { list: "index", detail: "record"},
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.attempts;
      delete obj.jsonWebTokens;
      delete obj.auth;
      return obj;
    }
  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate,
};
