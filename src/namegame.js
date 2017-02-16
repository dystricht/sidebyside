function setup() {
  createCanvas(400, 400);
  background(51);
  loadJSON('/overlocked', gotData);
  console.log('running');
}

function gotData(data) {

  var results
  console.log(data);
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    var unit = keys[i];
    var name = data[unit]["First Name"];
    var x = random(width);
    var y = random(height);
    fill(255);


    console.log("Name is " + name);
    text(name, x, y);

    textfield = select('#textfield');

  }
}
