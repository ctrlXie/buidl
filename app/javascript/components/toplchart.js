const createTopLChart = (argChartData, argChartLabels) => {
  var ctx = document.getElementById("top-lang-chart");

  let chartData = argChartData;
  let chartLabels = argChartLabels;
  // console.log("creating chart");

  var ctx = document.getElementById(`top-lang-chart`).getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: chartLabels,
          datasets: [{
              label: '# of Votes',
              data: chartData,
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
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
      }
  });

}


const generateTopLCharts = () => {

  const productCharts = document.querySelectorAll(".toplang-chart");



  productCharts.forEach((productChart) => {



    let string = productChart.dataset.toplchartlabeldata;
    let jsObj = JSON.parse(string);


    let chartData = Object.values(jsObj);
    let chartLabels = Object.keys(jsObj);

    createTopLChart(chartData, chartLabels);

  });

}

generateTopLCharts()

export { createTopLChart };