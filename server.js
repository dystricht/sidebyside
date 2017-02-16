var path = require("path");
var __dir = "/home/dillon/p5-projects/webtests";
node_xj = require("xls-to-json");
node_xj({
  input: path.dirname() + "/WalkAround.xls", // input xls
  //output: path.dirname() + "/website/units.json", // output json
  output: null,
  sheet: "WalkAround"  // specific sheetname
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    //console.log(result);
  }
});

var fs = require('fs');
var data = fs.readFileSync('units.json');
//var data = node_xj.output;
//var units = JSON.parse(data);
var units = JSON.parse(data);
//console.log(units);
////var customers = XLSX.readFile(WalkAround.xls);

console.log("server is starting");

var express = require('express');

var app = express();

var card = express();

var server = app.listen(3000, listening);

function listening() {
  console.log("listening. . . ");
}

app.use(express.static('src'));

app.get('/', mainPage);

function mainPage(req, response) {

  response.send('Main Page');
}

app.get('/search/:flower', sendFlower);

function sendFlower(request, response) {
  var data = request.params;
  response.send("I love " + data.flower + " too");
}

app.get('/all', sendAll);
function sendAll(request, response) {
  response.send(units);
}

app.get('/overlocked', sendOverlocked);
function sendOverlocked(request, response) {

  var results = [];
  var searchField = "Status";
  var searchVal = "DEL";
  for (var i=0 ; i < units.length ; i++){
    if (units[i][searchField] == searchVal) {
      results.push(units[i]);
    }
  }
  response.send(results);
}

app.get('/cleaning', sendMessy);
function sendMessy(request, response) {

  var results = [];
  var searchField = "Status";
  var searchVal = "NC";
  for (var i=0 ; i < units.length ; i++){
    if (units[i][searchField] == searchVal) {
      results.push(units[i]);
    }
  }
  response.send(results);
}
