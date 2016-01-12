var socket = io.connect('http://localhost:8080');

socket.on('stream', function(tweet){
  console.log(tweet);
  
  $(tweet.user.name + ' ' + tweet.user.screen_name + '<br>' + tweet.text + '<hr>')
    .prependTo('#tweetHome')
    .hide()
    .slideDown();

});
