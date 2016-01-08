import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import Ember from 'ember';

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
            console.log(authResponse);
            var _this = this;
						Ember.run(() => {
              var authorizationCode = authResponse.authorizationCode;
              console.log(authorizationCode);
              //console.log(provider);
              if(provider === 'google-oauth2'){
                console.log(provider);
                Ember.$.ajax({
                  url: 'http://localhost:1337/api/v1/auths/google_oauth2',
                  data: { 'code': authorizationCode },
                  dataType: 'json',
                  success: function(stAuthResponse) {
                    //console.log(stAuthResponse);
                    Ember.merge(authResponse, stAuthResponse);
                    //console.log(authResponse);
                    _this._resolveWith(provider, authResponse, resolve);
                  },
                  error: Ember.run.bind(null, reject)
                });
              }else if(provider === 'facebook-oauth2'){
                console.log(provider);
                console.log(authorizationCode);
                Ember.$.ajax({
                  url: 'http://localhost:1337/api/v1/auths/facebook_oauth2',
                  data: { 'code': authorizationCode },
                  dataType: 'json',
                  success: function(stAuthResponse) {
                    console.log(stAuthResponse);
                    Ember.merge(authResponse, stAuthResponse);
                    _this._resolveWith(provider, authResponse, resolve);
                  },
                  error: Ember.run.bind(null, reject)
                });
              }
						});

					});
			});
  },

});
