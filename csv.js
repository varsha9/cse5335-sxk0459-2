var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://bwlfpbuceahrcc:d9ovRGxSKP2k5vE6B9sko_AncH@ec2-107-21-219-235.compute-1.amazonaws.com:5432/d89qomq57r5vei?ssl=true';
var client = new pg.Client(connectionString);
client.connect();
fs = require('fs')
fs.readFile('./Customercomp.csv', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    var arr = data.split("\n");
    console.log([arr]);
    for(var i = 0; i < arr.length; i++){
        var arr1 = arr[i].split(",")
     //   console.log(arr1[1]);
     //   var query = client.query("INSERT INTO complaint (date, issue, company, state, zip, cid) values($1, $2, $3, $4, $5, $6)", [i,arr1[1],arr1[2],arr1[3],arr1[4],arr1[5],arr1[6]]);
    }
});


var query = client.query('CREATE TABLE com (id SERIAL PRIMARY KEY, date VARCHAR(40) ,issue VARCHAR(100),company VARCHAR(40) ,state VARCHAR(40) , zip VARCHAR(40) ,cid VARCHAR(40) not null )');
// var query = client.query("INSERT INTO complaint (date, issue, company, state, zip, cid) values($1, $2, $3, $4, $5, $6)", [i,arr1[1],arr1[2],arr1[3],arr1[4],arr1[5],arr1[6]]);

query.on('row', function(row) {
    results.push(row);
});
