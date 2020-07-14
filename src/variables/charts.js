// #########################################
// // // NWC Charts used inside /index.js
// #########################################

// require ('./RoundedBars.js')

let stackedChart = {
  data: canvas => {
    return {
      datasets: [
        {
          label: ' Cash',
          data: [-10],
          backgroundColor: '#C4D156',
          borderColor: "#ffffff",
          borderWidth: 0
        },
        {
          label: ' Investments',
          data: [-25],
          backgroundColor: '#68A03F',
          borderColor: "#ffffff",
          borderWidth: 0
        },
        {
          label: ' Long Term Assets',
          data: [-55],
          backgroundColor: '#2F9138',
          borderColor: "#ffffff",
          borderWidth: 0
        },
        {
          label: ' Separator',
          data: [1.3],
          backgroundColor: '#242c45',
          borderColor: "#242c45",
          borderWidth: 0
        },
        {
          label: ' Long Term Debt',
          data: [30],
          backgroundColor: '#940D22',
          borderColor: "#ffffff",
          borderWidth: 0
        },
        {
          label: ' Short Term Liabilities',
          data: [15],
          backgroundColor: '#D1692E',
          borderColor: "#ffffff",
          borderWidth: 0
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        usePointStyle: true,
        fontSize: 13,
        padding: 20,
        borderWidth: 0,
        filter: function(legendItem, chartData) {
          if (legendItem.datasetIndex === 3) {
            return false;
          }
         return true;
         }
      }
    },
    tooltips: {enabled: false},
    hover: {mode: null},
    responsive: true,
    scales: {
      yAxes: [
        {stacked: true},
      ],
      xAxes: [{
        stacked: true,
        gridLines: {
          display:false
          },
        ticks: {
             display: false //this will remove the label/text
        }
      },
      ]
    }
  }
};


module.exports = {
  stackedChart  // in src/index.js
};

