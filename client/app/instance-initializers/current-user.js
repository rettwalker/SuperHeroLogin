//it works through the site but on page reload
export function initialize(/* appInstance */) {
  // appInstance.registry.injection('route', 'foo', 'service:foo');
}
import Session from "ember-simple-auth/services/session";
export default {
  name: "current-user",
  before: "ember-simple-auth",


  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        var _this = this;
        if (this.get('isAuthenticated')) {
          console.log(this.get('session.authenticated'));
          //container.lookup("service:store").findRecord('user', this.get('session.authenticated.user.id'))
          //.then((user) => {
          //  this.set('currentUser', user);
          //  console.log(this.get('session.currentUser'));
          //});
        }
      }.observes('isAuthenticated')
    });
  }
};
