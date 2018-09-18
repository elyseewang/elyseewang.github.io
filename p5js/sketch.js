var canvas;

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}

function setup() { 
canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
	rectMode(CENTER);
    
} 

function draw() { 
  background(255);
  noStroke();
  fill(0,255,0, 125);
  push();
  translate(width/10, height/10)
  rotate(frameCount / -100.00);
  polygon(0,0,width/115,3);
  pop();
  ellipse(width/10,height*0.8,width/45,width/45);
  ellipse(width/1.2,height/25,width/65,width/65);
 
  
 
  fill(100,230,255, 125)
  rect(50,250,30,10);
	triangle(width/1.5,height/1.4, width/1.51,height/1.45, width/1.52,height/1.4);
  rect(width/1.1, height/6, width/15, width/45);
    ellipse(width/1.1, height/0.5, width/30, width/30);
  
  noStroke();
  fill(255,255,0, 125);
  push();
  translate(width/3, height/1.2);
  rotate(frameCount / -100.0);
  rect(0,0, width/40,width/40);
  pop();
    ellipse(width/1.5, height/1.2, width/30,width/30)
  
  noStroke();
  fill(255,255,0,125);
  ellipse(width*0.9, height*0.5, width/50,width/50);
  
  //polygon adapted from: https://p5js.org/examples/form-regular-polygon.html
  stroke(255,100,230, 125);
  noStroke();
  fill(255,100,230,125);

  
  push();
  translate(width*0.6, height*0.3);
  rotate(frameCount / -100.0);
  polygon(0, 0, width/15, 5); 
  pop();
  
  
}
//polygon function adapted from: https://p5js.org/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
