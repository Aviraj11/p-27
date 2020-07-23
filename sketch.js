
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(340,200,20,20);
	bobObject2 = new Bob(370,200,20,20);
	bobObject3 = new Bob(400,200,20,20);
	bobObject4 = new Bob(430,200,20,20);
	bobObject5 = new Bob(460,200,20,20);

	roof = new Roof(400,750,700,50);
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



