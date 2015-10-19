var fs = require("fs"),
		through2 = require('through2'),
		moment = require('moment'),
		JSONStream = require('JSONStream'),
		turf = require('turf');

var dateFrom = '2013-07-19';
var dateTo = '2013-09-03';

var min = moment(dateFrom + ' 00:00:00').unix();
var max = moment(dateTo + ' 00:00:00').unix();

var geojson = [];

var toGeojson = through2(
	{objectMode: true, encoding: 'utf8'},
	function (chunk, enc, callback) {
		if (chunk.t >= min && chunk.t <= max) {
		var data = [parseFloat(chunk.lon), parseFloat(chunk.lat)]
		;
    this.push(JSON.stringify(data, null, 4));
  }
    callback();
  });

toGeojson.on('data', function (data) {
    geojson.push(JSON.parse(data));
  });

toGeojson.on('end', function () {
		var lineString = turf.linestring(geojson);
		var length = turf.lineDistance(lineString, 'miles');
		var curved = turf.bezier(lineString);
		fs.writeFile('map/data/geodata.json', JSON.stringify(curved, null, 4), "utf8", function (err) {
			if (err) {
				return console.log(err);
			}
		});
    console.log("Finished - " + geojson.length + " points parsed. Total distance: " + length);
  });

fs.createReadStream('data/openpaths_robertocarroll.json', { encoding: 'utf8' })
	.pipe(JSONStream.parse('*'))
  .pipe(toGeojson);



