const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var pball;
var dustbin,w1,w2;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

  pball = new Paper(50,200);
  ground= new Ground(500,680,1000,10);
  //w1= new Ground(880,585,10,170);
  //w2= new Ground(720,585,10,170);
  dustbin= new Dustbin(830,575,15,100);
}

function draw() {
  rectMode(CENTER);
  background("white");

  textSize(50);
  fill ("black");
  text("Press Up Arrow",300,100);
  text("And Put the Garbage in the Dustbin",100,180);

  pball.display();
  dustbin.display();
  ground.display();
  //w1.display();
  //w2.display();
  drawSprites();
 
}
function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(pball.body,pball.body.position,{x:80,y:-150});

	}



}
 


