const Engine = Matter.Engine ; 
const World = Matter.World ; 
const Bodies = Matter.Bodies ;
const Events = Matter.Events ; 


var h , mn ,sc ; 



function setup() {
 createCanvas(350,400);

 engine = Engine.create();
 world = engine.world ; 
  //createSprite(400, 200, 50, 50);

  hr  = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
}

function draw() {
  background("black");  

  Engine.update(engine);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360)

  stroke(255,0,0);
  strokeWeight(7);
  line(175,200,295,270);

  
  stroke(0,255,0);
  strokeWeight(7);
  line(175,200,255,150);

  colorMode(HSB);
  stroke(255, 204, 100);
  strokeWeight(7);
  line(175,200,125,170);

  drawSprites();
}