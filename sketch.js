const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    TowerBase = new Ground(400,250,100,20);

    stone = new Rock(200,200);

    brick1 = new Tower(410,240,20,20);
    brick2 = new Tower(430,240,20,20);
    brick3 = new Tower(450,240,20,20);
    brick4 = new Tower(470,240,20,20);
    brick5 = new Tower(490,240,20,20);

    brick11 = new Tower(420,220,20,20);
    brick12 = new Tower(440,220,20,20);
    brick13 = new Tower(460,220,20,20);
    brick15 = new Tower(480,220,20,20);

    brick21 = new Tower(430,200,20,20);
    brick22 = new Tower(450,200,20,20);
    brick23 = new Tower(470,200,20,20);
    
    brick31 = new Tower(440,180,20,20);
    brick32 = new Tower(460,180,20,20);

    brick41 = new Tower(450,160,20,20);

    catapult = new Catapult(stone,{x:200,y:180})
     






    
}

function draw(){
    background(0);
    Engine.update(engine);

    TowerBase.display();
    stone.display();

    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick11.display();
    brick12.display();
    brick13.display();
    brick14.display();
    brick21.display();
    brick22.display();
    brick23.display();
    brick31.display();
    brick32.display();
    brick41.display();

    catapult.display();
        
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}