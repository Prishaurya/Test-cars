var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(200,200,20,20);
  car.shapeColor="white";

  wall=createSprite(1500,200,60,200);
  wall.shapeColor=(80,80,80);
 }
 
function draw() {
  background("black");  
  
  car.velocityX=speed;

  if(wall.x - car.x < wall.width/2 + car.width/2){
     car.velocityX=0;
    
     var deformation=0.5*weight*speed*speed/22500;

     if(deformation<100){
       car.shapeColor="green";
     }

     if(deformation<180 && deformation>100){
       car.shapeColor="yellow";
     }

     if(deformation>180){
       car.shapeColor="red";
     }

  }

  drawSprites();
  }