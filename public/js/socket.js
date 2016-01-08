var socket = io.connect('http://localhost:8080');

socket.on('stream', function(tweet){
  console.log(tweet);
  var tweetsArray = [];
  tweetsArray.push(tweet);
  /*
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
*/

  $('#tweetHome').prepend(tweet.text + '<hr>');
/*
  $('#realName').prepend(tweet.user.name);
  $('#screenName').prepend(tweet.user.screen_name);
*/
  //html the content in the div and prepend the div to the other div
  //dynamically create new divs every time
/*
  for(var i = 0; i < tweetsArray.length; i++) {
    $('#tweetHome' + [i]).prepend(tweet.text);
    $('#realName' + [i]).prepend(tweet.user.name);
    $('#screenName' + [i]).prepend(tweet.user.screen_name);
  }
*/
});
