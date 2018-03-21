var noun =[];
var verb =[];
var adjective = [];
var pronoun = [];

var n1 = "bird";
var n2 = "grave";
var n3 = "Raven";
var n4 = "Nightly shore";
var n5 = "Night";

var a1 = "ebony";
var a2 = "sad";
var a3 = "stern";
var a4 = "ancient";
var a5 = "lordly";

var v1 = "shorn";
var v2 = "shaven";
var v3 = "craven";
var v4 = "wandering";

var p1 = "it";
var p2 = "I";
var p3 = "me";

var clouds;
var raven;


function preload() {
raven = loadSound('raven.mp3');
clouds = createVideo(['clouds.mp4']);
clouds.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  noun = ["bird", "grave", "raven", "Nightly shore", "bleak December", "ember", "ghost", "floor", "morrow", "books", "sorrow", "angels", "midnight", "lore", "chamber door", "curtain", "terrors", "heart", "entrance", "tapping"];
  verb = ["shorn", "shaven", "craven", "wandering", "remember", "wrought", "wished", "borrow", "pondered", "nodded", "napping", "tapping", "thrilled", "filled", "stood repeating"];
  adjective = ["dreary", "weak", "weary", "forgotton", "gently", "silken", "sad", "uncertain", "rustling", "purple", "fantastic", "still", "ebony", "stern", "ancient", "lordly", "plutonian", "distinctly", "dying", "eagerly", "vainly", "nameless"];
  pronoun = ["it", "I", "me", "the lost Lenore", "the rare and radiant maiden", "someone", "some visitor", "some late visitor"];

clouds.loop();
raven.play();
raven.loop();

}

function draw() {
  background(80);

  tint(220, 150);
  image(clouds, 0, 0);
  filter(GRAY);
  filter(INVERT);

  fill(255);
  textAlign(CENTER);
  textSize(20);
  textFont("courier");
  text("Then this " + a1 + " " + n1 + " beguiling my "+ a2 + " fancy into smiling,\nBy the " + n2 + " and " + a3 + " decorum of the countenance "+ p1 + " wore,\n›Though thy crest be " + v1 + " and " + v2 +", thou,‹ " + p2 + " said, ›art sure no " + v3 + ",\nGhastly grim and " + a4 + " " + n3
  +  " " + v4 + " from the " + n4 + "\nTell " + p3 + " what thy " + a5 + " name is on the " + n5 + "'s Plutonian shore!‹\nQuoth the " + n3 + " ›Nevermore.‹", windowWidth/2,windowHeight/2-100);
  textSize(32);
  text("The " + n3, windowWidth/2, windowHeight/2-200);
}

function mousePressed() {
  n1 = random(noun);
  n2 = random(noun);
  n3 = random(noun);
  n4 = random(noun);
  n5 = random(noun);

  v1 = random(verb);
  v2 = random(verb);
  v3 = random(verb);
  v4 = random(verb);

  a1 = random(adjective);
  a2 = random(adjective);
  a3 = random(adjective);
  a4 = random(adjective);
  a5 = random(adjective);

  p1 = random(pronoun);
  p2 = random(pronoun);
  p3 = random(pronoun);

}
