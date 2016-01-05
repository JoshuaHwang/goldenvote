/*
var express = require('express');
var app = express();
var path = require('path');
// var twitterApi = require('./routes/twitter.js');

app.use(express.static('public'));

// app.use('/routes', twitterApi)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(1337);
console.log('1337 is the magic port!');

----- TESTING BELOW -----
*/

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var twit = require('twit');
var config = require('./routes/config.js');
// var twitterApi = require('./routes/twitter.js');

server.listen(8080);
console.log('8080 is the magic port!');

app.use(express.static('public'));

// app.use('/routes', twitterApi)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var t = new twit(config);
var tweetsArray = [];

io.sockets.on('connection', function(socket) {
  console.log('Someone connected!');

  var stream = t.stream('statuses/filter', { track: ['#Trump2016', '#Hillary2016', '#Bernie2016', '#Cruz2016'] })

  stream.on('tweet', function (tweet) {
    console.log('name       > ' + tweet.user.name + '\n' + 'username   > ' + tweet.user.screen_name + '\n' + 'tweet      > ' +  tweet.text);
    console.log('created on > ' + tweet.created_at + '\n' + 'location   > ' +  tweet.user.location + '\n\n');
    io.sockets.emit('')
    tweetsArray.push({ 
          "name"        : tweet.user.name,
          "screenName"  : tweet.user.screen_name,
          "tweet"       : tweet.text,
          "createdOn"   : tweet.created_at,
          "location"    : tweet.user.location
    });
    if(tweetsArray.length == 8) {
        stream.stop();
        console.log('Tweet stream limit reached');
    }
  });

  socket.on('disconnect', function(socket) {
    console.log('Someone disconnected');
  });
});