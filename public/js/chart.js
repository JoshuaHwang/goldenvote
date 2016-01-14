var socket = io.connect('http://localhost:8080');

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

var tweetArray = [];

socket.on('stream', function(tweet){
  console.log(tweet);

  $(tweet.user.name + ' ' + tweet.user.screen_name + '<br>' + tweet.text + '<hr>')
    .prependTo('#tweetHome')
    .hide()
    .slideDown();

    tweetArray.push(tweet.text);
    console.log(tweetArray);
});

var donald = 0;

var hashtagTrump   = '#Trump2016';
var hashtagHillary = '#Hillary2016';
var hashtagBernie  = '#Bernie2016';
var hashtagCruz    = '#Cruz2016';

var incrementTrump = function() {
  if(tweetArray.indexOf(hashtagTrump) > -1 ) {
    ++donald;
  }
}

setInterval(function () {
  chart.load({
      columns: [
        ['Twitter', donald, Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100)],
        ['Polls', Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100)]
      ]
  });
}, 2500);            

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
