import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('superheros', function() {
    this.route('superhero',{path:'/:name'});
  });

  this.route('login');
  this.route('register');
  this.route('logout');
  this.route('dashboard');
});

export default Router;
