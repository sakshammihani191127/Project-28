
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeImg,bgImg;
var boy,boyImg;
var stone,sling;
function preload(){
 
  bgImg=loadImage("bg.jpg");
 boyImg=loadImage("mister.png");
 treeImg=loadImage("tree1000.jpg");
}
function setup() {
 createCanvas(1300, 700);
 engine = Engine.create();
 world = engine.world;
 boy=createSprite(250, 525, 100,100);
 boy.addImage(boyImg);
 boy.scale=0.5;
 tree=createSprite(1000, 380, 100,100);
 tree.addImage(treeImg);
 tree.scale=0.8;

 stone=new Stone(150,550,50);
 sling=new SlingShot(stone.body,{x:200,y:200});
 Engine.run(engine);
}
function draw() {
 rectMode(CENTER);
 background(bgImg);
 Engine.update(engine);
 stone.display();
 sling.display();
 //mouseDragged();
 //mouseReleased();
 //keyPressed();
 drawSprites(); 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   }
   function mouseReleased(){
    sling.fly();
   }
   //function keyPressed(){
     //  if(keyCode===32){
       // Matter.Body.setPosition(stone.body,{x:200,y:200});   
       //}
       //sling.attach(stone.body);
      //}



