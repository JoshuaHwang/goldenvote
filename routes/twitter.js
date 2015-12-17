var twitter = new('twit');
var config = require('./config');

var t = twit(config);

console.log('Twit is on the job...');

//GET WITH TWIT
var params = {
  location: 'California'
  q: 'Trump',
  count: 2,
};

t.get('search/tweets', params, getTweets);

function getTweets(err, data, response)
{
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length; ++i)
  {
    console.log(tweets[i].text + '\n' + tweets[i].created_at);
  }
}

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
setInterval(tweetIt, 1000 * 60 * 60);

function tweetIt(text) {
  var tweetUpdate {
    status = text;
  }
}

t.post('status/update', tweetUpdate, tweetIt)

//STREAM WITH TWIT
var stream = t.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName + ' welcome to my world!');
  console.log('@' + screenName + ' followed you!');
}

// SF 37.7833° N, 122.4167° W
// LA 34.0500° N, 118.2500° W
// OC 33.6700° N, 117.7800° W