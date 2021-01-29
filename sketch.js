
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var hammer;
var plain;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(150, 10);
	plain = new Plain(400, 695, 800, 10);
	stone = new Stone(100, 350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#87ceeb");

  hammer.display();
  plain.display();
  stone.display();
  
  drawSprites();
 
}



