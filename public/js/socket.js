var socket = io.connect('http://localhost:8080');

socket.on('stream', function(tweet){
  console.log(tweet);
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
  /*
  var realnames = $('.real-name').append(tweet.user.name);
  var usernames = $('.screen-name').append(tweet.user.screen_name);
  var userTweet = $('.tweet-home').append(tweet.text);

  $(tweet.user.name).addClass('real-name');
  $(tweet.user.screen_name).addClass('screen-name');
*/
  $('#tweetHome').prepend(tweet.user.name + ' ' + 
    tweet.user.screen_name + '<br>' + tweet.text + '<hr>');
/*
  $('#realName').prepend(tweet.user.name);
  $('#screenName').prepend(tweet.user.screen_name);
*/
  //html the content in the div and prepend the div to the other div
  //dynamically create new divs every time
});
