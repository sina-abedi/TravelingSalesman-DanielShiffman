var cities = [];
var totalCities = 13; // 13! -> 6'227'020'800

var recordDistance;
var bestEver;

function setup() {
  createCanvas(800, 600);

  // create circles
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }

  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();
}

function draw() {
  background(0);
  fill(0);
  noStroke();
  textSize(12);

  fill(255);

  // show circles
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  // white lines
  stroke(255);
  strokeWeight(1);
  noFill();

  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  // purple lines
  stroke(255, 0, 255);
  strokeWeight(4);
  noFill();

  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();

  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  var sum = 0;
  for (var item = 0; item < points.length - 1; item++) {
    var d = dist(
      points[item].x,
      points[item].y,
      points[item + 1].x,
      points[item + 1].y
    );
    sum += d;
  }
  return sum;
}
