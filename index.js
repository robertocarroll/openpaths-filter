var fs = require("fs"),
		through2 = require('through2'),
		moment = require('moment'),
		JSONStream = require('JSONStream');

var min = moment('2014-07-15 00:00:00').unix();
var max = moment('2014-08-15 00:00:00').unix();

var geojson = {};
geojson['type'] = 'FeatureCollection';
geojson['features'] = [];

var toGeojson = through2(
	{objectMode: true, encoding: 'utf8'},
	function (chunk, enc, callback) {
		if (chunk.t >= min && chunk.t <= max) {
		var data = {
        "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates":[parseFloat(chunk.lon), parseFloat(chunk.lat)]
    },
        "properties": {
          "date": chunk.t
        }
    };
    this.push(JSON.stringify(data, null, 4));
  }
    callback();
  });

toGeojson.on('data', function (data) {
    geojson['features'].push(JSON.parse(data));
  });

toGeojson.on('end', function () {
		fs.writeFile('data/processed/transformed.json', JSON.stringify(geojson, null, 4), "utf8", function (err) {
			if (err) {
				return console.log(err);
			}
		});
    console.log("Finished - " + geojson['features'].length + " points parsed");
  });

fs.createReadStream('data/raw/openpaths_robertocarroll.json', { encoding: 'utf8' })
	.pipe(JSONStream.parse('*'))
  .pipe(toGeojson);
  


