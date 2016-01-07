var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [
      ['Twitter', 53.3, 35.3, 32.0, 20.0],
      ['Polls', 25.9, 70.2, 30.8, 7.8]
    ],
    type: 'bar',
    colors: {
      Twitter: '#55acee',
      Polls: '#eb1e00'
    }
  },
  bar: {
    width: {
      ratio: 0.45 // this makes bar width 50% of length between ticks
    }
  },
  size: {
    height: 400,
    width: 945
  }
});