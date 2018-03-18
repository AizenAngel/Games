<!DOCTYPE html>
<html lang = "en-US">
 <head>
  <title>Tennis Game</title>
 </head>
 <body>
  <canvas id = "game" height = "600" width = "800"></canvas>

  <script>
   var canvas = document.getElementById("game");
   var context = canvas.getContext("2d");
   var ballX = 395;
   var ballY = 295;
   var ballSpeedX = 10;
   var ballSpeedY = 4;
   const PADDLE_HEIGHT = 70;
   var paddle1 = paddle2 = 200;
   var leftScore = 0;
   var rightScore = 0;
   var winScore = 3;
   var showWinner = false;

   function mouseMove(evt){

      var rect = canvas.getBoundingClientRect();

      var mouseX = evt.clientX - rect.right;
      var mouseY = evt.clientY - rect.top;


      return{
        x:mouseX,
        y:mouseY
      };
   }


   window.onload = function(){

    if(!showWinner){
      setInterval(function(){
        moveEverything();
        drawEverything();
      },600/15)


      canvas.addEventListener("mousedown", function(evt){
        if(showWinner){
          leftScore = 0;
          rightScore = 0;
          showWinner = false;
        }
      });

      canvas.addEventListener("mousemove", function(evt){
         var mousePos = mouseMove(evt);
         paddle1 = mousePos.y - (PADDLE_HEIGHT/2);
      });
    }

   }

   function computerMove(){

     if((paddle2 + PADDLE_HEIGHT/2) >= ballY){
       paddle2-= 5;
     }

     if((paddle2 + PADDLE_HEIGHT/2) <= ballY)
       paddle2 += 5;
   }

   function drawEverything(){
      var side = 0;

     context.fillStyle = "black";
     context.fillRect(0,0,canvas.width, canvas.height);

     if(showWinner){
       context.fillStyle = "white";
       if(leftScore == winScore){
       context.fillText("Left player win", canvas.width/2-30,200);
       }

       if(rightScore == winScore){
            context.fillText("Right player win", canvas.width/2-30,200);
       }
       context.fillText("Click to continue", canvas.width/2-30, 500);

     }
     //First bar
     if(!showWinner){
       context.fillStyle = "white";
       context.fillRect(5,paddle1,7,PADDLE_HEIGHT);

       //Second bar
       context.fillStyle = "white";
       context.fillRect(785,paddle2,7,PADDLE_HEIGHT);
     }

     drawNet();


     //BALL
     if(!showWinner){
       context.fillStyle = "red";
       context.beginPath();
       context.arc(ballX,ballY, 10,0,2*Math.PI);
       context.fill();
     }

     //SCORES
     if(!showWinner){
       context.fillStyle = "white";
       context.fillText(leftScore,20,200);
       context.fillText(rightScore, 780,200);
     }
   }

   function reset(){
     ballX = canvas.width/2;
     ballY = canvas.height/2;
     ballSpeedX *= (-1);
   }

   function drawNet(){
     if(showWinner){
       return;
     }
     context.fillStyle = "white";
     for(var i = 0; i < canvas.height; i+= 40){
       context.fillRect(canvas.width/2-3,i,6,20);
     }
   }

   function moveEverything(){
     if(showWinner){
       return;
     }

     computerMove();


     ballX += ballSpeedX;
     ballY += ballSpeedY;

    if(leftScore == winScore || rightScore == winScore){
      showWinner = true;
    }

    if(ballX >= canvas.width){
      if((ballY <= paddle2 + PADDLE_HEIGHT) && (ballY >= paddle2)){
        ballSpeedX *= (-1);
        var deltaY = ballY - (paddle2 + PADDLE_HEIGHT/2);
        ballSpeedY = deltaY*0.35;
      }else{
        leftScore++;
        reset();
      }
    }

    if(ballX <= 0){
      if((ballY <= paddle1 + PADDLE_HEIGHT) && (ballY >= paddle1)){
        ballSpeedX *= (-1);
        var deltaY = ballY - (paddle1 + PADDLE_HEIGHT/2);
        ballSpeedY = deltaY*0.35;
      }else{
        rightScore++;
        reset();
      }
    }

     if(ballY >= canvas.height || ballY <= 0)
        ballSpeedY *= (-1);
   }

  </script>
 </body>
</html>
