// Creating variables
var player1X=10, player1Y=310, player2X=1335, player2Y=310, score1=0, score2=0, move1Up=false, move2Up=false;
var myBallX=667, myBallY=100, myBall=new Image(), ballMoveUp=false, ballMoveRight=false, ballMoveUp2=false, ballMoveRight2=false;
myBall.src="pingPong.png";
var basket=new Image(), vollei=new Image(), baseball=new Image(), socer=new Image(), redBall=new Image(), blueBall=new Image(), greenBall=new Image(), yellowBall=new Image(), whiteBall=new Image(), selectedBall=0;
basket.src="basketball.png";
socer.src="2000px-Soccerball.svg.png";
baseball.src="baseball.png";
vollei.src="volleyball.png";

redBall.src="red.png";
blueBall.src="blue.png";
greenBall.src="green.png";
yellowBall.src="yellow.png";
whiteBall.src="pingPong.png";

var inMenu=true, start=false, inBalls=false, inOptions=false, inAbout=false, inControls=false, language=1;
var on=new Image(), off=new Image(), vkl=new Image(), izkl=new Image(), onSelected=new Image(), offSelected=new Image(), vklSelected=new Image(), izklSelected=new Image(), music=true, sound=true;
on.src="on.png";
off.src="off.png";
vkl.src="vkl.png";
izkl.src="izkl.png";
onSelected.src="onSelected.png";
offSelected.src="offSelected.png";
vklSelected.src="vklSelected.png";
izklSelected.src="izklSelected.png";

var clickSound=new Audio("click.mp3");
var pongSound=new Audio("pingPonSound.mp3");
var menuMusic=new Audio("Game-Menu.mp3");
var backMusic=new Audio("gameMusic.mp3");
var gameWon=false, pause=false;
var myGames="tino26-games.freetzi.com";

