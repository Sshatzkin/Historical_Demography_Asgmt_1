window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

var ctx = document.getElementById('myChart');
var data = {
  datasets: [{
    label: 'England',
    backgroundColor: window.chartColors.red,
    borderColor: window.chartColors.red,
    data: [{
      x: 500,
      y: 0.5
    }, {
      x: 650,
      y: 0.5
    }, {
      x: 1000,
      y: 2
    }, {
      x: 1340,
      y: 5
    }, {
      x: 1450,
      y: 3
    }, {
      x: 1546,
      y: 3.76
    }, {
      x: 1575,
      y: 4.01
    }, {
      x: 1601,
      y: 4.32
    }, {
      x: 1676,
      y: 4.32
    }, {
      x: 1695,
      y: 4.44
    }, {
      x: 1709,
      y: 5.00
    }, {
      x: 1755,
      y: 5.99
    }, {
      x: 1760,
      y: 6.33
    }, {
      x: 1780,
      y: 7.54
    }, {
      x: 1800,
      y: 8.87
    }],
    fill: false
  }, {
    label: "Switzerland",
    backgroundColor: window.chartColors.orange,
    borderColor: window.chartColors.orange,
    fill: false,
    data: [{
      x: 1600,
      y: 1
    }, {
      x: 1700,
      y: 1.2
    }, {
      x: 1800,
      y: 1.65
    }]
  }, {
    label: "China",
    backgroundColor: window.chartColors.blue,
    borderColor: window.chartColors.blue,
    fill: false,
    data: [{
      x: 88,
      y: 45
    }, {
      x: 108,
      y: 55
    }, {
      x: 156,
      y: 64
    }, {
      x: 606,
      y: 46
    }, {
      x: 705,
      y: 37
    }, {
      x: 755,
      y: 53
    }]
  }, {
    label: "Senegal",
    backgroundColor: window.chartColors.purple,
    borderColor: window.chartColors.purple,
    fill: false,
    data: [{
      x: 1950,
      y: 2.49
    }, {
      x: 1955,
      y: 2.8
    }, {
      x: 1960,
      y: 3.2
    }, {
      x: 1965,
      y: 3.6
    }, {
      x: 1970,
      y: 4.26
    }, {
      x: 1980,
      y: 5.6
    }, {
      x: 1990,
      y: 7.756
    }, {
      x: 2000,
      y: 9.8
    }]
  }, {
    label: "Argentina",
    backgroundColor: window.chartColors.purple,
    borderColor: window.chartColors.purple,
    fill: false,
    data: [{
      x: 1550,
      y: 0.34
    }, {
      x: 1650,
      y: 0.3
    }, {
      x: 1778,
      y: 0.42
    }, {
      x: 1800,
      y: 0.55
    }, {
      x: 1825,
      y: 0.766
    }, {
      x: 1857,
      y: 1.3
    }, {
      x: 1869,
      y: 1.9
    }, {
      x: 1895,
      y: 4.1
    },  {
      x: 1914,
      y: 8.2
    }, {
      x: 1950,
      y: 17
    }, {
      x: 1955,
      y: 18.78
    }, {
      x: 1960,
      y: 20.5
    }, {
      x: 1980,
      y: 28
    }]
  }, {
    label: "Indonesia",
    backgroundColor: window.chartColors.yellow,
    borderColor: window.chartColors.yellow,
    fill: false,
    data: [{
      x: 1930,
      y: 60
    }, {
      x: 1950,
      y: 69
    }, {
      x: 1960,
      y: 87.8
    }, {
      x: 1970,
      y: 114.7
    }, {
      x: 1980,
      y: 147.4
    }, {
      x: 1990,
      y: 181.4
    }]
  }]
}

var options = {
  responsive: true,
  title: {
    display: true,
    text: 'Social Science Demography Graph'
  },
  tooltips: {
    mode: 'x',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    interserct: true
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Year'
      },
      type: 'linear'
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Population (Mil)'
      }
    }]
  }
}
//This block initializes the html canvas to a Chart js object
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
