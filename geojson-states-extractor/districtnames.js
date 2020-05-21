const fs = require ('fs')
const states = [
    "Ladakh",
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

let rawdata = fs.readFileSync('districts-all-india.json');
let obj = JSON.parse(rawdata);
let gbreduce = (xs, f) => xs.reduce ( (r, v, i, a, k = f(v) ) => ( (r[k] || (r[k] = []) ).push (v), r), {});

var data1 = obj.features.map ( ele => ({ state: ele.properties.ST_NM, district: ele.properties.DISTRICT }))



let data2 = gbreduce(data1, (c) => c.state);
// console.log ( data2 )
let data3 = {}
for ( let key in data2 ){
    // console.log ( key )
    data3[key] = data2[key].map ( ele => ele.district )
}

console.log ( data3 );

fs.writeFile('states_districts.json', JSON.stringify(data3), 'utf8', function(){

});