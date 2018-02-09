var img;
function preload() {
  img = loadImage('smileys.png')
}

var value;
function setup() {
  createCanvas (300, 300);
  value = color('#fae');
}

var pos = 50;
var posX = 125;
function draw() {
  background(150, 55, 100);
  fill (value);
  noStroke();
  rect (pos, 100, 200, 50);
  textSize(20);
  text('programming is fun', 68, posX);
  image(img, 120, 100, 50, 50);
  tint(255, 126);
}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;
  posX += event.delta;
}
