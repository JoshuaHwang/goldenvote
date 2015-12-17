var twit = require('twit');
var express = require('express');
var twitterApi = express.Router();
var t = new twit({
  consumer_key: 'wjJzOeCTa3NgIwpng7uBbtP0o',
  consumer_secret: 'mFY7YGOkj9LwITBBXdjj4sGsJ3auLaZyDyQr7gGoZ0EEAdzEQD',
  access_token: '4569267073-rwUTZglZLMoKUTrTllluJq3zzGJK2uQ4lBRJkpJ',
  access_token_secret: 'eAwPJybDLYq0G3N5qYivzX3JO6jpiWJ5rO9zpp1LDTsfp'
})
/*
t.get('search/tweets', {q: 'Trump', count: 3}, function(error, data, response) {
  console.log(data);
})
*/


var stream = t.stream('statuses/filter', {track: 'Trump'});

stream.on('error', function(error) {
  console.log(error);
})

stream.on('tweet', function(tweet) {
  console.log(JSON.stringify(data));
})

setTimeout(stream.destroy, 3000);


var tweet = {
  text: tweet.text,
  user: {
    screen_name: tweet.user.screen_name,
    profile_image_url: tweet.user.profile_image_url,
    id_str: tweet.user.id_str
  },
  geo: tweet.geo
};

module.exports = twitterApi;

