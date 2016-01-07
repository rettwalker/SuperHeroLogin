/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "'self' connect.facebook.net graph.facebook.com",
    'font-src': "'self'",
    'connect-src': "'self' *",
    'img-src': "'self' www.facebook.com",
    'style-src': "'self' 'unsafe-inline' *",
    'media-src': "'self'",
    'frame-src': "'self' staticxx.facebook.com www.facebook.com"
  },
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    torii: {
			sessionServiceName: 'session',
			providers: {
				'google-oauth2': {
					apiKey: '...',
					redirectUri: 'http://localhost:4200/login'
				},
				'facebook-oauth2': {
					apiKey: '...',
          redirectUri:'http://localhost:4200/'
				}
			}
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth'] = {
   authorizer: 'authorizer:token',
   crossOriginWhitelist: ['http://localhost:1337'],

 };
 ENV['ember-simple-auth-token'] = {
   serverTokenEndpoint: 'http://localhost:1337/api/v1/auths/login',
   identificationField: 'email',
   passwordField: 'password',
   tokenPropertyName: 'access_token',
   tokenExpireName: 'expires',
   refreshAccessTokens: true,
   timeFactor: 1,
   refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
   serverTokenRefreshEndpoint: 'http://localhost:1337/api/v1/users/jwt',
 };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
