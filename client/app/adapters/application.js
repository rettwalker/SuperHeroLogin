import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  /**
   * The host of your API
   */
  host:                 'http://127.0.0.1:1337',
  /**
   * The namespace of your API
   */
  namespace:            'api/v1',
  /**
   * Whether to group multiple find by ID with one request with a `where`
   */
});
