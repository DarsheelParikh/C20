function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 80, 30);
  fixed  = createSprite(200, 200, 50, 80);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  moving.debug = true;
  fixed.debug = true;
}

function draw() {
  background("lightblue");  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if(moving.x - fixed.x<fixed.width/2+moving.width/2&& fixed.x - moving.x<moving.width/2+fixed.width/2
    && moving.y - fixed.y<fixed.height/2+moving.height/2&& fixed.y - moving.y<moving.height/2+fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    fixed.shapeColor = "green"
    moving.shapeColor = "green";
  }
  drawSprites();
}