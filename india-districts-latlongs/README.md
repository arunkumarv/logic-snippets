# Lattitudes and Longitudes of the Complete Indian Districts
This data is generated from geoJSON data available at [http://projects.datameet.org/maps/](http://projects.datameet.org/maps/). A copy of which is
available [here](https://github.com/arunkumarv/logic-snippets/tree/master/geojson-states-extractor).


## To import to MySQL
Convert to csv with [json2csv](https://www.npmjs.com/package/json2csv).  
`json2csv -i  districts.json -f district,state,latitude,longitude -o districts.csv`

A test code for a mysql bulk insert, which I did for some other work is added `test.js`.
