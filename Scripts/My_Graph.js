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
  datasets: [
    {
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
    }],
    fill: false
  }]
}

var options = {
  responsive: true,
  title: {
    display: true,
    text: 'Social Science Demography Graph'
  },
  tooltips: {
    mode: 'index',
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
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
/* var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
*/
