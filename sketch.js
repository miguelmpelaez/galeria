//The setup function only happens once
var diam1=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(mouseX,random(30,0),3);
}

//The draw function happens over and over again
function draw() {
 //an RGB color for the canvas' background
  //circle
  stroke(378,255,300); // an RGB color for the circle's border
  fill(250,40,340,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(200,200,350,350); // center of canvas, 20px dia
  
  stroke(378,255,300); 
  fill(250,40,340,150); 
  ellipse(200,200,250,350);

  fill(179,144,62);
  stroke(50,257,50,diam1);
  ellipse(100,223,80,80);
  rect(random(width),random(height),25,25);
  
  triangle (250,80,145,20,185,400);
  fill (150, 164, 79, 1);
  
  fill(300);
  textFont('Helvetica');
  textSize(30);
  textStyle(ITALIC);
  text('poetry makes its way',125,250);
}

function mousePressed(){
  if (diam1>=100){
  diam1=0;
  }else{
    diam1-diam1+1;
}
}