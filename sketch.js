const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    sprite1= new sprites(600,200,50,50);
    sprite2= new sprites(400,200,100,30);
    sprite3= new sprites2(700,100,20,200);
    sprite4= new sprites2(200,100,70,70);
    



}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    sprite1.display();
    sprite2.display();
    sprite3.display();
    sprite4.display();



    
 
}