This is a simple API to retrieve the twitter timeline for the a twitter account.

If you'd like to fork or download and use this code, there are a few steps you'll need to take to get it up and running:

- First, run `npm install` in the local repo to get all of the node modules.
- Then create a `.env` file with your `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`, and `TWITTER_BEARER_TOKEN`.
- Next, in the `App.get` endpoint, change the `screen_name` param to whichever one you'd like to use.
- After that it's just a matter of deploying the server and making a fetch request to it.

Just let me know if you run into any problems or have any questions!

_This project is licensed under the terms of the MIT license._