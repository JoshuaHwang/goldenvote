/* ----- MODALS FOR PRESIDENTIAL BIOS ----- */
var bioImage    = document.getElementById('bioImage');
var bioLabel    = document.getElementById('bioLabel');
var presName    = document.getElementById('candidateName');
var residence   = document.getElementById('residence');
var occupation  = document.getElementById('occupation');
var netWorth    = document.getElementById('netWorth');
var followers   = document.getElementById('followers');
var twitterSite = document.getElementById('twitterSite');

function candidate(candidateName, city, job, worth, twitterFollowers) {
  this.candidateName     = candidateName;
  this.city              = city;
  this.job               = job; 
  this.worth             = worth;
  this.twitterFollowers  = twitterFollowers;
}

var donaldTrump    = new candidate('Donald Trump', 'New York City', 'Real estate mogul and reality TV star', 'Somewhere between $1.5 billion and $10 billion', '5.75 million');
var tedCruz        = new candidate('Ted Cruz', 'Houston', 'U.S. Senator from Texas', 'At least $2.1 million', '694 thousand');
var hillaryClinton = new candidate('Hillary Clinton', 'Washington D.C.', 'United Secretary of State', '$45 million', '5.05 million');
var bernieSanders  = new candidate('Bernie Sanders', 'Burlington', 'U.S. senator from Vermont', '$700,000', '1.11 million');

var trumpPortrait   = document.getElementById('trumpPortrait');
var cruzPortrait    = document.getElementById('cruzPortrait');
var clintonPortrait = document.getElementById('clintonPortrait');
var sandersPortrait = document.getElementById('sandersPortrait');

var trumpBio   = document.getElementById('trumpBio');
var clintonBio = document.getElementById('clintonBio');
var sandersBio = document.getElementById('sandersBio');
var cruzBio    = document.getElementById('cruzBio');

var atTrump   = document.getElementById('trumpSite');
var atHillary = document.getElementById('clintonSite');
var atBernie  = document.getElementById('sandersSite');
var atCruz    = document.getElementById('cruzSite');

trumpPortrait.addEventListener('click', showTrump);
clintonPortrait.addEventListener('click', showClinton);
sandersPortrait.addEventListener('click', showSanders);
cruzPortrait.addEventListener('click', showCruz);

function showTrump() {
  trumpBio.setAttribute('class', 'show');
  atTrump.setAttribute('class', 'show');
  clintonBio.setAttribute('class', 'hidden');
  sandersBio.setAttribute('class', 'hidden');
  cruzBio.setAttribute('class', 'hidden');
  atHillary.setAttribute('class', 'hidden');
  atBernie.setAttribute('class', 'hidden');
  atCruz.setAttribute('class', 'hidden');
  presName.textContent   = donaldTrump.candidateName;
  residence.textContent  = donaldTrump.city;
  occupation.textContent = donaldTrump.job;
  netWorth.textContent   = donaldTrump.worth;
  followers.textContent  = donaldTrump.twitterFollowers;
}

function showClinton() {
  clintonBio.setAttribute('class', 'show');
  atHillary.setAttribute('class', 'show');
  trumpBio.setAttribute('class', 'hidden');
  sandersBio.setAttribute('class', 'hidden');
  cruzBio.setAttribute('class', 'hidden');
  atTrump.setAttribute('class', 'hidden');
  atBernie.setAttribute('class', 'hidden');
  atCruz.setAttribute('class', 'hidden');
  presName.textContent   = hillaryClinton.candidateName;
  residence.textContent  = hillaryClinton.city;
  occupation.textContent = hillaryClinton.job;
  netWorth.textContent   = hillaryClinton.worth;
  followers.textContent  = hillaryClinton.twitterFollowers;
}

function showSanders() {
  sandersBio.setAttribute('class', 'show');
  atBernie.setAttribute('class', 'show');
  trumpBio.setAttribute('class', 'hidden');
  clintonBio.setAttribute('class', 'hidden');
  cruzBio.setAttribute('class', 'hidden');
  atTrump.setAttribute('class', 'hidden');
  atHillary.setAttribute('class', 'hidden');
  atCruz.setAttribute('class', 'hidden');
  presName.textContent   = bernieSanders.candidateName;
  residence.textContent  = bernieSanders.city;
  occupation.textContent = bernieSanders.job;
  netWorth.textContent   = bernieSanders.worth;
  followers.textContent  = bernieSanders.twitterFollowers;
}

function showCruz() {
  cruzBio.setAttribute('class', 'show');
  atCruz.setAttribute('class', 'show');
  trumpBio.setAttribute('class', 'hidden');
  clintonBio.setAttribute('class', 'hidden');
  sandersBio.setAttribute('class', 'hidden');
  atHillary.setAttribute('class', 'hidden');
  atTrump.setAttribute('class', 'hidden');
  atBernie.setAttribute('class', 'hidden');
  presName.textContent   = tedCruz.candidateName;
  residence.textContent  = tedCruz.city;
  occupation.textContent = tedCruz.job;
  netWorth.textContent   = tedCruz.worth;
  followers.textContent  = tedCruz.twitterFollowers;
}

/* ----- LIVE STREAM WORDS ----- */
var hashtagTrump = '#Trump2016';
var hashtagHillary = '#Hillary2016';
var hashtagBernie = '#Bernie2016';
var hashtagCruz = '#Cruz2016';

