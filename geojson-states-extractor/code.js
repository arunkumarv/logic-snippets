//'use strict';
//Extract geojson for states from india geojson

const fs = require('fs');

const states = [
   /*  "Ladakh" */
    "Andaman & Nicobar Island",
    "Andhra Pradesh",
    "Arunanchal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadara & Nagar Havelli",
    "Daman & Diu",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "NCT of Delhi",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal"
];
out = {
    "type": "FeatureCollection",
    "features": []
}

let rawdata = fs.readFileSync('districts-all-india.json');
let obj = JSON.parse(rawdata);

const forLoop = async _ => {

    for (let i = 0; i < states.length; i++) {
        out = {
            "type": "FeatureCollection",
            "features": []
        }
        state = states[i];

        obj.features.forEach(o => {

            //change name here
            if (o.properties.ST_NM == state) {

                out.features.push(o);
            }
        });


        // change name here
        await fs.writeFile('./geojson/' + processName(state) + '.json', JSON.stringify(out), 'utf8', function(){});
    }
}

forLoop();


function processName(state) {

    return state.replace(/[^a-zA-Z ]/g, "").replace(/ /g,'');

}
