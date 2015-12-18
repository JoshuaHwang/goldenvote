/* ----- CHANGES GRAPH DATA ON TOGGLE ----- */
var democrat = document.getElementById('democratToggle');
var republican = document.getElementById('republicanToggle');

democrat.addEventListener('click', demGraph);
republican.addEventListener('click', repGraph);

function demGraph() {

}

var presence1 = document.getElementById('twitterFirst');
var presence2 = document.getElementById('twitterSecond');
var presence3 = document.getElementById('twitterThird');
var presence4 = document.getElementById('twitterFourth');

var candidate1 = document.getElementById('firstPlace');
var candidate2 = document.getElementById('secondPlace');
var candidate3 = document.getElementById('thirdPlace');
var candidate4 = document.getElementById('fourthPlace');

/* ----- POSTS TWEETS ----- */
democrat.addEventListener('click', demTweets);
republican.addEventListener('click', repTweets)