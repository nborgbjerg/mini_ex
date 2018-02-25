
// Animated throbber

var fr = 10;
var i = 0;
var count = 0;
var reverse = true;

function setup() {
  createCanvas (500, 350);
  r = random(255);
  g = random(255);
  b = random(255);
  frameRate(10); //the start frameRate is 10 fps
  setInterval(changeFrameRate, 70); //Here it runs the function changeFrameRate every 70 ms which changes the FrameRate, alas slows the smaller ellipse
}

function draw() {
background(240);
fill(200, 150);
stroke(r, g, b)
ellipse(250, 175, 50, 50);
  push();
  translate(250, 175); //moving the smaller ellipse
  rotate(radians((360/100)*count)); //the rotation itself
  fill(r, g, b, 127);
  stroke (r, g, b)
  ellipse(30, 30, 20, 20);
  pop();
  count++; //a variable that goes up every loop of draw, making the ellipse rotate
}

function changeFrameRate () {
  if(!reverse) { //if reverse is false, add 1 to the frameRate
    fr++;
  } else if(reverse) { //if reverse is true, subtract 1 from the frameRate. This makes the framerate slow down and speed up in a loop
    fr--;
  }

  if(fr >= 60) { //if the frameRate is bigger or equal to 60, make reverse true
    reverse = true;
    fr = 59;
  } else if(fr <= 10) { //if frameRate is less or equal to 10, make reverse false
    reverse = false;
    fr = 11;
  }

  frameRate(fr); //the frameRate is decided by the variable fr
}

function mousePressed() { //the function that makes the ellipse change color, every time you click the bigger ellipse
var d = dist(mouseX, mouseY, 250, 175); // making sure it is only if the mouse is inside the ellipse, that it will change color
if (d < 50) {
  r = random(255);
  g = random(255);
  b = random(255);
  }
}
