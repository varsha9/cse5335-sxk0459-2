var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://bwlfpbuceahrcc:d9ovRGxSKP2k5vE6B9sko_AncH@ec2-107-21-219-235.compute-1.amazonaws.com:5432/d89qomq57r5vei?ssl=true';
var client = new pg.Client(connectionString);
client.connect();
fs = require('fs')
fs.readFile('./Customercomp.csv', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    var arr = data.split("\n");
    for(var i = 0; i < arr.length; i++){
        var arr1 = arr[i].split(",")
        console.log(arr1);
    }
});


var query = client.query('CREATE TABLE complaint (id SERIAL PRIMARY KEY, date VARCHAR(40) ,issue VARCHAR(100),company VARCHAR(40) ,state VARCHAR(40) , zip VARCHAR(40) ,cid VARCHAR(40) not null )');
// var query = client.query("INSERT INTO items(text, complete) values($1, $2)", [i,a data.complete]);

query.on('row', function(row) {
    results.push(row);
});
