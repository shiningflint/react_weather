export default (params) => {
  return {
    type: 'line',
    data: {
      labels: params.labels,
      datasets: [
        {
          label: "Linear interpolation",
          data: params.temperatures,
          borderColor: "#566197",
          backgroundColor: '#566197',
          fill: true,
          cubicInterpolationMode: 'monotone',
        }
      ],
    },
    options: {
      events: [],
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      tooltips: false,
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            min: (params.minTemp - 5),
            max: (params.maxTemp + 5),
          }
        }],
        xAxes: [{
          ticks: {
            padding: 40,
            fontColor: "#7780ad",
          }
        }]
      },
      animation: {
        onComplete: function() {
          const ctx = this.ctx;
          this.data.datasets.forEach(dataset => {
            for (var i = 0; i < dataset.data.length; i++) {
              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
              ctx.fillStyle = '#7780ad';
              var label = dataset.data[i];
              ctx.fillText(label, model.x - 8, model.y - 8);
            }
          });
        }
      },
    },
  };
}
