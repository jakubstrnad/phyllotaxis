var n = 0;
var c = 4;

var angles = ["137.3", "137.5", "137.6"];
var angle;
var col;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
  angle = float(random(angles));
  col = random(["a", "n"]);
  print(angle);
  print(col);
}

function draw() {
  var a = n * angle;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;

  if(col == "a")
	fill(a % 256, 255, 255);
  else
    fill(n % 256, 255, 255);

  noStroke();
  ellipse(x, y, 4, 4);

  n++;
}