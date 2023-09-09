var player,playerImage
var floor,floorImage
var Solo
var vidaPlayer = 100
var vidaMaquina = 5
var zombie1Animation
var revolver,revolverImage
var amo,amoImage

function preload(){

  floorImage = loadImage("./assets/fundo.png")
  zombie1Animation = loadAnimation("./assets/zombieN1.png","./assets/zombieN2.png","./assets/zombieN3.png","./assets/zombieN4.png")
  revolverImage = loadImage("./assets/revolver.png")
  amoImage = loadImage("./assets/amo.png")
}


function setup(){

  createCanvas(1500,650);

  floor = createSprite(width/2,height/2)
  floor.addImage(floorImage)

  player = createSprite(50,50,30,80);
  player.shapeColor = "black"
  //player.addImage(jonhImage)
  //player.scale = 0.1

  revolver = createSprite(player.x + 20,player.y);
  revolver.addImage(revolverImage);
  revolver.scale = 0.1

  Solo = createSprite(width/2,height-50,1500,105)
  
  Solo.visible = false




  
}

function draw() {
  
  background("light_blue");

  if (keyDown("up_arrow")&& player.y>=400){
    player.velocityY = -10
    revolver.velocityY = -10
  }
  player.velocityY = player.velocityY +0.5
  revolver.velocityY = revolver.velocityY +0.5


  if (keyDown("left_arrow")){
    //player.velocityX = -5
    player.x = player.x -5
    revolver.x = revolver.x -5
  }

  if (keyDown("right_arrow")){
    //player.velocityX = +5
    player.x = player.x +5
    revolver.x = revolver.x +5
  }

   player.collide(Solo);
   revolver.collide(Solo);

   if(keyWentDown("SPACE")){
    amo = createSprite(revolver.x,revolver.y)
    amo.addImage(amoImage)
    velocityX = 10
   }

  

   spawnZombiesEasy()

  drawSprites();
        
}

function spawnZombiesEasy() {
  if (frameCount % 60 === 0){
    var x = Math.round(random(550,1500))
    var zombie = createSprite(x,height-155,20,20);
    zombie.velocityX = Math.round(random(-1,-4))
    zombie.frameDelay = 60;
    zombie.addAnimation("zombie",zombie1Animation)
    zombie.scale = 0.3
    
  }
}

