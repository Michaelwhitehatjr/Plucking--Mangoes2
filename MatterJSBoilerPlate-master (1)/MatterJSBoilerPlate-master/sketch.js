
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	mangoImg = loadImage("mango.png");
	treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = Bodies.rectangle(500,200,30,30, {isStatic: true});
	World.add(world,mango1)

	mango2 = Bodies.rectangle(400,100,50,50, {isStatic: true});
	World.add(world,mango2)

	mango3 = Bodies.rectangle(200,300,70,70, {isStatic: true});
	World.add(world,mango3)

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(treeImg, 300,200,400,400);

  image(mangoImg, mango1.position.x, mango1.position.y,30,30);
  image(mangoImg, mango2.position.x, mango2.position.y,50,50);
  image(mangoImg, mango3.position.x, mango3.position.y,70,70);

  drawSprites();
 
}



