var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
}

function draw() {
  background(0,0,0);  
movingRect.x=mouseX
movingRect.y=mouseY
  
istouching(movingRect,fixedRect);


  
  drawSprites();
} 

