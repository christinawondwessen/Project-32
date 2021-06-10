var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var score=0;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  //text(score, 170,20);
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles.x<=90 && particles.y===490){
     score=score+100;
   }

   if(particles.x<=170 && particles.y===490){
    score=score+50;
  }

  if(particles.x<=250 && particles.y===490){
    score=score+150;
  }

  if(particles.x<=330 && particles.y===490){
    score=score+100;
  }

  if(particles.x<=410|| particles.y===490){
    score=score+200;
  }

  if(particles.x<=490 && particles.y===490){
    score=score+150;
  }

  if(particles.x<=570 && particles.y===490){
    score=score+250;
  }

  if(particles.x<=650 && particles.y===490){
    score=score+100;
  }

  if(particles.x<=730 && particles.y===490){
    score=score+100;
  }

  if(particles.x<=630|| particles.y===490){
    score=score+50;
  }
}