import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  teams:DS.hasMany('team'),

});
