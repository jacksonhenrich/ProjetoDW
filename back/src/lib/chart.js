//import Chart from 'chart.js/auto';
var ctx = document.getElementById("wifi-chart").getContext("2d");

function drawChannel(height, x, width) {
    var paper = Raphael(0, 0, 500, 4000);
    var x_start = x - width; 
    var y_start = 200;
    //var width = 50;
    //var height = 100;
    var rotation = 0;
    var direction = 1;
    var x_end = x + width;
    var y_end = 200;

    var ellipse = paper.path("M" +  x_start + ',' + y_start + ' A'+ width + ',' + height + ' ' + rotation + ' 1,' + direction + ' ' + x_end + ',' + y_end).attr({"stroke-width": 2, stroke: "orange"});
}

//drawChannel(95, 250, 50)

//drawChannel(180, 350, 50)

var data = {
       labels: [
         "Canal 1",
         "Canal 2",
         "Canal 3",
         "Canal 4",
         "Canal 5",
         "Canal 6",
         "Canal 7",
         "Canal 8",
         "Canal 9",
         "Canal 10",
         "Canal 11",
         "Canal 12",
         "Canal 13",
         "Canal 14",
       ],
    //   datasets: [
    //     {
    //       label: "Intensidade do sinal",
    //       data: [
    //         -90, -85, -80, -75, -70, -65, -60, -55, -50, -45, -40, -35, -30, -25,
    //       ],
    //       backgroundColor: "rgba(54, 162, 235, 0.5)", // Cor de preenchimento do gráfico
    //       borderColor: "rgba(54, 162, 235, 1)", // Cor da borda do gráfico
    //       borderWidth: 1, // Largura da borda do gráfico
    //     },
    //   ],
    //labels: [0, 1, 2, 3, 4, 5],
      datasets: [
        {
          label: "Canal 1",
          data: [
            drawChannel(95, 250, 50)
          ],
          backgroundColor: "rgba(54, 162, 235, 0.5)", // Cor de preenchimento do gráfico
          borderColor: "rgba(54, 162, 235, 1)", // Cor da borda do gráfico
          borderWidth: 5, // Largura da borda do gráfico
        },
        {
          label: "Canal 1",
          data: [
            drawChannel(180, 350, 50)
          ],
          backgroundColor: "rgba(54, 162, 235, 0.5)", // Cor de preenchimento do gráfico
          borderColor: "rgba(54, 162, 235, 1)", // Cor da borda do gráfico
          borderWidth: 5, // Largura da borda do gráfico
        },
      ],
};

var options = {
    scales: {
      y: {
        beginAtZero: false,
        //suggestedMin: -90, // Valor mínimo do eixo Y
        //suggestedMax: -20, // Valor máximo do eixo Y
      },
    },
};

var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
});
