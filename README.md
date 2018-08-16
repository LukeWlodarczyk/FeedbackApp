# FeedbackApp

Site is published at https://survey-feedbacky.herokuapp.com

Card number in order to test Stripe: 4242 4242 4242 4242

## Technologies

- Express
- Mongoose
- Passport
- OAuth 2.0
- Stripe
- SendGrid
- React
- Redux
- Redux-Form
- React-Stripe-Checkout

### Installation

Install the dependencies

```sh
$ npm run install-all
```

Run app

```sh
$ npm run dev
```

You will need to create a dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

```
module.exports = {
	googleClientID:
		'YOUR_GOOGLE_CLIENT_ID',
	googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
	mongoURI: 'YOUR_MONGO_URI',
	cookieKey: 'YOUR-COOKIE_KEY',
	stripePublishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
	stripeSecretKey: 'YOUR_STRIPE_SECRET_KEY',
	sendGridKey:
		'YOUR_SENDGRID_KEY',
	redirectDomain: 'YOUR_REDIRECT_DOMAIN', // e.g. http://localhost:3000
};
```
