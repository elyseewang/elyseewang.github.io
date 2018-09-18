var move = 25;
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
  fill(255,100,100);
  push();
  translate(width/10, height/10);
  rotate(frameCount/ move);
  polygon(0,0,width/40,3);
  pop();
  
  push();
  translate(width/1.1, height/1.1);
  rotate(frameCount/ -move);
  polygon(0,0,width/40,4);
  pop();
  
  
  fill(200,255,200);
  push();
  translate(width/10, height/2);
  rotate(frameCount/ -move);
  polygon(0,0,width/40,6);
  pop();

  push();
  translate(width/1.1, height/10);
  rotate(frameCount/ move);
  polygon(0,0,width/40,3);
  pop();
  
  fill(255,255,153);
  push();
  translate(width/10, height/1.1);
  rotate(frameCount/ -move);
  polygon(0,0,width/40,4);
  pop();
  
  push();
  translate(width/1.1, height/2);
  rotate(frameCount/ -move);
  polygon(0,0,width/40,6);
  pop();

  
}

function mouseWheel(event) {
  print(event.delta);
  move = event.delta - 40;
  
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
		function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}
