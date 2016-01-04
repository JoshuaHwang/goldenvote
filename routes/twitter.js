var express = require('express');
var twitterApi = express.Router();
var twit = require('twit');
var config = require('./config');

var t = new twit(config);

console.log('Twit is on the job...');

var tweetsArray = [];

//GET WITH TWIT


var params = {
  lang: 'en',
  q: '#Hillary2016',
  geo_enabled: 'true',
  country_code: 'USA',
  count: 100
};

t.get('search/tweets', params, getTweets);

function getTweets(err, data, response)
{
  var tweets = data.statuses;

  for(var i = 0; i < tweets.length; ++i)
  {
    console.log('name       > ' + tweets[i].user.name + '\n' + 'username   > ' + tweets[i].user.screen_name + '\n' + 'tweet      > ' +  tweets[i].text);
    console.log('created on > ' + tweets[i].created_at + '\n' + 'location   > ' +  tweets[i].user.location + '\n\n');
    tweetsArray.push(tweets[i].user.name + tweets[i].user.screen_name + tweets[i].text + tweets[i].created_at + tweets[i].user.location);
  }
}



setInterval(getTweets, 1000 * 60 * 60);

//STREAM WITH TWIT
var streamParams = {
  track: ['#Trump2016', '#Hillary2016', '#Sanders2016']
};

var stream = t.stream('statuses/filter', streamParams);

stream.on('tweet', tweetStream);

function tweetStream(err, data, response)
{
  var tweets = data.statuses;

  for(var i = 0; i < tweets.length; ++i) {
    console.log('name       > ' + tweets[i].user.name + '\n' + 'username   > ' + tweets[i].user.screen_name + '\n' + 'tweet      > ' +  tweets[i].text);
    console.log('created on > ' + tweets[i].created_at + '\n' + 'location   > ' +  tweets[i].user.location + '\n\n');
  }
}

stream.stop();


//POST WITH TWIT
var tweet = {
  status: 'Donald Trump for 2016!'
};

t.post('status/update', tweet, tweeted)

function tweeted(err, data, response)
{
  if(err) {
    console.log('Something went wrong!');
  } else {
    console.log('You tweeted: ' + data);
  }
}

//SET INTERVAL WITH TWIT

function tweetIt(text) {
  var tweetUpdate {
    status = text;
  }
}

t.post('status/update', tweetUpdate, tweetIt)

module.exports = twitApi;


// TRUMP 33.0%
// CRUZ 16.1%
// RUBIO 12.6%
// CARSON 12.0%

// CLINTON 55.3%
// SANDERS 31.2%
// O'MALLEY 2.8%

/* ----- TEST STREAMING ----- */
// var tweetData = JSON.parse(httpResponse.text);

var stream = t.stream('statuses/filter', { track: ['#Trump2016', '#Hillary2016', '#Bernie2016', '#Cruz2016'] })

stream.on('tweet', function (tweet) {
  console.log('name       > ' + tweet.user.name + '\n' + 'username   > ' + tweet.user.screen_name + '\n' + 'tweet      > ' +  tweet.text);
  console.log('created on > ' + tweet.created_at + '\n' + 'location   > ' +  tweet.user.location + '\n\n');
  tweetsArray.push({ 
        "name"        : tweet.user.name,
        "screenName"  : tweet.user.screen_name,
        "tweet"       : tweet.text,
        "createdOn"   : tweet.created_at,
        "location"    : tweet.user.location
  });
  if(tweetsArray.length == 10) {
      stream.stop();
      console.log('Tweet stream limit reached');
  }
})

//put it on the front end to set timeout and call this function again, turning the stream on

