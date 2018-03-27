const express = require('express');
const App = express();
const Twitter = require('twitter');

require('dotenv').config();

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	bearer_token: process.env.TWITTER_BEARER_TOKEN
});

App.get('/', (req, res) => {
	client.get('statuses/user_timeline', {screen_name: 'creative_crypto', tweet_mode: 'extended'}, function(error, tweets, response) {
		if(error) throw error;
		res.send(tweets);
	});
});

App.listen(8080);