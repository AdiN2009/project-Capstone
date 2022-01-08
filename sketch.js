
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;
var ground;
var leftS;
var rightS;
var leftS1;
var rightS2;
var side1;
var side2;
var side3;
var ground3;
var ground2;
var ball2;
var man,man2;
var o1, o2, o3,o4,o5,o6,o7,o8;
var o9, o10,o11,o12,o13,o14,o15,o16,o17,o18,o19;
var o10, o20, o30,o40,o50,o60,o70,o80;
var o90, o100,o110,o120,o130,o140,o150,o160,o170;
var a,b,c,d,e,f,g;

function preload(){
man = loadImage("man.png");
}
function setup() {
	createCanvas(1600, 800);
  engine = Engine.create();
	world = engine.world;

   var ball_options={
	   isStatic:false,
	   restitution:1.2,
	   friction:1,
	   density:1.2
   }
   var man2_options={
    isStatic:false,
    restitution:0,
    friction:0,
    density:0.1
  }

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(310, 65, 20, ball_options)
	World.add(world,ball);
   o1 = new Ground(180,300,40,40);
   o2 = new Ground(360,300,40,40);
   o3 = new Ground(540,300,40,40);
   o4 = new Ground(720,300,40,40);
   o5 = new Ground(900,300,40,40);
   o6 = new Ground(1080,300,40,40);
   o7 = new Ground(1260,300,40,40);
   o8 = new Ground(1260,300,40,40);
   o9 = new Ground(300,450,40,40);
   o10 = new Ground(480,450,40,40);
   a = new Ground(200,750,10,100);
    b= new Ground(400,750,10,100);
    c= new Ground(600,750,10,100);
   d = new Ground(800,750,10,100);
   e = new Ground(1000,750,10,100);
   f = new Ground(1200,750,10,100);
   g = new Ground(1350,750,10,100);
  
   


   ground3 = new Ground(750,75,1500,10);
   o11 = new Ground(660,450,40,40);
   o12 = new Ground(840,450,40,40);
   o13 = new Ground(1020,450,40,40);
   o14 = new Ground(1200,450,40,40);
   o15 = new Ground(1380,450,40,40);
   o16 = new Ground(480,450,40,40);
   o17 = new Ground(120,450,40,40);
   o90 = new Ground(300,150,40,40);
   o100 = new Ground(480,150,40,40);
   o110 = new Ground(660,150,40,40);
   o120 = new Ground(840,150,40,40);
   o130 = new Ground(1020,150,40,40);
   o140 = new Ground(1200,150,40,40);
   o150 = new Ground(1380,150,40,40);
   o160 = new Ground(480,150,40,40);
   o170 = new Ground(120,150,40,40);
   o18 = new Ground(1440,300,40,40);
   o19 = new Ground(1440,600,40,40);
   o10 = new Ground(180,600,40,40);
   o20 = new Ground(360,600,40,40);
   o30 = new Ground(540,600,40,40);
   o40 = new Ground(720,600,40,40);
   o50 = new Ground(900,600,40,40);
   o60 = new Ground(1080,600,40,40);
   o70 = new Ground(1260,600,40,40);
   o80 = new Ground(1260,600,40,40);
  
  

  side1=new Ground(1490,height/2,20,height);
	side2 =new Ground(10,height/2,20,height);
	side3=new Ground(width/2,10,1560,20);
 

  ground =new Ground(width/2,790,1560,20);




  rectMode(CENTER);
  ellipseMode(RADIUS);
  
 
}


function draw() {

  background(0);

  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20,20)




  ground.display();
  o1.display();
  o2.display();
  o3.display();
  o4.display();
  o5.display();
  a.display();
  b.display();
  c.display();
  d.display();
  e.display();
  f.display();
  g.display();
  o6.display();
  o7.display();
  o8.display();
  o9.display();
  o10.display();
  o11.display();
  o12.display();
  o13.display();
  o14.display();
  o15.display();
  o16.display();
  o17.display();
  o90.display();
  o100.display();
  o110.display();
  o120.display();
  o130.display();
  o140.display();
  o150.display();
  o160.display();
  o170.display();
  o18.display();
  o19.display();
  o10.display();
  o20.display();
  o30.display();
  o40.display();
  o50.display();
  o60.display();
  o70.display();
  o80.display();
  ground3.display();
  


   side1.display();
   side2.display();
   side3.display();
  drawSprites();
  text("10",100,750);
  text("20",300,750);
  text("30",500,750);
  text("40",700,750);
  text("40",900,750);
  text("30",1100,750);
  text("20",1275,750);
  text("10",1425,750);
  text("press the key S to release the ball",750,60);
  }
 

function keyPressed() {
  if (keyCode === 68) {

  Matter.Body.applyForce(ball,ball.position,{x:65,y:0});
  
  
}
if (keyCode === 65) {

  Matter.Body.applyForce(ball,ball.position,{x:- 65,y:0});
  
  
}
if (keyCode === 83) {

  Matter.Body.applyForce(ball,ball.position,{x:0,y:  10});
  
  
}


}

