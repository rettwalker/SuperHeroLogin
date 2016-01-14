import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('logout');

  this.route('mission');
  this.route('profile',{path:'/profile/:id'});
  this.route('teams', function() {
    this.route('team-info',{path:'/:id'});
  });
  this.route('dashboard');
  this.route('team-info');
  this.route('superheros',function(){
    this.route('heroInfo',{path:'/:id'});
  });
});

export default Router;
