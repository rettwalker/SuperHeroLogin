import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('logout');
  this.route('heroInfo',{path:'/:id'});
  this.route('mission');
  this.route('profile',{path:'/profile/:id'});
  this.route('teams');
  this.route('dashboard');
});

export default Router;
