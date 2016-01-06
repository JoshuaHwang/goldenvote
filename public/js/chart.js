new Chartist.Bar('.ct-chart', {
  labels: ['Trump', 'Clinton', 'Bernie', 'Cruz'],
  series: [
    [35.0, 53.8, 19.5, 31.2],
    [76.4, 10.3, 50.2, 7.8]
  ]
}, {
  seriesBarDistance: 20,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
});

