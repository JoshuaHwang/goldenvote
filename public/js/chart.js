var chart = c3.generate({
  bindto: '#chart',
  data: {
    //x: 'Candidates',
    columns: [
      //['Candidates', 'Clinton', 'Trump', 'Sanders', 'Cruz'],
      ['Twitter', 53.3, 35.3, 32.0, 20.0],
      ['Polls', 25.9, 70.2, 30.8, 7.8]
    ],
    type: 'bar',
    colors: {
      Twitter: '#55acee',
      Polls: '#eb1e00'
    }
  },
  /*axis: {
    x: {
      type: 'category'
    }
  },*/
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

var democrat = document.getElementById('twitterButton');
var republican = document.getElementById('pollButton');
var both = document.getElementById('bothButton');

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