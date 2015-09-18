//Thanks to http://mapsam.com/posts/looping-geojson/

var data = [
    {
        "lon": -1.8064770698547363, 
        "lat": 53.562141418457031, 
        "version": "1.0", 
        "t": 1334960896, 
        "device": "iPhone3,1", 
        "alt": 226.77879333496094, 
        "os": "5.1"
    }, 
    {
        "lon": -1.8064770698547363, 
        "lat": 53.562141418457031, 
        "version": "1.1", 
        "t": 1334960896, 
        "device": "iPhone3,1", 
        "alt": 226.77879333496094, 
        "os": "5.1"
    }
];

var geojson = {};
geojson['type'] = 'FeatureCollection';
geojson['features'] = [];
 
for (var k in data) {
  var newFeature = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates":[parseFloat(data[k].lon), parseFloat(data[k].lat)]
    },
        "properties": {
          "date": data[k].t
        }
  }
  geojson['features'].push(newFeature);
}

console.log(JSON.stringify(geojson, null, 2)); 