const express = require('express');
const App = express();
const Twitter = require('twitter');
const cors = require('cors');

require('dotenv').config();

App.use(cors());

const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	bearer_token: process.env.TWITTER_BEARER_TOKEN
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

App.listen(process.env.PORT || 8080);