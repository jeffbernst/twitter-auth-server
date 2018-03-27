const express = require('express');
const App = express();
const Twitter = require('twitter');

require('dotenv').config();

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	bearer_token: process.env.TWITTER_BEARER_TOKEN
});

app.use(function(req, res, next) {
	var allowedOrigins = ['http://thecreativecrypto.com', 'http://localhost:8080'];
	var origin = req.headers.origin;
	if(allowedOrigins.indexOf(origin) > -1){
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	//res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', true);
	return next();
});

App.get('/', (req, res) => {
	const params = {
		screen_name: 'creative_crypto',
		tweet_mode: 'extended'
	};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(error) throw error;
		res.send(tweets);
	});
});

App.listen(8080);