var textfield;
var output;

function setup() {
  noCanvas();
  textfield = select('#textfield');

  textfield.input(newTyping);

  output = select('#output');

}

function newTyping() {
  output.html(textfield.value());
}

function newText() {
  createP(textfield.value());
}
