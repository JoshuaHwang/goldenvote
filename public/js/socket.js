var socket = io.connect('http://localhost:8080');

socket.on('stream', function(tweet){
  console.log(tweet);
  $('#tweetHome').html(tweet.text);
  $('#tweetHome').hide().each(function(i) {
    $(this).delay(i * 5000).fadeIn(1000);
  });
  $('#realName').html(tweet.user.name);
  $('#realName').hide().each(function(i) {
    $(this).delay(i * 5000).fadeIn(1000);
  });
  $('#screenName').html(tweet.user.screen_name);
  $('#screenName').hide().each(function(i) {
    $(this).delay(i * 5000).fadeIn(1000);
  });
});
