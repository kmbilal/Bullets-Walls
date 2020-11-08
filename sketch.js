var wall, thickness;

var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 5);

  bullet.velocityX = speed;

  bullet.shapeColor = color(255);


wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
}

function draw() {

 bullet.collide(wall);
 wall.shapeColor = color(255,0,0);


  
if(wall.x-bullet.x < (bullet.width+wall.width)/2);
{

bullet.velocityX = 20;
var deformation = 0.5 * weight * speed * speed/22509;

if(deformation < 180){

bullet.shapeColor = color(350,0,0);  
wall.shapeColor = color(255,0,0);

console.log(" if it < 180 " + bullet.shapeColor);
console.log(" if it < 180 " + wall.shapeColor);

}

if(deformation < 180 && deformation > 100){
bullet.shapeColor = color(230,230,0);

console.log(" if it < 180 and >100  " + bullet.shapeColor);
}

if(deformation < 100 ){

  bullet.shapeColor=color(0,255,0);
  console.log(" if it < 100 " + bullet.shapeColor);
}

}

background(0);  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10)
{
wall.shapeColor = color(255, 0,0);
}
}

if(damage < 10)
{
  wall.shapeColor=color(0,255,0);
}
