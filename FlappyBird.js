//main.js
var canvas = document.getElementById("app");
var context = canvas.getContext("2d");

var points = 0;
var ballX = 200;
var ballY = 400;
var paddleX1 = 700;
var paddleX2 = 1200;
var paddleX3 = 1700;
var paddleX4 = 2200;
var paddleX5 = 2700;
var paddleX6 = 3200;

var stop = false;
//3000+90
//paddle1Y
var paddle1Y1 = Math.floor((Math.random())*750 + 1)-5;
var paddle1Y2 = 900-250-paddle1Y1;

//paddle2Y
var paddle2Y1 = Math.floor((Math.random())*750 + 1)-5;
var paddle2Y2 = 900-250-paddle2Y1;

//paddle3Y
var paddle3Y1 = Math.floor((Math.random())*750 + 1)-5;
var paddle3Y2 = 900-250-paddle3Y1;

//paddle4Y
var paddle4Y1 = Math.floor((Math.random())*750 + 1)-5;
var paddle4Y2 = 900-250-paddle4Y1;

//paddle5Y
var paddle5Y1 = Math.floor((Math.random())*750 + 1)-5;
var paddle5Y2 = 900-250-paddle5Y1;

//paddle6Y
var paddle6Y1 = Math.floor((Math.random())*750 + 1)-5;
var paddle6Y2 = 900-250-paddle6Y1;


function moveBall(){

  canvas.addEventListener("click", function(evt){
    ballY = ballY - 50;
  });
}


window.onload = function(){

  moveBall();

  setInterval(function(){
    drawEverything(),
    moveEverything()
  },90);

 moveBall();

}

function moveEverything(){

  ballY += 15;
  paddleX1 -= 15;
  paddleX2 -= 15;
  paddleX3 -= 15;
  paddleX4 -= 15;
  paddleX5 -= 15;
  paddleX6 -= 15;
}

function drawEverything(){

  context.fillStyle = "black";
  context.fillRect(0,0,canvas.width, canvas.height);

  //drawBall();
  context.fillStyle = "green";
  context.beginPath();
  context.arc(ballX,ballY,15,0,2*Math.PI);
  context.fill();

  //console.log(paddle1Y1);

  //firstWall1
  context.fillStyle = "white";
  context.fillRect(paddleX1,5,10,paddle1Y1);

  //firstWall2
  context.fillStyle = "white";
  context.fillRect(paddleX1,900-paddle1Y2,10,paddle1Y2);

  if(paddleX1 <= 0){
    paddleX1 = 3100;
    paddle1Y1 = Math.floor((Math.random())*750 + 1)-5;
    paddle1Y2 = 900-250-paddle1Y1;
  }

  if(paddleX2 <= 0){
    paddleX2 = 3105;
    paddle2Y1 = Math.floor((Math.random())*750 + 1)-5;
    paddle2Y2 = 900-250-paddle2Y1;
  }

  //secondWall1
  context.fillStyle = "white";
  context.fillRect(paddleX2,5,10,paddle2Y1);

  //secondWall2
  context.fillStyle = "white";
  context.fillRect(paddleX2,900-paddle2Y2,10,paddle2Y2);



  //thirdWall1
  context.fillStyle = "white";
  context.fillRect(paddleX3,5,10,paddle3Y1);

  //thirdWall2
  context.fillStyle = "white";
  context.fillRect(paddleX3,900-paddle3Y2,10,paddle3Y2);

  if(paddleX3 <= 0){
    //3200
    paddleX3 = 3095;
    paddle3Y1 = Math.floor((Math.random())*750 + 1)-5;
    paddle3Y2 = 900-250-paddle3Y1;
  }

  //fourthWall1
  context.fillStyle = "white";
  context.fillRect(paddleX4,5,10,paddle4Y1);

  //fourthWall2
  context.fillStyle = "white";
  context.fillRect(paddleX4,900-paddle4Y2,10,paddle4Y2);

  if(paddleX4 <= 0){
    //2200
    paddleX4 = 3100;
    paddle4Y1 = Math.floor((Math.random())*750 + 1)-5;
    paddle4Y2 = 900-250-paddle4Y1;
  }

  //fifthWall1
  context.fillStyle = "white";
  context.fillRect(paddleX5,5,10,paddle5Y1);

  //fifthWall2
  context.fillStyle = "white";
  context.fillRect(paddleX5,900-paddle5Y2,10,paddle5Y2);

  if(paddleX5 <= 0){
    paddleX5 = 3105;
    paddle5Y1 = Math.floor((Math.random())*750 + 1)-5;
    paddle5Y2 = 900-250-paddle5Y1;
  }

  //sixthWall1
  context.fillStyle = "white";
  context.fillRect(paddleX6,5,10,paddle6Y1);

  //sixthWall2
  context.fillStyle = "white";
  context.fillRect(paddleX6,900-paddle6Y2,10,paddle6Y2);


  if(paddleX6 <= 0){
    paddleX6 = 3095;
    paddle6Y1 = Math.floor((Math.random())*750 + 1)-5;
    paddle6Y2 = 900-250-paddle6Y1;
  }

  if(paddleX1 == 190  && (ballY > (5 + paddle1Y1)) && (ballY < 900 - paddle1Y2)){
    points++;
  }

  if(paddleX2 == 195  && (ballY > (5 + paddle2Y1)) && (ballY < 900 - paddle2Y2)){
    points++;
  }

  if(paddleX3 == 200  && (ballY > (5 + paddle3Y1)) && (ballY < 900 - paddle3Y2)){
    points++;
  }

  if(paddleX4 == 190  && (ballY > (5 + paddle4Y1)) && (ballY < 900 - paddle4Y2)){
    points++;
  }

  if(paddleX5 == 195  && (ballY > (5 + paddle5Y1)) && (ballY < 900 - paddle5Y2)){
    points++;
  }

  if(paddleX6 == 200  && (ballY > (5 + paddle6Y1)) && (ballY < 900 - paddle6Y2)){
    points++;
  }

 // console.log(points);
}


//index.html
<!DOCTYPE html>
<html lang = "en-US">
<head>
 <meta charset = "utf-8">

</head>
<body>

 <canvas id = "app" height = "900" width = "1000"></canvas>
<script src = "main.js"></script>
</body>

