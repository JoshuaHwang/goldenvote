new Chartist.Bar('.ct-chart', {
  labels: ['Clinton', 'Trump', 'Bernie', 'Cruz'],
  series: [
    [53.3, 35.3, 32.0, 20.0],
    [25.9, 70.2, 30.8, 7.8]
  ]
}, {
  seriesBarDistance: 20,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
});

function update(data, options, override) {
  if(data) {
    this.data = data;
    this.eventEmitter.emit('data', {
      type: 'update',
      data: this.data
    });
  }

  if(options) {
    this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

    if(!this.initializeTimeoutId) {
      this.optionsProvider.removeMediaQuryListeners();
      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    }
  }

  if(!this.initializeTimeoutId) {
    this.createChart(this.optionsProvider.getCurrentOptions());
  }

  return this;
}