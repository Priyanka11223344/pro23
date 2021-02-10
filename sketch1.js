const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var helicopter,heliImg;
var package,packageImg;
var rect1,rect2,rect3;

function preload(){
heliImg = loadImage("helicopter.png");
packageImg = loadImage("package.png");
}

function setup(){
    createCanvas(800,700);
   engine = Engine.create();
    world = engine.world;
    package = createSprite(400,100,20,20);
    package.addImage(packageImg);
    package.scale = 0.2;
helicopter = createSprite(400,100,20,20);
//helicopter = Bodies.rectangle(400,100,20,20,options);
//World.add(world,helicopter);
helicopter.addImage(heliImg);
helicopter.scale = 0.5;
var options = {
     isStatic:false,restitution:1
 }
 rect1 = createSprite(290,600,10,192);
 rect1.shapeColor = "red";

 rect2 = createSprite(380,690,192,10);
 rect2.shapeColor = "red";

 rect3 = createSprite(480,600,10,192);
 rect3.shapeColor = "red";


//package = Bodies.rectangle(400,80,10,10,options);
//package.addImage(packageImg);
//World.add(world,package);
//package.position.x = helicopter.x;

Engine.run(engine);
}

function draw(){
    background(0);
Engine.update(engine);
package.collide(rect2);
//imageMode(CENTER);
//image(package.image,package.position.x,package.position.y,20,20);
bounce();
drawSprites();
}

function bounce(){
    if(keyCode === RIGHT_ARROW){
        helicopter.velocityX = 5;
    }
    if(keyCode === LEFT_ARROW){
        helicopter.velocityX = -5;
    }

    if(keyCode === DOWN_ARROW){
        package.velocityY = 5;
    }
}
