import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

export default ToriiAuthenticator.extend({
  torii: Ember.inject.service(),
    restore(data) {
  			var _data = data;
  			return new Ember.RSVP.Promise((resolve) => {
  				return this._super(data)
  					.then((data) => {
  						Ember.merge(data, _data);
  						resolve(data);
  					});
  			});
  		},
  		authenticate(provider, options) {
  			return new Ember.RSVP.Promise((resolve, reject) => {
  				return this._super(provider, options)
  					.then((authResponse) => {
  						Ember.run(() => {
                console.log('Did we make it here?');
                var _this = this;
                var authorizationCode = authResponse.authorizationCode;
                Ember.$.ajax({
                  url: 'http://localhost:1337/api/v1/auths/facebook_oauth2',
                  data: { 'code': authorizationCode },
                  dataType: 'json',
                  success: function(stAuthResponse) {
                    console.log(stAuthResponse);
                    _this._resolveWith(provider, stAuthResponse, resolve);
                  },
                  error: function(response){
                    console.log(response);
                    Ember.run.bind(null, reject);}
                });
  						});
  					});
  			});
  		},

  }
)
