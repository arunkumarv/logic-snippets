let latMax = 27.398804; 
let lngMax = 82.978247;
let latMin = 17.527627;
let lngMin = 73.215997;

let count = 0;

let data = [];

function random ( min, max ) {
    var precision = 10000000; 
    return Math.floor ( Math.random () * ( max * precision - min * precision ) + min * precision ) / ( 1 * precision );    
}

while ( count++ < 30 ) {
    data.push ({lat: random (latMin, latMax), lng: random(lngMin, lngMax), count: Math.floor(Math.random() * 200) + 1 })
    console.log ( count );
}

require ('fs').writeFile ('./data.js', JSON.stringify(data), function (){})