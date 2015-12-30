import Ember from 'ember';
import { initialize } from '../../../instance-initializers/current-user';
import { module, test } from 'qunit';

module('Unit | Instance Initializer | current user', {
  beforeEach: function() {
    Ember.run(function() {
      this.application = Ember.Application.create();
      this.appInstance = application.buildInstance();
    });
  },
  afterEach: function() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.appInstance);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
