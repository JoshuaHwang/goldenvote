/* ----- GENERATE CHART TO DOM ----- */
var chart = c3.generate({
  bindto: '#chart',
  data: {
    x: 'Candidates',
    columns: [
      ['Candidates', 'Clinton', 'Trump', 'Sanders', 'Cruz'],
      ['Twitter', 0, 0, 0, 0],
      ['Polls', 48.3, 35.3, 39.7, 20.0]
    ],
    type: 'bar',
    colors: {
      Twitter: '#55acee',
      Polls: '#eb1e00'
    }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['Trump', 'Hillary', 'Bernie', 'Cruz']
    }
  },
  bar: {
    width: {
      ratio: 0.45
    }
  },
  size: {
    height: 400,
    width: 945
  }
});

/* ----- START TWITTER STREAM ----- */
var socket = io.connect('process.env.PORT' || 'http://localhost:8080');

socket.on('stream', function(tweet){
  console.log(tweet);

  $('#tweetHome').prepend('<img src="' + tweet.user.profile_image_url + '" class="profile-image"> ' 
    + '<b><font size="2">' + tweet.user.name + '</font></b>' + ' ' + '<font size="2" color="#8899A6">@' 
    + tweet.user.screen_name + '</font>' + '<p class="streamed-tweets">' + tweet.text + '</p><hr>');

    if(tweet.text.indexOf(hashtagHillary || hillaryMention) > -1) {
        ++hillary;
      };

    if(tweet.text.indexOf(hashtagTrump || trumpMention) > -1) {
        ++donald;
      };

    if(tweet.text.indexOf(hashtagBernie || bernieMention) > -1) {
        ++bernie;
      };

    if(tweet.text.indexOf(hashtagCruz || cruzMention) > -1) {
        ++cruz;
      };
});

var donald  = 0;
var hillary = 0;
var bernie  = 0;
var cruz    = 0;

var hashtagTrump    = '#Trump2016';
var hashtagHillary  = '#Hillary2016';
var hashtagBernie   = '#Bernie2016';
var hashtagCruz     = '#Cruz2016';
var hillaryMention  = 'Hillary Clinton';
var trumpMention    = 'Donald Trump';
var bernieMention   = 'Bernie Sanders';
var cruzMention     = 'Ted Cruz';

setInterval(function () {
  chart.load({
      columns: [
        ['Twitter', hillary, donald, bernie, cruz],
        ['Polls', 48.3, 35.3, 39.7, 20.0]
      ]
  });
}, 250);

/* ----- TOGGLE BETWEEN GRAPHS ----- */
var democrat   = document.getElementById('twitterButton');
var republican = document.getElementById('pollButton');
var both       = document.getElementById('bothButton');

democrat.addEventListener('click', demGraph);
republican.addEventListener('click', repGraph);
both.addEventListener('click', bothGraph);

function demGraph() {
  chart.hide('Twitter');
  chart.show('Polls');
}

function repGraph() {
  chart.hide('Polls');
  chart.show('Twitter');
}

function bothGraph() {
  chart.show('Twitter');
  chart.show('Polls');
}
