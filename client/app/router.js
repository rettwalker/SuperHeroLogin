import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('superheros', function() {
    this.route('superhero',{path:'/:id'});
    this.route('new');
  });

});

export default Router;
