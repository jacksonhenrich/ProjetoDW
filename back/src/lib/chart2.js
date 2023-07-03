// Obtém o contexto do canvas
var ctx = document.getElementById("wifi-chart2").getContext("2d");

// Dados do gráfico
var data = {
//   labels: [
//     "Canal 1",
//     "Canal 2",
//     "Canal 3",
//     "Canal 4",
//     "Canal 5",
//     "Canal 6",
//     "Canal 7",
//     "Canal 8",
//     "Canal 9",
//     "Canal 10",
//     "Canal 11",
//     "Canal 12",
//     "Canal 13",
//     "Canal 14",
//   ],
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
  labels: [0, 1, 2, 3, 4, 5],
  datasets: [
    {
      label: "Canal 1",
      data: [
        0,
        90,
        0,
        0,
        0,
        0,
      ],
      backgroundColor: "rgba(54, 162, 235, 0.5)", // Cor de preenchimento do gráfico
      borderColor: "rgba(54, 162, 235, 1)", // Cor da borda do gráfico
      borderWidth: 1, // Largura da borda do gráfico
    },
    {
        label: "Canal 2",
        data: [
            0,
            0,
            0,
            0,
          80,
          0,
        ],
      backgroundColor: "rgba(0,255,0, 0.2)", // Cor de preenchimento do gráfico
      borderColor: "rgba(0,255,0,0.5)", // Cor da borda do gráfico
      borderWidth: 1, // Largura da borda do gráfico
    },
  ],
};

// Opções do gráfico
var options = {
  scales: {
    y: {
      beginAtZero: false,
      suggestedMin: -90, // Valor mínimo do eixo Y
      suggestedMax: -20, // Valor máximo do eixo Y
    },
  },
};

// Criação do gráfico de linha
var chart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});