function update() {
    //menu
    if(inMenu==true){
        start=false;
        player1X=10;
        player1Y=310;
        player2X=1335;
        player2Y=310;
        myBallX=667;
        myBallY=100;
    }
    
    if(start==false){
        if(music==true){
            menuMusic.volume=0.2;
            menuMusic.play();
        }else{
            menuMusic.pause();
            menuMusic.load();
        }
        ballMoveRight=false;
        ballMoveUp=false;
        myBallX=667;
        myBallY=100;
    }else{
        menuMusic.pause();
    }
    
    //select ball
    if(selectedBall==1){
        myBall.src="basketball.png";
    }
    if(selectedBall==2){
        myBall.src="2000px-Soccerball.svg.png";
    }
    if(selectedBall==3){
        myBall.src="volleyball.png";
    }
    if(selectedBall==4){
        myBall.src="baseball.png";
    }
    if(selectedBall==5){
        myBall.src="red.png";
    }
    if(selectedBall==6){
        myBall.src="blue.png";
    }
    if(selectedBall==7){
        myBall.src="green.png";
    }
    if(selectedBall==8){
        myBall.src="yellow.png";
    }
    if(selectedBall==9 || selectedBall==0){
        myBall.src="pingPong.png";
    }
    
    
    if(gameWon==true){
        start=false;
        inMenu=false;
    }
    
    //game
    if(start==true){
        if(music==true){
            backMusic.volume=0.4;
            backMusic.play();
        }
        inMenu=false;
        
        //player1
        if(pause==false){
            if(isKeyPressed[38]){
                player1Y-=3;
                move1Up=true;
            }
            if(isKeyPressed[40]){
                player1Y+=3;
                move1Up=false;
            }
        }

        if(player1Y<=0){
            player1Y=0;
        }
        if(player1Y>=560){
            player1Y=560;
        }

        
        //player2
        if(pause==false){
            if(isKeyPressed[87]){
                player2Y-=3;
                move2Up=true;
            }

            if(isKeyPressed[83]){
                player2Y+=3;
                move2Up=false;
            }
        }
        
        if(player2Y<=0){
            player2Y=0;
        }
        if(player2Y>=560){
            player2Y=560;
        }
        
        
        //ball
        if(ballMoveUp==true){
            myBallY-=3;
        }
        if(ballMoveUp==false){
            myBallY+=3;
        }
        if(ballMoveRight==true){
            myBallX+=3;
        }
        if(ballMoveRight==false){
            myBallX-=3;
        }
        
        
        if(myBallY>=632){
            ballMoveUp=true;
        }
        if(myBallY<=0){
            ballMoveUp=false;
        }
        
        if(myBallX>=1335){
            score1++;
            myBallX=667;
            myBallY=100;
            ballMoveRight=true;
            ballMoveUp=false;
        }
        
        if(myBallX<=0){
            score2++;
            myBallX=667;
            myBallY=100;
            ballMoveRight=false;
            ballMoveUp=false;
        }
        
        
        if(areColliding(player1X, player1Y, 20, 100, myBallX, myBallY, 30, 30)){
            pongSound.play();
            ballMoveRight=true;
            if(move1Up==false){
                if(ballMoveUp==false){
                    ballMoveUp=false;
                }
                if(ballMoveUp==true){
                    ballMoveUp=false;
                }
            }
            if(move1Up==true){
                if(ballMoveUp==false){
                    ballMoveUp=true;
                }
                if(ballMoveUp==true){
                    ballMoveUp=true;
                }
            }
        }
        
        
        if(areColliding(player2X, player2Y, 20, 100, myBallX, myBallY, 30, 30)){
            pongSound.play();
            ballMoveRight=false;
            if(move2Up==false){
                if(ballMoveUp==false){
                    ballMoveUp=false;
                }
                if(ballMoveUp==true){
                    ballMoveUp=false;
                }
            }
            if(move2Up==true){
                if(ballMoveUp==false){
                    ballMoveUp=true;
                }
                if(ballMoveUp==true){
                    ballMoveUp=true;
                }
            }
        }
        
        if(score1>=5 || score2>=5){
            player1Y=310;
            player2Y=310;
            myBallX=667;
            myBallY=100;
            gameWon=true;
        }
        
        
    }else{
        backMusic.pause();
    }
    
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle="#000000";
    context.fillRect(0, 0, 1370, 662);
    context.setLineDash([0, 0]);
    context.strokeStyle="cyan";
    context.strokeRect(1, 1, 1364, 660);
    context.fillStyle="#ffffff";
    context.fillRect(player1X, player1Y, 20, 100);
    context.fillRect(player2X, player2Y, 20, 100);
    context.setLineDash([5, 3]);
    context.beginPath();
    context.moveTo(682, 0);
    context.lineTo(682, 662);
    context.stroke();
    context.fillStyle="white";
    context.font="70px Arial";
    context.fillText(score1, 620, 60, 50);
    context.fillText(":", 672, 55, 50);
    context.fillText(score2, 705, 60, 50);
    
    
    
    if(inMenu==true){
        context.fillStyle="white";
        context.font="50px Arial";
        if(language==1){
            context.fillText("Pong Edition 2018", 480, 180, 500);
        }
        if(language==2){
            context.fillText("Понг Версия 2018", 480, 180, 500);
        }
        
        
        if(language==1){
            if(areColliding(560, 240, 260, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Start Game", 560, 280, 500);
        }
        if(language==2){
            if(areColliding(530, 240, 303, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Започни игра", 530, 280, 500);
        }
        
        
        if(language==1){
            if(areColliding(600, 310, 185, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Options", 600, 350, 500);
        }
        if(language==2){
            if(areColliding(562, 310, 240, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Настройки", 560, 350, 500);
        }
        
        
        
        if(language==1){
            if(areColliding(630, 380, 115, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Balls", 630, 420, 500);
        }
        if(language==2){
            if(areColliding(620, 380, 130, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Топки", 620, 420, 500);
        }
        
        
        
        if(language==1){
            if(areColliding(620, 450, 145, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("About", 620, 490, 500);
        }
        if(language==2){
            if(areColliding(575, 450, 220, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("За играта", 575, 490, 500);
        }
        
        
        if(language==1){
            if(areColliding(595, 520, 190, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Controls", 595, 560, 500);
        }
        if(language==2){
            if(areColliding(580, 520, 220, 40, mouseX, mouseY, 1, 1)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Контроли", 580, 560, 500);
        }
    }
    
    
    
    if(inBalls==true){
        if(areColliding(407, 188, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==1){
            context.globalAlpha=1;
        }
        context.drawImage(basket, 407, 188, 70, 70);
        if(areColliding(565, 188, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==2){
            context.globalAlpha=1;
        }
        context.drawImage(socer, 565, 188, 70, 70);
        if(areColliding(735, 188, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==3){
            context.globalAlpha=1;
        }
        context.drawImage(vollei, 735, 188, 70, 70);
        if(areColliding(900, 188, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==4){
            context.globalAlpha=1;
        }
        context.drawImage(baseball, 900, 188, 70, 70);
        
        if(areColliding(407, 350, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==5){
            context.globalAlpha=1;
        }
        context.drawImage(redBall, 407, 350, 70, 70);
        if(areColliding(565, 350, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==6){
            context.globalAlpha=1;
        }
        context.drawImage(blueBall, 565, 350, 70, 70);
        if(areColliding(735, 350, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==7){
            context.globalAlpha=1;
        }
        context.drawImage(greenBall, 735, 350, 70, 70);
        if(areColliding(900, 350, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==8){
            context.globalAlpha=1;
        }
        context.drawImage(yellowBall, 900, 350, 70, 70);
        if(areColliding(407, 530, 70, 70, mouseX, mouseY, 1, 1)){
            context.globalAlpha=1;
        }else{context.globalAlpha=0.6;}
        if(selectedBall==9){
            context.globalAlpha=1;
        }
        context.drawImage(whiteBall, 407, 530, 70, 70);
        
        context.globalAlpha=1;

        
        if(language==1){
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 265, 75, 35)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("OK", 1090, 300, 100);
        }
        if(language==2){
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 265, 145, 45)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Добре", 1090, 300, 150);
        }
        
        if(language==1){
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 365, 165, 35)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Cansel", 1090, 400, 200);
        }
        if(language==2){
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 365, 145, 35)){
                context.font="bold 50px Arial";
            }else{context.font="50px Arial";}
            context.fillText("Назад", 1090, 400, 200);
        }
        
    }
    
    context.drawImage(myBall, myBallX, myBallY, 30, 30);
    
    
    
    if(inOptions==true){
        if(language==1){
            context.drawImage(off, 280, 250, 100, 50);
            context.drawImage(on, 400, 250, 100, 50);
            context.drawImage(off, 280, 500, 100, 50);
            context.drawImage(on, 400, 500, 100, 50);
            
            
            
            if(music==false){
                context.drawImage(offSelected, 280, 250, 100, 50);
            }
            if(music==true){
                context.drawImage(onSelected, 400, 250, 100, 50);
            }
            if(sound==false){
                context.drawImage(offSelected, 280, 500, 100, 50);
            }
            if(sound==true){
                context.drawImage(onSelected, 400, 500, 100, 50);
            }
            
            
            
            if(areColliding(mouseX, mouseY, 1, 1, 280, 250, 100, 50)){
                context.drawImage(offSelected, 280, 250, 100, 50);
                if(music==true){
                    context.drawImage(on, 400, 250, 100, 50);
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 400, 250, 100, 50)){
                context.drawImage(onSelected, 400, 250, 100, 50);
                if(music==false){
                    context.drawImage(off, 280, 250, 100, 50);
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 280, 500, 100, 50)){
                context.drawImage(offSelected, 280, 500, 100, 50);
                if(sound==true){
                    context.drawImage(on, 400, 500, 100, 50);
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 400, 500, 100, 50)){
                context.drawImage(onSelected, 400, 500, 100, 50);
                if(sound==false){
                    context.drawImage(off, 280, 500, 100, 50);
                }
            }
        }
        
        if(language==2){
            context.drawImage(izkl, 280, 250, 100, 50);
            context.drawImage(vkl, 400, 250, 100, 50);
            context.drawImage(izkl, 280, 500, 100, 50);
            context.drawImage(vkl, 400, 500, 100, 50);
            
            
            
            if(music==false){
                context.drawImage(izklSelected, 280, 250, 100, 50);
            }
            if(music==true){
                context.drawImage(vklSelected, 400, 250, 100, 50);
            }
            if(sound==false){
                context.drawImage(izklSelected, 280, 500, 100, 50);
            }
            if(sound==true){
                context.drawImage(vklSelected, 400, 500, 100, 50);
            }
            
            
            
            
            if(areColliding(mouseX, mouseY, 1, 1, 280, 250, 100, 50)){
                context.drawImage(izklSelected, 280, 250, 100, 50);
                if(music==true){
                    context.drawImage(vkl, 400, 250, 100, 50);
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 400, 250, 100, 50)){
                context.drawImage(vklSelected, 400, 250, 100, 50);
                if(music==false){
                    context.drawImage(izkl, 280, 250, 100, 50);
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 280, 500, 100, 50)){
                context.drawImage(izklSelected, 280, 500, 100, 50);
                if(sound==true){
                    context.drawImage(vkl, 400, 500, 100, 50);
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 400, 500, 100, 50)){
                context.drawImage(vklSelected, 400, 500, 100, 50);
                if(sound==false){
                    context.drawImage(izkl, 280, 500, 100, 50);
                }
            }
        }
        
        context.font="50px arial";
        if(language==1){
            context.fillText("Musik", 320, 230, 200);
            context.fillText("Sounds", 310, 480, 200);
            context.fillText("Language", 800, 250, 200);
        }
        
        if(language==2){
            context.fillText("Музика", 320, 230, 200);
            context.fillText("Звук", 310, 480, 200);
            context.fillText("Език", 800, 250, 200);
        }
        
        if(areColliding(mouseX, mouseY, 1, 1, 800, 340, 160, 45)){
            context.font="bold 50px arial";
        }else{context.font="50px arial";}
        context.fillText("English", 800, 380, 200);
        if(areColliding(mouseX, mouseY, 1, 1, 800, 410, 200, 45)){
            context.font="bold 50px arial";
        }else{context.font="50px arial";}
        context.fillText("Български", 800, 450, 200);
    }
    
    
    if(inControls==true){
        if(language==1){
            context.font="50px Arial";
            context.fillText("Control player 1", 100, 150, 350);
            context.fillText("ArrowUp", 100, 250, 350);
            context.fillText("ArrowDown", 100, 350, 350);
            context.fillText("Control player 2", 800, 150, 350);
            context.fillText("W-Up", 800, 250, 350);
            context.fillText("S-Down", 800, 350, 350);
        }
        
        if(language==2){
            context.font="50px Arial";
            context.fillText("Управление играч 1", 100, 150, 350);
            context.fillText("Стрелка нагоре", 100, 250, 350);
            context.fillText("Стрелка надолу", 100, 350, 350);
            context.fillText("Управление играч 2", 800, 150, 350);
            context.fillText("W-Нагоре", 800, 250, 350);
            context.fillText("S-Надолу", 800, 350, 350);
        }
    }
    
    
    
    if(inAbout==true){
        if(language==1){
            context.font="50px Arial";
            context.fillText("Creator: Alex-Valentino Georgiev", 200, 200, 800);
            context.fillText("More games:", 200, 300, 800);
            context.fillText(myGames, 550, 300, 800);
        }
        if(language==2){
            context.font="50px Arial";
            context.fillText("Създател: Алекс-Валентино Георгиев", 200, 200, 800);
            context.fillText("Още игри:", 200, 300, 800);
            context.fillText(myGames, 500, 300, 800);
        }
    }
    
    
    
    if(inMenu==false && inBalls==false && start==false){
        if(language==1){
            if(areColliding(mouseX, mouseY, 1, 1, 1280, 615, 75, 25)){
                context.font="bold 25px arial";
            }else{context.font="25px arial";}
            context.fillText("MENU", 1280, 640, 100);
        }
        if(language==2){
            if(areColliding(mouseX, mouseY, 1, 1, 1280, 620, 80, 25)){
                context.font="bold 25px arial";
            }else{context.font="25px arial";}
            context.fillText("МЕНЮ", 1280, 640, 100);
        }
    }
    
    
    if(start==true){
        if(areColliding(mouseX, mouseY, 1, 1, 1320, 615, 23, 30)){
            context.font="bold 30px Arial";
        }else{context.font="30px Arial";}
        context.fillText("| |", 1320, 640, 50);
        
        
        if(pause==true){
            if(language==1){
                context.font="200px Arial";
                context.fillText("PAUSE", 350, 400, 720);
            }
            if(language==2){
                context.font="200px Arial";
                context.fillText("ПАУЗА", 350, 400, 720);
            }
        }
    }
    
    
    if(language==1){
        if(score1>=5){
            context.font="150px Arial";
            context.fillText("Player 1 WINS", 330, 380, 720);
        }
        if(score2>=5){
            context.font="150px Arial";
            context.fillText("Player 2 WINS", 330, 380, 720);
        }
    }
    
    if(language==2){
        if(score1>=5){
            context.font="150px Arial";
            context.fillText("Играч 1 ПЕЧЕЛИ", 300, 380, 750);
        }
        if(score2>=5){
            context.font="150px Arial";
            context.fillText("Играч 2 ПЕЧЕЛИ", 330, 390, 750);
        }
    }
    
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    if(inMenu==true){
        if(language==1){
            if(areColliding(560, 240, 260, 40, mouseX, mouseY, 1, 1)){
                start=true;
                inMenu=false;
                if(sound==true){
                    clickSound.play();
                }
            }

            if(areColliding(600, 310, 185, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inOptions=true;
                if(sound==true){
                    clickSound.play();
                }
            }

            if(areColliding(630, 380, 115, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inBalls=true;
                if(sound==true){
                    clickSound.play();
                }
            }

            if(areColliding(620, 450, 145, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inAbout=true;
                if(sound==true){
                    clickSound.play();
                }
            }
            
            if(areColliding(595, 520, 190, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inControls=true;
                if(sound==true){
                    clickSound.play();
                }
            }
        }
        
        
        if(language==2){
            if(areColliding(530, 240, 303, 40, mouseX, mouseY, 1, 1)){
                start=true;
                inMenu=false;
                if(sound==true){
                    clickSound.play();
                }
            }

            if(areColliding(562, 310, 240, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inOptions=true;
                if(sound==true){
                    clickSound.play();
                }
            }

            if(areColliding(630, 380, 115, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inBalls=true;
                if(sound==true){
                    clickSound.play();
                }
            }

            if(areColliding(570, 450, 220, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inAbout=true;
                if(sound==true){
                    clickSound.play();
                }
            }
            
            if(areColliding(580, 520, 220, 40, mouseX, mouseY, 1, 1)){
                inMenu=false;
                inControls=true;
                if(sound==true){
                    clickSound.play();
                }
            }
        }
    }
    
    
    if(inBalls==true){
        if(areColliding(407, 188, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=1;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(565, 188, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=2;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(735, 188, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=3;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(900, 188, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=4;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(407, 350, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=5;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(565, 350, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=6;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(735, 350, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=7;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(900, 350, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=8;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(407, 530, 70, 70, mouseX, mouseY, 1, 1)){
            selectedBall=9;
            if(sound==true){
                clickSound.play();
            }
        }

        if(language==1){
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 265, 145, 45)){
                inBalls=false;
                inMenu=true;
                if(sound==true){
                    clickSound.play();
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 365, 165, 35)){
                selectedBall=0;
                inBalls=false;
                inMenu=true;
                if(sound==true){
                    clickSound.play();
                }
            }
        }
        
        if(language==2){
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 265, 75, 35)){
                inBalls=false;
                inMenu=true;
                if(sound==true){
                    clickSound.play();
                }
            }
            if(areColliding(mouseX, mouseY, 1, 1, 1090, 365, 165, 35)){
                selectedBall=0;
                inBalls=false;
                inMenu=true;
                if(sound==true){
                    clickSound.play();
                }
            }
        }
    }
    
    
    if(inMenu==false){
        if(language==1){
            if(inBalls==false && start==false && areColliding(mouseX, mouseY, 1, 1, 1280, 615, 75, 25)){
                inMenu=true;
                start=false;
                inOptions=false;
                inAbout=false;
                inBalls=false;
                inControls=false;
                if(gameWon==true){
                    score1=0;
                    score2=0;
                    gameWon=false;
                }
                if(sound==true){
                    clickSound.play();
                }
            }
        }
        if(language==2){
            if(inBalls==false && start==false && areColliding(mouseX, mouseY, 1, 1, 1280, 620, 80, 25)){
                inMenu=true;
                start=false;
                inOptions=false;
                inAbout=false;
                inBalls=false;
                inControls=false;
                if(gameWon==true){
                    score1=0;
                    score2=0;
                    gameWon=false;
                }
                if(sound==true){
                    clickSound.play();
                }
            }
        }
    }
    
    
    
    if(inOptions==true){
        if(areColliding(mouseX, mouseY, 1, 1, 800, 340, 160, 45)){
            language=1;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(mouseX, mouseY, 1, 1, 800, 410, 200, 45)){
            language=2;
            if(sound==true){
                clickSound.play();
            }
        }
        
        
        if(areColliding(mouseX, mouseY, 1, 1, 280, 250, 100, 50)){
            music=false;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(mouseX, mouseY, 1, 1, 400, 250, 100, 50)){
            music=true;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(mouseX, mouseY, 1, 1, 280, 500, 100, 50)){
            sound=false;
            if(sound==true){
                clickSound.play();
            }
        }
        if(areColliding(mouseX, mouseY, 1, 1, 400, 500, 100, 50)){
            sound=true;
            if(sound==true){
                clickSound.play();
            }
        }
        
    }
    
    
    if(start==true){
        if(areColliding(mouseX, mouseY, 1, 1, 1320, 615, 23, 30)){
            if(pause==false){
                pause=true;
                ballMoveRight2=ballMoveRight;
                ballMoveUp2=ballMoveUp;
                ballMoveUp=NaN;
                ballMoveRight=NaN;
            }else{
                pause=false;
                ballMoveRight=ballMoveRight2;
                ballMoveUp=ballMoveUp2;
            }
            clickSound.play();
        }
    }
    
    
};
