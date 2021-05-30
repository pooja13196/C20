

var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite();   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite()
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		
	}

	if(deformation<180 && deformation>100)
	{
		
	}

	if(deformation<100)
	{
		
	}
  }  
  
  drawSprites();
 
}


