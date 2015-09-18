var fs = require("fs");
var through = require('through2');
var Converter = require("csvtojson").Converter;
var fileStream = fs.createReadStream("./data/raw/openpaths_robertocarroll.csv");

var param={};
var convert = new Converter(param);

//end_parsed will be emitted once parsing finished
convert.on("end_parsed", function (jsonObj) {
   console.log(jsonObj); //here is your result json object
});

fileStream.pipe(convert);