new Chartist.Bar('.ct-chart', {
  labels: ['Trump', 'Clinton', 'Bernie'],
  series: [
    [5, 4, 3],
    [3, 2, 9]
  ]
}, {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
});
