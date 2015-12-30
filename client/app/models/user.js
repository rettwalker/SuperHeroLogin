import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  firstName:DS.attr(),
  lastName:DS.attr(),
  descrip:DS.attr(),
  photo:DS.attr(),
  Teams:DS.hasMany('team'),
  email:DS.attr(),


});
