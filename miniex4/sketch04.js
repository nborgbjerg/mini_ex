var capture;
var threshold;
var mic;
var alpha;
var rec = true;

function setup() {
createCanvas (380, 320);
capture = createCapture(VIDEO);
capture.hide(); //This hides the actual capture, that would otherwise be on top of the blurred version
mic = new p5.AudioIn();
mic.start();
setInterval(recording, 500); //the 'REC' flashes ever 0.5 second
}

function draw() {
background(100);
var vol = mic.getLevel();
image(capture, 30, 30, 320, 240);
filter(BLUR, threshold);
volume = map(vol, 0, 1, 0, 100); //this makes the volume range a bit larger, making it easier to unblur
threshold = map(volume, 0, 100, 5, 0); //maps the volume range to the blur range (0-100 into 5-0)
textSize(20);
noStroke();
fill(255, alpha);
text('REC', 170, 300);
ellipse(160, 293, 10, 10);
  push(); //the lines around the capture
  stroke(255);
  strokeWeight(3);
  line(15, 20, 15, 50);
  line(15, 20, 50, 20);
  line(365, 20, 330, 20);
  line(365, 20, 365, 50);
  line(15, 280, 15, 250);
  line(15, 280, 50, 280);
  line(365, 280, 365, 250);
  line(365, 280, 330, 280);
  pop();
}

function recording() { //the flashing animation
  if (rec) {
    alpha = 0;
  } else if (!rec) {
    alpha = 200;
  }

  if (rec) {
    rec = false;
  } else if (!rec) {
    rec = true;
  }
}
