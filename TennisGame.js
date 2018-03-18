<!DOCTYPE html>
<html lang = "sr">
<meta charset = "utf-8">
<head>
 <title>Tennis game title </title>
</head>
<body>
 <h1> Some text here </h1>

 <canvas id = "gameCanvas" width = "800" height = "600"></canvas>

<script>
   var canvas;
   var canvasContext;
   var ballX = 50;
   var ballY = 50;
   var ballSpeedX = 10;
   var ballSpeedY = 4;
   var paddle1Y=250;
   var paddle2Y=250;
   const PADDLE_HEIGHT = 100;
   const PADDLE_THICKNESS = 10;
   const WINNING_SCORE = 3;
   var showWinScreen = false ;

   var Player1Score = 0;
   var Player2Score = 0;

   function calculateMousePos(evt){
     var rect = canvas.getBoundingClientRect();
     var root = document.documentElement;

     var mouseX = evt.clientX - rect.right;
     var mouseY = evt.clientY - rect.top;

     return{
       x:mouseX,
       y:mouseY
     };
   }

   function handleMouseClick(evt){
         if(showWinScreen){
           Player1Score = 0;
           Player2Score = 0;
           showWinScreen = false;
         }
   }

   function ballReset(){
     if(Player1Score >= WINNING_SCORE || Player2Score >= WINNING_SCORE){
       showWinScreen = true;
     }

     ballSpeedX = -ballSpeedX;
     ballX = canvas.width/2;
     ballY = canvas.height/2;
   }

   window.onload = function(){
     canvas = document.getElementById('gameCanvas');
     canvasContext = canvas.getContext('2d');

     var framesPerSecond = 30;
     setInterval(function(){
                 moveEverything();
                 drawEverything();
                }, 1000/framesPerSecond);

    canvas.addEventListener('mousedown',handleMouseClick);

    canvas.addEventListener('mousemove',function(evt){
                                            var mousePos = calculateMousePos(evt);
                                            paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
                                        });

   }

   var PaddleSpeed = 6;

  function computerMovement(){
    if(paddle2Y + PADDLE_HEIGHT/2 > ballY+35){
      paddle2Y -= PaddleSpeed;
    }else if(paddle2Y + PADDLE_HEIGHT/2 < ballY-35){
      paddle2Y += PaddleSpeed;
    }
  }

    function moveEverything(){
      if(showWinScreen){
        return;
      }
      computerMovement();

      ballX = ballX + ballSpeedX;
      ballY = ballY + ballSpeedY;

      if(ballX >= canvas.width){
        if(ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT){
          ballSpeedX *= (-1);
          var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT/2);
          ballSpeedY = deltaY*0.35;
        }else{
          Player1Score++;
          ballReset();
        }
      }

      if(ballX <= 0){
        if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT){
          ballSpeedX *= (-1);
          var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT/2);
          ballSpeedY = deltaY*0.35;
        }else{
          Player2Score++;
          ballReset();
        }

      }

      if(ballY >= canvas.height){
        ballSpeedY = -ballSpeedY;
      }

      if(ballY <= 0){
        ballSpeedY = -ballSpeedY;
      }

    }

    function drawNet(){

     canvasContext.fillStyle = "white";

      for(var i = 0; i < canvas.height; i+= 40){
        canvasContext.fillRect(canvas.width/2-1,i,2,20);
      }
    }

    function drawEverything(){

      canvasContext.fillStyle = 'black';
      canvasContext.fillRect(0,0,canvas.width, canvas.height);
      canvasContext.fillStyle = "white";
      if(showWinScreen){
        if(Player1Score >= WINNING_SCORE){
          canvasContext.fillText("Left Player won!",350,200);
        }else if(Player2Score >= WINNING_SCORE){
          canvasContext.fillText("Right Player won!",350,200);
        }

        canvasContext.fillText("Click to continue",350,500);
        return;
      }



      //left paddle
      canvasContext.fillStyle = 'white';
      canvasContext.fillRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT);


      //right paddle
      canvasContext.fillStyle = 'white';
      canvasContext.fillRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT);


      drawNet();


      /*canvasContext.fillStyle = 'white';
      canvasContext.beginPath();
      canvasContext.arc(ballX,100,10,0,2*Math.PI,true);
      canvasContext.fill();*/
      colorCircle(ballX, ballY, 10, 'white');
      canvasContext.fillStyle = "white";
      canvasContext.fillText(Player1Score,50,100);
      canvasContext.fillText(Player2Score,750,100);
    }

   function colorCircle(centerX, centerY, radius, drawColor){
     canvas.fillStyle = 'white';
     canvasContext.beginPath();
     canvasContext.arc(centerX, centerY, radius, 0, 2*Math.PI, true);
     canvasContext.fill();
   }


 </script>

</body>
</html>
