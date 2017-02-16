var canvas;
var button;
var p;
var slider;
var bgcolor;
var ccolor;

var units;
var unit;
var card;
var position;
var database;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(100);
  button = createButton("Please Click");
  button.mousePressed(nextCustomer);
  p = createP();
  slider = createSlider(10, 300, 47);
  loadJSON('/overlocked', gotData);
  console.log('running');
  position = 0;
}

function nextCustomer(){
  if(position >= units.length){
    position = 0;
    unit = units[position];
  } else {
    unit = units[position];
  }

  //p.html(database[unit]["First Name"]);
  printCard(database[unit]);

  //console.log("This is " + database[unit]["First Name"]);
  position++;
}

function gotData(data) {

  database = data;

  //console.log(data);
  units = Object.keys(data);
  unit = units[position];
  printCard(database[unit]);
  position++;
}

function draw() {
  background(bgcolor);
  ccolor = color(120, slider.value() * 2, slider.value() * 0.5);
  fill(ccolor);
  ellipse(200, 200, slider.value(), slider.value());
}

function printCard(thisUnit){
  p.html("Name: " + thisUnit["First Name"] + " " + thisUnit["Last Name"] +
    "<br>Unit Number: " + thisUnit["Room"]);
}
