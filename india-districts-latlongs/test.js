const fs = require("fs");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tab#8Bc:",
    database: "cdac"
});

connection.connect();

var records = [];

var sql = "INSERT INTO covid (state, district, active, confirmed, deceased, recovered, delta_confirmed, delta_deceased, delta_recovered) VALUES ?";

fs.readFile("./data/state_district_wise.json", function (err, raw) {

    const data = JSON.parse(raw);

    data.forEach((se, si, sa) => {

        se.districtData.forEach((de, di, da) => {

            records.push([se.state, de.district, de.active, de.confirmed, de.deceased, de.recovered, de.delta.confirmed, de.delta.deceased, de.delta.recovered])

            if (di == da.length - 1) {

                 
            }
        });

        if (si == sa.length - 1) {

            var query = connection.query(sql, [records], function(err, result) {

                console.log(result);
            });
             
            // connection.end();
        }
    });
});