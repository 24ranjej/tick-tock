var hr, mn, sc;

function setup() {
  createCanvas(800,400);
} 

function draw() {
  background(255,255,255);  

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  angleMode(DEGREES);

 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  drawSprites();
}