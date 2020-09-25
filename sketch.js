
var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);

  fixedRect=createSprite(0, 400, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX=4;

  movingRect=createSprite(600, 400, 80, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=-4;
}

function draw() {
  background("black");  
  bounceOff(movingRect,fixedRect);
  console.log(movingRect.x-fixedRect.x)
  drawSprites();
}
