/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Chart variables
// #############################

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################

// require ('./RoundedBars.js')

let stackedChart = {
  data: canvas => {
    return {
      datasets: [
        {
          label: 'Cash',
          data: [-10],
          backgroundColor: '#C4D156',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: 'Investments',
          data: [-25],
          backgroundColor: '#68A03F',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: 'Long Term Assets',
          data: [-55],
          backgroundColor: '#2F9138',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: 'Separator',
          data: [1.4],
          backgroundColor: '#ffffff',
          borderColor: "#ffffff",
          borderWidth: 0
        },
        {
          label: 'Long Term Debt',
          data: [30],
          backgroundColor: '#940D22',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: 'Short Term Liabilities',
          data: [15],
          backgroundColor: '#D1692E',
          borderColor: "#ffffff",
          borderWidth: 1.5
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

