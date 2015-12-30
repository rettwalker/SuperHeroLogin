import Ember from 'ember';
import CurrentSessionInitializer from '../../../initializers/current-session';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | current session', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  CurrentSessionInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
