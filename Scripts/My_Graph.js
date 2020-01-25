window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
  white: 'rgb(255,255,255)',
  brit_red: 'rgb(208, 12, 39)',
  brit_blue: 'rgb(0, 31, 126)',
  china_red: 'rgb(223, 36, 7)',
  china_gold: 'rgb(255, 223, 0)',
  arg_blue: 'rgb(117, 170, 219)',
  ind_orange: 'rgb(255, 153, 51)',
  ind_green: 'rgb(19, 136, 8)',
  indo_red: 'rgb(255, 0, 0)',
  turk_red: 'rgb(200, 16, 46)',
  senegal_green: 'rgb(0, 133, 64)',
  senegal_yellow: 'rgb(253, 239, 66)'
};

var ctx = document.getElementById('myChart');
var data = {
  datasets: [{
    label: "Argentina",
    backgroundColor: window.chartColors.white,
    borderColor: window.chartColors.arg_blue,
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
    }, {
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
    label: "China",
    backgroundColor: window.chartColors.china_gold,
    borderColor: window.chartColors.china_red,
    fill: false,
    hidden: true,
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
    label: 'England',
    backgroundColor: window.chartColors.brit_blue,
    borderColor: window.chartColors.brit_red,
    borderDash: [8, 8],
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
    label: "India",
    backgroundColor: window.chartColors.ind_green,
    borderColor: window.chartColors.ind_orange,
    fill: false,
    hidden: true,
    data: [{
      x: 1901,
      y: 238.4
    }, {
      x: 1911,
      y: 252.1
    }, {
      x: 1921,
      y: 251.3
    }, {
      x: 1931,
      y: 279.0
    }, {
      x: 1941,
      y: 318.7
    }, {
      x: 1951,
      y: 361.1
    }, {
      x: 1961,
      y: 439.2
    }, {
      x: 1971,
      y: 548.2
    }, {
      x: 1981,
      y: 683.3
    }, {
      x: 1991,
      y: 846.4
    }, {
      x: 2000,
      y: 1028.7
    }]
  }, {
    label: "Indonesia",
    backgroundColor: window.chartColors.white,
    borderColor: window.chartColors.indo_red,
    pointStyle: 'rect',
    fill: false,
    hidden: true,
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
  }, {
    label: "Ottoman Empire",
    backgroundColor: window.chartColors.white,
    borderColor: window.chartColors.turk_red,
    fill: false,
    hidden: true,
    data: [{
      x: 1520,
      y: 11.6
    }, {
      x: 1566,
      y: 15
    }, {
      x: 1683,
      y: 30
    }, {
      x: 1831,
      y: 27.2
    }, {
      x: 1856,
      y: 35.4
    }, {
      x: 1881,
      y: 17.4
    }]
  }, {
    label: "Senegal",
    backgroundColor: window.chartColors.senegal_yellow,
    borderColor: window.chartColors.senegal_green,
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
    label: "Switzerland",
    backgroundColor: window.chartColors.white,
    borderColor: window.chartColors.indo_red,
    pointStyle: 'cross',
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
  legend: {
    labels: {
      usePointStyle: true
    }
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
