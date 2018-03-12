var clouds = [];
var cImg;
var bgClouds = [0, 1, 2, 3, 4];
var rose;
var droplet;
var drops;
var f = 1;
var button;

function preload() {
 cImg = loadImage("cloud.png"); //Preload of the drawing of the cloud
 wImg = loadImage("withered.png"); //Preload of the withered rose
}

function setup () {
  createCanvas(1200, 800);
  //This is where I set up the five moving clouds in the foreground. I use a for loop to create the five of them, set them in a line and make them a random height
  for (var i = 0; i < 5; i++) {
    var x = 1 + 250 * i;
    var y = random(10, 40)
    var cH = random(140, 240);
    clouds[i] = new Cloudy(x, y, 240, cH); //I use the class Cloudy to modify the foreground clouds
  }

  //Here I create the Try Again button to reset the game
  button = createButton('try again?');
  button.position(570, 450);
  button.size(80, 40);
  button.mousePressed(refresh); //custom function that re-runs setup
  button.hide();

  drops = new Group() //for some reason the only way i could get the drops to reposition, was to put them in a group. This was also to be able to move them around without moving the rose, since they are both sprites.

  droplet = createSprite(random(width), 240); //creation of the drop sprite
  droplet.addAnimation("normal", "colordrop01.png", "colordrop06.png");
  frameDelay = 3; //instead of changing the framerate I just put a delay in the animation, so it would affect the smoothness of the rest of the program
  droplet.velocity.y = 8; //the speed of the drop falling
  drops.add(droplet); //adding to group

  rose = createSprite(400, 700); //creation of the Rose sprite
  rose.addAnimation("colors", "rose01.png", "rose06.png")
  rose.animation.stop(); //Freezing the animation so it is static
  noCursor();
}

function draw () {

  background(240, 150, 200);
  //I use a for loop to create the background Clouds, which is formed by an array
  for (var c = 0; c < bgClouds.length; c++) {
    var xBg = -50 + 400 * c;
    tint(255, 155); //I couldn't get the alpha value to work, so I put a white tint over them instead
    bgClouds[c] = image(cImg, xBg, -20, 500, 300);
  }

  tint(255, 250); //here I set the tint back to normal, because it didn't work with push/pop
  //A for loop to make ALL the foreground clouds move and show up
  for (var i = 0; i < clouds.length; i++) {
  clouds[i].moveC();
  clouds[i].displayC();
  }

  Clouds(); //custom functions
  colorChange();
  rose.velocity.x = (mouseX-rose.position.x)/5 //The speed of the rose. I put a slight delay in it, to make it 'flow' a bit more

  if (droplet.position.y > height) { //This is the "GAME OVER" - if the drop does not overlap with the rose, the game ends
    rose.visible = false;
    textSize(50);
    text('YOUR ROSE DIED', 390, 400);
    button.show();
    cursor(ARROW);
    image(wImg, 520, 550);
  }
  drawSprites();
}

class Cloudy { //Pretty simple, my class consists of different values for the clouds, a simple method and the image
  constructor (xC, yC, cWidth, cHeight) {
  this.xC = xC;
  this.yC = yC;
  this.cWidth = cWidth;
  this.cHeight = cHeight;
  this.speed = 3;
  }

 moveC () {
  this.xC = this.xC + this.speed
  }
  displayC () {
    image(cImg, this.xC, this.yC, this.cWidth, this.cHeight);
  }
}

function Clouds() {
  //The function that makes the foreground clouds move forward and backwards
  if (clouds[clouds.length-1].xC >= width-170) {
    for(var i = 0; i < clouds.length; i++) {
      clouds[i].speed = -3;
      }
    }

     if (clouds[0].xC <= -30) {
    for(var i = 0; i < clouds.length; i++) {
      clouds[i].speed = 3;
  }
  }
}

function colorChange() {
  if(rose.overlap(drops)) {
    f++; //the framenumber goes up by one for every time a drop is caught
    if (f == 6) { //if it surpasses the final color, it resets
      f = 0;
    }

    rose.animation.changeFrame(f);
    droplet.position.x = random(width); //the drop resets to its start position when caught
    droplet.position.y = 240;
    return true;
  }
}

function refresh () { //for when presseng "try again"
  button.hide();
  setup();
}
