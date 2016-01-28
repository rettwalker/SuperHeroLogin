import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';




export default DS.RESTAdapter.extend(DataAdapterMixin,{
  authorizer: 'authorizer:token',

  /**
   * The host of your API
   */
  host:                 'http://localhost:1337',
  /**
   * The namespace of your API
   */
  namespace:            'api/v1',
  /**
   * Whether to group multiple find by ID with one request with a `where`
   */
});
