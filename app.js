var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var twit = require('twit');
var config = require('./routes/config.js');

server.listen(8080);
console.log('8080 is the magic port!');

app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var t = new twit(config);
var tweetsArray = [];

io.sockets.on('connection', function(socket) {
  console.log('Someone connected!');

  var stream = t.stream('statuses/filter', { track: ['#Bernie2016', '#Hillary2016', '#Trump2016', '#Cruz2016'] })

  stream.on('tweet', function (tweet) {
    console.log('name       > ' + tweet.user.name + '\n' + 'username   > ' + tweet.user.screen_name + '\n' + 'tweet      > ' +  tweet.text + '\n\n');
    io.sockets.emit('stream', tweet);

    /*
    var interval = setInterval(function() {
      io.sockets.emit('stream', tweet);
    }, 3000);
    */
    /*
    setInterval(function() {
      io.sockets.emit('stream', tweet)
    }, 5000);
    */

    tweetsArray.push({
          "name"        : tweet.user.name,
          "screenName"  : tweet.user.screen_name,
          "tweet"       : tweet.text
    });

    if(tweetsArray.length == 10) {
        stream.stop();
        console.log('Tweet stream limit reached');
    }
  });

  socket.on('disconnect', function(socket) {
    console.log('Someone disconnected');
  });
});