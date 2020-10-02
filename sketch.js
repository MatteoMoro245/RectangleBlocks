var fixedRec,movingRec
function setup() {
  createCanvas(800,800);
  fixedRec = createSprite(200, 200, 50, 80);
  fixedRec.shapeColor="purple";
  movingRec = createSprite(400, 200, 80, 50);
  movingRec.shapeColor="green";
}

function draw() {
  background(0);
  movingRec.x = World.mouseX; 
  movingRec.y = World.mouseY;
  console.log(movingRec.x-fixedRec.x); 
  if(movingRec.x-fixedRec.x < fixedRec.width/2+movingRec.width/2
    && fixedRec.x-movingRec.x < movingRec.width/2+fixedRec.width/2
    && movingRec.y-fixedRec.y < fixedRec.height/2+movingRec.height/2
    && fixedRec.y-movingRec.y < movingRec.height/2+fixedRec.height/2){
    movingRec.shapeColor="red";
    fixedRec.shapeColor="blue";  
  }else{
    movingRec.shapeColor="green";  
    fixedRec.shapeColor="purple";
  }

  
  drawSprites();
}