const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
  engine = Engine.create();
  world = engine.world;


}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);

}


function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x: mouseX, y:mouseY});
}
