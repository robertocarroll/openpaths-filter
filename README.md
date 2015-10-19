OpenPaths parser
Getting OpenPaths data into a good format and doing stuff with it.

## Process
1. Put raw Openpaths data in data folder
2. Set dateFrom and dateTo
2. Run node line.js
3. Output goes into map/data and distance logged in miles in console
4. map/index.html will load the processed data

## Roadmap

1. Upload csv
2. Filter by date range
3. transform to geojson
4. display in d3 - lines, heatmap, etc
- http://blog.crisis.net/choropleth-maps-with-node-js-and-d3-part-2/
- http://davewood.me/blog/2014/04/09/drawing-a-world-map-with-d3/
- http://bost.ocks.org/mike/map/
- http://blog.stapps.io/using-d3-both-on-the-front-end-and-server/
- http://www.pyktech.com/blog/150/
- http://bl.ocks.org/rveciana/8463775
- https://github.com/mbostock/d3/wiki/Geo-Paths
- Zoom to bounding box: http://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object
- http://stackoverflow.com/questions/18493505/straight-lines-on-map-in-d3-js
- This is interesting but I don't understand it: http://stackoverflow.com/questions/21553811/coordinate-trigonometry-calculate-midpoint-in-arc-for-flightpath
- https://www.mapbox.com/guides/intro-to-turf/
- Curve the straight line:
http://turfjs.org/static/docs/module-turf_bezier.html
- http://bl.ocks.org/mbostock/5851933
- https://www.flickr.com/photos/stml/sets/72157626910523719
- Urban Impressions

5. Take screenshot and save image

Couple of good examples of streams:
- http://stackoverflow.com/questions/28032934/node-js-how-to-write-on-write-stream-finish-event
- https://github.com/rvagg/through2/issues/34

