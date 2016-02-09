var express = require('express');
var app     = express();
var path    = require('path');
var twit    = require('twit');

var port = process.env.PORT || 8080;
console.log(port + ' is the magic port!');

var server  = app.listen(port);
var io      = require('socket.io').listen(server);

app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var t = new twit({
  consumer_key: 'wjJzOeCTa3NgIwpng7uBbtP0o',
  consumer_secret: 'mFY7YGOkj9LwITBBXdjj4sGsJ3auLaZyDyQr7gGoZ0EEAdzEQD',
  access_token: '4569267073-rwUTZglZLMoKUTrTllluJq3zzGJK2uQ4lBRJkpJ',
  access_token_secret: 'eAwPJybDLYq0G3N5qYivzX3JO6jpiWJ5rO9zpp1LDTsfp'
});

var tweetsArray = [];

io.sockets.on('connection', function(socket) {
  console.log('Someone connected!');

  var stream = t.stream('statuses/filter', { 
    track: [
      '#Bernie2016', 
      '#Hillary2016',
      '#Trump2016', 
      '#Cruz2016'
     ] 
   })

  stream.on('tweet', function (tweet) {
    console.log('name       > ' + tweet.user.name + '\n' + 'username   > ' 
      + tweet.user.screen_name + '\n' + 'tweet      > ' +  tweet.text + '\n\n');

    io.sockets.emit('stream', tweet);

    tweetsArray.push({
          "name"        : tweet.user.name,
          "screenName"  : tweet.user.screen_name,
          "tweet"       : tweet.text
    });

    if(tweetsArray.length == 100) {
        stream.stop();
        console.log('Tweet stream limit reached');
    }
  });

  socket.on('disconnect', function(socket) {
    console.log('Someone disconnected');
  });
});