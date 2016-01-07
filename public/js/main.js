/* ----- MODALS FOR PRESIDENTIAL BIOS ----- */
var bioImage    = document.getElementById('bioImage');
var bioLabel    = document.getElementById('bioLabel');
var name        = document.getElementById('candidateName');
var residence   = document.getElementById('residence');
var occupation  = document.getElementById('occupation');
var netWorth    = document.getElementById('netWorth');
var followers   = document.getElementById('followers');

function candidate(candidateName, city, job, worth, twitterFollowers) {
  this.candidateName        = candidateName;
  this.city                 = city;
  this.job                  = job; 
  this.worth                = worth;
  this.twitterFollowers     = twitterFollowers;
}

var donaldTrump    = new candidate('Donald Trump', 'New York City', 'Real estate mogul and reality TV star', 'Somewhere between $1.5 billion and $10 billion', '5.75 million @realDonaldTrump');
var tedCruz        = new candidate('Ted Cruz', 'Houston', 'U.S. Senator from Texas', 'At least $2.1 million', '694 thousand @TedCruz');
var hillaryClinton = new candidate('Hillary Clinton', 'Washington D.C.', 'United Secretary of State', '$45 million', '5.05 million @HillaryClinton');
var bernieSanders  = new candidate('Bernie Sanders', 'Burlington', 'U.S. senator from Vermont', '$700,000', '1.11 million @BernieSanders');

var trumpPortrait   = document.getElementById('trumpPortrait');
var cruzPortrait    = document.getElementById('cruzPortrait');
var clintonPortrait = document.getElementById('clintonPortrait');
var sandersPortrait = document.getElementById('sandersPortrait');

var trumpBio   = document.getElementById('trumpBio');
var clintonBio = document.getElementById('clintonBio');
var sandersBio = document.getElementById('sandersBio');
var cruzBio    = document.getElementById('cruzBio');

trumpPortrait.addEventListener('click', showTrump);
clintonPortrait.addEventListener('click', showClinton);
sandersPortrait.addEventListener('click', showSanders);
cruzPortrait.addEventListener('click', showCruz);

function showTrump() {
  trumpBio.setAttribute('class', 'show');
  clintonBio.setAttribute('class', 'hidden');
  sandersBio.setAttribute('class', 'hidden');
  cruzBio.setAttribute('class', 'hidden');
  name.appendChild(donaldTrump.candidateName);
}

function showClinton() {
  clintonBio.setAttribute('class', 'show');
  trumpBio.setAttribute('class', 'hidden');
  sandersBio.setAttribute('class', 'hidden');
  cruzBio.setAttribute('class', 'hidden');
}

function showSanders() {
  sandersBio.setAttribute('class', 'show');
  trumpBio.setAttribute('class', 'hidden');
  clintonBio.setAttribute('class', 'hidden');
  cruzBio.setAttribute('class', 'hidden');
}

function showCruz() {
  cruzBio.setAttribute('class', 'show');
  trumpBio.setAttribute('class', 'hidden');
  clintonBio.setAttribute('class', 'hidden');
  sandersBio.setAttribute('class', 'hidden');
}
/* ----- CHANGES GRAPH DATA ON TOGGLE ----- */
/*
var democrat = document.getElementById('democratToggle');
var republican = document.getElementById('republicanToggle');
var trump = document.getElementById('donaldHead');
var bernie = document.getElementById('bernieHead');

democrat.addEventListener('click', demGraph);
republican.addEventListener('click', repGraph);

function demGraph() {
  trump.setAttribute('class', 'hidden');
  bernie.setAttribute('class', 'show');
}

function repGraph() {
  trump.setAttribute('class', 'show');
  bernie.setAttribute('class', 'hidden');
}

var presence1 = document.getElementById('twitterFirst');
var presence2 = document.getElementById('twitterSecond');
var presence3 = document.getElementById('twitterThird');
var presence4 = document.getElementById('twitterFourth');

var candidate1 = document.getElementById('firstPlace');
var candidate2 = document.getElementById('secondPlace');
var candidate3 = document.getElementById('thirdPlace');
var candidate4 = document.getElementById('fourthPlace');
*/
/* ----- SEND TWEETS ----- */
/*
var submitTweet = document.getElementById('submitTweet');

submitTweet.addEventListener('click', tweetSent, false);

function tweetSent() {
  var xhr = new XMLHttpRequest;
  var twitterInput = document.getElementById('sendTweet').value;
  console.log(twitterInput);
  xhr.open('POST', '', true);
  xhr.send(twitterInput);
}
*/
/* ----- POSTS TWEETS ----- */
/*
democrat.addEventListener('click', demTweets);
republican.addEventListener('click', repTweets);
*/
/*
function demTweets() {

}

function repTweets() {

}
*/