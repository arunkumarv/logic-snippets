/* Download and set path for districts-all-india.json */
/* https://github.com/arunkumarv/logic-snippets/tree/master/geojson-states-extractor */

const fs = require("fs");

const turf = require('@turf/turf');

const distinct = (value, index, self ) => {

    return self.indexOf(value) === index;
}

let center, district;

var out = [];

// Districts all India is added at https://github.com/arunkumarv/logic-snippets/tree/master/geojson-states-extractor
fs.readFile("path/to/districts-all-india.json", function (err, raw) {
    
    const obj = JSON.parse(raw);

    obj.features.forEach((element, i, arr) => {

        center = turf.center(element);

        if (element.properties.DISTRICT == "Chennai" ) console.log ( turf.area(element)/1000000 )

        out.push ({

            district: element.properties.DISTRICT, 
            
            state: element.properties.ST_NM, 
            
            latitude: center.geometry.coordinates[1],

            longitude: center.geometry.coordinates[0]
        })

        if ( i == arr.length - 1 ){

           fs.writeFile('./districts.json', JSON.stringify(out), 'utf8', function(){

                console.log ( "Done" );
            }); 

        }
    });

   
});