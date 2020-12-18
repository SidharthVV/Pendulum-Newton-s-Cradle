
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball1,ball2,ball3,ball4,ball5;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ball1 = new Bob(600,350);
    ball2 = new Bob(500,350);
    ball3 = new Bob(400,350);
    ball4 = new Bob(700,350);
    ball5 = new Bob(800,350);

    rope1 = new Rope(ball1.body,{x:600,y:100})
    rope2 = new Rope(ball2.body,{x:510,y:100})
    rope3 = new Rope(ball3.body,{x:420,y:100})
    rope4 = new Rope(ball4.body,{x:690,y:100})
    rope5 = new Rope(ball5.body,{x:780,y:100})

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background('black');
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}
 
function mouseDragged(){
  Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY})
}





