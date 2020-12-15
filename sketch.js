
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,325,30,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,360,800,10)
  
}


function draw() {
  FoodGroup = new Group();
  obstacleGroup = new Group();
  score = Math.round(World.frameCount/10);
  background("white");
  text("Survival Time: " + score, 50,50);
  monkey.collide(ground)
  ground.velocityX = -6; 
  if(ground.x < 0){
    ground.x = 400;
  }
  if(keyDown("space") && monkey.y > 200){
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.98;
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(World.frameCount % 80 === 0){
    banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(World.frameCount % 300 === 0){
    obstacle = createSprite(400,337,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}



