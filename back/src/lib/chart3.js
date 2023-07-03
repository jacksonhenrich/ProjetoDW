// Obter o contexto de renderização 2D do canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Definir o tamanho da grade
var gridSize = 30; // Tamanho de cada célula da grade
var num = 33;
// Calcular o número de linhas e colunas com base no tamanho do canvas e do tamanho da célula
var numCols = Math.floor(canvas.width / gridSize);
var numRows = Math.floor(canvas.height /  num);

// Desenhar as linhas horizontais
for (var i = 0; i <= numRows; i++) {
  var y = i * num;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
}

// Desenhar as linhas verticais
for (var j = 0; j <= numCols; j++) {
  var x = j * gridSize;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke();
}



// Obter o contexto de renderização 2D do canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Definir as informações das meias elipses (coordenadas x, y, raioX, raioY)
var halfEllipse1 = { x: 50, y: 300, radiusX: 30, radiusY: 150, startAngle: Math.PI, endAngle: 2 * Math.PI };
var halfEllipse2 = { x: 300, y: 300, radiusX: 30, radiusY: 60, startAngle: Math.PI, endAngle: 0 };

// Desenhar as meias elipses
ctx.beginPath();
ctx.ellipse(halfEllipse1.x, halfEllipse1.y, halfEllipse1.radiusX, halfEllipse1.radiusY, 0, halfEllipse1.startAngle, halfEllipse1.endAngle);
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fill();

ctx.beginPath();
ctx.ellipse(halfEllipse2.x, halfEllipse2.y, halfEllipse2.radiusX, halfEllipse2.radiusY, 0, halfEllipse2.startAngle, halfEllipse2.endAngle);
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fill();