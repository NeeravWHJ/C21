var fixrect,movingrect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(400, 200, 50, 50);
  fixrect.shapeColor = "green";
  fixrect.debug = true;
  fixrect.velocityX = -4;
  movingrect = createSprite(200,200,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  movingrect.velocityX = 4;
o1 = createSprite(100,100,50,50);
o1.shapeColor = "green";
o2 = createSprite(200,100,50,50);
o2.shapeColor = "green";
o4 = createSprite(300,100,50,50);
o4.shapeColor = "green";
o3 = createSprite(400,100,50,50);
o3.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  
 // movingrect.x = World.mouseX;
//movingrect.y = World.mouseY;

 if(isTouching(movingrect,o1)){
  o1.shapeColor = "red";
  movingrect.shapeColor = "red";
 }
 else {
  o1.shapeColor = "green";
  movingrect.shapeColor = "green";
  
  }
 
bounceOff(movingrect,fixrect);



 
 
  

  drawSprites();
}















