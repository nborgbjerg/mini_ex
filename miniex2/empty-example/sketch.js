var img;
var s1 = false;
var s2 = false;
var s3 = false;
function preload() {
  img = loadImage ('pixelstar.png');
}

function setup() {
  createCanvas (600, 300);
  cursor(ARROW);
  frameRate(27);
}

function draw() {
  background(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
  image(img, 50, 220, 60, 60);
  image(img, 270, 220, 60, 60);
  image(img, 490, 220, 60, 60);
  textSize(20);
  fill(255);
  noStroke();
  text('Click the stars!', 15, 30);
  var s = 'and click again to make it disappear' ;
  textSize(15);
  fill(255);
  noStroke();
  text(s, 15, 40, 100, 100);
  if(s1) {
//karlsvognen stjerner
    noStroke();
    fill(255);
    ellipse(150, 51, 7, 7);
    noStroke();
    fill(255);
    ellipse(210, 47, 10, 10);
    noStroke();
    fill(255);
    ellipse(248, 71, 7, 7);
    noStroke();
    fill(255);
    ellipse(284, 97, 7, 7);
    noStroke();
    fill(255);
    ellipse(296, 146, 7, 7);
    noStroke();
    fill(255);
    ellipse(384, 152, 5, 5);
    noStroke();
    fill(255);
    ellipse(400, 96, 11, 11);
  // karlsvognen - linjer
    stroke(255);
    strokeWeight(2);
    line(150, 51, 210, 47);
    stroke(255);
    strokeWeight(2);
    line(210, 47, 248, 71);
    stroke(255);
    strokeWeight(2);
    line(248, 71, 284, 97);
    stroke(255);
    strokeWeight(2);
    line(284, 97, 296, 146);
    stroke(255);
    strokeWeight(2);
    line(296, 146, 384, 152);
    stroke(255);
    strokeWeight(2);
    line(384, 152, 400, 96);
    stroke(255);
    strokeWeight(2);
    line(400, 96, 284, 97);

    textSize(20);
    fill(255);
    noStroke();
    text('Big Dipper', 40, 210);
  }
  if(s2) {
  // cassiopeia - stjerner
      noStroke();
      fill(255);
      ellipse(210, 58, 7, 7);
      noStroke();
      fill(255);
      ellipse(249, 112, 7, 7);
      noStroke();
      fill(255);
      ellipse(311, 104, 9, 9);
      noStroke();
      fill(255);
      ellipse(346, 152, 7, 7);
      noStroke();
      fill(255);
      ellipse(403, 112, 8, 8);
  // cassiopeia - linjer
      stroke(255);
      strokeWeight(2);
      line(210, 58, 249, 112);
      stroke(255);
      strokeWeight(2);
      line(249, 112, 311, 104);
      stroke(255);
      strokeWeight(2);
      line(311, 104, 346, 152);
      stroke(255);
      strokeWeight(2);
      line(346, 152, 403, 112);

      textSize(20);
      fill(255);
      noStroke();
      text('Cassiopeia', 255, 210);
    }
    if(s3) {
      //cygnus - stjerner
      noStroke();
      fill(255);
      ellipse(324, 24, 7, 7);
      noStroke();
      fill(255);
      ellipse(334, 60, 7, 7);
      noStroke();
      fill(255);
      ellipse(312, 108, 8, 8);
      noStroke();
      fill(255);
      ellipse(312, 157, 7, 7);
      noStroke();
      fill(255);
      ellipse(289, 185, 6, 6);
      noStroke();
      fill(255);
      ellipse(432, 124, 8, 8);
      noStroke();
      fill(255);
      ellipse(248, 94, 11, 11);
      //cygnus - linjer
      stroke(255);
      strokeWeight(2);
      line(324, 24, 334, 60);
      stroke(255);
      strokeWeight(2);
      line(334, 60, 312, 108);
      stroke(255);
      strokeWeight(2);
      line(312, 108, 312, 157);
      stroke(255);
      strokeWeight(2);
      line(312, 157, 289, 185);
      stroke(255);
      strokeWeight(2);
      line(312, 108, 432, 124);
      stroke(255);
      strokeWeight(2);
      line(312, 108, 248, 94);

      textSize(20);
      fill(255);
      noStroke();
      text('Cygnus', 490, 210);
    }
}
function mouseClicked() {
  if(mouseX>50 && mouseX < 110 &&mouseY >220 &&mouseY<280) {
    s1 =!s1;
  }
  if(mouseX>270 && mouseX < 330 &&mouseY > 220 && mouseY<280) {
    s2 =!s2;
  }
  if(mouseX>490 && mouseX < 550 &&mouseY>220 && mouseY<280) {
    s3 =!s3;
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);
}
