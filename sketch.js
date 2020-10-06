var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,play = 1, end = 0,win = 2 ,gameState  = play;
var score = 0,lives = 4,c = 1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);

  monkey = createSprite(50,150,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;

  
  ground = createSprite(300,190,600,10);

  obstacleGroup = createGroup();
   FoodGroup = createGroup();
}


function draw() {
 background("white");
   text("Score: "+ score, 300,20); 
  text("Lives: "+ lives, 300,40); 
  
  monkey.velocityY = 5; 
      monkey.collide(ground);
      
  if (gameState === play){
  
    if(keyDown("space")&& monkey.y <160  ) {
        monkey.velocityY = -10;                     
      }                     
      if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach(); 
      score = score+1; 
      }
  
  if(obstacleGroup.isTouching(monkey)){
      lives = lives - 1;
    c=c+1;
    obstacleGroup.destroyEach();
  FoodGroup.destroyEach(); 
  }
 if (c === 2 ){
   monkey.scale = 0.13;
    }
    
 if (c === 3 ){
   monkey.scale = 0.11;
    }
    
 if (c === 4 ){
   monkey.scale = 0.09;
    }
    
 if (c === 5 ){
   monkey.scale = 0.07;
    }   
        
  if (score > 45){
   gameState = win;  
  }
    if (lives < 1){
      gameState = end;
      } 
  spawnObstacles(); 
  spawnBananas(); 
  }
  
  if (gameState === end){
  obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
    monkey.visible = false;
    
    text("YOU LOSE", 300,100);
  }
  
  if (gameState === win){
  obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
    monkey.visible = false;
    
    text("YOU WIN", 300,100);
  }
    drawSprites();
}        
function spawnObstacles(){
 if (frameCount % 55=== 0){
var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -10 
    obstacle.addImage(obstaceImage);
  obstacle.scale = 0.13  ;
   obstacleGroup.add(obstacle);
    }

} 
function spawnBananas(){
 if (frameCount % 40 === 0){
var bananas = createSprite(600,50,10,40);
   bananas.velocityX = -10     
   bananas.addImage(bananaImage);
  bananas.scale = 0.1;
   FoodGroup.add(bananas);
    }
} 