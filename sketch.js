
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var GROUND;
var bar1,bar2,bar3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
GROUND=new ground(400,650,800,10);
ball1=new balls(20,645);
bar1=new bars(650,640,200,20);

bar2=new bars(540,600,20,100);

bar3=new bars(740,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  bar1.display();
  bar2.display();
  bar3.display();
  GROUND.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  }
}

