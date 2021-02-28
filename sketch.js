//Constatnts 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//variables
var ground;
var divisionHeight = 300;

//Arrays
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //making the divisions
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  //making the plinkos
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,375));
  }
  //Making the ground
  ground = new Ground(240,795,width,10);

}

function draw() {
  //Background Stuff
  background("black");  
  rectMode(CENTER);
  ellipseMode(CENTER);

  //Engine update
  Engine.update(engine);

  //Ground display
  ground.display();
 
  //Displaying plinkos
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  //Displaying divisions
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //Displaying particles
  for (var s = 0; s = particles.length; s++){
    particles[s].display();
  }

  //Making the particles
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2 + 10),10,10));
  }
}