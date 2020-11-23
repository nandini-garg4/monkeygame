
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup,bananaGroup;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
 
  createCanvas(400,400)
  background("white")
  monkey=createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-6;
  ground.visible=false
  
  
  obstaclesGroup = new Group();
  bananaGroup = new Group(); 
  
  survivalTime=0

  
}


function draw() {
 background('white')
  
  stroke("white")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())  
  text("survival time: " + survivalTime,500,50)
  
  ground.velocityX=-4
  
  if (ground.x < 0){
    console.log(ground.x)
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
 monkey.velocityY = monkey.velocityY + 0.8
  obstacle()
  food()
 
  drawSprites()
  
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(200,120,40,10);
    banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    bananaGroup.add(banana)
    banana.lifetime=200;
  } 
 
  
}

function obstacle()
{
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(200,310,40,10);
    
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstaclesGroup.add(obstacle)
    obstacle.lifetime=200;
  }
  
  
  
}