$(document).ready(function(){
  var ctx = document.getElementById("myChart");
  Chart.defaults.global.animation.duration = 5000;
  var data = {
      labels: ["", "",""],
      datasets: [
        {
          label: "Points gained",
          backgroundColor: ["#3e95cd", "#8e5ea2","ffffff"],
          data: [247,226,0]
        }
      ]
  };
  var options = {
    legend: { display: false },
    title: {
      display: true,
      text: 'Points gained in the Fridge Challenge'
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
  };
  var myBarChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: data,
      options: options
  });
});
