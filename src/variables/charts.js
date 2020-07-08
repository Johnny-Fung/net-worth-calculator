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
let chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");
    return {
      datasets: [
        {
          label: 'Cash',
          data: [10],
          backgroundColor: '#C4D156',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: 'Investments',
          data: [25],
          backgroundColor: '#68A03F',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: 'Long Term Assets',
          data: [55],
          backgroundColor: '#2F9138',
          borderColor: "#ffffff",
          borderWidth: 1.5
        },
        {
          label: '',
          data: [0.8],
          backgroundColor: '#ffffff',
          borderColor: "#ffffff",
          borderWidth: 1.5
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
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      titleFontFamily: "'Poppins', sans-serif",
      callbacks: {
        title: () => "Proportions in %:",
      }, //turn off title in tooltips
      bodyFontFamily: "'Poppins', sans-serif"
    },
    responsive: true,
    scales: {
      yAxes: [
        {stacked: true},
      ],
      xAxes: [
        {stacked: true},
        {gridLines: {
          display:false
        }
      },
      ]
    }
  }
};

module.exports = {
  chartExample3  // in src/views/Dashboard.js
};
